import { Link } from "react-router-dom"

const Header = () => {

  const handleLogout = () => {
    localStorage.removeItem('email');
    localStorage.removeItem('password');

    window.location.href = '/login'
  }
  
  const email = localStorage.getItem('email');

  return (
    <header className="inline-flex w-screen justify-between px-6 items-center">
        <div>
          <Link to="" className="text-[27px] font-semibold">TitleWebsite</Link>
          <span> | {localStorage.getItem('email')}</span>
        </div>
        <nav className="inline-flex items-center gap-2 justify-end">
            <Link to="#discon">Diskon</Link>
            <Link to="#product">Product</Link>
            {email
            ? <button className="font-bold" onClick={handleLogout}>Logout</button>
            : <Link to="/login" className="font-bold">Login</Link>
          }
        </nav>
    </header>
  )
}

export default Header