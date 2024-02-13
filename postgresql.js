const {Client}=require('pg');
const client=new Client({
    host:"localhost",
    port:"5432",
    user:"postgres",
    password:"postgresql",
    database:"postgres",
})
client.on("connect",()=>{
    console.log("postgreql connected");//connect and end are predefined events emitted by the pg module's
})
client.on("end",()=>{
    console.log("connection closed");
})
module.exports=client;





