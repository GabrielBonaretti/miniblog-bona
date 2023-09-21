// styled components
import { Btn, Error } from "../../globalStyles";
import {
  EditPostDiv,
  EditPostText,
  EditPostTitle,
  PreviewTitle,
  ImagePreview,
} from "./style";

// hooks
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useUpdateDocument } from "../../hooks/useUpdateDocument";
import { useFetchOneDocument } from "../../hooks/useFetchOneDocument";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchOneDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);

      const textTags = post.tags.join(", ");
      setTags(textTags);
    }
  }, [post]);

  const { user } = useAuthValue();

  const { updateDocument, response } = useUpdateDocument("posts");
  
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    let errorTest = false;
    
    // validate image URL
    try {
      new URL(image);
    } catch (error) {
      setFormError("The image needs be a URL");
      errorTest = true;
    }

    // create array tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    //check all value
    if (!title || !title || !tags || !body) {
      setFormError("Please fill in all fields.");
    }

    if (errorTest) {
      return;
    }

    const data = {
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);

    // redirect home page
    navigate("/dashboard");
  };

  return (
    <EditPostDiv>
      {post && (
        <>
          <EditPostTitle>Editing post: {post.title}</EditPostTitle>
          <EditPostText>Change the post data as you wish!</EditPostText>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Title:</span>
              <input
                type="text"
                name="title"
                required
                placeholder="Think of a good title..."
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </label>

            <label>
              <span>Image URL:</span>
              <input
                type="text"
                name="image"
                required
                placeholder="Insert an image that represents your post"
                onChange={(e) => setImage(e.target.value)}
                value={image}
              />
            </label>
            <PreviewTitle>Preview of the current image:</PreviewTitle>
            <ImagePreview src={post.image} alt={post.title} />
            <label>
              <span>Content:</span>
              <textarea
                name="body"
                required
                placeholder="insert post content"
                onChange={(e) => setBody(e.target.value)}
                value={body}
              ></textarea>
            </label>

            <label>
              <span>Tags:</span>
              <input
                type="text"
                name="tags"
                required
                placeholder="Insert tags separated by commas"
                onChange={(e) => setTags(e.target.value)}
                value={tags}
              />
            </label>

            {!response.loading ? <Btn>Post</Btn> : <Btn disabled>Wait...</Btn>}

            {response.error && <Error>{response.error}</Error>}
            {formError && <Error>{formError}</Error>}
          </form>
        </>
      )}
    </EditPostDiv>
  );
};

export default EditPost;
