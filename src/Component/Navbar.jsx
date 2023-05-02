import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WrapperContext } from '../App';
function Navbar() {

    const { searchValue, setSearchValue, setIsLogin } = useContext(WrapperContext);

    function logout() {
        setIsLogin(false)
    }
    return <>
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>

                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/product">Product</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cocktail">Cocktails</Link>

                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className="form-control me-2" type="text" placeholder="Search" />
                        </form>
                        <button className='btn btn-danger' onClick={logout}>Logout</button>
                    </div>
                </div>
            </nav>

        </div>
    </>
}
export default Navbar;