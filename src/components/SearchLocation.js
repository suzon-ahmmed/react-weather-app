import React, { useState } from "react";
// import icons
import { IoMdSearch } from "react-icons/io";

function SearchLocation({ setLocation }) {
  const [inputValue, setInputValue] = useState("");
  const [animate, setAnimate] = useState(false);
  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    // if input value is not empty
    if (inputValue !== "") {
      // set location
      setLocation(inputValue);
    }

    // select input
    const input = document.querySelector("input");

    // if input value is empty
    if (input.value === "") {
      // set animate to true
      setAnimate(true);
      // after 500 ms set animate to false
      setTimeout(() => {
        setAnimate(false);
      }, 500);
    }

    // clear input
    input.value = "";

    // prevent defaults
    e.preventDefault();
  };
//   console.log('I am search field.');
  return (
    <div>
      <form
        className={`${
          animate ? "animate-shake" : "animate-none"
        } h-12 bg-black/20 w-[320px]  sm:w-[450px]
        rounded-lg backdrop-blur-sm mb-6`}
      >
        <div className="h-full relative flex items-center justify-between">
          <input
            onChange={(e) => handleInput(e)}
            className="flex-1 bg-transparent outline-none placeholder:text-white text-white text-[15px] font-light pl-6 h-full"
            type="text"
            placeholder="Search by city or country"
          />
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-[#3ed6fc] hover:bg-[#6ae0fd] w-16 h-12 rounded-lg flex justify-center items-center transition"
          >
            <IoMdSearch className="text-2xl text-white" />
          </button>
        </div>
      </form>
    </div>
    
  );
}
export default React.memo(SearchLocation) ;
// export default  SearchLocation;