// ==UserScript==
// @name         Passenger App
// @namespace    http://tampermonkey.net/
// @version      2024-02-14
// @description  Hide WT notification
// @author       You
// @match        https://dev.bds.bob.io/
// @match        https://pre.bds.bob.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bob.io
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Hide WT warning.
    const styles = `div:has(> a[href="https://help.bob.io/en/worldtracer-connection-problems/"]) { display: none; }`;
    const styleSheet = document.createElement("style");
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
    // Your code here...
})();
