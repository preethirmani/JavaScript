function selectionSort(a) {
  for(let i = 0; i < a.length; i++) {
    let min_element = a[i];
    let min_index = i;
    for(let j = i+1; j < a.length; j++) {
      if(a[j] < min_element) {
        min_element = a[j];
        min_index = j;
      }
    } 
    if(min_index != i) {
      [a[i], a[min_index]] = [a[min_index], a[i]]
    }
  }
  return a;
}

console.log(selectionSort([5,4,6,3,7,1]))