"use client";

import { add, remove } from "@/lib/store/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { FeaturedJobsType } from "@/lib/type";
import { Heart } from "lucide-react";
import React, { useState, useEffect } from "react";

const FeaturedCard = ({ jobs }: { jobs: FeaturedJobsType }) => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.cart.items);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(items.includes(jobs.id.toString()));
  }, [items, jobs.id]);

  const handleToggleCart = (productId: number) => {
    const productIdStr = productId.toString();
    if (isInCart) {
      console.log("Removing from cart", productId);
      dispatch(remove(productIdStr));
    } else {
      console.log("Adding to cart", productId);
      dispatch(add(productIdStr));
    }
    setIsInCart(!isInCart);
  };

  return (
    <div
      className="m-3 max-w-sm min-w-60 flex-1 flex-col rounded-lg border bg-white p-2 shadow-sm hover:shadow-lg"
      key={jobs.id}
    >
      <div className="space-y-2">
        <div>
          <p className="text-lg font-normal">{jobs.post}</p>
          <div className="flex items-center space-x-2">
            <p className="my-2 w-20 rounded-sm bg-green-100 text-center text-sm text-green-500">
              {jobs.hours}
            </p>
            <p className="text-xs text-slate-400">Salary: {jobs.salary}+</p>
          </div>
        </div>

        <div className="flex items-center space-x-5">
          <div className="h-16 w-16 rounded-lg bg-red-500">
            <img
              className="h-full w-full rounded-lg object-cover"
              src="https://picsum.photos/100"
              alt="photo"
            />
          </div>
          <div>
            <p className="font-medium flex-wrap">{jobs.company}</p>
            <p className="text-sm font-medium text-slate-500">
              {jobs.openposition} open positions
            </p>
          </div>
          <div className="h-5 w-5">
            <button onClick={() => handleToggleCart(jobs.id)}>
              <Heart
                className={`hover:fill-red-500 ${
                  isInCart ? "fill-red-500" : ""
                }`}
                color={isInCart ? "#ff0000" : "#6345f7"}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
