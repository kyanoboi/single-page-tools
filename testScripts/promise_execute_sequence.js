let synchronousResolve;

let p = new Promise((resolve, reject) => {
  synchronousResolve = function () {
    console.log("1: invoking  resolve()");
    resolve();
    console.log("2: resolve() returns");
  };
});

p.then(() => {
  console.log("4: then() handlers executes");
});

synchronousResolve();

console.log("3: synchronousResolve() returns");
