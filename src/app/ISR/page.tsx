import { CatFactType } from "@/types";
import React from "react";

const ISRPage = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const result: CatFactType = await response.json();
  return (
    <div className="flex justify-center items-center text-2xl h-96">
      {result.fact}
    </div>
  );
};

export default ISRPage;
