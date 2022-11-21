import { FC, PropsWithChildren } from "react";
import styles from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout: FC<PropsWithChildren> = (props) => {
    return (
        <>
            <MainNavigation />
            <main className={styles.main}>{props.children}</main>
        </>
    );
};

export default Layout;
