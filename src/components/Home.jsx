import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { GiTrackedRobot } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import Navbar2 from "./Navbar2";
import { CarouselWithContent } from "./HomeSection";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-row"
        style={{
          boxSizing: "border-box",
          justifyContent: "center",
          alignItems: "center",
          padding: "32px, 120px",
          gap: "80px",
          width: "1440px",
          height: "98px",
          borderBottom: "1px solid #ECECEC",
        }}
      >
        <div
          className="bg-white-400 flex flex-row md:flex-row items-center"
          style={{
            width: "1200px",
            height: "73px",
            justifyContent: "space-between",
            padding: 0,
          }}
        >
          <div className="md:ml-4">
            <Logo />
          </div>
          <div className="md:ml-4 mt-4 md:mt-0">
            <div className="mx-3">
              <SearchBar />
            </div>
          </div>
          <div
            className="flex"
            style={{
              marginLeft: "30px",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
              gap: "6px",
              width: "150px",
              height: "24px",
            }}
          >
            <MdCall style={{ marginTop: "4px", marginRight: "3px" }} />
            <p>011-4725-2000</p>
          </div>

          <div
            className="flex"
            style={{
              marginLeft: "30px",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
              gap: "6px",
              width: "170px",
              height: "24px",
            }}
          >
            <GiTrackedRobot style={{ marginTop: "4px", marginRight: "3px" }} />
            <p>Track My Sample</p>
          </div>
          <div
            className="flex"
            style={{
              marginLeft: "30px",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
              gap: "6px",
              width: "66px",
              height: "24px",
            }}
          >
            <MdShoppingCart style={{ marginTop: "4px", marginRight: "3px" }} />
            <p>Cart</p>
          </div>
          <div
            className="flex"
            style={{
              marginLeft: "30px",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
              gap: "6px",
              width: "74px",
              height: "24px",
            }}
          >
            <FaUser style={{ marginTop: "4px", marginRight: "3px" }} />
            <p>Login</p>
          </div>
        </div>
      </div>
      <div>
        <Navbar2 />
      </div>
      <div>
        <CarouselWithContent />
      </div>
    </>
  );
}
