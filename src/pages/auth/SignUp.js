import { useContext, useState } from "react"
import { toast } from "react-toastify";
import {AuthProviderKey, AuthContext} from "../../context/AuthContext";
export default function SignUp(){
   // const {signUpHandler} = useContext(AuthProviderKey)
    const {signUpHandler} = AuthContext()
    const [userSignUpDetails, setUserSignUpDetails] =  useState({firstname : "", lastname: "", email : "", password : "", confirmpassword: "" })
    const setInputHandler = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setUserSignUpDetails((userSignUpDetails) => ( {...userSignUpDetails, [e.target.name] : e.target.value}))
    }
    const submitHandler = () => {
        const {firstname, lastname, email, password, confirmpassword} = userSignUpDetails
if (firstname.length <=0 || lastname.length <=0 || email.length <=0 || password.length <=0 || confirmpassword.length <=0){
toast("Please fill the details")
}
else{
    
    signUpHandler(userSignUpDetails)
}
    }
    const prevendata = (e) => {
        e.preventDefault()
    }
    return (
        <form onSubmit={prevendata}>
        <div>
            <p>First Name : <input required placeholder="First Name" type = "text" name = "firstname" onChange={setInputHandler} /> </p>
            <p> Last Name : <input required placeholder="Last Name" type =  "text" name = "lastname" onChange={setInputHandler} /></p>
            <p> E-Mail : <input required placeholder="E-mail" type =  "text" name = "email" onChange={setInputHandler} /></p>
            <p> Password : <input required placeholder="Password" type =  "password" name = "password" onChange={setInputHandler} /></p>
            <p> Confirm Password : <input required placeholder="Confirm Password" type =  "password" name = "confirmpassword" onChange={setInputHandler} /></p>
        </div>
        <button type="submit" id="submitBtn" className="submitBtn" onClick = {submitHandler}>submit</button>
        </form>
    )
}