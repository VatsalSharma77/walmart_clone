import { Text, Box, Button, Flex } from "@chakra-ui/react";
import "./Footer.css"
const Footer = () => {
    return (
        <Box textAlign={"center"} >
            <Box bg={"rgb(230,241,252)"} p={20}  >
                <Text fontSize={25} fontWeight={"bold"} color={"black"}>We’d love to hear what you think!</Text>
                <Button border={"1px solid black"} _hover={{ border: "3px solid black", cursor: "pointer" }} mt={5} color={"black"} py={8} px={10} bg={"white"} fontSize={20} fontWeight={"bold"} borderRadius={"50px"}>Give Feedback</Button >
            </Box>

            <Box fontSize={18} bg={"rgb(0,79,154)"} p={10} color={"white"}>
                <Flex p={5} m={"auto"} alignItems={"center"} justifyContent={"space-between"} >
                    <Text>All Departments
                    </Text>
                    <Text>Store Directory
                    </Text>
                    <Text>Careers</Text>
                    <Text>Our Company
                    </Text>
                    <Text>Sell on Walmart.com
                    </Text>
                    <Text>Help
                    </Text>
                    <Text>Product Recalls
                    </Text>
                    <Text>Accessibility
                    </Text>
                    <Text>Tax Exempt Program
                    </Text>
                    <Text>Get the Walmart App</Text>
                </Flex>
                <Flex p={5} m={"auto"} alignItems={"center"} justifyContent={"space-between"}>
                    <Text>Sign-up for Email
                    </Text>
                    <Text>Safety Data Sheet
                    </Text>
                    <Text>Terms of Use
                    </Text>
                    <Text>Privacy & Security
                    </Text>
                    <Text>California Supply Chain Act
                    </Text>
                    <Text>Privacy choices iconYour Privacy Choices
                    </Text>
                    <Text>Notice at Collection
                    </Text>
                    <Text>NV Privacy Notice</Text>

                </Flex>
                <Flex p={5} w={"70%"} m={"auto"} alignItems={"center"} justifyContent={"space-between"}>
                    <Text>WA Privacy Notice
                    </Text>
                    <Text>Request My Personal Information
                    </Text>
                    <Text>Brand Shop Directory
                    </Text>
                    <Text>Pharmacy
                    </Text>
                    <Text>Walmart Business
                    </Text>
                    <Text>#IYWYK</Text>
                </Flex>
                <Text mt={15}>© 2024 Walmart. All Rights Reserved.</Text>
            </Box>
        </Box>
    );
};


export default Footer;

