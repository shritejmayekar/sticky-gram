const axios = require('axios').default;

export default function axios_service() {

}
axios_service.prototype.post = function (url, data, isHeaderReq = false, header) {
    
    return axios.post(url, data, isHeaderReq && header)
}
axios_service.prototype.get = function (url, isHeaderReq = false, header) {
    return axios.get(url, isHeaderReq && header)
}
axios_service.prototype.put = function (url, data, isHeaderReq = false, header) {
    // let resp =  axios.put(url, data, isHeaderReq && header);
    return axios.put(url, data, isHeaderReq && header)
}

axios_service.prototype.patch = function (url, data, isHeaderReq = false, header) {
    // let resp =  axios.put(url, data, isHeaderReq && header);
    return axios.patch(url, data, isHeaderReq && header)
}
axios_service.prototype.getTimeout = function (url, isHeaderReq = false, header) {
    return axios.get(url, isHeaderReq && header)
}