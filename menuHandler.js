const todosCon = document.getElementById('todosContainer');
const goal = document.getElementById('goalContainer');

function openTodos() {
    todosCon.classList.add('show');
    goal.classList.remove('show');
} function openGoal() {
    todosCon.classList.remove('show');
    goal.classList.add('show');
}