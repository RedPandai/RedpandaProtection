import React from "react";
import { Link } from "react-router-dom";
import logo from "/Logo.jpg";

const Footer = () => {
  return (
    <div className="md:grid lg:grid-cols-3 md:grid-rows-2 flex flex-wrap gap-4 bg-JYColor bottom-0">
      <div className="flex m-6">
        <Link to="/" className="flex flex-col items-center self-center mr-8">
          <img src={logo} alt="logo" className="h-20 md:cursor-pointer mb-2" />
          <p className="leading-4 font-black text-center line-3 px-4">
            Red Panda Protection
          </p>
        </Link>
        <div className="justify-self-center">
          <h1 className="font-bold">Contact Us</h1>
          <address>123, Fluffy Mountain</address>
          <address>Nowhere, 23A 35B</address>
          <p>jingyangaijy@gmail.com</p>
          <p>Phone:12345678910</p>
        </div>
      </div>

      <div className="m-6">
        <h1 className="font-bold">Our Goal</h1>
        <p>
          Our Goal Red Panda Protection is committed to the conservation of red
          pandas and their habitat through the education and research
        </p>
      </div>

      <div className="m-6">
        <label className="font-bold my-2">Sign Up</label>
        <p className="text-sm my-2">Become a Member to Track work to Protect the Red Pandas</p>
        <input className='border border-gray-300 p-3 m-2 rounded-xl hover:bg-yellow-200 outline-none drop-shadow-md' type="text" placeholder="Email Address" />
        <button className="bg-redPanda text-white p-3 rounded-xl m-2 drop-shadow-md hover:bg-green-700">Sign up</button>
      </div>

      <div className="flex flex-col mx-6">
        <h1 className="font-bold my-3">Connect with Us</h1>
        <div className="flex gap-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35.304"
            height="35"
            viewBox="0 0 50.304 50"
          >
            <path
              id="Icon_awesome-facebook"
              data-name="Icon awesome-facebook"
              d="M50.867,25.715A25.152,25.152,0,1,0,21.785,50.563V32.985H15.4V25.715h6.389V20.173c0-6.3,3.753-9.785,9.5-9.785a38.709,38.709,0,0,1,5.631.491v6.187H33.743c-3.124,0-4.1,1.939-4.1,3.928v4.721H36.62L35.5,32.985h-5.86V50.563A25.161,25.161,0,0,0,50.867,25.715Z"
              transform="translate(-0.563 -0.563)"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 50 50"
          >
            <path
              id="Icon_awesome-twitter-square"
              data-name="Icon awesome-twitter-square"
              d="M44.643,2.25H5.357A5.359,5.359,0,0,0,0,7.607V46.893A5.359,5.359,0,0,0,5.357,52.25H44.643A5.359,5.359,0,0,0,50,46.893V7.607A5.359,5.359,0,0,0,44.643,2.25ZM39.185,19.973c.022.312.022.636.022.949,0,9.676-7.366,20.826-20.826,20.826A20.73,20.73,0,0,1,7.143,38.467a15.421,15.421,0,0,0,1.763.089,14.676,14.676,0,0,0,9.085-3.125,7.329,7.329,0,0,1-6.842-5.078,7.889,7.889,0,0,0,3.3-.134,7.32,7.32,0,0,1-5.859-7.187v-.089a7.315,7.315,0,0,0,3.3.926,7.3,7.3,0,0,1-3.259-6.094,7.228,7.228,0,0,1,.993-3.694,20.784,20.784,0,0,0,15.089,7.656A7.335,7.335,0,0,1,37.21,15.051a14.343,14.343,0,0,0,4.643-1.763,7.3,7.3,0,0,1-3.214,4.029,14.567,14.567,0,0,0,4.219-1.138A15.407,15.407,0,0,1,39.185,19.973Z"
              transform="translate(0 -2.25)"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35.011"
            height="35"
            viewBox="0 0 50.011 50"
          >
            <path
              id="Icon_awesome-instagram"
              data-name="Icon awesome-instagram"
              d="M25.006,14.418A12.819,12.819,0,1,0,37.825,27.238,12.8,12.8,0,0,0,25.006,14.418Zm0,21.154a8.334,8.334,0,1,1,8.334-8.334,8.349,8.349,0,0,1-8.334,8.334ZM41.34,13.894a2.99,2.99,0,1,1-2.99-2.99A2.983,2.983,0,0,1,41.34,13.894Zm8.49,3.035c-.19-4.005-1.1-7.553-4.039-10.476S39.32,2.614,35.315,2.413c-4.128-.234-16.5-.234-20.629,0-3.994.19-7.542,1.1-10.476,4.028S.371,12.912.17,16.917c-.234,4.128-.234,16.5,0,20.629.19,4.005,1.1,7.553,4.039,10.476s6.471,3.838,10.476,4.039c4.128.234,16.5.234,20.629,0,4.005-.19,7.553-1.1,10.476-4.039s3.838-6.471,4.039-10.476c.234-4.128.234-16.49,0-20.618ZM44.5,41.976a8.438,8.438,0,0,1-4.753,4.753c-3.291,1.305-11.1,1-14.738,1s-11.458.29-14.738-1a8.438,8.438,0,0,1-4.753-4.753c-1.305-3.291-1-11.1-1-14.738s-.29-11.458,1-14.738a8.438,8.438,0,0,1,4.753-4.753c3.291-1.305,11.1-1,14.738-1s11.458-.29,14.738,1A8.438,8.438,0,0,1,44.5,12.5c1.305,3.291,1,11.1,1,14.738S45.8,38.7,44.5,41.976Z"
              transform="translate(0.005 -2.238)"
            />
          </svg>
        </div>
      </div>

      <div className="col-span-2 mx-6 mb-3">
        <div className="flex gap-4 my-3">
          <p className="font-bold">Privacy and Policy</p>
          <p className="font-bold">Terms of Use</p>
          <p className="font-bold">Donation FAQs</p>
        </div>

        <p className="font-semibold text-sm">
          Red Panda Protection is a non-profit, tax-exempt charitable
          organization (tax ID number 1234567XXX) under Section 501(c)(3) of the
          Internal Revenue Code. Donations are tax-deductible as allowed by law.
        </p>
      </div>
    </div>
  );
};

export default Footer;
