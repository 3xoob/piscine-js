function groupPrice(str) {
    const priceRegex = /(([A-Z]{3})|\$)([0-9]+\.[0-9]+)/g;
    const matches = str.match(priceRegex) || [];
    const result = matches.map(price => {
        const [_, integer, decimal] = price.match(/([0-9]+)\.([0-9]+)/);
        return [price, integer, decimal];
    });
    return result;
}