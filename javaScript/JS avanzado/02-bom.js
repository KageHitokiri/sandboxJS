"use strict"

/**
 * BOM
 * Browser Object Model
 */
function getBOM() {
    console.log(window.innerHeight);
    console.log(window.innerWidth);
    console.log(screen.width);
    console.log(screen.height);
    console.log(window.location);
}

function redirect(url) {
    window.location.href=url;
}
function openWindow (url) {
    window.open(url,"","width=500, height=400");
}

openWindow();
getBOM();