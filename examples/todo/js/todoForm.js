/**
 * todo 表单
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict'

var todoform = {
    template: '<form id="todo-form" e-on:submit="edit"><input id="new-todo" placeholder="What needs to be done?" e-value="message" autofocus="autofocus" e-on:change="change"/></form>',
    events: {
        change: function(event, message) {
            var target = event.target
            todo.addItem(target.value)
            todo.getRemainCount()
        },
        edit: function(event) {
            event.preventDefault()
            return false
        }
    }
}