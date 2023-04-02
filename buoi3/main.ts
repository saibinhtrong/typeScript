// export{ }

// interface Products{
//     id: number,
//     name:string,
//     image:string,
//     link:string,
//     member: number,
// }
// const pro:Products[] =[
//     { id: 1,
//         name: "Du an mau",
//         image: "http://...",
//         link: "http://...",
//         member: 5235
//     },
//     {id: 2,
//         name: "Du an mau",
//         image: "http://...",
//         link: "http://...",
//         member: 5235
//     },
//     {id: 3,
//         name: "Du an mau",
//         image: "http://...",
//         link: "http://...",
//         member: 5235}

// ]
// const getData =(props:Products[]) =>{
//   const app = document.querySelector("#app");
//   if(app){
//     app.innerHTML = pro.map((item) =>{
//         return`
//         <tbody>
//         <td>${item.id}</td> 
//         <td>${item.name}</td>
//         <td>${item.image}</td>
//         <td>${item.link}</td>
//         <td>${item.member}</td>
//         </tbody>
       
//         `
//     }).join("")
//   }
// }
// getData(pro)

// const projectList:Products[] =[
//     {id:4,name:"fjsdg",image:"fggf",link:"fsdg",member:454}
// ]

// const addProject =(props:Products[]):Products[] =>{
//     return props;
// }
// console.log(addProject(projectList))
                              

export { }
interface IProject {
    id: number,
    name: string,
    image: string
}
const projectList: IProject[] = [
    { id: 1, name: "abc", image: "http://" },
    { id: 2, name: "abc", image: "http://" },
    { id: 3, name: "abc", image: "http://" }
]

const listProject = (projects: IProject[]): void => {
    const app = document.querySelector("#app")
    if (app) {
        app.innerHTML = projects.map((item) => {
            return `
            <td>${item.id}</td> 
            <td>${item.name}</td>
            <td>${item.image}</td>
            `
        }).join("")
    } else {
        console.log("Khong tim thay the");

    }
}
// listProject(projectList)

// Them moi
// const addProject = (projects: IProject[], project: IProject): IProject[] => {
//     projects.push(project)
//     return projects
// }
// const project: IProject = {
//     id: projectList.length + 1,
//     name: "new project",
//     image: "http://..."
// }
// addProject(projectList, project)


// Xoa
// const deleteProject = (projects: IProject[], id: number): IProject[] => {
//     const newProjects = projects.filter((item) => item.id != id)
//     return newProjects
// }
// deleteProject(2)