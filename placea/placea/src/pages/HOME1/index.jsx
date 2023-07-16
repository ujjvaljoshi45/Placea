import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Input, Line, List, Text } from "components";

const HOME1Page = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white-A700 flex flex-col font-sourcesanspro items-center justify-start mx-auto w-full">
        <div className="h-[1187px] md:px-5 relative w-full">
          <div className="md:h-[1015px] h-[903px] sm:h-[909px] mb-[-29px] mx-auto w-full z-[1]">
            <Img
              className="h-[874px] m-auto object-cover w-full"
              src="images/img_mansonyimlydo.png"
              alt="mansonyimlydo"
            />
            <div className="absolute bg-black-900_c4 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[17px] w-full">
              <div className="flex flex-col items-start justify-start mb-[77px] w-[97%] md:w-full">
                <header className="flex md:flex-col flex-row font-lexendtera md:gap-5 items-center justify-center ml-1 md:ml-[0] w-full">
                  <Text
                    className="text-5xl sm:text-[38px] md:text-[44px] text-white-A700 tracking-[4.80px]"
                    size="txtLexendTeraBold48"
                  >
                    <span className="text-white-A700 font-lexendtera text-left font-bold">
                      <a href="/HOME1">PLACE</a>
                    </span>
                    <span className="md:text-5xl text-white-A700 font-lexendtera text-left text-[64px] font-bold">
                      <a href="/HOME1">A</a>
                    </span>
                  </Text>
                  <ul className="flex md:flex-1 sm:flex-col flex-row font-sourcesanspro sm:hidden items-center justify-center mb-3 md:ml-[0] ml-[87px] md:mt-0 mt-7 w-[39%] md:w-full common-row-list">
                    <li>
                      <a
                        href="javascript:"
                        className="text-[15px] text-white-A700 tracking-[1.50px]"
                      >
                        <Text size="txtSourceSansProBold15"><a href="/HOME1">HOME</a></Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="ml-[27px] text-[15px] text-white-A700 tracking-[1.50px]"
                      >
                        <Text size="txtSourceSansProBold15">VERTUAL VISIT</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="ml-[30px] text-[15px] text-white-A700 tracking-[1.50px]"
                      >
                        <Text size="txtSourceSansProBold15">BOOKING</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="ml-[35px] text-[15px] text-white-A700 tracking-[1.50px]"
                      >
                        <Text size="txtSourceSansProBold15">DEALS</Text>
                      </a>
                    </li>
                    <li>
                      <a
                        href="javascript:"
                        className="ml-11 text-[15px] text-white-A700 tracking-[1.50px]"
                      >
                        <Text size="txtSourceSansProBold15">BLOG</Text>
                      </a>
                    </li>
                  </ul>
                  <Img
                    className="h-[30px] mb-[7px] md:ml-[0] ml-[257px] md:mt-0 mt-[22px] w-[29px]"
                    src="images/img_search.svg"
                    alt="search_One"
                  />
                  <Img
                    className="h-[29px] mb-2 md:ml-[0] ml-[33px] md:mt-0 mt-[22px]"
                    src="images/img_user.svg"
                    alt="user"
                  />
                </header>
                <Text
                  className="mt-[133px] md:text-5xl text-[70px] text-white-A700 w-[44%] sm:w-full"
                  size="txtSourceSansProBold70"
                >
                  <span className="text-white-A700 font-sourcesanspro text-left font-bold">
                    Discover First{" "}
                  </span>
                  <span className="md:text-5xl text-white-A700 font-sourcesanspro text-left text-[92px] font-bold">
                    |
                  </span>
                  <span className="text-white-A700 font-sourcesanspro text-left font-bold">
                    {" "}
                    Journey Next.
                  </span>
                </Text>
                <div className="h-[180px] md:h-[207px] ml-1.5 md:ml-[0] mt-12 relative w-[53%] md:w-full">
                  <div className="absolute bottom-[0] flex sm:flex-col flex-row font-sourcesanspro sm:gap-10 items-center justify-between left-[0] shadow-bs w-[74%]">
                    <Button
                      className="common-pointer bg-red-900 cursor-pointer flex items-center justify-center min-w-[210px] pl-[25px] pr-[18px] py-2 rounded-[20px]"
                      onClick={() => navigate("/plannewtrip")}
                      leftIcon={
                        <div className="mt-1 mb-1.5 mr-[11px] bg-white-A700">
                          <Img src="images/img_plus.svg" alt="plus" />
                        </div>
                      }
                    >
                      <div className="font-bold leading-[normal] sm:pl-5 text-left text-white-A700 text-xl">
                        PLAN NEW TRIP
                      </div>
                    </Button>
                    <div className="bg-red-900 flex flex-row gap-3 items-center justify-center p-[7px] rounded-[20px]">
                      <Img
                        className="h-[11px] ml-[21px]"
                        src="images/img_eye.svg"
                        alt="eye"
                      />
                      <Text
                        className="mr-2.5 text-white-A700 text-xl"
                        size="txtSourceSansProBold20"
                      >
                        PRE PLAN TRIP
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="absolute inset-x-[0] mx-auto text-2xl md:text-[22px] text-white-A700_9e sm:text-xl top-[0] w-full"
                    size="txtInterRegular24"
                  >
                    Discover new destinations and plan your dream vacation with
                    our user-friendly travel planning website.
                  </Text>
                </div>
                <Button
                  className="bg-white-A700_21 cursor-pointer flex items-center justify-center min-w-[216px] md:ml-[0] ml-[982px] mt-[95px] px-[35px] py-[7px] rounded-[15px]"
                  leftIcon={
                    <div className="mr-[15px] bg-white-A700 my-px">
                      <Img src="images/img_vector.svg" alt="Vector" />
                    </div>
                  }
                >
                  <div className="font-bold font-sourcesanspro leading-[normal] sm:px-5 text-left text-sm text-white-A700 tracking-[1.40px]">
                    VISIT VIRTUAL
                  </div>
                </Button>
                <div className="flex sm:flex-col flex-row font-sourcesanspro sm:gap-5 items-start justify-end md:ml-[0] ml-[586px] mt-[13px] w-[48%] md:w-full">
                  <Img
                    className="h-3 sm:mt-0 mt-[7px]"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                  <Text
                    className="mb-0.5 sm:ml-[0] ml-[426px] text-[13px] text-white-A700_b5 tracking-[2.60px]"
                    size="txtSourceSansProBold13"
                  >
                    NEW YORK
                  </Text>
                  <Img
                    className="h-[7px] sm:ml-[0] ml-[21px] sm:mt-0 mt-1"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown_One"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black-900 flex flex-col items-center justify-start mt-auto mx-auto p-[39px] sm:px-5 w-full">
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
            <div className="flex md:flex-col flex-row gap-[19px] items-center justify-center mb-6 mt-7 w-[74%] md:w-full">
              <Input
                name="group105"
                placeholder="From"
                className="font-semibold leading-[normal] md:text-[22px] p-0 placeholder:text-black-900_a0 sm:px-5 sm:text-xl text-2xl text-black-900_a0 text-left tracking-[2.40px] w-full"
                wrapClassName="bg-white-A700 pb-[13px] pl-[25px] pr-[35px] pt-[9px] rounded-[10px] w-[33%] md:w-full"
              ></Input>
              <Text
                className="bg-white-A700 h-[54px] justify-center pb-[13px] pt-[9px] sm:px-5 px-[35px] rounded-[10px] text-2xl md:text-[22px] text-black-900_a0 sm:text-xl tracking-[2.40px] w-[285px]"
                size="txtSourceSansProSemiBold24Black900a0"
              >
                To
              </Text>
              <Button className="bg-white-A700 cursor-pointer font-semibold leading-[normal] min-w-[104px] py-[13px] rounded-[10px] text-[22px] text-black-900_a0 text-center sm:text-lg md:text-xl tracking-[2.20px]">
                Days
              </Button>
              <Button className="bg-red-900 cursor-pointer font-semibold leading-[normal] min-w-[155px] py-[11px] rounded-[10px] text-2xl md:text-[22px] text-center text-white-A700 sm:text-xl tracking-[2.40px]">
                Search
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1133px] mt-6 mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[11px] items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 tracking-[3.20px]"
              size="txtSourceSansProBold32"
            >
              PLAN TRIP BY THEME
            </Text>
            <div className="flex md:flex-col flex-row gap-[25px] items-center justify-between w-full">
              <div className="h-[404px] relative w-[8%] md:w-full">
                <Img
                  className="h-[404px] m-auto object-cover rounded-[25px] w-full"
                  src="images/img_rectangle71.png"
                  alt="rectangleSeventyOne"
                />
                <Img
                  className="absolute bottom-[3%] h-16 inset-x-[0] mx-auto rounded-[50%] w-16"
                  src="images/img_rectangle72.png"
                  alt="rectangleSeventyTwo"
                />
              </div>
              <div className="h-[404px] relative w-[61%] md:w-full">
                <Img
                  className="h-[404px] m-auto object-cover rounded-[25px] w-full"
                  src="images/img_rectangle70.png"
                  alt="rectangleSeventy"
                />
                <div className="absolute bottom-[3%] flex flex-row gap-[18px] items-center justify-between left-[2%] w-1/2">
                  <Button className="bg-white-A700 flex h-16 items-center justify-center p-[15px] rounded-[50%] w-16">
                    <Img src="images/img_favorite.svg" alt="favorite" />
                  </Button>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[2.40px]"
                      size="txtSourceSansProBold24"
                    >
                      ROMANTIC TRIP
                    </Text>
                    <Text
                      className="text-white-A700 text-xl tracking-[2.00px]"
                      size="txtSourceSansProBold20"
                    >
                      Go with your specialone
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="md:flex-1 sm:flex-col flex-row gap-[25px] grid grid-cols-3 w-[28%] md:w-full"
                orientation="horizontal"
              >
                <div className="bg-blue_gray-100 flex flex-col items-center justify-start sm:ml-[0] rounded-[25px] w-full">
                  <div className="h-[404px] relative w-full">
                    <Img
                      className="h-[404px] m-auto object-cover rounded-[25px] w-full"
                      src="images/img_rectangle76.png"
                      alt="rectangleSeventySix"
                    />
                    <Img
                      className="absolute bottom-[3%] h-16 inset-x-[0] mx-auto rounded-[50%] w-16"
                      src="images/img_rectangle75.png"
                      alt="rectangleSeventyFive"
                    />
                  </div>
                </div>
                <div className="bg-blue_gray-100 flex flex-col items-center justify-start sm:ml-[0] rounded-[25px] w-full">
                  <div className="h-[404px] relative w-full">
                    <Img
                      className="h-[404px] m-auto object-cover rounded-[25px] w-full"
                      src="images/img_rectangle78.png"
                      alt="rectangleSeventyEight"
                    />
                    <Img
                      className="absolute bottom-[3%] h-16 inset-x-[0] mx-auto rounded-[50%] w-16"
                      src="images/img_rectangle79.png"
                      alt="rectangleSeventyNine"
                    />
                  </div>
                </div>
                <div className="bg-blue_gray-100 flex flex-col items-center justify-start sm:ml-[0] rounded-[25px] w-full">
                  <div className="h-[404px] relative w-full">
                    <Img
                      className="h-[404px] m-auto object-cover rounded-[25px] w-full"
                      src="images/img_rectangle81.png"
                      alt="rectangleEightyOne"
                    />
                    <Img
                      className="absolute bottom-[3%] h-16 inset-x-[0] mx-auto rounded-[50%] w-16"
                      src="images/img_rectangle82.png"
                      alt="rectangleEightyTwo"
                    />
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <div className="h-[325px] sm:h-[369px] md:h-[549px] mt-11 md:px-5 relative w-full">
          <Img
            className="absolute h-[325px] inset-y-[0] my-auto object-cover right-[0] w-[44%]"
            src="images/img_istockphoto627892060612x612.png"
            alt="istockphoto6278"
          />
          <div
            className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-start justify-start left-[0] my-auto p-[60px] md:px-10 sm:px-5 w-[79%]"
            style={{ backgroundImage: "url('images/img_group112.svg')" }}
          >
            <div className="flex flex-col items-start justify-start mb-[19px] mt-2 w-[89%] md:w-full">
              <Text
                className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[4.80px]"
                size="txtSourceSansProBold48"
              >
                BOOK HOTEL
              </Text>
              <Text
                className="ml-1 md:ml-[0] text-black-900 text-sm tracking-[1.40px] w-[95%] sm:w-full"
                size="txtSourceSansProBold14"
              >
                Simplify your travel plans with seamless online hotel booking,
                ensuring hassle-free accommodation tailored to your needs.
              </Text>
              <div className="flex md:flex-col flex-row gap-3.5 items-center justify-between mt-[30px] w-full">
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[7px] rounded-[5px]">
                  <Text
                    className="ml-2 md:ml-[0] text-black-900 text-xs tracking-[1.20px]"
                    size="txtSourceSansProBold12"
                  >
                    Where
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[7px] text-gray-400 text-sm tracking-[1.40px]"
                    size="txtSourceSansProSemiBold14"
                  >
                    City Name
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-start justify-start p-[7px] rounded-[5px]">
                  <Text
                    className="md:ml-[0] ml-[7px] text-black-900 text-xs tracking-[1.20px]"
                    size="txtSourceSansProBold12"
                  >
                    When
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[11px] text-[13px] text-gray-900 tracking-[1.30px]"
                    size="txtSourceSansProSemiBold13"
                  >
                    2/Jan - 7/Jan{" "}
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-col items-center justify-end p-1.5 rounded-[5px]">
                  <div className="flex flex-col items-center justify-start mt-0.5 w-4/5 md:w-full">
                    <Text
                      className="text-black-900 text-xs tracking-[1.20px]"
                      size="txtSourceSansProBold12"
                    >
                      Rooms, Guests
                    </Text>
                    <div className="flex flex-row items-center justify-between w-[64%] md:w-full">
                      <Text
                        className="text-base text-gray-900 tracking-[1.60px]"
                        size="txtSourceSansProBold16"
                      >
                        1
                      </Text>
                      <Text
                        className="text-base text-gray-900 tracking-[1.60px]"
                        size="txtSourceSansProBold16"
                      >
                        2
                      </Text>
                    </div>
                  </div>
                </div>
                <Button className="bg-red-900 cursor-pointer font-bold leading-[normal] min-w-[204px] md:mt-0 my-1 py-[11px] rounded-[22px] text-base text-center text-white-A700 tracking-[1.60px]">
                  Search For Booking
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start max-w-[1137px] mt-[46px] mx-auto md:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-5 items-end justify-start w-full">
            <div className="flex md:flex-1 flex-col gap-[18px] items-start justify-start w-[46%] md:w-full">
              <Text
                className="ml-1 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-black-900 tracking-[4.00px]"
                size="txtSourceSansProBold40"
              >
                READING SECTION
              </Text>
              <List
                className="flex flex-col gap-[25px] items-center w-full"
                orientation="vertical"
              >
                <div className="h-[347px] relative w-full">
                  <Img
                    className="h-[347px] m-auto object-cover rounded-[10px] w-full"
                    src="images/img_rectangle35.png"
                    alt="rectangleThirtyFive"
                  />
                  <div className="absolute backdrop-opacity-[0.5] bg-gray-700_72 blur-[4.00px] bottom-[0] flex flex-col inset-x-[0] items-start justify-start mx-auto p-[7px] rounded-[10px] w-full">
                    <Text
                      className="md:ml-[0] ml-[13px] text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[2.40px]"
                      size="txtSourceSansProBold24"
                    >
                      UDAIPUR - A HEART OF HERITAGE
                    </Text>
                    <Text
                      className="mb-2.5 md:ml-[0] ml-[13px] text-justify text-sm text-white-A700_bf tracking-[1.40px] w-[76%] sm:w-full"
                      size="txtSourceSansProBold14WhiteA700bf"
                    >
                      <>
                        Udaipur: A City of Lakes and Rich Heritage Udaipur is a
                        city located in the western Indian state of Rajasthan,
                        also known as the &quot;Land ...
                      </>
                    </Text>
                  </div>
                </div>
                <div className="h-[347px] relative w-full">
                  <Img
                    className="h-[347px] m-auto object-cover rounded-[10px] w-full"
                    src="images/img_rectangle87.png"
                    alt="rectangleEightySeven"
                  />
                  <div className="absolute bottom-[5%] flex flex-col gap-6 items-start justify-start left-[4%]">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700 sm:text-xl tracking-[2.40px]"
                      size="txtSourceSansProBold24"
                    >
                      TOURIST ATRACTION PLACE IN INDIA - LADAKH
                    </Text>
                    <Text
                      className="text-justify text-sm text-white-A700_bf tracking-[1.40px] w-[91%] sm:w-full"
                      size="txtSourceSansProBold14WhiteA700bf"
                    >
                      Ladakh is a region administered by India as a union
                      territory, which constitutes a part of the larger Kashmir
                      region and has been the subjec...
                    </Text>
                  </div>
                </div>
              </List>
            </div>
            <div className="flex md:flex-1 flex-col gap-[21px] items-center justify-start md:ml-[0] ml-[50px] md:mt-0 mt-[69px] w-[18%] md:w-full">
              <Img
                className="h-[164px] md:h-auto object-cover rounded-bl-[15px] rounded-br-[15px] w-full"
                src="images/img_rectangle37.png"
                alt="rectangleThirtySeven"
              />
              <Img
                className="h-[164px] md:h-auto object-cover rounded-[15px] w-full"
                src="images/img_rectangle84.png"
                alt="rectangleEightyFour"
              />
              <Img
                className="h-[164px] md:h-auto object-cover rounded-[15px] w-full"
                src="images/img_rectangle85.png"
                alt="rectangleEightyFive"
              />
              <Img
                className="h-[164px] md:h-auto object-cover rounded-tl-[15px] rounded-tr-[15px] w-full"
                src="images/img_rectangle86.png"
                alt="rectangleEightySix"
              />
            </div>
            <div className="flex flex-col items-start justify-start mb-[22px] md:ml-[0] ml-[18px] md:mt-0 mt-[83px]">
              <Text
                className="text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[2.40px]"
                size="txtSourceSansProBold24Black90001"
              >
                HEAVEN OF INDIA - KASHMIR
              </Text>
              <Text
                className="mt-[7px] text-black-900_bf text-justify text-sm tracking-[1.40px] w-full"
                size="txtSourceSansProBold14Black900bf"
              >
                Kashmir Jammu and Kashmir is a region administered by India as a
                union territory and consisting of the southern portion of the
                larger Kash...
              </Text>
              <a
                href="javascript:"
                className="mt-[3px] text-justify text-red-900 text-sm tracking-[1.40px]"
              >
                <Text size="txtSourceSansProBold14Red900">READ MORE</Text>
              </a>
              <Text
                className="mt-[52px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[2.40px]"
                size="txtSourceSansProBold24Black90001"
              >
                BETHLEHEM - CITY OF DEVID
              </Text>
              <Text
                className="mt-[7px] text-black-900_bf text-justify text-sm tracking-[1.40px] w-full"
                size="txtSourceSansProBold14Black900bf"
              >
                Bethlehem Bethlehem is a city in the central West Bank,
                Palestine, about 10 km south of Jerusalem. Its population is
                approximately 25,000, a...
              </Text>
              <a
                href="javascript:"
                className="mt-[3px] text-justify text-red-900 text-sm tracking-[1.40px]"
              >
                <Text size="txtSourceSansProBold14Red900">READ MORE</Text>
              </a>
              <Text
                className="mt-[52px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[2.40px]"
                size="txtSourceSansProBold24Black90001"
              >
                TIAN TAN BUDDHA
              </Text>
              <Text
                className="mt-[7px] text-black-900_bf text-justify text-sm tracking-[1.40px] w-full"
                size="txtSourceSansProBold14Black900bf"
              >
                The Big Buddha is an enormous bronze sculpture of Buddha,
                finished in 1993, and situated at Ngong Ping, Lantau Island, in
                Hong Kong. The s...
              </Text>
              <a
                href="javascript:"
                className="mt-[3px] text-justify text-red-900 text-sm tracking-[1.40px]"
              >
                <Text size="txtSourceSansProBold14Red900">READ MORE</Text>
              </a>
              <Text
                className="mt-[51px] text-2xl md:text-[22px] text-black-900_01 sm:text-xl tracking-[2.40px]"
                size="txtSourceSansProBold24Black90001"
              >
                STRASBOURG
              </Text>
              <Text
                className="mt-[7px] text-black-900_bf text-justify text-sm tracking-[1.40px] w-full"
                size="txtSourceSansProBold14Black900bf"
              >
                Strasbourg Derivation and names Before the fifth century BC, the
                city was known as Argantorati , a Celtic Gaulish name Latinised
                first as Ar...
              </Text>
              <a
                href="javascript:"
                className="mt-[3px] text-justify text-red-900 text-sm tracking-[1.40px]"
              >
                <Text size="txtSourceSansProBold14Red900">READ MORE</Text>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white-A700 border border-black-900 border-solid flex flex-row items-center justify-start mt-[59px] p-11 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 gap-[65px] items-center justify-start mb-[5px] ml-[83px] w-[89%]">
            <Text
              className="md:text-5xl text-9xl text-black-900 tracking-[12.80px]"
              size="txtSourceSansProBold128"
            >
              DEALS
            </Text>
            <Text
              className="md:text-5xl text-9xl text-black-900 tracking-[12.80px]"
              size="txtSourceSansProBold128"
            >
              50% OFF
            </Text>
          </div>
        </div>
        <footer className="flex items-center justify-center mt-8 md:px-5 w-full">
          <div
            className="bg-cover bg-no-repeat flex flex-col h-[584px] items-center justify-center w-full"
            style={{ backgroundImage: "url('images/img_group120.png')" }}
          >
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[584px] items-center justify-center p-[50px] md:px-10 sm:px-5 w-full"
              style={{ backgroundImage: "url('images/img_group120.png')" }}
            >
              <ul className="flex flex-col items-center justify-center mb-[30px] w-[96%] md:w-full common-column-list">
                <li>
                  <a href="javascript:">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start">
                      <div className="flex flex-col gap-[17px] items-start justify-start w-[17%] md:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                          size="txtSourceSansProBold32"
                        >
                          PLACEA
                        </Text>
                        <ul className="flex flex-col gap-[13px] items-start justify-start w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            >
                              <Text size="txtSourceSansProSemiBold22">
                                BLOG
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            >
                              <Text size="txtSourceSansProSemiBold22">
                                GET IN TOUCH
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            >
                              <Text size="txtSourceSansProSemiBold22">
                                PRIVACY POLICY
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            >
                              <Text size="txtSourceSansProSemiBold22">
                                TERM & CONDITION
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col gap-[17px] items-start justify-start md:ml-[0] ml-[151px] w-[17%] md:w-full">
                        <Text
                          className="md:text-3xl sm:text-[28px] text-[32px] text-black-900"
                          size="txtSourceSansProBold32"
                        >
                          FEATURES
                        </Text>
                        <ul className="flex flex-col gap-[13px] items-start justify-start w-full common-column-list">
                          <li>
                            <a
                              href="javascript:"
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            >
                              <Text size="txtSourceSansProSemiBold22">
                                ALL COUNTRY
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            >
                              <Text size="txtSourceSansProSemiBold22">
                                BOOKING
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            >
                              <Text size="txtSourceSansProSemiBold22">
                                PRE PLANNED TRIP
                              </Text>
                            </a>
                          </li>
                          <li>
                            <a
                              href="javascript:"
                              className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                            >
                              <Text size="txtSourceSansProSemiBold22">
                                TRIP VIDEO PLAN
                              </Text>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="flex flex-col items-start justify-start md:ml-[0] ml-[222px] w-[35%] md:w-full">
                        <Text
                          className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                          size="txtSourceSansProBold24Black900"
                        >
                          SIGNUP TO OUR NEWSLETTER
                        </Text>
                        <div className="flex flex-col items-center justify-start mt-[5px] w-full">
                          <Input
                            name="groupNinetyTwo"
                            placeholder="Enter your email address...."
                            className="font-semibold leading-[normal] p-0 placeholder:text-gray-400_01 text-base text-gray-400_01 text-left w-full"
                            wrapClassName="bg-white-A700 pb-[9px] pt-3 px-3 rounded-[10px] w-full"
                            type="email"
                          ></Input>
                          <Button className="bg-red-900 cursor-pointer font-semibold leading-[normal] min-w-[385px] sm:min-w-full mt-1 py-[5px] rounded-[10px] text-center text-white-A700 text-xl">
                            SUBSCRIBE
                          </Button>
                        </div>
                        <Text
                          className="mt-[7px] text-black-900 text-xl"
                          size="txtSourceSansProRegular20"
                        >
                          GET THE LETEST NEWS AND OFFER FIRST
                        </Text>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <Line className="bg-white-A700_4f h-[3px] mt-[69px]" />
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex sm:flex-col flex-row font-lexendtera gap-[37px] items-start justify-center mt-8">
                      <Text
                        className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 tracking-[4.80px]"
                        size="txtLexendTeraBold48Black900"
                      >
                        <span className="text-black-900 font-lexendtera text-left font-bold">
                          PLACE
                        </span>
                        <span className="md:text-5xl text-black-900 font-lexendtera text-left text-[64px] font-bold">
                          A
                        </span>
                      </Text>
                      <div className="flex flex-row gap-[18px] items-center justify-between sm:mt-0 mt-0.5 w-[43%] sm:w-full">
                        <div className="h-[52px] relative w-1/5">
                          <Img
                            className="h-[52px] m-auto object-cover rounded-[20px] w-full"
                            src="images/img_rectangle10.png"
                            alt="rectangleTen"
                          />
                          <Img
                            className="absolute bottom-[19%] h-[29px] inset-x-[0] mx-auto"
                            src="images/img_camera.svg"
                            alt="camera"
                          />
                        </div>
                        <div className="bg-indigo-600 flex flex-col items-center justify-end p-[9px] rounded-[20px] w-1/5">
                          <Img
                            className="h-[31px]"
                            src="images/img_facebook.svg"
                            alt="facebook"
                          />
                        </div>
                        <div className="bg-blue-500 flex flex-col items-center justify-start p-2 rounded-[20px] w-1/5">
                          <Img
                            className="h-[25px] mb-0.5 mt-1.5"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                        </div>
                        <div className="bg-red-A700 flex flex-col items-center justify-start p-1 rounded-[20px] w-1/5">
                          <Img
                            className="h-[26px] my-2"
                            src="images/img_subtract.svg"
                            alt="subtract"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="javascript:">
                    <div className="flex flex-row font-karla gap-[7px] items-end justify-center mt-[26px]">
                      <Img
                        className="h-[38px] md:h-auto object-cover w-[7%]"
                        src="images/img_.png"
                        alt="Three"
                      />
                      <Text
                        className="mb-[3px] mt-[7px] sm:text-[19px] md:text-[21px] text-[23px] text-black-900"
                        size="txtKarlaRegular23"
                      >
                        Copyright All Right reserved.
                      </Text>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default HOME1Page;
