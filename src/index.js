/**
 * principal 本金
 * interest 利息
 * roi 投資報酬率 (Return on investment)
 * ar 年化報酬率 (Annualized return)
 * ci 複利 (Compound interest)
 * FV 未來本利和
 */

/**
 * roi
 * @param {} principal
 * @param {} end
 * @returns {}
 */
export function roi (principal, end) {
  return (end - principal) / principal
}

// 適用於計算一份投資經過 n 年後所得到實際報酬率為多少
// ar(0.5, 5) // 8.4%
// ar(0.2, 2) // 9.5%
/**
 * ar
 * @param {} principal
 * @param {} end
 * @param {} years
 * @returns {} ar_percentage
 */

export function ar (roi, years) {
  // 本利和 (Accumulated amount)
  const aa = 1 + roi

  // 方根
  const root = 1 / years

  const ar = aa ** root

  // 取到小數第三位四捨五入
  const ar_percentage = Math.round((ar - 1) * 1000) / 1000

  return ar_percentage
}

// FV = PV(1 + i) ^ n
export function ci (principal, interest, years) {
  return principal * (1 + interest) ** years
}
