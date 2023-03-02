const client = require("../Database/db")

const addHardware = async(req,res)=>{

    const {name,model,category,vendor,buydate,description} = req.body;
    // res.send("Success")
    try {
        await client.query(`insert into "hardware" (name,model,category,vendor,buydate,description) values($1,$2,$3,$4,$5,$6)`,[name,model,category,vendor,buydate,description]);
        res.status(200).send("Data Inserted");
    } catch (error) {
        res.status(404).send("Error in Adding Hardware to database."+error);

        
    }

}

module.exports = addHardware;