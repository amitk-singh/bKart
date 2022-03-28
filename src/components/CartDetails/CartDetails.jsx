// import "../../pages-css/cart-css/cart-page-layout.css";
import { useState } from 'react';
import { useCart } from '../../Contexts/cartContext';
import {useWishList}  from "../../Contexts/wishListContext";

const CartDetails = () => {

    const { items, setItems } = useCart();
    const { wishlistItem, setWishListItem } = useWishList();

    // move from cart to wishlist
    const moveToWishList = (product) => {
        const save = [...wishlistItem];
        //  console.log(product);
        const index = save.findIndex((item) => item.id === product.id);
        if (index === -1) {
          setWishListItem([...save,  product]);
        }
      };

      // Remove from cart
      const handleRemove= (id)=>{
        
        const newItems = items.filter((item) => item._id !== id);

        setItems(newItems);
      }




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

            {items.length === 0 ? (
        <h1>Cart is Empty</h1>
      ) :
        ( <div id="section-2">

            {
                items.map((item,id)=>{
                    return <div className="vertical-card-with-shadow" key={id}>
                        {/* <h1>{item.quantity}</h1> */}
                        <img className="vertical-card-img" src={item.image} alt="card image" />
                        <div>
                            <div className="text-details">
                                <h3 className="card-title">{item.productTitle}</h3>

                                <h3 className="card-content">
                                    Price: ₹{item.price}
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
                                    <input type="number" id="quantity" name="quantity" value={item.quantity}   min="1" max="50" />
                                </div>

                            </div>
                            <div className="cart-card-btn">
                                <button className="btn-primary" href="#url" onClick={() => moveToWishList( item)}>Move to wishlist</button>
                                <button className="btn-secondary" href="#url" onClick={()=>handleRemove(item._id)}>Remove</button>
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
                    <p><span>Total Price:</span> <span className="txt-float-right dark">₹7194</span></p>
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