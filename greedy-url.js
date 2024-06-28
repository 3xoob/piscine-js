const urlExp = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}(\.[a-zA-Z0-9()]{1,6})?(?:[-a-zA-Z0-9()\[\],@:%_\+.~#?&\/=]*)/g;

function getURL(dataSet) {
  return dataSet.match(urlExp) || [];
}
function greedyQuery(dataSet) {
  return getURL(dataSet).filter(url => 
    /\?([^=&]+=[^=&]*&){2,}[^=&]+=[^=&]*/.test(url)
  );
}
function notSoGreedy(dataSet) {
  return getURL(dataSet).filter(url => /\?([^=&]+=[^=&]*&){1,2}[^=&]+=[^=&]*$/.test(url));
}
