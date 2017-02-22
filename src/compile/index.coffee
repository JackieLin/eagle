###
 ** 编译信息
 ** @author jackieLin <dashi_lin@163.com>
###
'use strict'

parse = require './parse.coffee'
generator = require './generator.coffee'

###
 * 解析 html
###
module.exports = (html, vm) ->
    # get render string
    result = generator parse.parseHTML(html), vm
    result