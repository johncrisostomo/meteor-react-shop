#!/bin/bash
(cd admin; meteor --settings settings-local.json --port=3000) &
(cd shop; MONGO_URL=mongodb://localhost:3001/meteor meteor --settings settings-local.json --port=4000) &
wait
