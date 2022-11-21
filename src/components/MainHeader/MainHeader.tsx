import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./MainHeader.module.css";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = () => {
    return (
        <header className={styles.MainHeader}>
            <nav>
                <ul>
                    <li>
                        <Link to="/welcome">Welcome</Link>
                    </li>
                    <li>
                        <Link to="/products">Products</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
