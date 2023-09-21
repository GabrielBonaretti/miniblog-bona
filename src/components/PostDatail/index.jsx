// style
import { CreatedBy, PostDetailStyled, PostDetailText, PostImage, SpanTag, Tags, TagsDiv } from "./style"
import { LinkBtnOutline } from "../../globalStyles"


const PostDetail = ({ post }) => {
  return (
    <PostDetailStyled>
      <PostImage src={post.image} alt={post.title} />
      <PostDetailText>{post.title}</PostDetailText>
      <CreatedBy>{post.createdBy}</CreatedBy>
      <TagsDiv>
        {post.tags.map((tag) => (
          <Tags key={tag}><SpanTag>#</SpanTag>{tag}</Tags>
        ))}
      </TagsDiv>
      <LinkBtnOutline to={`/posts/${post.id}`}>Read More</LinkBtnOutline>
    </PostDetailStyled>
  )
}

export default PostDetail