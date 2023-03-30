import React, { useEffect, useRef } from "react";

export const Paypal = () => {
  const paypal = useRef();
  
  useEffect(() => {
    window.paypal.Buttons({
        createOrder:(data, actions, err)=>{
            return actions.order.create({
                intent:"CAPTURE",
                purchase_units:[
                    {
                        desc: 'redpanda',
                        amount:{
                            currency_code:'GBP',
                            value:35.00
                        }
                    }
                ]
            })
        },
        onApprove: async(data, actions) => {
            const order = await actions.order.capture();
            console.log(order);
        },
        OnError:(err)=>console.log(err)
    }).render(paypal.current);
  }, []);
  return (
    <div>
      <div ref={paypal}></div>
    </div>
  );
};
