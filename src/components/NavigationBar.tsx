import Link from "next/link";
import React from "react";

const NavigationBar = () => {
  return (
    <nav>
      <li>
        <Link href={"/SSG"}>SSG</Link>
      </li>
      <li>
        <Link href={"/ISR"}>ISR</Link>
      </li>
      <li>
        <Link href={"/SSR"}>SSR</Link>
      </li>
      <li>
        <Link href={"/CSR"}>CSR</Link>
      </li>
    </nav>
  );
};

export default NavigationBar;
