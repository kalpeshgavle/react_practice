import React, { useEffect, useState } from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useParams, Link } from "react-router-dom";
import { ProductList } from "../utilis/ProductList";

export default function ProductDetails() {
    const { id } = useParams()
    // console.log(id)
    const [productDetails, setProductDetails] = useState({})

    useEffect(() => {
        const findItem = ProductList.find((item) => item.id === Number(id));
        setProductDetails(findItem);
    }, []);
    // console.log("product details", productDetails);
    return (
        <div className="container py-5">
            <Link to="/product" className="btn btn-secondary">
                <IoArrowBackSharp />
            </Link>
            <h2>Detail {id} </h2>
            <hr />
            <div className="card">
                <div className="card-body">
                    <h2>{productDetails.name}</h2>
                    <p>{productDetails.desp}</p>
                </div>
            </div>
        </div>
    );
}