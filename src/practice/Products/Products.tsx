import React, { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => (
    <section className={styles.Products}>
        <h1>Products page</h1>
        <ul>
            <li>
                <Link to={"/products/p1"}> A Book</Link>
            </li>
            <li>
                <Link to={"/products/p2"}> A Carpet</Link>
            </li>
            <li>
                <Link to={"/products/p3"}> A Online Course</Link>
            </li>
        </ul>
    </section>
);

export default Products;
