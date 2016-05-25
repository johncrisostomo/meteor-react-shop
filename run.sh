#!/bin/bash
(cd admin; meteor --port=3000) & 
(cd shop; MONGO_URL="mongodb://127.0.0.1:3001/meteor" meteor --port=4000) & 
wait
