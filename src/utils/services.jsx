import { RiAdvertisementFill } from "react-icons/ri";
import { RiListCheck2 } from "react-icons/ri";
import { TfiWrite } from "react-icons/tfi";
import { TiSocialTwitter } from "react-icons/ti";

export const ServiceItems = [
    {
        icon: <RiAdvertisementFill className="h-full w-full" />,
        title: "Advertising",
        description: "We turn bold ideas into powerful digital solutions that connect, engage..."
    },
    {
        icon: <RiListCheck2 className="h-full w-full" />,
        title: "Content marketing",
        description: "We help you execute your plan and deliver results."
    },
    {
        icon: <TfiWrite className="h-full w-full" />,
        title: "Content writing",
        description: "We help you create a marketing strategy that drives results."
    },
    {
        icon: <TiSocialTwitter className="h-full w-full" />,
        title: "Social media",
        description: "We help you build a strong social media presence and engage with your audience."

    }
]