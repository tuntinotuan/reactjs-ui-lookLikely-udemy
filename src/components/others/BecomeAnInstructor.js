import React from "react";
import Button from "../button/Button";

const BecomeAnInstructor = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#F7F9FA] py-20">
      <h1 className="text-4xl font-bold mb-5">Become an instructor today</h1>
      <h2 className="text-2xl mb-5 max-w-[480px] text-center">
        Join one of the world's largest online learning marketplaces.
      </h2>
      <Button
        className="bg-black text-white font-bold py-4 w-[320px]"
        borderNone
      >
        Get started
      </Button>
    </section>
  );
};

export default BecomeAnInstructor;
