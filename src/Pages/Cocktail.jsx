import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WrapperContext } from "../App";

export default function Cocktail() {
    const [cocktailList, setCocktailList] = useState([]);
    const [loading, setIsLoading] = useState(true);
    // const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const { searchValue } = useContext(WrapperContext)


    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchValue}`)
            .then((resp) => resp.json())
            .then((data) => {
                setCocktailList(data.drinks);
                setIsLoading(false);
            })
    }, [searchValue])
    if (loading) {
        return (
            <div className="container py-5">
                <h2>Cocktail List</h2>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card" aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." style={{ height: "400px" }} />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6" />
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-6" />
                                    <span className="placeholder col-8" />
                                </p>
                                <a className="btn btn-primary disabled placeholder col-6" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." style={{ height: "400px" }} />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6" />
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-6" />
                                    <span className="placeholder col-8" />
                                </p>
                                <a className="btn btn-primary disabled placeholder col-6" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card" aria-hidden="true">
                            <img src="..." className="card-img-top" alt="..." style={{ height: "400px" }} />
                            <div className="card-body">
                                <h5 className="card-title placeholder-glow">
                                    <span className="placeholder col-6" />
                                </h5>
                                <p className="card-text placeholder-glow">
                                    <span className="placeholder col-7" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-4" />
                                    <span className="placeholder col-6" />
                                    <span className="placeholder col-8" />
                                </p>
                                <a className="btn btn-primary disabled placeholder col-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container py-5" >
            <h2>Cocktail List</h2>

            {/* <div className="row align-items-center">
                <div className="col-2">
                    <p className="">Search your drink here.....</p>
                </div>
                <div className="col-9">
                    <input type="text" value={search} className="form-control my-4 col-3" onChange={(e) => setSearch(e.target.value)} />
                </div>
            </div> */}

            {
                cocktailList === null && <h1>No details found.!!!</h1>
            }
            <div className="row">
                {cocktailList &&
                    cocktailList.map((item) => {
                        const {
                            idDrink,
                            strDrinkThumb,
                            strDrink,
                            strCategory,
                            strInstructions,
                        } = item;


                        return (
                            <div className="col-md-4 mb-3" key={idDrink}>
                                <div className="card">
                                    <img src={strDrinkThumb} alt="" />
                                    <div className="card-body">
                                        <h5>{strDrink}</h5>
                                        <span className="text-secondary">{strCategory}</span>
                                        <p className="text-truncate">{strInstructions}</p>
                                        {/* <Link
                                            to={`/cocktail/${idDrink}`}
                                            className="btn btn-secondary"
                                        >
                                            More Details
                                        </Link> */}
                                        <button
                                            onClick={() => { navigate(`/cocktail/${idDrink}`, { state: item }) }}
                                            className="btn btn-secondary"
                                        >
                                            More Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>

        </div >
    )
}