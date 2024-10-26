import { useContext, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import Context from "../Context/Context";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const { searchFilter } = useContext(Context);
    const HandleChange = (e) => {
        setSearchTerm(e.target.value);
        searchFilter(e.target.value);
    };

    return (
        <div>
            {/* Search Input */}
            <div className="relative">
                <input
                    type="text"
                    className="w-[500px] px-3 py-2 pl-10 border rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-btn border-[#C31C1E]"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={HandleChange}
                />
                {/* Search Icon */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <IoIosSearch className="text-2xl text-gray-400" />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;