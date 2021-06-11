const express = require('express')
const fileUpload = require('express-fileupload')

const app = express();

app.use(fileUpload());



const db=require("mssq");
async function connectToMsSql() {
    try{
        db.pool = db.connect({
            user: "kodtest",
            password: "	Yn7RxW9v_J-4",
            server:"den1.mssql7.gear.host",
            database:"kodtest"
        });
    } catch (err){
    console.trace(err);
    }
}
app.listen(5000, async () =>{
    await connectToMsSql();
    console.log('Server started on port: 5000!')
});