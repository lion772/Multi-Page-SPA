import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import MainHeader from "./practice/MainHeader/MainHeader";
import ProductDetail from "./practice/Products/ProductDetail/ProductDetail";
import Products from "./practice/Products/Products";
import Welcome from "./practice/Welcome/Welcome";

function App() {
    return (
        <Fragment>
            <MainHeader />
            <main>
                <Switch>
                    <Route path={"/"} exact>
                        <Redirect to={"/welcome"}></Redirect>
                    </Route>
                    <Route path={"/welcome"}>
                        <Welcome />
                    </Route>
                    <Route path={"/products"} exact>
                        <Products />
                    </Route>
                    <Route path={"/products/:productId"}>
                        <ProductDetail />
                    </Route>
                </Switch>
            </main>
        </Fragment>
    );
}

export default App;
