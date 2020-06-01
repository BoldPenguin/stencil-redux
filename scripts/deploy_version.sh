#!/bin/bash
npx semantic-release

if [ $1 = "release" ]
then
  echo "Pushing versioning commits back to staging"
  git push origin HEAD:staging
fi
