import React, { FC } from "react";
import { Route } from "react-router-dom";
import styles from "./Welcome.module.css";

interface WelcomeProps {}

const Welcome: FC<WelcomeProps> = () => {
    return (
        <section>
            <h1 className={styles.Welcome}>Welcome Page</h1>
            <Route path={"/welcome/new-user"}>
                <p>Welcome, new user!</p>
            </Route>
        </section>
    );
};

export default Welcome;
