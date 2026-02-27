const todosCon = document.getElementById('todosContainer');
const goal = document.getElementById('goalContainer');
const about = document.getElementById("aboutContainer");

function openTodos() {
    todosCon.classList.add('show');
    goal.classList.remove('show');
    about.classList.remove('show');

} function openGoal() {
    todosCon.classList.remove('show');
    goal.classList.add('show');
    about.classList.remove('show')
} function openAbout() {
    todosCon.classList.remove('show');
    goal.classList.remove('show');
    about.classList.add('show')
}
