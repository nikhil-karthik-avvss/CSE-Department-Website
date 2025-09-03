async function loadComponent(id, file) {
    let response = await fetch(file);
    document.getElementById(id).innerHTML = await response.text();
}
loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
loadComponent("loader","loader.html")