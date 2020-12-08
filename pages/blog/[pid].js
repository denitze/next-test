import { useRouter } from 'next/router'

const BlogItem = () => {
    const router = useRouter()
  const { pid } = router.query
  console.log(router);
    return ( 
        <div>
            <h1>BlogItem { pid }</h1>
        </div>
     );
}
 
export default BlogItem;