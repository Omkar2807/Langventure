import { Button } from "@/components/ui/button";
import { NotebookText } from "lucide-react";
import Link from "next/link";

type Props = {
    title: string;
    description: string;
    imageUrl: string |null ; // Optional prop for the image URL
};


export const UnitBanner = ({
    title,
    description,
    imageUrl,
}: Props) => {
    console.log("hello"+ imageUrl)
    return (
        <div 
            className="w-full rounded-xl p-5 bg-green-100 flex items-center justify-between"
            style={{
                backgroundImage: imageUrl ? `url(${imageUrl})` : 'bg-green-500',
                backgroundColor: !imageUrl ? 'bg-green-500' : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            
        >
            <div className="space-y-2.5">
                <h3 className="text-2xl font-bold">  
                    {title}
                </h3>
                <p className="text-lg">
                    {description}
                </p>
            </div>
            <Link href="/lesson">
                <Button
                size="lg"
                variant="secondary"
                className="hidden xl:flex border-2 border-b-4 active:border-b-2"
                >
                    <NotebookText className="mr-2" />
                    Continue
                </Button>
            </Link>
        </div>
    );
};
