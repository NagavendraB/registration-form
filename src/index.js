import React from "react";
import ReactDOM from "react-dom";
import DemoForm from "./app";
import {Provider} from "react-redux";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
    <Provider store={store}>
        <DemoForm />
    </Provider>, document.querySelector("#root"));
registerServiceWorker();