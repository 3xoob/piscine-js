function flat(array, depth) {
    if (!Array.isArray(array)) {
      return array;
    }
    
    const result = [];
    const stack = array.map(item => [item, depth]);
  
    while (stack.length > 0) {
      const [current, currentDepth] = stack.pop();
  
      if (Array.isArray(current) && currentDepth > 0) {
        for (let i = current.length - 1; i >= 0; i--) {
          stack.push([current[i], currentDepth - 1]);
        }
      } else {
        result.push(current);
      }
    }
  
    return result.reverse();
  }