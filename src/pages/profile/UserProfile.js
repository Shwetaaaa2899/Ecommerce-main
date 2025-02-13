import { useContext, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import Address from "../Address"
import "./UserProfile.css" 
import { CartKey } from "../../context/CartContext"
export default function UserProfile(){
    const {userInfo } = AuthContext()
    const [selectedTab, setSelectedTab] = useState("profile")
    const {state} = useContext(CartKey)
    // console.log(selectedTab)
    return (
        <div className="profile">
        
            {/* <p> <strong> Name:</strong>{userInfo?.firstName} {userInfo?.lastName}</p>
            <p> <strong> Email:</strong>{userInfo?.email} </p> */}

            {/* <Address /> */}

            <div className="container">
            <div className="header">
            
            <div className= {selectedTab === "profile" ? "header-section-active" :  "header-section"} onClick={()=> setSelectedTab("profile")}>Profile</div>
            <div className={selectedTab === "address" ? "header-section-active" :  "header-section"} onClick={()=> setSelectedTab("address")}>Address</div>

            </div>
<div className="content"> 


<div className = "content-section">
{
    selectedTab === "profile" ? <div><p> <strong> Name : </strong>{userInfo?.firstName} {userInfo?.lastName}</p>
            <p> <strong> Email : </strong>{userInfo?.email} </p></div> : <Address/>
}
</div>


</div>
            </div>

        </div>
    )
    }