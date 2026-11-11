# gc-phytoento-sensing-ai-lab.github.io

Static lab website hosted on GitHub Pages.

## Security policies

Every HTML page declares a Content Security Policy before resource loading and
`strict-origin-when-cross-origin` referrer behavior. The CSP allows local scripts,
styles and images, plus Google Fonts stylesheets and font files. It blocks inline
scripts, inline styles, plugins, frames, network requests from scripts, forms and
base URL overrides. Review the policy when adding resources or features.

GitHub Pages does not support custom HTTP response headers. Meta policies improve
browser protection but do not resolve scanner findings that require headers.
In particular, `frame-ancestors` and `X-Content-Type-Options` cannot be supplied
through HTML meta tags. A `_headers` file would not configure GitHub Pages.

If the site moves to hosting with header control, or uses a configurable proxy
on a custom domain, configure these response headers:

```text
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self'; connect-src 'none'; object-src 'none'; base-uri 'none'; form-action 'none'; frame-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests
Referrer-Policy: strict-origin-when-cross-origin
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
```

Retain HTTPS and the host's existing HSTS protection. HSTS preload and cross-origin
isolation are not required for this static site. All JavaScript is local; SRI is
not needed just to improve a scanner score.

After deployment, verify response headers and browser console output on each page,
including font loading and mobile navigation, then repeat the security scan.

References: [MDN CSP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy),
[MDN frame-ancestors](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/frame-ancestors),
[GitHub Pages header limitation](https://github.com/orgs/community/discussions/32112).
