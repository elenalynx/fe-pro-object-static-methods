/**
 * Принимает объект, возвращает массив названий свойств. Нельзя пользоваться
 * встроенными статическими методами объекта, используйте цикл
 * @param {Object} object
 * @returns {string[]}
 */
export const keys = (object) => {
  let keysArr = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) keysArr = [...keysArr, key];
  }
  return keysArr;
};

/**
 * Принимает объект, возвращает массив значений объекта. Также без использования
 * встроенных методов, юзаем цикл
 * @param {Object} object
 * @returns {any[]}
 */
export const values = (object) => {
  let valuesArr = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) valuesArr = [...valuesArr, object[key]];
  }

  return valuesArr;
};

/**
 * Принимаем объект, возвращаем энтри. Все также без методов, используем цикл
 * @param {Object} object
 * @returns {[string, any][]}
 */
export const entries = (object) => {
  let entriesArr = [];
  for (const key in object) {
    if (object.hasOwnProperty(key)) entriesArr = [...entriesArr, [key, object[key]]];
  }
  return entriesArr;
};

/**
 * Тут наоборот, мы должны сделать из энтри объект обратно) Можете погуглить
 * оригинальный метод)
 * @param {[string, any][]} entries
 * @returns {Object}
 */
export const fromEntries = (entries) => {
  let object = {};

  for (const [key, value] of entries) {
    object = { ...object, [key]: value };
  }

  return object;
};
