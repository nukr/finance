import test from 'ava'
import { roi, ci, ar } from '../src'

test('roi', (t) => {
  const result = roi(100, 120)
  t.is(result, 0.2)
})

test('ci', (t) => {
  const result = ci(100, 0.001, 100)
  t.is(Math.round(result), 111)
})

test('ar', (t) => {
  const result = ar(1, 10)
  t.is(result, 0.072)
})

test('ar', (t) => {
  const result = ar(0.5, 5)
  t.is(result, 0.084)
})

test('ar', (t) => {
  const result = ar(0.2, 2)
  t.is(result, 0.095)
})
