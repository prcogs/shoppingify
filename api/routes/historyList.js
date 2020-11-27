const express = require('express');
const router = express.Router()

const histroryListController = require('../controller/historyList')


router.get('/:pseudo', histroryListController.getList)
router.post('/add-list', histroryListController.addList)
router.put('/change-list', histroryListController.changeList)
router.delete('/delete-list', histroryListController.deleteList)

module.exports = router;