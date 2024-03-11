import { CatFactType } from "@/types";
import React from "react";

const SSRPage = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const result: CatFactType = await response.json();
  return <div>{result.fact}</div>;
};

export default SSRPage;
