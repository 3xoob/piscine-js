function DNAtoRNA(dna) {
    let rna = '';
    for (let nucleotide of dna) {
      switch (nucleotide) {
        case 'G':
          rna += 'C';
          break;
        case 'C':
          rna += 'G';
          break;
        case 'T':
          rna += 'A';
          break;
        case 'A':
          rna += 'U';
          break;
      }
    }
    return rna;
}
  
function RNAtoDNA(rna) {
    let dna = '';
    for (let nucleotide of rna) {
      switch (nucleotide) {
        case 'C':
          dna += 'G';
          break;
        case 'G':
          dna += 'C';
          break;
        case 'A':
          dna += 'T';
          break;
        case 'U':
          dna += 'A';
          break;
      }
    }
    return dna;
}
