#!/usr/bin/env bash

TAG=DEV_1.0

REGISTRY=nexus.ks2.com:8082

docker stop ks2
docker rm ks2
docker rmi -f $(docker images | grep ks2 | awk "{print \$3}")
docker rmi -f $(docker images | grep "<none>" | awk "{print \$3}")

docker build -t $REGISTRY/ks2:$TAG .
