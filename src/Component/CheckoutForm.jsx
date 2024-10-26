import React, { useContext, useState } from 'react';
import Context from '../Context/Context';

const CheckoutForm = ({ parent }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        paymentMethod: 'offline'
    });

    const [orderSummary] = useState({
        subTotal: 0,
        VAT: 15,
        deliveryFee: 60,
    });

    const vatAmount = (orderSummary.subTotal * orderSummary.VAT) / 100;
    const totalPayable = orderSummary.subTotal + vatAmount + orderSummary.deliveryFee;

    const handleInputChange = (e) => {
        parent(e)
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    };

    const { checkOut, handlePlaceOrder } = useContext(Context)

    let Subtotal = Number((checkOut.quantity * checkOut.price).toFixed(2))
    let VAT = Number((checkOut.quantity * checkOut.price) * 0.15)
    let Fee = Number(1)


    const { fullName, phone } = formData
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!fullName || !phone) {
            return;
        }
        handlePlaceOrder()
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white border-2 rounded-xl">
            <h2 className="text-xl font-serif font-bold mb-6 text-center text-gray-800">Your Order</h2>
            <form onSubmit={handleSubmit} className="space-y-6">

                {/* Billing Information */}
                <div className="space-y-4">
                    <h3 className="text-lg font-montserrat font-semibold text-gray-700">Billing Information</h3>

                    <div className="max-w-4xl mx-auto rounded-md overflow-hidden">
                        <table className="min-w-full">
                            <thead>

                                <tr className="bg-btn text-white">
                                    <th className="py-2 px-3 text-left">Name & Quantity</th>
                                    <th className="py-2 px-3 text-left">Size</th>
                                    <th className="py-2 px-3 text-right">Price</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr className="border font-semibold">
                                    <td className="py-2 px-3">{checkOut.quantity + "x" + "-" + checkOut.name}</td>
                                    <td className="py-2 px-3">
                                        {/* <p className=''>{checkOut.Variation}</p> */}
                                        <p className=''>{checkOut.Variation}</p>
                                    </td>
                                    <td className="py-2 px-3 text-center">${checkOut.price}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>

                    <div className="flex flex-col gap-4">

                        {/* Full Name */}
                        <div>
                            <label className="block text-sm font-montserrat font-medium text-gray-600 mb-1">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={(e) => setFormData((prev) => ({ ...prev, fullName: e.target.value }))}
                                className="w-full px-4 py-2 border font-montserrat text-sm border-gray-300 rounded-full focus:border-btn"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        {/* phone */}
                        <div>
                            <label className="block text-sm font-montserrat font-medium text-gray-600 mb-1">Phone Number</label>
                            <input
                                type="text"
                                name="text"
                                value={formData.phone}
                                onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                                className="w-full px-4 py-2 border font-montserrat text-sm border-gray-300 rounded-full focus:border-btn"
                                placeholder="Enter your Number"
                                required
                            />
                        </div>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                    <h3 className="text-lg font-semibold font-montserrat text-gray-700">Payment Method</h3>
                    <div className="flex items-center gap-3">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="offline"
                                checked={formData.paymentMethod === 'offline'}
                                onChange={handleInputChange}
                                className="form-radio h-5 w-5 text-primary"
                            />
                            <span className="ml-2 text-sm font-montserrat text-gray-600">Cash on Delivery</span>
                        </label>

                        <label className="inline-flex items-center" >
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="Online"
                                onChange={handleInputChange}
                                className="form-radio h-5 w-5 text-primary"
                            />
                            <span className="ml-2 text-sm font-montserrat text-gray-600">Online Payment</span>
                        </label>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
                    <h3 className="text-lg font-semibold font-montserrat text-gray-800 mb-3">Order Summary</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex justify-between font-montserrat">
                            <span>Subtotal</span>
                            <span>${Subtotal}</span>
                        </div>
                        <div className="flex justify-between font-montserrat">
                            <span>VAT ({orderSummary.VAT}%)</span>
                            <span>${VAT.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between font-montserrat">
                            <span>Delivery Fee</span>
                            <span>${Fee}</span>
                        </div>
                        <div className="flex justify-between font-semibold font-montserrat text-gray-800">
                            <span>Total Payable</span>
                            <span>${(Subtotal + VAT + Fee).toFixed(1)}</span>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-primary font-montserrat text-white py-3 rounded-full font-semibold bg-btn transition-all"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;