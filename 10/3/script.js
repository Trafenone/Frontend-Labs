class Student {
  constructor(firstName, lastName, marks) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.marks = marks;
  }
}

class ListOfStudents {
  constructor(students) {
    this.students = students;
  }

  getTableList() {
    const table = document.createElement("table");
    const firstRow = document.createElement("tr");
    firstRow.setAttribute("id", "header");
    firstRow.innerHTML =
      "<th>LastName</th><th>FirstName</th><th>Math</th><th>History</th><th>JS</th>";
    table.appendChild(firstRow);
    this.students.forEach((element) => {
      const tr = document.createElement("tr");
      tr.setAttribute("id", "value");
      tr.innerHTML = `<td>${element.lastName}</td><td>${element.firstName}</td><td>${element.marks[0]}</td><td>${element.marks[1]}</td><td>${element.marks[2]}</td>`;
      table.appendChild(tr);
    });

    return table;
  }
}

class StylesTable extends ListOfStudents {
  constructor(students) {
    super(students);
  }

  getStyles() {
    return `
        table {
            border-collapse: collapse;
        }
        
        tr, td, th {
            border: 2px solid gray;
            color: green;
            padding: 5px
        }

        th {
            background-color: green;
            color: white;
        }`;
  }

  getTableList() {
    const table = super.getTableList();
    const style = document.createElement("style");
    style.textContent = this.getStyles();
    table.appendChild(style);

    return table;
  }

  calcAvg(marks) {
    return marks.reduce((acc, mark) => acc + parseInt(mark), 0) / marks.length;
  }

  getAvg() {
    const table = this.getTableList();
    const headRow = table.querySelector("#header");
    const th = document.createElement("th");
    th.textContent = "Avg";
    headRow.appendChild(th);
    const rows = table.querySelectorAll("#value");
    for (let row = 0; row < rows.length; row++) {
      const tr = rows[row];
      let avg = this.calcAvg(this.students[row].marks);
      let td = document.createElement('td');
      td.textContent = avg.toFixed(2);
      tr.appendChild(td);
    }

    return table;
  }

  getTotalAvg() {
    const totalAvg = this.students.reduce((acc, student) => acc.concat(student.marks), []);
    return this.calcAvg(totalAvg);
  }
}

const student1 = new Student("Петро", "Федорко", [3, 4, 5]);
const student2 = new Student("Сергій", "Остапенко", [4, 5, 5]);
const student3 = new Student("Олеся", "Колос", [4, 3, 3]);

const listOfStudents = new StylesTable([student1, student2, student3]);

document.body.appendChild(listOfStudents.getAvg());

let totalAvg = document.createElement('h2');
totalAvg.textContent = "Середній бал по групі = " + listOfStudents.getTotalAvg().toFixed(2);
document.body.appendChild(totalAvg);