// This file is for developmental purposes only. Please ignore it.
import { rephrase } from './shawn'

let printCount : number = 0

function print(s : string) {
  ++printCount
  const countStr = String(printCount).padStart(3)
  console.log(countStr, s)
}

for (let i = 0; i < 60; i++) {
  print(rephrase('Sally sells seashells by the seashore'))
}
