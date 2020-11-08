#!/bin/bash

rm -f maps.json
rm -rf map/*
rm -rf preview/*

echo -n Retrieving map list...
curl -H "Accept: application/json" -s -S http://localhost:8080/websettlers/data/maps.json | jq . > maps.json
gzip -k9 maps.json
MAPS=$(grep '"id"' maps.json | cut -d '"' -f 4)
echo Done

for map in ${MAPS}
do
	echo -n Retrieving map ${map}...
	curl -H "Accept: image/png" -s -S http://localhost:8080/websettlers/data/preview/${map}.png -o preview/${map}.png
	curl -H "Accept: application/json" -s -S http://localhost:8080/websettlers/data/map/${map}.json -o map/${map}.json
	gzip -k9 map/${map}.json
  echo Done
done
