import type { Plugin } from "vite";

interface FontOptions {
    name: string;
    url: string;
    weight?: string;
    style?: string;
}

export function fontLoad(fonts: FontOptions[]): Plugin {
    return {
        name: "vitepress-font-loader",

        transformIndexHtml(html) {
            const script = `
        <script>
          (function () {
            const fonts = ${JSON.stringify(fonts)}

            fonts.forEach(font => {
              const f = new FontFace(
                font.name,
                'url(' + font.url + ')',
                {
                  weight: font.weight || 'normal',
                  style: font.style || 'normal'
                }
              )

              f.load().then(loaded => {
                document.fonts.add(loaded)
                document.documentElement.style.setProperty(
                  '--font-loaded-' + font.name,
                  '1'
                )
              })
            })
          })()
        </script>
      `;

            return html.replace("</head>", script + "\n</head>");
        },
    };
}
