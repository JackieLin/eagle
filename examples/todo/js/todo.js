/**
 * todo MVC
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict'

// init
var todo = new Eagle({
    el: '#app',
    data: {
        todos: [],
        remainingCount: 0,
        message: '',
        selectAll: false
    },
    addItem: function(value) {
        todo.todos.push({
            completed: false,
            editing: false,
            title: value
        })
    },
    deleteItem: function(ix) {
        todo.todos.splice(ix, 1)
    },

    getRemainCount: function() {
        todo.remainingCount = todo.todos.filter(function(v) {
            return !v.completed
        }).length
    },
    events: {
        deleteItem: function() {
            var target = event.target
            var ix = target.getAttribute('data-ix')
            todo.deleteItem(ix)
            todo.getRemainCount()
        },
        toggleAll: function(event) {
            todo.selectAll = !todo.selectAll
            todo.todos.forEach(function(v, i) {
                v.completed = todo.selectAll
            })
            todo.getRemainCount()
        },
        toggleItem: function(event) {
            var target = event.currentTarget
            var ix = Number(target.getAttribute('data-ix'))
            var data = todo.todos[ix]
            data.completed = !data.completed
            todo.getRemainCount()
        },

        clearCompletedTodos: function() {
            var newArray = todo.todos.filter(function(v, i) {
                return !v.completed
            })

            todo.todos = newArray
        }
    }
})