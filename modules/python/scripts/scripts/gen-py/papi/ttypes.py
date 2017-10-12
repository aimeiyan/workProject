#
# Autogenerated by Thrift Compiler (0.9.1)
#
# DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
#
#  options string: py
#

from thrift.Thrift import TType, TMessageType, TException, TApplicationException

from thrift.transport import TTransport
from thrift.protocol import TBinaryProtocol, TProtocol
try:
  from thrift.protocol import fastbinary
except:
  fastbinary = None


class HttpMethod:
  Get = 1
  Post = 2
  PUT = 3
  DELETE = 4

  _VALUES_TO_NAMES = {
    1: "Get",
    2: "Post",
    3: "PUT",
    4: "DELETE",
  }

  _NAMES_TO_VALUES = {
    "Get": 1,
    "Post": 2,
    "PUT": 3,
    "DELETE": 4,
  }


class KeyValue:
  """
  Attributes:
   - key
   - value
  """

  thrift_spec = (
    None, # 0
    (1, TType.STRING, 'key', None, None, ), # 1
    (2, TType.STRING, 'value', None, None, ), # 2
  )

  def __init__(self, key=None, value=None,):
    self.key = key
    self.value = value

  def read(self, iprot):
    if iprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None and fastbinary is not None:
      fastbinary.decode_binary(self, iprot.trans, (self.__class__, self.thrift_spec))
      return
    iprot.readStructBegin()
    while True:
      (fname, ftype, fid) = iprot.readFieldBegin()
      if ftype == TType.STOP:
        break
      if fid == 1:
        if ftype == TType.STRING:
          self.key = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 2:
        if ftype == TType.STRING:
          self.value = iprot.readString();
        else:
          iprot.skip(ftype)
      else:
        iprot.skip(ftype)
      iprot.readFieldEnd()
    iprot.readStructEnd()

  def write(self, oprot):
    if oprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and self.thrift_spec is not None and fastbinary is not None:
      oprot.trans.write(fastbinary.encode_binary(self, (self.__class__, self.thrift_spec)))
      return
    oprot.writeStructBegin('KeyValue')
    if self.key is not None:
      oprot.writeFieldBegin('key', TType.STRING, 1)
      oprot.writeString(self.key)
      oprot.writeFieldEnd()
    if self.value is not None:
      oprot.writeFieldBegin('value', TType.STRING, 2)
      oprot.writeString(self.value)
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    if self.key is None:
      raise TProtocol.TProtocolException(message='Required field key is unset!')
    if self.value is None:
      raise TProtocol.TProtocolException(message='Required field value is unset!')
    return


  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)

class HttpReq:
  """
  Attributes:
   - method
   - url
   - headers
   - body
  """

  thrift_spec = (
    None, # 0
    (1, TType.I32, 'method', None,     1, ), # 1
    (2, TType.STRING, 'url', None, None, ), # 2
    (3, TType.LIST, 'headers', (TType.STRUCT,(KeyValue, KeyValue.thrift_spec)), None, ), # 3
    (4, TType.STRING, 'body', None, None, ), # 4
  )

  def __init__(self, method=thrift_spec[1][4], url=None, headers=None, body=None,):
    self.method = method
    self.url = url
    self.headers = headers
    self.body = body

  def read(self, iprot):
    if iprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None and fastbinary is not None:
      fastbinary.decode_binary(self, iprot.trans, (self.__class__, self.thrift_spec))
      return
    iprot.readStructBegin()
    while True:
      (fname, ftype, fid) = iprot.readFieldBegin()
      if ftype == TType.STOP:
        break
      if fid == 1:
        if ftype == TType.I32:
          self.method = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 2:
        if ftype == TType.STRING:
          self.url = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 3:
        if ftype == TType.LIST:
          self.headers = []
          (_etype3, _size0) = iprot.readListBegin()
          for _i4 in xrange(_size0):
            _elem5 = KeyValue()
            _elem5.read(iprot)
            self.headers.append(_elem5)
          iprot.readListEnd()
        else:
          iprot.skip(ftype)
      elif fid == 4:
        if ftype == TType.STRING:
          self.body = iprot.readString();
        else:
          iprot.skip(ftype)
      else:
        iprot.skip(ftype)
      iprot.readFieldEnd()
    iprot.readStructEnd()

  def write(self, oprot):
    if oprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and self.thrift_spec is not None and fastbinary is not None:
      oprot.trans.write(fastbinary.encode_binary(self, (self.__class__, self.thrift_spec)))
      return
    oprot.writeStructBegin('HttpReq')
    if self.method is not None:
      oprot.writeFieldBegin('method', TType.I32, 1)
      oprot.writeI32(self.method)
      oprot.writeFieldEnd()
    if self.url is not None:
      oprot.writeFieldBegin('url', TType.STRING, 2)
      oprot.writeString(self.url)
      oprot.writeFieldEnd()
    if self.headers is not None:
      oprot.writeFieldBegin('headers', TType.LIST, 3)
      oprot.writeListBegin(TType.STRUCT, len(self.headers))
      for iter6 in self.headers:
        iter6.write(oprot)
      oprot.writeListEnd()
      oprot.writeFieldEnd()
    if self.body is not None:
      oprot.writeFieldBegin('body', TType.STRING, 4)
      oprot.writeString(self.body)
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    if self.url is None:
      raise TProtocol.TProtocolException(message='Required field url is unset!')
    return


  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)

class HttpResp:
  """
  Attributes:
   - httpStatus
   - headers
   - body
   - errorMsg
   - status
  """

  thrift_spec = (
    None, # 0
    (1, TType.I32, 'httpStatus', None, None, ), # 1
    (2, TType.LIST, 'headers', (TType.STRUCT,(KeyValue, KeyValue.thrift_spec)), None, ), # 2
    (3, TType.STRING, 'body', None, None, ), # 3
    (4, TType.STRING, 'errorMsg', None, "", ), # 4
    (5, TType.I32, 'status', None, 0, ), # 5
  )

  def __init__(self, httpStatus=None, headers=None, body=None, errorMsg=thrift_spec[4][4], status=thrift_spec[5][4],):
    self.httpStatus = httpStatus
    self.headers = headers
    self.body = body
    self.errorMsg = errorMsg
    self.status = status

  def read(self, iprot):
    if iprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and isinstance(iprot.trans, TTransport.CReadableTransport) and self.thrift_spec is not None and fastbinary is not None:
      fastbinary.decode_binary(self, iprot.trans, (self.__class__, self.thrift_spec))
      return
    iprot.readStructBegin()
    while True:
      (fname, ftype, fid) = iprot.readFieldBegin()
      if ftype == TType.STOP:
        break
      if fid == 1:
        if ftype == TType.I32:
          self.httpStatus = iprot.readI32();
        else:
          iprot.skip(ftype)
      elif fid == 2:
        if ftype == TType.LIST:
          self.headers = []
          (_etype10, _size7) = iprot.readListBegin()
          for _i11 in xrange(_size7):
            _elem12 = KeyValue()
            _elem12.read(iprot)
            self.headers.append(_elem12)
          iprot.readListEnd()
        else:
          iprot.skip(ftype)
      elif fid == 3:
        if ftype == TType.STRING:
          self.body = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 4:
        if ftype == TType.STRING:
          self.errorMsg = iprot.readString();
        else:
          iprot.skip(ftype)
      elif fid == 5:
        if ftype == TType.I32:
          self.status = iprot.readI32();
        else:
          iprot.skip(ftype)
      else:
        iprot.skip(ftype)
      iprot.readFieldEnd()
    iprot.readStructEnd()

  def write(self, oprot):
    if oprot.__class__ == TBinaryProtocol.TBinaryProtocolAccelerated and self.thrift_spec is not None and fastbinary is not None:
      oprot.trans.write(fastbinary.encode_binary(self, (self.__class__, self.thrift_spec)))
      return
    oprot.writeStructBegin('HttpResp')
    if self.httpStatus is not None:
      oprot.writeFieldBegin('httpStatus', TType.I32, 1)
      oprot.writeI32(self.httpStatus)
      oprot.writeFieldEnd()
    if self.headers is not None:
      oprot.writeFieldBegin('headers', TType.LIST, 2)
      oprot.writeListBegin(TType.STRUCT, len(self.headers))
      for iter13 in self.headers:
        iter13.write(oprot)
      oprot.writeListEnd()
      oprot.writeFieldEnd()
    if self.body is not None:
      oprot.writeFieldBegin('body', TType.STRING, 3)
      oprot.writeString(self.body)
      oprot.writeFieldEnd()
    if self.errorMsg is not None:
      oprot.writeFieldBegin('errorMsg', TType.STRING, 4)
      oprot.writeString(self.errorMsg)
      oprot.writeFieldEnd()
    if self.status is not None:
      oprot.writeFieldBegin('status', TType.I32, 5)
      oprot.writeI32(self.status)
      oprot.writeFieldEnd()
    oprot.writeFieldStop()
    oprot.writeStructEnd()

  def validate(self):
    if self.body is None:
      raise TProtocol.TProtocolException(message='Required field body is unset!')
    return


  def __repr__(self):
    L = ['%s=%r' % (key, value)
      for key, value in self.__dict__.iteritems()]
    return '%s(%s)' % (self.__class__.__name__, ', '.join(L))

  def __eq__(self, other):
    return isinstance(other, self.__class__) and self.__dict__ == other.__dict__

  def __ne__(self, other):
    return not (self == other)