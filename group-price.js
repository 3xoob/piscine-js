function groupPrice(str) {
    const prices = str.match(/(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g) || [];
    return prices.map(price => {
        const [whole, integer, decimal] = price.match(/([0-9]+)\.([0-9]+)/).slice(0, 3);
        return [whole, integer, decimal];
    });
}
