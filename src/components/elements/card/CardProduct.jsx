import { PropTypes } from "prop-types"

const CardProduct = (props) => {
    const {img, title, children} = props;

    return (
        <article className="w-[250px] h-auto p-4 rounded-3xl bg-slate-300 flex flex-col justify-start">
            <img src={img} alt={title} className="w-full h-[200px] rounded-3xl object-cover"/>
            <h3 className="text-[27px] font-bold">{title}</h3>
            {children}
        </article>
    )
}

const NormalPrice = (props) => {
    const {price} = props;

    return <p className="text-[18px] font-medium">USD {price}</p>
}

const Discount = (props) => {
    const {price, discount} = props;

    const preDiscount = discount/100;
    const resultDiscount = price-preDiscount*price;
    return(
        <>
            <div className="inline-flex gap-2 items-center">
                <p className="text-[14px] font-bold p-1 bg-slate-500">{discount}</p>
                <p className="text-[14px] font-light line-through">USD {price}</p>
            </div>
            <p className="text-[18px] font-medium">USD {resultDiscount.toFixed(2)}</p>
        </>
    )
}

CardProduct.Discount = Discount;
CardProduct.NormalPrice = NormalPrice;

CardProduct.propTypes = {
    img: PropTypes.any.isRequired,
    title: PropTypes.string,
    children: PropTypes.any,
}
NormalPrice.propTypes = {
    price: PropTypes.number,
}
Discount.propTypes = {
    price: PropTypes.number,
    discount: PropTypes.number
}

export default CardProduct