import transform from 'lodash/transform';
import get from 'lodash/get';
import omit from 'lodash/omit';
import isPlainObject from 'lodash/isPlainObject';
import {isEmpty, uniqueId} from "lodash";

export const transformSchemaToList = ({properties, required}) => Object.keys(properties).map((key) => {
    const id = uniqueId(key);
    const temp = {
        name: key,
        description: properties[key].description,
        type: properties[key].type,
        format: properties[key]?.format,
        example: properties[key]?.example,
        id,
        required: !!(required || []).includes(key),
    };
    if (properties[key].type === "object" && properties[key]?.properties) {
        return Object.assign({}, temp, {
            children: transformSchemaToList({
                properties: properties[key]?.properties, required: properties[key]?.required || [],
            }),
        });
    } else if (properties[key].type === "array" && !isEmpty(properties[key].items)) {
        return Object.assign({}, temp, {
            children: transformSchemaToList({
                properties: properties[key].items?.properties, required: properties[key].items?.required || [],
            }),
        });
    } else {
        temp.key = id;
    }

    return temp;
});

export const transformSchemaComponents = (target, originData) => {
    if (isPlainObject(target) && target.hasOwnProperty('schema') && target.schema.hasOwnProperty('$ref')) {
        const schemaPath = target.schema.$ref.replace(/^#\//, '').split('/');
        return {schema: transformSchemaComponents(get(originData, schemaPath), originData)};
    }

    if (isPlainObject(target)) {
        return transform(target, (res, value, key) => {
            res[key] = transformSchemaComponents(value, originData);
        }, {});
    }

    if (Array.isArray(target)) {
        return target.map((item) => transformSchemaComponents(item, originData));
    }

    return target;
};

const parseOpenApiData = (inputData) => {
    return {
        info: get(inputData, 'info', {}),
        servers: get(inputData, 'servers', {}),
        openapi: get(inputData, 'openapi'),
        paths: transform(inputData.paths, (res, value, key) => {
            res[key] = transform(transformSchemaComponents(value, inputData), (innerRes, innerValue, innerKey) => {
                innerRes[innerKey] = {
                    summary: get(innerValue, 'summary', ''),
                    deprecated: get(innerValue, 'deprecated', false),
                    description: get(innerValue, 'description', ''),
                    tags: get(innerValue, 'tags', []),
                    operationId: get(innerValue, 'operationId', ''),
                    query: transform(get(innerValue, 'parameters', []), (res, value) => {
                        if (get(value, 'in') === 'query') {
                            res.push(omit(value, ['in']));
                        }
                    }, []),
                    headers: transform(get(innerValue, 'parameters', []), (res, value) => {
                        if (get(value, 'in') === 'header') {
                            res.push(omit(value, ['in']));
                        }
                    }, []),
                    requestBody: transform(get(innerValue, 'requestBody.content'), (res, value, key) => {
                        res.push(Object.assign({}, value, {
                            'content-type': key
                        }));
                    }, []),
                    responses: transform(get(innerValue, 'responses'), (res, value, key) => {
                        res.push(Object.assign({}, {
                            content: transform(get(value, 'content', {}), (res, value, key) => {
                                res.push(Object.assign({}, value, {type: key}));
                            }, [])
                        }, {statusCode: key, description: get(value, 'description', '')}));
                    }, [])
                };
            }, {});
        }, {})
    };
};

export default parseOpenApiData;
