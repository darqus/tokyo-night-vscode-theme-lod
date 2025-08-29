import { core } from '../palette'

export const getMergeColors = () => ({
  // Слияние (Merge)
  'merge.currentHeaderBackground': core.tokens.mergeCurrentHeaderBackground, // Заголовок текущей ветки
  'merge.currentContentBackground': core.tokens.mergeCurrentContentBackground, // Контент текущей ветки
  'merge.incomingHeaderBackground': core.tokens.mergeIncomingHeaderBackground, // Заголовок входящей ветки
  'merge.incomingContentBackground': core.tokens.mergeIncomingContentBackground, // Контент входящей ветки
})
