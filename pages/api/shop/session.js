export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.status(404).end();
    return;
  }

  let now = new Date();

  res
    .status(200)
    .json({
      sessionId: `bol.pro.${now.getFullYear()}.${now.getMonth()}.${now.getDate()}.${now.getHours()}.${now.getMinutes()}.${now.getSeconds()}.${now.getMilliseconds()}`,
      startTime: now.getTime()
    });
}
