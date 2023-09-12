import React from "react";
import "./introbanner.css";

const IntroBanner = () => {
  const data = [
    {
      id: 1,
      img: "https://img.freepik.com/free-vector/webinar-concept-illustration_114360-4764.jpg?size=626&ext=jpg&ga=GA1.1.1777897027.1675625974&semt=ais",
      name: "Live Classes",
      desc: "Codeango ensures thev quality learning with live classes where interaction is on its peak.",
    },
    {
      id: 2,
      img: "https://trailhead.salesforce.com/assets/home/earn-1fec0a13b30fb81f50ee654fd8dd942f4a6dde0686a228938fe073c6061c33a2.svg",
      name: "Certificate",
      desc: "We provide a Certificate after completion of the course.",
    },
    {
      id: 3,
      img: "https://t3.ftcdn.net/jpg/00/89/85/08/240_F_89850844_YGSGp8OPRTpJsNyKOuQN1Fsl1zUlQpeo.jpg",
      name: "1 on 1 classes",
      desc: " We provide live 1 to 1 classes to ensure that timming should not stop your learning with customized timming of classes.",
    },
    {
      id: 4,
      img: "https://img.freepik.com/free-vector/organic-flat-customer-support-illustration_23-2148899173.jpg?size=626&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais",
      name: "Lifetime Support",
      desc: "We are with you from the beginning of your learning and after the learning by providing support to your work.",
    },
    {
      id: 5,
      img: "https://img.freepik.com/free-vector/unemployment-insurance-abstract-concept-vector-illustration-unemployment-benefits-lost-job-tired-stressed-businessman-claim-form-workers-compensation-paper-work-interview-abstract-metaphor_335657-1355.jpg?size=338&ext=jpg&ga=GA1.2.1777897027.1675625974&semt=ais",
      name: "job guarantee",
      desc: "We provide job and placement guarantee after completion of the course.",
    },
  ];
  return (
    <div className="introbanner">
      <h1 className="primary-color text-center">Our Features</h1>
      <div className="intro-wrapper">
        {data.map((item) => {
          return (
            <div className="intro-card" key={item.id}>
              <div className="intro-img">
                <img src={item.img} alt="" />
              </div>
              <h3>{item.name}</h3>
              <p className="text-center">{item.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IntroBanner;
