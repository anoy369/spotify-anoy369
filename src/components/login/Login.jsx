import React from 'react'
// import styled from 'styled-components'
import { Container } from './login-style.js';
// import Logo from "" s

const connectSpotify = () => {
  const clientId = "9afd7d9237a042eea47814f58362da5d"
  const redirectUrl = "http://localhost:3000/"
  const apiUrl = "https://accounts.spotify.com/authorize"
  const scope = [
    "user-read-email",
    "user-read-private",
    "user-modify-playback-state",
    "user-read-playback-state",
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-position",
    "user-top-read",
  ]
  window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
    " "
  )}&response_type=token&show_dialog=true`
}

export const Login = () => {
  return <Container>
    <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="Spotiffy" />
    <button onClick={connectSpotify}>Connect Spotify</button>
  </Container>;
}

