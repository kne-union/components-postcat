import { Layout, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import style from "./style.module.scss";

const menuItems = [
    {
        key: "API",
        icon: "",
        label: "API",
        path: "/overview/project/api",
    },
    {
        key: "ENV",
        icon: "",
        label: "环境",
        path: "/overview/project/env",
    },
    {
        key: "SETTING",
        icon: "",
        label: "设置",
        path: "/overview/project/setting",
    },
];

const Sidebar = () => {
    const navigate = useNavigate();
    const menuItemMap = new Map(
        (menuItems || []).map((item) => [item.key, item])
    );
    return (
        <Layout.Sider width={85}>
            <Menu
                className={style["menu"]}
                defaultSelectedKeys={["API"]}
                mode="inline"
                items={menuItems}
                onClick={({ key }) => {
                    const item = menuItemMap.get(key);
                    if (item) {
                        navigate(item.path);
                    }
                }}
            />
        </Layout.Sider>
    );
};

export default Sidebar;
