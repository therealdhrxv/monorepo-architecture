import mongoose from "mongoose";

let alreadyDone = false;

export async function dbConnect() {
    if (alreadyDone) return;
    alreadyDone = true;
    await mongoose.connect("mongodb+srv://therealdhruv:dhruv@cluster0.axhirrs.mongodb.net/");
};