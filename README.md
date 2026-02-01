# T5 Input Method (Redirect Shell)

This repository previously hosted the T5 Input Method website. 
The website has been migrated to a new platform.

**New Website:** [https://t5input.pages.dev](https://t5input.pages.dev)

This repository now serves as a redirection shell to ensure users visiting `t5input.github.io` are automatically redirected to the new domain.

## Redirect Logic
All HTML files in this repository contain a JavaScript redirect script that:
1.  Detects the current path.
2.  Removes `/t5input-main` from the start of the path (if present).
3.  Retains `.html` extensions.
4.  Redirects to the corresponding page on `t5input.pages.dev`.

Example: `t5input.github.io/t5input-main/oinput.html` -> `t5input.pages.dev/oinput.html`
