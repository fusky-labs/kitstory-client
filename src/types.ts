interface BaseAttributes {
  /** For generating UUID, fix by adding `crypto.randomUUID()` */
  readonly uuid: `${string}-${string}-${string}-${string}-${string}`
  locked?: {
    value: boolean
    byAuthor: string
  }
}

interface DialogBlock extends BaseAttributes {
  type: "dialogue"
  data: {
    character: string
    content: string
  }
}

interface NarratorBlock extends BaseAttributes {
  type: "narrator"
  data: {
    content: string
  }
}

interface SettingBlock extends BaseAttributes {
  type: "setting"
  data: {
    environment: "interior" | "exterior"
    time: string
    location: string
  }
}

interface SectionBlock extends BaseAttributes {
  type: "section"
  data: {
    title: string
    isChronological: true
  }
}

export type PlotCell = DialogBlock | NarratorBlock | SettingBlock | SectionBlock


export interface CharacterItem extends BaseAttributes {
  name: string
  image: string
  default: boolean
  biography?: string
  attributes?: {
    [x: string]: string
  }
}