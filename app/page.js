"use client";

import Sidebar from "./_components/sidebar";
import Discussion from "./discussion/page";
import MarketStories from "./marketstories/page";

import { useState } from "react";


const Home = () => {


  const [pointer,setPointer]=useState(true);//to choose which data to show

  const showDiscussionForum=()=>{
    setPointer(true);
  }
  
  const showMarketStories=()=>{
    setPointer(false);
  }


  return ( 
    <main className="flex">
      <Sidebar className="visible" />
      <div>
        <div className="flex items-stretch justify-center md:invisible md:h-0">
          <button
            className="w-full px-6 py-2 bg-blue-500 text-white"
            onClick={showDiscussionForum}
          >
            Discussion Forum
          </button>
          <button
            className="w-full px-6 py-2 bg-blue-500 text-white"
            onClick={showMarketStories}
          >
            Market Stories
          </button>
        </div>
        {
          pointer?
          (<Discussion />)
          :
          (<MarketStories />)
        }
      </div>
    </main>
   );
}
 
export default Home;