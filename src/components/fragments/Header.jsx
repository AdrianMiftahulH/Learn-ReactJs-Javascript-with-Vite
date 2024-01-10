import { Link } from "react-router-dom"
import { useLogin } from "../../hooks/useLogin";

const Header = () => {
  const profile = useLogin();
  const username = profile.username;

  const handleLogout = () => {
    localStorage.removeItem('token');

    window.location.href = '/login'
  }

  return (
    <header className="inline-flex w-screen justify-between px-6 items-center">
        <div className="inline-flex items-center">
          <Link to="/" className="text-[27px] font-semibold">TitleWebsite</Link>
          {username 
          ? <span> | {username}</span>
          : <div></div>}
        </div>
        <nav className="inline-flex items-center gap-2 justify-end">
            
            <Link to="/">Home</Link>
            <Link to='/profile'>Profile</Link>
            {username
            ? <button className="font-bold" onClick={handleLogout}>Logout</button>
            : <Link to="/login" className="font-bold">Login</Link>
          }
        </nav>
    </header>
  )
}

export default Header