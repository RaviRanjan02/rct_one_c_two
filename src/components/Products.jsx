import React, { useState, useEffect } from "react";
import AddProduct from "./AddProduct"
import Product from "./Product"
import Pagination from "./Pagination"
import {Flex , Grid} from '@chakra-ui/react'
import axios from "axios";

const Products = () => {
  // TODO: Remove below const and instead import them from chakra

  const [products, setProducts] = useState([]);
  
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);

   const [totalpage, setTotalPage] = useState(0);
   const getUser = async () => {
    const response = await fetch(`http://localhost:8080/products?_page=${page}&_limit=${limit}`);
    const data = await response.json();
    console.log(data);
    setProducts(data);
    setTotalPage(Number(response.headers["x-total-count"]));
  };

  useEffect(() => {
    getUser();
  }, [page,limit]);

  // const add = (el) => {
  //   const addData = {
  //       productimages_url:el.imageSrc,
  //       producttitle:el.title,
  //       productprices:el.price,
  //       productcategory:el.category,
  //       productgender:el.gender,
  //   };
  //   axios.post(`http://localhost:8080/products`);
  //   // alert("id");
  //   console.log(addData);
  // };

return (
    <Flex>
      <AddProduct/>
      <Grid>
        {products.map((el)=>{
        return(
          <Product products_id={el.id}
        productimages_url={el.imageSrc}
        producttitle={el.title}
        productprices={el.price}
        productcategory={el.category}
        productgender={el.gender} />
        )
      })}
        </Grid>
      <Pagination/>
    </Flex>
  );
};

export default Products;
