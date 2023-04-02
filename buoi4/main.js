"use strict";
exports.__esModule = true;
var pro = [
    { id: 1,
        name: "Du an mau",
        image: "http://...",
        link: "http://...",
        member: 5235
    },
    { id: 2,
        name: "Du an mau",
        image: "http://...",
        link: "http://...",
        member: 5235
    },
    { id: 3,
        name: "Du an mau",
        image: "http://...",
        link: "http://...",
        member: 5235 }
];
var getData = function (props) {
    var app = document.querySelector("#app");
    if (app) {
        app.innerHTML = pro.map(function (item) {
            return "\n        <tbody>\n        <td>".concat(item.id, "</td> \n        <td>").concat(item.name, "</td>\n        <td>").concat(item.image, "</td>\n        <td>").concat(item.link, "</td>\n        <td>").concat(item.member, "</td>\n        </tbody>\n       \n        ");
        }).join("");
    }
};
getData(pro);
var projectList = [
    { id: 4, name: "fjsdg", image: "fggf", link: "fsdg", member: 454 }
];
var addProject = function (props) {
    return props;
};
console.log(addProject(projectList));
