import { Box, Button, Flex, Heading } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"
const Products = ({ handleClick, search }) => {
  const [category, setCategory] = useState("")
  const [products, setProducts] = useState([])
  const [sort, setSort] = useState("")
  const [filter, setFilter] = useState("")
  const [limit, setLimit] = useState(12)

  useEffect(() => {
    fetchProducts();
  }, [category, sort, filter, limit]);

  const fetchProducts = async () => {
    try {
      let res = await axios({
        method: "get",
        baseURL: import.meta.env.VITE_APP_BACKEND_URL,
        url: `/api/products?category=${category}&sort=${filter}${sort}&limit=${limit}&name=${search}`,
        mode: "cors",

        headers: {
          'Content-Type': 'application/json'
        },
      });
      setProducts(res.data.Products);
    } catch (error) {
      console.log(error)
    }
  }

  const handleCategory = (e) => {
    setCategory(e.target.value)
    console.log(category)
  }

  const handleSort = (e) => {
    setSort(e.target.value)
    console.log(sort)
  }

  const handleFilter = (e) => {
    setFilter(e.target.value)
    console.log(filter)
  }


  const handleLimit = () => {
    setLimit(limit + 12);
    console.log(limit)
  }



  return (
    <Box bg={"white"} color={"black"}  >
      <Box>
        <Flex justifyContent={"space-between"} p={10} >
          <Box border={"2px solid rgb(0,113,220)"} fontWeight={"bold"} borderRadius={"50px"} p={2} m={5} fontSize={20} color={"rgb(0,113,220)"}>
            <select value={category} style={{ outline: "none", border: "none", width: "200px", fontSize: "20px", padding: "10px", borderRadius: "50px", color: "rgb(0,113,220)", fontweight: "bold", cursor: "pointer"  }} onChange={handleCategory} >
              <option value="">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Cameras">Cameras</option>
              <option value="Laptops">Laptops</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Grocery">Grocery</option>
              <option value="Books">Books</option>
              <option value="Clothes">Clothes</option>
              <option value="Footwear">Footwear</option>
              <option value="Sports">Sports</option>
              <option value="Furniture">Furniture</option>
              <option value="Appliances">Appliances</option>
              <option value="Home">Home</option>
              <option value="Beauty">Beauty</option>
              <option value="Jewellery">Jewellery</option>
              <option value="Toys">Toys</option>
              <option value="Music">Music</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </Box>
          <Box  border={"2px solid rgb(0,113,220)"} fontWeight={"bold"} borderRadius={"50px"} p={2} m={5} fontSize={20} color={"rgb(0,113,220)"}>
            <select value={sort} style={{ outline: "none", border: "none", width: "200px", fontSize: "20px", padding: "10px", borderRadius: "50px", color: "rgb(0,113,220)", fontweight: "bold",cursor: "pointer"  }} onChange={handleSort} >
              <option value="">Sort By</option>
              <option value="price">Price</option>
              <option value="rating">Rating</option>
              <option value="name">Name</option>
            </select>
          </Box>
          <Box border={"2px solid rgb(0,113,220)"} fontWeight={"bold"} borderRadius={"50px"} p={2} m={5} fontSize={20} color={"rgb(0,113,220)"}>
            <select value={filter} onChange={handleFilter} style={{ outline: "none", border: "none", width: "200px", fontSize: "20px", padding: "10px", borderRadius: "50px",cursor: "pointer" , color: "rgb(0,113,220)", fontweight: "bold" }} >
              <option value="">Ascending</option>
              <option value="-">Descending</option>
            </select>
          </Box>
        </Flex>
      </Box>
      <Heading fontSize={"40px"} fontWeight={"bold"} p={10} >Products</Heading>
      <Box p={10} gap={10} display={"grid"} gridTemplateColumns={"repeat(4,1fr)"}  >
        {products.map((product, index) => (
          <ProductCard key={index} data={product} handleClick={handleClick} />
        ))}
      </Box>
      <Button  onClick={handleLimit}    border={"1px solid rgb(0,113,220)"} _hover={{ border: "3px solid rgb(0,113,220)", cursor: "pointer" }} mt={10} mb={10} color={"rgb(0,113,220)"} py={8} px={10} bg={"white"}  ml={"40%"}  fontSize={20} fontWeight={"bold"} borderRadius={"50px"}>Load More Products</Button >
    </Box>
  )
}

export default Products