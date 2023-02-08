const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
	// find all tags
	Tag.findAll({
		include: [Product],
	})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				msg: "an error occurred",
				err: err,
			});
		});
});

router.get("/:id", (req, res) => {
	// find a single tag by its `id`
	Tag.findOne({
		where: { id: req.params.id },
		include: [Product],
	})
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				msg: "an error occurred",
				err: err,
			});
		});
});

router.post("/", (req, res) => {
	// create a new tag
	Tag.create(req.body)
		.then((data) => {
			res.status(201).json(data);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.put("/:id", (req, res) => {
	// update a tag's name by its `id` value
	Tag.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((tag) => {
			res.status(201).json(tag);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

router.delete("/:id", (req, res) => {
	// delete on tag by its `id` value
	Tag.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((tag) => {
			if (tag) {
				return res.json(tag);
			} else {
				return res.status(404).json({ msg: "Tag does not exist." });
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
