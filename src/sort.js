
export function orderByProps(obj, order) {
    const result = [];
  
    for (const key of order) {
      if (key in obj) {
        result.push({ key, value: obj[key] });
      }
    }
  
    const sortedKeys = Object.keys(obj)
      .filter(key => !order.includes(key))
      .sort();
  
    for (const key of sortedKeys) {
      result.push({ key, value: obj[key] });
    }
  
    return result;
  }
  




