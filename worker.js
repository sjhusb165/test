export default {
  async fetch(request, env) {
    // 1. 准备跨域通行证
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    // 2. 处理浏览器的安检试探（预检请求），直接放行
    if (request.method === "OPTIONS") {
      return new Response(null, { headers });
    }

    // 3. 处理真正的表单提交（POST）
    if (request.method === "POST") {
      try {
        // 拆包
        const box = await request.json();
        
        // 存库
        await env.DB.prepare(
          "INSERT INTO form_data (drink, reason, gender) VALUES (?, ?, ?)"
        ).bind(box.hew, box.why, box.xin).run();

        // 返回成功
        return new Response(JSON.stringify({
          msg: "已经收到你喜欢的饮品了，感谢您的参与"
        }), { headers });

      } catch (error) {
        // 如果存库报错，把真实死因直接发给前端
        return new Response(JSON.stringify({
          msg: "后端出错了：" + error.message
        }), { headers });
      }
    }

    // 4. 兜底：如果是普通打开网页，防止报 1101 错误
    return new Response("后端运行正常，请用表单提交", { headers });
  }
}