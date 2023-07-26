//1.create a function that returns an array with numbers.Return a new(Single)array with the largest numbers of each.
function largestOfFour(arr) {
    var largest = [];
    for (var i = 0; i < arr.length; i++) {
      var gr = 0;
      for (var j = 0; j <= arr[i].length; j++) {
        if (arr[i][j] > gr) {
          gr = arr[i][j];
        }
      }
      largest.push(gr);
    }
    return largest;
  }
  var r = largestOfFour([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ]);
  console.log(r);
  
  //2.Create a function that takes an array of numbers and returns the second largest number.
  function findSecondLargestElem(array) {
    let first = -1,
      second = -1;
    for (let a = 0; a <= array.length - 1; a++) {
      if (array[a] > first) {
        second = first;
        first = array[a];
      } else if (array[a] > second && array[a] != first) {
        second = array[a];
      }
    }
    console.log(second);
  }
  let array = [10, 40, 30, 20, 50];
  findSecondLargestElem(array);
  
  //3.Create a function that takes an array of items,removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).
  let count = [1, 0, 1, 0];
  
  function removeDuplicates(count) {
    return count.filter((item, index) => count.indexOf(item) === index);
  }
  
  console.log(removeDuplicates(count));
  
  //4.Write a program to remove duplicate elements in an array and sort it in descending order(can not use predefined function).
  const arr1 = [5, 3, 5, 2, 1, 1, 7, 3, 5, 6];
  const uniqSort = (arr1 = []) => {
    const map = {};
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
      if (!map[arr1[i]]) {
        map[arr1[i]] = true;
        res.push(arr1[i]);
      }
    }
    return res.sort((a, b) => a - b);
  };
  console.log(uniqSort(arr1));
  
  //5.Write a program to remove brackets from an algebric expression(can not use predefined function).
  let input = "a+b-(9+c)=3";
  let output = " ";
  for (let a = 0; a < input.length; a++) {
    if (input[a] == ")" || input[a] == "(") {
      continue;
    } else {
      output += input[a];
    }
  }
  console.log(output);
  
  //6.Given an unsorted array of integers nums,return the length of the longest consecutive elements sequence.
  function longestSeq(arr) {
    arr.sort(function (a, b) {
      return a - b;
    });
    count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] + 1 == arr[i + 1]) {
        count++;
      } else if (arr[i] == arr[i + 1]) {
        count = count;
      } else {
        break;
      }
    }
    console.log(count);
  }
  longestSeq([100, 4, 200, 1, 3, 2]);
  
  //7.Take an array of strings and create a dropdown using array values  the values  of dropdown should be taken dynamically and if we select a value in dropdown and the length of dropdown value is even it should show 1 in console or else if it is odd it should 0.
  
  var optionsList = [
    {
      label: "sricharan",
      value: "option-1",
    },
  
    {
      label: "cherry",
      value: "option-2",
    },
    {
      label: "charan",
      value: "option-3",
    },
  ];
  
  if (optionsList.length == 0) {
    console.log("No data");
  } else {
    var selectTag = document.createElement("SELECT");
    document.body.appendChild(selectTag);
  
    for (var i = 0; i < optionsList.length; i++) {
      var option = optionsList[i];
      selectTag.options.add(new Option(option.label, option.value));
    }
  }
  