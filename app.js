const allBtn = document.querySelectorAll(".btn");
let resultBox = document.getElementById("resultBox");
const equal = document.getElementById("equal");
const clearAllBtn = document.getElementById("clear");
const clearOneByOne = document.getElementById("del");
const plusSub = document.getElementById("plusSub");

allBtn.forEach((item) => {
	item.addEventListener("click", function (e) {
		let itemValue = e.target.value;
		if (itemValue == "X") {
			itemValue = "*";
		}

		if (resultBox.value.length < 18) {
			resultBox.value += itemValue;
			equal.addEventListener("click", () => {
				let finalResult = eval(resultBox.value);
				let finalResultStr = String(finalResult);
				if (finalResultStr.includes(".")) {
					resultBox.value = finalResult.toFixed(2);
				} else {
					resultBox.value = finalResult;
				}
			});
		}
	});
});

clearAllBtn.addEventListener("click", () => {
	resultBox.value = "";
});

clearOneByOne.addEventListener("click", () => {
	let resultBoxValue = resultBox.value;
	let cuttingValue = resultBoxValue.slice(0, resultBoxValue.length - 1);
	resultBox.value = cuttingValue;
});
