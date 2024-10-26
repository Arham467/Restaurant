import React from 'react'

const Toast = ({ className, message }) => {
    return (
        <div className={`fixed top-5 right-5 w-72 border z-50 bg-white shadow-2xl rounded-lg p-4 flex items-center space-x-4 ${className}`}>
            <div className="flex-shrink-0">
                <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm1 14.59l-4-4 1.41-1.41L10 12.17l3.59-3.58L15 10l-4 4.59z" />
                </svg>
            </div>
            <div className="flex-1">
                <p className="text-md font-medium text-gray-800">Successfully!</p>
                <p className="text-sm text-gray-600">{message}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 focus:outline-none">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9.586l-4.293-4.293-1.414 1.414L8.586 10l-4.293 4.293 1.414 1.414L10 12.414l4.293 4.293 1.414-1.414L11.414 10l4.293-4.293-1.414-1.414L10 9.586z" />
                </svg>
            </button>
        </div>
    )
}

export default Toast