import { FC, ReactNode, createContext, useState } from "react";

export const PlayerContext = createContext<{
  playerId: string;
  setPlayerId: Function;
  isPlayerIdChanged: boolean;
  setIsPlayerIdChanged: Function;
}>({
  playerId: "",
  setPlayerId: () => {},
  isPlayerIdChanged: false,
  setIsPlayerIdChanged: () => {},
});

export const PlayerContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [playerId, setPlayerId] = useState(
    localStorage.getItem("minizing-playing") || ""
  );
  const [isPlayerIdChanged, setIsPlayerIdChanged] = useState(false);

  return (
    <PlayerContext.Provider
      value={{
        playerId,
        setPlayerId,
        isPlayerIdChanged,
        setIsPlayerIdChanged,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
