const jwt = require('jsonwebtoken');
const JWT_SECRET = 'bwamicro!23';

//create basic token dengan proses syncronous
const token = jwt.sign({ data: { kelas: 'faridmicro' }}, JWT_SECRET);
console.log(token);

