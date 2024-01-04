import { useRouter } from "next/router";

const Doc = () => {
  const router = useRouter();
  const { params = [] } = router.query;

  if(params.length === 2){

  }

  return (
    <h1>Doc Home Page</h1>

  )
}

  export default Doc;
