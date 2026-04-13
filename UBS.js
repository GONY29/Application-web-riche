document.addEventListener("DOMContentLoaded",() => {
    const description = {
        "ENSIBS.jpg":"ENSIBS de Lorient",
        "IUT Lorient.jpg" : "IUT de Lorient",
        "IUT Pontivy.jpg" : "IUT de Pontuvy",
        "Campus Paquebot.jpg" : "Campus Paquebot",
        "FAC SSI UBS.jpg" : "Faculté des sciences de l'ingénieur"
    };
    const zone=document.getElementById("description-text");
    document.addEventListener("click", (e) => {
    const nom = e.target.getAttribute("src");
    zone.textContent=description [nom] || "Aucune description disponible";
    });
});