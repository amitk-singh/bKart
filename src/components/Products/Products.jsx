import "../../pages-css/products-page-css/layout-handeler.css";
import {useCart} from "../../Contexts/cartContext1";
import {useWishList}  from "../../Contexts/wishListContext1";
import { useFilter } from "../../Contexts/filterContext";
import Sidebar from "../Sidebar/Sidebar";
import { Link } from "react-router-dom";

import { usePrice } from "../../Contexts/priceContext";

// const ProductList = [
//     { id: 1,productImg:"",category:"tshirt", productTitle: "Men's premium shirt",price:"1199", MRP:"3999",rating:"3",review:"18",quantity:1 },
//     { id: 2,productImg:"", category:"jacket", productTitle: "Men's vip shirt",price:"599", MRP:"2999",rating:"4" ,review:"15",quantity:1},
//     { id: 2,productImg:"", category:"jacket", productTitle: "Men's vip shirt",price:"599", MRP:"2999",rating:"4" ,review:"15",quantity:1},
//     { id: 3,productImg:"", category:"shirt", productTitle: "casual shirt",price:"399", MRP:"1999",rating:"2",review:"50",quantity:1 },
//   ];

  
const Products = () => {

    const { filteredProduct } = useFilter();
    const {addToWishList} = useWishList();
    const {addToCart } = useCart();
    // console.log(filteredProduct);

    
 
  

    return (
        <>
            <div className="page-layout-container">
                
              <Sidebar />

                <div id="section-a">

                    {
                        filteredProduct().map((product,_id)=>{
                            
                            return <div className="prod-shirt" key={_id}>
                        <div className="vertical-card-with-shadow">
                            <img className="vertical-card-img" src={product.image} alt="card image" />
                            <div>
                                <div className="text-details">
                                    <h3 className="card-title">{product.productTitle}</h3>

                                    <h3 className="card-content">

                                        <span className="sale-price"><span className="sale-price">Price: ₹{product.price}</span></span> <span>
                                            <h5 id="mrp">MRP: ₹{product.MRP}</h5>
                                        </span><span className="review">
                                        <p>Rating: <span>{product.rating}</span><span class="fa fa-star checked"></span></p>
                                        </span>
                                    </h3>
                                </div>
                                <div className="card-btn">
                                    <Link to="/Cart"><button className="buy-btn" onClick={() => addToCart({ _id, product })}>Buy</button></Link>
                                    <button className="add-to-wishlist" href="#url" onClick={() => addToWishList({product})}><i class="fas fa-heart" ></i> </button>
                                    <button className="add-to-cart" href="#url" onClick={() => addToCart({ _id, product })}><i class="fas fa-shopping-cart"></i> </button>
                                </div>
                            </div>
                        </div>
                    </div>
                        })
                    }
                    

                    
                </div>


            </div>
        </>
    );
};

export default Products;