"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MPackages = void 0;
const csharp_UnityEngine_1 = require("csharp.UnityEngine");
const assetMgr_1 = require("../../../common/assetMgr");
const jsComponent_1 = require("../../../common/jsComponent");
const layerMgr_1 = require("../../../common/layerMgr");
class MPackages extends jsComponent_1.JsComponent {
    static __staticConstructor() {
        let prefab = $.getInstance(assetMgr_1.AssetMgr).Auto.loadPrefab("Prefabs/Scene/MWorld/Map/MPackages");
        let trf = csharp_UnityEngine_1.GameObject.Instantiate(prefab).transform;
        $.getInstance(layerMgr_1.LayerMgr).Scene.addChild(trf);
        return new MPackages(trf);
    }
    load(id) {
        let sprite = this["id_" + id];
        if (sprite instanceof csharp_UnityEngine_1.Texture2D) {
            sprite = csharp_UnityEngine_1.Sprite.Create(sprite, new csharp_UnityEngine_1.Rect(0, 0, sprite.width, sprite.height), csharp_UnityEngine_1.Vector2.one);
        }
        if (sprite instanceof csharp_UnityEngine_1.Sprite) {
            return sprite;
        }
        return undefined;
    }
}
exports.MPackages = MPackages;
//# sourceMappingURL=mPackages.js.map