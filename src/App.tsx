import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";


function App() {
    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route path={"/"} exact>
                        <Redirect to={"/quotes"} />
                    </Route>
                    <Route path={"/quotes"} exact>
                        <AllQuotes />
                    </Route>
                    <Route path={"/quotes/:quoteId"}>
                        <QuoteDetail />
                    </Route>
                    <Route path={"/new-quote"}>
                        <NewQuote />
                    </Route>
                </Switch>
            </Layout>
        </Fragment>
    );
}

export default App;
