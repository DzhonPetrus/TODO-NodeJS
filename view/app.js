async function getTodos(){
  let response = await fetch('http://localhost:3000/api/task');
  let todos = await response.json();
  todos.forEach((todo) => {
    console.log(`${todo.ID} | ${todo.TASK} | ${todo.DESCRIPTION} | ${todo.STATUS} \n`);
  });
};


getTodos();
