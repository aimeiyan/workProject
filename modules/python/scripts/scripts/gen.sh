#!/usr/bin/env bash


#thrift -gen go:thrift_import=thrift scripts/api.thrift

rm -rf gen-go papi
thrift -gen go scripts/papi.thrift

mv gen-go/papi .
rm -rf gen-go


(cd scripts && thrift -gen py papi.thrift)