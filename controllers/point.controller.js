const Point = require('../models/point.model');

exports.test = function (req, res) {
	res.send('Testing Point Controller');
};

exports.pointCreate = function (req, res) {
	let point = new Point({
		latitude: req.body.latitude,
		longitude: req.body.longitude,
		recycled: req.body.recycled,
		img: req.body.img,
		title: req.body.title,
		body: req.body.body,
		upVotes: req.body.upVotes,
		time: req.body.time,
		UID: req.body.UID,
	});
	
	point.save(function (err) {
		if(err){
			return next(err);
		}
		res.send('Point Created Successfully!')
	})
};