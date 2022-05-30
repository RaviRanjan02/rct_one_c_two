import React from "react";

import {
  Stack,
  Image,
  Text,
  Tag,
  TagLabel,
  Heading,
  Box,
} from "@chakra-ui/react";

const Product = ({products_id,
  productimages_url,
  producttitle,
  productprices,
  productcategory,
  productgender}) => {
  // TODO: Remove below const and instead import them from chakra
  
  return (
    <Stack data-cy="product"  >{products_id}
      <Image data-cy="product-image" src={productimages_url} />
      <Text data-cy="product-category" >{productcategory}</Text>
      <Tag>
        <TagLabel data-cy="product-gender" >{productgender}</TagLabel>
      </Tag>
      <Heading data-cy="product-title" >{producttitle}</Heading>
      <Box data-cy="product-price" >{productprices}</Box>
    </Stack>
  );
};

export default Product;
