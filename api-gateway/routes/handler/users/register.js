const apiAdapter = require ('../../apiAdapter');
const {
    URL_SERVICE_USER
} = process.env;

const api = apiAdapter(URL_SERVICE_USER);
 module.exports = async (req,res) => {
    try {
        const user = await api.post('/users/register', req.body);
        return res.json(user.data);
    } catch (error) {
        //ketika service mati
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json ({ status: 'error', messege: 'service unavailable' });
        }


        const { status,data} = error.response;
        return res.status(status).json(data);
    }
}