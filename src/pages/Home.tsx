import DataGrid from "../components/DataGrid";
import { FC } from "react";
import { getHomeContent } from "../services/home";
import useSWR from "swr";

const Home: FC = () => {
  const { data, error } = useSWR("home", () => getHomeContent(), {
    revalidateOnFocus: false,
    revalidateIfStale: false,
  });

  if (error) return <div>Error</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div className="mx-[5vw] pb-6">
      <h1 className="mt-10 mb-3 text-2xl">Recommended</h1>

      <DataGrid
        type="button"
        handler={(id: string) => {
          console.log(id);
        }}
        data={data.recommendations.tracks.map((track) => ({
          id: track.id,
          image: (track as any)?.album?.images?.[0]?.url,
          title: track.name,
          description: track?.artists.map((artist) => artist.name).join(", "),
        }))}
      />

      <h1 className="mt-5 mb-3 text-2xl">New Releases</h1>

      <DataGrid
        type="link"
        handler={(id: string) => `/album/${id}`}
        data={data.newReleases.albums.items.map((album) => ({
          id: album.id,
          image: album.images[0].url,
          title: album.name,
          description: (album as any)?.artists
            ?.map((artist: any) => artist?.name)
            ?.join(", "),
        }))}
      />

      <h1 className="mt-10 mb-3 text-2xl">Top Playlists</h1>

      <DataGrid
        type="link"
        handler={(id: string) => `/playlist/${id}`}
        data={data.topPlaylists.map((playlist) => ({
          id: playlist.id,
          image: playlist.images[0].url,
          title: playlist.name,
          description: playlist?.owner?.display_name,
        }))}
      />

      <h1 className="mt-10 mb-3 text-2xl">Featured Playlists</h1>

      <DataGrid
        type="link"
        handler={(id: string) => `/playlist/${id}`}
        data={data.featuredPlaylists.playlists.items.map((playlist) => ({
          id: playlist.id,
          image: playlist.images[0].url,
          title: playlist.name,
          description: playlist?.owner?.display_name,
        }))}
      />
    </div>
  );
};

export default Home;
