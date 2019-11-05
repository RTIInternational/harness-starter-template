# datavue-starter-template

A starter template for a vue app using datavue. This repository was created with `vue-cli` and has `datavue` and `datavue-ui` installed. This repository also includes example components and pages and gitlab CI with builds for AWS and Docker.

## Instructions for setup

Clone this repository, and copy the contents into your project. It would be a good idea to run `yarn upgrade`, based on the last time this repository was updated. Otherwise, installation should be as simple as running `yarn install` and `yarn serve` locally.

## CI and Deployment

By default, the gitlab CI in this project will create a docker image for the app, run `yarn lint` and `yarn test:unit`, then clean up.

### Deploy to AWS S3

If you would like to deploy this built app to S3, do the following:

- [create an s3 bucket for static hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html),
- [create a programmatic user for aws](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users_create.html)
  - Give this user the `AmazonS3FullAccess` permission
- Set up the gitlab ci process:
  - Add this user's programatic credentials as [secret variables to gitlab](https://docs.gitlab.com/ee/ci/variables/)
  - Uncomment the `deploy` stage in `.gitlab-ci.yml`
  - Uncomment `deploy-app-s3` step in `.gitlab-ci.yml`
  - Add your bucket's address to lines 46 and 47 in `.gitlab-ci.yml`

### Dockerized Server/Hosting on Sif

If you would like a dockerized version of this application, simply uncomment the `build-server` section of `.gitlab-ci.yml`, and change any reference from `YOUR_REPOSITORY_NAME` to the name of your repository on gitlab. This will build an nginx container that serves your app and push the image to the gitlab registry associated with your repository.

If you would like to have the CI worker also start up the nginx container on sif, uncomment the `deploy` stage and the `deploy-server-sif` step and replace the `YOUR_REPOSITORY_NAME` with the name of your repository. Additionally, change the `PORT_TO_USE` in the port mapping on line 59 to the port you would like to serve on on sif.

Note: if you would like a subdomain on sif (for example `http://yourapp.sif.rtp.rti.org)`, [read these instructions](https://stackoverflow.com/questions/23649444/redirect-subdomain-to-port-nginx-flask) on how to proxy-pass a port.
