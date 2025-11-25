import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { BiHeart } from "react-icons/bi";

function WishlistButton({ onToggle }) {
  const [added, setAdded] = useState(false);
  const handleClick = () => {
    setAdded(!added);
    onToggle?.(!added);
  };

  return (
    <Button
      onClick={handleClick}
      variant={added ? "success" : "outline-secondary"}
      className="d-flex align-items-center gap-2"
    >
      <BiHeart className="w-5 h-5" />
      {added ? "" : ""}
    </Button>
  );
}

export default WishlistButton;
