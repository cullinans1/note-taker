// const { animals } = require('./data/animals');
// const express = require('express');
// const PORT = process.env.PORT || 3001;
// const fs = require('fs');
// const path = require('path');
// const apiRoutes = require('./routes/apiRoutes');
// const htmlRoutes = require('./routes/htmlRoutes');
const { notes } = require('./Develop/db/db.json');
const express = require('express');
const PORT = process.env.PORT || 3001;
const fs = require('fs');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();
//will always use these middleware 
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
//used to link files like css and js
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


//root route
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
