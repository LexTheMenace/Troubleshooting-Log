const express = require('express');
const router = express.Router(); 
const { getLogs, addLog, removeLog } = require('../../controllers/logController')

router
    .route('/')
    .get(getLogs)
    .post(addLog)

router
    .route('/:id')
    .delete(removeLog)   
module.exports = router