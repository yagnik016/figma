import React from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  return (
    <>
      <div
        className="flex flex-col items-start "
        style={{
          padding: "12px 120px",
          gap: "10px",
          width: "100%",
          height: "54px",
          backgroundColor: "#F7F7FB",
        }}
      >
        <ul className="flex justify-between items-center w-full">
          <li className="my-1 md:my-0 ">
            <Link to="/">Home</Link>
          </li>
          <li className="my-1 md:my-0">
            <Link to="/about">About Us</Link>
          </li>
          <li className="my-1 md:my-0">
            <Link to="/facilities">Facilities</Link>
          </li>
          <li className="my-1 md:my-0 ">
            <Link to="/health-packages">Health Packages</Link>
          </li>
          <li className="my-1 md:my-0 ">
            <Link to="/covid">Covid-19</Link>
          </li>
          <li className="my-1 md:my-0 ">
            <Link to="/mobile-app">Mobile-app</Link>
          </li>
          <li className="my-1 md:my-0 ">
            <Link to="/feedback">Feedback</Link>
          </li>
          <li className="my-1 md:my-0 ">
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className="my-1 md:my-0 ">
            <Link to="/media-coverage">Media Coverage</Link>
          </li>
          <li className="my-1 md:my-0 ">
            <Link to="/locate-us">Locate Us</Link>
          </li>
          <li className="my-1 md:my-0 ">
            <Link to="/booktest">Boook a test</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
