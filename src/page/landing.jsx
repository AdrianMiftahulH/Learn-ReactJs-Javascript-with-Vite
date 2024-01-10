// import { useEffect, useState } from 'react'
// import CartFragment from '../components/fragments/Product/Cart'
// import ProductFragment from '../components/fragments/Product/Product'
import UserLayout from '../components/layouts/UserLayout'
import ProductTemplate from '../components/layouts/ProductTemplate'
import { getProducts } from '../service/product.service'
import { useEffect, useState } from 'react';

const LandingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
        setProducts(data);
    })
}, [])

  return (
    <UserLayout>
      <ProductTemplate title="Product List" dataProducts={products} />
    </UserLayout>
  )
}

export default LandingPage