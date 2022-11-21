import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import ProductDetail from "./pages/Products/ProductDetail/ProductDetail";
import Products from "./pages/Products/Products";
import Welcome from "./pages/Welcome/Welcome";

function App() {
    return (
        <Fragment>
            <MainHeader />
            <main>
                <Switch>
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
