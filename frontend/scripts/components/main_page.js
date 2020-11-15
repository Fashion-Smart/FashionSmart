import React from "react";
import {Route, Switch} from "react-router-dom";
import ShopperPage from "./shopper_page";
import RetailerPage from "./retailer_page";
import {MenuBar} from "./menu_bar";

class MainPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <>
            <MenuBar></MenuBar>
            <Switch>
                <Route path = "/retailer">
                    <RetailerPage></RetailerPage>
                </Route>
                <Route path = "/" Component={ShopperPage}>
                    <ShopperPage></ShopperPage>
                </Route>
            </Switch>
        </>)
    }
}

export default MainPage;