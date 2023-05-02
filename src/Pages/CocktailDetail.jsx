import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import { IoArrowBackSharp } from 'react-icons/io5'

export default function CocktailDetail() {
    const { state } = useLocation()
    console.log(state)
    // const params = useParams();

    const [cocktailDetail, setCocktailDetail] = useState({});

    useEffect(() => {
        setCocktailDetail(state)
    }, [state])

    // useEffect(() => {
    //     fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.id}`)
    //         .then((resp) => resp.json())
    //         .then((data) => setCocktailDetail(data.drinks[0]))
    // })
    // console.log(params)
    return (<>
        <div className="container py-4" >
            <Link to="/Cocktail" className="btn btn-secondary mt-5">
                <IoArrowBackSharp />
            </Link>
            <h1 className="py-4">Cocktail Details</h1>

            <div className="row ">
                <div className="col-5">
                    <img src={cocktailDetail.strDrinkThumb} width="100%" height="100%" alt="" />
                </div>
                <div className="col-5">
                    <p><span className="fw-bold">Name:</span> {cocktailDetail.strDrink}</p>
                    <p><span className="fw-bold">Category:</span> {cocktailDetail.strCategory}</p>
                    <p><span className="fw-bold">Instructions: </span>{cocktailDetail.strInstructions}</p>
                    <p><span className="fw-bold">Drink type :</span> {cocktailDetail.strAlcoholic}</p>
                </div>
            </div>
        </div>
    </>
    )
}