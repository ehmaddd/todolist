import { useRouter } from "next/router";

const reviewDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <h2>Product {productId} review</h2>
  )
}

export default reviewDetail;

