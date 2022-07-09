export const useLogger = (id) => {
  return {
    log (...msg) {
      console.log(`[${id}]`, ...msg)
    }
  }
}
