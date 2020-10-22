#!/bin/bash

rm -f maps
rm -rf map/*
rm -rf preview/*

echo -n Retrieving map list...
curl -H "Accept: application/json" -s -S http://localhost:8080/websettlers/data/map | jq . > maps
MAPS=$(grep '"id"' maps | cut -d '"' -f 4)
echo Done

for map in ${MAPS}
do
	echo -n Retrieving map ${map}...
	curl -H "Accept: image/png" -s -S http://localhost:8080/websettlers/data/preview/${map} -o preview/${map}
	curl -H "Accept: application/json" -s -S http://localhost:8080/websettlers/data/map/${map} -o map/${map}
  echo Done
done
