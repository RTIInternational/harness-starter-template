# this is the node:10 image with python, pip, aws-cli and vue-cli installed
FROM alexharding/node_python
COPY ./ /daqs
WORKDIR /daqs
RUN yarn install
RUN yarn run build