import { PostCardProps } from "../../../interfaces/types";
import { PostCard as PostCardTemporal } from "./PostCard";
import { PostCardDescription } from "./PostCardDescription";
import { PostCardImages } from "./PostCardImages";
import { PostCardMetadata } from "./PostCardMetadata";
import { PostCardTitle } from "./PostCardTitle";
import { PostCardUser } from "./PostCardUser";

export const PostCard:PostCardProps = Object.assign(PostCardTemporal, {
    User: PostCardUser,
    Title: PostCardTitle,
    Description: PostCardDescription,
    Images: PostCardImages,
    Metadata: PostCardMetadata
})