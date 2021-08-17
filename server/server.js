require ('dotenv').config()

const express = require('express')
const app = express()
app.use(express.json())
app.use(express.static('public'))

const stripe = require ('stripe')(process.env.STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, { priceInCents: 10000, name: "Learn REACT Today" }], 
    [2, { priceInCents: 200000, name: "Learn CSS Today"}],
])

app.post('/create-checkout-session', async(req, res) => {
    try {
        stripe.checkout.sessions.create({
            
        })
        res.json({ url: 'Hi' })
    } catch(e) {
        res.status(500).json({ error: e.message })
    }
})

app.listen(3000)