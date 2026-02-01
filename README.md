# T5 Input Method (Redirect Shell)

This repository previously hosted the T5 Input Method website. 
The website has been migrated to a new platform.

**New Website:** [https://t5input.pages.dev](https://t5input.pages.dev)

This repository now serves as a redirection shell to ensure users visiting `t5input.github.io` are automatically redirected to the new domain.

## Redirect Logic
All HTML files in this repository contain:
1.  **JavaScript Redirect:** Detects path, removes `/t5input-main`, retains `.html`, and redirects.
2.  **Meta Refresh:** `<meta http-equiv="refresh" ...>` for broad compatibility.
3.  **Canonical Link:** `<link rel="canonical" ...>` to help search engines index the new site.

Example: `t5input.github.io/t5input-main/oinput.html` -> `t5input.pages.dev/oinput.html`
