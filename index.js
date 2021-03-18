function identity(x) {
  return x;
}

const add = (x, y) => x + y;

const mul = (x, y) => x * y;

identifyf = x => x => x;

addf = x => y => x + y;

applyf = func => x => y => func(x, y);

curry = (f, x) => y => f(x, y);
add3 = curry(add, 3);

const incA = curry(add, 1);
const incB = addf(1);
const incC = applyf(add)(1);

const twice = f => x => f(x, x);
const double = twice(add);
const square = twice(mul);

const composeu = (f1, f2) => x => f2(f1(x));

const composeb = (f1, f2) => (x, y, z) => f2(f1(x, y), z);

const counter = x => ({
  inc: () => ++x,
  dec: () => --x
});

console.log(incA(8));
console.log(incB(incC(8)));
console.log(composeu(double, square)(5));
console.log(composeb(add, mul)(5, 4, 3));
const count = counter(20);
console.log(count.dec());
