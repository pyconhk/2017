#!/usr/bin/env bash

if [ "$TRAVIS_PULL_REQUEST" != "false" ]; then
    exit 0
fi

if [ "$TRAVIS_BRANCH" != "master" ]; then
    exit 0
fi

rev=$(git rev-parse --short HEAD)

cd public

rm .gitignore

git init
git config user.name "Travis CI Auto Build"
git config user.email "tony@opensource.hk"

git remote add origin "https://$GITHUB_TOKEN@github.com/$TRAVIS_REPO_SLUG.git"
git fetch && git reset origin/gh-pages

touch .

git checkout -- README.md
# git checkout -- CNAME

git add -A .
git commit -m "Build of ${rev}"
git push -q origin HEAD:gh-pages