import Link from "next/link";

const product = ({ productId = 1000 }) => {
    return (
      <>
        <Link href="/">
          Home
        </Link>
        <h1>PRODUCTS</h1>
        <ul>
          <li>
            <Link href="/product/1">
              Product 1
            </Link>
          </li>
          <li>
            <Link href="/product/2">
              Product 2
            </Link>
          </li>
          <li>
            <Link href="/product/3">
              Product 3
            </Link>
          </li>
          <li>
            <Link href={`/product/${productId}`}>
              Product ${productId}
            </Link>
          </li>
        </ul>
      </>
    )
}

export default product;

