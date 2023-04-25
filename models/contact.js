import mongoose from 'mongoose';
const {Schema} = mongoose;

const contactSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    zip:{
        type: String,
        required: true
    },
    checkboxOne:{
        type: String,
        required: true
    },
    checkboxTwo:{
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
},
{
    timestamps: true
}
)

export default mongoose.model("Contact", contactSchema);