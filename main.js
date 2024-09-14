const axios = require('axios');
const url = require('url');
const prompt = require('prompt-sync')();
const apiUrl  = prompt('URL:');
count=0
request = ()=>{
axios.get(apiUrl)
  .then(response => {
    console.log('Trạng thái:', response.status);
  })
  .catch(error => {
    console.error('Lỗi khi gửi request:', error.message);
  });
}
setInterval(() => {
  request();
}, 0.001);

