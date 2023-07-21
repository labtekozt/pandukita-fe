// flattenList with recursion
function flattenList(list, flattenlist = null) {
  if (flattenlist === null) {
    flattenlist = [];
  }

  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      flattenList(list[i], flattenlist);
    } else {
      flattenlist.push(list[i]);
    }
  }
  return flattenlist;
}



export default flattenList;
