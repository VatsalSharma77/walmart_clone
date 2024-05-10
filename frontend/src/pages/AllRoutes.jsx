import { Route, Routes } from "react-router-dom"
import Home from "./Home/Home"
import Products from "./Products"
import SingleProductPage from "./SingleProductPage"
import Cart from "./Cart"
import LogIn from "./LogIn"
import SignUp from "./SignUp"
import Account from "./Account"
import PrivateRoute from "../components/PrivateRoute"
const AllRoutes = ({ handleClick, cart, setCart, handleChange, search }) => {
    return (
        <Routes>
            <Route path="/" element={<Home handleClick={handleClick} />} />
            <Route path="/products" element={
                <PrivateRoute>
                    <Products handleClick={handleClick} search={search} /> </PrivateRoute>} />
            <Route path="/products/:_id" element={
                <PrivateRoute>
                    <SingleProductPage handleClick={handleClick} />
                </PrivateRoute>} />
            <Route path="/cart" element={
                <PrivateRoute>
                    <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
                </PrivateRoute>} />
            <Route path="/account" element={<Account />} />

            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<SignUp />} />
        </Routes>
    )
}

export default AllRoutes