
import { useForm } from "react-hook-form"
import login from "../../assets/others/authentication2.png"
import "../login/Login"
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";





const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <div className="flex flex-row-reverse bg-img max-w-7xl mx-auto">
      
      <img src={login} alt="" />
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <h1 className="text-center text-xl font-bold flex justify-center ">SignUp</h1>
      <div>
         <label htmlFor="" className="text-xl">Name:</label><br />
         <input className="focus:outline-none px-2 py-2 w-96" placeholder="Name" {...register("Name", { required: true,minLength: 1, maxLength: 20 })} />
         {
          errors.minLength && <p></p>
         }
      </div>
      <div>
         <label htmlFor="" className="text-xl">Email:</label><br />
         <input className="focus:outline-none px-2 py-2 w-96" placeholder="Email" {...register("email")} />
      </div>
      <div>
         <label htmlFor="">Password:</label><br />
         <input className="focus:outline-none px-2 py-2 w-96" placeholder="Password"  {...register("password")} />
      </div>
      <input className="btn mt-5 bg-orange-400 hover:bg-orange-500 text-white w-96" type="Submit" value={"SignIn"}/>
      <p className="mt-5 text-orange-500">Already registered? 
      <Link className="text-orange-500 font-bold " to="/login" href="">Go to log in</Link>
    </p>
    <p className="text-center text-xl mt-5">Or sign up with</p>
    <div className=" flex gap-5 mt-5 justify-center">
      <button>
      <CiFacebook className="text-3xl"/>
      </button>
      <button>
      <FaGoogle className="text-3xl" />
      </button>
      <button>
      <RiGithubFill className="text-3xl" />
      </button>
    </div>
    </form>
    
    
    </div>
    
  );
};

export default SignUp;