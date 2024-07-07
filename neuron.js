function neuron(data) {
    if (data.length === 0) {
      return {};
    }
  
    const result = {
      questions: {},
      orders: {}
    };
  
    data.forEach(entry => {
      const [prefix, rest] = entry.split(': ');
      const [subEntry, responsePart] = rest.split(' - Response: ');
      const type = prefix.toLowerCase().slice(0, -1);
      const key = subEntry.replace(/[\s?]/g, '_').toLowerCase();
  
      if (type === 'question') {
        const question = subEntry;
        if (!result.questions[key]) {
          result.questions[key] = { question, responses: [] };
        }
        result.questions[key].responses.push(responsePart);
      } else if (type === 'order') {
        const order = subEntry;
        if (!result.orders[key]) {
          result.orders[key] = { order, responses: [] };
        }
        result.orders[key].responses.push(responsePart);
      }
    });
  
    if (Object.keys(result.questions).length === 0) {
      delete result.questions;
    }
    if (Object.keys(result.orders).length === 0) {
      delete result.orders;
    }
  
    return result;
}
