import React, { useContext, useState } from "react";
import Context from "../Context/Context";
import { IoClose } from "react-icons/io5";


function AddToCartPopUp({ className }) {

    const { addToCart, popUpCart, Close } = useContext(Context)

    let [quantity, setquantity] = useState(1)
    let [Variation, setVariation] = useState("Small")

    const addToAllFunc = (id) => {
        addToCart(id, quantity, Variation)
        setquantity(1)
    }

    const CloseAllFunc = () => {
        Close()
        setquantity(1)
    }

    return (
        <div className={`flex justify-center items-center w-full min-h-screen bg-[#00000070] ${className}`}>
            {
                popUpCart.map((el) => {
                    return (
                        <div key={el.id} className="p-8 bg-white shadow-lg rounded-lg max-w-sm relative">
                            <div onClick={() => CloseAllFunc()} className="absolute top-2 right-3 text-[22px]">
                                <IoClose />
                            </div>
                            {/* Product Image */}
                            <img
                                src={el.image}
                                alt={el.name}
                                className="w-full h-48 object-cover rounded-lg mb-4"
                            />

                            {/* Product Info */}
                            <h2 className="text-xl font-bold mb-4">{el.name}</h2>
                            <p className="text-gray-600 mb-4">{el.description}</p>

                            {/* Variations (Dropdown) */}
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2" htmlFor="variation">
                                    Choose Size:
                                </label>
                                <select
                                    id="variation"
                                    value={Variation}
                                    onChange={(e) => setVariation(e.target.value)}
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-btn"
                                >
                                    <option >
                                        Small
                                    </option>
                                    <option >
                                        Medium
                                    </option>
                                    <option>
                                        Large
                                    </option>
                                </select>
                            </div>

                            {/* Quantity Controls */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center">
                                    <button
                                        onClick={() => setquantity(quantity <= 1 ? 1 : quantity - 1)}
                                        className="text-xl flex items-center justify-center bg-gray-200 text-gray-700 font-bold px-4 h-[36px] rounded-l-lg hover:bg-gray-300"
                                    >
                                        -
                                    </button>

                                    <span className="px-4 h-[36px] border flex items-center justify-center">{quantity}</span>
                                    <button
                                        onClick={() => setquantity(quantity + 1)}
                                        className="text-xl flex items-center justify-center bg-gray-200 text-gray-700 font-bold px-4 h-[36px] rounded-r-lg hover:bg-gray-300"
                                    >
                                        +
                                    </button>
                                </div>
                                <p className="text-lg font-semibold">${quantity * el.price}</p>
                            </div>

                            {/* Add to Cart Button */}
                            <button
                                onClick={() => addToAllFunc(el.id)}
                                className="bg-btn text-white w-full py-2 rounded-lg hover:bg-red-600"
                            >
                                Add to Cart
                            </button>
                        </div>
                    )
                })
            }

        </div>
    );
}

export default AddToCartPopUp;