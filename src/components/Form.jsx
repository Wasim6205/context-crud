import { useContext } from "react"
import { useForm } from "react-hook-form"
import { UserStore } from "../context/UserContext"
import {nanoid} from "nanoid"

const Form = () => {
    const {register,handleSubmit,reset,formState:{errors}} = useForm()
    const {setUsersData,setToggle} = useContext(UserStore)
    const handleAdd = (data) => {
        setUsersData((prev) => [...prev,{...data,id:nanoid()}])
        reset()
        setToggle(false)
    }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create User
        </h2>

        <form onSubmit={handleSubmit(handleAdd)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
            {...register("name",{
                minLength:{
                    value:3,
                    message:"Minimum 3 characters are required"
                }
            })}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
            />
            {errors.name && <p className="text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
            {...register("email", {
  required: "Email is required",
  pattern: {
    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: "Please enter a valid email address",
  },
})}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
            />
            {errors.email && <p className="text-red-600">{errors.email.message}</p>}
          </div>

          {/* Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              {...register("phone",{
                minLength:{
                    value:10,
                    message:"Minimum 10 digits are required"
                },
                maxLength:{
                    value:10,
                    message:"Maximum 10 digits are allowed"
                }
              })}
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
            />
            {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image URL
            </label>
            <input
              {...register("imageUrl",{
                required:"image Url is required"
              })}
              type="url"
              placeholder="Enter image URL"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg
                         outline-none focus:ring-2 focus:ring-blue-500
                         focus:border-blue-500"
            />
            {errors.imageUrl && <p className="text-red-600">{errors.imageUrl.message}</p>}
          </div>

          {/* Create Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg
                       font-semibold hover:bg-blue-700
                       transition-colors duration-200"
          >
            Create
          </button>

        </form>
      </div>
    </div>
  )
}

export default Form