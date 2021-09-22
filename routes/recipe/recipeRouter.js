var express = require("express");
var router = express.Router();
var recipeController = require("./controller/recipeController");

/* GET home page. */
router.get("/", function (req, res, next) {
	recipeController.getAllRecipe({}, function (err, foundRecipe) {
		if (err) {
			res.status(500).json({ message: "Something went wrong!", error: err });
		} else {
			res.json({ message: "success!", foundRecipe });
		}
	});
});

router.post("/create-recipe", function (req, res) {
	recipeController.createRecipe(req.body, function (err, savedRecipe) {
		if (err) {
			res.status(500).json({ message: "Something went wrong!", error: err });
		} else {
			res.json({ message: "success!", savedRecipe });
		}
	});
});

router.put("/update-recipe-by-id/:id", function (req, res) {
	recipeController.updateRecipeById(
		req.params.id,
		req.body,
		function (err, updatedRecipe) {
			if (err) {
				res.status(500).json({ message: "Something went wrong!", error: err });
			} else {
				res.json({ message: "success!", updatedRecipe });
			}
		}
	);
});

router.delete("/delete-recipe-by-id/:id", function (req, res) {
	recipeController.deleteRecipe(req.params.id, function (err, deletedRecipe) {
		if (err) {
			res.status(500).json({ message: "Something went wrong!", error: err });
		} else {
			res.json({ message: "success!", deletedRecipe });
		}
	});
});
module.exports = router;
