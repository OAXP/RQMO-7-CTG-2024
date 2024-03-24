# RQMO-7-CTG-2024

This repository contains the website made for RQMO by the team #7 during the Morgan Stanley Code-To-Give Hackathon.

## Prerequisites

Before running this code, please make sure you have the following dependencies installed:

- Node.js (version 18.0 or above)
- MongoDB
- Docker
- Redis

## Usage

To use this project, follow these steps:

1. Clone the repository or download the code files.
2. Set up GitHub Pages with the build and deployment source set to GitHub Actions.
3. Go to Actions > General and grant the workflow permissions to read repository contents and packages.
4. Update the step called "Set Git user name and email" in the `.github/workflows/deployment.yml` file with the correct credentials associated with your GitHub account to trigger the deployment
5. Modify the homepage attribute in the `frontend/package.json`with the url provided by Github on pages

## Project Structure

This project is structured as follows:

- `frontend` folder: contains the static website built with the Angular framework.
- `backend` folder: contains the dynamic server built with Express.
- `.github` folder: contains the workflows to automatically deploy the web app using GitHub Actions.

## Additional Notes

- For more details on running and testing the project locally, refer to the README files in the `frontend` and `backend` folders.
- The workflows are automatically executed before merging a branch into maih and during pull requests.
    - The tag is automatically bumped
    - The backend and frontend are automatically deployed

### Authors

- Adlane Oussaada
- Amira Tamakloe
- Anas Barbouch
- Andreea Maria Ghioltan
- Andy Tran
- Anh Pham
- Faneva Rakotoarivony
- Louis Xu
- Ryan Ait Abdesselam
