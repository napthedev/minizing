import DataGrid from "../components/DataGrid";
import { FC } from "react";
import { getCategoryInfo } from "../services/category";
import { useParams } from "react-router-dom";
import useSWR from "swr";

const Category: FC = () => {
  const { id } = useParams();
  const { error, data } = useSWR(`category-${id}`, () =>
    getCategoryInfo(id as string)
  );

  if (error) return <div>Error</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div className="mx-[5vw] mb-5">
      <h1 className="mt-5 mb-3 text-2xl">Category: {data.category.name}</h1>

      <DataGrid
        type="link"
        handler={(id: string) => `/playlist/${id}`}
        data={data.playlists.items
          .filter((playlist) => playlist.name)
          .map((playlist) => ({
            id: playlist.id,
            image: playlist.images[0].url,
            title: playlist.name,
            description: playlist?.owner?.display_name,
          }))}
      />
    </div>
  );
};

export default Category;
