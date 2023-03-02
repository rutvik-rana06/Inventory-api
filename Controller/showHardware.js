const client = require("../Database/db")

const showHardware = async (req,res) =>{

    try {
       
        await client.query('SELECT * FROM hardware').then(fetch => {

            res.status(200).json(fetch.rows)
            

        })
        return "Data Fetched";
    } catch (error) {
        res.status(404).send("Error in receiving the data from server.");
    }
}


module.exports = showHardware


