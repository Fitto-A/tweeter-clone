import React, { useState } from "react";
import {
  TweetWrapper,
  ImgPerfil,
  TweetContainer,
  TweetNav,
  TweetContent,
  TweetImagen,
} from "./Tweet.styled";

import imgPerfil from "../../imgs/perfil.jpg";
import IndividualTweet from "../IndividualTweet";

const Tweet = ({ correoUsuario, arrayTweets, eliminarTweet }) => {
  const [imagenTweet, setImagenTweet] = useState(imgPerfil);

  return (
    <TweetWrapper>
      {arrayTweets &&
        arrayTweets.map((tweet) => {
          if (!tweet.parentId) {
            return (
              <IndividualTweet
                key={tweet.id}
                id={tweet.id}
                tweet={tweet}
                correoUsuario={correoUsuario}
                eliminarTweet={eliminarTweet}
              />
            );
          } else {
            return null;
          }
          /*<div key={tweet.id}>
              <TweetContainer>
                <ImgPerfil src={imgPerfil} />
                <TweetNav>
                  <h4>Mi nombre</h4>
                  <span>{correoUsuario}</span>
                  <span>·</span>
                  <a href="/0223comar/status/1466783975939223559">{tweet.id}</a>
                </TweetNav>
                <TweetContent>
                  {tweet.descripcion && <p>{tweet.descripcion}</p>}
                  {imagenTweet && <TweetImagen src={imagenTweet} />}
                </TweetContent>
                <button onClick={() => eliminarTweet(tweet.id)}>
                  Eliminar Tweet
                </button>
              </TweetContainer>
            </div>*/
        })}
    </TweetWrapper>
  );
};

export default Tweet;
