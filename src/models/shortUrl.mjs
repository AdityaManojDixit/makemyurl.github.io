import mongoose from "mongoose";
import pkg from "short-unique-id";

const uid = new pkg({ length: 10 });

const URLSchema = new mongoose.Schema({
    full: { type: String, required: true },
    short: { type: String },
    clicks: { type: Number, required: true, default: 0 }
});


URLSchema.pre("save", async function (next) {
    if (!this.short) {
        this.short = uid.rnd();
    }
    next();
});

const Shortner = mongoose.model('Shortner', URLSchema);

export const shortner = Shortner;
