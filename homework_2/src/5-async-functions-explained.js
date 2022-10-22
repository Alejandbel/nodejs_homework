// TASK: Попробуйте изменять переменные и понаблюдать, что получится.

const secure = false;
const sendSuccessfully = true;

// При значение этих переменных = true, промис выполнится успешно
// Если хотя бы одно из значений = false, промис завалится на одной из стадий выполнения

const createConnection = () => {
  console.log('Opening connection...');

  return new Promise((resolve) => {
    // выполняем асинхронный код внутри промиса и вызываем resolve() или reject()
    setTimeout(() => {
      const connection = {
        port: 80,
        secure,
        send: (data) => {
          console.log(data);
          return sendSuccessfully;
        },
        serializeData: (data) => JSON.stringify(data),
      };

      resolve(connection);
    }, 2000);
  });
};

function prepareData(data) {
  console.log('Preparing data...');

  return new Promise((resolve) => {
    // выполняем асинхронный код внутри промиса и вызываем resolve() или reject()
    data.prepared = true;
    setTimeout(() => resolve(data), 2000);
  });
}

function sendData(connection, data) {
  console.log('Sending data...');

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!connection.secure) {
        return reject(new Error("Can't send data with insecure connection"));
      }
      if (!connection.send(data)) {
        return reject(new Error('Error during sending'));
      }
      resolve(data);
    }, 2000);
  });
}

async function main() {
  try {
    const connection = await createConnection();
    const data = {
      status: 200,
      message: 'Hello, mister!',
      prepared: false,
    };
    const preparedData = await prepareData(data);
    const serializedData = connection.serializeData(preparedData);
    await sendData(connection, serializedData);
    console.log('Sent');
  } catch (error) {
    console.error(error);
  }
}

main();
