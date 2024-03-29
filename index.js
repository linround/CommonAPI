const baseUrl = 'https://ucalendar.cn/api'
const POST = 'POST'
export async function getRecords() {
  const url = '/monitoring/records'
  return fetch(`${baseUrl}${url}`).then(response=>response.json())
}

export async function addRecords() {
  const url = '/monitoring/add'
  const data = {
    category:'visit',
    sourceSite:location.host,
    timePoint:Date.now(),
  }
  return fetch(`${baseUrl}${url}`,{
    method:POST,
    body:JSON.stringify(data),
    headers:{
      'content-type': 'application/json'
    }
  }).then(response=>response.json())

}
