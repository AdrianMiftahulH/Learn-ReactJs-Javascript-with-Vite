import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getDetailProduct } from "../../../service/product.service";

const DetailProductFragment = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data)
    })
  }, [id])
  
  return (
    <div className="">
      {Object.keys(product).length > 0 && ( 
        <div className="flex font-sans">
          <div className="flex-none w-56 relative">
            <img src={product.images[0]} alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg" loading="lazy" />
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto font-medium text-slate-900">
                {product.title}
              </h1>
              <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
                ${product.price}
              </div>
              <div className="text-sm font-medium text-slate-400">
                In stock
              </div>
            </div>
            
            <p className="text-sm text-slate-500">
              hai
            </p>
          </form>
        </div>
      )}
    </div>

  )
}

export default DetailProductFragment