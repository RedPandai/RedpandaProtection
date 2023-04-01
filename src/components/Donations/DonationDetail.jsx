import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import adoptions from "../adoptionLinks";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const DonationDetail = () => {
  const { id } = useParams();
  const currency = "GBP";
  const style = { layout: "vertical" };
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [checked, setChecked] = useState(false);
  const [open, setOpen] = useState(false);
  const panda = adoptions.filter((adoption) => adoption.id == id)[0];
  const donateOptions = [
    { amount: 200, name: "200-option" },
    { amount: 80, name: "80-option" },
    { amount: 30, name: "30-option" },
    { amount: 20, name: "20-option" },
    { amount: 10, name: "10-option" },
    { amount: 5, name: "5-option" },
  ];

  const handleChange = (e) => {
    setPrice(e.target.value);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const createOrder = async (data) => {
    router.push(`/orders/${res.data._id}`);
  };

  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[price, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: price,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
            });
          }}
        />
      </>
    );
  };

  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">
      <section className="p-6 flex flex-col gap-6 justify-center items-center">
        <h1 className="font-bold text-2xl">Adoption Information</h1>
        <img
          className="w-50 h-60 object-cover rounded-lg"
          src={panda.image}
          alt={panda.name}
        />
        <p className="text-md font-bold">
          {panda.name}
          {panda.desc}
        </p>
      </section>

      <section className="border-2 grid justify-center items-center gap-6 p-6 m-6 max-w-md min-w-min rounded-lg">
        <h1 className="font-bold text-lg justify-self-center">
          Make a Difference for Red Pandas
        </h1>
        <div className="grid gap-6 grid-cols-3 justify-center items-center w-full">
          {donateOptions.map((option) => (
            <div key={option.name} className="flex">
              <input
                type="radio"
                id={option.name}
                name="amount"
                aria-label={option.name}
                className="peer appearance-none pointer-events-none  hover:bg-blue-300"
              />
              <label
                htmlFor={option.name}
                aria-hidden="true"
                className="w-full text-center peer-checked:bg-red-100 peer-checked:border-red-700 peer-checked:font-bold peer-checked:text-red-700 bg-white border-2 p-4 rounded-md cursor-pointer hover:bg-slate-100"
                onClick={() => setPrice(option.amount)}
              >
                <span className="text-md select-none">£{option.amount}</span>
              </label>
            </div>
          ))}
        </div>

        <div className="p-2 border-2 rounded-md focus-within:border-red-700">
          <span className="px-2">£</span>
          <input
            className="outline-0 text-2xl text-red-700 font-bold"
            type="text"
            autoComplete="off"
            value={price}
            onChange={handleChange}
          />
          <span>GBP</span>
        </div>
        <div className="py-4 justify-self-start grid w-full">
          <div>
            <input
              type="checkbox"
              id="dedicate"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <label className="ml-2" htmlFor="dedicate">
              Dedicate this donation
            </label>
          </div>

          {checked && (
            <div>
              <input
                placeholder="Name of Dedication"
                className="border-2 p-2 rounded-md w-full outline-none focus:border-red-700"
                onChange={handleName}
                value={name}
              />
              <div className="relative border-1 bg-yellow-200 rounded-md my-2 p-2 shadow-md after:absolute after:border-8 after:left-4 after:-top-4 after:-translate-x-1/2 after:h-0 after:w-0 after:border-yellow-200 after:border-l-transparent after:border-r-transparent after:border-t-transparent">
                Once you've donated, you'll be able to add a personal message
                and send a card.
              </div>
            </div>
          )}
        </div>
        {!open ? (
          <button
            className="bg-red-600 w-full text-white font-semibold p-4 rounded-lg hover:bg-red-800 disabled:bg-slate-300"
            disabled={!price}
            onClick={() => setOpen(!open)}
          >
            Donate Now
          </button>
        ) : (
          <PayPalScriptProvider
            options={{
              "client-id":
                "ATFNpQ-XyKz3su-Ns72K101JhgqFfOia57TG5SrHKTbEWmFc_nh7NBUoX0mWBrepUvRCl2qqY7r5hVUN",
              components: "buttons",
              currency: "GBP",
            }}
          >
            <ButtonWrapper currency={currency} showSpinner={false} />
          </PayPalScriptProvider>
        )}
      </section>
    </div>
  );
};

export default DonationDetail;