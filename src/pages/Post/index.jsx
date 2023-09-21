// styled components
import { H3Styled, PostContainer, Tags, TagsSpan, TagsText } from "./style";

// hooks
import { useParams } from "react-router-dom"
import { useFetchOneDocument } from "../../hooks/useFetchOneDocument";

const Post = () => {
    const { id } = useParams();
    const { document: post, loading } = useFetchOneDocument("posts", id);

    return (
        <PostContainer>
            {loading && <p>Loading post...</p>}
            {post && (
                <>
                    <h2>{post.title}</h2>
                    <img src={post.image} alt={post.title} />
                    <p>{post.body}</p>
                    <H3Styled>This post is about:</H3Styled>
                    <Tags>
                        {post.tags.map((tag) => (
                            <TagsText key={tag}><TagsSpan>#</TagsSpan>{tag}</TagsText>
                        ))}
                    </Tags>
                </>
            )}
        </PostContainer>
    )
}

export default Post