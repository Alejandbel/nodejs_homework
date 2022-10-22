const fail = false; // TASK: Попробуйте изменять переменную и понаблюдать, что получится.

// При fail = true у промиса статус rejected,
// при fail = false наш промис успешно резолвится и мы получаем нужные нам значения

const promise = new Promise((resolve, reject) => {
  // выполняем асинхронный код внутри промиса и вызываем resolve() или reject()
  if (!fail) {
    // для примера - на деле какая-то полезная операция, требующая времени
    setTimeout(() => {
      resolve({ data: 'Useful Information' });
    }, 1000);
  } else {
    setTimeout(() => {
      reject(new Error('Something went wrong!'));
    }, 3000);
  }
});

promise
  .then((data) => {
    console.log('We got to "then"!');
    console.dir(data);
    return data;
  })
  .then((result) => console.log(result))
  .catch((err) => {
    console.log('We got to "catch"!');
    console.error(err.message);
  });

console.dir(promise);

setTimeout(() => {
  console.log(promise);
}, 3100);
