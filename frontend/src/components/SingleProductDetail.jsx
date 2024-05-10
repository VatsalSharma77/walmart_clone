import { Box, Button, Flex, IconButton, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import ProductCard from "./ProductCard"
import Slider from "react-slick"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const SingleProductDetail = ({ data, handleClick }) => {
    const [relatedProducts, setRelatedProducts] = useState([])
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    useEffect(() => {
        fetchRelatedProducts()
    }, [data.category])

    const fetchRelatedProducts = async () => {
        try {
            let res = await axios({
                method: "get",
                baseURL: import.meta.env.VITE_APP_BACKEND_URL,
                url: `/api/products?category=${data.category}`,
                mode: "cors",
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            setRelatedProducts(res.data.Products);
            console.log(res.data.Products)
        } catch (error) {
            console.log(error)
        }
    }
    const sliderRef = useRef(null);


    return (
        <Box color={"black"} >
            <Flex justifyContent={"centre"}>
                <Image width={"50%"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} ml={"7%"} my={10} p={10} src={data.image} />
                <Box position={"sticky"} top={"100px"} ml={"7%"} my={10} p={10}  >
                    <Text my={5} textDecoration={"underline"} fontSize={"30px"} >{data.brand}</Text>
                    <Text my={5} fontWeight={"bold"} w={"400px"} fontSize={"30px"}>{data.name}</Text>
                    <Text my={5} textDecoration={"underline"} fontSize={"25px"}   >Rating : {data.rating}</Text>
                    <Text my={5} fontSize={"45px"} fontWeight={"bold"} color={"green"} >${data.price}</Text>
                    <Button  fontSize={"30px"} _hover={{ bg: "rgb(0,79,154)" }} ml={5} borderRadius={"50px"} py={10} px={12} bg={"rgb(0,113,220)"} color={"white"} onClick={() =>handleClick(data)}>Add to Cart</Button>
                </Box>
            </Flex>
            <Box ml={"7%"} my={10} p={10} w={"50%"}>
                <Text my={5} fontSize={"30px"} >About this item</Text>
                <Text my={5} fontSize={"20px"} lineHeight={"30px"} >{data.description}</Text>
            </Box>
            <Box my={10} p={10} >
                <Text my={5} fontSize={"30px"} textDecoration={"underline"} >Related Products</Text>
                <Slider ref={sliderRef}  {...settings}   >
                    {relatedProducts && relatedProducts.map((data, index) => {
                        return <ProductCard key={index} data={data} />
                    })}
                </Slider>
                <IconButton bg={"white"} color={"black"} border={"2px solid black"} borderRadius={"50px"}
                    fontSize={"20px"}
                    aria-label="Previous"
                    icon={<FaChevronLeft />}
                    onClick={() => sliderRef.current.slickPrev()}
                    position="relative"
                    top="-400px"
                    left="10px"
                    transform="translateY(-50%)"
                    zIndex="1"
                />
                <IconButton bg={"white"} color={"black"} border={"2px solid black"} borderRadius={"50px"}
                    fontSize={"20px"}
                    aria-label="Next"
                    icon={<FaChevronRight />}
                    onClick={() => sliderRef.current.slickNext()}
                    position="relative"
                    top="-400px"
                    right="-90%"
                    transform="translateY(-50%)"
                    zIndex={"1"}
                />
            </Box>
        </Box>
    )
}

export default SingleProductDetail