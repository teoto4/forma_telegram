const token = "7494564803:AAHc8LdfUOSeqjOzXXrUQ0K-tqopp2p5z0U";
const chat_id = "-1002236120894";
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`;

document.querySelector("#tg").addEventListener("submit", function (e) {
  e.preventDefault();
  let message = `<b>Заявка с сайта</b>\n`;
  message += `<b>Отправитель: </b> ${this.name.value} \n`;
  message += `<b>Почта: </b> ${this.email.value} \n`;
  message += `<b>Номер: </b> ${this.number.value}`;

  axios.post(uri_api, {
    chat_id: chat_id,
    parse_mode: "html",
    text: message,
  });
});
