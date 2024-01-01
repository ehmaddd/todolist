import { useRouter } from "next/router";

const productDetail = () => {
  const router = useRouter();
  const productId = router.query.productId;

  return (
    <h2>Product {productId} Detail</h2>
  )
}

export default productDetail;

