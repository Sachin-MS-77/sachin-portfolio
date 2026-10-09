# Sachin M · Cybersecurity Portfolio

A responsive static portfolio featuring LOGFLUX, PARALLAX, PROJECT AXIOM and Guardian Sentinel, with a downloadable resume and minimal red shield identity.

## Live website

https://sachin-portfolio-six-flame.vercel.app

Deployed to Vercel. GitHub automatic deployment requires a Vercel GitHub login connection; CLI deployments are available with `npx vercel --prod --scope vision-df80`.

## Run locally

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. No build step or JavaScript framework is required.

## Deploy with Vercel

Import this repository into Vercel, choose **Other** as the framework preset, leave the build command empty, and use the repository root as the output directory. Alternatively run `npx vercel --prod` from this directory after signing in.

## Update content

- `index.html`: biography, project descriptions and links.
- `style.css`: responsive layout and visual theme.
- `script.js`: email copy interaction with visible fallback.
- `assets/Sachin_M_Resume.pdf`: downloadable resume.
- `assets/security-logo.png`: custom shield logo generated with the built-in image-generation tool.

Application screenshots come from the linked project repositories and use synthetic demonstration data. Project metrics retain their documented scope. Google Fonts is optional; system fonts provide a fallback.
