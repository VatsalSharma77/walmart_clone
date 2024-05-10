import { Box, Heading } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SingleProductDetail from "../components/SingleProductDetail"
const SingleProductPage = ({ handleClick }) => {
  const [data, setData] = useState([])
  const { _id } = useParams()

  useEffect(() => {
    fetchData();
  }, [_id])

  const fetchData = async () => {
    try {
      let res = await axios({
        method: "get",
        baseURL: import.meta.env.VITE_APP_BACKEND_URL,
        url: `/api/products/${_id}`,
      });
      setData(res.data.product);

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box bg={"white"} >
      <SingleProductDetail handleClick={handleClick} data={data} />
    </Box>
  )
}

export default SingleProductPage