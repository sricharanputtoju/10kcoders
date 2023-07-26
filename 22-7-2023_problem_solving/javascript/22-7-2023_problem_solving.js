//1.Increment
function add(i) {
    i = i + 1;
    return i;
  }
  i = add(10);
  console.log(i);
  
  //2.Takes age in years and return age in days.
  function convertAgeToDays(a) {
    a = a * 365;
    return a;
  }
  a = convertAgeToDays(20);
  console.log(a);
  
  //3.Takes voltage,current and returns power.
  function power(current, voltage) {
    power = current * voltage;
    return power;
  }
  result = power(10, 5);
  console.log(power);
  
  //4.Returns Budget.
  function data(a) {
    sum = 0;
    for (i = 0; i < a.length; i++) {
      sum += a[i].budget;
    }
    console.log(sum);
  }
  data([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 },
  ]);
  
  //5.Returns array of an objects.
  function average(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
      a = 0;
      let property_names = Object.keys(arr[i]);
      let property_values = Object.values(arr[i]);
      l = arr[i].notes;
      for (let j = 0; j < l.length; j++) {
        a += arr[i].notes[j];
      }
      average = a / l.length;
      arr1.push(
        `{${property_names[0]}:"${property_values[0]}", average: ${average}}`
      );
    }
    console.log(arr1);
  }
  average([{ name: "John", notes: [3, 5, 4] }]);
  
  //6.Takes array strings and return array strings.
  const numInStr = (arr) => {
    let i = [];
    let j = [];
    for (let a = 0; a < arr.length; a++) {
      for (let b = 0; b < arr[a].length; b++) {
        if (arr[a][b] == parseInt(arr[a][b])) {
          i.push(arr[a]);
          break;
        }
      }
    }
    return i;
  };
  
  console.log(numInStr(["1a", "a", "2b", "b"]));
  
  //7.Take list of hours and return salary.
  function func(arr) {
    const regularRate = 10;
    const overtimeRate = 15;
    const weekendRate = 2;
    const maxRegularHours = 8;
    const daysPerWeek = 7;
    let salary = 0;
    for (i = 0; i < daysPerWeek; i++) {
      if (i === 5 || i === 7) {
        if (arr[i] > maxRegularHours) {
          let wsal = maxRegularHours * regularRate * weekendRate;
          let osal = (arr[i] - maxRegularHours) * overtimeRate * weekendRate;
          salary += wsal + osal;
        } else {
          salary += arr[i] * regularRate * weekendRate;
        }
      } else {
        if (arr[i] <= maxRegularHours) {
          salary += arr[i] * regularRate;
        } else {
          let wsal = maxRegularHours * regularRate;
          let osal = (arr[i] - maxRegularHours) * overtimeRate;
          salary += wsal + osal;
        }
      }
    }
    console.log(salary);
  }
  func([0, 0, 0, 0, 0, 12, 0]);
  