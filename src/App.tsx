import React, { Fragment } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Comments from "./components/comments/Comments/Comments";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetail from "./pages/QuoteDetail";

function App() {
    return (
        <Fragment>
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Navigate to={"/quotes"} />} />
                    <Route path={"/quotes"} element={<AllQuotes />} />
                    <Route path={"/quotes/:quoteId"} element={<QuoteDetail />}>
                        <Route
                            path={""}
                            element={
                                <Link className="btn--flat" to={`comments`}>
                                    Load comments
                                </Link>
                            }
                        />
                        <Route path={`comments`} element={<Comments />} />
                    </Route>
                    <Route path={"/new-quote"} element={<NewQuote />} />
                    <Route path={"/not-found"} element={<NotFound />} />
                    <Route
                        path={"*"}
                        element={<Navigate to={"/not-found"} />}
                    />
                </Routes>
            </Layout>
        </Fragment>
    );
}

export default App;
