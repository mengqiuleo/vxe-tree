//从给定对象中排除指定的属性，返回一个新对象。
function omit<T extends Record<string, unknown>, K extends keyof T>(obj: T, fields: K[]): Omit<T, K> {
  const shallowCopy = Object.assign({}, obj);
  for (let i = 0; i < fields.length; i += 1) {
    const key = fields[i];
    delete shallowCopy[key];
  }
  return shallowCopy;
}
export { omit };
export default omit;
