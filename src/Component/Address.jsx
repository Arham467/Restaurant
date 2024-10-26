import { useState } from "react";
import { MdMyLocation, MdSettingsBackupRestore } from "react-icons/md";
import { VscLocation } from "react-icons/vsc";
import { MdOutlineEditLocationAlt } from "react-icons/md";
import { Link } from "react-router-dom";

const Address = () => {
    const [homecheack, sethomecheack] = useState(true);
    const [officecheack, setofficecheack] = useState(false);
    const [partnercheack, setpartnercheack] = useState(false);
    const [otherscheck, setotherscheck] = useState(false);
    const [homecheack2, sethomecheack2] = useState(true);
    const [officecheack2, setofficecheack2] = useState(false);
    const [partnercheack2, setpartnercheack2] = useState(false);
    const [otherscheck2, setotherscheck2] = useState(false);
    const [add, setadd] = useState(false);
    const [input, setinput] = useState("");
    const [submitaddres, setsubmitaddres] = useState(false);
    const [currentAddress, setcurrentAddress] = useState();
    const [doit, setdoit] = useState(false);
    const [input2, setinput2] = useState("");
    const [submitaddres2, setsubmitaddres2] = useState(false);
    const [currentAddress2, setcurrentAddress2] = useState();

    console.log(currentAddress);

    const HandleHomeCheck = () => {
        sethomecheack(true);
        setofficecheack(false);
        setpartnercheack(false);
        setotherscheck(false);
    };

    const HandleOfficeCheck = () => {
        setofficecheack(true);
        sethomecheack(false);
        setpartnercheack(false);
        setotherscheck(false);
    };

    const HandlePartnerCheck = () => {
        setpartnercheack(true);
        sethomecheack(false);
        setofficecheack(false);
        setotherscheck(false);
    };

    const HandleOthersCheck = () => {
        setotherscheck(true);
        setpartnercheack(false);
        sethomecheack(false);
        setofficecheack(false);
    };

    const HandleHomeCheck2 = () => {
        sethomecheack2(true);
        setofficecheack2(false);
        setpartnercheack2(false);
        setotherscheck2(false);
    };

    const HandleOfficeCheck2 = () => {
        setofficecheack2(true);
        sethomecheack2(false);
        setpartnercheack2(false);
        setotherscheck2(false);
    };

    const HandlePartnerCheck2 = () => {
        setpartnercheack2(true);
        sethomecheack2(false);
        setofficecheack2(false);
        setotherscheck2(false);
    };

    const HandleOthersCheck2 = () => {
        setotherscheck2(true);
        setpartnercheack2(false);
        sethomecheack2(false);
        setofficecheack2(false);
    };

    const HandleAdd = () => {
        setadd(true);
    };

    const HandleChange = (e) => {
        setinput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const HandleSubmit = () => {
        if (input.house && input.road && input.block) {
            setcurrentAddress(input);
            setsubmitaddres(true);
            setadd(false);
        }
    };

    const HandleChange2 = (e) => {
        setinput2({
            ...input2,
            [e.target.name]: e.target.value,
        });
    };

    const HandleSubmit2 = () => {
        if (input2.house && input2.road && input2.block) {
            setcurrentAddress2(input2);
            setsubmitaddres2(true);
            setdoit(false);
        }
    };

    const HandleEdit2 = () => {
        setsubmitaddres2(false);
        setdoit(true);
    };

    return (
        <div className="">
            <div className="container">
                {/* saved address */}
                <div className="bg-white border-2 border-[#e6e6e6] shadow-md p-6">
                    {/* add address */}
                    {add && (
                        <div>
                            {/* list */}
                            <div className="flex items-center gap-x-4 pb-6">
                                {/* home */}
                                <div className="flex items-center gap-x-2">
                                    {/* check button */}
                                    <div onClick={HandleHomeCheck} className="relative">
                                        <div className="size-[20px] cursor-pointer bg-transparent border-2 border-[#d3d3d3] rounded-full"></div>
                                        <div
                                            className={`w-full h-full scale-0 transition-all border-4 border-btn rounded-full absolute top-0 left-0 ${homecheack && "scale-100"
                                                }`}
                                        ></div>
                                    </div>

                                    <span className="leading-3 font-montserrat font-semibold text-base text-prh2">
                                        Home
                                    </span>
                                </div>
                                {/* Office */}
                                <div className="flex items-center gap-x-2">
                                    {/* check button */}
                                    <div onClick={HandleOfficeCheck} className="relative">
                                        <div className="size-[20px] cursor-pointer bg-transparent border-2 border-[#ebebeb] rounded-full"></div>
                                        <div
                                            className={`w-full h-full scale-0 transition-all border-4 border-btn rounded-full absolute top-0 left-0 ${officecheack && "scale-100"
                                                }`}
                                        ></div>
                                    </div>

                                    <span className="leading-3 capitalize font-montserrat font-semibold text-base text-prh2">
                                        Office
                                    </span>
                                </div>
                                {/* Partner */}
                                <div className="flex items-center gap-x-2">
                                    {/* check button */}
                                    <div onClick={HandlePartnerCheck} className="relative">
                                        <div className="size-[20px] cursor-pointer bg-transparent border-2 border-[#ebebeb] rounded-full"></div>
                                        <div
                                            className={`w-full h-full scale-0 transition-all border-4 border-btn rounded-full absolute top-0 left-0 ${partnercheack && "scale-100"
                                                }`}
                                        ></div>
                                    </div>

                                    <span className="leading-3 capitalize font-montserrat font-semibold text-base text-prh2">
                                        partner
                                    </span>
                                </div>
                                {/* Others */}
                                <div className="flex items-center gap-x-2">
                                    {/* check button */}
                                    <div onClick={HandleOthersCheck} className="relative">
                                        <div className="size-[20px] cursor-pointer bg-transparent border-2 border-[#ebebeb] rounded-full"></div>
                                        <div
                                            className={`w-full h-full scale-0 transition-all border-4 border-btn rounded-full absolute top-0 left-0 ${otherscheck && "scale-100"
                                                }`}
                                        ></div>
                                    </div>

                                    <span className="leading-3 capitalize font-montserrat font-semibold text-base text-prh2">
                                        others
                                    </span>
                                </div>
                            </div>
                            {/* cuurent location & edit */}
                            <div className="flex items-center justify-between pb-4">
                                {/* cuurent location */}
                                <div className="text-base font-montserrat font-medium text-prh2 flex items-center gap-x-1">
                                    <VscLocation className="text-xl" /> Current Location:
                                    #House&Road:
                                    <span className="text-btn">
                                        {currentAddress?.house & currentAddress?.road}
                                    </span>{" "}
                                    #Area:
                                    <span className="text-btn">{currentAddress?.block}</span>
                                </div>
                            </div>
                            {/* address input */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <h5
                                        className="font-montserrat
                 font-medium text-prh2 text-base"
                                    >
                                        House#
                                    </h5>
                                    <input
                                        type="text"
                                        name="house"
                                        value={input.house}
                                        onChange={HandleChange}
                                        placeholder="Enter house number"
                                        className="bg-transparent border-2 placeholder:text-prh2 placeholder:opacity-75 rounded-md text-prh2 focus:border-btn border-[#afafaf] py-3 px-4"
                                    />
                                </div>
                                <div>
                                    <h5
                                        className="font-montserrat
                 font-medium text-prh2 text-base"
                                    >
                                        Block/Road#
                                    </h5>
                                    <input
                                        type="text"
                                        name="road"
                                        value={input.road}
                                        onChange={HandleChange}
                                        placeholder="Enter block/road number"
                                        className="bg-transparent border-2 placeholder:text-prh2 placeholder:opacity-75 rounded-md text-prh2 focus:border-btn border-[#afafaf] py-3 px-4"
                                    />
                                </div>
                                <div>
                                    <h5
                                        className="font-montserrat
                 font-medium text-black text-base"
                                    >
                                        Area#
                                    </h5>
                                    <input
                                        type="text"
                                        name="block"
                                        value={input.block}
                                        onChange={HandleChange}
                                        placeholder="Enter your area"
                                        className="bg-transparent border-2 placeholder:text-prh2 placeholder:opacity-75 rounded-md text-prh2 focus:border-btn border-[#afafaf] py-3 px-4"
                                    />
                                </div>
                            </div>
                            {/* submit & cancle */}
                            <div className="pt-4 flex items-center gap-x-4">
                                {!input.house || !input.road || !input.block ? (
                                    <button
                                        onClick={HandleSubmit}
                                        disabled
                                        className={
                                            "rounded-md py-2 px-3 text-white font-montserrat font-normal text-base bg-btn opacity-50"
                                        }
                                    >
                                        Submit
                                    </button>
                                ) : (
                                    <button
                                        onClick={HandleSubmit}
                                        className={
                                            "rounded-md py-2 px-3 text-white font-montserrat font-normal text-base bg-btn"
                                        }
                                    >
                                        Submit
                                    </button>
                                )}

                                <button
                                    onClick={() => setadd(false)}
                                    className="bg-transparent border-2 hover:bg-btn hover:text-white border-[#c0c0c0] rounded-md py-2 px-3 text-prh2 font-montserrat font-normal text-base"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    <div className={`${add ? "hidden" : "block"}`}>
                        <h5 className="font-montserrat font-bold text-base pb-4 text-prh2">
                            Saved Addresses:
                        </h5>
                        {submitaddres && (
                            <div className="flex items-center justify-between">
                                {" "}
                                <div className="pb-4">
                                    <span>
                                        House&Road: {input?.house & input?.road} Area:{" "}
                                        {input?.block}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setadd(true)}
                                    className="bg-transparent flex items-center gap-x-1 text-base text-prh2 font-montserrat font-normal rounded-md border-2 border-dashed py-2 px-4 border-[#bbbbbb]"
                                >
                                    <MdOutlineEditLocationAlt />
                                    <span className="leading-3">Edit</span>
                                </button>
                            </div>
                        )}
                        {/* add address & back button */}
                        <div className="flex items-center gap-x-5">
                            <button
                                onClick={HandleAdd}
                                className="bg-btn rounded-md capitalize py-3 px-4 flex items-center gap-x-2  text-white font-montserrat text-base"
                            >
                                <span className="text-xl">
                                    <MdMyLocation />
                                </span>
                                <span className="leading-3">add address</span>
                            </button>
                            <button className="bg-transparent border-2 rounded-md border-[#ffffff69] capitalize py-3 px-4 flex items-center gap-x-2  text-white font-montserrat text-base hover:bg-[#ffffff1a]">
                                <span className="text-xl">
                                    <MdSettingsBackupRestore />
                                </span>
                                <span className="leading-3">back</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className="bg-white shadow-md p-5 mt-7
        "
                >
                    {/* Ordering for someone else */}
                    <div className="border-dashed px-5 border-2 py-8 flex items-center justify-center flex-col">
                        <h5 className="font-montserrat font-bold text-base text-prh2">
                            Ordering for someone else?
                        </h5>
                        <p className="pt-2 font-montserrat font-normal text-base text-prh">
                            Add receiver details for a hassle free delivery
                        </p>
                        {submitaddres2 && (
                            <div className="flex items-center gap-x-10">
                                <div className="flex items-center text-lg">
                                    <VscLocation className="text-red-500 text-2xl" />
                                    House: <span className="px-1 text-btn">{input2?.house}</span>
                                    Road/Block:{" "}
                                    <span className="px-1 text-btn">{input2?.road}</span>
                                    Area: <span className="px-1 text-btn">{input2?.block}</span>
                                </div>
                                <button
                                    onClick={HandleEdit2}
                                    className="bg-transparent flex items-center gap-x-1 text-base text-prh2 font-montserrat font-normal rounded-md border-2 border-dashed py-2 px-4 border-[#bbbbbb]"
                                >
                                    <MdOutlineEditLocationAlt />
                                    <span className="leading-3">Edit</span>
                                </button>
                            </div>
                        )}
                        {/* add address */}
                        {doit && (
                            <div className="w-full">
                                {/* list */}
                                <div className="flex items-center gap-x-4 pb-6">
                                    {/* home */}
                                    <div className="flex items-center gap-x-2">
                                        {/* check button */}
                                        <div onClick={HandleHomeCheck2} className="relative">
                                            <div className="size-[20px] cursor-pointer bg-transparent border-2 border-[#d3d3d3] rounded-full"></div>
                                            <div
                                                className={`w-full h-full scale-0 transition-all border-4 border-btn rounded-full absolute top-0 left-0 ${homecheack2 && "scale-100"
                                                    }`}
                                            ></div>
                                        </div>

                                        <span className="leading-3 font-montserrat font-semibold text-base text-prh2">
                                            Home
                                        </span>
                                    </div>
                                    {/* Office */}
                                    <div className="flex items-center gap-x-2">
                                        {/* check button */}
                                        <div onClick={HandleOfficeCheck2} className="relative">
                                            <div className="size-[20px] cursor-pointer bg-transparent border-2 border-[#ebebeb] rounded-full"></div>
                                            <div
                                                className={`w-full h-full scale-0 transition-all border-4 border-btn rounded-full absolute top-0 left-0 ${officecheack2 && "scale-100"
                                                    }`}
                                            ></div>
                                        </div>

                                        <span className="leading-3 capitalize font-montserrat font-semibold text-base text-prh2">
                                            Office
                                        </span>
                                    </div>
                                    {/* Partner */}
                                    <div className="flex items-center gap-x-2">
                                        {/* check button */}
                                        <div onClick={HandlePartnerCheck2} className="relative">
                                            <div className="size-[20px] cursor-pointer bg-transparent border-2 border-[#ebebeb] rounded-full"></div>
                                            <div
                                                className={`w-full h-full scale-0 transition-all border-4 border-btn rounded-full absolute top-0 left-0 ${partnercheack2 && "scale-100"
                                                    }`}
                                            ></div>
                                        </div>

                                        <span className="leading-3 capitalize font-montserrat font-semibold text-base text-prh2">
                                            partner
                                        </span>
                                    </div>
                                    {/* Others */}
                                    <div className="flex items-center gap-x-2">
                                        {/* check button */}
                                        <div onClick={HandleOthersCheck2} className="relative">
                                            <div className="size-[20px] cursor-pointer bg-transparent border-2 border-[#ebebeb] rounded-full"></div>
                                            <div
                                                className={`w-full h-full scale-0 transition-all border-4 border-btn rounded-full absolute top-0 left-0 ${otherscheck2 && "scale-100"
                                                    }`}
                                            ></div>
                                        </div>

                                        <span className="leading-3 capitalize font-montserrat font-semibold text-base text-prh2">
                                            others
                                        </span>
                                    </div>
                                </div>
                                {/* cuurent location & edit */}
                                <div className="flex items-center justify-between pb-4">
                                    {/* cuurent location */}
                                    <div className="text-base font-montserrat font-medium text-prh2 flex items-center gap-x-1">
                                        <VscLocation className="text-xl" /> Current Location:
                                        #House:
                                        <span className="text-btn">
                                            {currentAddress2?.house}
                                        </span>{" "}
                                        #Road/Block:{" "}
                                        <span className="text-btn">{currentAddress2?.road}</span>{" "}
                                        #Area:
                                        <span className="text-btn">{currentAddress2?.block}</span>
                                    </div>
                                </div>
                                {/* address input */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h5
                                            className="font-montserrat
                 font-medium text-prh2 text-base"
                                        >
                                            House#
                                        </h5>
                                        <input
                                            type="text"
                                            name="house"
                                            value={input2.house}
                                            onChange={HandleChange2}
                                            placeholder="Enter house number"
                                            className="bg-transparent border-2 placeholder:text-prh2 placeholder:opacity-75 rounded-md text-prh2 focus:border-btn border-[#afafaf] py-3 px-4"
                                        />
                                    </div>
                                    <div>
                                        <h5
                                            className="font-montserrat
                 font-medium text-prh2 text-base"
                                        >
                                            Block/Road#
                                        </h5>
                                        <input
                                            type="text"
                                            name="road"
                                            value={input2.road}
                                            onChange={HandleChange2}
                                            placeholder="Enter your block/road"
                                            className="bg-transparent border-2 placeholder:text-prh2 placeholder:opacity-75 rounded-md text-prh2 focus:border-btn border-[#afafaf] py-3 px-4"
                                        />
                                    </div>
                                    <div>
                                        <h5
                                            className="font-montserrat
                 font-medium text-black text-base"
                                        >
                                            Area#
                                        </h5>
                                        <input
                                            type="text"
                                            name="block"
                                            value={input2.block}
                                            onChange={HandleChange2}
                                            placeholder="Enter your area"
                                            className="bg-transparent border-2 placeholder:text-prh2 placeholder:opacity-75 rounded-md text-prh2 focus:border-btn border-[#afafaf] py-3 px-4"
                                        />
                                    </div>
                                </div>
                                {/* submit & cancle */}
                                <div className="pt-4 flex items-center gap-x-4">
                                    {!input2.house || !input2.road || !input2.block ? (
                                        <button
                                            onClick={HandleSubmit2}
                                            disabled
                                            className={
                                                "rounded-md py-2 px-3 text-white font-montserrat font-normal text-base bg-btn opacity-50"
                                            }
                                        >
                                            Submit
                                        </button>
                                    ) : (
                                        <button
                                            onClick={HandleSubmit2}
                                            className={
                                                "rounded-md py-2 px-3 text-white font-montserrat font-normal text-base bg-btn"
                                            }
                                        >
                                            Submit
                                        </button>
                                    )}

                                    <button
                                        onClick={() => setdoit(false)}
                                        className="bg-transparent border-2 hover:bg-btn hover:text-white border-[#c0c0c0] rounded-md py-2 px-3 text-prh2 font-montserrat font-normal text-base"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}

                        {doit ? (
                            ""
                        ) : (
                            <button
                                onClick={() => setdoit(true)}
                                className="bg-btn mt-4 rounded-md text-white text-base font-medium py-[6px] px-3"
                            >
                                Do it now
                            </button>
                        )}
                    </div>
                    {/* Add instruction for restaurant */}
                    <div className="mt-16">
                        <h5 className="font-montserrat pb-2 font-bold text-base text-prh2">
                            Add instruction for restaurant
                        </h5>
                        <textarea
                            name="instruction"
                            placeholder="Add instruction for restaurant"
                            className="placeholder:text-prh border-2 border-[#dddddd] w-full p-5 rounded-md h-[14.3vw]"
                        ></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;