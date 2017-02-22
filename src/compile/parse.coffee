###
 * dom 编译公共方法
 * @author jackieLin <dashi_lin@163.com>
###
'use strict'

{ HTMLParser } = require './html-parse.js'

###
 * 属性生成 map
###
makeAttrMap = (array) ->
    return {} if not array
    map = {}

    if Array.isArray array
        array.forEach (v, i) ->
            map[v.name] = v.value

    map

###
 * 将 dom string 转化为 js 对象, 一颗树
 * @param html string
###
exports.parseHTML = (html='') ->
    currentParent = null
    root = null
    element = null
    stack = []

    HTMLParser html,
        start: (tag, attrs, unary, isStandard) ->
            # console.log '%s   %o    %s  %s', tag, attrs, unary, isStandard
            element =
                parent: currentParent
                tag: tag
                attrs: attrs
                isStandard: isStandard
                attrsMap: makeAttrMap attrs
                children: []

            currentParent.children.push element if currentParent

            root = element if not root

            if not unary
                currentParent = element
                stack.push element
            else
                # unary means tag not close, current element should be its parent
                element = currentParent

        end: (tag) ->
            # console.log tag + ' end'
            # 回退到上一级别
            currentParent = element.parent
            element = currentParent


        chars: (text) ->
            # text = text.trim()
            currentParent.text = text if currentParent and text

        comment: (text) ->
            currentParent.comment = text if text

    # console.info root
    root
