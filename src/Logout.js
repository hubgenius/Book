import axios from 'axios'
import React,{useEffect} from 'react'
import {useHistory} from "react-router-dom" 
function Logout() {
  axios.delete("http://localhost:9009/logout")
  let history =useHistory()
        localStorage.clear()
        setTimeout(() => {
          window.location.reload(true)
            history.push('/')
        }, 1000);
    
  return (
    <div>
        
    </div>
  )
}

export default Logout