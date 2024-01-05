import Link from "next/link";

const product = () => {
    return (
      <>
        <Link href="/">
          Home
        </Link>
        <h1>PRODUCTS</h1>
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </>
    )
}

export default product;

