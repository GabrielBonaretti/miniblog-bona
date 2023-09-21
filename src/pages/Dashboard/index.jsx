// styled components
import {
  NoPost,
  DashboardText,
  NoPostText,
  ButtonCorretLink,
  DashboardStyled,
  DashboardTitle,
  PostHeader,
  PostRow,
  ButtonCorretBtn,
} from "./style";
import { LinkBtn } from "../../globalStyles";

// hooks
import { useAuthValue } from "../../context/AuthContext";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useDeleteDocument } from "../../hooks/useDeleteDocuments";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
  const { deleteDocument } = useDeleteDocument("posts")

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <DashboardStyled>
      <DashboardTitle>Dashboard</DashboardTitle>
      <DashboardText>Manage your posts</DashboardText>
      {posts && posts.length === 0 ? (
        <NoPost>
          <NoPostText>No posts found</NoPostText>
          <LinkBtn to="/posts/create">Create first post</LinkBtn>
        </NoPost>
      ) : (
        <>
          <PostHeader>
            <span>Title</span>
            <span>Actions</span>
          </PostHeader>

          {posts &&
            posts.map((post) => (
              <PostRow key={post.id}>
                <p>{post.title}</p>
                <div>
                  <ButtonCorretLink to={`/posts/${post.id}`}>See</ButtonCorretLink>
                  <ButtonCorretLink to={`/posts/edit/${post.id}`}>
                    Edit
                  </ButtonCorretLink>
                  <ButtonCorretBtn onClick={() => deleteDocument(post.id)}>
                    Delete
                  </ButtonCorretBtn>
                </div>
              </PostRow>
            ))}
        </>
      )}
    </DashboardStyled>
  );
};

export default Dashboard;
