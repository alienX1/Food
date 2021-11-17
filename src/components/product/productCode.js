import React from "react";
import ProductTemplate from "./productTemplate";

const ProductCode = () => {
  const product = {
    price: "23.500",
    qty: "3",
    total: "49.000",
    note: "3 days",
    description: "delecious"
  };

  return (
    <div>
      <ProductTemplate product={product} />
    </div>
  );
};

export default ProductCode;
