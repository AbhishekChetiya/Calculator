let ans = document.querySelector(".answer");
let add = document.querySelector(".calci");
let button1 = document.createElement("button");
let button2 = document.createElement("button");
let button3 = document.createElement("button");

const add1 = (str) => {
    let button1 = document.createElement("button");
    button1.classList.add("box");
    button1.innerHTML = str;
    add.append(button1);
}
add1("/");
add1("*");
add1("<");
add1("(");
add1(")");
let boxes = document.querySelectorAll(".box");
let fir = 0;
let sec = 0;
let show;
let opr = "";
let orgs = "";
let count = 0;
const getresult = (data) => {
    try {
        return eval(data);
    }
    catch {
        return "INVALID INPUT";
    }
}

const arr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "-", "|", "/", ".", "Backspace", "Enter", "+", "!", "%", "^", "&", "*", "(", ")", "|", ">", "<",">>"];
let set = new Set(arr);
document.addEventListener('keypress', function (event) {
    if (orgs == "INVALID INPUT") orgs = "";
    if (set.has(event.key)) {
        if (orgs == "INVALID INPUT") orgs = "";
        if (event.key == "Backspace") {
            orgs = orgs.slice(0, orgs.length - 1);
        }
        else if (event.key == "Enter") {
            orgs = getresult(orgs);
        }
        else {
            orgs += event.key;
        }
        ans.innerHTML = orgs;
    }
})
boxes.forEach((box) => {
    count++;
    box.addEventListener("click", () => {
        let get = box.innerHTML;
        if (orgs == "INVALID INPUT") orgs = "";
        if (get == "AC") {
            orgs = "";
        }
        else if (get == "DEL") {
            orgs = orgs.slice(0, orgs.length - 1);
        }
        else if (get == "ENTER") {
            orgs = getresult(orgs);
        }
        else if (get == "&lt;") {
            orgs += "<";
            //   orgs += get;
        }
        else if (get == "&gt;") {
            orgs += ">";
        }
        else if (get == "&gt;&gt;") {
            orgs += ">>";
        }
        else if (get == "&amp;") {
            orgs += "&";
        }
        else {
            orgs += get;
        }
        ans.innerText = orgs;
    })
})