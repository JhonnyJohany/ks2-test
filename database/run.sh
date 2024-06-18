#!/usr/bin/env bash

TAG=DEV_1.0
DOCKER_REGISTRY=nexus.ks2.com:8082
CONTAINER_NAME=ks2

docker stop $CONTAINER_NAME
docker rm $CONTAINER_NAME

docker run -d --name $CONTAINER_NAME -p 5555:5432 --restart always $DOCKER_REGISTRY/$CONTAINER_NAME:$TAG;

sleep 20

export PGPASSWORD=sys64738

export PGCLIENTENCODING=UTF8