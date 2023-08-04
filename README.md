## Auto Translate (with Weglot)

This module helps with integrating with Weglot, an advanced on-the-fly translation tool based on AI. You can learn more about Weglot and its features on their website: [https://www.weglot.com/](https://www.weglot.com/)

The biggest plus of this module is that you don't need to do translations in the modeler anymore but can be managed externally.

## Features

- *Automatic Translation*: Any new static or dynamic texts are automatically translated.
- *Fine-tuning Capabilities*: Easily tweak and refine automatically translated texts in the Weglot backend to ensure accuracy and quality.
- *Widget Control*: The module comes with a convenient widget that gives you control over when and where to load Weglot.
- *Exclusion Options*: Customize your translation preferences by excluding specific elements from the auto-translation process.

## Weglot

Before using this module, you need to sign up for a Weglot account. Weglot offers a free tier that allows translation of up to 2000 words. Check out their pricing details here: [https://www.weglot.com/pricing](https://www.weglot.com/pricing)

**Important Weglot Setting:**
In order to make Weglot work with a Mendix website, you must add a dynamic element in Weglot. Because Mendix is an one-page app that dynamically loads code we need to add a setting in Weglot, one you have made an account and logged in to Weglot go to the App Settings in the menu and a dynamic element with the selector "body".

## Usage

1. **Create an Account**: First, head over to the Weglot website and sign up to obtain your API Key.
2. **Add the Weglot Loader Widget**: Once you have your API Key, place the Weglot Loader widget on all the layouts where you want automatic translation enabled. Set the `API Key` in the widget configuration. After the initial load, Weglot will remain active (unless configured to unload in the widget).
3. **Exclude Elements (Optional)**: If you have specific elements you wish to exclude from auto-translation, you can do so by specifying their CSS selectors. Weglot will automatically ignore the text inside these selected elements.

## Language Loading

Choose your preferred language loading method in the Weglot Loader widget. You have three options:

- **Default Weglot**: Loads the original language set in the Weglot dashboard.
- **Automatic Language Detection**: Automatically selects a language for translation based on the user's browser settings. Visitors will see content translated into their preferred language without manual intervention.
- **Manual Language Selection**: Provides more control over the language loading process, allowing you to customize the translation experience. For example, you can retrieve a user's language preference from their account settings and use that as the language to load.

## Custom Language Switcher

If you want to customize the language switcher or use your own, you can choose to hide the default language switcher provided by Weglot. You can utilize the provided JavaScript actions to handle language switching.

## Issues, suggestions and feature requests
https://github.com/hunter-koppen/AutoTranslateWithWeglot/issues
