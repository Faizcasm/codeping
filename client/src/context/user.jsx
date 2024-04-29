import { useState } from 'react'
import UserContext from './user.js'
const UserContextProvider = ({children})=>{
    const [user,setUser]= useState(null)
    const [theme,setTheme] = useState({
        color:'darkblue',
        backgroundColor:'white'
      })
      const [adminauth,setAdminauth] =useState(null)
return(
    <UserContext.Provider value={{user,setUser,theme,setTheme,adminauth,setAdminauth}}>
        {children}
    </UserContext.Provider>
)
}
export default UserContextProvider