import React, { useState } from 'react';
import { ProductList } from '../utilis/ProductList'
import { Link } from 'react-router-dom'


function Product() {
    const [list, setList] = useState(ProductList);

    // console.log("list:", list)

    return <>
        <div className="container">
            <h1>Products</h1>
            {
                list.map((item) => {
                    const { id, name, desp } = item
                    return (
                        <div className="card mb-3" key={id}>
                            <div className="card-body">
                                <h2>{name}</h2>
                                <Link to={`/product/${id}`}> View Details </Link>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </>
}

export default Product