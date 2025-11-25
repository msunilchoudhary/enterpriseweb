import React from "react";
import { Button } from "react-bootstrap";
import { LuShoppingCart } from "react-icons/lu";

function AddToCartButton({ text }) {
  return (
    <Button
      // onClick={onClick}
      // disabled={disabled}
      className="d-flex align-items-center gap-2 btn btn-primary"
    >
      <LuShoppingCart className="w-5 h-5" />
      {text}
    </Button>
  );
}

export default AddToCartButton;
