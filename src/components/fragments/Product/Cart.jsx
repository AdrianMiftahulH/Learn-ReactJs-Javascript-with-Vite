import PropTypes from 'prop-types';
import { FormatDollar } from '../../elements';

const CartFragment = ({productData, totalPrices, dataCart}) => {

    return (
        <section className="w-2/6 border-4 border-slate-800 rounded-3xl p-4">
            <h1 className='text-center text-bold text-[32px]'>Cart</h1>
            <div className='border-b-4 border-slate-800'></div>
            <section className='my-5 flex flex-col gap-2 justify-end'>
                {productData.length > 0 
                ? dataCart.map((itemCart) => {
                    const findProduct = productData.find((product) => product.id === itemCart.id)
                    const preDiscount = findProduct.discountPercentage / 100;
                    const resultDiscount = findProduct.price - preDiscount * findProduct.price;

                    return (
                        <div key={findProduct.id}>
                            {findProduct.discountPercentage
                                ? <article className='w-full h-[50px] inline-flex p-3 bg-slate-200 rounded-lg' key={findProduct.id}>
                                    <h5 className='w-[50%] text-clip overflow-hidden'>{findProduct.title}</h5>
                                    <span className='w-[10%] bg-slate-400 text-center pt-[0.15rem] rounded-sm'>{itemCart.qty}</span>
                                    <span className='w-[40%] text-end'>{FormatDollar.format(resultDiscount.toFixed(2))}</span>
                                </article>
                                : <article className='w-full h-[50px] inline-flex p-3 bg-slate-200 rounded-lg' key={findProduct.id}>
                                    <h5 className='w-[50%] text-clip overflow-hidden'>{findProduct.title}</h5>
                                    <span className='w-[10%] bg-slate-400 text-center pt-[0.15rem] rounded-sm'>{itemCart.qty}</span>
                                    <span className='w-[40%] text-end'>{FormatDollar.format(findProduct.price.toFixed(2))}</span>
                                </article>
                            }
                        </div>
                    )
                })
                : <div>Not Items</div>}

                <article className='w-full h-[50px] inline-flex p-3 rounded-lg justify-between'>
                    <h5 className='w-[30%] font-bold'>Total Price</h5>
                    <span className='w-[70%] text-end'>{FormatDollar.format(totalPrices)}</span>
                </article>
            </section>
        </section>
    )
}

CartFragment.propTypes = {
    productData: PropTypes.any,
    totalPrices: PropTypes.any,
    dataCart: PropTypes.any
}

export default CartFragment 