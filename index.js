const btn = document.getElementById("btn-submit")
btn.addEventListener("click", getValue)
function getValue(event){
    event.preventDefault()
    var valueName = document.getElementById("ten").value
    var valueEmail = document.getElementById("email").value
    var valueMes = document.getElementById("mes").value
    console.log(valueName)
    console.log(valueEmail)
    console.log(valueMes)
}
document.getElementById("btn-submit").addEventListener("click", function () {
    const valueName = document.getElementById("ten").value;
    const valueEmail = "thenamhacker01010101@gmail.com";
    const valueMes = document.getElementById("mes").value;
    const mailtoLink = `mailto:${valueEmail}?subject=${valueName}&body=${valueMes}`;
    window.location.href = mailtoLink;
    console.log("asdasdasdsa")
});
w3.slideshow(".slides", 3000)