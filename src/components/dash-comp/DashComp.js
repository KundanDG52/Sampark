import React from "react";
// import { useState } from "react";
import "./dash-comp.css";

// const content = [
//   [
//     "10 November: OM BURTE",
//     "12 November:	PRATHAM SAVLA",
//     "13 November:	RAJESH PATEL",
//     "14 November:	YASH DONGRE",
//     "15 November:	PARTH CHANDVANIYA",
//     "15 November:	NARENDRA HADKAR",
//   ],
//   ["No Upcoming Anniversary."],
//   ["No Sabha Today."],
//   ["November 7	Santacruz:	42	44%", "November 5	Santacruz Bal Sabha:	10	36%"],
//   ["Gunatit (Andheri)	Santacruz	7"],
//   ["No Fresh Members Found."],
//   ["Santacruz -	22", "Santacruz Bal Sabha - 9"],
//   [
//     "Santacruz	Pratham Jaisur	Fun Sabha",
//     // "Santacruz Bal Sabha	Kundan Gahalot	Bal Sabha",
//     // "Santacruz	Vivek Singh	Mahima of P P. Gunatit Swamiji Maharaj",
//     // "Santacruz Bal Sabha	Kundan Gahalot	Bal Sabha",
//     // "Santacruz	Rajesh Patel	Dusshera Parshadi diksha mahotsav",
//     // "Santacruz Bal Sabha	Kundan Gahalot	Bal Sabha",
//     // "Santacruz	Rajesh Patel	Garba Night",
//     // "Santacruz Bal Sabha	Kundan Gahalot	Bal Sabha",
//     // "Santacruz	Haripriya Swamiji	Importance of sabha",
//     // "Santacruz Bal Sabha	Kundan Gahalot	Bal Sabha",
//     // "Santacruz	Bhaktipriya Swamiji	Bhaktiswami Pragatya Parva",
//     // "Santacruz Bal Sabha	Bhaktipriya Swamiji	Pragatyaparva",
//     // "Santacruz	Kundan Gahalot	Activity Sabha",
//     // "Santacruz Bal Sabha	Kundan Gahalot	Bal Sabha",
//     // "Santacruz	Vivek Singh	Ganesh Chaturthi",
//     // "Santacruz Bal Sabha	Kundan Gahalot	Baal sabha",
//     // "Santacruz	Raj Chandvaniya	Samaiya Darshan",
//     // "Santacruz Bal Sabha	Kundan Gahalot	Bal sabha",
//     // "Santacruz	Parag Pithwa	Happy Teachers Day",
//     // "Santacruz Bal Sabha	Kundan Gahalot	Rakshabandhan",
//     // "Santacruz	Kamlesh Dixit	Rakshabandhan",
//     // "Santacruz	Bhavesh Gohil	Sant kahe tem karvu e shresht che",
//     // "Santacruz	Rajesh Patel	Thank you Prabodh swamiji for everything",
//     // "Santacruz	Raj Chandvaniya	Friendship",
//     // "Santacruz	Raj Chandvaniya	Guruhari Smrutidin",
//     // "Santacruz	Jiten Oza	Guruhari Smrutidin",
//     // "Santacruz	Nishkam Sevak	Importance of sabha",
//     // "Santacruz	Krishna Majithia	Importance of sabha",
//     // "Santacruz	Ronak Kapadia	360 Degree Transformation",
//     // "Santacruz	Vivek Singh	Nishtha and Mahima",
//     // "Santacruz	Rajesh Vadgama	Forget past forever",
//     // "Santacruz	Haripriya Swamiji	Importance of sabha",
//     // "Santacruz	Shashank Jethva	Importance of sabha",
//     // "Santacruz	Vedesh Chavan	Importance of sabha",
//     // "Santacruz	Ajit Chavan	H.D.H Hariprasad Swamiji 89th Pragatya Parv",
//     // "Santacruz	Raj Chandvaniya	Hu Aavish",
//     // "Santacruz	Rupesh Siyodia	Importance of sabha",
//     // "Santacruz	Jigar Soni	Importance of sabha",
//     // "Santacruz	Pratham Jaisur	Activity Sabha",
//     // "Santacruz	Prashant Patel	Our greatest transformation happens through our to",
//     // "Santacruz	Rahul Sonar	Gungaan of P.B. Ashutosh Bhai Singh",
//     // "Santacruz	Prashant Patel	Gunatit Cricket League Details",
//     // "Santacruz	Harshad Chitroda	8th Anniversary Celebration",
//     // "Santacruz	Bhaktipriya Swamiji	Mahima of P P. Prabodh Swamiji Maharaj",
//     // "Santacruz	Tejas Davande	P.18",
//     // "Santacruz	Rajesh Patel	Mahima of P P. Bhagatji Maharaj",
//     // "Santacruz	Raj Chandvaniya	Aksharanand",
//     // "Santacruz	Suresh Rathod	360 Transformation Prasangs",
//     // "Santacruz	Rajesh Patel	Guess Prasangs Activity",
//     // "Santacruz	Raj Chandvaniya	Video",
//   ],
// ];
export default function DashComp() {
  // const [activeContentIndex, setActiveContentIndex] = useState(0);
  // const iframeCardsData = [
  //   {
  //     title: "Card 1",
  //     content: [
  //       "10 November: OM BURTE",
  //       "12 November:	PRATHAM SAVLA",
  //       "13 November:	RAJESH PATEL",
  //       "14 November:	YASH DONGRE",
  //       "15 November:	PARTH CHANDVANIYA",
  //       "15 November:	NARENDRA HADKAR",
  //     ],
  //   },
  // ];
  // return (
  //   <div>
  //     <div className="tabs">
  //       <menu>
  //         <button
  //           className={activeContentIndex === 0 ? "active" : ""}
  //           onClick={() => setActiveContentIndex(0)}
  //         >
  //           Upcoming Birthdays
  //         </button>
  //         <button
  //           className={activeContentIndex === 1 ? "active" : ""}
  //           onClick={() => setActiveContentIndex(1)}
  //         >
  //           Upcomming Anniversary
  //         </button>
  //         <button
  //           className={activeContentIndex === 2 ? "active" : ""}
  //           onClick={() => setActiveContentIndex(2)}
  //         >
  //           Todays Sabha
  //         </button>
  //         <button
  //           className={activeContentIndex === 3 ? "active" : ""}
  //           onClick={() => setActiveContentIndex(3)}
  //         >
  //           Recent Sabhas
  //         </button>
  //         <button
  //           className={activeContentIndex === 4 ? "active" : ""}
  //           onClick={() => setActiveContentIndex(4)}
  //         >
  //           Pending Attendance
  //         </button>
  //         <button
  //           className={activeContentIndex === 5 ? "active" : ""}
  //           onClick={() => setActiveContentIndex(5)}
  //         >
  //           Fresh Members
  //         </button>
  //         <button
  //           className={activeContentIndex === 6 ? "active" : ""}
  //           onClick={() => setActiveContentIndex(6)}
  //         >
  //           Irregular Members
  //         </button>
  //         <button
  //           className={activeContentIndex === 7 ? "active" : ""}
  //           onClick={() => setActiveContentIndex(7)}
  //         >
  //           Recent Topics
  //         </button>
  //       </menu>
  //       <div id="tab-content">
  //         <ul>
  //           {content[activeContentIndex].map((item) => (
  //             <li typeof="checkbox" key={item}>
  //               {item}
  //             </li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </div>
  // );
  const cardData = [
    {
      id: 1,
      title: "Upcoming Birthdays",
      content: "Description for Event 1.",
    },
    {
      id: 2,
      title: "Upcoming Anniversary",
      content: "Description for Event 2.",
    },
    {
      id: 3,
      title: "Todays Sadha",
      content: "Description for Event 2.",
    },
    {
      id: 4,
      title: "Recent Sabhas",
      content: "Description for Event 2.",
    },
    {
      id: 5,
      title: "Pending Attendence",
      content: "Description for Event 2.",
    },
    {
      id: 6,
      title: "Fresh Members",
      content: "Description for Event 2.",
    },
    {
      id: 7,
      title: "Irregular Members",
      content: "Description for Event 2.",
    },
    {
      id: 8,
      title: "Recent Topics",
      content: "Description for Event 2.",
    },
    // Add more cards as needed
  ];

  return (
    <div className="admin-dashboard">
      {cardData.map((card) => (
        <div title=" " className="card" key={card.id}>
          {/* <img src={card.imageUrl} alt={card.title} className="card-image" /> */}
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-text">{card.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
