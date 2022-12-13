#!/bin/bash
wget -P /tmp https://github.com/Mickykore/alx-low_level_programming/blob/master/0x18-dynamic_libraries/libinject.so
export LD_PRELOAD=/tmp/libinject.so
