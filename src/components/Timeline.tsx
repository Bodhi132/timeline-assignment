import { useState, useEffect, useRef } from 'react';
import { FaCheck } from "react-icons/fa6";

const timelineData = [
    {
        id: 1,
        title: "Start with a Call",
        description: "Connect with us to discuss your vision"
    },
    {
        id: 2,
        title: "lorem ipsum",
        description: "Define goals, objectives, and project scope"
    },
    {
        id: 3,
        title: "Design Phase",
        description: "lorem23 ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus"
    },
    {
        id: 4,
        title: "lorem ipsum",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus"
    },
    {
        id: 5,
        title: "lorem ipsum",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus"
    }
];

export default function Timeline() {
    const [activeId, setActiveId] = useState(1);
    const [progress, setProgress] = useState(0);
    const timelineRef = useRef<HTMLDivElement | null>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
    const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        itemRefs.current = itemRefs.current.slice(0, timelineData.length);

        const handleScroll = () => {
            if (!timelineRef.current || !itemRefs.current.length) return;

            const timelineRect = timelineRef.current.getBoundingClientRect();
            const timelineTop = timelineRect.top + window.scrollY;
            const timelineHeight = timelineRect.height;
            const scrollY = window.scrollY + window.innerHeight / 2;

            const scrolled = Math.min(Math.max(0, scrollY - timelineTop), timelineHeight);
            const newProgress = (scrolled / timelineHeight) * 100;
            setProgress(newProgress);

            let currentActive = 0;
            dotRefs.current.forEach((dot, index) => {
                if (dot) {
                    const dotTop = dot.getBoundingClientRect().top + window.scrollY;
                    if (dotTop <= scrollY) {
                        currentActive = index + 1;
                    }
                }
            });

            setActiveId(currentActive);
        };



        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <div className="flex flex-col items-center min-h-screen p-8 w-full h-[180vh]">

            <div ref={timelineRef} className="relative max-w-xl w-full ml-6">
                {/* Background line */}
                <div className="absolute left-5 top-0 h-full w-1 bg-gray-200 z-0" />

                {/* Progress line */}
                <div
                    className="absolute left-5 top-0 w-1 bg-black transition-all duration-300 ease-out origin-top z-10"
                    style={{ height: `${progress}%` }}
                />

                {/* Timeline items with dots */}
                {timelineData.map((item, index) => (
                    <div
                        key={item.id}
                        ref={el => { itemRefs.current[index] = el; }}
                        className="mb-16 relative"
                    >
                        {/* Dot positioned on timeline bar */}
                        <div
                            ref={el => { dotRefs.current[index] = el; }}
                            className={`absolute z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 ${activeId >= item.id ? 'bg-black' : 'bg-gray-400'
                                }`}
                        >
                            <FaCheck className=' text-white text-2xl' />
                        </div>

                        {/* Card */}
                        <div className={` ml-[4rem] p-6 w-full rounded-lg shadow-lg transition-all duration-300 ease-in-out text-white ${activeId >= item.id ? 'bg-orange-600' : 'bg-black'
                            }`}>
                            <h1 className=' text-2xl font-bold'>{`STEP 0${index+1}`}</h1>
                            <h3 className="mt-6 text-xl font-bold mb-3">{item.title}</h3>
                            <p className="opacity-90">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}