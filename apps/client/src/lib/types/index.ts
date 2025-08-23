type BlockType = "dialogue" | "meta"

interface DefineBlock<D extends Record<string, unknown>> {
	uuid: ReturnType<typeof crypto.randomUUID>
	type: BlockType
	data: D
}

export interface CharacterItem {
	name: string
	description?: string
}

export type PlotBlock = DefineBlock<{
	character?: string | CharacterItem
	textContent?: string
}>
