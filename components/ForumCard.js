import Image from "next/image";
import { apiData } from "@/repository/dummy-data";

const ForumCard=()=>{

    return(
            <div className="w-full flex justify-center max-w-full border rounded-r-lg rounded-b-lg p-2 mb-10 md:mt-6 shadow-lg">
                <div className="w-[10%] flex justify-center items-start">
                    <Image 
                        src="/man.png"
                        alt="profile icon"
                        width="40"
                        height="40"
                        className="rounded-full"
                        
                    />
                </div>
                <div className="flex flex-col gap-2 w-[75%]">
                    <div className="flex justify-start items-center gap-4">
                        <div>
                            {apiData.discussionForum.name}
                        </div>
                        <div className="px-4 py-1 rounded-full bg-blue-500 text-white ">
                            {apiData.discussionForum.sector}
                        </div>
                    </div>
                    <div>
                        {apiData.discussionForum.message}
                    </div>
                    <div className="flex justify-between">
                        <div className="flex justify-center items-center gap-2 font-bold">
                            <Image 
                                src="/heart.png"
                                alt="Likes icon"
                                width="20"
                                height="20"
                            />
                            <p className="invisible sm:visible">{apiData.discussionForum.likes}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2 font-bold">
                            <Image 
                                src="/view.png"
                                alt="views icon"
                                width="20"
                                height="20"
                            />
                            <p className="invisible sm:visible">{apiData.discussionForum.views}</p>
                        </div>
                        <div className="flex justify-center items-center gap-2 font-bold">
                            <Image 
                                src="/comment.png"
                                alt="comments icon"
                                width="20"
                                height="20"
                            />
                            <p className="invisible sm:visible">{apiData.discussionForum.comments} Comments</p>
                        </div>
                        <div className="flex justify-center items-center gap-2 font-bold">
                            <Image 
                                src="/share.png"
                                alt="share icon"
                                width="20"
                                height="20"
                            />
                            Share
                        </div>
                    </div>
                </div>
                <div className="w-[15%] text-blue-600 font-bold">
                    {apiData.discussionForum.time}
                </div>
            </div>
    );
}

export default ForumCard;