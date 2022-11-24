import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./MainNavigation.module.css";

interface IMainNavigation {}

const MainNavigation: FC<IMainNavigation> = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>Great Quotes</div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.active : undefined
                            }
                            to="/quotes"
                        >
                            All Quotes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? styles.active : undefined
                            }
                            to="/new-quote"
                        >
                            Add a Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
