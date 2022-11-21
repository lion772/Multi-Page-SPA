import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import ProductDetail from "./ProductDetail/ProductDetail";
import styles from "./Products.module.css";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => (
    <section className={styles.Products}>
        <h1>Products page</h1>
        <ul>
            <li>A Book</li>
            <li>A Carpet</li>
            <li>An Online Course</li>
        </ul>
    </section>
);

export default Products;
