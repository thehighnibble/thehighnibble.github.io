#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn docs:build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
echo 'thehighnibble.com' > CNAME

git init
git add -A
git commit -m 'deploy'

git remote add origin https://github.com/thehighnibble/thehighnibble.github.io.git
git remote -v

# if you are deploying to https://<USERNAME>.github.io
git push -f origin master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -