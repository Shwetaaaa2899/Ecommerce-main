import { useContext ,useEffect } from "react"
import { CartKey } from "../../context/CartContext"
import { AiFillHeart } from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { WishKey } from "../../context/WishlistContext";
import "./Card.css"
import { useNavigate } from "react-router-dom";
export default function Card ({item}) {
    const {AddCartQuant} = useContext(CartKey)
const navigate  = useNavigate()
  const {
    addToWishlist,
    wishlist,
    removeProductToWishList,
    state: { wish },
    handleWishListCheck,
  } = useContext(WishKey);

  const { cartCall, addToCart,state : {cart}, removeProductToCart, handleCartCheck } =
    useContext(CartKey);
 
          
const isPresentinWishlist = (product) =>  {
 
  return wish?.some(item => product._id === item._id);


}
    const  handlewishlist = (product) => {
        if (isPresentinWishlist(product)) {
       
          addToWishlist(product);
        } else {
          
          removeProductToWishList(product);
        }
      };
    
      const isPresentinCart = (product) => {
        // console.log("cart",cart)
      return  cart?.some((item) => item._id === product?._id);
      }
      const handleCart = (product)=>{
        console.log(isPresentinCart(product) , "prod")
        if(isPresentinCart(product)){
        
         
          removeProductToCart(product);
         
        
        } else {
      
          addToCart(product);
        }
      };

      useEffect(() =>{
        // console.log("useffect")
        cartCall()}  , [cart])

    return (
        <div key={item._id} className="card" >

          <div className="image-container" onClick={()=>navigate(`/product/${item?._id}`)}>
            <img   className="card-image" src={item.image} />
         
        {item?.sale &&  <span  className="span-sale">-{item?.sale}% off</span>}
         </div>
       
          <div className="card-details">  
           <p className="card-title">{item.title}</p>
         <span className="span-text"> Shipped in 3-4 days</span>
           <span className="card-bold-details">Rs. {item.price}</span>
           </div>
      
          <div className="action-button-container">
            {/* <button onClick={() => isPresentinWishlist(item)}> */}
           <span onClick={() => handlewishlist (item)}>
              {
                isPresentinWishlist(item)?
                <AiFillHeart 
                
                style={{
                  color: "red" 
                }}
                size="20"
              />
              :
              <AiFillHeart  style={{color: "black"}}    size="20"/>
            
  
              }
              </span>
          

            <span onClick={() => handleCart(item)}>
              {isPresentinCart(item)?
              <BsFillCartCheckFill
                style={{
                  color: "green" 
                }}
                size="20"
              />
              :
              <BsFillCartCheckFill
              style={{
                color:"black"
              }}
              size="20"
            />
}
            </span>
          </div> 
        </div>

    )
}