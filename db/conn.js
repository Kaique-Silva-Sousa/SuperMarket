const mongoose = require('mongoose')

async function main(){
    await mongoose.connect(process.env.STRING_CONNECTION)
    console.log('connect')
}
main().catch((err)=>{
    console.log(err)
})

module.exports = mongoose