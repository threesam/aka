export const getCssCustomProperty = (property) => {
  return getComputedStyle(document.body).getPropertyValue(property)
}