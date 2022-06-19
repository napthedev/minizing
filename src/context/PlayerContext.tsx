import { createContext } from "react";

export const PlayerContext = createContext<{
  id: string;
  setId: Function;
  isChanged: boolean;
  setIsChanged: Function;
}>({
  id: "",
  setId: () => {},
  isChanged: false,
  setIsChanged: () => {},
});
