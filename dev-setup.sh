# create dev-packages dir
mkdir dev-packages
cd dev-packages

# install datavue
git clone git@cds-mallard.rtp.rti.org:datavue/datavue.git
cd datavue
yarn install
cd ../

# install datavue-ui
git clone git@cds-mallard.rtp.rti.org:datavue/datavue-ui.git
cd datavue-ui
yarn install
cd ../