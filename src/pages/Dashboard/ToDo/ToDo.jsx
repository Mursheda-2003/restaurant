import { useForm } from "react-hook-form"
const ToDo = () => {
  const {
    register,
    handleSubmit,
    watch,
  } = useForm()
  const onSubmit = (data) =>
    { console.log(data)
      const user ={
        Title: data.title,
        Work: data.work
      }
const storage = localStorage.setItem("user", JSON.stringify(user))
      console.log(storage)
    }

    const user = localStorage.getItem("user")
    const userData = JSON.parse(user)
    console.log(userData)


  return (
    <div>
      <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <div> 
        <label htmlFor="" className="text-xl">Title</label>
        <br />
        <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="title" type="text" {...register("title", {required: true})} />
      </div>
      <div>
        <label htmlFor="" className="text-xl">Work</label>
        <br />
        <input className="mb-5 focus:outline-none px-2 py-2 w-96" placeholder="work" type="text" {...register("work", {required: true})} />
      </div>
      <input className="btn mt-5 bg-orange-400 hover:bg-orange-400 text-white w-96" type="submit" /> 
    </form>
      </div>
    <div>
      <p>Title:  {userData.title}</p>
      <p>Work:  {userData.work}</p>
    </div>
    </div>
  );
};

export default ToDo;