const Project = require("../models/Project");
const Skill = require("../models/Skill");
const Experience = require("../models/Experience");
const Contact = require("../models/ContactModel");

const getDashboardData = async (req, res) => {
  try {
    const totalProjects = await Project.countDocuments();

    const totalSkills = await Skill.countDocuments();

    const totalExperience =
      await Experience.countDocuments();

    const totalMessages =
      await Contact.countDocuments();

    const recentProjects =
      await Project.find()
        .sort({ createdAt: -1 })
        .limit(5);

    const recentMessages =
      await Contact.find()
        .sort({ createdAt: -1 })
        .limit(5);

    res.status(200).json({
      stats: {
        totalProjects,
        totalSkills,
        totalExperience,
        totalMessages,
      },
      recentProjects,
      recentMessages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getDashboardData,
};