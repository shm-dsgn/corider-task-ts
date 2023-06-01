import React from "react";
import "./Input.css";
import Paperclip from "../../icons/Paperclip.svg";
import Send from "../../icons/Send.svg";

const Input = () => {
  return (
    <div className="input-block">
      <div className="input-box">
        <input type="text" placeholder="Reply to @Rohit Yadav" />
        <div className="input-block-icons">
          <img src={Paperclip} alt="paperclip" />
          <img src={Send} alt="send" />
        </div>
      </div>
    </div>
  );
};

export default Input;
