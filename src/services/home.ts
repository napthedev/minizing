import { SEED_ARTISTS, TOP_PLAYLISTS } from "../shared/constants";

import client from "../shared/spotify-client";

export const getHomeContent = async () => {
  const [
    newReleases,
    featuredPlaylists,
    recommendations,
    categories,
    topPlaylists,
  ] = await Promise.all([
    client.getNewReleases(),
    client.getFeaturedPlaylists(),
    client.getRecommendations({ seed_artists: SEED_ARTISTS }),
    client.getCategories(),
    Promise.all(
      TOP_PLAYLISTS.map((playlist) =>
        client.getPlaylist(playlist, { fields: "id,name,images,uri" })
      )
    ),
  ]);

  return {
    newReleases,
    featuredPlaylists,
    recommendations,
    categories,
    topPlaylists,
  };
};
