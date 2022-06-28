import { tokenize } from 'string-punctuation-tokenizer'
import prepositions from 'title-case-minors'

export const transform = (input, moreUselessWords = []) => {
  const uselessWords = prepositions
    .concat(['has', 'his', 'these', 'been', 'they', 'new', 'says', 'one', 'over', 'are', 'not', 'first', 'about', 'this', 'into', 'was', 'after', 'what', 'will', 'have', 'like', 'back', 'day', 'year', 'month', 'reuters'])
    .concat(moreUselessWords)

  const titles = input
    .map(item => item.title)

  const words = titles
    .map(title => tokenize({ text: `${title}` })) // turn title into array of words
    .flat()
    .map(word => word.toLowerCase())
    .filter(item => Number.isNaN(+item) && item.length > 2) // filter out numbers and words shorter than two letters
    .filter(item => !uselessWords.includes(item))



  const count = words
    .reduce((map, word) => {
      map[word] = (map[word] || 0) + 1
      return map
    }, Object.create(null))

  const sortedCount = Object.entries(count)
    .sort((a, b) => b[1] - a[1])

  return sortedCount
}