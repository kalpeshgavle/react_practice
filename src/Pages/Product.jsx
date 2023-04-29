import React, { useEffect, useState } from 'react';
import { ProductList } from '../utilis/ProductList'
import { Link, useNavigate } from 'react-router-dom'


function Product() {
    const [list, setList] = useState(ProductList);
    const [filterList, setFilterList] = useState(ProductList)
    const [searchText, setSearchText] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        const searchProduct = filterList.filter((item) => {
            return (
                item.name.toLowerCase().includes(searchText)
            )
        });
        setList(searchProduct);
    }, [searchText])

    // console.log("list:", list)

    return <>
        <div className="container">
            <h1>Products</h1>
            <input
                type="text"
                className="form-control mb-4"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
            />
            {
                list.map((item) => {
                    const { id, name, desp } = item
                    return (
                        <div className="card mb-3" key={id}>
                            <div className="card-body">
                                <h2>{name}</h2>
                                <button className='btn btn-secondary' onClick={() => { navigate(`/product/${id}`, { state: item }) }}>View Details</button>
                                {/* <Link to={`/product/${id}`}> View Details </Link> */}
                            </div>
                        </div>
                    )
                })
            }

        </div >
    </>
}

export default Product