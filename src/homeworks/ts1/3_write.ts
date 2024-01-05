/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 */
type Category = {
    id: string;
    name: string;
    photo?: string;
}
 
 /** 
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 */

 type Product = {
    id: string;
    name: string;
    photo: string;
    desc?: string;
    createdAt: string;
    oldPrice?: number;
    price: number;
    category: Category;
 }

 /** Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit) */
type Operation = Cost | Profit;

 /*
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 */
 type Cost = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: ('Cost');
 }

 /** Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

 type Profit = {
    id: string;
    name: string;
    desc?: string;
    createdAt: string;
    amount: number;
    category: Category;
    type: ('Profit');
 }

// Данные из которых создаются категории
const categoryName = ['Электроника', 'Одежда и обувь', 'Бытовые аксессуары', 'Игрушки', 'Автотовары', 'Книги', 'Спорт и отдых'];
const productName = ['Книга', 'Мяч', 'Стол', 'Стул', 'Нож', 'Карандаши', 'Телефон', 'Наушники', 'Коньки', 'Сноуборд'];

export const getRandomNumber = (arrayLength: number): number => {
    return Math.floor(Math.random() * (arrayLength + 1));
}

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): Product => {
    const name = productName[getRandomNumber(productName.length)]
    const category: Category = {
        id: String(getRandomNumber(100)),
        name: categoryName[getRandomNumber(categoryName.length)],
        photo: getRandomNumber(5) % 2 === 0 ? `image${getRandomNumber(25)}.png` : null,
    }
    return {
        id: String(getRandomNumber(1000)),
        name: name,
        photo: `image${getRandomNumber(25)}.png`,
        desc: getRandomNumber(10) % 2 === 0 ? `Описание для товара ${name}_${getRandomNumber(5)}` : null,
        createdAt: createdAt,
        oldPrice: getRandomNumber(15) % 3 === 0 ? getRandomNumber(1000): null,
        price: getRandomNumber(500),
        category: category,
    }
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): Operation => {
    const name = productName[getRandomNumber(productName.length)]
    const category: Category = {
        id: String(getRandomNumber(42)),
        name: categoryName[getRandomNumber(categoryName.length)],
        photo: getRandomNumber(14) % 7 === 0 ? `image${getRandomNumber(21)}.png` : null,
    }
    return {
        id: String(getRandomNumber(1000)),
        name: name,
        desc: getRandomNumber(10) % 2 === 0 ? `Описание для траты ${name}_${getRandomNumber(5)}` : null,
        createdAt: createdAt,
        amount: getRandomNumber(500),
        category: category,
        type: getRandomNumber(10) % 2 === 0 ? 'Profit' : 'Cost',
    }
};

