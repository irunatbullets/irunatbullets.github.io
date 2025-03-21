export type Color =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'black'
  | 'white'

export type BlockStyle = {
  background: 'none' | 'image' | Color
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
