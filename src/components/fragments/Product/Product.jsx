import PropTypes from 'prop-types';
import { CardProduct } from '../../elements';
import { useEffect, useState } from 'react';
import ImgDataEmpty from '../../../assets/notFoundData.jpeg'

const ProductFragment = ({productData, handleToCart}) => {
    return (
        <section className=" gap-2 flex flex-wrap items-start justify-start w-4/6">
            {productData.length > 0 
            ? productData.map((data) => (
                <CardProduct
                key={data.id}
                img={data.images[0]}
                title={data.title}
                id={data.id}
                handleCartBtn={handleToCart}>
                    {data.discountPercentage
                        ?<CardProduct.Discount discount={data.discountPercentage} price={data.price} />
                        :<CardProduct.NormalPrice price={data.price} />
                    }
                </CardProduct>
            ))
            : <img src={ImgDataEmpty} alt='Data Empty' />
            }
        </section>
    )
}

ProductFragment.propTypes = {
    productData: PropTypes.any,
    handleToCart: PropTypes.any
}

export default ProductFragment 