const URL_REGEX = /https?:\/\/[^\s]+/g;
const GREEDY_QUERY_REGEX = /https?:\/\/[^\s?]+(\?([^=&]+=[^=&]*&){3,}[^=&]+=[^=&]*)/g;
const NOT_SO_GREEDY_REGEX = /https?:\/\/[^\s?]+(\?([^=&]+=[^=&]*&){1,2}[^=&]+=[^=&]*)/g;

function getURL(dataSet) {
  const urls = dataSet.match(URL_REGEX) || [];
  return urls;
}
function greedyQuery(dataSet) {
  const urls = dataSet.match(GREEDY_QUERY_REGEX) || [];
  return urls;
}
function notSoGreedy(dataSet) {
  const urls = dataSet.match(NOT_SO_GREEDY_REGEX) || [];
  return urls;
}