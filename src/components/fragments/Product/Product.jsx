import PropTypes from 'prop-types';
import { CardProduct } from '../../elements';

const ProductFragment = ({title, dataProducts}) => {
  return (
    <section className="px-4">
        <h1 className='font-extrabold text-[32px]'>{title}</h1>
        <div className=" gap-2 flex flex-wrap items-center justify-center">
            {dataProducts.map((data) => (
                <CardProduct
                key={data.id}
                img={data.img}
                title={data.title}>
                    {data.discount
                        ?<CardProduct.Discount discount={data.discount} price={data.price} />
                        :<CardProduct.NormalPrice price={data.price} />
                    }
                </CardProduct>
            ))}
        </div>
    </section>
  )
}

ProductFragment.propTypes = {
    title: PropTypes.string,
    dataProducts: PropTypes.any,
}

export default ProductFragment