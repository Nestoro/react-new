#!/usr/bin/env sh

npm run android:release  || exit $?
npm run ios:release      || exit $?
npm run web:release      || exit $?
