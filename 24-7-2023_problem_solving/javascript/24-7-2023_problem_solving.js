//1.Create a function that returns the string "something" joined with a space " " and the given argument a.
function test(str1, str2) {
    test = str1 + "  " + str2;
    return test;
  }
  test = test("Hi", "Hello");
  console.log(test);
  
  //2.Create a function that takes two arguments.Both arguments are integers,a and b, Return true if one of them is 10 or if their sum is 10.
  function func(a, b) {
    return a == 10 || b == 5 || a + b == 20;
  }
  console.log(func(10, 5));
  
  //3.Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.
  function StringCount(str1, str2) {
    return str1.length === str2.length;
  }
  let res = StringCount("Ammu", "Nani");
  console.log(res);
  
  //4.Create a function that moves all capital letters to the front of a word.
  const result = [..."hApPy"].sort((l) => (/[A-Z]/.test(l) ? -1 : 0)).join("");
  console.log(result);
  
  //5.Count each occurrence of number(can not use predefined function).
  const arr = [1, 6, 3, 1, 5, 9, 7, 2, 1, 9, 3, 7, 8, 9, 10];
  const counts = {};
  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  console.log(counts);
  console.log("The number 1 is present =", counts[1]);
  console.log("The number 2 is present =", counts[2]);
  console.log("The number 3 is present =", counts[3]);
  console.log("The number 5 is present =", counts[5]);
  console.log("The number 7 is present =", counts[7]);
  console.log("The number 9 is present =", counts[9]);
  console.log("The number 10 is present =", counts[10]);
  
  //6.Create a function which takes in an encoded string and returns an object.
  function parseCode(str) {
    let firstName = "";
    let lastName = "";
    let id = "123";
    let zero = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "0" && zero === 0) {
        firstName = str.slice(0, i);
        str = str.slice(i + 3);
        i = -1;
        zero++;
      } else if (str[i] === "0" && zero === 1) {
        lastName = str.slice(0, i);
        str = str.slice(i + 3);
        i = -1;
        zero++;
      } else if (str[i] === "0" && zero === 2) {
        id = str.slice(0, i);
        break;
      }
    }
    return {
      firstName: firstName,
      lastName: lastName,
      id: id,
    };
  }
  console.log(parseCode("John000Doe000123"));
  
  //7.Create a function that takes the current day an array of date objects and returns the "current streak".
  function currentStreak(str, totalArr) {
    dateArr = [];
    dateArr.push(new Date(str).getDate());
    for (let i = 0; i < totalArr.length; i++) {
      dateArr.push(new Date(totalArr[i].date).getDate());
    }
    dateArr.sort(function (a, b) {
      return a - b;
    });
    count = 0;
    for (let j = dateArr.length - 1; j >= 0; j--) {
      if (dateArr[j] - 1 == dateArr[j - 1] || dateArr[j] == dateArr[j - 1]) {
        count = count + 1;
      } else {
        break;
      }
    }
    console.log(count);
  }
  currentStreak("2022-09-23", [
    { date: "2022-09-18" },
    { date: "2022-09-19" },
    { date: "2022-09-21" },
    { date: "2022-09-22" },
    { date: "2022-09-23" },
  ]);
  