import { Props as IconProps } from "../components/CardIcon"
import { Props as TitleProps } from "../components/CardTitle"
import { Props as DescriptionProps } from "../components/CardDescription"
import { Props as CardProps } from "../components/Card"
export interface CardServiceProps {
    Title: React.FC<{ title: string; className?: string }>;
    Description: React.FC<{ description: string; className?: string }>;
    Icon: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLElement>>;
    ({ children, className, handleHover, onMouseLeave, key }: CardProps): React.ReactElement;
}
export interface FeaturesDataTypes{
    id: string,
    description: string,
    icon: string,
    title: string
}