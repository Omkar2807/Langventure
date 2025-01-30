import { redirect } from "next/navigation";
import Cardchart from "./cardchart";

import { lessons, units as unitsSchema } from "@/db/schema";
import { Promo } from "@/components/promo";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { 
    getCourseProgress,
    getLessonPercentage,
    getUnits,
    getUserProgress,
    getUserSubscription
} from "@/db/queries";

import { Header } from "./header";

import { Quests } from "@/components/quests";

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();
    const userSubscriptionData = getUserSubscription();
    
    const[        
        userProgress,
        units,
        courseProgress,
        lessonPercentage,
        userSubscription,
    ] = await Promise.all([
        userProgressData,
        unitsData,
        courseProgressData,
        lessonPercentageData,
        userSubscriptionData 
    ]);

    if (!userProgress || !userProgress.activeCourse){
        redirect("/courses");
    }

    if(!courseProgress){
        redirect("/courses");
    }

    const isPro = !!userSubscription?.isActive;;

    return (
        <div className="flex flex-row-reverse gap-[48px] px-6">
            
            <FeedWrapper>
                <Header title={userProgress.activeCourse.title} />
                <Cardchart/>
                
            </FeedWrapper>
            

        </div>
    );
}

export default LearnPage;