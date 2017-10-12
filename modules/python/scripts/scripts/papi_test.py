# encoding: utf8

import os
import sys

reload(sys)
sys.setdefaultencoding('utf-8')

DIR = os.path.abspath(os.path.dirname(__file__))
sys.path.append('%s/gen-py' % DIR)
sys.path.append(DIR)

import argparse
from collections import defaultdict
import tornado
import tornado.ioloop
from tornado.web import RequestHandler, Application
import tornado.httpserver
import time, datetime
import logging
from thrift.transport import TSocket, TTransport
from thrift.protocol import TBinaryProtocol
from papi.HttpProxy import Client
from papi.ttypes import HttpReq, KeyValue, HttpMethod, HttpResp

FORMAT = '%(asctime)-15s  %(message)s'
logging.basicConfig(format=FORMAT, level=logging.INFO)

parser = argparse.ArgumentParser(description="Proxy test program")
parser.add_argument("--server", type=str, default="localhost:5555", help="Thrift ")

ARGS = parser.parse_args()


def get_client(server):
    server, port = server.split(':')
    transport = TSocket.TSocket(server, int(port))
    transport.open()

    trans = TTransport.TFramedTransport(transport)
    protocol = TBinaryProtocol.TBinaryProtocol(trans)
    return Client(protocol)


def run_tests():
    client = get_client(ARGS.server)

    resp = client.Proxy(HttpReq(method=HttpMethod.Get,
                               # url='https://www.baidu.com/s?wd=%E4%BA%BA%E6%B0%91%E5%B8%81%E5%AF%B9%E7%BE%8E%E5%85%83%E6%B1%87%E7%8E%87',
                               # url='http://localhost:8978/',
                               url='http://localhost:8000/',
                               headers=[]))

    from pprint import  pprint
    pprint(resp)


if __name__ == '__main__':
    run_tests()
