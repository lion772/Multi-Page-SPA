import React, { FC } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";

interface ProductDetailProps {}

type Params = {
    productId: string;
};

const ProductDetail: FC<ProductDetailProps> = () => {
    const { productId } = useParams<Params>();
    return (
        <div className={styles.ProductDetail}>
            <h1>Product Detail</h1>
            <p>{productId}</p>
        </div>
    );
};

export default ProductDetail;
