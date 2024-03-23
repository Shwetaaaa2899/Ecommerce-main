import { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import { CartKey } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import NoCart from "./NoCart.png";
import "./Cart.css";
export default function Cart() {
  const { state, removeProductToCart, AddCartQuant } = useContext(CartKey);
  const navigate = useNavigate();
  const wishlists = [
    {
      // _id: uuid(),
      title: "Men Solid Round Neck  Black T-Shirt",
      price: 297,
      description:
        "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
      categoryName: "men",
      genre: "sports",
      sale: 30,
      image:
        "https://rukminim1.flixcart.com/image/832/832/xif0q/t-shirt/b/7/y/-original-imaghgyaqywafqus.jpeg?q=70",
    },
    {
      // _id: uuid(),
      title: "Pack of 2 Solid Men Running Shorts",
      price: 429,
      description:
        "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
      categoryName: "men",
      sale: 30,
      genre: "sports",
      image:
        "https://rukminim1.flixcart.com/image/832/832/kiqbma80-0/short/w/x/i/xxl-ic-24445-indiclub-original-imafygpfzcyx5gjy.jpeg?q=70",
    },
    {
      // _id: uuid(),
      title: "Pack of 2 Solid Men Running Shorts",
      price: 429,
      description:
        "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
      categoryName: "men",
      sale: 30,
      genre: "sports",
      image:
        "https://rukminim1.flixcart.com/image/832/832/kiqbma80-0/short/w/x/i/xxl-ic-24445-indiclub-original-imafygpfzcyx5gjy.jpeg?q=70",
    },
    {
      // _id: uuid(),
      title: "Pack of 2 Solid Men Running Shorts",
      price: 429,
      description:
        "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
      categoryName: "men",
      sale: 30,
      genre: "sports",
      image:
        "https://rukminim1.flixcart.com/image/832/832/kiqbma80-0/short/w/x/i/xxl-ic-24445-indiclub-original-imafygpfzcyx5gjy.jpeg?q=70",
    },
    {
        // _id: uuid(),
        title: "Pack of 2 Solid Men Running Shorts",
        price: 429,
        description:
          "great sports wear jersey   for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
        categoryName: "men",
        sale: 30,
        genre: "sports",
        image:
          "https://rukminim1.flixcart.com/image/832/832/kiqbma80-0/short/w/x/i/xxl-ic-24445-indiclub-original-imafygpfzcyx5gjy.jpeg?q=70",
      },
  ];
  // console.log("csrt page",state?.cart)
  const total = state?.cart?.reduce(
    (acc, item) =>
      (acc +=
        item?.qty && item.qty > 1 ? item?.qty * item.price : item?.price * 1),
    0
  );
  return (
    <div className="cart-wrapper">
      {wishlists?.length > 0 ? (
    
          <div className="wrapper">
                <div className="card-parent-container">
      {
        wishlists?.map((product)=><div className="card-container">
            
        <div> 
            <img className = "image" src= {product?.image} alt =""/>
            </div>
            <div className="details">  
                <p>{product?.title}</p> 
                <br />
                <p>₹ {product?.price}
        </p>
        <div className="actions">
            <button>+</button>
            <button>{product?.quantity?? 1}</button>
            <button>-</button>
        </div>
        <div className="btn-container">
            <button>REMOVE</button>
            <button>
REMOVE FROM WISHLIST</button>
            </div>
      
        </div>
        
           
            </div>)
      }
                </div>
          <div className="payment-container">Payment details</div>
        </div>
      ) : (
        <div className="no-items-container">
          {" "}
          <p>No ITEMS IN YOUR CART</p>
          <div>
            {" "}
            <img src={NoCart} alt="" />
          </div>
          <button onClick={() => navigate("/products")}>Shop Now</button>
        </div>
      )}
    </div>
  );
}

// {wishlists?.length <0
//     ?
//   <div></div>

//     ) : (
//       <div className="no-items-container">
//         <p>Your  Cart is empty.</p>
//         <button onClick={() => navigate("/products")}>Shop Now</button>
//       </div>
//     )}
//         <>

// {
//     state?.cart?.length>0?
//     <div className="parent-container">
//     <div className="left-container">
//     {

//         state?.cart?.map((product) =>

// <Card key = {product._id} item = {product} />
// )}
//         </div>
//         <div className="right-container">
//         <h3 className="price-card-header">Price Details</h3>
//         <div className="product-details"> <p><strong>SubTotal:</strong> {total}</p>
//         <p>
//        <strong>Discount</strong>: 50%
//        </p>
//        <p><strong>Total : </strong> {total/2}</p>
//        <button><NavLink to = "/checkout">Continue for Payment</NavLink></button>
//         </div>
//         </div>
//         </div>
//         :
//        <div> <h3>No data in Cart as of now</h3>
//        <button   className= "button" onClick = {()=> navigate("/products")} >Let's Explore</button>
//         {/* <button onClick = {() => navigate("/products") } >Let's Explore</button> */}
//         </div>

// }
// </>
//     )
// }
