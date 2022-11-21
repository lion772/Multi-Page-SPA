import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import QuoteItem from "./components/quotes/QuoteItem/QuoteItem";
import QuoteList from "./components/quotes/QuoteList/QuoteList";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
import MainHeader from "./practice/MainHeader/MainHeader";

let quoteList = [{ id: "1", author: "test", text: "test" }];

function App() {
    return (
        <Fragment>
            <MainHeader />
            <main>
                <Switch>
                    <Route path={"/"} exact>
                        <Redirect to={"/quotes"}></Redirect>
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
            </main>
        </Fragment>
    );
}

export default App;
