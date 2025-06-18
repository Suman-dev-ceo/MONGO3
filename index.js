const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat.js');
const methodOverride = require('method-override');

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'/public')));
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));

main().then(()=>{
    console.log('successfully connected');
})
.catch((err)=>{
    console.log(err);
});



async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wattsapp');
}


app.get('/',(req,res)=>{
    res.send('root is working');
});

//Index route
app.get('/chats', async(req,res)=>{
    let chats = await Chat.find({});
    res.render('index.ejs',{chats});
});

//New Route
app.get('/chats/new',(req,res)=>{
    res.render('new.ejs');
});

//Create Route (insert into DB)
app.post('/chats',(req,res)=>{
    let {from, to, msg} = req.body;
    let newChat = new Chat({
        from: from,
        to : to,
        msg : msg,
        created_at : new Date(),
        modified_at : new Date(),
    });

    newChat.save().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });

    res.redirect('/chats');
});

//Edit Route
app.get('/chats/:id/edit',async(req,res)=>{
    let {id} = req.params;
    let chat = await Chat.findById(`${id}`);
    res.render('edit.ejs',{chat});
});

//UPDATE Route
app.put('/chats/:id',async(req,res)=>{
    let {id} = req.params;
    let {msg : newMsg} = req.body;
    await Chat.findByIdAndUpdate({_id:`${id}`},
        { msg : newMsg, modified_at : new Date()}, 
        {runValidators : true, new : true});
    res.redirect('/chats');
});

//DESTROY Route
app.delete('/chats/:id',async(req,res)=>{
    let {id} = req.params;
    let deletedChart = await Chat.findByIdAndDelete({_id: `${id}`});
    console.log(deletedChart);
    res.redirect('/chats');
});

app.listen(8080,()=>{
    console.log('app is listening on port : 8080');
});