const apiAdapter = require ('../../apiAdapter');
const {
    URL_SERVICE_MEDIA
} = process.env;

const api = apiAdapter(URL_SERVICE_MEDIA);
 module.exports = async (req,res) => {
    try {
        const media = await api.get('/media');
        return res.json(media.data);
    } catch (error) {
        //ketika service mati
        if (error.code === 'ECONNREFUSED') {
            return res.status(500).json ({ status: 'error', messege: 'service unavailable' });
        }


        const { status,data} = error.response;
        return res.status(status).json(data);
    }
}