(function (root, factory) {
  // Node.
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory(require('@terraformer/wkt'));
  } else if (typeof navigator === "object") {
    // Browser Global.
    if (!root.Terraformer) {
      throw new Error("Terraformer.WKT requires the core Terraformer library. http://github.com/esri/terraformer");
    }
    root.Terraformer.WKT = factory(root.Terraformer);
  }
}(this, function (TerraformerWKT) {
  var exports = {};

  function parse(wktString) {
    return TerraformerWKT.wktToGeoJSON(wktString);
  }

  function convert(geojson) {
    return TerraformerWKT.geojsonToWKT(geojson);
  }

  exports.parse = parse;
  exports.convert = convert;

  return exports;
}));