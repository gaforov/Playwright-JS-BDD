let numbers = [100, 200, 5, 6, 7, 10, 350, 20, 60, 150]

// write a function to find the maximum and minimum number in the array and print the output

function findMinMax(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log("Minimum number:", min);
  console.log("Maximum number:", max);
}

findMinMax(numbers);