#!/bin/bash

PATH_TO_OLD="${HOME}/Sites/recipes/source/_posts"

for category in drinks appetizers main-dishes kitchen-tips salads \
		       sandwiches desserts baked-goods side-dishes \
		       sauces soups pizza breakfast
do
    cp -v $(grep -l "^categor.*${category}" $PATH_TO_OLD/* ) ${category}/
done
