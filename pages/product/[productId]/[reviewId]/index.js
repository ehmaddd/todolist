import { useRouter } from "next/router";

const reviewDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const reviewId = router.query.reviewId;

  return (
    <h2>Product {productId} Review {reviewId}</h2>
  )
}

export default reviewDetail;

