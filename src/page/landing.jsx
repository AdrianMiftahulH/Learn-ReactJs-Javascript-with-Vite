import ProductFragment from '../components/fragments/Product/Product'
import UserLayout from '../components/layouts/UserLayout'

const LandingPage = () => {
  return (
    <UserLayout>
      <ProductFragment title="Product Discount"/>
    </UserLayout>
  )
}

export default LandingPage