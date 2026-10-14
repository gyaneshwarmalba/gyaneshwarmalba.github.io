// The address is assembled at runtime so it never appears as plain text in the HTML.
document.querySelectorAll("a[data-email-user]").forEach(function (link) {
    var address = link.dataset.emailUser + "@" + link.dataset.emailDomain;
    var href = "mailto:" + address;
    if (link.dataset.emailSubject) {
        href += "?subject=" + encodeURIComponent(link.dataset.emailSubject);
    }
    link.href = href;
    if (link.dataset.emailShowAddress !== undefined) {
        link.textContent = address;
    }
});

document.querySelectorAll("[data-current-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
});
