import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const ProductCard = ({ data ,handleClick}) => {

    return (
        <Box bg={"white"} p={10} color={"black"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
            <img width={"200px"} height={"200px"} src={data.image} alt=" product" />
            <Heading color={"green"} mt={5} fontWeight={"bold"} >${data.price}</Heading>
            <Text fontSize={"20px"} mt={3} >Rating : {data.rating}</Text>
            <Text mt={3} fontSize={"25px"} overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" style={{ maxWidth: "200px" }} >{data.name}</Text>
            <Flex mt={5}>
                <Link to={`/products/${data._id}`}>
                    <Button fontSize={"20px"} ml={5} border={"2px solid rgb(0,113,220)"} borderRadius={"50px"} color={"rgb(0,113,220)"} _hover={{ bg: "rgb(0,79,154)", color: "white" }} bg={"white"} >Details</Button>
                </Link>
                <Button onClick={() => handleClick(data)} fontSize={"20px"} _hover={{ bg: "rgb(0,79,154)" }} ml={5} borderRadius={"50px"} bg={"rgb(0,113,220)"} color={"white"}>Add +</Button>
            </Flex>
        </Box>
    )
}

export default ProductCard