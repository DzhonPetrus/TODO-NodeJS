const express = require('express');
const db = require('../db/Task');
const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    let results = await db.all();
    if(results[0] === undefined)
      res.status(400).json({msg:`No task found.`});
    else
      res.json(results);
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    let results = await db.one(req.params.id);
    if(results[0] === undefined)
      res.status(400).json({msg:`No task with id ${req.params.id} found.`});
    else
      res.json(results);
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post('/', async (req, res, next) => {
  try {
    newTODO = {
      task: req.body.task,
      description: req.body.description
    };
    let results = await db.insert(newTODO);
    res.json({msg:`New task '${req.body.task}' created!.`});
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.patch('/', async (req, res, next) => {
    updatedTODO = {
      id: req.body.id,
      task: req.body.task,
      description: req.body.description,
      status: req.body.status
    };
  try {
    let results = await db.update(updatedTODO);
    res.json({msg:`Task '${req.body.task}' updated!.`});
  } catch(e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;

