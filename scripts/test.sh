#!/bin/bash

./scripts/parallel --tag <<EOF
cd test-projects/01-basic-app && yarn test:fastboot
cd test-projects/01-basic-app && yarn test
cd test-projects/02-app-that-excludes-mirage && yarn test
cd test-projects/03-app-that-uses-make-server && yarn test
EOF
