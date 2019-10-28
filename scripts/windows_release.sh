#!/usr/bin/env sh

react-native bundle \
  --platform=windows \
  --entry-file index.js \
  --assets-dest windows/rnew/ReactAssets \
  --bundle-output windows/rnew/ReactAssets/index.windows.bundle
  --dev false
