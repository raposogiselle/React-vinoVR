import axios from "axios";
const BASEURL = "https://gr-wine-api.herokuapp.com/wines";
// const APIKEY = "";

export default {
    search: function(query) {
        return axios.get(BASEURL + query);
    }
};