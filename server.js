const express = require('express')
const fileUpload = require('express-fileupload')

const port = 5000;

let cors = require('cors')

const app = express();

const session = require('express-session')

app.use(fileUpload());

app.use(
    cors({credentials: true, origin: 'http://localhost:3000'}),
    session({
      secret: "keyboard cat boddyfollymeskaweq456",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false, sameSite: 'lax' } // ändra till true för secure cookie (felsöka behövs här nu)
    })
  );

const db=require("mssql");
async function connectToMsSql() {
    try{
        db.pool = await db.connect({
            user: "kodtest",
            password: "	Yn7RxW9v_J-4",
            server:"den1.mssql7.gear.host",
            database:"kodtest"
        });
    } catch (err){
    console.trace(err);
    }
}
app.listen(port, async () =>{
    await connectToMsSql();
    console.log('Server started on port: 5000!')
});