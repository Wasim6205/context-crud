import { useContext } from "react"
import { UserStore } from "../context/UserContext"

const Navbar = () => {
    const {toggle,setToggle} = useContext(UserStore)
  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Section 1: Logo */}
        <div className="text-2xl font-bold text-blue-600">
          MyLogo
        </div>

        {/* Section 2: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="/"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>

        {/* Section 3: Create Button */}
        <div>
          <button
          onClick={() => setToggle((prev) => !prev)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg
                       font-medium hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {toggle ? "Close" : "Create"}
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar