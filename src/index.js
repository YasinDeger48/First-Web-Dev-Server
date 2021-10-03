//npm install nodemon --save-dev
//nodemon kurmamızın nedeni değişiklikleri anlık olarak görebilmek için yoksa nodejs de yapılan değişiklikleri
//görebilmek için her defasında uygulamayı tekrar başlatmamız gerekir.
import express from 'express';
import bodyParser from 'body-parser';
import AuthRouter from './routes';
import mongoose  from "mongoose";
import cors from 'cors';

mongoose.connect('mongodb+srv://admin:12345@cluster0.k1znc.mongodb.net/rok');
mongoose.Promise = global.Promise;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


AuthRouter(app);

app.get('/', (req, res) => {

//     Donkey.find({}, { name :1 , _id :0 }).then((data) => {
//         res.send(data);
//     })
   
//    res.send("Learn English Rest API");
});
// app.post('/', (req, res) => {
   
//    var newUser = new User ();
//    newUser.email ="yasin@deger.com";
//    newUser.firstName ="Yasin";
//    newUser.lastName ="Deger";
//    newUser.password ="12345";
//    newUser.dateCreated = new Date();
//    newUser.dateModified =newUser.dateCreated;

//    newUser.save().then(
//        (data) => {
//        res.send(data);
//    },
//    (err) =>{
//        res.send(err);
//    })
// });

// app.delete('/', (req, res) => {


//     Donkey.findOne({name:"Eşşek 2"}).then((data) => {

//         data.remove().then(() => {
//             res.send ("Silindi");
//         })
//     })
// });

// app.put('/', (req,res) =>{
//     Donkey.updateOne({name: "Eşşek"},{
//         $set :{
//             name: "Aptal Eşşek"
//         }

//     }).then(x =>{
//         res.send("Aptal Eşşek Eklendi.")
//     })
// })

app.listen(3300, () => console.log('server çalıştı'));