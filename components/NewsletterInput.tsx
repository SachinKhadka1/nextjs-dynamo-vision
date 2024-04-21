"use client";

import { ChangeEvent, FormEvent, useState } from "react";

const NewsletterInput = () => {
  const [email, setEmail] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const submitEmail = () => {
    console.log(email);
  };

  return (
    <div className="flex flex-row justify-center items-center gap-3">
      <label className="input input-bordered flex items-center input-sm gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="gray"
          className="w-4 h-4 opacity-70"
        >
          <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
          <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
        </svg>
        <input
          type="text"
          value={email}
          onChange={handleInputChange}
          className="grow text-black"
          placeholder="Enter Email"
        />
      </label>
      <button className="btn btn-xs" onClick={submitEmail}>
        Subscribe
      </button>
    </div>
  );
};

export default NewsletterInput;
