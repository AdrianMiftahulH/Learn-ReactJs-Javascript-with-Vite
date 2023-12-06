import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { getUsername } from "../../service/auth.service";

const Header = () => {
  const [username, setUsername] = useState('')

  const handleLogout = () => {
    localStorage.removeItem('token');

    window.location.href = '/login'
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      setUsername(getUsername(token));
    }else{
      window.location.href = "/login"
    }
  }, [])

  return (
    <header className="inline-flex w-screen justify-between px-6 items-center">
        <div>
          <Link to="" className="text-[27px] font-semibold">TitleWebsite</Link>
          <span> | {username}</span>
        </div>
        <nav className="inline-flex items-center gap-2 justify-end">
            <Link to="#discon">Diskon</Link>
            <Link to="#product">Product</Link>
            {username
            ? <button className="font-bold" onClick={handleLogout}>Logout</button>
            : <Link to="/login" className="font-bold">Login</Link>
          }
        </nav>
    </header>
  )
}

export default Header