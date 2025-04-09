import React from "react"; 
import image from "../../assets/images.jpeg"
import "../card_product/Card.css"
const Card = () => {
    return(
       <div class = "Box">
        <img src={image} alt="" />
        <div className="unlorem">
            <h4 className="xd">Nom vestido</h4>
            <p>
            Precio:   
            </p>
            <p>Color:</p>
            <p>Talla:</p>
        </div>
       </div>
    )
}

export default Card;