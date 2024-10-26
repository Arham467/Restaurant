import React, { useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import Context from '../Context/Context';
import { Link } from 'react-router-dom';

const TextCart = ({ className, item }) => {

    const { image, id, name, quantity, price, Variation } = item

    const { removeCart, handleCheckout } = useContext(Context)



    const handleCheck = (id, quantity, Variation) => {
        handleCheckout(id, quantity, Variation)
    }


    return (
        <div className={`w-[100%] bg-btn rounded-md ${className}`}>
            <div>
                <div className="w-[100%]">
                    <div className="flex items-center justify-between px-4">

                        <div className="flex items-center gap-5 py-3">
                            <img
                                src={image}
                                alt={name}
                                className=" w-16 border h-16"
                            />

                            <h3 className="block font-semibold text-white">{name}</h3>

                            <h3 className="font-bold border-2 rounded-full py-1 px-2 text-white">{quantity}</h3>

                            <h3 className="block text-white font-bold mr-5">${price * quantity}</h3>
                        </div>

                        <div className="flex items-center gap-5">
                            <Link to={`/singleProduct/${id}`}>
                                <button onClick={() => handleCheck(id, quantity, Variation)} className="w-[90px] bg-black text-white p-1 font-semibold rounded-full">
                                    Checkout
                                </button>
                            </Link>

                            <button onClick={() => removeCart(id)} className="text-white text-xl font-bold">
                                <RxCross2 />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default TextCart;