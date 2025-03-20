export type BlockStyle = {
  background: string
  background_image: string | null
}

export type BlockWelcome = {
  id: string
  title: string
  subtitle: string
  emoji: string
  content: string
  style: BlockStyle
}

export type Block = {
  collection: 'block_welcome'
  item: BlockWelcome
}

export type Homepage = {
  blocks: Block[]
}
