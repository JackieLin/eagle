###
 * Eagle Component
 * @author jackieLin <dashi_lin@163.com>
###

'use strict'

parser = require '../compile/index.coffee'
h = require 'virtual-dom/h'
createElement = require 'virtual-dom/create-element'
diff = require 'virtual-dom/diff'
patch = require 'virtual-dom/patch'
Delegator = require 'dom-delegator'
{ replaceWith, html } = require '../util/dom.coffee'
observer = require '../observer/index.coffee'
Watcher = require '../observer/watcher.coffee'
{ argsToArray, extend } = require '../util/common.coffee'
uid = 0

module.exports = class Component
    ###
     * @param options 参数
     * @param context vm dependent context
    ###
    constructor: (@options, @context) ->
        @._id = "component_#{ uid++ }"
        # option message change to this
        Object.keys(@.options).forEach (v) =>
            @[v] = @.options[v]

        @.data = @.data or {}
        @.props = @.props or {}

        @.el = document.querySelector @.options.el || 'body'

        # template exists, add to dom
        html @.el, @.options.template if @.options.template

        # proxy data
        Object.keys(@.data).forEach (v, i) =>
            @.proxyData v

        # proxy props attribute
        Object.keys(@.props).forEach (v, i) =>
            @.proxyProps v, @.context


        @.ob = observer @.data
        # events
        @.delegator = new Delegator()

        # vm children component
        @.subsCompoents = []
        # generator render
        @.render = parser @.el.outerHTML, @
        # console.info @.render

        @.watchers = []
        # console.log '%o start', @
        # vm watcher
        @.watcher = new Watcher @, @.render, @.update
        # console.log '%o finished', @
        @.update @.watcher.value

        # update subsCompoents
        @.subsCompoents.forEach (v) =>
            new Component v, @


    ###
     * patch vtree
    ###
    update: (vtree) ->
        # first time
        if not @._oldTree
            @.rootNode = createElement vtree
            replaceWith @.rootNode, @.el
        else
            patches = diff @._oldTree, vtree
            @.rootNode = patch @.rootNode, patches

        @._oldTree = vtree
        @.vtree = vtree

    ###
     * add data key to component
    ###
    proxyData: (key) ->
        Object.defineProperty @, key,
            configurable: true,
            enumerable: true,
            get: () =>
                @.data[key]
            set: (val) =>
                @.data[key] = val


    ###
     * proxy props message
    ###
    proxyProps: (key, ctx) ->
        return if not ctx
        Object.defineProperty @, key,
            configurable: true,
            enumerable: true,
            get: () =>
                ctx[key]


    ###
     * renderClass
    ###
    _renderClass: (dynamic, cls) ->
        classes = '' if not cls
        classes = cls + ' ' if cls
        classes += Object.keys(dynamic).filter((v) -> dynamic[v]).join ' '
        classes

    __h__: h
    _extend: extend
    _argsToArray: argsToArray
