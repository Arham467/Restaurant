import React, { useState } from 'react'
import Address from '../Component/Address'
import CheckoutForm from '../Component/CheckoutForm'
import Container from '../Component/Container'
import PaymentMethod from '../Component/PaymentMethod'

const OrderPage = () => {


    const [pyMethod, setpyMethod] = useState(false)

    function parent(e) {
        if (e.target.value.toLowerCase() === "offline") {
            setpyMethod(false)
        } else {
            setpyMethod(true)
        }
    }

    return (
        <div className='mt-[7vw]'>
            <Container className={''}>
                <div className={`flex justify-between ${pyMethod ? "mb-[0vw]" : "mb-[3vw]"}`}>
                    <div className="w-[65%]">
                        <div className="">
                            <Address />
                        </div>
                        <div className={pyMethod ? "block" : "hidden"}>
                            <PaymentMethod />
                        </div>
                    </div>

                    <div className="w-[30%]">
                        <CheckoutForm parent={parent} />
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default OrderPage