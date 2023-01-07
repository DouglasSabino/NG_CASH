const getMoment = () => {
  const data = new Date();

  const day = String(data.getDate()).padStart(2, '0');
  const mouth = String(data.getMonth() + 1).padStart(2, '0');
  const year = data.getFullYear();

  const hour = String(data.getHours()).padStart(2,'0');
  const second = String(data.getSeconds()).padStart(2, '0');
  const minute = String(data.getMinutes()).padStart(2, '0');

  return `${year}-${mouth}-${day} ${hour}-${minute}-${second}`
}

module.exports = { getMoment };