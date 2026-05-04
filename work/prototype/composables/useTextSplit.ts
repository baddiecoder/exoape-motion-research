export function useTextSplit() {
  const splitLines = (text: string) => text.split('|').map((line) => line.trim()).filter(Boolean)
  return { splitLines }
}
