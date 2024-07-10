function debounce(func, wait) {
    let timeout;
    
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
function opDebounce(func, wait, options = {}) {
    let timeout;
    let lastArgs;
    let lastThis;
    let result;
    const leading = options.leading || false;
  
    return function(...args) {
      const context = this;
      const callNow = leading && !timeout;
  
      clearTimeout(timeout);
      
      timeout = setTimeout(() => {
        timeout = null;
        if (!leading) {
          result = func.apply(context, args);
        }
      }, wait);
  
      if (callNow) {
        result = func.apply(context, args);
      }
  
      return result;
    };
}
  