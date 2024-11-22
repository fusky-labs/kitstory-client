import { writable } from "svelte/store"
import type { CharacterItem, PlotBlock } from "./types";

const arrayWritable = <Data = unknown>() => {
  const { subscribe, update, set } = writable<Data[]>([])

  return {
    subscribe,
    update,
    deleteFromIndex: (...indices: number[]) => update((prevData) => {
      const newArr = prevData.filter((_, index) => !indices.includes(index));
      return newArr;
    }),
    clear: () => set([])
  }
}

//* $characterStore
export const characterStore = arrayWritable<CharacterItem>();

export const addCharacter = (...definitions: CharacterItem[]) => {
  characterStore.update((prevData) => ([...prevData, ...definitions]))
}

//* $plotStore
export const plotStore = arrayWritable<PlotBlock>();
export const recentlyDeletedPlotStore = arrayWritable<PlotBlock>();

export const spawnDialogCell = () => {
  // TODO check the $characterStore for any set defaults, then append them on $.data.character
  plotStore.update((prevData) => [
    ...prevData,
    {
      uuid: crypto.randomUUID(),
      type: "dialogue",
      data: {
        character: "<set default here>",
        content: "",
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
        content: "",
      },
    },
  ]);
};


