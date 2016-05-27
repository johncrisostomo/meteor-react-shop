#!/bin/bash

cd admin
echo 'Resetting admin app. . .'
meteor reset
cd ..
echo 'Resetting shop app. . .'
cd shop
meteor reset
echo 'Resets done!'
