�yuse strict�z;
importScripts(�ysw-toolbox.js�z); toolbox.precache([�uindex.html�v,�vstyle/style.css�v]); toolbox.router.get(�y/images/*�z, toolbox.cacheFirst); toolbox.router.get(�y/*�z, toolbox.networkFirst, { networkTimeoutSeconds: 5});