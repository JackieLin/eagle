###
 * parse event
 * @author jackieLin <dashi_lin@163.com>
###

'use strict'

onReg = /e-on:([^=]+)/
method = /(\w+)\((.*)\)/

###
 * filter method and args
###
filter = (string) ->
    result = {}
    exp = string.match method

    if exp and exp.length is 3
        result =
            method: "events.#{ exp[1] }"
            args: exp[2]
    else
        result =
            method: "events.#{ string }"
    
    result


###
 * generator closure
###
generator = (method, args) ->
    "(function() {var args = _argsToArray(arguments);var self = this;return #{ geneEvent(method) };}).call(this, #{ args })"

###
 * generator event
###
geneEvent = (method) ->
    "function(event) { var newArgs = args.slice(); newArgs.unshift(event); #{ method }.apply(self, newArgs) }"


exports.parseEvent = (eventName, value) ->
    result = null
    exp = eventName.match onReg
    params = filter value
    if exp and exp.length is 2
        result = "'ev-#{ exp[1] }': #{ params.method }" if not params.args
        result = "'ev-#{ exp[1] }': #{ generator(params.method, params.args) }" if params.args
    
    # console.info generator(params.method, params.args)
    result