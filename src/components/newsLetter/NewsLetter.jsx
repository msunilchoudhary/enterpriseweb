import React from "react";
import { IoPaperPlaneOutline } from "react-icons/io5";

function NewsLetter() {
  return (
    <div className="newsletterwrap">
      <div className="newsletterflex">
        <IoPaperPlaneOutline />
        <input type="text" placeholder="Your email address" />
        <button type="submit" className="btn btn-primary">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
