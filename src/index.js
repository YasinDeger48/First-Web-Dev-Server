//npm install nodemon --save-dev
//nodemon kurmamızın nedeni değişiklikleri anlık olarak görebilmek için yoksa nodejs de yapılan değişiklikleri
//görebilmek için her defasında uygulamayı tekrar başlatmamız gerekir.
import express from 'express';
import bodyParser from 'body-parser';

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const sonuc = {
        durum : true,
        mesaj :"Tamamlandı"
    }
    res.send(sonuc);
});

app.post('/', (req, res)=> {
    
    res.send(req.body.email)
})

app.listen(3300, () => console.log('server çalıştı'));

