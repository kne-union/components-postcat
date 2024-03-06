import { createWithRemoteLoader } from "@kne/remote-loader";
import { useContext } from "./context";
import { Select, Space, Tabs } from "antd";
import style from "./style.module.scss";

const TabsPage = createWithRemoteLoader({
    modules: ["components-core:Icon"],
})(({ remoteModules }) => {
    const [Icon] = remoteModules;
    const { items, onChange, activeKey, addTab, removeTab } = useContext();
    const onEdit = (targetKey, action) => {
        if (action === "add") {
            addTab();
        } else {
            removeTab(targetKey);
        }
    };

    return (
        <Tabs
            type="editable-card"
            tabBarExtraContent={
                <Space className={style["tab-right"]}>
                    <Icon type="icon-yulan" />
                    <Select style={{ width: "150px" }}></Select>
                </Space>
            }
            onChange={onChange}
            activeKey={activeKey}
            onEdit={onEdit}
            items={items}
        />
    );
});

export default TabsPage;
