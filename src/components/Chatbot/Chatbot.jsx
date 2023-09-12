import React, { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [chatMeassge, setchatMeassge] = useState("");
  const [toggleChatBot, settoggleChatBot] = useState(false);

  return (
    <div className="Chatbot">
      {/* <h4>chat with us!</h4> */}

      <img src="./images/whatsapp.png" alt="" onClick={() => settoggleChatBot(!toggleChatBot)} />

      <div className={toggleChatBot ? "chat" : "chat_deactive"}>
        <div className="message">
          <h5>How can we help you?</h5>
        </div>
        <div className="input">
          <input type="text" onChange={(e) => setchatMeassge(e.target.value)} />
          <a target={"_blank"} className="message_btn" href={`https://api.whatsapp.com/send?text=${chatMeassge}&phone=919903807380`}>
            {" "}
            Send
          </a>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
