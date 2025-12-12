export default async function handler(req, res) {
  const { url, count } = req.query;

  if (!url || !count) {
    return res.status(400).json({
      error: "Sila bagi 'url' dan 'count'. Contoh: /api/tiktok?url=LINK&count=5"
    });
  }

  let success = 0;

  for (let i = 0; i < Number(count); i++) {
    try {
      await fetch(url);
      success++;
    } catch (err) {
      console.log(err);
    }
  }

  return res.status(200).json({
    message: "Selesai",
    url,
    total_clone: count,
    berjaya: success
  });
}