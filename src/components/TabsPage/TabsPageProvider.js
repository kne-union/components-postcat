import { useEffect, useRef, useState } from "react";
import { get } from "lodash";
import { Provider } from "./context";
import { v4 as uuidv4 } from "uuid";

const TabsPageProvider = ({ children, ...props }) => {
  const [items, setItems] = useState([]);
  const [activeKey, setActiveKey] = useState(get(items, "[0].key") || null);
  const newTabIndex = useRef(0);
  const onChange = (newActiveKey) => {
    setActiveKey(newActiveKey);
  };
  const add = () => {
    const newActiveKey = uuidv4();
    const newPanes = [...items];
    newPanes.push({
      label: "新请求",
      children: "Content of new Tab",
      key: newActiveKey,
    });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };
  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const actionRef = useRef({});
  actionRef.current = { addTab: add, removeTab: remove };

  const providerValue = {
    activeKey,
    items,
    onChange,
    addTab: () => {
      actionRef.current.addTab();
    },
    removeTab: (targetKey) => {
      actionRef.current.removeTab(targetKey);
    },
  };

  useEffect(() => {
    if (items.length === 0) {
      actionRef.current.addTab();
    }
  }, [items]);
  return <Provider value={providerValue}>{children}</Provider>;
};

export default TabsPageProvider;
