var horario = new Date()
var ano = horario.getFullYear()
var indiceMes = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
var mes = horario.getMonth()
var horas = horario.getHours()
var dia = horario.getDate()
var minutos = horario.getMinutes()
var img = document.getElementById("imagem")
document.getElementById("periodo").innerText = `Agora são exatamente: ${horas} horas e ${minutos} minutos`
// mouseHover = document.getElementsById("periodo")
if (horas > 5 && horas < 12) {
    img.src = "img/manha.jpg"
    document.body.style.background = '#C7BEBE'
} else if (horas >= 12 && horas <= 18) {
    img.src = "img/tarde.jpg"
    document.body.style.background = '#FFBB72'
} else {
    img.src = "img/noite.jpg"
    document.body.style.background = '#22172B'
}
document.getElementById('periodo').addEventListener("mouseover", over);
document.getElementById('periodo').addEventListener("mouseout", out);
function over() {
    document.getElementById('periodo').innerText = `${dia} de ${indiceMes[mes]} de ${ano}`
}
function out() {
    document.getElementById("periodo").innerText = `Agora são exatamente: ${horas} horas e ${minutos} minutos`
}
