# encoding: utf8

import argparse
import logging
import os

import tornado
import tornado.httpserver
import tornado.ioloop
from tornado.web import RequestHandler, Application

DIR = os.path.abspath(os.path.dirname(__file__))

FORMAT = '%(asctime)-15s  %(message)s'
logging.basicConfig(format=FORMAT, level=logging.INFO)

parser = argparse.ArgumentParser(description="Frontend for proxy server")
parser.add_argument("--port", type=int, default="7777", help="which port to listen")
parser.add_argument("--mysql", type=str, default="192.168.1.166|3306|liujun|liujun1234", help="localhost|3356|root|")
parser.add_argument("--proxies", type=str, default="localhost:4444,localhost:4444",
                    help="proxy servers, seperated by ,")
parser.add_argument("--debug", type=str, default="true", help="true or false")
parser.add_argument("--redis", type=str, default="192.168.1.251:6379", help="Redis server")

ARGS = parser.parse_args()


class IndexHandler(RequestHandler):
    def get(self, *args, **kwargs):
        self.render('index.html')


class SearchHandler(RequestHandler):
    def get(self, *args, **kwargs):
        pass


class ProxyHandler(RequestHandler):
    def get(self, *args, **kwargs):
        pass


import random


class TestHandler(RequestHandler):
    def get(self, *args, **kwargs):
        chengji = [{
                       'id': i + 100,
                       'columns': [{'type': 'checkbox'},
                                   {'type': 'text',
                                    'data': i + 100,
                                    },
                                   {'type': 'text',
                                    'data': random.randint(1, 100)},
                                   {'type': 'text',
                                    'data': random.randint(50, 90)},
                                   ]
                   } for i in range(10)]

        query = [
            {
                'type': 'select',
                'name': 'banji',
                'label': '班级',
                'options': [

                    {
                        'show': '一班',
                        'val': 'yiban',
                        'selected': False
                    },
                    {
                        'show': '2班',
                        'val': '2ban',
                        'selected': True
                    }

                ]
            },

            {
                'type': 'select',
                'name': 'sex',
                'label': '性别',
                'options': [
                    {
                        'show': 'nan',
                        'val': 'nan',
                        'selected': False
                    },
                    {
                        'show': '女',
                        'val': 'nv',
                        'selected': False
                    },
                ]
            },

            {
                'type': 'text',
                'name': 'name',
                'placehodler': '输入名字查询'

            },

        ]

        data = {
            'query': query,
            'labels': [
                {
                    'sort': '',
                    'show': ''
                },

                {
                    'sort': 'sort asc',
                    'show': '学号',
                    'key': 'xuehao-asc'

                },
                {
                    'sort': 'sort asc',
                    'show': '语文',
                    'key': 'yuwen-dsc'
                },
                {
                    'sort': 'sort desc',
                    'show': '数学',
                    'key': 'shuxue-dsc'
                }

            ],
            'datas': chengji
        }

        self.render('test.html', data=data)


def start_www():
    debug = 'true' in ARGS.debug.lower()
    application = Application(
            [
                (r"/", IndexHandler),
                (r"/s", SearchHandler),
                (r'/p', ProxyHandler),
                (r'/t', TestHandler),
            ],
            debug=debug,
            static_path="%s/static" % DIR,
            template_path="%s/templates" % DIR,
            static_url_prefix="/s/")
    logging.info("listen on : %s, debug: %s", ARGS.port, debug)
    application.listen(ARGS.port)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == '__main__':
    start_www()
