import React, { useState } from 'react';
import {AiFillEyeInvisible , AiFillEye} from "react-icons/ai";
import { Link } from 'react-router-dom';
import OAuth from '../componets/OAuth';

const SignUp = () => {

    const  [formData , setFormData] = useState({
        name: "",
        email : "",
        password : ""

    });

    const [showPassword , setShowPassword] = useState(false);

    const {name , email , password} = formData;

    function onChange(e) {
        setFormData( (prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }) );
        
    }

    return (
        <section>
            <h1 className='text-3xl text-center mt-6 font-bold ' >Sign Up</h1>
            <div className="complete-section flex justify-center flex-wrap items-center px-6 py-12 max-w-6pxl mx-auto ">
                <div className="photo-div md:w-[67%] lg:w-[50%] mb-12 md:md-6 ">
                    <img src="https://images.unsplash.com/flagged/photo-1564767609342-620cb19b2357?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2V5fGVufDB8fDB8fHww" alt="form pic or lock pic" className='w-full rounded-2xl  ' />
                </div>
                <div className="form-div  w-full md:w-[67%] lg:w-[40%] lg:ml-20 ">
                    <form  >

                        <input

                        type="text"
                        id='name'
                        value={name}
                        onChange={onChange}
                        placeholder='Full Name'
                        className=" mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out  "
                        />
                        <input

                        type="email"
                        id='email'
                        value={email}
                        onChange={onChange}
                        placeholder='Email address'
                        className=" mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out  "
                        />

                        <div className='relative mb-6 ' >
                            <input 

                            type={showPassword ? "text" : "password"}
                            id='password'
                            value={password}
                            onChange={onChange}
                            placeholder='Password'
                            className="w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out  "
                            />
                            {showPassword ?
                                <AiFillEyeInvisible className='absolute right-3 top-3 text-xl cursor-pointer'
                                onClick={ () => setShowPassword((prevState) => !prevState)}
                                />
                            :<AiFillEye className='absolute right-3 top-3 text-xl cursor-pointer'
                            onClick={ () => setShowPassword((prevState) => !prevState)}
                            />}
                        </div>

                        <div className="forgot-password-and-new-register-user flex justify-between whitespace-nowrap text-sm sm:text-lg  mb-6 ">
                            <p>
                                Have a account?
                                <Link to="/sign-in" className='text-red-600 ml-1 hover:text-red-700 transition duration-200 ease-in-out '
                                >Sign In?</Link>
                            </p>
                            <p>
                                <Link to="/forgot-password"
                                className='text-blue-600  hover:text-blue-800 transition duration-200 ease-in-out '
                                >Forgot Password?</Link>
                            </p>
                            
                        </div>


                        <button type="submit" className='bg-blue-600 w-full cursor-pointer text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150  ease-in-out hover:shadow-lg active:bg-blue-800 ' >
                        Sign up
                        </button>


                        <div className="or-div flex items-center my-4 before:border-t before:flex-1  before:border-gray-300 after:border-t after:flex-1  after:border-gray-300">
                        <p className='uppercase text-centre font-semibold mx-4 ' 
                        >OR</p>
                        </div>
                        <OAuth/>
                    </form>
                    
                    
                </div>
            </div>
            
        </section>
    );
}

export default SignUp;

