const MOUNTAINS = [
  {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
  {name: "Everest", height: 8848, place: "Nepal"},
  {name: "Mount Fuji", height: 3776, place: "Japan"},
  {name: "Vaalserberg", height: 323, place: "Netherlands"},
  {name: "Denali", height: 6168, place: "United States"},
  {name: "Popocatepetl", height: 5465, place: "Mexico"},
  {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let keys = Object.keys(MOUNTAINS[0]);

let tr = document.createElement("tr");

for(let key of keys) {
  let th = document.createElement("th");
  th.appendChild(document.createTextNode(key));
  tr.appendChild(th);
}

let rows = MOUNTAINS.map(m => {
  let tr = document.createElement("tr");
  for(let key of keys) {
    let td = document.createElement("td");
    td.appendChild(document.createTextNode(m[key]));
    tr.appendChild(td);
  }
  return tr;
});

let table = document.createElement("table");

for(let row of [tr, ...rows]) {
  table.appendChild(row);
}

//let div = document.getElementById("mountains");
//div.appendChild(table);

let tds = document.getElementsByTagName("td");

for (let td of tds) {
  for(let child of td.childNodes) {
    if(child.nodeType == Node.TEXT_NODE && Number(child.nodeValue)) {
      td.style.textAlign = "right";
    }
  }
}

