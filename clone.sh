#!/bin/bash
mkdir ../$1
cp -r ./ ../$1
cd ../$1
git remote set-url origin $2
git push

