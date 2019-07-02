// findMinAndRemoveSorted
function findMinAndRemoveSorted(array){
  return array.shift()
}

// merge
function merge(array1, array2){
  let merged = []
  while (array1.length !== 0 && array2.length !== 0){

    array1[0] < array2[0] ? merged.push(findMinAndRemoveSorted(array1)) : merged.push(findMinAndRemoveSorted(array2))

  }

  // console.log(merged.concat(array1).concat(array2))
  return merged.concat(array1).concat(array2)
}

// mergeSort
function mergeSort(array){
  let mid = array.length / 2
  let firstHalf = array.slice(0, mid)
  let secondHalf = array.slice(mid)
  let sortedArray
  console.log(firstHalf, secondHalf)

  if (array.length < 2){
    return array
  } else {
    sortedArray = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sortedArray

}
