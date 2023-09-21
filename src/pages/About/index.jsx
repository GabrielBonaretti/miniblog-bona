// Component styles
import { AboutDiv, AboutText } from "./style"
import { LinkBtn } from "../../globalStyles"

const About = () => {
  return (
    <AboutDiv>
      <h2>About the mini <span>blog</span></h2>
      <AboutText>This project consists of a blog made with React on the front-end and Firebase on the back-end</AboutText>
      <LinkBtn to="/posts/create">
        Create Post
      </LinkBtn>
    </AboutDiv>
  )
}

export default About