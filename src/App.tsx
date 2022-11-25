import React, { Suspense } from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Link,
    Navigate,
    Route,
    RouterProvider,
} from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import NoQuotesFound from "./components/quotes/NoQuotesFound/NoQuotesFound";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import { loader as quotesLoader } from "./pages/AllQuotes";
import { loader as quoteLoader } from "./pages/QuoteDetail";
import { action as postQuoteAction } from "./pages/NewQuote";
import {
    loader as commentsLoader,
    action as postCommentAction,
} from "./components/comments/Comments/Comments";

const Comments = React.lazy(
    () => import("./components/comments/Comments/Comments")
);
const AllQuotes = React.lazy(() => import("./pages/AllQuotes"));
const QuoteDetail = React.lazy(() => import("./pages/QuoteDetail"));
const NewQuote = React.lazy(() => import("./pages/NewQuote"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

const SuspenseLayout = () => (
    <Suspense fallback={<LoadingSpinner className="center-screen" />}>
        <Layout />
    </Suspense>
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<SuspenseLayout />}
            errorElement={<NoQuotesFound />}
        >
            <Route index element={<Navigate to={"/quotes"} />} />
            <Route
                path="/quotes"
                element={<AllQuotes />}
                loader={quotesLoader}
            />
            <Route
                path={"/quotes/:quoteId"}
                element={<QuoteDetail />}
                loader={quoteLoader}
            >
                <Route
                    index
                    element={
                        <Link className="btn--flat" to={`comments`}>
                            Load comments
                        </Link>
                    }
                />
                <Route
                    path="comments"
                    element={<Comments />}
                    loader={commentsLoader}
                    action={postCommentAction}
                ></Route>
            </Route>
            <Route
                path={"/new-quote"}
                element={<NewQuote />}
                action={postQuoteAction}
            />
            <Route path={"/not-found"} element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
