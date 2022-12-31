const jwt = require('jsonwebtoken');
const JWT_SECRET = 'bwamicro!23';

//create basic token dengan proses syncronous
// const token = jwt.sign(
//     { data: { kelas: 'faridmicro' }},
//      JWT_SECRET,
//      //jika menggunakan petik maka bisa menggunakan '5m'
//      //jika value akan langsung menhitung detik misal       3600 
//      { expiresIn: '5m' });
// console.log(token);

// asyncronous - create token
jwt.sign ({ data: { kelas: 'farid'}}, JWT_SECRET, {expiresIn : '1m'}, (err, token)=> {
    console.log(token);
});

const token1 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImtlbGFzIjoiZmFyaWQifSwiaWF0IjoxNjcyNTAwMTA3LCJleHAiOjE2NzI1MDAxNjd9.1vRrHX9VuRTDL-7DbV2O-DtUIiKvq2hMAAIGMWzLhPM';

// cara 1
// jwt.verify(token1, JWT_SECRET, (err, decoded) => {
//     if (err) {
//         console.log(err.message);
//         return;
//     }
//     console.log(decoded);
// });

// cara 2
try {
    const decoded =jwt.verify(token1,JWT_SECRET);
    console.log(decoded);
} catch (error) {
    console.log(error.message);
}
// console.log('aaaaaaa');