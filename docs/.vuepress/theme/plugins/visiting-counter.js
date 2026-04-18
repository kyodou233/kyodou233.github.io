const API = 'https://qutang-netlify-twikoo.netlify.app/.netlify/functions/counter'

// 获取访问量
export async function getCount() {
  const res = await fetch(API)
  const data = await res.json()
  console.log('访问量：', data.count)
  return data.count
}

// 增加访问量
export async function addCount() {
  await fetch(API, {
    method: 'POST'
  })
}