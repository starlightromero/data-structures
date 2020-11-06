const word = 'academind'

const findFirstRep = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        return str[i]
      }
    }
  }
}

// Time Complexity: O(n^2)

console.log(findFirstRep(word))
