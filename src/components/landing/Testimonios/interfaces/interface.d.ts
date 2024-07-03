import { Props as RateProps } from "../components/TestimonialRate"
import { Props as DescriptionProps } from "../components/TestimonialDescription"
import { Props as CardProps } from "../components/TestimonialCard"
export interface TestimonialComponentProps {
    ({ children }: CardProps): JSX.Element,
    Rate: ({ rate, className }: RateProps) => JSX.Element,
    Description: ({ className, description }: DescriptionProps) => JSX.Element
}
export interface TestimonialsDataTypes {
    id: string;
    name: string;
    img: string;
    profesion: string;
    rate: number;
    text: string;
}