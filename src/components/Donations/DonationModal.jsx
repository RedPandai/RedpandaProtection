import React, { useState, useContext, useEffect } from "react";
import { Loader } from "../Loader";
import { DonationContext } from "../context/DonationContext";
import { useNavigate } from "react-router-dom";
// import {
//   PayPalScriptProvider,
//   PayPalButtons,
//   usePayPalScriptReducer,
// } from "@paypal/react-paypal-js";

export const DonationModal = ({ id, price, handleModal, panda, open }) => {
  const navigate = useNavigate();
  const [donaterName, setDonaterName] = useContext(DonationContext);

  // const currency = "GBP";
  // const style = { layout: "vertical" };
  const [pending, setPending] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [namechecked, setNameChecked] = useState(false);
  const [checked, setChecked] = useState(false);
  const [donaterEmail, setDonaterEmail] = useState("");
  const [dedicationName, setDedicationName] = useState("");
  const [dedicationEmail, setDedicationEmail] = useState("");
  const [dedicationMessage, setDedicationMessage] = useState("");

  const [currentPage, setCurrtentPage] = useState(1);
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setAnimation(true);
      }, 100);
    } else {
      setTimeout(() => {
        setAnimation(false);
      }, 100);
    }
  }, [open]);
  const prevPage = () => {
    setCurrtentPage(currentPage - 1);
  };
  const nextPage = () => {
    setCurrtentPage(currentPage + 1);
  };
  const handlechecked1 = () => {
    setDonaterName("");
    setNameChecked(!namechecked);
  };
  const handlechecked2 = () => {
    setDedicationEmail("");
    setDedicationMessage("");
    setDedicationName("");
    setChecked(!checked);
  };
  const createOrder = {
    customer: donaterName,
    email: donaterEmail,
    dedication: {
      name: dedicationName,
      email: dedicationEmail,
      message: dedicationMessage,
    },
    total: price,
  };
  const handlePay = () => {
    setPending(true);
    setTimeout(() => {
      navigate(`/donation/${id}/success`);
      setPending(false);
    }, 2000);
  };

  return (
    <div
      className={`${
        open ? "flex" : "hidden"
      } absolute inset-0 w-full h-screen z-30 bg-slate-400 bg-opacity-70 flex justify-center items-center overflow-hidden`}
    >
      <div
        className="absolute top-2 right-2 text-red-500 text-xl px-2 cursor-pointer hover:text-red-700"
        onClick={handleModal}
      >
        <ion-icon name="close-circle" size="large"></ion-icon>
      </div>
      <div
        className={`${
          animation ? "opacity-100" : "opacity-0 scale-110 -translate-y-full"
        } transform transition-all duration-300 relative flex-col rounded-lg shadow-lg bg-white mx-auto w-96 h-1/2 items-center justfy-center`}
      >
        <div className={`h-full ${currentPage !== 1 && "hidden"}`}>
          {/* header */}
          <div className="px-4 py-3 border-b-2 border-gray-200">
            <h1 className="font-bold text-xl text-center pt-2">
              Please Input Your Information
            </h1>
          </div>
          {/* body */}
          <div className="grid gap-4 w-full p-6">
            <div className="grid gap-2 justify-start items-center self-start">
              <div className="flex justify-between">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <input
                  disabled={namechecked}
                  type="text"
                  id="name"
                  className="w-60 border-2 ml-2 p-2 outline-none rounded-md"
                  onChange={(e) => setDonaterName(e.target.value)}
                  value={donaterName}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="email" className="font-semibold">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-60 border-2 ml-2 p-2 outline-none rounded-md"
                  onChange={(e) => setDonaterEmail(e.target.value)}
                  value={donaterEmail}
                />
              </div>
            </div>
            <div className="flex justify-start items-center">
              <input
                id="anonymous"
                onChange={handlechecked1}
                type="checkbox"
                className="mr-2"
                checked={namechecked}
              />
              <label
                htmlFor="anonymous"
                className="font-semibold hover:cursor-pointer"
              >
                I want to be Anonymous
              </label>
            </div>
            <img
              src="/Logo.jpg"
              className="w-32 justify-self-center self-center select-none"
            ></img>
          </div>
          {/* footer */}
          <div className="absolute bottom-0 left-0 px-4 py-3 border-t-2 border-gray-200 w-full flex justify-end items-center">
            <button
              className="bg-red-600 text-white p-2 font-bold rounded-full hover:bg-red-700"
              onClick={nextPage}
            >
              Continue
            </button>
          </div>
        </div>

        <div className={`h-full ${currentPage !== 2 && "hidden"}`}>
          <div className="px-4 py-3 border-b-2 border-gray-200 grid grid-cols-4 items-center justify-center">
            <span className="cursor-pointer mr-4" onClick={prevPage}>
              <ion-icon name="arrow-back-outline" size="large"></ion-icon>
            </span>
            <span className="col-span-3 font-bold text-xl">
              Dedication information
            </span>
          </div>

          <div className="grid w-full p-6">
            <div className="grid gap-2 justify-start items-center">
              <div className="flex justify-between">
                <label htmlFor="name2" className="font-semibold">
                  Name
                </label>
                <input
                  type="text"
                  id="name2"
                  className="w-60 p-2 border-2 outline-none rounded-md"
                  onChange={(e) => setDedicationName(e.target.value)}
                  value={dedicationName}
                  disabled={checked}
                />
              </div>
              <div className="flex justify-between">
                <label htmlFor="email2" className="font-semibold">
                  E-mail
                </label>
                <input
                  disabled={checked}
                  type="email"
                  id="email2"
                  className="w-60 border-2 p-2 outline-none rounded-md"
                  onChange={(e) => setDedicationEmail(e.target.value)}
                  value={dedicationEmail}
                />
              </div>
              <div className="flex justify-between">
                <label className="font-semibold">Message</label>
                <textarea
                  disabled={checked}
                  className="ml-2 w-60 border-2 resize-none outline-none rounded-md p-2 h-36"
                  onChange={(e) => setDedicationMessage(e.target.value)}
                  value={dedicationMessage}
                ></textarea>
              </div>
            </div>
            <div className="flex justify-start items-center mt-4">
              <input
                id="dedication"
                onChange={handlechecked2}
                type="checkbox"
                className="mr-2"
                checked={checked}
              />
              <label
                htmlFor="dedication"
                className="font-semibold hover:cursor-pointer"
              >
                No Dedication
              </label>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 px-4 py-3 border-t-2 border-gray-200 w-full flex justify-end items-center">
            <button
              className="bg-red-600 text-white p-2 font-bold rounded-full hover:bg-red-700"
              onClick={nextPage}
            >
              Continue
            </button>
          </div>
        </div>

        <div className={`h-full ${currentPage !== 3 && "hidden"}`}>
          <div className="px-4 py-3 border-b-2 border-gray-200 grid grid-cols-4 items-center justify-center">
            <span className="cursor-pointer pr-4" onClick={prevPage}>
              <ion-icon name="arrow-back-outline" size="large"></ion-icon>
            </span>
            <span className="col-span-3 font-bold text-xl">
              Donation Detail
            </span>
          </div>

          <div className="p-6 w-full flex-col justify-start items-center text-md font-semibold">
            <div className="text-lg text-orange-700">{`Your donation is: £${price} to ${panda.name}`}</div>
            <div>{donaterName && `Name: ${donaterName}`}</div>
            <div>{donaterEmail && `E-mail: ${donaterEmail}`}</div>
            <div>{dedicationName && `Dedicate to: ${dedicationName}`}</div>
            <div>{dedicationEmail && `Dedicate Email:${dedicationEmail}`}</div>
            <div className="break-all">
              {dedicationMessage && `Message: ${dedicationMessage}`}
            </div>
          </div>
          <div className="absolute bottom-0 left-0 px-4 py-3 border-t-2 border-gray-200 w-full flex justify-end items-center">
            <button
              className="bg-red-600 text-white p-2 rounded-lg font-bold hover:bg-red-700"
              onClick={handlePay}
            >
              Pay Now
            </button>
          </div>
          {pending && (
            <div>
              <Loader />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
