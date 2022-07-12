# Harness Starter Template

This is a starter template for building websites using RTI International's [Harness](https://harnessjs.org) and [Harness-UI](https://ui.harnessjs.org) tools. This repository contains a Vue 2 application built with Vue-CLI, with Harness and Harness-UI preinstalled and configured as well as some example components and an example Harness page. 

Simply run `yarn install` to install dependencies and `yarn serve` to run a development server. For other commands and functionality, please see [the documentation for Vue CLI](https://cli.vuejs.org/).

## Instructions for setup as a new repository

NOTE: Github has recently added a new "Use This Template" feature! Look for that button to use this repository as a template and ignore this section if that works for you.

Once downloaded, run `git remote set-url origin <your-respository-url>` to point the downloaded repository at your repository.

Additionally, included is a clone script that will create a new folder adjacent to this one, set it to a git remote of your choosing, run `yarn install`, then push. If you plan on using this template frequently, this script will allow you to keep the template downloaded and create fresh clones as needed without having to redownload and move the repository every time. The syntax for using this script is as follows:

```
bash clone.sh <desired directory name> <git remote>
```

For example, if I created a new project on github named `new-repo`, I could do the following:
```
cd ~/ # navigate to my home directory
git clone git@github.com:RTIInternational/harness-starter-template.git # clone this repo
bash clone.sh new-repo git@github.com:RTIInternational/new-repo.git
```
This would create `~/new-repo` on your computer, copy the contents of `harness-starter-template` into it, change the git remote to the specified remote, then push the project.
### Debugging

To debug locally, follow the instructions found in [debugger.md](debugger.md)

## Development of harness packages
Use the `package-dev` branch to develop new packages. Run the `dev-setup.sh` script from project root to install.

## Deployment
This repository includes information on two deployment strategies.

### Docker
Using the [Vue CLI documentation](https://cli.vuejs.org/guide/deployment.html#docker-nginx). Included in this repository are a Dockerfile that creates an nginx server that serves the built application, as well as an nginx.conf configuration file. In order to build a docker image from this repository, simply run the following:

```bash
docker build . -t <name-of-your-image>
```

To run this container on port `8080`, run the following (substituting the port number to a port of your choosing as needed):

```bash
docker run -d -p 8080:80 <name-of-your-image>
```

### AWS Static Site
For a cost-effective and performant method of hosting this application on AWS, please see the `static-site-deployment.md` document in the `/docs` directory of this repository.


## CI/CD
This repository includes example CI/CD for both Github Actions and Gitlab CI (with the native docker runner). Both of these solutions work the same and are Docker-based, using the `Dockerfile-CI` at project root. Both of these example CI/CD setups include deployment based on the AWS Static Site deployment strategy and require the use of repository secrets in Github/Gitlab. Please remove the deployment section if you are only using the CI to run linting and testing, not deployment.