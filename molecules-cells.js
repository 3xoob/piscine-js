function DNAtoRNA(DNA) {
    let RNA = '';
    for (let nucleotide of DNA) {
      switch (nucleotide) {
        case 'G':
          RNA += 'C';
          break;
        case 'C':
          RNA += 'G';
          break;
        case 'T':
          RNA += 'A';
          break;
        case 'A':
          RNA += 'U';
          break;
      }
    }
    return RNA;
}
  
function RNAtoDNA(RNA) {
    let DNA = '';
    for (let nucleotide of RNA) {
      switch (nucleotide) {
        case 'C':
          DNA += 'G';
          break;
        case 'G':
          DNA += 'C';
          break;
        case 'A':
          DNA += 'T';
          break;
        case 'U':
          DNA += 'A';
          break;
      }
    }
    return DNA;
}
