"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {

    const [sidebar,setSidebar]=useState(false);//to store the sidebar state to collapse or show

    const handleClick=()=>{
        setSidebar(!sidebar);//change the sidebar state
    }
    // console.log(sidebar);
    return ( 
        <div className="flex mr-2">
        <div className={`bg-white h-full border-r shadow-sm ${sidebar?"w-80":"hidden"}`}>
            <div className="flex justify-between p-3">
                <div className="flex justify-center items-center gap-1">
                    <Image 
                        src="/profile-user.png"
                        alt="profile icon"
                        width="30"
                        height="30"
                        className=""
                    />
                    <p>Hello, User</p>
                </div>
                <Image 
                    src="/notification.png"
                    alt="bell icon"
                    width="30"
                    height="30"
                />
            </div>
            <hr />
            <div>
                <div className="flex justify-between p-2">
                    <Link 
                        href="/"
                        className="flex justify-center items-center gap-1"
                    >
                        <Image 
                            src="/chat.png"
                            alt="chat icon"
                            width="20"
                            height="20"
                        />
                        <div>
                            Discussion Forum
                        </div>
                    </Link>
                    <Image 
                        src="/down-arrow.png"
                        alt="dropdown icon"
                        width="20"
                        height="20"
                    />
                </div>
                <Link 
                    href="/marketstories"
                    className="flex justify-start items-center p-2 gap-1"
                >
                    <Image 
                        src="/coin.png"
                        alt="dollar icon"
                        width="20"
                        height="20"
                    />
                    <div>
                        Market Stories
                    </div>
                </Link>
                <div className="p-2 pl-8">Sentiment</div>
                <div className="p-2 pl-8">Market</div>
                <div className="p-2 pl-8">Sector</div>
                <div className="p-2 pl-8">Watchlist</div>
                <div className="p-2 pl-8">Events</div>
                <div className="p-2 pl-8">News/Interview</div>
            </div>
        </div>
        <div className="bg-slate-400">
            <button
                onClick={handleClick}
                className="py-8 bg-blue-500 absolute top-72"
            >
                <Image 
                    src="/right.png"
                    alt="expand sidebar icon"
                    width="10"
                    height="10"
                />
            </button>
        </div>
        </div>
     );
}
 
export default Sidebar;