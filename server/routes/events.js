const express = require('express');
const router = express.Router();
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent } = require('../controllers/eventController');
const { protect, admin } = require('../middleware/auth');

router.get('/', getEvents);
router.get('/:id', getEventById);
router.post('/', protect, admin, createEvent);// create event by admin only
router.put('/:id', protect, admin, updateEvent);//update event by admin only
router.delete('/:id', protect, admin, deleteEvent);// delete event by admin only

module.exports = router;
