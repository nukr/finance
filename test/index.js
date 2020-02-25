import test from 'ava';
import { roi, ci, ar } from '../src';

test('roi', t => {
  const result = roi(100, 120);
  t.is(result, 0.2);
});

test('ci', t => {
  const result = ci(100, 0.001, 100);
  t.is(Math.round(result), 111);
});

test('ar', t => {
  const result = ar(1, 10);
  t.is(result, 0.072);
});

test('ar', t => {
  const result = ar(0.5, 5);
  t.is(result, 0.084);
});

test('ar', t => {
  const result = ar(0.2, 2);
  t.is(result, 0.095);
});

test('roi', t => {
  const result = roi(222120, 225809);
  console.log(result);
  const a = ar(result, 4);
  console.log(a * 100);
  const ciresult = ci(222120, 0.01115, 4);
  console.log(ciresult);
  t.is(result, 0.2);
});

test('roi', t => {
  const result = roi(222120, 240614);
  console.log(result);
  const a = ar(result, 6);
  console.log(a * 100);
  const ciresult = ci(222120, 0.01115, 6);
  console.log(ciresult);
  t.is(result, 0.2);
});

test('roi', t => {
  const result = roi(222120, 268043);
  console.log(result);
  const a = ar(result, 10);
  console.log(a * 100);
  const ciresult = ci(222120, 0.01115, 10);
  console.log(ciresult);
  t.is(result, 0.2);
});

test('roi', t => {
  const result = roi(222120, 401952);
  console.log(result);
  const a = ar(result, 25);
  console.log(a * 100);
  const ciresult = ci(222120, 0.01115, 25);
  console.log(ciresult);
  t.is(result, 0.2);
});

// test('ar', (t) => {
//   const result = ar()
// })
