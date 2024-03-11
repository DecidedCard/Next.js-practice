"use client";

import Loading from "@/components/Loading";
import { CatFactType } from "@/types";
import React, { useEffect, useState } from "react";

const CSRPage = () => {
  const [catFact, setCatFact] = useState<CatFactType | null>(null);
  const fetchData = async () => {
    const response = await fetch(`https://catfact.ninja/fact`);
    const result: CatFactType = await response.json();
    setCatFact(result);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (!catFact) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center text-2xl h-96">
      {catFact.fact}
    </div>
  );
};

export default CSRPage;
