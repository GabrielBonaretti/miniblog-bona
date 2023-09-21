// styled components
import { SearchContainer, TextNotFound } from "./styled";
import { LinkBtnDark } from "../../globalStyles";

// hooks
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"

// components
import PostDetail from "../../components/PostDatail";

const Search = () => {
    const query = useQuery()
    const search = query.get('q')

    const { documents: posts } = useFetchDocuments("posts", search)
    
    return (
        <SearchContainer>
            <h2>Search</h2>
            <div>
                {posts && posts.length !== 0 ? (
                    posts.map((post) => {
                        return <PostDetail key={post.id} post={post} />
                    })
                ) : (
                    <>
                        <TextNotFound>No posts were found from your search...</TextNotFound>
                        <LinkBtnDark to="/">
                            Return
                        </LinkBtnDark>
                    </>
                )}
            </div>
        </SearchContainer>
    )
}

export default Search