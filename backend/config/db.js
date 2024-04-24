import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://govindchoudhary844:Aryan844@cluster0.prqwpy7.mongodb.net/yumyard"
    )
    .then(() => console.log("DB Connected"));
};
