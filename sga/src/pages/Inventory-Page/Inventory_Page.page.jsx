import React from "react";
import SellerNavbar from "../../components/navbar_seller/navbar_seller.component";
import "./Inventory_Page.styles.css";
import ProductCarousel from "../../components/product_carousel/product_carousel.component";



const InventoryPage = () => {
    return (
        <>
            <SellerNavbar/>
            <h1 className="VestidosDama">Vestidos Dama</h1>
            <div className="ContainerInventory">
                <div className="cositas">
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                </div>
                <div className="cositas">
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                </div>

                <div className="cositas">
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                </div>
                <div className="cositas">
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                    <h1 className="textCositas">Nombre Vestido <br/> Valor:<br/>Talla:<br/>Color:</h1>
                </div>

            </div>
            
        </>
    )
}

export default InventoryPage;