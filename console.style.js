Console = (function(value) {
  let icon = "";
  const options = {};
	const fontFamily = "font-family: Arial";
	const fontFamilyHeading = "font-family: Georgia, serif, sans-serif";
  const styles = {
    bold: ["font-weight: bold", fontFamily],
    italic: ["font-style: italic", fontFamily],
    underline: ["text-decoration: underline", fontFamily],
    uppercase: ["text-transform: uppercase", fontFamily],
    strikethrough: ["text-decoration: line-through", fontFamily],
    red: ["color: red", fontFamily],
    blue: ["color: blue", fontFamily],
    green: ["color: green", fontFamily],
    success: [
      "background-color: LightGreen",
      "color: green",
			"padding:4px 8px",
			"border-radius:2px",
      fontFamily
    ],
    info: [
      "background-color: LightSkyBlue",
      "color: darkblue",
      "padding:4px 8px",
      "border-radius:2px",
      fontFamily
    ],
    warn: [
      "background-color: yellow",
      "color:  black",
      "padding:4px 8px",
      "border-radius:2px",
      fontFamily
    ],
    error: [
      "background-color: red",
      "color: white",
      "padding:4px 8px",
      "border-radius:2px",
      fontFamily
    ],
		h1: [
			"font-size: 24px",
			"font-weight: bold",
      fontFamilyHeading
		],
		h2: [
			"font-size: 20px",
			"font-weight: bold",
      fontFamilyHeading
		],
		h3: [
			"font-size: 16px",
			"font-weight: bold",
      fontFamilyHeading
		],
		poo: [
      "background-color: wheat",
      "border: 2px solid brown",
      "color: brown",
      "padding:4px 8px",
			"border-radius:2px",
			"font-size: 20px",
      fontFamily
		],
		gandalf: [
      "background-color: PowderBlue",
      "border: 2px solid darkblue",
      "color: darkblue",
      "padding:4px 8px",
			"border-radius:2px",
			"font-size: 20px",
      fontFamily
		],
		wonderwoman: [
			"background-color: white",
			"border: 1px solid purple",
			"color: purple",
			"padding:4px 16px 4px 8px",
			"border-radius:2px 10px 10px 2px",
			"font-size: 20px",
      fontFamily
		]
  };

  Object.keys(styles).forEach(function(key, index) {
    options[key] = function(value) {
      switch (key) {
        case "success":
          icon = "💚 ";
          break;
        case "info":
          icon = "💡 ";
          break;
        case "warning":
          icon = "🔔 ";
          break;
        case "error":
          icon = "💣 ";
          break;
        case "poo":
          icon = "💩 ";
					break;
				case "gandalf":
					icon = "🧙 ";
					break;
				case "wonderwoman":
					icon = "🦸‍ "
					break;
        default:
          icon = " ";
      }
      console.log("%c" + icon + value, styles[key].join(";"));
    };
  });

  return options;
})();
