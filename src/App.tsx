import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import Products from "./pages/Products/Products";
import Welcome from "./pages/Welcome/Welcome";

function App() {
    return (
        <Fragment>
            <MainHeader />
            <main>
                <Route path={"/welcome"}>
                    <Welcome />
                </Route>
                <Route path={"/products"}>
                    <Products />
                </Route>
            </main>
        </Fragment>
    );
}

export default App;
