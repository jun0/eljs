#!/bin/bash -eu
convert "$1" -crop 100%x25% +repage split.png

for i in {0..3}; do
    convert split-$i.png -background transparent -gravity west -splice $((i*5))x0 -gravity east -splice $(( (3-i)*5 ))x0 tmp-$i.png
done

convert -append tmp-*.png "$1"

rm -f split-*.png tmp-*.png
