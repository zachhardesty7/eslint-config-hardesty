const arr = ['following is very long line to test max-len rule'];
console.log(arr.map((x) => x).map((x) => x).map((x) => x).map((x) => x).map((x) => x).map((x) => x).map((x) => x).map((x) => x).map((x) => x))

const arrTest = [1, 2, 3]
console.log(`🚀 ~ arrTest[arrTest.length - 1]:`, arrTest[arrTest.length - 1])

export function test01(a) {
  console.log(a)
}
/**
 * @param {string} a
 */
export function test02(a) {
  console.log(a)
  return a
}
export function test03() {
}
