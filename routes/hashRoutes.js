const express = require('express');
const router = new express.Router();
const hashHandler = require('../handler/hashHandler');

router.get('/', async (req, res) => {
  try {
    await hashHandler.getHash(res);
  } catch (err) {
    console.error('Error processing the request:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;