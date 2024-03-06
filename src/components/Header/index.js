import { Breadcrumb, Col, Layout, Row, Space } from "antd";
import { createWithRemoteLoader } from "@kne/remote-loader";
import style from "./style.module.scss";
import { useNavigate } from "react-router-dom";

const Header = createWithRemoteLoader({
    modules: ["components-core:Icon"],
})(({ remoteModules }) => {
    const [Icon] = remoteModules;
    const navigator = useNavigate();
    return (
        <Layout.Header className={style["header"]}>
            <Row className={style["header-row"]} gutter={[24, 0]} align="middle">
                <Col>
                    <Breadcrumb
                        items={[
                            {
                                title: (
                                    <Space
                                        size={4}
                                        onClick={() => {
                                            navigator("/overview");
                                        }}
                                    >
                                        <Icon type="icon-fanhui" />
                                        <span>返回</span>
                                    </Space>
                                ),
                            },
                            {
                                title: "项目名称",
                            },
                        ]}
                    />
                </Col>
            </Row>
        </Layout.Header>
    );
});

export default Header;
