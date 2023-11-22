#!/bin/sh

prettier --write "$@"
eslint --fix "$@"
