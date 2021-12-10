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

const Tweet = ({ correoUsuario, arrayTweets, eliminarTweet }) => {
  const [descripcion, setDescripcion] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at euismod arcu. Sed ultrices ipsum nulla, sed fermentum ante laoreet eu."
  );
  const [imagenTweet, setImagenTweet] = useState(imgPerfil);

  return (
    <TweetWrapper>
      {arrayTweets &&
        arrayTweets.map((tweet) => {
          return (
            <div key={tweet.id}>
              <ImgPerfil src={null} />
              <TweetContainer>
                <TweetNav>
                  <h4>Mi nombre</h4>
                  <span>{correoUsuario}</span>
                  <span>·</span>
                  <a href="/0223comar/status/1466783975939223559">{tweet.id}</a>
                </TweetNav>
                <TweetContent>
                  {descripcion && <p>{tweet.detalles}</p>}
                  {imagenTweet && <TweetImagen src={imagenTweet} />}
                </TweetContent>
                <button onClick={() => eliminarTweet(tweet.id)}>
                  Eliminar Tweet
                </button>
              </TweetContainer>
            </div>
          );
        })}
    </TweetWrapper>
  );
};

export default Tweet;