import mongoose, { Schema, Document } from 'mongoose';


interface Participants extends Document {
    name: String,
    date: Date,
    email: String,
    contact: Number
};


interface Event extends Document {
    title: String,
    selectedUser: Participants[]
};


const participantsSchema : Schema<Participants> = new Schema({
    name: String,
    date: Date,
    email: String,
    contact: Number
}, {
    strict: true,
    versionKey: false
});


const eventSchema : Schema<Event> = new Schema({
    title: String,
    selectedUser: [participantsSchema]
}, {
    strict: true,
    versionKey: false
});



const EventModel = mongoose.model<Event>('eventlist', eventSchema);


export { EventModel };
