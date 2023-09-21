// styled components
import { BtnDark, LinkBtn } from "../../globalStyles";
import {
  HomeDiv,
  NoPost,
  NoPostText,
  SearchForm,
  SearchInput,
} from "./style";

// hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

// components
import PostDetail from "../../components/PostDatail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();


    if (query) {
      console.log("teste")
      return navigate(`/search?q=${query}`)
    }
  };

  return (
    <HomeDiv>
      <h2>See our most recent posts</h2>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="search for tags"
          onChange={(e) => setQuery(e.target.value)}
        />
        <BtnDark>Research</BtnDark>
      </SearchForm>
      <div>
        {loading && <p>Loading...</p>}
        {posts && posts.map((post) => (
          <PostDetail key={post.id} post={post} />
        ))}
        {posts && posts === 0 && (
          <NoPost>
            <NoPostText>No posts found</NoPostText>
            <LinkBtn to="/posts/create">Create the first post</LinkBtn>
          </NoPost>
        )}
      </div>
    </HomeDiv>
  );
};

export default Home;
