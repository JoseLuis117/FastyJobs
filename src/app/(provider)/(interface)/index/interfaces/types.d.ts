import { CardProps } from "../components/Posts/components/PostCard"
import { UserProps } from "../components/Posts/components/PostCardUser"
import { TitleProps } from "../components/Posts/components/PostCardTitle"
import { DescriptionProps } from "../components/Posts/components/PostCardDescription"
import { ImageProps } from "../components/Posts/components/PostCardImages"
import { MetadataProps } from "../components/Posts/components/PostCardMetadata"
export interface PostProps {
    title: string,
    description: string,
    ubicacion: string,
    createAt: string,
    category: string,
    imageProfileUrl: string
    images: string[]
    userName: string,
    profession: string
}
export interface PostCardProps {
    ({ children, className }: CardProps): JSX.Element,
    User: ({ name, profesion, imageUrl }: UserProps) => JSX.Element,
    Title: ({ className, title }: TitleProps) => JSX.Element,
    Description: ({ classname, description }: DescriptionProps) => JSX.Element,
    Images: ({ className, images }: ImageProps) => JSX.Element,
    Metadata: ({ category, createAt, ubicacion, className }: MetadataProps) => JSX.Element,
}