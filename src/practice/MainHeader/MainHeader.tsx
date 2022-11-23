import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainHeader.module.css";

interface MainHeaderProps {}

const MainHeader: FC<MainHeaderProps> = () => {
    return (
        <header className={styles.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? styles.active : ""
                            }
                            to="/welcome"
                        >
                            Welcome
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={(navData) =>
                                navData.isActive ? styles.active : ""
                            }
                            to="/products"
                        >
                            Products
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
