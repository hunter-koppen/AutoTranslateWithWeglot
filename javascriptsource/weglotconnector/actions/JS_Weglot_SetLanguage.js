// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} code - 2 letter code of the language (e.g. "en")
 * @returns {Promise.<void>}
 */
export async function JS_Weglot_SetLanguage(code) {
	// BEGIN USER CODE
	if (typeof Weglot === "object") {
		Weglot.switchTo(code.toLowerCase());
	} else {
		console.error("Weglot not initialized")
	}
	// END USER CODE
}