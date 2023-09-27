import { Link } from "react-router-dom"
import { ButtonAuth, InputAuth } from "../../elements"

const LoginFragment = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        
        const email = event.target.email.value;
        const password = event.target.password.value;
    
        
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        window.location.href = '/';
    }

    return (
        <>
            <h1 className="text-[24px] font-bold text-center">Login</h1>
            <form className="flex flex-col gap-2 my-6 " onSubmit={handleLogin}>
                <InputAuth titleInput="email" example="ex: example@gmail.com" typeInput="email" name="email"/>
                <InputAuth titleInput="password" example="ex: *******" typeInput="password"  name="password"/>
                <ButtonAuth titleButton="Login" colorBg="slate-900" type="submit"/>
            </form>
            <span>Belum Punya Akun ? <Link to='/register' className="text-slate-900">Register</Link></span>
        </>
    )
}

export default LoginFragment