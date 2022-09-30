import React, { useState } from "react";
import Head from "next/head";
import SearchBar from "../components/Ad/SearchBar";
import FilterButton from "../components/Ad/FilterButton";
import AdDetail from "../components/Ad/AdDetail";
import FilterView from "../components/Ad/FilterView";
import AdView from "../components/Create-Ad/AdView";
import ToggleButton from "../components/Ad/ToggleButton";
import SelectTypeTabs from "../components/Ad/SelectTypeTabs";

export default function Job() {
  const [selectedTab, setSelectedTab] = useState<string>("Sök Jobb")

  return (
    <>
      <Head>
        <title>Work 2 Do | Annonser</title>
      </Head>
      <div className="px-8 sm:px-12 md:px-16 lg:px-32 mt-40 md:mt-20">
        <div>
          <div className="flex flex-row items-center justify-center">
            <SearchBar placeholder="Sök efter jobb" />
            <FilterButton />
            </div>
            <div className="flex flex-row items-center justify-center">
            <SelectTypeTabs className="w-1/1 mt-10 md:w-1/2" tabs={["Sök Jobb", "Arbetskraft"]} selectedTab={selectedTab} onSelect={setSelectedTab} />

            </div>
          <div className="flex items-center justify-between mt-10">
            <div className="block md:hidden font-mulish font-semibold text-md mb-2">
              Nya Jobb
              </div>
              </div>
              </div>
              <div className="md:flex mb-5">
              <div className="hidden md:block md:w-1/4">
              <FilterView />
              </div>
              <div className="md:w-1/3 p-1">
              <div>
              <AdDetail />
              <AdDetail />
              <AdDetail />
              <AdDetail />
              </div>
              </div>
              <div className="hidden md:block md:w-1/2 p-1">
            AdView ska mapas här. Hur?
          </div>
        </div>
      </div>
    </>
  );
}
