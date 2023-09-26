import { CardProduct } from "../../elements"

const ProductFragment = () => {
  return (
    <>
        <CardProduct
        img="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        title='white Shoe'
        >
            <CardProduct.Discon price={1249} discon={15.46}></CardProduct.Discon>
        </CardProduct>
        <CardProduct
        img="https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
        title='white Shoe'
        >
            <CardProduct.NormalPrice price={1500}></CardProduct.NormalPrice>
        </CardProduct>
    </>
  )
}

export default ProductFragment