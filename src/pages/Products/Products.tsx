import React, { FC } from "react";
import styles from "./Products.module.css";

interface ProductsProps {}

const Products: FC<ProductsProps> = () => (
    <h1 className={styles.Products}>Products Page</h1>
);

export default Products;
