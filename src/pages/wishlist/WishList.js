import { useContext } from "react";
import { WishKey, wishlist } from "../../context/WishlistContext";
import { AiFillHeart } from "react-icons/ai";
import "./WishList.css";
import Card from "../../components/card/Card";
import NoItems from "./WishList.png";
import { useNavigate } from "react-router-dom";
export default function WishList() {
  const navigate = useNavigate();
  const { wishlist, removeWishlist, removeProductToWishList, state } =
    useContext(WishKey);
  // console.log(state, 'wish',state?.wish?.length>0)
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
  ];
  return (
    <div className="wishlist-parent-container">
      {wishlists.length < 0 ? (
        <div className="wishlist-cards-container">
 
          {wishlists?.map((product) => (
            <div className="child">
              <div>
                <img className="image" src={product?.image} alt="" />
              </div>
              <div className="details">
                <p>{product?.title}</p>

                <div>
                  <span>Rs. {product?.price}</span>
                  <span className="bold">FREE Delivery</span>
                </div>
                <div>
                  {" "}
                  <button>Add to Cart</button>
                  <button onClick={() => {removeProductToWishList(product)}}>Remove from ❤️</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-items-container">
          <p>SAVE YOUR FAVOURITE ITEMS ❤️</p>
          <div>
            <img src = {NoItems} alt = "" style = {{height:"100px"}} />
           </div>
          <button onClick={() => navigate("/products")}>Shop Now</button>
        </div>
      )}
    </div>
  );
}
