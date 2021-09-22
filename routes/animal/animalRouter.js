var express = require("express");
var router = express.Router();
var animalController = require("./controller/animalController");

/* GET home page. */
router.get("/", function (req, res, next) {
	animalController.getAllAnimal({}, function (err, foundAnimal) {
		if (err) {
			res.status(500).json({ message: "Something went wrong!", error: err });
		} else {
			res.json({ message: "success!", foundAnimal });
		}
	});
});

router.post("/create-animal", function (req, res) {
	animalController.createAnimal(req.body, function (err, savedAnimal) {
		if (err) {
			res.status(500).json({ message: "Something went wrong!", error: err });
		} else {
			res.json({ message: "success!", savedAnimal });
		}
	});
});

router.put("/update-animal-by-id/:id", function (req, res) {
	animalController.updateAnimalById(
		req.params.id,
		req.body,
		function (err, updatedAnimal) {
			if (err) {
				res.status(500).json({ message: "Something went wrong!", error: err });
			} else {
				res.json({ message: "success!", updatedAnimal });
			}
		}
	);
});

router.delete("/delete-animal-by-id/:id", function (req, res) {
	animalController.deleteAnimal(req.params.id, function (err, deletedAnimal) {
		if (err) {
			res.status(500).json({ message: "Something went wrong!", error: err });
		} else {
			res.json({ message: "success!", deletedAnimal });
		}
	});
});
module.exports = router;
