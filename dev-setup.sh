# create dev-packages dir
mkdir dev-packages
cd dev-packages

# install harness
git clone git@github.com:RTIInternational/harness.git
cd harness
yarn install
cd ../

# install harness-ui
git clone git@github.com:RTIInternational/harness-ui.git
cd harness-ui
yarn install
cd ../