import { jwtDecode } from "jwt-decode"
import DummyApi from "../api/dummyAPi"

export const authPost = async (data, callback) => {
    try{
        await DummyApi.post('/auth/login', data)
        .then((res) => {
           callback(true, res.data.token)
        })
    } catch(err) {
        callback(false, err)
    }
}

export const getProfile = (token) => {
    const decoded = jwtDecode(token);
    return decoded
}