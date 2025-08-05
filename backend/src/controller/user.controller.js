import Intern from "../models/intern.model.js";

export const getDashboard = async (req, res) => {
  try {
    const intern = await Intern.findOne();
    res.json(intern);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const getLeaderboard = async (req, res) => {
  try {
    const leaderboard = await Intern.find().sort({ totalDonations: -1 });
    res.json(leaderboard);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
};

export const addIntern = async (req, res) => {
  try {
    const { name, referralCode, totalDonations } = req.body;

    const existing = await Intern.findOne({ referralCode });
    if (existing) {
      return res.status(400).json({ message: "Referral code already exists" });
    }

    const intern = new Intern({ name, referralCode, totalDonations });
    await intern.save();

    return res.status(201).json({ message: "Intern added successfully", intern });
  } catch (error) {
    console.error("Add intern error:", error);
    res.status(500).json({ message: "Server error" });
  }
};