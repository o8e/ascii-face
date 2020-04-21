import * as colors from './colors'
import * as chars from './chars'

export const generate = (html: boolean = false) => {
  const pickOne = (arr: string[]) => arr[~~(Math.random() * arr.length)]

  const setColor = (char: string) => {
    const span = (color: string) =>
      `<span style="color: ${color}">${char}</span>`
    return {
      hair: () => {
        if (!html) return char
        const color = pickOne(colors.hair)
        return span(color)
      },
      eye: () => {
        if (!html) return char
        const color = pickOne(colors.eye)
        return span(color)
      }
    }
  }

  const eye = () =>
    pickOne(
      ['6', '9', '3', 'a', 'q', 'Q', 'e', 'p', 'P', 'o', '0', 'O'].map(v =>
        setColor(v).eye()
      )
    )
  const hair = () => pickOne(chars.hair.map(v => setColor(v).hair()))
  const nose = () => pickOne(chars.nose)
  const mouth = () => pickOne(chars.mouth)

  const base = () =>
    String.raw`  |||||||
 /       \
 | 0   0 |
<|   v   |>
 \  ===  /
  \_____/
`
      .replace(/0/g, eye())
      .replace(/\|{7,}/g, hair().repeat(7))
      .replace(/v{1,1}/g, nose())
      .replace(/={3,3}/g, mouth().repeat(3))

  return base()
}
