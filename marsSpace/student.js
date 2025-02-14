const student = JSON.parse(localStorage.getItem("user"));
const infoStudentBox = document.querySelector(".student__wrapper")

if(student) {
    infoStudentBox.innerHTML =
    `

    <h2>${student.name}</h2>
    <p>ID: ${student.id}</p>
    <p>Группа: ${student.group}</p>
    <p>Количество монет: ${student.coin}</p>
    <p>Текущий учитель: ${student.teacher}</p>
    <p>Hp: ${student.hp}</p>

    `
}

