import { redirect } from "next/navigation";
import Cardchart from "./cardchart";
import { basicsdb,lessons, units as unitsSchema } from "@/db/schema";
import { Promo } from "@/components/promo";
import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { 
    getCourseProgress,
    getLessonPercentage,
    getUnits,
    getUserProgress,
    getUserSubscription,
    getBasicsdb
} from "@/db/queries";

import { Header } from "./header";

import { Quests } from "@/components/quests";

const LearnPage = async () => {
    const userProgressData = getUserProgress();
    const courseProgressData = getCourseProgress();
    const lessonPercentageData = getLessonPercentage();
    const unitsData = getUnits();
    const userSubscriptionData = getUserSubscription();
    const BasicsVocabdata =  getBasicsdb();
    
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

    // for vocab retrival 
        const[
            Basicvovabdata,
           
        ] = await Promise.all([
            BasicsVocabdata,
        ]);

        // console.log(Basicvovabdata);
        console.log(typeof BasicsVocabdata);

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
                <Cardchart Basicvovabdata={Basicvovabdata}/>
                
            </FeedWrapper>
            

        </div>
    );
}

export default LearnPage;