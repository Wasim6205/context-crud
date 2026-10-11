import { useContext } from "react"
import { UserStore } from "../context/UserContext"

const UserCard = ({user}) => {
    const {handleDelete,setIsEditedUser} = useContext(UserStore)
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">

      {/* Top Image */}
      <div className="h-48 w-full">
        <img
          src={user.imageUrl}
          alt="User profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* User Details */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">
          {user.name}
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          {user.email}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          {user.phone}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-5">
          <button
          onClick={() => setIsEditedUser(user)}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg
                       hover:bg-blue-700 transition-colors font-medium"
          >
            Edit
          </button>

          <button
          onClick={() => handleDelete(user.id)}
            className="flex-1 bg-red-500 text-white py-2 rounded-lg
                       hover:bg-red-600 transition-colors font-medium"
          >
            Delete
          </button>
        </div>
      </div>

    </div>
  )
}

export default UserCard