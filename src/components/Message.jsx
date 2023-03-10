import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img
          src="https://images.pexels.com/photos/6279415/pexels-photo-6279415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/6279415/pexels-photo-6279415.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
      </div>
    </div>
  );
};

export default Message;
