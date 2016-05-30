#!/bin/bash
export MONGO_URL=mongodb://localhost:27017/test_shop
(cd admin; meteor --port=3000 --settings settings-local.json) &
(cd shop; meteor --port=4000 --settings settings-local.json) &
wait
