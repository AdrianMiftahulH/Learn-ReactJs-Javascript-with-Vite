import { Link } from "react-router-dom"

const Header = () => {
  const removeLocal = localStorage.removeItem('auth');
  return (
    <header className="inline-flex w-screen justify-between px-6 items-center">
        <Link to="" className="text-[27px] font-semibold">TitleWebsite</Link>
        <nav className="inline-flex items-center gap-2 justify-end">
            <Link to="#discon">Diskon</Link>
            <Link to="#product">Product</Link>
            {localStorage.getItem('auth')
            ? <button className="font-bold" onClick={removeLocal}>Login</button>
            : <Link to="/login" className="font-bold">Login</Link>
          }
        </nav>
    </header>
  )
}

export default Header