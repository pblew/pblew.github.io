#!/bin/bash

find . -name '*.map' -exec rm -f {} \;
find . -name '*.bundle.js' -exec sed -i '/\/\/# sourceMappingURL=/d' {} \;
find . -name '*.bundle.css' -exec sed -i '/\/*# sourceMappingURL=/d' {} \;
sed -i '/\.map":/d' manifest.json
