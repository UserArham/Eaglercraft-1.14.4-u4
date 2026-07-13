(function () {
    "use strict";

    const TEXTURE_PACK = "textures.zip";

    // Eaglercraft options
    window.eaglercraftXOpts = window.eaglercraftXOpts || {};

    window.eaglercraftXOpts.resourcePackURL = TEXTURE_PACK;

    console.log("[Texture Pack] Set:", TEXTURE_PACK);

    // Optional: preload the ZIP so it is available
    fetch(TEXTURE_PACK)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Texture pack not found");
            }

            return response.arrayBuffer();
        })
        .then(function (data) {
            window.texturePackData = new Uint8Array(data);
            console.log("[Texture Pack] Loaded");
        })
        .catch(function (error) {
            console.error("[Texture Pack] Failed:", error);
        });

})();
