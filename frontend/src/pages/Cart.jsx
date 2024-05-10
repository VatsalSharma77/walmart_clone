import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react';
import  { useEffect, useState } from 'react'

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (
      ans += item.amount * item.price
    ))
    setPrice(ans);
  }

  const handleRemove = (_id) => {
    const arr = cart.filter((item) => item._id !== _id);
    setCart(arr);
    // handlePrice();
  }

  useEffect(() => {
    handlePrice();
  })
  return (
    <Box bg={"white"} p={5}>
      <Flex>
        <Box w={"60%"}>
          {cart.length > 0 && cart.map((item, index) => {
            return (
              <Box boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} p={5} m={2} key={index} color={"black"}>
                <Flex justifyContent={"space-between"}>
                  <img width={"100px"} src={item.image} alt="" />
                  <Text ml={5} mt={5} fontSize={20}>{item.name}</Text>
                  <Text ml={5} mt={5} fontSize={20} fontWeight={"bold"}>${item.price}</Text>

                </Flex>
                <Flex justifyContent={"right"}>
                  <Button bg={"none"} textDecoration={"underline"} ml={5} mt={5} fontSize={20} onClick={() => handleRemove(item._id)}>Remove</Button>
                  <ButtonGroup py={5} px={5} border={"1px solid black"} borderRadius={"50px"} ml={5}>
                    <Button bg={"none"} fontSize={20} onClick={() => handleChange(item, 1)}>+</Button>
                    <Text fontSize={20}>{item.amount}</Text>
                    <Button bg={"none"} fontSize={20} onClick={() => handleChange(item, -1)}>-</Button>
                  </ButtonGroup>
                </Flex>
              </Box>
            )
          })}
        </Box>
        <Box h={"fit-content"} bg={"white"} color={"black"} w={"35%"} ml={5} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"} p={5}>
          <Button mx={5} bg={"rgb(0,113,220)"} color={"white"} borderRadius={"50px"} p={5} w={"90%"} fontSize={20}>Process to checkout </Button>
          <Flex w={"80%"} mx={5} justifyContent={"space-between"} mt={20}>
            <Text fontWeight={"bold"} fontSize={40}>Subtotal :</Text>
            <Text fontWeight={"bold"} color={"rgb(0,113,220)"} fontSize={40}>${price}</Text>
          </Flex>
        </Box>

      </Flex>
    </Box>
  )
}

export default Cart