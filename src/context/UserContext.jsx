import { createContext, useState } from "react";

export const UserStore = createContext()

export const UserContextProvider = ({children}) => {
    const [toggle,setToggle] = useState(false)
    const [usersData,setUsersData] = useState([])
    const [isEditedUser,setIsEditedUser] = useState(null)
    console.log(isEditedUser);
    
    const handleDelete = (id) => {
        const newUsersData = usersData.filter((user) => user.id !== id)
        setUsersData(newUsersData)
    }
    return <UserStore.Provider value={{toggle,setToggle,usersData,setUsersData,handleDelete,isEditedUser,setIsEditedUser}}>
        {children}
    </UserStore.Provider>
}

// why should we hire you
// what are your strengths and weaknesses
// where do you see yourself in next 5 years