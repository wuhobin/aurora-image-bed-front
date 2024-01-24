import { post, postJSON, get } from "@/api/request";

export default {
 
  UserRegister(params){
    return post("/user-service/user/register", params);
  },

  AccountActive(params){
    return post("/user-service/user/account/active", params);
  }

};
