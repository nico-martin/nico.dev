const config = {
  multipass: false,
  js2svg: {
    pretty: true,
    indent: 2,
  },
  plugins: [
    {
      name: "addAttributesToSVGElement",
      params: {
        attributes: [
          { xmlns: "http://www.w3.org/2000/svg" },
          { viewBox: "0 0 1561 745.67" },
        ],
      },
    },
    "removeDimensions",
    {
      name: "removeAttrs",
      params: {
        attrs: [
          "class",
          "style",
          "fill",
          "stroke",
          "stroke-width",
          "font-size",
        ],
      },
    },
  ],
};

export default config;
