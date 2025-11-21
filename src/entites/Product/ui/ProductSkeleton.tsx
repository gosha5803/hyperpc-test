import { Card, CardContent, CardFooter } from "@/shared/components/ui/card";
import { Skeleton } from "@/shared/components/ui/skeleton";

export const ProductSkeleton = () => {
    return (
        <Card className="pb-0 pt-0 mb-4 border-0 shadow-white overflow-hidden gap-2">
            <CardContent className="p-0">
                <Skeleton className="w-full h-90 rounded-2xl bg-gray-200" />
            </CardContent>
            <CardFooter className="p-2 flex flex-col gap-2.5">
                <Skeleton className="bg-gray-200 h-6 w-[25%] rounded-2xl" />
                <Skeleton className="bg-gray-200 h-5 w-[70%] rounded-2xl" />
                <Skeleton className="bg-gray-200 h-8 w-full rounded-md" />
            </CardFooter>
        </Card>
    );
};
