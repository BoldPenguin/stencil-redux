#!/bin/bash
echo "Running semantic-release..."
npx semantic-release

if [ $1 = "release" ]
then
  echo "Pushing release commit(s) back to staging"
  git push origin HEAD:staging
fi
