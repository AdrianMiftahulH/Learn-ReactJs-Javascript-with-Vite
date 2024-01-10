import { useEffect, useState } from "react";
import { getProfile } from "../service/auth.service";

export const useLogin = () => {
    const [profile, setProfile] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
          setProfile(getProfile(token))
        }else{
          window.location.href = "/login"
        }
    }, []);

    return profile;
}