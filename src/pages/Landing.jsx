import { useLoaderData } from "react-router"
import { FeaturedProducts, Hero } from "../components"
import {customFetch} from '../utils'


const url = '/products?featured=true'
const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url) 
}

export const loader = (queryClient)=> async () => {
  const resp = await queryClient.ensureQueryData(featuredProductsQuery)
  return {products:resp.data.data}
}

const Landing = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProducts/>
    </div>
  )
}
export default Landing