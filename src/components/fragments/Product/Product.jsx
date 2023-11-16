import PropTypes from 'prop-types';
import { CardProduct } from '../../elements';
import { useEffect, useState } from 'react';

const ProductFragment = ({title}) => {
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState([]);
    const [products, setProducts] = useState([])

    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    useEffect(() => {
        setCart(
            JSON.parse(localStorage.getItem('cart')) || []
        )
    }, []);

    useEffect(() => {
        getProducts((data) => {
            setProducts(data);
        })
    }, [])

    useEffect(() => {
        if(cart.length > 0 && products.length > 0){
            const sumTotal = cart.reduce((acc, item) => {
                const productFind = products.find((product) => product.id === item.id)
                return acc + productFind.price * item.qty
            }, 0)
            setTotalPrice(sumTotal);
            localStorage.setItem('cart', JSON.stringify(cart))
        }
    }, [cart, products])

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
                <section className=" gap-2 flex flex-wrap items-start justify-start w-4/6">
                    {products.length > 0 
                    ? products.map((data) => (
                        <CardProduct
                        key={data.id}
                        img={data.images[0]}
                        title={data.title}
                        id={data.id}
                        handleCartBtn={handleToCart}>
                            {data.discount
                                ?<CardProduct.Discount discount={data.discount} price={data.price} />
                                :<CardProduct.NormalPrice price={data.price} />
                            }
                        </CardProduct>
                    ))
                    : <img src={ImgDataEmpty} alt='Data Empty' />
                    }
                </section>
                <section className="w-2/6 border-4 border-slate-800 rounded-3xl p-4">
                    <h1 className='text-center text-bold text-[32px]'>Cart</h1>
                    <div className='border-b-4 border-slate-800'></div>
                    <section className='my-5 flex flex-col gap-2 justify-end'>
                        {products.length > 0 
                        ? cart.map((itemCart) => {
                            const findProduct = products.find((product) => product.id === itemCart.id)
                            const preDiscount = findProduct.discount / 100;
                            const resultDiscount = findProduct.price - preDiscount * findProduct.price;

                            return (
                                <div key={findProduct.id}>
                                    {findProduct.discount
                                        ? <article className='w-full h-[50px] inline-flex p-3 bg-slate-200 rounded-lg' key={findProduct.id}>
                                            <h5 className='w-[50%] text-clip overflow-hidden'>{findProduct.title}</h5>
                                            <span className='w-[10%] bg-slate-400 text-center pt-[0.15rem] rounded-sm'>{itemCart.qty}</span>
                                            <span className='w-[40%] text-end'>{USDollar.format(resultDiscount.toFixed(2))}</span>
                                        </article>
                                        : <article className='w-full h-[50px] inline-flex p-3 bg-slate-200 rounded-lg' key={findProduct.id}>
                                            <h5 className='w-[50%] text-clip overflow-hidden'>{findProduct.title}</h5>
                                            <span className='w-[10%] bg-slate-400 text-center pt-[0.15rem] rounded-sm'>{itemCart.qty}</span>
                                            <span className='w-[40%] text-end'>{USDollar.format(findProduct.price.toFixed(2))}</span>
                                        </article>
                                    }
                                </div>
                            )
                        })
                        : <div>Not Items</div>}

                        <article className='w-full h-[50px] inline-flex p-3 rounded-lg justify-between'>
                            <h5 className='w-[30%] font-bold'>Total Price</h5>
                            <span className='w-[70%] text-end'>{USDollar.format(totalPrice)}</span>
                        </article>
                    </section>
                </section>
            </article>
        </section>
    )
}

ProductFragment.propTypes = {
    title: PropTypes.string,
}

export default ProductFragment 