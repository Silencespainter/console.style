const FORMAT = {
    bold: "font-weight: bold",
    italic: "font-style: italic",
    underline: "text-decoration: underline",
    uppercase: "text-transform: uppercase",
    strikethrough: "text-decoration: line-through",
    fontDefault: "font-family: Console, Arial, sans-serif",
    fontHeading: "font-family: Georgia, serif, sans-serif",
    size: "font-size: 14px",
    sizeM: "font-size: 16px",
    sizeL: "font-size: 24px",
    sizeXL: "font-size: 32px",
    borderRadius: "border-radius: 2px",
    padding: "padding:4px 8px",
    border: "border: 1px solid currentColor",
};

const COLOR = {
    info: "blue",
    infoDark: "darkblue",
    infoLight: "LightSkyBlue",
    warning: "yellow",
    warningDark: "orange",
    error: "red",
    errorDark: "DarkRed",
    success: "green",
    successDark: "DarkGreen",
    successLight: "LightGreen",
    white: "#FFF",
    black: "#333",
    brown: "wheat",
    brownDark: "brown",
    purple: "purple",
};

const GLOBAL = {
    format: `${FORMAT.fontDefault}; ${FORMAT.size};`,
    status: `${FORMAT.borderRadius}; ${FORMAT.fontDefault}; ${FORMAT.padding}; ${FORMAT.sizeM};`,
    nerd: `${FORMAT.borderRadius}; ${FORMAT.fontDefault}; ${FORMAT.padding}; ${FORMAT.sizeM};`,

};

const STYLES = {
    bold: [FORMAT.bold, `${GLOBAL.format}`],
    italic: [FORMAT.italic, `${GLOBAL.format}`],
    underline: [FORMAT.underline, `${GLOBAL.format}`],
    uppercase: [FORMAT.uppercase, `${GLOBAL.format}`],
    strikethrough: [FORMAT.strikethrough, `${GLOBAL.format}`],
    red: [`color: ${COLOR.error}`, `${GLOBAL.format}`],
    blue: [`color: ${COLOR.info}`, `${GLOBAL.format}`],
    green: [`color: ${COLOR.success}`, `${GLOBAL.format}`],
    success: [`background-color: ${COLOR.successLight}`, `color: ${COLOR.success}`,  `${GLOBAL.status}`],
    info: [`background-color: ${COLOR.infoLight}`, `color: ${COLOR.infoDark}`, `${GLOBAL.status}`   ],
    warning: [`background-color: ${COLOR.warning}`, `color: ${COLOR.black}`, `${GLOBAL.status}`  ],
    error: [`background-color: ${COLOR.error}`, `color: ${COLOR.white}`, `${GLOBAL.status}`  ],
    h1: [FORMAT.sizeXL, FORMAT.bold, FORMAT.fontHeading],
    h2: [FORMAT.sizeL, FORMAT.bold, FORMAT.fontHeading],
    h3: [FORMAT.sizeM, FORMAT.bold, FORMAT.fontHeading],
    poo: [`background-color: ${COLOR.brown}`, `color: ${COLOR.brownDark}`, `${GLOBAL.nerd}`],
    gandalf: [`background-color: ${COLOR.infoLight}`, `color: ${COLOR.infoDark}`, `${GLOBAL.nerd}`],
    wonderwoman: [`background-color: ${COLOR.purple}`, `color: ${COLOR.white}`, `${GLOBAL.nerd}`],
};

const ICON = {
    success: `💚 `,
    info: `💡 `,
    warning: `🔔 `,
    error: `💣 `,
    poo: `💩 `,
    gandalf: `🧙 `,
    wonderwoman: `🦸‍ `,
};

const Console = {};

Object.keys(STYLES).forEach((key) => {
    Console[key] = function (content) {
        const _icon = ICON[key] || ` `;
        console.log(`%c` + _icon + content, STYLES[key].join(`;`));
    };
});

export default Console;
