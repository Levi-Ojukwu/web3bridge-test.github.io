import React from "react";
import list from "../data";
import "../styles/amazon.css";
import Cards from "./Cards";
import { Grid, GridItem } from "@chakra-ui/react";

const Amazon = ({ handleClick }) => {
  return (
    <Grid templateColumns={"repeat(3, 1fr)"} gap={"2rem"} mt={"7rem"}>
      {list.map((item) => (
        <GridItem key={item.id}>
          <Cards item={item} handleClick={handleClick} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default Amazon;
