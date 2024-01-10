import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import ProductFragment from '../fragments/Product/Product';
import CartFragment from '../fragments/Product/Cart';

const ProductTemplate = ({title, dataProducts}) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);

    useEffect(() => {
        setCart(
            JSON.parse(localStorage.getItem('cart')) || []
        )
    }, []);

    useEffect(() => {
        if(cart.length > 0 && dataProducts.length > 0){
            const sumTotal = cart.reduce((acc, item) => {
                const productFind = dataProducts.find((product) => product.id === item.id)
                return acc + productFind.price * item.qty
            }, 0)
            setTotalPrice(sumTotal);
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart, dataProducts]) 

    const handleToCart = (id) => {
        if(cart.find(item => item.id === id)) {
            setCart(
                cart.map(item => item.id === id ? {...item, qty: item.qty + 1} : item)
            )
        }else{
            setCart([...cart, {
                id: id,
                qty: 1
            }])
        }
    }

    return (
        <section className="px-10 my-6">
            <h1 className='font-extrabold text-[32px]'>{title}</h1>
            <article className='inline-flex'>
                <ProductFragment productData={dataProducts} handleToCart={handleToCart} />
                <CartFragment productData={dataProducts} totalPrices={totalPrice} dataCart={cart} />
            </article>
        </section>
    )
}

ProductTemplate.propTypes = {
    title: PropTypes.string,
    dataProducts: PropTypes.any,
}


export default ProductTemplate 