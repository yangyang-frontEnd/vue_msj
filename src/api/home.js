import http from "@/utils/request"

// 获取banner数据
export async function getBanner(){
  return await http.get('/banner');
}

// 获取menu-card数据
export async function getMenus(params) {
  return await http.get("/menu/query", { params });
}