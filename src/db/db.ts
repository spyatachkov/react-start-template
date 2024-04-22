import { createRandomOperation, Operation } from 'src/homeworks/ts1/3_write';

// Имитация API и асихронной загрузки элементов из БД
export async function fetchAPI(): Promise<Operation[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = [];
      for (let i = 0; i < 10; i++) {
        const date = new Date().toString();
        const ro = createRandomOperation(date);
        data.push(ro);
      }
      resolve(data);
    }, 1000);
  });
}
