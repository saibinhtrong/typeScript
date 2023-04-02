"use strict";
// export{ }
// exports.__esModule = true;
var projectList = [
    { id: 1, name: "abc", image: "http://" },
    { id: 2, name: "abc", image: "http://" },
    { id: 3, name: "abc", image: "http://" }
];
var listProject = function (projects) {
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = projects.map(function (item) {
            return "\n            <td>".concat(item.id, "</td> \n            <td>").concat(item.name, "</td>\n            <td>").concat(item.image, "</td>\n            ");
        }).join("");
    }
    else {
        console.log("Khong tim thay the");
    }
};
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
