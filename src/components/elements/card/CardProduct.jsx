import { PropTypes } from "prop-types"

const CardProduct = (props) => {
    const {id, img, title, children, handleCartBtn} = props;

    return (
        <article className="w-[250px] h-[320px] p-4 rounded-3xl bg-slate-300 flex flex-col justify-start">
            <img src={img} alt={title} className="w-full h-[200px] rounded-3xl object-cover"/>
            <h3 className="text-[27px] font-bold">{title}</h3>
            <div className="inline-flex justify-between items-center">
                <div className="flex flex-col items-end">
                    {children}
                </div>
                <button className="bg-slate-700 px-6 py-2 text-white rounded-lg" onClick={() => handleCartBtn(id)}>Cart</button>
            </div>
        </article>
    )
}

const NormalPrice = (props) => {
    const {price} = props;
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return <p className="text-[18px] font-medium">USD {USDollar.format(price.toFixed(2))}</p>
}

const Discount = (props) => {
    const {price, discount} = props;

    const preDiscount = discount / 100;
    const resultDiscount = price - preDiscount * price;
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    return(
        <>
            <div className="inline-flex gap-2 items-center">
                <p className="text-[14px] font-bold p-1 rounded-full bg-slate-500">{discount}</p>
                <p className="text-[12px] font-light line-through">USD {USDollar.format(price.toFixed(2))}</p>
            </div>
            <p className="text-[18px] font-medium">USD {USDollar.format(resultDiscount.toFixed(2))}</p>
        </>
    )
}

CardProduct.Discount = Discount;
CardProduct.NormalPrice = NormalPrice;

CardProduct.propTypes = {
    id: PropTypes.any,
    img: PropTypes.any.isRequired,
    title: PropTypes.string,
    children: PropTypes.any,
    handleCartBtn: PropTypes.any,
}
NormalPrice.propTypes = {
    price: PropTypes.number,
}
Discount.propTypes = {
    price: PropTypes.number,
    discount: PropTypes.number
}

export default CardProduct