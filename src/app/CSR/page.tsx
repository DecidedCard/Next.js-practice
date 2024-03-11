"use client";

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
    return <div>로딩중입니다...</div>;
  }
  return <div>{catFact.fact}</div>;
};

export default CSRPage;
