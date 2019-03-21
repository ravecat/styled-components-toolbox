export default (properties, resolution) => {
  try {
    //TODO Use rc-file for store variables
    const argRes = Array.isArray(resolution) ? resolution : resolution && [resolution]
    const resolutions = argRes || process.env.RESPONSIVE.replace(/[\s]/gi, "").split(",").sort((a, b) => a - b)

    if (!resolutions || !resolutions.length || resolutions.some(isNaN)) {
      throw new Error('Responsive value is invalid or not definitely. Must be a number or set of numbers')
    }
  
    if (!properties.length) {
      throw new Error('Must be a least of one css rule')
    }
    
    const isManyResolutions = properties.length < resolutions.length + 1
    
    return (isManyResolutions ? properties : resolutions).reduce((styles, item, index, arr) => styles.concat(
      !index ?
        `@media (max-width: ${resolutions[index]}px) {
          ${properties[index]}
        }` :
        arr[index + 1] ?
          `@media (min-width:${resolutions[index - 1]}px) and (max-width: ${resolutions[index]}px) {
            ${properties[index]}
          }`:
          `@media (min-width:${resolutions[index - 1]}px) and (max-width: ${resolutions[index]}px) {
            ${properties[index]}
          }
          @media (min-width: ${resolutions[index]}px) {
            ${properties[isManyResolutions ? index : index + 1]}
          }`
      ), '')
  } catch(err) {
    console.error(err)
  }
}
