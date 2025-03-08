const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "oIwDkJZK#MeBwu9YpkEgMR-l0n1gkgbpGYRTvgsELTZ4P-7G0RHA", 
MONGODB: process.env.MONGODB || "mongodb+srv://raizen:darki123@cluster0.utsln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", //ne pas changer
};
