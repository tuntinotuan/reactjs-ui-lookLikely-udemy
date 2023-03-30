import React from "react";
import Button from "../button/Button";
import LogoCompanies from "../others/LogoCompanies";

const CompaniesTrustedUdemy = () => {
  return (
    <section className="page-container border border-slate-200 my-4 p-5">
      <h2 className="text-xl font-bold mb-2">Top companies trust Udemy</h2>
      <p className="text-[16px] mb-2">
        Get your team access to Udemy's top 19,000+ courses
      </p>
      <LogoCompanies amount={5}></LogoCompanies>
      <Button className="text-sm font-bold mt-4" square="py-2 px-2">
        Try Udemy Business
      </Button>
    </section>
  );
};

export default CompaniesTrustedUdemy;
