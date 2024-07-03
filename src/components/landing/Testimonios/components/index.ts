import { TestimonialCard as TestimonialTemp } from "./TestimonialCard";
import { TestimonialRate } from "./TestimonialRate";
import { TestimonialDescription } from "./TestimonialDescription";
import { TestimonialComponentProps } from "../interfaces/interface";

export const TestimonialCard:TestimonialComponentProps = Object.assign(TestimonialTemp, {
    Rate: TestimonialRate,
    Description: TestimonialDescription
})