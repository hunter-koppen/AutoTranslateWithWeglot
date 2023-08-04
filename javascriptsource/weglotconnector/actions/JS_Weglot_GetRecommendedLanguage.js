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
 * Javascript action to check which Language Weglot recommends based on the user's browser settings.
 * @returns {Promise.<string>}
 */
export async function JS_Weglot_GetRecommendedLanguage() {
	// BEGIN USER CODE
	if (typeof Weglot === "object") {
		return Weglot.getBestAvailableLanguage();
	} else {
		console.error("Weglot not initialized")
		return;
	}
	// END USER CODE
}
