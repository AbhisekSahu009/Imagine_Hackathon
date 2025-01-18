import React from "react";
import "./App.css";

const GreetShare = () => {
    return (
        <div className="container">
            {/* Greeting Text */}
            <div className="greeting-container">
                <h1 className="greeting-text">Hi! Akash</h1>
                <p className="sub-text">Share your thoughts here!</p>
            </div>

            {/* Input Bar with Upload Icon */}
            <div className="input-container">
                <input
                    type="text"
                    placeholder="Say Something..."
                    className="input-field"
                />
                <button className="upload-button">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="icon"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 16v5h16v-5m-8-9v14M8.5 8.5l3.5-3.5 3.5 3.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default GreetShare;
