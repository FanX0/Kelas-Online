const apiAdapter = require ('../../apiAdapter');
const {
    URL_SERVICE_USER,
    JWT_SECRET,
    JWT_SECRET_REFRESH_TOKEN,
    JWT_ACCESS_TOKEN_EXPIRED,
    JWT_REFRESH_TOKEN_EXPIRED
} = process.env;

const api = apiAdapter(URL_SERVICE_USER);
 module.exports = async (req,res) => {
    try {
        const user = await api.post('/users/register', req.body)
        
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