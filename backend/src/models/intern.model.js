import mongoose from "mongoose";

const internSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    referralCode: { type: String, required: true },
    totalDonations: { type: Number, required: true }
  },
  {
    timestamps: true
  }
);

const Intern = mongoose.model("Intern", internSchema);

export default Intern;
