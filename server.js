const express = require('express')
const app = express()
const PORT = 8000

const musicians = {

    '21 savage': {
        'age': 29,
        'birth name': 'Josemas Paz',  
        'birth location': 'London, England'
    },

    'Chance the Rapper': {
        'age' : 25, 
        'bith name': 'Alfonzo Perez',
        'birth location' : 'Karim Benzema'
    }, 

    'Bob Dylan': {
        'age': 'eternal',
        'birth name' : 'Bobber Dylan', 
        'birth location': 'west virginia'
    }
    
}

app.get('/', (request, response) => { 
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:musicianName', (req, res) => {
    const musiciansName = req.params.musicianName.toLowerCase()

    if(musicians[musiciansName]) {
        res.json(musicians[musiciansName])     
    } else {
        res.json(musicians['Bob Dylan'])
    }
    
})

app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}! You better go catch it!`)
})

