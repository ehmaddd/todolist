import { useRouter } from "next/router";

const productDetails = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <h2>Product Details</h2>
  )
}

export default productDetails;

