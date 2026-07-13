(function() {
    const pack = "textures.zip";

    window.addEventListener("load", () => {
        console.log("[PACK] Starting loader");

        fetch(pack)
            .then(r => r.arrayBuffer())
            .then(data => {
                window.eaglercraftResourcePack = new Uint8Array(data);
                console.log("[PACK] ZIP loaded");
            })
            .catch(err => {
                console.error("[PACK] Error:", err);
            });
    });
})();
