import { useParams } from "react-router-dom";
import DetailProductFragment from "../components/fragments/Product/DetailProductFragment"
import UserLayout from "../components/layouts/UserLayout"
import { useEffect, useState } from "react";
import { getDetailProduct } from "../service/product.service";

const DetailProductPage = () => {
  const {id} = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    getDetailProduct(id, (data) => {
      setProduct(data)
    })
  }, [id])
  
  return (
    <UserLayout>
        <DetailProductFragment dataProduct={product} />
    </UserLayout>
  )
}

export default DetailProductPage