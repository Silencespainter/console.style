Console = (function(str) {
	const options = {}
	const styles = {
    bold: ["font-weight: bold"],
    italic: ["font-style: italic"],
    underline: ["text-decoration: underline"],
    red: ["color: red"],
    blue: ["color: blue"],
    green: ["color: green"]
	};

	Object.keys(styles).forEach(function(key, index) {
		options[key] = function(str){
			console.log("%c" + str, styles[key].toString());
		}
	});

  return options;
})();