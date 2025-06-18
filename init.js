const mongoose = require('mongoose');
const Chat = require('./models/chat.js');

main().then(()=>{
    console.log('successfully connected');
})
.catch((err)=>{
    console.log(err);
});

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wattsapp');
}

const allChats = [
    {
        from: 'tapasvi',
        to: 'rifana',
        msg: 'show me how to do it',
        created_at: new Date(),
        modified_at: new Date(),
    },
    {
        from: 'sathvik',
        to: 'anjali',
        msg: 'can we meet tomorrow?',
        created_at: new Date(),
        modified_at: new Date(),
    },
    {
        from: 'harika',
        to: 'karthik',
        msg: 'dont forget the groceries',
        created_at: new Date(),
        modified_at: new Date(),
    },
    {
        from: 'pavan',
        to: 'sindhu',
        msg: 'what time is the meeting?',
        created_at: new Date(),
        modified_at: new Date(),
    },
    {
        from: 'divya',
        to: 'rajesh',
        msg: 'i finished the report',
        created_at: new Date(),
        modified_at: new Date(),
    },
    {
        from: 'naveen',
        to: 'deepika',
        msg: 'happy birthday!',
        created_at: new Date(),
        modified_at: new Date(),
    },
    {
        from: 'suresh',
        to: 'lavanya',
        msg: 'call me when you are free',
        created_at: new Date(),
        modified_at: new Date(),
    },
    {
        from: 'ramya',
        to: 'vivek',
        msg: 'lets plan a trip',
        created_at: new Date(),
        modified_at: new Date(),
    },
    {
        from: 'vinay',
        to: 'priya',
        msg: 'i need your help with this',
        created_at: new Date(),
        modified_at: new Date(),
    },
    {
        from: 'madhavi',
        to: 'anil',
        msg: 'see you soon',
        created_at: new Date(),
        modified_at: new Date(),
    },
];



Chat.insertMany(allChats);