import ForumCard from "@/components/ForumCard";
import StoryCard from "@/components/StoryCard";
import Sidebar from "../_components/sidebar";

const Discussion = () => {
  return (
    <section className="flex">
        <div className="md:w-[70%] w-full">
            <span className="text-3xl text-red-600 font-bold p-2 bg-slate-200 invisible md:visible lg:visible">
                DISCUSSION FORUM
            </span>
            <div className="flex flex-col gap-8 items-center ">
                <ForumCard />
                <ForumCard />
                <ForumCard />
                <ForumCard />
            </div>
        </div>
        <div className="ml-4 invisible md:visible md:w-[30%] w-0">
            <span className="text-red-600 font-bold bg-slate-200">
                MARKET STORIES
            </span>
            <StoryCard />
            <StoryCard />
            <StoryCard />
        </div>
    </section>
  )
}

export default Discussion