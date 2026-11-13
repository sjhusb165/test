export default {
async fetch(qian){
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "text/plain;charset=UTF-8"
};
const url = new URL (qian.url);
if (url.pathname === "/gree") {
return new ("是绿茶", {headers})
}

const url = new URL (qian.url);
if (url.pathname === "/redb") {
return new ("是绿茶", {headers})
}

const url = new URL (qian.url);
if (url.pathname === "/fanb") {
return new ("是方糖", {headers})
}

}
}