import StoryCard from "@/components/StoryCard"
import Sidebar from "../_components/sidebar"

const MarketStories = () => {
  return (
    <div className="flex">
      <Sidebar />
        <div className="">
            <span className="text-l text-red-600 bg-slate-200 font-bold p-2 invisible md:visible">
                MARKET STORIES
            </span>
            <div className="my-4">
                <StoryCard />
                <StoryCard />
                <StoryCard />
            </div>
        </div>
    </div>
  )
}

export default MarketStories