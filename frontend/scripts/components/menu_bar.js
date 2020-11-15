import React from "react";
import { useHistory, useLocation } from "react-router-dom";

export const MenuBar = (props)=>{
    const [pageName, setPageName] = React.useState("/");

    //change pageName whenever the url changes
    const location = useLocation();
    React.useEffect(() => {
        setPageName(location.pathname);
    }, [location]);

    //programmatically change url with useHistory
    const history = useHistory();
    const switchPage = ()=>{
        if (pageName=="/retailer"){
            history.push("/");
        } else {
            history.push("/retailer");
        }
    }

    return (
        <div className="menubar-background">
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="javascript:;">Fashion Smart</a>
                <div className="navbar-brand" style={{fontSize:"16px"}}>Smart Fashion Finder Made for You!</div>
                <button className="btn btn-outline-primary my-2 my-sm-0 float-right" type="submit" onClick={switchPage}>I am a {pageName=="/retailer"? "shopper":"retailer"}</button>
            </nav>
        </div>
    )
}