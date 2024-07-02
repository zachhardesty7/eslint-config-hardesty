// /* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/naming-convention, @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types, @typescript-eslint/no-magic-numbers, no-restricted-syntax, @typescript-eslint/no-confusing-void-expression */

// #region hide - testing helpers
type Expect<
  TInput extends TCheck,
  TExpected extends TCheck,
  TCheck = IsAny<TInput> extends IsAny<TExpected>
    ? TInput extends TExpected
      ? TInput
      : TExpected
    : 'exactly `any` type',
> = TInput

const arrTest = [1, 2, 3]
console.log(`🚀 ~ arrTest[arrTest.length - 1]:`, arrTest[arrTest.length - 1])

/**
 * cannot widen a type, only narrow
 *
 * @param val
 */
declare function assert<T>(val: unknown): asserts val is T
// #endregion

// #region hide - readability / debugging
/** @see https://effectivetypescript.com/2022/02/25/gentips-4-display/#Resolving-a-type */
type Resolve<T> = T extends Function ? T : { [K in keyof T]: T[K] }

/** @see https://stackoverflow.com/a/69976234/5299167 */
type NOOP<T> = T extends (...args: any[]) => any
  ? T
  : T extends abstract new (...args: any[]) => any
    ? T
    : { [K in keyof T]: T[K] }

/**
 * expands object and function types one level deep
 *
 * @see https://stackoverflow.com/a/69288824/5299167
 * @see https://www.typescriptlang.org/play?ssl=1&ssc=6&pln=1&pc=12#code/C4TwDgpgBAKgrmAMhAdgHgHJQgD2KgEwGcoU4BbAIwgCcAaWKAXigEMUQGBBbPQkmAG0AusygiAfGJ658KYlADeUADaoA5sAAWALihYAvlAD8UHnvhJUmBjAaCAdE663hEgNwBYAFA-QkKABRHDB2AgAlCABjOBoiAEsANwgVEDQ7KAARXjkFMipaMQAWbhz+Ng4RMUtkdEyJKSYfKEZZcoB7SgAraOATMzL5EkF2TignB3iUADNC8NFjZta+Iagp2ZooAHl+5UEAaTWUKABrCBB26e3hPWDQ+UiYuKSUtK2D4QZMhnCpIz0UBBkjQlhYoBYvL5vFN8DRpqwotBEFMTkololWCo9ERgDQpupIS1AXhjHpkSgTpCDD4-OBoHcwhACOSTgAGMQMh7RWIJZKpNAshisjw+AD0ACooP56SFGcyUeyWCyoOLRTTvNKgrL5EyWQBGDnaiLc558tKCqB6kXeCVSula+4EXUog0sRRLFoYrFQHF4lAEj2kWSkqDKgA+UDgOumUyZVJVaqhms5TvlFIATIbHY8eS9+Rb09bbcmjc6M2J3d4Wp7MdjcfjCdXicAQ5Xq+2oF6636A1WO0Tg2SUVAI1GnTHAQRGy0jKPo7Gpz4jKr1SXHWWTgBmLNhHOm14ClEMTdFyVruUs7duwNdn31-3ToMkvRt-ud2t3nuP9vN1uBt-vt6voNv+b6-kOFIjpG86Tt+1aztB44Lo+CFjhAE5xkuCZAA
 */
type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
    ? { [K in keyof O]: O[K] }
    : never

/**
 * expands object and function types recursively
 *
 * @see https://stackoverflow.com/a/69288824/5299167
 */
type ExpandRecursively<T> = T extends (...args: infer A) => infer R
  ? (...args: ExpandRecursively<A>) => ExpandRecursively<R>
  : T extends object
    ? T extends infer O
      ? { [K in keyof O]: ExpandRecursively<O[K]> }
      : never
    : T

type ExpandDeep<T> = ExpandRecursively<T>
type DeepExpand<T> = ExpandRecursively<T>

type PrettifyZH<T> = T extends string | number | boolean
  ? T
  : T extends (...args: infer A) => infer R
    ? (...args: { [K in keyof A]: PrettifyZH<A[K]> } & unknown) => PrettifyZH<R>
    : T extends Promise<infer U>
      ? Promise<PrettifyZH<U>>
      : T extends (infer U)[]
        ? PrettifyZH<U>[]
        : T extends object
          ? { [P in keyof T]: PrettifyZH<T[P]> } & unknown
          : T
// #endregion

// #region hide - webpack?
type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${'' extends P ? '' : '.'}${P}`
    : never
  : never

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[],
]
type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
    ? {
        [K in keyof T]-?: K extends string | number
          ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
          : never
      }[keyof T]
    : ''

type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
    ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
    : ''
// #endregion
