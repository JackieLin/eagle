###
 * observer
 * @author jackieLin <dashi_lin@163.com>
###
'use strict'

{ hasOwn } = require '../util/common.coffee'
{ arrayMethods, arrayKeys } = require '../util/array.coffee'
Dependence = require './dependence.coffee'
{ def, hasProto } = require '../util/common.coffee'

arrayKeys = Object.getOwnPropertyNames arrayMethods

###
 * interceping target Object or Array
###
protoAugment = (target, src) ->
    target.__proto__ = src


copyAugment = (target, src, keys) ->
    (keys or []).forEach (v, i) ->
        def target, v, src[v]

###
 * overloade data
###
defineReactive = (data, key, value) ->
    dep = new Dependence()
    property = Object.getOwnPropertyDescriptor(data, key)
    getter = property and property.get
    setter = property and property.set

    # genetor value observer
    childOb = observer value
    Object.defineProperty data, key,
        enumerable: true
        configurable: true
        get: () ->
            val = getter.call data if getter
            val = value if not getter
            # console.info key
            # console.info Dependence.target
            if Dependence.target
                dep.depend()
                if childOb
                    childOb.dep.depend()

            val


        set: (newVal) ->
            val = getter.call data if getter
            val = value if not getter
            return if val is newVal
            if setter
                setter.call data, newVal
            else
                value = newVal
            
            childOb = observer newVal
            dep.notify()



class Observer
    constructor: (data) ->
        @.dep = new Dependence()
        @.data = data
        # observer array
        if Array.isArray data
            # add Array hack observer
            args = protoAugment if hasProto
            args = copyAugment if not hasProto
            args data, arrayMethods, arrayKeys

            @.observerArray data
        else
            @.walk data
        
        # set Object __ob__ property
        Object.defineProperty data, '__ob__',
            value: @
            enumerable: false
            writable: true
            configurable: true

    
    walk: (data) ->
        key = Object.keys data
        key.forEach (v, i) ->
            defineReactive data, v, data[v]

    observerArray: (data) ->
        data.forEach (v, i) ->
            observer v

    addVm: (vm) ->

###
 * generate data observer
###
observer = (data, vm) ->
    return if !data or typeof data isnt 'object'
    if hasOwn data, '__ob__' and data.__ob__ instanceof Observer
        ob = data.__ob__
    else
        ob = new Observer data
    
    # add component
    ob.addVm vm if vm
    ob

module.exports = observer