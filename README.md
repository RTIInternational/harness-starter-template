# harness-starter-template

A starter template for a vue app using harness. This repository was created with `vue-cli` and has `harness` and `harness-ui` installed. This repository also includes example components and pages and gitlab CI with builds for AWS and Docker.

## Instructions for setup

Included is a clone script that will create a new folder adjacent to this one, set it to a git remote of your choosing, run `yarn install`, then push. The syntax for using this script is as follows:

```
bash clone.sh <desired directory name> <git remote>
```

For example, if I created a new project in gitlab named `new-repo`, I could do the following:
```
cd ~/ # navigate to my home directory
git clone git@github.com:RTIInternational/harness-starter-template.git # clone this repo
bash clone.sh new-repo git@gitlab.rtp.rti.org:cds/new-repo.git
```
This would create `~/new-repo` on your computer, copy the contents of `harness-starter-template` into it, change the git remote to the specified remote, then push the project.

After running this script, you simply need to run `yarn install` to install dependencies, and you are good to go.

### Debugging

To debug locally, follow the instructions found in [debugger.md](debugger.md)

## CI and Deployment

By default, the gitlab CI in this project will create a docker image for the app, run `yarn lint` and `yarn test:unit`, then clean up.

## Development of harness packages
Use the `package-dev` branch to develop new packages. Run the `dev-setup.sh` script from project root to install.