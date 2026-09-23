const express = require('express');
const router = express.Router();
const { bookEvent, confirmBooking, getMyBookings, cancelBooking, sendBookingOTP } = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/auth');

router.post('/send-otp', protect, sendBookingOTP);// otp se verify booking karne se phele.
router.post('/', protect, bookEvent);
router.put('/:id/confirm', protect, admin, confirmBooking);// admin kaam karega.
router.get('/my', protect, getMyBookings); //
router.delete('/:id', protect, cancelBooking); //user kar sakta hai

module.exports = router;
