export default {
async fetch(e,env) {

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};


if (e.method === "POST") {
const box = await e.json();

await env.DB.prepare(
"INSERT INTO form_data (drink, reason, gender) VALUES (?, ?, ?)"
).bind(box.hew, box.why, box.xin).run();


return new Response (JSON.stringify({

msg:"已经收到你喜欢的饮品了，感谢您的参与"
  
}),{headers});
} else {
return new Response (null, {headers});
}



}
}