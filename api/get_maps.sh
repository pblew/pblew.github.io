#!/bin/bash

rm -f maps.json
rm -f maps.json.gz
rm -f models.json
rm -f models.json.gz
rm -rf landscape/*
rm -rf map/*
rm -rf preview/*
rm -rf model/*
rm -rf tile/*

echo -n "Retrieving map list..."
curl -H "Accept: application/json" -s -S http://localhost:8080/websettlers/data/maps.json | jq . > maps.json
gzip -k9 maps.json
MAPS=$(grep '"id"' maps.json | cut -d '"' -f 4)
echo Done

for map in ${MAPS}
do
	echo -n "Retrieving map ${map}..."
	curl -H "Accept: image/png" -s -S "http://localhost:8080/websettlers/data/preview/${map}.png" -o "preview/${map}.png"
	curl -H "Accept: image/png" -s -S "http://localhost:8080/websettlers/data/landscape/${map}.png" -o "landscape/${map}.png"
	curl -H "Accept: image/png" -s -S "http://localhost:8080/websettlers/data/tile/${map}.png" -o "tile/${map}.png"
	curl -H "Accept: application/json" -s -S "http://localhost:8080/websettlers/data/map/${map}.json" -o "map/${map}.json"
	gzip -k9 "map/${map}.json"
  echo Done
done

echo -n "Retrieving model list..."
curl -H "Accept: application/json" -s -S http://localhost:8080/websettlers/data/models.json | jq . > models.json
gzip -k9 models.json
MODELS=$(grep '"id"' models.json | cut -d '"' -f 4)
echo Done

for model in ${MODELS}
do
  echo -n "Retrieving model ${model}..."
  curl -H "Accept: application/json" -s -S "http://localhost:8080/websettlers/data/model/${model}.json" -o "model/${model}.json"
  gzip -k9 "model/${model}.json"
  echo Done
done
