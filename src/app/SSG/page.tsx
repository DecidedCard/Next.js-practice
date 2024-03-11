import { CatFactType } from "@/types";
import React from "react";

const SSGPage = async () => {
  const response = await fetch(`https://catfact.ninja/fact`);
  const result: CatFactType = await response.json();
  return (
    <div className="flex justify-center items-center text-2xl h-96">
      {result.fact}
    </div>
  );
};

export default SSGPage;
