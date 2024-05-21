"use client";

import { useAppSelector } from "@/lib/store/hooks";
import React from "react";

const AddtoCart = () => {
  const items = useAppSelector((state) => state.cart.items);
  return (
    <div className="relative">
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-4 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View cart</span>
        <span className="absolute -top-2 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
          {items.length}
        </span>
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h18l-2 13H5L3 3z"
          />
        </svg>
      </button>
    </div>
  );
};

export default AddtoCart;
