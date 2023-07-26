//1.Create a function that takes a name and returns a greeting in the form of a string.Don't use a normal function,use an arrow function.
const createLongGreeting = (name, age) => {
    return `Hello, my name is ${name} and I'm ${age} years old`;
  };
  console.log(createLongGreeting("sricharan", 23));
  
  //2.Create a function that takes an array of 10 numbers(between 0 and 9)and returns a string of those numbers formatted as a phone number.
  const createPhoneNumber = function (arr) {
    const number = `(${arr.slice(0, 3).join("")}) ${arr
      .slice(3, 6)
      .join("")}-${arr.slice(7).join("")}`;
    console.log(number);
  };
  
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
  
  //3.Create a functon that returns an array of strings sorted by length in ascending order.
  function sort_by_string_length(arra) {
    for (var i = 0; i < arra.length; i++) {
      for (var j = i + 1; j < arra.length; j++) {
        if (arra[i].length > arra[j].length) {
          var m = arra[i];
          arra[i] = arra[j];
          arra[j] = m;
        }
      }
    }
    return arra;
  }
  var arra = ["a", "ccc", "dddd", "bb"];
  console.log("Original array: " + arra + "\n");
  console.log(sort_by_string_length(["a", "ccc", "dddd", "bb"]));
  
  //4.Create a function that accepts an array of strings.Return the longest string(can not use predefined functions).
  function longest_str_in_array(arra) {
    var max_str = arra[0].length;
    var ans = arra[0];
    for (var i = 1; i < arra.length; i++) {
      var maxi = arra[i].length;
      if (maxi > max_str) {
        ans = arra[i];
        max_str = maxi;
      }
    }
    return ans;
  }
  console.log(longest_str_in_array(["nik", "mikhil", "cow", "Elephant"]));
  
  //5.Most commonly used two characters in string(can not use predefined functions).
  let str = "Hii iam ram";
  let strObj = {};
  let maxKey = "";
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    let key = str[i];
    if (!strObj[key]) {
      strObj[key] = 0;
    }
    strObj[key]++;
  }
  console.log(strObj);
  
  //6.Given a String(Note:String will Contain all letters from A-Z except 1letter ,that letter you need to find out)
  function fearNotLetter(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let startingPoint = alphabet.indexOf(str[0]);
    let leaterNotMatch = alphabet.slice(startingPoint);
    for (let i = 0; i < str.length; i += 1) {
      if (str[i] != leaterNotMatch[i]) {
        return leaterNotMatch[i];
      }
    }
  }
  
  let result = fearNotLetter("abcdefghijklmnopqrstuvwyz");
  console.log("The letter missing is :", result);
  
  //7.Given a string s, return the longest Palindromic substring.
  function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
  }
  
  function longest_palindrome(str1) {
    var max_length = 0,
      maxp = "";
  
    for (var i = 0; i < str1.length; i++) {
      var subs = str1.substr(i, str1.length);
  
      for (var j = subs.length; j >= 0; j--) {
        var sub_subs_str = subs.substr(0, j);
        if (sub_subs_str.length <= 1) continue;
  
        if (is_Palindrome(sub_subs_str)) {
          if (sub_subs_str.length > max_length) {
            max_length = sub_subs_str.length;
            maxp = sub_subs_str;
          }
        }
      }
    }
  
    return maxp;
  }
  console.log(longest_palindrome("babad"));
  