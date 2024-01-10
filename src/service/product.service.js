import DummyApi from "../api/dummyAPi"

// get all product
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

// get detail product
const getDetailProduct = async (id, callback) => {
    try{
        await DummyApi.get(`products/${id}`)
        .then((res) => {
            callback(res.data)
        })
    } catch(err) {
        callback(err)
    }
}

export {
    getProducts,
    getDetailProduct
}