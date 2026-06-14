const Skill = require("../models/Skill");

exports.getSkills = async (req, res) => {
  const skills = await Skill.find();

  res.json(skills);
};

exports.createSkill = async (req, res) => {
  const skill = await Skill.create(req.body);

  res.json(skill);
};

exports.updateSkill = async (req, res) => {
  const skill = await Skill.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(skill);
};

exports.deleteSkill = async (req, res) => {
  await Skill.findByIdAndDelete(req.params.id);

  res.json({
    message: "Deleted",
  });
};