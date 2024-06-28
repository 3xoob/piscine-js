function sameAmount(str, reg1, reg2) {
    const regex1 = new RegExp(reg1,'g')
    const regex2 = new RegExp(reg2,'g')
    const matches1 = str.match(regex1) || [];
    const matches2 = str.match(regex2) || [];
    return matches1.length === matches2.length;
}
