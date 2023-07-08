#!/bin/sh

prettier --write "$@"
eslint --cache --fix "$@"
