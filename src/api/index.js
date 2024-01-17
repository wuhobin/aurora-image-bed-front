import { post, postJSON, get } from "@/api/request";

export default {
 
  UserLogin(params){
    return post("/user-service/auth/login", params);
  },

};
