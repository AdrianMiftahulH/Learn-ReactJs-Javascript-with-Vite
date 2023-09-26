import { Link } from "react-router-dom"
import { ButtonAuth, InputAuth } from "../../elements"

const LoginFragment = () => {
    return (
        <>
            <h1 className="text-[24px] font-bold text-center">Login</h1>
            <form className="flex flex-col gap-2 my-6 ">
                <InputAuth titleInput="username" example="ex: adrian12345" typeInput="text"/>
                <InputAuth titleInput="password" example="ex: *******" typeInput="password"/>
                <ButtonAuth titleButton="Login" colorBg="slate-900" />
            </form>
            <span>Belum Punya Akun ? <Link to='/register' className="text-slate-900">Register</Link></span>
        </>
    )
}

export default LoginFragment