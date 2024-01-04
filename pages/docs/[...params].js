import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <h1>Doc Home Page</h1>

  )
}

  export default Doc;
