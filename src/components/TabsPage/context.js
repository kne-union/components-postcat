import { createContext, useContext as useConsumer } from "react";

const context = createContext({});

export const { Consumer, Provider } = context;

export const useContext = () => useConsumer(context);

export default context;
