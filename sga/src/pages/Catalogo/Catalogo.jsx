import React from "react";
import Navbar from "../../components/nav-bar/nav_bar.component";
import ProductCarousel from "../../components/product_carousel/product_carousel.component";
import Card from "../../components/card_product/Card";
import "../Catalogo/Catalogo.css"
function Catalogo () {
    return(
    <>
    <Navbar />
    <div>
        <input type="text" placeholder="buscar" />
        <button>Buscar</button>
    </div>
    <div className="cartas">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
    </>
    )
};

export default Catalogo;