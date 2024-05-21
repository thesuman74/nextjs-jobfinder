"use client";

import React, { ChangeEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";

const FormNewPost = () => {
  //   const [formData, setFormData] = useState<FormData>({
  //     title: '',
  //     content: '',
  //   });

  //   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
  //     e.preventDefault();
  //   }

  return (
    <div className="flex justify-center items-center min-h-[600px] bg-gray-100">
      <form className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-4">
        <h2 className="text-2xl text-center font-bold text-gray-800 mb-4">
          Blog Area
        </h2>

        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            // value={formData.title}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Title"
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>
          <ReactTextareaAutosize
            minRows={4}
            id="message"
            name="message"
            // value={formData.content}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormNewPost;
