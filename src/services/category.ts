import client from "../shared/spotify-client";

export const getCategoryInfo = async (id: string) => {
  const playlists = await client.getCategoryPlaylists(id);
  const category = await client.getCategory(id);

  return {
    category,
    playlists: playlists.playlists,
  };
};
