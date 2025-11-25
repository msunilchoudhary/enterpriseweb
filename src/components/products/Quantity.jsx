import React, { useState } from "react";
import { Button } from "react-bootstrap";

function Quantity() {
  const [quantity, setQuantity] = useState(1);

  const handleIncrementQuantity = () => {
    setQuantity(quantity + 1);
  };
  const handleDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="product-quantity d-flex align-items-center">
      <Button className="qt-btn" onClick={handleDecrementQuantity}>
        <span>-</span>
      </Button>
      <input
        type="text"
        readOnly
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <Button className="qt-btn" onClick={handleIncrementQuantity}>
        <span>+</span>
      </Button>
    </div>
  );
}

export default Quantity;
