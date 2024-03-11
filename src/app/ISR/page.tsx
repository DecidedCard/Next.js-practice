import { CatFactType } from "@/types";
import React from "react";

const ISRPage = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const result: CatFactType = await response.json();
  return <div>{result.fact}</div>;
};

export default ISRPage;
