import { useRouter } from "next/router";

const productDetail = () => {
  const router = useRouter();
  const handleClick = () => {
      router.push('/product');
  }
  const productId = router.query.productId;

  return (
    <>
      <h2>Product {productId} Detail</h2>
      <button onClick={handleClick}>Place Order</button>
    </>
  )
}

export default productDetail;

