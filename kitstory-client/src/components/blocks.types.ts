export interface BlockIndicators {
  comments?: unknown
  locked?: Partial<{
    byUser: unknown
    reason: string
  }>
}