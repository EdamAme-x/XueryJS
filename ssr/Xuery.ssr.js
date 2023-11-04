/**
 * @Copyright @amex2189 | @EdamAme-x / Free
 */
let $ = {};

const Tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "applet",
  "basefont",
  "big",
  "blink",
  "center",
  "command",
  "content",
  "dir",
  "element",
  "font",
  "frame",
  "frameset",
  "image",
  "isindex",
  "keygen",
  "listing",
  "marquee",
  "menu",
  "menuitem",
  "multicol",
  "nextid",
  "nobr",
  "noembed",
  "noframes",
  "plaintext",
  "shadow",
  "spacer",
  "strike",
  "tt",
  "xmp",
  "acronym",
  "bgsound",
  "dir",
  "frameset",
  "noframes",
  "tt",
  "video",
  "audio",
  "button",
  "details",
  "dialog",
  "summary",
  "template",
  "figcaption",
  "mark",
  "wbr",
];
for (let e = 0; e < Tags.length; e++) {
  $[Tags[e]] = (attrs, ...children) => {
    let el = `<${Tags[e]}`;
    if (attrs) {
      for (const key in attrs) {
        if (key === "style" && typeof attrs[key] == "object") {
          for (const prop in attrs[key]) {
            el += ` style="${prop}:${attrs[key][prop]};"`;
          }
        } else if (key.slice(0, 1) === "$") {
          // Assuming `attrs[key]` contains a function reference
          el += ` on${key.slice(1)}="${attrs[key]}"`;
        } else {
          el += ` ${key}="${attrs[key]}"`;
        }
      }
    }
    el += `>`;

    for (let j = 0; j < children.length; j++) {
      if (
        typeof children[j] === "string" ||
        typeof children[j] === "number" ||
        typeof children[j] === "boolean" ||
        typeof children[j] === "undefined" ||
        children[j] === null
      ) {
        el += `${children[j]}`;
      } else {
        el += `${children[j]}`;
      }
    }

    el += `</${Tags[e]}>`;
    return el;
  };
}

export default $;