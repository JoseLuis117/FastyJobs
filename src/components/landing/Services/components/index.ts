import { CardServiceProps } from "../interfaces/CardTypes";
import { Card as CardService } from "./Card";
import { CardDescription } from "./CardDescription";
import { CardIcon } from "./CardIcon";
import { CardTitle } from "./CardTitle";

export const Card:CardServiceProps = Object.assign(CardService,{
    Title:CardTitle,
    Description:CardDescription,
    Icon:CardIcon
})
