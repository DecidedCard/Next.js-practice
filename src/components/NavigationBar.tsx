import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <nav className="flex justify-center gap-2 text-xl list-none m-2">
      <li className="rounded-xl hover:bg-slate-400 duration-300 w-14 text-center">
        <Link href={"/SSG"}>SSG</Link>
      </li>
      <li className="rounded-xl hover:bg-slate-400 duration-300 w-14 text-center">
        <Link href={"/ISR"}>ISR</Link>
      </li>
      <li className="rounded-xl hover:bg-slate-400 duration-300 w-14 text-center">
        <Link href={"/SSR"}>SSR</Link>
      </li>
      <li className="rounded-xl hover:bg-slate-400 duration-300 w-14 text-center">
        <Link href={"/CSR"}>CSR</Link>
      </li>
    </nav>
  );
};

export default NavigationBar;
