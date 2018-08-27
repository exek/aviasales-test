import React from "react";
import TicketApp from "./components/TicketsApp";
import { Provider } from "react-redux";
import store from './store';

export default () => {
  return (
    <Provider store={store}>
      <TicketApp />
    </Provider>
  );
};
