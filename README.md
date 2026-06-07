# Visual Timer

A simple, child-friendly visual timer web app. A filled circle gradually empties as time counts down, designed to be easy for young children to understand at a glance.

## Features

- Preset durations: 1, 2, 5, 10, 15 minutes, or a custom time
- Selectable colours with a custom colour picker
- Toggleable time display
- Gentle chord sound on completion
- Responsive layout for iPad and phone
- Works entirely in the browser — no backend required

## Running locally

Open `index.html` directly in any browser.

## Running with Docker/Podman

```bash
podman build -t visual-timer -f Containerfile .
podman run -p 8080:8080 visual-timer
```

Then open [http://localhost:8080](http://localhost:8080).

The container runs as a non-root user on port 8080 using `nginx-unprivileged`.

## Container image

A pre-built image is available on Docker Hub:

```bash
podman run -p 8080:8080 docker.io/jaedolph/visual-timer:latest
```

## CI/CD

Pushes to `main` automatically build and push the image to `docker.io/jaedolph/visual-timer:latest` via GitHub Actions.

Two repository secrets are required:

| Secret | Description |
|---|---|
| `DOCKERHUB_USERNAME` | Your Docker Hub username |
| `DOCKERHUB_TOKEN` | A Docker Hub access token |
