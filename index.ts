const Tags: string[] = [
    "a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote",
    "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd",
    "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure",
    "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img",
    "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "meta", "meter", "nav",
    "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress",
    "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong",
    "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead",
    "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "applet", "basefont", "big", "blink",
    "center", "command", "content", "dir", "element", "font", "frame", "frameset", "image", "isindex", "keygen",
    "listing", "marquee", "menu", "menuitem", "multicol", "nextid", "nobr", "noembed", "noframes", "plaintext",
    "shadow", "spacer", "strike", "tt", "xmp", "acronym", "bgsound", "dir", "frameset", "noframes", "tt",
    "video", "audio", "button", "details", "dialog", "summary", "template", "figcaption", "mark", "wbr"
];

for (let e = 0; e < Tags.length; e++) {
    globalThis[Tags[e]] = (attrs: object, ...children: any[]): Node => {
        const el: Node = document.createElement(Tags[e]);
        if (attrs) {
            for (const key in attrs) {
                if (key[0] === '$') {
                    el.addEventListener(key.slice(1), attrs[key]);
                    continue;
                }
                el.setAttribute(key, attrs[key]);
            }
        }
        for (let j = 0; j < children.length; j++) {
            if (typeof children[j] === 'string' || typeof children[j] === 'number' || typeof children[j] === 'boolean' || typeof children[j] === 'undefined' || children[j] === null) {
                    el.appendChild(document.createTextNode(children[j]));
                } else {
                    el.appendChild(children[j]);
                }
            }
        return el;
    };
}

type Result = {
    in: Function,
    el: Node[] | Node
}

globalThis.$ = (selector: string): Result => {
    let el: Node[] | [] = document.querySelectorAll(selector);
    if (el.length === 0) {
        return {
            in: () => {
                throw Error("Element not found");
            }
        };
    }
    if (el.length === 1) {
        return {
            in: (els) => {
                while (el[0].firstChild) {
                    el[0].removeChild(el[0].firstChild);
                }
                el[0].appendChild(els);
            },
            el: el[0]
        };
    }
    let resultObj = [];
    for (let x = 0; x < el.length; x++) {
        resultObj.push({
            in: (els) => {
                while (el[x].firstChild) {
                    el[x].removeChild(el[x].firstChild);
                }
                el[x].appendChild(els);
            },
            el: el[x]
        });
    }
    return resultObj;
};