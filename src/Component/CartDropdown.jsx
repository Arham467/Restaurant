import React, { useContext } from 'react';
import Container from './Container';
import { RxCross2 } from "react-icons/rx";
import Context from '../Context/Context';
import { Link } from 'react-router-dom';

const CartDropdown = ({ className, item }) => {

    const { image, id, name, quantity, price, Variation } = item

    const { removeCart, handleCheckout } = useContext(Context)



    const handleCheck = (id, quantity, Variation) => {
        handleCheckout(id, quantity, Variation)
    }


    return (
        <div className={`w-[450px] bg-white rounded-md ${className}`}>
            <Container>
                <div className="">
                    <div className="w-[450px]">
                        <div className="flex items-center justify-between px-4">

                            <div className="flex items-center gap-6 py-3">
                                <img
                                    src={image}
                                    alt={name}
                                    className=" w-16 border h-16"
                                />

                                <h3 className="block font-semibold text-black">{name}</h3>

                                <h3 className="font-bold border-2 py-1 px-2 text-black">{quantity}</h3>

                                <h3 className="block text-black font-bold mr-5">${(price * quantity).toFixed(2)}</h3>
                            </div>

                            <div className="flex items-center gap-3">
                                <Link to={`/order_food/${id}`}>
                                    <button onClick={() => handleCheck(id, quantity, Variation)} className="w-[90px] !bg-btn text-white p-1 font-semibold rounded-full">
                                        Checkout
                                    </button>
                                </Link>

                                <button onClick={() => removeCart(id)} className="text-black text-xl font-bold">
                                    <RxCross2 />
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </Container >
        </div >
    );
};

export default CartDropdown;