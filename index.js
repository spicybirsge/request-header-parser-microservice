const express = require('express')
const cors = require("cors")
const app = express()
app.use(cors())

if(process.env.NODE_ENV === 'production') {
    app.set('trust proxy', true);
}

app.get('/api/whoami', async(req, res) => {
    const ip = req.ip;
const lang = req.headers["accept-language"];
const software = req.headers["user-agent"]
    return res.json({ipaddress: ip, language: lang, software:software })

})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})