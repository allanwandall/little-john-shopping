import React from "react";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "../Assets/cart-outline.svg";
import LittleJohn from "../Assets/Little_John.webp";
import '../Styles/Header.css';

const Header = ({ productCount }) => {
    return (
        <header>
            <div className="header-container">
                <div className="header-left-side">
                    <h1 className="header-title">little john</h1>
                    <img src={LittleJohn}/>
                    <h5>childrenswear & toys</h5>
                </div>
                <div className="header-right-side">
                    <nav className="header-nav">
                        <NavLink className="navlink" activeClassName="selected" to="/" exact>home</NavLink>
                        <NavLink className="navlink" activeClassName="selected" to="/products" exact>products</NavLink>
                    </nav>
                    <div className="shopping-cart-container">
                        <img src={ShoppingCartIcon}/>
                        <div className="shopping-cart-counter">{/*productCount*/}<span>1</span></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;