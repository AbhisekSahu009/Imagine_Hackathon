import React from "react";
import "./App.css";

const SearchBar = () => {
    return (
        <div className="search-bar-container">
            {/* Search Input Field */}
            <div className="search-input-wrapper">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="search-icon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11 19a8 8 0 100-16 8 8 0 000 16zm0 0l4.35 4.35"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search Here Anything"
                    className="search-input"
                />
            </div>

            {/* Upload/Download Button */}
            <button className="search-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="arrow-icon"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4v16m0 0l-7-7m7 7l7-7"
                    />
                </svg>
            </button>
        </div>
    );
};

export default SearchBar;
