/**
 * Кэширование цветовых операций для оптимизации производительности
 */

// Кэш для дорогих операций смешивания
const colorCache = new Map<string, string>()

/**
 * Получение кэшированного результата или вычисление нового
 */
export const getCachedColor = <T extends any[]>(
  key: string,
  computeFn: (...args: T) => string,
  ...args: T
): string => {
  if (colorCache.has(key)) {
    return colorCache.get(key)!
  }
  
  const result = computeFn(...args)
  colorCache.set(key, result)
  return result
}

/**
 * Очистка кэша (для тестов)
 */
export const clearColorCache = (): void => {
  colorCache.clear()
}

/**
 * Статистика кэша
 */
export const getCacheStats = () => ({
  size: colorCache.size,
  keys: Array.from(colorCache.keys())
})