import React from "react";
import Navbar from "../../components/nav-bar/nav_bar.component";
import Carousel from "../../components/carousel/carousel.component";
import ProductCarousel from "../../components/product_carousel/product_carousel.component";
import FooterComponent from "../../components/footer/footer.component";
import Categories from "../../components/cateegories_cards/categories_cards.component";
import { Link } from "react-router-dom";

import "./front_page.styles.css";


const FrontPage = () => {
  return (
    <>
      <Navbar/>
      <Carousel>
      </Carousel>

        
      <div className="title_product_carousel">
            <p>categorias</p>
          
        
        </div>




      <Categories/>
      <div class="title_product_carousel">
        <p>Nuestros Mejores Productos</p>
        </div>
      <ProductCarousel/>
      <ProductCarousel/>
      <ProductCarousel/>
      
      <div>
        
      </div>
      <FooterComponent/>
    </>
   
  );
};

export default FrontPage;