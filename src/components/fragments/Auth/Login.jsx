import { Link } from "react-router-dom"
import { ButtonAuth, InputAuth } from "../../elements"
import { authPost } from "../../../service/auth.service";
import { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

const LoginFragment = () => {
    const [loginFail, setLoginFail] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

        const data = {
            username : event.target.username.value,
            password : event.target.password.value
        }

        const notify = (title) => {
            toast.error(title, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }

        authPost(data, ((status, res) => {
            if (status) {
                localStorage.setItem('token', res)
            } else {
                setLoginFail(res.response.data.message);
                notify(res.response.data.message)
                console.log(res.response.data.message)
            }
        }));
    }

    return (
        <>
            <h1 className="text-[24px] font-bold text-center">Login</h1>
            <form className="flex flex-col gap-2 my-6 " onSubmit={handleLogin}>
                {loginFail && <p className="text-red-300 text-right">{loginFail}</p>}
                <InputAuth titleInput="username" example="ex: example" typeInput="text" name="username"/>
                <InputAuth titleInput="password" example="ex: *******" typeInput="password"  name="password"/>
                <ButtonAuth titleButton="Login" colorBg="slate-900" type="submit"/>
            </form>
            <span>Belum Punya Akun ? <Link to='/register' className="text-slate-900">Register</Link></span>
            <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
        </>
    )
}

export default LoginFragment