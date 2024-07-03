import { Props as AlertPropsTypes } from "../ui/alert/Alert"
import { Props as DescriptionProps } from "../ui/alert/AlertDescription"
import { Props as IconProps } from "../ui/alert/AlertIcon"
import { Props as TitleProps } from "../ui/alert/AlertTitle"
export interface AlertProps{
    ({ className, backgroundColor, children, color }: AlertPropsTypes) : JSX.Element,
    Icon: ({ icon, className }: IconProps) => JSX.Element,
    Title: ({ title, className }: TitleProps) => JSX.Element,
    Description: ({ className, description }: DescriptionProps) => JSX.Element | undefined
}