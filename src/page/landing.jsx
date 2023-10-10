import ProductFragment from '../components/fragments/Product/Product'
import UserLayout from '../components/layouts/UserLayout'

const product_discount = [
  {
    id: 1,
    title: "Shoe 1",
    img: 'https://i.dummyjson.com/data/products/2/1.jpg',
    discount: 13.56,
    price: 2000
  },
  {
    id: 2,
    title: "Shoe 2",
    img: 'https://i.dummyjson.com/data/products/2/2.jpg',
    discount: 12.56,
    price: 2600
  },
  {
    id: 3,
    title: "Shoe 1",
    img: 'https://i.dummyjson.com/data/products/2/3.jpg',
    discount: 11.56,
    price: 2100
  },
  {
    id: 4,
    title: "Shoe 4",
    img: 'https://i.dummyjson.com/data/products/2/3.jpg',
    discount: 11.56,
    price: 2100
  },
  {
    id: 5,
    title: "Shoe 5",
    img: 'https://i.dummyjson.com/data/products/2/1.jpg',
    price: 2000
  },
  {
    id: 6,
    title: "Shoe 6",
    img: 'https://i.dummyjson.com/data/products/2/2.jpg',
    price: 2600
  },
  {
    id: 7,
    title: "Shoe 7",
    img: 'https://i.dummyjson.com/data/products/2/3.jpg',
    price: 2100
  },
]

const LandingPage = () => {
  return (
    <UserLayout>
      <ProductFragment title="Product Discount" dataProducts={product_discount}/>
    </UserLayout>
  )
}

export default LandingPage