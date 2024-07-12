// What is Array, What is Index? Write a  Array, Practical use case 

let city=['Dhaka','Khulna','Barisal','Rajshahi']
console.log(city[3]);

let Download=['Android','IOS','Windows','MAC','Linux','Chrome OS']
console.log(Download)



//What is Object,Properties-Value, Write a object,Practical use case 

let OneCategory={
    id:1,
    categoryName:"Laptop",
    createdAt:"2023-09-20",
    updatedAt:"2023-09-20",
    categoryImg:"https://photo.teamrabbil.com/images/2023"
}

console.log(OneCategory['id'])




//What is JSON Array,Properties-Value, Write a JSON ,Practical use case 


let AllCategoryList=[

    {
        id:1,
        categoryName:"Laptop 1",
        createdAt:"2023-09-20",
        updatedAt:"2023-09-20",
        categoryImg:"https://photo.teamrabbil.com/images/2023"
    },
    {
        id:2,
        categoryName:"Laptop 2",
        createdAt:"2023-09-20",
        updatedAt:"2023-09-20",
        categoryImg:"https://photo.teamrabbil.com/images/2023"
    },
    {
        id:3,
        categoryName:"Laptop 3",
        createdAt:"2023-09-20",
        updatedAt:"2023-09-20",
        categoryImg:"https://photo.teamrabbil.com/images/2023"
    }
]

console.log(AllCategoryList[0]['categoryName']);