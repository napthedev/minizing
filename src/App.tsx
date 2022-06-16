import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Album from "./pages/Album";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import Playlist from "./pages/Playlist";
import client from "./shared/spotify-client";

enum LoadingStates {
  loading,
  finished,
  error,
}

export default function App() {
  const [loadingState, setLoadingState] = useState(LoadingStates.loading);

  useEffect(() => {
    fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${btoa(
          `${import.meta.env.VITE_CLIENT_ID}:${
            import.meta.env.VITE_CLIENT_SECRET
          }`
        )}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "grant_type=client_credentials",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.access_token) {
          setLoadingState(LoadingStates.finished);
          client.setAccessToken(data.access_token);
        } else setLoadingState(LoadingStates.error);
      })
      .catch((err) => {
        console.log(err);
        setLoadingState(LoadingStates.error);
      });
  }, []);

  if (loadingState === LoadingStates.loading) return <></>;

  if (loadingState === LoadingStates.error)
    return <div>Something went wrong</div>;

  return (
    <div>
      <Navbar />

      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="album/:id" element={<Album />}></Route>
        <Route path="playlist/:id" element={<Playlist />}></Route>
      </Routes>
    </div>
  );
}
