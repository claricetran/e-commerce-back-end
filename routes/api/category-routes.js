const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
	// find all categories
	Category.findAll({
		include: [Product],
	})
		.then((category) => {
			res.status(200).json(category);
		})
		.catch((err) => {
			res.status(500).json({
				msg: "an error occurred",
				err: err,
			});
		});
	// be sure to include its associated Products
});

router.get("/:id", (req, res) => {
	// find one category by its `id` value
	Category.findOne({
		where: { id: req.params.id },
		include: [Product],
	})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.status(500).json({
				msg: "an error occurred",
				err: err,
			});
		});
	// be sure to include its associated Products
});

router.post("/", (req, res) => {
	// create a new category
	console.log(req.body);
	Category.create(req.body)
		.then((data) => {
			res.status(201).json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/:id", (req, res) => {
	// update a category by its `id` value
	Category.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((data) => {
			if (data[0]) {
				return res.json(data);
			} else {
				return res.status(404).json({ msg: "no such record" });
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				msg: "an error occurred",
				err: err,
			});
		});
});

router.delete("/:id", (req, res) => {
	// delete a category by its `id` value
	Category.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((category) => {
			if (category) {
				return res.json(category);
			} else {
				return res.status(404).json({ msg: "Category does not exist." });
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				msg: "An error occured.",
				err: err,
			});
		});
});

module.exports = router;
