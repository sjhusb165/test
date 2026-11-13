export default {
async fetch(qian){
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "text/plain;charset=UTF-8"
};
const url = new URL (qian.url);
if (url.pathname === "/gree") {
return new Response ("是绿茶", {headers})
};

if (url.pathname === "/redb") {
return new Response ("是红茶", {headers})
};
  
if (url.pathname === "/fanb") {
return new Response ("是方糖", {headers})
};

}
}