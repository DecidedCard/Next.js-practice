import { CatFactType } from "@/types";
import React from "react";

const SSRPage = async () => {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "no-cache",
  });
  const result: CatFactType = await response.json();
  return (
    <div className="flex justify-center items-center text-2xl h-96">
      {result.fact}
    </div>
  );
};

export default SSRPage;
