// styled components
import { Btn, Error } from "../../globalStyles";
import { CreatePostDiv, CreatePostText, CreatePostTitle } from "./style";

// hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");
    let errorTest = false

    // validate image URL
    try {
      new URL(image);
    } catch (error) {
      setFormError("The image needs be a URL");
      errorTest = true
    }

    // create array tags
    const tagsArray = tags.split(",").map(tag => tag.trim().toLowerCase())

    //check all value
    if (!title || !title || !tags || !body ) {
      setFormError("Please fill in all fields.")
    }

    if (errorTest) { 
      return
    };
    
    insertDocument({
      title,
      image,
      body,
      tags: tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // redirect home page
    navigate("/")
  };

  return (
    <CreatePostDiv>
      <CreatePostTitle>New Post</CreatePostTitle>
      <CreatePostText>
        Write whatever you want and share your knowledge!
      </CreatePostText>
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
    </CreatePostDiv>
  );
};

export default CreatePost;
