import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleLogin() {
        // Implement login logic here
        console.log("Email:", email);
        console.log("Password:", password);
        // backend localhost:3000/users/login
        axios.post( import.meta.env.VITE_API_URL + "/users/login",{
             email : email,
            password :password        
        }).then((response)=>{
            console.log(response.data);
            localStorage.setItem("token", response.data.token);
            //alert("Login successful!");
                toast.success("Login successful!" );
            if(response.data.isAdmin){
                // Redirect to admin dashboard
                //window.location.href = "/admin";
                navigate("/admin");
                
            }else{
                // Redirect to homepage
                //window.location.href = "/";
                navigate("/");

            }
            // Handle successful login, e.g., store token, redirect, etc.
        }).catch((error)=>{
            
            //alert( error.response.data.message);
            toast.error(error.response.data.message );  
     
            // Handle login error, e.g., show error message to user
        });
    }


    return(
        <div className="w-full h-screen  flex  items-center justify-center bg-[url('/login-bg.jpg')] bg-center bg-cover "  >
            <div className="w-1/2 h-full" >
            
            </div>
            <div className="w-1/2 h-full flex items-center justify-center" >
                <div className="w-[400px] h-[500px] backdrop-blur-lg rounded-xl shadow-2xl flex flex-col items-center justify-center" >
                    <h1 className="text-3xl font-bold mb-6 text-secondary" >Sign in</h1>
                    <input
                        onChange={
                            (e)=>{
                                setEmail(e.target.value)
                            }
                        }
                        value={email}                       
                        type="text" 
                        placeholder="Email" 
                        className="w-3/4 p-3 mb-4 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent" 
                     />
                    <input
                        onChange={
                            (e)=>{
                                setPassword(e.target.value)
                            }
                        }
                        value={password}  
                        type="password" 
                        placeholder="Password" 
                        className="w-3/4 p-3  rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-accent" 
                     />
                    <p className="mb-6 w-3/4 text-right text-white">Forget password? <Link to="/forget-password" className="text-accent">Click here</Link>
                    </p>
                    <button onClick={handleLogin} className="w-3/4 p-3 bg-accent  text-white rounded-lg " >Sign in</button>  
                    <p className="mt-6 w-3/4 text-center text-white">Don't have an account? <Link to="/register" className="text-accent">Register</Link></p>
                    
                </div>


            </div>

        </div>
    )
}