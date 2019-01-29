#!/bin/bash

set -e

# Copied from https://github.com/ef4/ember-auto-import/blob/9e48e9ec9639ce05ca2a2688581ea41fdd627c5c/scripts/link-them.sh

# All packages get a node_modules directory and a .bin link
for package in "01-basic-app" "02-app-that-excludes-mirage" "03-app-that-supplies-pretender"; do
    mkdir -p ./test-projects/$package/node_modules
    pushd ./test-projects/$package/node_modules > /dev/null
    rm -rf .bin
    ln -s ../../../node_modules/.bin .bin
    popd > /dev/null
done

# These packages get to depend on ember-cli-mirage
for package in "01-basic-app" "02-app-that-excludes-mirage" "03-app-that-supplies-pretender"; do
    pushd ./test-projects/$package/node_modules > /dev/null
    rm -rf ./ember-cli-mirage
    ln -s ../../.. ./ember-cli-mirage
    popd > /dev/null
done

# 03-app-that-supplies-pretender has its own version of pretender
pushd ./test-projects/03-app-that-supplies-pretender > /dev/null
mkdir -p ./node_modules
rm -rf ./node_modules/pretender
cp -r ./supplied_node_modules/pretender ./node_modules/pretender
popd > /dev/null
