import { createContext } from "react";

export const PlayerContext = createContext<{ id: string; setId: Function }>({
  id: "",
  setId: () => {},
});
