import { Box, Flex, Grid, GridItem, Heading, IconButton, Image, Text } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import home1 from "../../assets/home1.webp"
import home2 from "../../assets/home2.webp"
import home3 from "../../assets/home3.webp"
import home4 from "../../assets/home4.webp"
import home5 from "../../assets/home5.webp"
import home6 from "../../assets/home6.webp"
import home7 from "../../assets/home7.webp"
import home9 from "../../assets/home9.webp"
import home10 from "../../assets/home10.webp"
import home_W from "../../assets/home_W.webp"
import home2_1 from "../../assets/home2_1.webp"
import home2_2 from "../../assets/home2_2.webp"
import home2_3 from "../../assets/home2_3.webp"
import home2_4 from "../../assets/home2_4.webp"
import home_B from "../../assets/home_B.webp"
import home3_1 from "../../assets/home3_1.webp"
import home3_2 from "../../assets/home3_2.webp"
import home3_3 from "../../assets/home3_3.webp"
import home3_4 from "../../assets/home3_4.jpeg"
import cat1 from "../../assets/cat1.webp"
import cat2 from "../../assets/cat2.webp"
import cat3 from "../../assets/cat3.webp"
import cat4 from "../../assets/cat4.webp"
import cat5 from "../../assets/cat5.webp"
import cat6 from "../../assets/cat6.webp"
import './Home.css'
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../components/ProductCard";
import axios from "axios";
import Slider from "react-slick";
const Home = ({ handleClick }) => {
  const [featureData, setFeatureData] = useState([])
  const [femaleData, setFemaleData] = useState([])
  const [homeData, setHomeData] = useState([])
  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const sliderRef3 = useRef(null);

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
    fetchFeatureData();
    fetchFemaleData();
    fetchHomeData();
  }, []);



  const fetchFeatureData = async () => {
    try {
      let res = await axios({
        method: "get",
        baseURL: import.meta.env.VITE_APP_BACKEND_URL,
        url: "/api/products?featured=true",

        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setFeatureData(res.data.Products);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchFemaleData = async () => {
    try {
      let res = await axios({
        method: "get",
        baseURL: import.meta.env.VITE_APP_BACKEND_URL,
        url: "/api/products?category=Women",

        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setFemaleData(res.data.Products);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const fetchHomeData = async () => {
    try {
      let res = await axios({
        method: "get",
        baseURL: import.meta.env.VITE_APP_BACKEND_URL,
        url: "/api/products?category=Home",

        mode: "cors",
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setHomeData(res.data.Products);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }



  return (
    <Box h={"auto"} bg={"white"} color={"black"} p={10} w={"auto"} >
      <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
        <Grid className="home-grid-1"
          h='auto'
          templateRows='repeat(3, 1fr)'
          templateColumns='repeat(4, 1fr)'
          gap={10}
        >
          <GridItem borderRadius={"10px"} rowSpan={1} colSpan={1}  >

            <Image borderRadius={"10px"} src={home1} width={"100%"} height={"100%"} />

          </GridItem>
          <GridItem borderRadius={"10px"} colSpan={2} rowSpan={2}  >

            <Image borderRadius={"10px"} src={home2} width={"100%"} height={"100%"} />

          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={1} colSpan={1} >

            <Image borderRadius={"10px"} src={home3} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={1} colSpan={1}  >

            <Image borderRadius={"10px"} src={home4} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={1} colSpan={1}  >

            <Image borderRadius={"10px"} src={home7} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem  borderRadius={"10px"} rowSpan={1} colSpan={1} >

            <Image borderRadius={"10px"} src={home5} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={1} colSpan={1}  >

            <Image borderRadius={"10px"} src={home6} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={1} colSpan={1}  >

            <Image borderRadius={"10px"} src={home10} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={1} colSpan={1}  >

            <Image borderRadius={"10px"} src={home9} width={"100%"} height={"100%"} />
          </GridItem>


        </Grid>
      </Box>
      <Heading m={10} fontSize={"40px"} fontWeight={"bold"}  >Featured Products</Heading>

      <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} mt={10} mb={10} >
        <Slider ref={sliderRef1}  {...settings}   >
          {featureData && featureData.map((data, index) => {
            return <ProductCard key={index} data={data} handleClick={handleClick} />
          })}
        </Slider>
        <IconButton bg={"white"} color={"black"} border={"2px solid black"} borderRadius={"50px"}
        fontSize={"20px"}
          aria-label="Previous"
          icon={<FaChevronLeft   />}
          onClick={() => sliderRef1.current.slickPrev()}
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
          onClick={() => sliderRef1.current.slickNext()}
          position="relative"
          top="-400px"
          right="-90%"
          transform="translateY(-50%)"
          zIndex="1"
        />
      </Box>
      <Heading m={10} fontSize={"40px"} fontWeight={"bold"} >Female Products</Heading>

      <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"10px"} p={10}>
        <Flex>
          <Box borderRadius={"10px"} width={"70%"}>
            <Slider ref={sliderRef2}  {...settings}   >
              {femaleData && femaleData.map((data, index) => {
                return <ProductCard key={index} data={data} handleClick={handleClick} />
              })}
            </Slider>
            <IconButton bg={"white"} color={"black"} border={"2px solid black"} borderRadius={"50px"}
        fontSize={"20px"}
          aria-label="Previous"
          icon={<FaChevronLeft   />}
          onClick={() => sliderRef2.current.slickPrev()}
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
          onClick={() => sliderRef2.current.slickNext()}
          position="relative"
          top="-400px"
          right="-90%"
          transform="translateY(-50%)"
          zIndex="1"
        />
          </Box>
          <Box width={"30%"}>
            <img width={"100%"} src={home_W} alt="" />
          </Box>
        </Flex>
      </Box>
      <Box mt={20} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
        <Grid className="home-grid-1"
          h='auto'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={10}
        >
          <GridItem borderRadius={"10px"} rowSpan={2} colSpan={2}  >
            <Image borderRadius={"10px"} src={home2_1} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} colSpan={1} rowSpan={1}  >
            <Image borderRadius={"10px"} src={home2_2} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={2} colSpan={2} >
            <Image borderRadius={"10px"} src={home2_3} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={1} colSpan={1}  >
            <Image borderRadius={"10px"} src={home2_4} width={"100%"} height={"100%"} />
          </GridItem>
        </Grid>
      </Box>
      <Heading m={10} fontSize={"40px"} fontWeight={"bold"} >Home Products</Heading>
      <Box mt={20} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} borderRadius={"10px"} p={10}>
        <Flex>
          <Box borderRadius={"10px"} width={"70%"}>
            <Slider ref={sliderRef3}  {...settings}   >
              {homeData && homeData.map((data, index) => {
                return <ProductCard key={index} data={data} handleClick={handleClick}  />
              })}
            </Slider>
            <IconButton bg={"white"} color={"black"} border={"2px solid black"} borderRadius={"50px"}
        fontSize={"20px"}
          aria-label="Previous"
          icon={<FaChevronLeft   />}
          onClick={() => sliderRef3.current.slickPrev()}
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
          onClick={() => sliderRef3.current.slickNext()}
          position="relative"
          top="-400px"
          right="-90%"
          transform="translateY(-50%)"
          zIndex="1"
        />
          </Box>
          <Box width={"30%"}>
            <img width={"100%"} src={home_B} alt="" />
          </Box>
        </Flex>
      </Box>
      <Box mt={20} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
        <Grid className="home-grid-1"
          h='auto'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(5, 1fr)'
          gap={10}
        >
          <GridItem borderRadius={"10px"} rowSpan={2} colSpan={2}  >
            <Image borderRadius={"10px"} src={home3_1} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} colSpan={1} rowSpan={1}  >
            <Image borderRadius={"10px"} src={home3_2} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={2} colSpan={2} >
            <Image borderRadius={"10px"} src={home3_3} width={"100%"} height={"100%"} />
          </GridItem>
          <GridItem borderRadius={"10px"} rowSpan={1} colSpan={1}  >
            <Image borderRadius={"10px"} src={home3_4} width={"100%"} height={"100%"} />
          </GridItem>
        </Grid>
      </Box>
      <Heading m={10} fontSize={"40px"} fontWeight={"bold"} >Get it all in one place</Heading>
      <Box m={"auto"} mt={20} p={10} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
        <Flex gap={20} justifyContent={"space-between"} >
          <Box width={"15%"} >
            <Image width={"100%"} src={cat1} alt="" />
            <Text textAlign={"center"} fontSize={"20px"}>Grocery</Text>
          </Box>
          <Box width={"15%"}>
            <Image width={"100%"} src={cat2} alt="" />
            <Text textAlign={"center"} fontSize={"20px"}>Home</Text>
          </Box>
          <Box width={"15%"}>
            <Image width={"100%"} src={cat3} alt="" />
            <Text textAlign={"center"} fontSize={"20px"}>Electronics</Text>
          </Box>
          <Box width={"15%"}>
            <Image width={"100%"} src={cat4} alt="" />
            <Text textAlign={"center"} fontSize={"20px"}>Toys</Text>
          </Box>
          <Box width={"15%"}>
            <Image width={"100%"} src={cat5} alt="" />
            <Text textAlign={"center"} fontSize={"20px"}>Fashion</Text>
          </Box>
          <Box width={"15%"}>
            <Image width={"100%"} src={cat6} alt="" />
            <Text textAlign={"center"} fontSize={"20px"} >Beauty</Text>
          </Box>
        </Flex>
      </Box>
    </Box >
  )
}

export default Home