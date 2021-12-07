import axios from "axios";

 const paymentApi = axios.create({
   baseURL: "http://localhost:4000",
 });

export default paymentApi;