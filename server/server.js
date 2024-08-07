const express = require('express');
const app = express();

const PORT = process.env.PORT || 3003;

app.listen(PORT, ()=>{
    console.log(`Server running on http://localhost:${PORT}/`);
})