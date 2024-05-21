"use client";

import { add } from "@/lib/store/features/cart/cartSlice";
import { AppStore, makeStore } from "@/lib/store/store";
import React, { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = makeStore();

    // add initial state
    // storeRef.current.dispatch(add("testproductid"));
  }
  return <Provider store={storeRef.current}> {children}</Provider>;
};

export default StoreProvider;
