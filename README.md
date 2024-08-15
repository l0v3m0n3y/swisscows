# swisscows
JavaScript library for swisscows.com
# main
```js
async function main(){
    const {swisscows} = require('./swisscows');
    const vpn= new swisscows();
    let req=await vpn.login("email","password")
    console.log(req)
}
main()
```
