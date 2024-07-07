function deepCopy(value) {
    if (Array.isArray(value)) {
      return value.map(item => deepCopy(item));
    } else if (value !== null && typeof value === 'object') {
      const result = {};
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          result[key] = deepCopy(value[key]);
        }
      }
      return result;
    } else {
      return value;
    }
}
