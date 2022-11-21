import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products/Products";
import Welcome from "./pages/Welcome/Welcome";

function App() {
    return (
        <Fragment>
            <Route path={"/welcome"}>
                <Welcome />
            </Route>
            <Route path={"/products"}>
                <Products />
            </Route>
        </Fragment>
    );
}

export default App;
