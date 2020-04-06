const pool = require('./');

let dbTask = [];

dbTask.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM TODOS`, (err, results) => {
      if(err)
        return reject(err);
      return resolve(results);
    })
  });
};

dbTask.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM TODOS WHERE ID=?`,[id], (err, results) => {
      if(err)
        return reject(err);
      return resolve(results);
    })
  });
};

dbTask.insert = (todo) => {
  return new Promise((resolve, reject) => {
    pool.query(`INSERT INTO TODOS(TASK,DESCRIPTION) VALUES(?,?)`,[todo.task,todo.description], (err, results) => {
      if(err)
        return reject(err);
      return resolve(results);
    })
  });
};

dbTask.update = (todo) => {
  return new Promise((resolve, reject) => {
    pool.query(`UPDATE TODOS SET TASK=?, DESCRIPTION=?, STATUS=? WHERE ID=?`,[todo.task,todo.description, todo.status, todo.id], (err, results) => {
      if(err)
        return reject(err);
      return resolve(results);
    })
  });
};

module.exports = dbTask;
