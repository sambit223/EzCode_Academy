import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Pencil = () => {
  const scrollToHeader = () => {
    const header = document.getElementById("header");
    if (header) {
      header.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed right-0 p-3 rounded-full cursor-pointer bottom-2 bg-blue-950"
      onClick={scrollToHeader}
    >
      <i className="text-5xl font-bold text-white bi bi-arrow-up-circle-fill"></i>
    </div>
  );
};

export default Pencil;
