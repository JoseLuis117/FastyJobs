import { AlertProps } from "@/components/interfaces/uiprops";
import { Alert as AlertTemp } from "./Alert";
import { AlertDescription } from "./AlertDescription";
import { AlertIcon } from "./AlertIcon";
import { AlertTitle } from "./AlertTitle";

export const Alert:AlertProps = Object.assign(AlertTemp, {
    Icon:AlertIcon,
    Title:AlertTitle,
    Description:AlertDescription
})