// //It will extract data from arrays and objects

// //array destructuring

// const employeedetails=["sricharan","puttoju","23","mahabubnagar"];

// console.log(employeedetails[0])

// const [Firstname,Lastname,...rest] = employeedetails;

// console.log(Firstname);
// console.log(Lastname);
// console.log(rest);

// const employeedetails1=["bharath","chary","25","mahabubnagar"];

// console.log(employeedetails1[1])

// const [Firstname1,Lastname1,...rest1] = employeedetails1;

// console.log(Firstname1);
// console.log(Lastname1);
// console.log(rest1);
// const employeedetails2=["praveen","kumar","26","hyderabad"];

// console.log(employeedetails2[2])

// const [Firstname2,Lastname2,...rest2] = employeedetails2;

// console.log(Firstname2);
// console.log(Lastname2);
// console.log(rest2);

// const employeedetails3=["srinu","kotha","23","kalwakurthy"];

// console.log(employeedetails3[3])

// const [Firstname3,Lastname3,...rest3] = employeedetails3;

// console.log(Firstname3);
// console.log(Lastname3);
// console.log(rest3);

// const employeedetails4=["shiva","prasad","24","wanaparty"];

// console.log(employeedetails4[0])

// const [Firstname4,Lastname4,...rest4] = employeedetails4;

// console.log(Firstname4);
// console.log(Lastname4);
// console.log(rest4);

// //object destucturing

// const institute ={
//     name:"sricharan",
//     place:"mahabubnagar",
//     description:"coaching institute"
// }

// console.log(institute.name);

// const institute1 ={
//     name:"bharath",
//     place:"hyderabad",
//     description:"10000coders"
// }

// console.log(institute1.place);

// const institute2 ={
//     name:"praveen",
//     place:"hyderabad",
//     description:"j spaiders"
// }

// console.log(institute2.description);

// const institute3 ={
//     name:"srinu",
//     place:"kalwakurthy",
//     description:"q spaiders"
// }

// console.log(institute3.name);

// const institute4 ={
//     name:"vamshi",
//     place:"nagarkurnool",
//     description:"coaching institute"
// }

// console.log(institute4.place);

//nested object destructuring

const institute ={
        name:"sricharan",
        place:{
            area:"one twon",
            city:"mahabubnagar"
        },
        description:"coaching institute"
    }

    console.log(institute.place.city)

    const {place:{city}} = institute;

    console.log(city)

    const institute1 ={
        name:"bharath",
        place:{
            area1:"one twon",
            city:"mahabubnagar"
        },
        description:"coaching institute"
    }

    console.log(institute1.place.area1)

    const {place:{area1}} = institute1;

    console.log(area1)

    const institute2 ={
        name:"praveen",
        place:{
            area2:"hi-tech city",
            city:"hyderabad"
        },
        description:"coaching institute"
    }

    console.log(institute2.place.area2)

    const {place:{area2}} = institute2;

    console.log(area2)

    const institute3 ={
        name:"srikanth",
        place:{
            area3:"acpt",
            city:"achampet"
        },
        description:"coaching institute"
    }

    console.log(institute3.name)

    const {name} = institute3;

    console.log(name)

    const institute4 ={
        name:"sandeep",
        place:{
            area4:"nrpt",
            city:"narayanpet"
        },
        description:"coaching institute"
    }

    console.log(institute4.description)

    const {description} = institute4;

    console.log(description)