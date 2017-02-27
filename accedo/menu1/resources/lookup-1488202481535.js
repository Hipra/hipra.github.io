(function(window, undefined) {
  var dictionary = {
    "9cf9a74c-5e93-44db-acc6-a6f342736e49": "Western Africa",
    "2f888dd7-1cb7-4f25-9b39-1f408c83dd83": "Northern Europe",
    "d2526554-d3ac-465b-add5-9975ff7c7942": "Caribbean",
    "aabb1a1e-3a2d-41ee-9172-300fb64b0071": "Western Asia",
    "011fd762-502b-4bf6-96af-5481350c108c": "Eastern Europe",
    "407a1532-1d95-486a-b238-21d655dbbaa8": "Northern Asia",
    "0e644609-ea47-466c-9da2-6e566d10cdd4": "North America",
    "9a196fd9-2342-4a7b-96db-b720023ea213": "Western Europe",
    "60e5a579-fa09-450f-874b-578e173d0183": "Eastern Asia",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1 - Dashboard",
    "b539a283-10f8-47e3-8cc2-1084630c6aef": "Southern Africa",
    "2b37ebf9-5495-4685-b627-d97970194c9d": "Central Asia",
    "8be8d60b-c9d3-43f6-b6d0-a7eb7efb6564": "Northern Africa",
    "42359a67-e1de-4456-913d-7d18554f67b8": "Eastern Africa",
    "3f47c0e6-960b-4c60-8e41-bdccbb17e6b6": "South-East Asia",
    "4e59770d-52d9-4fc0-869c-2c0a0988e9ff": "Central Africa",
    "2e5471a7-e1e4-416f-a466-f836f190414b": "Southern Asia",
    "732e31bf-eefd-48a4-93a2-538b2975aee9": "Central America",
    "9b4d6ca0-56f2-4343-b471-37ed18a435c5": "South America",
    "8452a98f-20ba-4d09-82df-e4364781eb7d": "Southern Europe",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);