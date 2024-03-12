const readJSONFile = async (file)=>{
    return await new Promise((resolve, reject) => {
        try {
            const reader = new FileReader();
            reader.onload = function () {
                resolve(JSON.parse(reader.result));
            };
            reader.readAsText(file);
        } catch (err) {
            reject(err);
        }
    });
};

export default readJSONFile;
