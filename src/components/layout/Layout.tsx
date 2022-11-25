import { FC, PropsWithChildren } from "react";
import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout: FC<PropsWithChildren> = (props) => {
    return (
        <>
            <MainNavigation />
            <main className={styles.layout}>
                <Outlet />
            </main>
        </>
    );
};

export default Layout;
