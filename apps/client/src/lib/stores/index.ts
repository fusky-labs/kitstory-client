import type { CharacterItem, PlotBlock } from "../types";
import { arrayWritable } from "./arrayWritable";

// characterStore
export const characterStore = arrayWritable<CharacterItem>();

export const addCharacter = (...definitions: CharacterItem[]) => {
  characterStore.update((prevData) => ([...prevData, ...definitions]))
}

// plotStore
export const plotStore = arrayWritable<PlotBlock>();
export const recentlyDeletedPlotStore = arrayWritable<PlotBlock>();
export const historyStore = arrayWritable();

export const spawnCharacterCell = () => {
  // TODO check the $characterStore for any set defaults, then append them on $.data.character
  plotStore.update((prevData) => [
    ...prevData,
    {
      uuid: crypto.randomUUID(),
      type: "character",
      data: {
        character: "<set default here>",
        textContent: "",
      },
    },
  ]);
};

export const spawnNarratorCell = () => {
  plotStore.update((prevData) => [
    ...prevData,
    {
      uuid: crypto.randomUUID(),
      type: "narrator",
      data: {
        textContent: "",
      },
    },
  ]);
};

// TODO: Not sure what to do with the cue cell atm
// TODO: Probably thinking about doing chat logic, or some technical details when dealing with shots and stuff
export const spawnCueCell = () => {
  plotStore.update((prevData) => [
    ...prevData,
    {
      uuid: crypto.randomUUID(),
      type: "cue",
      data: {
        textContent: "",
      },
    },
  ]);
};


