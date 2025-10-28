class swisscows{
    constructor(){
        this.api = "https://accounts.swisscows.com"
        this.api_2="https://echo.swisscows.com"
        this.api_3="https://api.vpn.swisscows.com"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async login(email,password){
        let req=await fetch(`${this.api}/account/login`,{method:"POST",headers: this.headers,body:JSON.stringify({"email":email,"password":password,"rememberLogin":true,"clientId":null,"scope":null})})
        this.headers["cookie"]=await req.headers.get("set-cookie")
        return await req.json();
    }
    async confirm_code(userid,code){
        let req=await fetch(`${this.api}/auth/email`,{method:"POST",headers: this.headers,body:JSON.stringify({"code":code,"userId":userId,"method":"email"})});
        return await req.json();
    }
    async register(email,password){
        let req=await fetch(`${this.api}/account/register`,{method:"POST",headers: this.headers,body:JSON.stringify({"email":email,"password":password,"confirmPassword":password,"acceptPolicies":"true"})});
        return await req.json();
    }
    async servers_list(){
        let req=await fetch(`${this.api_3}/discovery.json`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {swisscows};