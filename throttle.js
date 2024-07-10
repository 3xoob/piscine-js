function throttle(func, wait) {
    let lastTime = 0;
    
    return function(...args) {
      const now = Date.now();
      
      if (now - lastTime >= wait) {
        lastTime = now;
        func.apply(this, args);
      }
    };
}

function opThrottle(func, wait, options = {}) {
    let timeout, lastTime = 0;
    const leading = options.leading !== false;
    const trailing = options.trailing !== false;
  
    return function(...args) {
      const now = Date.now();
      const context = this;
      const remaining = wait - (now - lastTime);
  
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        lastTime = now;
        func.apply(context, args);
      } else if (trailing && !timeout) {
        timeout = setTimeout(() => {
          lastTime = leading === false ? 0 : Date.now();
          timeout = null;
          func.apply(context, args);
        }, remaining);
      }
    };
}
  