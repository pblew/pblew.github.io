#!/bin/bash

#echo -n Removing source maps...
#find . -name '*.map' -exec rm -f {} \;
#find . -name '*.bundle.js' -exec sed -i '/\/\/# sourceMappingURL=/d' {} \;
#find . -name '*.bundle.css' -exec sed -i '/\/*# sourceMappingURL=/d' {} \;
#sed -i '/\.map":/d' manifest.json
#echo Done

echo -n Compressing assets...
find . -name '*.js' -exec gzip -k9 {} \;
find . -name '*.css' -exec gzip -k9 {} \;
echo Done
