var sax = require('sax'),
    Client = require('.client');

var eveapi = new Client();

module.exports = eveapi;

eveapi.Client = Client;

eveapi.cache = {};
eveapi.cache.Cache = require('./cache/cache');
eveapi.cache.FileCache = require('./cache/file');
eveapi.cache.MemoryCache = require('./cache/memory');