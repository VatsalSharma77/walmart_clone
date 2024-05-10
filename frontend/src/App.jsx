import { useState } from "react";
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navbar/Navbar"
import ALLRoutes from "./pages/AllRoutes"
import { useToast } from "@chakra-ui/react";


function App() {
  const [cart, setCart] = useState([]);
  const [search , setSearch] = useState("")

  const toast = useToast();

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item._id === product._id)
        isPresent = true;
    })
    console.log(cart)
    if (isPresent) {
      toast({
        title: "Already in cart",
        position: "top",
        status: "warning",
        duration: 2000,
        isClosable: true,
      })
    }
    setCart([...cart, item]);
  }

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data._id === item._id)
        ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0)
      tempArr[ind].amount = 1;
    setCart([...tempArr])
  }

  
  return (
    <>
      <Navbar cart={cart.length}  setSearch={setSearch} search={search} />
      <ALLRoutes bg={"white"} search={search}  handleClick={handleClick} cart={cart} setCart={setCart} handleChange={handleChange} />
      <Footer />
    </>
  )
}

export default App
