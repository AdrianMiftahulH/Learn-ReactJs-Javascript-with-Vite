import { PropTypes } from "prop-types"
import SlideImg from "../../elements/card/SlideImg";
import { FormatDollar } from "../../elements";
import ImgStar from '../../../assets/star.svg'

const DetailProductFragment = (props) => {
  const {dataProduct} = props;

  const preDiscount = dataProduct.discountPercentage / 100;
  const resultDiscount = dataProduct.price - preDiscount * dataProduct.price;

  return (
    <>
      {Object.keys(dataProduct).length > 0 && ( 
        <div className="flex max-w-screen min-h-screen">
          {/* image */}
          <section className="w-1/3">
            <SlideImg dataImages={dataProduct.images}/>
          </section>
          {/* desc */}
          <section className="w-2/3">
            <h1 className="text-[27px] font-bold">{dataProduct.title}</h1>
            <article>
              <div className="inline-flex gap-1 items-center text-[14px]">
                <img src={ImgStar} alt="star"/>
                <span>{dataProduct.rating}</span>
              </div>
            </article>
            <article className="mt-3">
              <div className="inline-flex items-center gap-1 text-[14px]">
                <div className="p-1 bg-red-500 text-red-900 rounded-xl">
                  {dataProduct.discountPercentage}
                </div>
                <span className="line-through">{FormatDollar.format(dataProduct.price.toFixed(2))}</span>
              </div>
              <h3 className="text-[27px] font-extrabold">{FormatDollar.format(resultDiscount.toFixed(2))}</h3>
            </article>
            <hr />
            <article className="flex flex-col gap-1 font-normal font-sans">
              <h4 className="font-medium">Detail and Spec</h4>
              <table>
                <tbody>
                  <tr>
                    <td>Category</td>
                    <td>{dataProduct.category}</td>
                  </tr>
                  <tr>
                    <td>Brand</td>
                    <td> {dataProduct.brand}</td>
                  </tr>
                  <tr>
                    <td>Stock</td>
                    <td>{dataProduct.stock}</td>
                  </tr>
                </tbody>
              </table>
              <p className="indent-2">
                {dataProduct.description}
              </p>
            </article>
          </section>
        </div>
      )}
    </>
  )
}

DetailProductFragment.propTypes = {
  dataProduct: PropTypes.any,
}

export default DetailProductFragment