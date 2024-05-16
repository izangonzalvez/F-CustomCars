import React from "react";
import { PayPalButtons } from "@paypal/react-paypal-js";

const PaypalButton = ({ totalValue, invoice, onOrderCapture }) => {
    return (
        <PayPalButtons
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [
                        {
                            description: invoice,
                            amount: {
                                value: totalValue,
                            },
                        },
                    ],
                });
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);
                if (onOrderCapture) {
                    onOrderCapture(order);
                }
            }}
        />
    );
};

export default PaypalButton;
