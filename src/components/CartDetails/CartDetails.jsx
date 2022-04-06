// import "../../pages-css/cart-css/cart-page-layout.css";
import { useState } from 'react';
import { useCart } from '../../Contexts/cartContext1';
import { useWishList } from '../../Contexts/wishListContext1';


const CartDetails = () => {

    const { cartItems, removeFromCart } = useCart();
    const {addToWishList} = useWishList();
   

    


    return (
        <>
        <div id='page-layout-container'>
            {/* section-1- heading */}
            <div id="section-1">
                <h2>My shopping cart </h2>
                <p className="spacer"></p>
            </div>
            {/* end of section-1 */}

{/* logic */}

            {cartItems.length === 0 ? (
        <h1>Cart is Empty</h1>
      ) :
        ( <div id="section-2">

            {
                cartItems.map((product,id)=>{
                    return <div className="vertical-card-with-shadow" key={id}>
                        {/* <h1>{item.quantity}</h1> */}
                        <img className="vertical-card-img" src={product.image} alt="card image" />
                        <div>
                            <div className="text-details">
                                <h3 className="card-title">{product.productTitle}</h3>

                                <h3 className="card-content">
                                    Price: ₹{product.price}
                                </h3>
                                <div className="size-n-qty">
                                    Size:
                                    <select name="select-tshirt-size" id="select-tshirt-size">
                                        <option value="S">S</option>
                                        <option value="S">M</option>
                                        <option value="S">L</option>
                                        <option value="S">XL</option>
                                        <option value="S">XXL</option>
                                    </select>

                                    <label htmlFor="quantity">Qty.</label>
                                    <select >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                    {/* <input type="number" id="quantity" name="quantity"   min="1" max="50" onChange={(e)=>handlePrice(e.target.value, item)}/> */}
                                </div>

                            </div>
                            <div className="cart-card-btn">
                                <button className="btn-primary" href="#url" onClick={()=>addToWishList({product})}>Move to wishlist</button>
                                <button className="btn-secondary" href="#url" onClick={()=>removeFromCart(product._id)}>Remove</button>
                            </div>
                        </div>
                    </div>
                })
            }
                    

                   
                </div>


        )}     








            {/* section-3- right side checked out details */}
            <div id="section-33">
                <div className="r-side-cart-details">
                    <p>Price details <span>6 </span>items</p>
                    <hr />
                    <p className="spacer"></p>
                    <p><span>Total Price:</span> <span className="txt-float-right dark">1800</span></p>
                    <p>Discount : <span className="txt-float-right dark">-₹2500</span></p>
                    <p>Coupon discount: <span className="txt-float-right txt-color-brand"><a href="#url" className="coupon">Apply coupon</a>
                    </span></p>
                    <p>Convinience fee: <span className="txt-float-right txt-color-green dark">Free</span></p>
                    <p className="spacer"></p>
                    <hr />
                    <h4 className="txt-bold">Total amount:
                        <span className="txt-float-right dark">₹4694</span>
                    </h4>
                    <hr />
                    <button className="btn-place-order">Place order</button>
                </div>
            </div>
            {/* end of section-3 */}

            
            </div>
        </>
    );
}

export default CartDetails;