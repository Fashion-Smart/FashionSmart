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
            <nav className="navbar navbar-expand-lg navbar-dark main-container menubar-background">
                <a className="navbar-brand" href="javascript:;">Fashion Smart</a>
                <form className="form-inline my-2 my-lg-0 float-right">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <i className="fas fa-user-circle fa-2x mr-2"></i>
                    <button className="btn btn-primary my-2 my-sm-0" type="submit" onClick={switchPage}>I am a {pageName=="/retailer"? "shopper":"retailer"}</button>
                </form>
            </nav>
        </div>
    )
}