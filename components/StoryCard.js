import Image from "next/image";


const StoryCard=()=>{

    return(
        <>
            <div className="flex flex-col mb-4 max-w-xl border rounded-lg md:max-w-full sm:max-w-5xl">
                    <Image 
                        src="/mountain-sunset.jpg"
                        alt="story thumbnail"
                        width="1500"
                        height="100"
                        className="w-full"
                    />
                <div className="flex flex-col items-start p-4 text-xs">
                    <p className="font-bold">The Coldest Sunset</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore quibusdam expedita quis deleniti. Ipsum est exercitationem qui.</p>
                </div>
            </div>

        </>
    );
}

export default StoryCard;