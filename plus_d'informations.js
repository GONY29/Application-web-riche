function myFunction(){
document.getElementById("My footerJS2").style.fontSize="20px";
document.getElementById("My footerJS2").style.color="red";
document.getElementById("My footerJS2").style.backgroundColor="black";
 document.getElementById("My footerJS2").innerHTML="17 Bd Flandress Dunkerque 1940, 56100 Lorient";
}
document.getElementById("button-my-footer-information").addEventListener("click", function () {
document.getElementById("consultation").textContent =
new Date().toLocaleString("fr-FR", {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric",
hour: "2-digit",
minute: "2-digit",
second: "2-digit"
});
});