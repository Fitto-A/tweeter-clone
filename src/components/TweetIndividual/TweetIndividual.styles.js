import styled from "styled-components";

export const TweetContainer = styled.div`
  display: grid;
  grid-template-columns: 60px 5fr 100px;

  border-bottom: ${(props) => (props.lines.hasDown ? "" : "1px solid #ededed")};
  padding: 8px 16px;
  cursor: pointer;
  position: relative;
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  font-size: 15px;
  transition: 0.2s;
  &:hover {
    background-color: #f3f3f3;
  }
  form {
    grid-column: 2/3;
  }

  .modal {
    z-index: 1000;
  }
`;

export const ImgPerfil = styled.div`
  margin: 0;
  z-index: 10;
  grid-row: 1 / span 5;
  img {
    height: 48px;
    width: 48px;
    border-radius: 9999px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const BorrarTweet = styled.div`
  grid-column: 3;
  grid-row: 1 / 1;
  justify-self: end;
  align-self: center;

  a {
    color: black;
    cursor: pointer;
  }

  display: flex;
  align-items: center;
  transition: 0.3s;

  .commentBtn {
    overflow: visible;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    padding: 5px;
    transition: 0.3s;
    &:hover {
    }
  }
  &:hover {
    color: blue;
    cursor: pointer;
    .commentBtn,
    .shareBtn {
      background-color: #9f9fff;
    }
  }
`;

export const TweetNav = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin: 0;
    padding-right: 4px;
  }
  span {
    padding-right: 4px;
    color: #717a7a;
  }
  a {
    text-decoration: none;
    color: #717a7a;
  }
`;

export const TweetContent = styled.div`
  padding-top: 5px;
  grid-column: 2/4;
  img {
    border-radius: 8px;
    max-width: 500px;
    margin-top: 0.5rem;
  }
`;
export const Username = styled.span`
  color: #292b2b !important;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  font-weight: 600;
`;

export const TweetImg = styled.img`
  max-width: 60%;
  max-height: 60%;
  border-radius: 20px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px 0px 16px;
  font-size: 15px;
  position: relative;
`;

export const TweetHeader = styled.div`
  display: grid;
  grid-template-columns: 60px 5fr 100px;
`;

export const MainUser = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const TweetMainContent = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 20px;
    margin: 12px 0;
  }
  img {
    border-radius: 8px;
    max-width: 500px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const RespondingTo = styled.div`
  color: grey;

  span {
    font-weight: 500;
    color: #bf5252;
  }
`;
