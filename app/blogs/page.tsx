import React from "react";
import FormNewPost from "./formNewPost";

const page = () => {
  return (
    <main className="max-w-4xl mx-auto">
      <div className=" text-6xl text-center p-3">Blog Posts </div>
      <FormNewPost />
    </main>
  );
};

export default page;
