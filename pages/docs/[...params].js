import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  return (
    <h1>Doc Home Page</h1>

  )
}

  export default Doc;
