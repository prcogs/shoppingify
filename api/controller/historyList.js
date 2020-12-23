const HistoryList = require('../models/histroryList')



exports.getList = (req, res, next) => {
    HistoryList.findOne({ pseudo : req.params.pseudo})
      .then(historyList => res.status(200).json(historyList))
      .catch(error => res.status(400).json({ error }));
}

exports.addList = (req, res, next) => {
  HistoryList.findOne({ pseudo : req.body.pseudo })
    .then(list => {
      // vérifie si le nom de la liste n'est pas déjà présente 
      var data = list.lists
      var filterList = data.filter(item => item.name === req.body.lists.name)
      
      if( filterList.length > 0) {
        res.status(201).json({ message: "Nom de liste déjà utilisé",
                               succes: false})
      } else {
        const newList = [...data, req.body.lists]

        HistoryList.updateOne({ pseudo : req.body.pseudo }, {lists : newList })
          .then(() => res.status(201).json({ message: 'List saved !',
                                             succes: true}))
          .catch(error => res.status(400).json({ error,
                                                 message : 'Problem in the matrix',
                                                 succes: false }));
      }
    })
}

exports.changeList = (req, res, next) => {
  
    HistoryList.findOne({ pseudo : req.body.pseudo })
      .then(list => { 
        var data = list.lists
        
        // vérifie si on veux changer le nom de la liste ( si oldName est présent dans le body)
        if(req.body.lists.oldName !== undefined) {
          var filterList = data.filter(item => item.name !== req.body.lists.oldName)
          delete req.body.lists.oldName;
        }
  
        else {
          var filterList = data.filter(item => item.name !== req.body.lists.name)
        }
   
        const newList = [...filterList, req.body.lists]
        
        HistoryList.updateOne({ pseudo : req.body.pseudo }, {lists : newList })
          .then(() => res.status(201).json({ message: 'List modify !',
                                             succes: true}))
      })
      .catch(error => res.status(400).json({ error,
                                             message : 'Problem in the matrix',
                                             succes: false }));
}

exports.deleteList = (req, res, next) => {
  HistoryList.findOne({ pseudo : req.body.pseudo })
    .then(list => {
      const data = list.lists
      const filterList = data.filter(item => item.name !== req.body.name)
      const newList = [...filterList]

      HistoryList.updateOne({ pseudo : req.body.pseudo }, {lists : newList })
          .then(() => res.status(201).json({ message: 'List delete !',
                                             succes: true}))
    })
    .catch(error => res.status(400).json({ error,
                                           message : 'Problem in the matrix',
                                           succes: false }));
}