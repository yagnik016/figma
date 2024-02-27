import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavigationBar() {
  const location = useLocation();

  return (
    <>
      <div
        className="flex flex-col items-start"
        style={{
          padding: "12px 120px",
          gap: "10px",
          width: "100%",
          height: "54px",
          backgroundColor: "#FCC42C",
        }}
      >
        <ul className="flex justify-between items-center w-full">
          <li className="my-1 md:my-0">
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "font-bold underline" : ""
              }`}
            >
              Patients
            </Link>
          </li>
          <li className="my-1 md:my-0">
            <Link
              to="/doctors"
              className={`${
                location.pathname === "/doctors" ? "font-bold underline" : ""
              }`}
            >
              Doctors
            </Link>
          </li>
          <li className="my-1 md:my-0">
            <Link
              to="/business-partnership"
              className={`${
                location.pathname === "/business-partnership"
                  ? "font-bold underline"
                  : ""
              }`}
            >
              Business Partnership
            </Link>
          </li>
          <li className="my-1 md:my-0">
            <Link
              to="/corporate-tie-ups"
              className={`${
                location.pathname === "/corporate-tie-ups"
                  ? "font-bold underline"
                  : ""
              }`}
            >
              Corporate Tie-ups
            </Link>
          </li>
          <li className="my-1 md:my-0">
            <Link
              to="/investors"
              className={`${
                location.pathname === "/investors" ? "font-bold underline" : ""
              }`}
            >
              Investors
            </Link>
          </li>
          <li className="my-1 md:my-0">
            <Link
              to="/careers"
              className={`${
                location.pathname === "/careers" ? "font-bold underline" : ""
              }`}
            >
              Careers
            </Link>
          </li>
          <li className="my-1 md:my-0">
            <Link
              to="/contact-us"
              className={`${
                location.pathname === "/contact-us" ? "font-bold underline" : ""
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li className="my-1 md:my-0">
            <Link
              to="/locate-us"
              className={`${
                location.pathname === "/locate-us" ? "font-bold underline" : ""
              }`}
            >
              Locate Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
