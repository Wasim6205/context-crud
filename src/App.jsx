import { useContext } from "react"
import Navbar from "./components/Navbar"
import { UserStore } from "./context/UserContext"
import Form from "./components/Form"
import UserCard from "./components/UserCard"

const App = () => {
  const {toggle,usersData} = useContext(UserStore)
  return (
    <div>
      <Navbar />
      {
        toggle ? <Form /> : usersData.length > 0 ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {usersData.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div> : <p>Users not found</p>
      }
    </div>
  )
}

export default App