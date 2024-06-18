require('/server/config/mongoose.config');

const express = require('express');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require("./server/routes/products.routes")(app);

app.listen(8000, => {
    console.log("listening at port 8000")
});