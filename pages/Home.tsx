import Link from "next/link";
import React from "react";

import tower2 from '../image/tower2.svg'
import icon from '../image/icon.svg'
import Image from "next/image";


export default function Panda() {
  return (
    <div>
      <div className="bg-gray-50 p-4 flex justify-between items-center ">
        <div className="flex  items-center">
          <a className="navbar-brand logo_name" href="/">
            <Image src={icon} alt="" width="30" height="24"
                 className="d-inline-block align-text-top"/>AIRSTAR
          </a>
        </div>

        <div>
          <Link href="/">
            <a className="inline-block p-1 text-blue-500 bg-white ring-2 ring-blue-500 hover:text-blue-800 hover:color-green600 rounded shadow-xl">
              Back to main page
            </a>
          </Link>
          <a href="#" className="inline-block p-3 hover:text-blue-900">
            Flights
          </a>
          <a href="#" className="inline-block p-3 hover:text-blue-900">
            Booking
          </a>
          <a href="/login" className="inline-block p-3 hover:text-blue-900">
            Login
          </a>
          <a href="/Register" className="inline-block p-3 hover:text-blue-900">
            Sign Up
          </a>
        </div>
      </div>

      <div>
        <div className="container2">
          <div className="side_photo">
            <Image src={tower2}/>
          </div>
          <div className="content">
            <p className="text1">BEST AIRLINES IN THE WORLD</p>
            {/*<Image src={Vector} className="vector2 position-relative top:390px"/>*/}
            <h1 className="text2">Travel, enjoy
              and live a new
              and full life</h1>
            <p className="text3">We analyze air tickets - we compare
              prices and transfer options, determining
              the cheapest air tickets and the most
              optimal flight option (direct or with a
              convenient transfer).</p>
            <button type="submit" formMethod="get" className="button">Find out more</button>
          </div>
          {/*<Image src={Vector} className="vector"/>*/}
        </div>
        <div className="container3">
          <div className="rectangle">
            <p className="text4 ">Subscribe to get information, latest news and other interesting offers
              about AIRSTAR</p>

            <p><input type="text" name="email" placeholder="Your email" className="input"/></p>

            <button type="submit" formMethod="get" className="button">Subscribe</button>
            {/*<Image src={mail} className="vector3"/>*/}
          </div>
          <div>
            {/*<Image src={pluses} className="vector4"/>*/}
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="container4">
          <div className="nav2">
            <div className="nav3">
              <p className="logo_name2">AIRSTAR</p>
              <ul className="menu ulmenu">
                <li className="lili">
                  <p>
                    Company
                  </p>
                </li>
                <li className="lili">
                  <p>
                    Support
                  </p>
                </li>
              </ul>
            </div>
            <div className="container5">
              <ul className="links list_1">
                <li>
                  <a href="#">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#">
                    Culture
                  </a>
                </li>
              </ul>
              <ul className="links list_2">
                <li>
                  <a href="#">
                    Help
                  </a>
                </li>
                <li>
                  <a href="#">
                    Service Status
                  </a>
                </li>
                <li>
                  <a href="#">
                    Report a bug
                  </a>
                </li>
              </ul>
              {/*<Image src={media} className="vector5"/>*/}

            </div>
            <p className="copyright">copyright@2021_Airstar.ua</p>
          </div>
        </div>
      </div>

    </div>
  );
}
