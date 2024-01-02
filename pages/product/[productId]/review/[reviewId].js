import { useRouter } from "next/router";

const reviewDetail = () => {
  const router = useRouter();
  const { productId, reviewId } = router.query;

  return (
    <h2>Product {productId} Review {reviewId}</h2>
  )
}

export default reviewDetail;

