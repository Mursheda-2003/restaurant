import { Link } from "react-router-dom";
import login from "../../assets/others/authentication2.png"
import { useForm } from "react-hook-form"
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import logo from "../../assets/logo.png";
import toast, { Toaster } from 'react-hot-toast';
import "./Login.css"
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from "react";

const Login = () => {
  const [disable, setDisable] = useState(true)
  const[value, setValue] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  useEffect (()=>{
    loadCaptchaEnginge(6);
  },[])

  const onSubmit = (data) => console.log(data)
  const handleValidateCaptcha = (event) =>{
    const user_captcha_value = event.target.value;

    if (validateCaptcha(user_captcha_value)) {
      setDisable(false);
  }

  else {
      setDisable(true);
      toast('Here is your toast.')
  }
    console.log(user_captcha_value)
    // setValue(value)
  } 
  return (
  <div className="bg-img">
    <Toaster />
    <Link to="/">
    <img className="w-16 ml-24" src={logo} alt="navlogo" />
    </Link>
    <div className="flex  h-screen justify-center gap-40 py-5">
 <div>
 <img src={login} alt="" />
 </div>
   <div>
    <h1 className="text-center text-xl mt-10 font-bold">Login</h1>
   <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div>
        <label htmlFor="" className="text-xl">Email</label>
        <br />
        <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="Email" {...register("email")} />
      </div>
      <div>
        <label htmlFor="" className="text-xl">Password</label>
        <br />
        <input className="focus:outline-none px-2 py-2 w-96" placeholder="password" {...register("pasword")} />
      </div>

      <div>
        <label htmlFor="" className="text-xl">Password
        <LoadCanvasTemplate />
        </label>
        <br />
        <input type="text" onBlur={handleValidateCaptcha} className="focus:outline-none px-2 py-2 w-96" placeholder="write above captcha" />
      </div>

      <input disabled={disable} className="btn mt-5 bg-orange-400 hover:bg-orange-400 text-white w-96" type="submit" value="SignIn" />
    </form>
    <p className="mt-5">New Here? <Link className="text-orange-400" to="/signup">Create a New Account</Link></p>
    <p className="text-center mt-5 text-xl">or signin with</p>
    <div className="flex gap-5 mt-5 justify-center">
      <button>
      <CiFacebook className="text-3xl"/>
      </button>
      <button>
      <FaGoogle className="text-2xl"/>
      </button>
      <button>
      <VscGithub  className="text-2xl"/>
      </button>
    </div>
   </div>
    </div>
  </div>
  );
};

export default Login;