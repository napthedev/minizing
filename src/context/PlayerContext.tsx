import { createContext } from "react";

export const PlayerContext = createContext<{ id: string; setId: Function , isChanged: boolean}>({
  id: "",
  setId: () => {},
  isChanged: false
});
