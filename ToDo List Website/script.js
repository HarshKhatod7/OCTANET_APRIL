document.addEventListener('DOMContentLoaded', function() {
  const taskForm = document.getElementById('taskForm');
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');

  taskForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission

      const taskText = taskInput.value.trim();
      if (taskText !== '') {
          addTask(taskText);
          taskInput.value = ''; // Clear input field
      }
  });

  function addTask(taskText) {
      const taskItem = document.createElement('li');
      taskItem.innerHTML = `
          <span>${taskText}</span>
          <div>
              <button class="completeBtn">Complete</button>
              <button class="deleteBtn">Delete</button>
          </div>
      `;

      const completeBtn = taskItem.querySelector('.completeBtn');
      const deleteBtn = taskItem.querySelector('.deleteBtn');

      completeBtn.addEventListener('click', function() {
          taskItem.classList.toggle('completed');
      });

      deleteBtn.addEventListener('click', function() {
          taskItem.remove();
      });

      taskList.appendChild(taskItem);
  }
});
