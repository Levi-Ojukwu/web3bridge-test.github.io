import React from "react";
import "../styles/cards.css";
import { Box, Button, Image, Text } from "@chakra-ui/react";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box className="image_box">
        <Image w={"100%"} src={img} alt="Image" />
      </Box>
      <Box>
        <Text>{title}</Text>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Text>Price - {price}$</Text>
          <Button border={"none"} onClick={() => handleClick(item)}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Cards;
