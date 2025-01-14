import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise

const ticketSchema = new Schema(
    {
        title: String,
        discription: String,
        category: String,
        priority: Number,
        progress: Number,
        status: String,
        active: Boolean,

    },
    {
        timestamps: true,
    }
);

const Ticket =  mongoose.models.ticket || mongoose.model("Ticket", ticketSchema)

export default Ticket;
