import request from "@/utils/request";
// 集团销售毛利（部门列表）
export function GroupSalesDetailsDeptList() {
  return request({
    url: "/insidetrade/statistic/dept-sale/dept/list",
    method: "GET"
  });
}
