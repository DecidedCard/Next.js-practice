import { CatFactType } from "@/types";
import React from "react";

const SSGPage = async () => {
  const response = await fetch(`https://catfact.ninja/fact`);
  const result: CatFactType = await response.json();
  return <div>{result.fact}</div>;
};

export default SSGPage;
