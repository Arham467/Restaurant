import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const List = ({ text, className, to }) => {
    return (
        <NavLink to={to} className={({ isActive, isPending }) =>
            isPending ? "" : isActive ? "list-none text-base py-[4px] px-[16px] rounded-[34px] font-semibold font-montserrat bg-btn text-white" : "list-none text-prh2 text-base py-[4px] px-[16px] rounded-[34px] font-semibold font-montserrat"
        }>
            <li>{text}</li>
        </NavLink>
    )
}

export default List