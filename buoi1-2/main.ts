export{ }

// let user:string = "trtejt";
// let age:number = 123;
// let arr:string[] = ["dfaf","dfds"]

// const arr2:Array<number | string> = [5,"ghriuhf",7]
// console.log(arr2)
// console.log(arr);
// console.log(user);
// console.log(age);

// const teacher :{id: number, username:string, email:string } = {
//         id:1,
//         username:"dat dep trai",
//         email:"datlt@gmail.com"
// }
// console.log(teacher);

//                                             // demo interface  
// //Khai báo một giao diện
// interface Product {
//         name: string,
//         price: number,
//         os: string
//     }
//     //Hàm nhận tham số có giao diện Product
//     function showProduct(product: Product) {
//         console.log(product.name + ':' + product.price + ':' +product.os);
//     }
    
//     //Tạo ba đối tượng
//     var p1 = {name: 'Iphone', price: 500, os: 'IOS10'};
//     var p2 = {name: 'Iphone', price: 5000, os: 'IOS10' };
//     var p3 = {name: 'Iphone',  price: 5000, os: 'IOS10'};
    
//     showProduct(p1);   //Ok vì p1 có giao diện Product
    
//     showProduct(p2);  
//     showProduct(p3);


//                                                 // thực hành ngày 1
// interface Diem{
//  lab:number,
//  quiz:number,
//  ass:number,
//  dThi:number,
// }

// function show(diem:Diem){
//         var tq = diem.lab + diem.quiz + diem.ass + diem.dThi;
//     if (tq >= 20) {
//         alert("bạn được : "+tq+"Điểm"+" bạn đã qua môn");
//     }
//     else {
//         alert("bạn được : "+tq+"Điểm"+" bạn đã trượt môn");
//     }
// }

// var t1 = {lab: 5, quiz: 5, ass:5 , dThi:4 };

// show(t1);
 


//                                             //thực hành buổi 2 b1
// const projects :{ id: number, name: string, image: string, link: string, status: boolean} ={
//     id:1,
//     name:"dat dep trai",
//     image:"hsafkj",
//     link:"ajffj",
//     status: true
// }
// function showProjects(project:{ id: number, name: string, image: string, link: string, status: boolean}):{ id: number, name: string, image: string, link: string, status: boolean} {
//      return project
// }


// console.log(showProjects(projects));




// thực hành buổi 2 b2
interface ProductList{
id:number,
name:string
}

// function showz(pro:ProductList):ProductList{
//   return pro
// }
// var z1:ProductList = {id:1,name: 'Iphone'};
// var z2:ProductList = {id:2,name: 'Iphone'};

// console.log(showz(z1))
// console.log(showz(z2))



/*array*/
function showx(arr: ProductList[]):ProductList[]{
    return arr
}
const product:ProductList[] = [
        { id: 1, name: "Du an 1" },
        { id: 2, name: "Du an 2" }
    ]

    console.log(showx(product))

    
interface SumFunction {
    (a: number, b: number): number
}
const sum: SumFunction = (a, b) => {
    return a + b;
}

console.log(sum(2,3))