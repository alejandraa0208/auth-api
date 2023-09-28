const express = require('express');
const router = express.Router();
const bearerAuth = require('../auth/middleware/bearer');
const permissions = require('../auth/middleware/acl');

router.get('/resource', bearerAuth, (req, res) => {
  res.status(200).send('Authenticated access to resource');
});
  
router.post('/create', bearerAuth, permissions('create'), (req, res) => {
  res.status(200).send('Create resource');
});
  
router.put('/update', bearerAuth, permissions('update'), (req, res) => {
  res.status(200).send('Update resource');
});
  
router.delete('/delete', bearerAuth, permissions('delete'), (req, res) => {
  res.status(200).send('Delete resource');
});

module.exports = router;