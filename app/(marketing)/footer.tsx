import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button>
                    <Image
                    src="/es.svg"
                    alt="Spanish"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"/>
                Spanish
                </Button>
                <Button>
                    <Image
                    src="/fr.svg"
                    alt="French"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"/>
                French
                </Button>
                <Button>
                    <Image
                    src="/jp.svg"
                    alt="Japanese"
                    height={32}
                    width={40}
                    className="mr-4 rounded-md"/>
                Japanese
                </Button>
            </div>
        </footer>
    );
};
