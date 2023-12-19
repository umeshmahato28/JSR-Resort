import mongoose from "mongoose";

const msgSchema = new mongoose.Schema(
      {
            name:{
                  type: String,
                  required: true,
                  unique: false,
            },
            email: {
                  type: String,
                  required: true,
                  unique: true,
                },
            message:{
                  type: String,
                  required: true,
            },
      },
      {timestamps: true}
);
export default mongoose.model("feedback", msgSchema)