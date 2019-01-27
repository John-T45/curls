export default function assignOrdered (objectA, objectB) {
  const output = {}
  const objectAKeys = Object.keys(objectA)

  for (let i = 0; i < objectAKeys.length; i++) {
    const key = objectAKeys[i]
    if (objectB[key] === void 0) {
      output[key] = objectA[key]
    }
  }

  const objectBKeys = Object.keys(objectB)

  for (let i = 0; i < objectBKeys.length; i++) {
    const key = objectBKeys[i]
    output[key] = objectB[key]
  }

  return output
}
