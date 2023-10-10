import { Link } from "react-router-dom"
import { ButtonAuth, InputAuth } from "../../elements"

const RegisterFragment = () => {
    return (
        <>
            <div className="inline-flex justify-between items-center w-full">
                <h1 className="text-[24px] font-bold text-center">Register</h1>
                <Link to='/'>Close</Link>
            </div>
            <form className="flex flex-col gap-2 my-6 ">
                <InputAuth titleInput="email" example="ex: example@gmail.com" typeInput="email"/>
                <InputAuth titleInput="username" example="ex: example12345" typeInput="text"/>
                <InputAuth titleInput="password" example="ex: *******" typeInput="password"/>
                <ButtonAuth titleButton="Register" colorBg="slate-900" />
            </form>
            <span>Punya Akun ? <Link to='/login' className="text-slate-900">Login</Link></span>
        </>
    )
}

export default RegisterFragment