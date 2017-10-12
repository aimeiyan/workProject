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


class DataTableIndex(RequestHandler):
    def get(self, *args, **kwargs):
        self.render('index.html')


class DataTableData(RequestHandler):
    def get(self, *args, **kwargs):

        from pprint import pprint
        print pprint(self.request.arguments)

        print self.get_argument('order[0][dir]', ''), '-' * 100

        data = {
            "draw": 1,
            "recordsTotal": 57,
            "recordsFiltered": 57,
            "data": [
                {
                    "first_name": "Airi",
                    "last_name": "Satou",
                    "position": "Accountant",
                    "office": "Tokyo",
                    "start_date": "28th Nov 08",
                    "salary": "$162,700"
                },
                {
                    "first_name": "Angelica",
                    "last_name": "Ramos",
                    "position": "Chief Executive Officer (CEO)",
                    "office": "London",
                    "start_date": "9th Oct 09",
                    "salary": "$1,200,000"
                },
                {
                    "first_name": "Ashton",
                    "last_name": "Cox",
                    "position": "Junior Technical Author",
                    "office": "San Francisco",
                    "start_date": "12th Jan 09",
                    "salary": "$86,000"
                },
                {
                    "first_name": "Bradley",
                    "last_name": "Greer",
                    "position": "Software Engineer",
                    "office": "London",
                    "start_date": "13th Oct 12",
                    "salary": "$132,000"
                },
                {
                    "first_name": "Brenden",
                    "last_name": "Wagner",
                    "position": "Software Engineer",
                    "office": "San Francisco",
                    "start_date": "7th Jun 11",
                    "salary": "$206,850"
                },
                {
                    "first_name": "Brielle",
                    "last_name": "Williamson",
                    "position": "Integration Specialist",
                    "office": "New York",
                    "start_date": "2nd Dec 12",
                    "salary": "$372,000"
                },
                {
                    "first_name": "Bruno",
                    "last_name": "Nash",
                    "position": "Software Engineer",
                    "office": "London",
                    "start_date": "3rd May 11",
                    "salary": "$163,500"
                },
                {
                    "first_name": "Caesar",
                    "last_name": "Vance",
                    "position": "Pre-Sales Support",
                    "office": "New York",
                    "start_date": "12th Dec 11",
                    "salary": "$106,450"
                },
                {
                    "first_name": "Cara",
                    "last_name": "Stevens",
                    "position": "Sales Assistant",
                    "office": "New York",
                    "start_date": "6th Dec 11",
                    "salary": "$145,600"
                },
                {
                    "first_name": "Cedric",
                    "last_name": "Kelly",
                    "position": "Senior Javascript Developer",
                    "office": "Edinburgh",
                    "start_date": "29th Mar 12",
                    "salary": "$433,060"
                }
            ]
        }

        import random
        random.shuffle(data['data'])

        for d in data['data']:
            d['office'] = ['off1', 'off2', 'off2']


        data['draw'] = self.get_argument('draw', '0')

        self.write(data)


def start_www():
    debug = 'true' in ARGS.debug.lower()
    application = Application(
        [
            (r'/data', DataTableData),
            (r'/', DataTableIndex),
            (r"/test", IndexHandler),
            (r"/s", SearchHandler),
            (r'/p', ProxyHandler),
            (r'/t', TestHandler),
        ],
        debug=debug,
        static_path="%s/static" % DIR,
        template_path="%s/templates" % DIR,
        static_url_prefix="/static/")
    logging.info("listen on : %s, debug: %s", ARGS.port, debug)
    application.listen(ARGS.port)
    tornado.ioloop.IOLoop.instance().start()


if __name__ == '__main__':
    start_www()
