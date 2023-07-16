import React from "react";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Text } from "components";

const PLANNEWTRIPPage = () => {
  const navigate = useNavigate();
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [days, setDays] = useState(0);
  let trip;
  const handelSearch = (event) => {

  // Connect to backend and get trip

  //   fetch(`http://localhost:5000/plan?from=${from}&to=${to}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       trip = data;
  //       console.log(trip);
  //     });
  // }
    setFrom('');
    setTo('');
    document.getElementById('trip-div').innerHTML = '';
    ans.plan.map((day, index) => {
      console.log(day);
      let dayDiv = document.createElement('div');
      dayDiv.className = ' flex flex-col items-start justify-center w-full md:w-full md:gap-5 md:items-center md:justify-center md:px-5 md:shadow-bs md:flex md:flex-col md:gap-[18px] md:items-start md:justify-center md:max-w-[1194px] md:mt-[45px] md:mx-auto md:px-5 md:w-full md:mt-[45px] md:mx-auto md:px-5 md:w-full md:mt-[45px] md:mx-auto md:px-5 md:w-full border-4 border-gray-500 p-5';
      dayDiv.setAttribute('id', `day-${index+1}`);
    
      let dayHeading = document.createElement('h3');
      dayHeading.className = 'p-2 text-2xl font-semibold text-black-900_a0 tracking-[2.20px] w-full text-left mb-3 mt-3 md:text-3xl md:tracking-[3.30px] md:mb-5 md:mt-5 md:w-full md:font-semibold md:text-black-900_a0 md:leading-[normal] md:font-semibold md:leading-[normal]';
      dayHeading.innerHTML = `Day ${index+1}`;
      dayDiv.appendChild(dayHeading);
      day.activities.map((activity, index) => {
        let activityDiv = document.createElement('div');
        activityDiv.className = 'flex flex-col items-start justify-start w-full md:w-full md:gap-5 md:items-center md:justify-center md:px-5 md:shadow-bs md:flex md:flex-col md:gap-[18px] md:items-start md:justify-start md:max-w-[1194px] md:mt-[45px] md:mx-auto md:px-5 md:w-full md:mt-[45px] md:mx-auto md:px-5 md:w-full';
        activityDiv.setAttribute('id', `activity-${index+1}`);
        // activityDiv.setAttribute('style', 'border: 1px solid rgba(0, 0, 0, 1); margin: 10px; padding: 10px;');
        let activityHeading = document.createElement('h4');
        activityHeading.className = 'text-xl font-semibold text-black-900_a0 tracking-[2.20px] w-full text-left mb-3 mt-3 md:text-3xl md:tracking-[3.30px] md:mb-5 md:mt-5 md:w-full md:font-semibold md:text-black-900_a0 md:leading-[normal] md:font-semibold md:leading-[normal] ';
        activityHeading.innerHTML = `${activity.time} - ${activity.description}`;
        activityDiv.appendChild(activityHeading);
        dayDiv.appendChild(activityDiv);
      }
      );
      document.getElementById('trip-div').appendChild(dayDiv);
      document.getElementById('trip-map-div').style.display = 'block';
    });
  
    setFrom('');
    setTo('');
  }

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-lexendtera items-center justify-start mx-auto pb-[1992px] w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <header className="bg-white-A700 flex md:flex-col flex-row md:gap-5 items-center justify-center md:px-5 shadow-bs w-full">
            <Text
              className="mb-6 ml-11 md:ml-[0] md:mt-0 mt-[17px] text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[4.80px]"
              size="txtLexendTeraBold48Black900"
            >
              <span className="text-black-900 font-lexendtera text-left font-bold">
                PLACE
              </span>
              <span className="md:text-5xl text-black-900 font-lexendtera text-left text-[64px] font-bold">
                A
              </span>
            </Text>
            <ul className="flex md:flex-1 sm:flex-col flex-row font-sourcesanspro sm:hidden items-center justify-center mb-9 md:ml-[0] ml-[87px] md:mt-0 mt-[46px] w-[36%] md:w-full common-row-list">
              <li>
                <a className="text-[15px] text-black-900 tracking-[1.50px]">
                  <Text
                    className="common-pointer"
                    size="txtSourceSansProBold15Black900"
                    onClick={() => navigate("/home1")}
                  >
                    HOME
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[27px] text-[15px] text-black-900 tracking-[1.50px]"
                >
                  <Text size="txtSourceSansProBold15Black900">
                    VERTUAL VISIT
                  </Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[30px] text-[15px] text-black-900 tracking-[1.50px]"
                >
                  <Text size="txtSourceSansProBold15Black900">BOOKING</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-[35px] text-[15px] text-black-900 tracking-[1.50px]"
                >
                  <Text size="txtSourceSansProBold15Black900">DEALS</Text>
                </a>
              </li>
              <li>
                <a
                  href="javascript:"
                  className="ml-11 text-[15px] text-black-900 tracking-[1.50px]"
                >
                  <Text size="txtSourceSansProBold15Black900">BLOG</Text>
                </a>
              </li>
            </ul>
            <Img
              className="h-[30px] mb-8 md:ml-[0] ml-[257px] md:mt-0 mt-10 w-[29px]"
              src="images/img_search_black_900.svg"
              alt="search"
            />
            <Img
              className="h-[29px] mb-[33px] md:ml-[0] ml-[33px] mr-[50px] md:mt-0 mt-10"
              src="images/img_user_black_900.svg"
              alt="user"
            />
          </header>
          <div className="bg-black-900 flex flex-col font-sourcesanspro items-center justify-start p-[39px] sm:px-5 w-full">
            <Text
              className="md:text-5xl text-[64px] text-white-A700 tracking-[6.40px]"
              size="txtSourceSansProSemiBold64"
            >
              PLAN YOUR DREAM TRIP
            </Text>
            <Text
              className="mt-3.5 text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[2.40px]"
              size="txtSourceSansProSemiBold24"
            >
              Unleash your wanderlust; envision paradise.
            </Text>
            <div className="flex md:flex-col flex-row gap-[19px] items-center justify-center max-w-[886px] mb-6 mt-7 mx-auto md:px-5 w-full">
              <Input
                name="groupNinety"
                placeholder="From"
                className="font-semibold leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_a0 sm:px-5 sm:text-xl text-2xl text-black-900_a0 text-left tracking-[2.40px] w-full"
                wrapClassName="bg-white-A700 md:flex-1 pb-[13px] pl-[25px] pr-[35px] pt-[9px] rounded-[10px] w-[33%] md:w-full"
              ></Input>
              <Input
                name="groupNinety"
                placeholder="To"
                className="font-semibold leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_a0 sm:px-5 sm:text-xl text-2xl text-black-900_a0 text-left tracking-[2.40px] w-full"
                wrapClassName="bg-white-A700 md:flex-1 pb-[13px] pl-[25px] pr-[35px] pt-[9px] rounded-[10px] w-[33%] md:w-full"
              ></Input>
              <Input type="number" placeholder="0" className="bg-white-A700 cursor-pointer w-20 font-semibold leading-[normal] min-w-[24px] py-[13px] rounded-[10px] text-[22px] text-black-900_a0 text-center sm:text-lg md:text-xl tracking-[2.20px]">
                Days
              </Input>
              <Button onClick={handelSearch} className="bg-red-900 cursor-pointer font-semibold leading-[normal] min-w-[155px] py-[11px] rounded-[10px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[2.40px]">
                Search
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-sourcesanspro gap-[18px] items-start justify-start max-w-[1194px] mt-[45px] mx-auto md:px-5 w-full">
            <div>
              <div id="trip-div" className=" flex flex-col items-center justify-start p-3.5 w-[46%] md:w-full">
                
                 </div>
            </div>
            <div id="trip-map-div" style={{display: 'none'}} className="bg-blue_gray-100 flex md:flex-1 flex-col gap-[18px] items-end justify-end p-3.5 w-[46%] md:w-full">
            Map
              <div className="bg-black-900 h-[55px] mr-1.5 rounded-[15px] w-[37%]"></div>
              <div className="flex flex-col items-center justify-start mb-[17px] w-[10%] md:w-full">
                <div className="bg-black-900 h-[51px] rounded-[26px] w-[52px]"></div>
                <div className="bg-black-900 h-[51px] mt-[19px] rounded-[26px] w-[52px]"></div>
                <div className="bg-black-900 h-[37px] mt-[328px] w-[38px]"></div>
                <div className="bg-black-900 h-[37px] mt-[7px] w-[38px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const ans = {"plan":[{"day":1,"activities":[{"time":"9:00 AM","description":"Arrive in Ahmedabad and check-in to hotel"},{"time":"10:00 AM","description":"Visit Sabarmati Ashram, a historic place associated with Mahatma Gandhi"},{"time":"1:00 PM","description":"Enjoy local Gujarati cuisine for lunch"},{"time":"2:00 PM","description":"Explore the stunning architecture of the Adalaj Stepwell"},{"time":"4:00 PM","description":"Visit the Calico Museum of Textiles to appreciate traditional textile art"},{"time":"6:00 PM","description":"Stroll through the vibrant Law Garden Night Market and shop for traditional handicrafts"},{"time":"8:00 PM","description":"Dinner at a local restaurant offering Gujarati street food"}]},{"day":2,"activities":[{"time":"9:00 AM","description":"Visit Kankaria Lake and enjoy a relaxing boat ride"},{"time":"11:00 AM","description":"Explore the grandeur of Sarkhej Roza, a complex of architectural marvels"},{"time":"1:00 PM","description":"Lunch at a traditional Gujarati Thali restaurant"},{"time":"2:30 PM","description":"Discover the beautiful landscapes at the Kamla Nehru Zoo and Balvatika"},{"time":"4:00 PM","description":"Visit the inspiring Akshardham Temple and marvel at its magnificent architecture"},{"time":"6:00 PM","description":"Take a leisurely stroll along the Sabarmati Riverfront and enjoy the serene view"},{"time":"8:00 PM","description":"Experience the vibrant nightlife at Manek Chowk, famous for its street food and jewelry market"}]},{"day":3,"activities":[{"time":"9:00 AM","description":"Embark on a day trip to explore the UNESCO World Heritage Site of Rani ki Vav in Patan"},{"time":"1:00 PM","description":"Enjoy a traditional Gujarati lunch in Patan"},{"time":"2:30 PM","description":"Visit the iconic Sidi Saiyyed Mosque in Ahmedabad, known for its intricate stone lattice work"},{"time":"4:00 PM","description":"Explore the bustling streets of the Old Ahmedabad City, known as the Pols"},{"time":"7:00 PM","description":"Enjoy a final dinner at a rooftop restaurant overlooking the city"}]}],"key":"3-ahmedabad,in","_id":"64b39816f52e2b1c4457a932"}
export default PLANNEWTRIPPage;
