###
 * watcher
 * @author jackieLin <dashi_lin@163.com>
###
'use strict'
Dependence = require './dependence.coffee'

uid = 0

module.exports = class Watcher
    constructor: (@vm, @render, @cb) ->
        @.id = ++uid
        isFun = typeof @.render is 'function'
        @.dirty = @.lazy # for lazy watcher

        # add watcher to vm watchers
        @.vm.watchers.push @

        if isFun
            @.getter = @.render
            @.setter = undefined
        
        @.value = undefined if @.lazy
        @.value = @.get() if not @.lazy

    get: ()->
        @.beforeGet()
        value = @.getter.call @.vm, @.vm
        @.afterGet()
        value
    
    set: (value) ->
        @.setter.call @.vm, @.vm, value

    update: () ->
        @.run()

    run: () ->
        value = @.get()
        if value isnt @.value
            @.oldValue = @.value
            @.value = value
            @.cb.call @.vm, value, @.oldValue


    beforeGet: () ->
        # console.dir @
        # console.trace()
        Dependence.target = @

    afterGet: () ->
        Dependence.target = null

        