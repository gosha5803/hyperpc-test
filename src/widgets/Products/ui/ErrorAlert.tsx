import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/shared/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { FC } from "react";

type Props = {
    error: Error;
};

export const ErrorAlert: FC<Props> = ({ error }) => (
    <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Ошибка</AlertTitle>
        <AlertDescription>
            {error.message || "Произошла неизвестная ошибка"}
        </AlertDescription>
    </Alert>
);
