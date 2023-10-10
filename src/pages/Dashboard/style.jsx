// styled component
import styled, { css } from "styled-components";
import { BtnDangerOutline, LinkBtnOutline } from "../../globalStyles";

export const NoPost = styled.div`
  text-align: center;
`;

export const NoPostText = styled.p`
  margin-bottom: 1.5em;
`;

export const DashboardStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DashboardTitle = styled.h2`
  font-size: 2.2em;
  margin-bottom: 0.5em;
`;

export const DashboardText = styled.p`
  color: #aaa;
  margin-bottom: 1em;
`;

const Post = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding: 10px;
`;

export const PostHeader = styled(Post)`
  font-weight: bold;
  border-bottom: 2px solid #ccc;
`;

export const PostRow = styled(Post)`
  align-items: center;
  border-bottom: 1px solid #eee;
`;

export const PostRowText = styled.p`
  color: #000;
`;

export const ButtonCorret = css`
  margin: 0 5px;
  height: 30px;
  width: 100px;
  font-size: .7em;

  @media (max-width: 650px) {
    margin-top: 12px;
  }
  
`

export const ButtonCorretLink = styled(LinkBtnOutline)`
  ${ButtonCorret}
`

export const ButtonCorretBtn = styled(BtnDangerOutline)`
  ${ButtonCorret}
`