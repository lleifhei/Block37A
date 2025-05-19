const express = require('express')
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const itemRoutes = require('./routes/items');
const commentRoutes = require('./routes/comments');


const app = express()


app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/items', itemRoutes)
app.use('/api/comments', commentRoutes)


app.listen(3000, () => {  
    console.log('Server is running on port 3000')
}
)
module.exports = app
