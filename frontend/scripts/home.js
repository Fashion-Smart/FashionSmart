import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter,Route, Switch} from "react-router-dom";
import ShoppingPage from "./components/main_page"

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={ShoppingPage}></Route>
    </BrowserRouter>,
document.getElementById("root"))