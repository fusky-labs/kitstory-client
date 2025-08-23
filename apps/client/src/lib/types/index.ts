export type BlockTypes = "character" | "narrator" | "cue";

interface DefineBlock<D extends Record<string, unknown>> {
	uuid: ReturnType<typeof crypto.randomUUID>
	type: BlockTypes
	lock?: {
		reason: string
	}
	comments?: unknown[]
	data: D
	// TODO This could be handy~ But still unsure how I'd go about implementing this soon
	attachments?: unknown[]
}

//////////////////////

// Character
export interface CharacterItem {
	name: string
	avatar?: string
	description?: string
}

export type PlotBlock = DefineBlock<{
	character?: string | CharacterItem
	textContent?: string
}>
