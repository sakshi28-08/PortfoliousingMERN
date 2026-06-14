const Experience = require("../models/Experience");

exports.getExperiences = async (
  req,
  res
) => {
  const experiences =
    await Experience.find();

  res.json(experiences);
};

exports.createExperience = async (
  req,
  res
) => {
  const experience =
    await Experience.create(req.body);

  res.json(experience);
};

exports.updateExperience = async (
  req,
  res
) => {
  const experience =
    await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

  res.json(experience);
};

exports.deleteExperience = async (
  req,
  res
) => {
  await Experience.findByIdAndDelete(
    req.params.id
  );

  res.json({
    message: "Deleted",
  });
};