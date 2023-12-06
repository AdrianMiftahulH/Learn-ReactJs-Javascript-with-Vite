import DummyApi from "../api/dummyAPi"

const getProducts = async (callback) => {
    try{
        await DummyApi.get('/products')
        .then((res) => {
            callback(res.data.products)
        })
    } catch(err) {
        callback(err)
    }
}

export {
    getProducts
}