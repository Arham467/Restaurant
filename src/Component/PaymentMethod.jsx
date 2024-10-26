import React, { useContext, useState } from "react";
import Container from "./Container";
import nagad from '../assets/nagad.png'
import upay_icon from '../assets/upay_icon.webp'
import cash from '../assets/cash.webp'
import bkash from '../assets/bkash.webp'
import ssl from '../assets/ssl.webp'
import logo6 from '../assets/logo6.png'
import Context from "../Context/Context";

const paymentMethods = [
    {
        id: 1,
        name: "Cash on Delivery",
        icon: cash,
        description: "You woill be directed to bKash to complete your payment.",
    },
    {
        id: 2,
        name: "bkash",
        icon: bkash,
        description: "You woill be directed to bKash to complete your payment.",
    },
    {
        id: 3,
        name: "Upay",
        icon: upay_icon,
        description: "You will be directed to Upay to complete your payment.",
    },
    {
        id: 4,
        name: "nagad",
        icon: nagad,
        description: "You will be directed to Nagad to complete your payment.",
    },
    {
        id: 5,
        name: "Other Payments",
        icon: ssl,
        description: "You woill be directed to bKash to complete your payment.",
    },
];

const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0]);

    const handleSelect = (method) => {
        setSelectedMethod(method);
    };

    const { checkOut } = useContext(Context)

    let Subtotal = Number((checkOut.quantity * checkOut.price).toFixed(2))
    let VAT = Number((checkOut.quantity * checkOut.price) * 0.15)
    let Fee = Number(1)

    return (
        <Container className={'my-10 z-10 relative border-2 rounded-xl'}>
            <div className="w-full flex justify-between gap-x-40 px-10 pt-10 pb-10 bg-white shadow-2xl">
                {/* Left side - Payment methods */}
                <div className="w-[450px] ml-5">
                    <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>
                    <ul>
                        {paymentMethods.map((method) => (
                            <li
                                key={method.id}
                                className={`p-2 font-montserrat text-base cursor-pointer flex items-center space-x-2 hover:bg-gray-100 transition border ${selectedMethod.id === method.id ? "bg-gray-200" : ""
                                    }`}
                                onClick={() => handleSelect(method)}
                            >
                                <img src={method.icon} alt={method.name} className="w-16 h-10 object-contain" />
                                <span>{method.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right side - Selected payment method details */}
                <div className="mt-3">
                    <p className="text- mb-4 font-serif text-base pb-[36px] leading-[28px] w-[350px] text-center">{selectedMethod.description}</p>
                    <div className="my-4 flex justify-center border py-2 mr-3">
                        <img
                            src={logo6}
                            alt="Resturent"
                            className="inline-block w-24 object-contain"
                        />
                        <span className="text-4xl mx-4 pt-4">→</span>
                        <img
                            src={selectedMethod.icon}
                            alt={selectedMethod.name}
                            className="inline-block w-24 h-10 mt-5 object-contain"
                        />
                    </div>
                    <button className="bg-btn text-white cursor-pointer py-3 px-6  text-lg rounded-full transition ml-28 mt-2">
                        Place Order
                    </button>
                    <p className="mt-4 text-lg font-semibold text-center">You Pay: ${(Subtotal + VAT + Fee).toFixed(1)}</p>
                </div>
            </div>
        </Container>
    );
};

export default PaymentMethod;