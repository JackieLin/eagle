(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Eagle"] = factory();
	else
		root["Eagle"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * js common method
 * @author jackieLin <dashi_lin@163.com>
 */


/*
 * Object.hasOwnProperty profilly
 */
var indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

exports.hasOwn = function(obj, key) {
  return Object.hasOwnProperty.call(obj, key);
};


/*
 * define obj attr
 */

exports.def = function(obj, key, val, enumerable) {
  return Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
};


/*
 * change arguments to array
 */

exports.argsToArray = function(args) {
  return Array.prototype.slice.call(args);
};


/*
 * flatten Array
 */

exports.flatten = function(array) {
  var newArray;
  if (array == null) {
    array = [];
  }
  newArray = [];
  array.forEach(function(v, i) {
    if (!Array.isArray(v)) {
      return newArray.push(v);
    } else {
      return v.forEach(function(item) {
        return newArray.push(item);
      });
    }
  });
  return newArray;
};

exports.hasProto = indexOf.call({}, '__proto__') >= 0;


/*
 * extend dist to source
 */

exports.extend = function(source, dist) {
  if (dist == null) {
    dist = {};
  }
  source = source || {};
  Object.keys(dist).forEach(function(v) {
    return source[v] = dist[v];
  });
  return source;
};


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(3)

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "2"


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var OneVersionConstraint = __webpack_require__(37);

var MY_VERSION = '7';
OneVersionConstraint('ev-store', MY_VERSION);

var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

module.exports = EvStore;

function EvStore(elem) {
    var hash = elem[hashKey];

    if (!hash) {
        hash = elem[hashKey] = {};
    }

    return hash;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = __webpack_require__(58);

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(3)

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * add dependence between observers and watchers
 * @author jackieLin <dashi_lin@163.com>
 */

var Dependence;

module.exports = Dependence = (function() {
  function Dependence() {
    this.subsMap = {};
    this.subs = [];
  }


  /*
   * add watcher without repeat
   */

  Dependence.prototype.addSub = function(sub) {
    if (!this.subsMap[sub.id]) {
      this.subs.push(sub);
      return this.subsMap[sub.id] = sub;
    }
  };

  Dependence.prototype.removeSub = function(sub) {
    this.subs.$remove(sub);
    return delete this.subsMap[sub.id];
  };

  Dependence.prototype.depend = function() {
    return this.addSub(Dependence.target);
  };


  /*
   * exec add watchers
   */

  Dependence.prototype.notify = function() {
    return this.subs.forEach(function(v, i) {
      return v.update();
    });
  };

  return Dependence;

})();


/*
 * every component has one target watcher every time
 */

Dependence.target = null;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12)
var isHook = __webpack_require__(7)

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5)

var applyProperties = __webpack_require__(13)

var isVNode = __webpack_require__(2)
var isVText = __webpack_require__(8)
var isWidget = __webpack_require__(0)
var handleThunk = __webpack_require__(15)

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var isVNode = __webpack_require__(2)
var isVText = __webpack_require__(8)
var isWidget = __webpack_require__(0)
var isThunk = __webpack_require__(6)

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(3)

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * Eagle Component
 * @author jackieLin <dashi_lin@163.com>
 */

var Component, Delegator, Watcher, argsToArray, createElement, diff, extend, h, html, observer, parser, patch, ref, ref1, replaceWith, uid;

parser = __webpack_require__(21);

h = __webpack_require__(42);

createElement = __webpack_require__(40);

diff = __webpack_require__(41);

patch = __webpack_require__(43);

Delegator = __webpack_require__(33);

ref = __webpack_require__(29), replaceWith = ref.replaceWith, html = ref.html;

observer = __webpack_require__(26);

Watcher = __webpack_require__(27);

ref1 = __webpack_require__(1), argsToArray = ref1.argsToArray, extend = ref1.extend;

uid = 0;

module.exports = Component = (function() {
  function Component(options) {
    this.options = options;
    this._id = "component_" + (uid++);
    Object.keys(this.options).forEach((function(_this) {
      return function(v) {
        return _this[v] = _this.options[v];
      };
    })(this));
    this.data = this.data || {};
    this.el = document.querySelector(this.options.el || 'body');
    if (this.options.template) {
      html(this.el, this.options.template);
    }
    Object.keys(this.data).forEach((function(_this) {
      return function(v, i) {
        return _this.proxy(v);
      };
    })(this));
    this.ob = observer(this.data);
    this.delegator = new Delegator();
    this.subsCompoents = [];
    this.render = parser(this.el.outerHTML, this);
    this.watchers = [];
    this.watcher = new Watcher(this, this.render, this.update);
    this.update(this.watcher.value);
    this.subsCompoents.forEach(function(v) {
      return new Component(v);
    });
  }


  /*
   * patch vtree
   */

  Component.prototype.update = function(vtree) {
    var patches;
    if (!this._oldTree) {
      this.rootNode = createElement(vtree);
      replaceWith(this.rootNode, this.el);
    } else {
      patches = diff(this._oldTree, vtree);
      this.rootNode = patch(this.rootNode, patches);
    }
    this._oldTree = vtree;
    return this.vtree = vtree;
  };


  /*
   * add data key to component
   */

  Component.prototype.proxy = function(key) {
    return Object.defineProperty(this, key, {
      configurable: true,
      enumerable: true,
      get: (function(_this) {
        return function() {
          return _this.data[key];
        };
      })(this),
      set: (function(_this) {
        return function(val) {
          return _this.data[key] = val;
        };
      })(this)
    });
  };


  /*
   * renderClass
   */

  Component.prototype._renderClass = function(dynamic, cls) {
    var classes;
    if (!cls) {
      classes = '';
    }
    if (cls) {
      classes = cls + ' ';
    }
    classes += Object.keys(dynamic).filter(function(v) {
      return dynamic[v];
    }).join(' ');
    return classes;
  };

  Component.prototype.__h__ = h;

  Component.prototype._extend = extend;

  Component.prototype._argsToArray = argsToArray;

  return Component;

})();


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
 * HTML Parser By John Resig (ejohn.org)
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 *
 * // Use like so:
 * HTMLParser(htmlString, {
 *     start: function(tag, attrs, unary) {},
 *     end: function(tag) {},
 *     chars: function(text) {},
 *     comment: function(text) {}
 * });
 *
 * // or to get an XML string:
 * HTMLtoXML(htmlString);
 *
 * // or to get an XML DOM Document
 * HTMLtoDOM(htmlString);
 *
 * // or to inject into an existing document/DOM node
 * HTMLtoDOM(htmlString, document);
 * HTMLtoDOM(htmlString, document.body);
 *
 */

// Regular Expressions for parsing tags and attributes
// for match attr like e-for, eagle would use this
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[\w\-\.\:]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
    endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/,
    attr = /([-A-Za-z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g;

// Empty Elements - HTML 4.01
var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,isindex,link,meta,param,embed");

// Block Elements - HTML 4.01
var block = makeMap("address,applet,blockquote,button,center,dd,del,dir,div,dl,dt,fieldset,form,frameset,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,p,pre,script,table,tbody,td,tfoot,th,thead,tr,ul");

// HTML 5.0
var html5 = makeMap('article,aside,bdi,details,dialog,figcaption,figure,footer,header,main,mark,menuitem,meter,nav,progress,rp,rt,ruby,section,summary,time,wbr');

// Inline Elements - HTML 4.01
var inline = makeMap("a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,var,h1");

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr");

// Attributes that have their values filled in disabled="disabled"
var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected");

// Special Elements (can contain anything)
var special = makeMap("script,style");

exports.HTMLParser = function (html, handler) {
    var index,
        chars,
        match,
        stack = [],
        last = html;
    stack.last = function () {
        return this[this.length - 1];
    };

    while (html) {
        chars = true;

        // Make sure we're not in a script or style element
        if (!stack.last() || !special[stack.last()]) {

            // Comment
            if (html.indexOf("<!--") == 0) {
                index = html.indexOf("-->");

                if (index >= 0) {
                    if (handler.comment) handler.comment(html.substring(4, index));
                    html = html.substring(index + 3);
                    chars = false;
                }

                // end tag
            } else if (html.indexOf("</") == 0) {
                match = html.match(endTag);

                if (match) {
                    html = html.substring(match[0].length);
                    match[0].replace(endTag, parseEndTag);
                    chars = false;
                }

                // start tag
            } else if (html.indexOf("<") == 0) {
                match = html.match(startTag);

                if (match) {
                    html = html.substring(match[0].length);
                    match[0].replace(startTag, parseStartTag);
                    chars = false;
                }
            }

            if (chars) {
                index = html.indexOf("<");

                var text = index < 0 ? html : html.substring(0, index);
                html = index < 0 ? "" : html.substring(index);

                if (handler.chars) handler.chars(text);
            }
        } else {
            html = html.replace(new RegExp("(.*)<\/" + stack.last() + "[^>]*>"), function (all, text) {
                text = text.replace(/<!--(.*?)-->/g, "$1").replace(/<!\[CDATA\[(.*?)]]>/g, "$1");

                if (handler.chars) handler.chars(text);

                return "";
            });

            parseEndTag("", stack.last());
        }

        if (html == last) throw "Parse Error: " + html;
        last = html;
    }

    // Clean up any remaining tags
    parseEndTag();

    function parseStartTag(tag, tagName, rest, unary) {
        tagName = tagName.toLowerCase();

        if (block[tagName]) {
            while (stack.last() && inline[stack.last()]) {
                parseEndTag("", stack.last());
            }
        }

        if (closeSelf[tagName] && stack.last() == tagName) {
            parseEndTag("", tagName);
        }

        unary = empty[tagName] || !!unary;

        if (!unary) stack.push(tagName);

        if (handler.start) {
            var attrs = [];
            // add: is standard tagName
            var isStandard = empty[tagName] || block[tagName] || inline[tagName] || closeSelf[tagName] || special[tagName] || html5[tagName];

            rest.replace(attr, function (match, name) {
                var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : fillAttrs[name] ? name : "";

                // add: is standard properties
                attrs.push({
                    name: name,
                    value: value
                    // escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"
                });
            });

            if (handler.start) handler.start(tagName, attrs, unary, isStandard);
        }
    }

    function parseEndTag(tag, tagName) {
        // If no tag name is provided, clean shop
        if (!tagName) var pos = 0;

        // Find the closest opened tag of the same type
        else for (var pos = stack.length - 1; pos >= 0; pos--) if (stack[pos] == tagName) break;

        if (pos >= 0) {
            // Close all the open elements, up the stack
            for (var i = stack.length - 1; i >= pos; i--) if (handler.end) handler.end(stack[i]);

            // Remove the open elements from the stack
            stack.length = pos;
        }
    }
};

exports.HTMLtoXML = function (html) {
    var results = "";

    HTMLParser(html, {
        start: function (tag, attrs, unary) {
            results += "<" + tag;

            for (var i = 0; i < attrs.length; i++) results += " " + attrs[i].name + '="' + attrs[i].escaped + '"';

            results += (unary ? "/" : "") + ">";
        },
        end: function (tag) {
            results += "</" + tag + ">";
        },
        chars: function (text) {
            results += text;
        },
        comment: function (text) {
            results += "<!--" + text + "-->";
        }
    });

    return results;
};

exports.HTMLtoDOM = function (html, doc) {
    // There can be only one of these elements
    var one = makeMap("html,head,body,title");

    // Enforce a structure for the document
    var structure = {
        link: "head",
        base: "head"
    };

    if (!doc) {
        if (typeof DOMDocument != "undefined") doc = new DOMDocument();else if (typeof document != "undefined" && document.implementation && document.implementation.createDocument) doc = document.implementation.createDocument("", "", null);else if (typeof ActiveX != "undefined") doc = new ActiveXObject("Msxml.DOMDocument");
    } else doc = doc.ownerDocument || doc.getOwnerDocument && doc.getOwnerDocument() || doc;

    var elems = [],
        documentElement = doc.documentElement || doc.getDocumentElement && doc.getDocumentElement();

    // If we're dealing with an empty document then we
    // need to pre-populate it with the HTML document structure
    if (!documentElement && doc.createElement) (function () {
        var html = doc.createElement("html");
        var head = doc.createElement("head");
        head.appendChild(doc.createElement("title"));
        html.appendChild(head);
        html.appendChild(doc.createElement("body"));
        doc.appendChild(html);
    })();

    // Find all the unique elements
    if (doc.getElementsByTagName) for (var i in one) one[i] = doc.getElementsByTagName(i)[0];

    // If we're working with a document, inject contents into
    // the body element
    var curParentNode = one.body;

    HTMLParser(html, {
        start: function (tagName, attrs, unary) {
            // If it's a pre-built element, then we can ignore
            // its construction
            if (one[tagName]) {
                curParentNode = one[tagName];
                if (!unary) {
                    elems.push(curParentNode);
                }
                return;
            }

            var elem = doc.createElement(tagName);

            for (var attr in attrs) elem.setAttribute(attrs[attr].name, attrs[attr].value);

            if (structure[tagName] && typeof one[structure[tagName]] != "boolean") one[structure[tagName]].appendChild(elem);else if (curParentNode && curParentNode.appendChild) curParentNode.appendChild(elem);

            if (!unary) {
                elems.push(elem);
                curParentNode = elem;
            }
        },
        end: function (tag) {
            elems.length -= 1;

            // Init the new parentNode
            curParentNode = elems[elems.length - 1];
        },
        chars: function (text) {
            curParentNode.appendChild(doc.createTextNode(text));
        },
        comment: function (text) {
            // create comment node
        }
    });

    return doc;
};

function makeMap(str) {
    var obj = {},
        items = str.split(",");
    for (var i = 0; i < items.length; i++) obj[items[i]] = true;
    return obj;
}

/***/ }),
/* 19 */
/***/ (function(module, exports) {

/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * 解析 eagle 指令，生成代码
 * @author jackieLin <dashi_lin@163.com>
 */

var flatten, generator, parseEvent, parseText, vm;

parseText = __webpack_require__(24);

flatten = __webpack_require__(1).flatten;

parseEvent = __webpack_require__(22).parseEvent;

vm = null;

generator = {

  /*
   * el dom element
   * key dom key unique
   */
  element: function(el, key) {
    var exp;
    if (!el.isStandard) {
      return this.genCustomTag(el);
    } else if (exp = this.getAttr(el, 'e-for')) {
      return this.loop(el, exp);
    } else if (exp = this.getAttr(el, 'e-if')) {
      return this.condition(el, exp.trim());
    } else {
      return "__h__( '" + el.tag + "', " + (this.attrs(el)) + ", " + (this.children(el.children, el)) + ")";
    }
  },

  /*
   * generator props
   */
  genProps: function(el) {
    var propsKeys, result;
    result = [];
    propsKeys = Object.keys(el.attrsMap).filter(function(v) {
      return v.indexOf(':') === 0;
    });
    propsKeys.forEach(function(v) {
      return result.push((v.slice(1)) + ": " + el.attrsMap[v]);
    });
    propsKeys.forEach(function(v) {
      return delete el.attrsMap[v];
    });
    return result;
  },

  /*
   * generator custom tag
   */
  genCustomTag: function(el) {
    var e, props, query, sub;
    query = "[key=" + vm._id + "]";
    props = this.genProps(el);
    props.push("el: '" + query + "'");
    try {
      sub = new Function("with(this) { return _extend(" + el.tag + ", { " + (props.join(',')) + "}) }").call(vm);
      vm.subsCompoents.push(sub);
    } catch (error) {
      e = error;
      console.error("can not find subsCompoents " + el.tag);
    }
    return "__h__( 'div', {attributes: {'key': '" + vm._id + "'}}, [])";
  },

  /*
   * get element attr
   */
  getAttr: function(el, attr) {
    var val;
    if (attr == null) {
      attr = '';
    }
    el.attrsMap = el.attrsMap || {};
    val = el.attrsMap[attr];
    delete el.attrsMap[attr];
    return val;
  },

  /*
   * generator all other attrs
   */
  generateAllAttrs: function(el, prefix) {
    var attributes, keys, result;
    attributes = [];
    keys = Object.keys(el.attrsMap).filter(function(v, i) {
      return v.indexOf(prefix) >= 0;
    });
    result = keys.reduce(function(prev, next) {
      var event;
      event = parseEvent(next, el.attrsMap[next]);
      if (event) {
        prev.push(event);
      } else if (next.indexOf(prefix + "data") >= 0) {
        attributes.push("'" + (next.replace(prefix, '')) + "': " + el.attrsMap[next]);
      } else {
        prev.push("'" + (next.replace(prefix, '')) + "': " + el.attrsMap[next]);
      }
      return prev;
    }, []);
    keys.map(function(v, i) {
      return delete el.attrsMap[v];
    });
    return {
      html: result,
      attr: attributes
    };
  },

  /*
   * generator dom attrs
   */
  attrs: function(el) {
    var attributes, directive, exp, result;
    if (!el) {
      return '{}';
    }
    attributes = [];
    result = '{';
    if ((exp = this.getAttr(el, 'e-class')) || el.attrsMap["class"]) {
      attributes.push("className: _renderClass(" + (exp || '\'\'') + ", '" + (el.attrsMap["class"] || '') + "')");
    }
    directive = this.generateAllAttrs(el, 'e-');
    attributes.push(directive.html);
    attributes.push(Object.keys(el.attrsMap).map(function(v, i) {
      var message;
      message = '';
      if (v === 'for') {
        message = "htmlFor: '" + el.attrsMap[v] + "'";
      } else {
        message = "'" + v + "': '" + el.attrsMap[v] + "'";
      }
      return message;
    }));
    attributes = flatten(attributes);
    result += attributes.join(',');
    if (result.length !== 1 && directive.attr.length) {
      result += ',';
    }
    if (directive.attr.length) {
      result += "attributes: { " + directive.attr + " }";
    }
    result += '}';
    return result;
  },

  /*
   * generator children
   */
  children: function(children, parent) {
    if (!Array.isArray(children)) {
      return;
    }
    if (!children.length && parent) {
      return "[ " + (this.parseText(parent.text)) + " ]";
    }
    return "[" + (children.map(this.node).join(',')) + "]";
  },

  /*
   * parse text
   */
  parseText: function(text) {
    var result;
    if (!text) {
      return '';
    }
    result = parseText(text);
    if (!result) {
      text = text.trim();
      text = text.replace('&nbsp;', ' ');
      return "'" + text + "'";
    }
    return result;
  },

  /*
   * generator node
   */
  node: function(node) {
    if (node.tag) {
      return generator.element(node);
    }
  },

  /*
   * if directive
   */
  condition: function(el, exp) {
    return "(" + exp + ") ? " + (this.element(el)) + " : ''";
  },

  /*
   * for directive
   * (item, index) in list || item in index
   */
  loop: function(el, exp) {
    var inMatch, index, item, key, list;
    inMatch = exp.match(/\(?([\w]*)\s*,?\s*([\w]*)\)?\s+(?:in|of)\s+(.*)/);
    if (!inMatch) {
      throw new Error('Invalid v-for expression: #{exp}');
    }
    list = inMatch[3].trim();
    index = inMatch[2].trim() || 'ix';
    item = inMatch[1].trim();
    key = el.attrsMap['key'] || 'undefined';
    return "(" + list + ").map(function(" + item + ", " + index + ") { return " + (this.element(el, key)) + " })";
  }
};


/*
 * 将 ast 树生成 vdom 字符串
 */

module.exports = function(ast, currentVm) {
  var code;
  if (!ast) {
    return;
  }
  vm = currentVm;
  code = generator.element(ast);
  return new Function("with(this) { return " + code + " }");
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 ** 编译信息
 ** @author jackieLin <dashi_lin@163.com>
 */

var generator, parse;

parse = __webpack_require__(23);

generator = __webpack_require__(20);


/*
 * 解析 html
 */

module.exports = function(html, vm) {
  var result;
  result = generator(parse.parseHTML(html), vm);
  return result;
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * parse event
 * @author jackieLin <dashi_lin@163.com>
 */

var filter, geneEvent, generator, method, onReg;

onReg = /e-on:([^=]+)/;

method = /(\w+)\((.*)\)/;


/*
 * filter method and args
 */

filter = function(string) {
  var exp, result;
  result = {};
  exp = string.match(method);
  if (exp && exp.length === 3) {
    result = {
      method: "events." + exp[1],
      args: exp[2]
    };
  } else {
    result = {
      method: "events." + string
    };
  }
  return result;
};


/*
 * generator closure
 */

generator = function(method, args) {
  return "(function() {var args = _argsToArray(arguments);var self = this;return " + (geneEvent(method)) + ";}).call(this, " + args + ")";
};


/*
 * generator event
 */

geneEvent = function(method) {
  return "function(event) { var newArgs = args.slice(); newArgs.unshift(event); " + method + ".apply(self, newArgs) }";
};

exports.parseEvent = function(eventName, value) {
  var exp, params, result;
  result = null;
  exp = eventName.match(onReg);
  params = filter(value);
  if (exp && exp.length === 2) {
    if (!params.args) {
      result = "'ev-" + exp[1] + "': " + params.method;
    }
    if (params.args) {
      result = "'ev-" + exp[1] + "': " + (generator(params.method, params.args));
    }
  }
  return result;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * dom 编译公共方法
 * @author jackieLin <dashi_lin@163.com>
 */

var HTMLParser, makeAttrMap;

HTMLParser = __webpack_require__(18).HTMLParser;


/*
 * 属性生成 map
 */

makeAttrMap = function(array) {
  var map;
  if (!array) {
    return {};
  }
  map = {};
  if (Array.isArray(array)) {
    array.forEach(function(v, i) {
      return map[v.name] = v.value;
    });
  }
  return map;
};


/*
 * 将 dom string 转化为 js 对象, 一颗树
 * @param html string
 */

exports.parseHTML = function(html) {
  var currentParent, element, root, stack;
  if (html == null) {
    html = '';
  }
  currentParent = null;
  root = null;
  element = null;
  stack = [];
  HTMLParser(html, {
    start: function(tag, attrs, unary, isStandard) {
      element = {
        parent: currentParent,
        tag: tag,
        attrs: attrs,
        isStandard: isStandard,
        attrsMap: makeAttrMap(attrs),
        children: []
      };
      if (currentParent) {
        currentParent.children.push(element);
      }
      if (!root) {
        root = element;
      }
      if (!unary) {
        currentParent = element;
        return stack.push(element);
      } else {
        return element = currentParent;
      }
    },
    end: function(tag) {
      currentParent = element.parent;
      return element = currentParent;
    },
    chars: function(text) {
      if (currentParent && text) {
        return currentParent.text = text;
      }
    },
    comment: function(text) {
      if (text) {
        return currentParent.comment = text;
      }
    }
  });
  return root;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * parse text
 * eg: 'hello {{message}}' => 'hello ( message )'
 * @author jackieLin <dashi_lin@163.com>
 */

var tagRE;

tagRE = /\{\{((?:.|\\n)+?)\}\}/g;

module.exports = function(text) {
  var index, lastIndex, match, tokens, value;
  if (!tagRE.test(text)) {
    return null;
  }
  tokens = [];
  index = lastIndex = tagRE.lastIndex = 0;
  while (match = tagRE.exec(text)) {
    index = match.index;
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    value = match[1];
    tokens.push("( " + (match[1].trim()) + ")");
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+');
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * main js
 * @author jackieLin <dashi_lin@163.com>
 */

var Eagle;

Eagle = __webpack_require__(17);

module.exports = Eagle;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * observer
 * @author jackieLin <dashi_lin@163.com>
 */

var Dependence, Observer, arrayKeys, arrayMethods, copyAugment, def, defineReactive, hasOwn, hasProto, observer, protoAugment, ref, ref1;

hasOwn = __webpack_require__(1).hasOwn;

ref = __webpack_require__(28), arrayMethods = ref.arrayMethods, arrayKeys = ref.arrayKeys;

Dependence = __webpack_require__(11);

ref1 = __webpack_require__(1), def = ref1.def, hasProto = ref1.hasProto;

arrayKeys = Object.getOwnPropertyNames(arrayMethods);


/*
 * interceping target Object or Array
 */

protoAugment = function(target, src) {
  return target.__proto__ = src;
};

copyAugment = function(target, src, keys) {
  return (keys || []).forEach(function(v, i) {
    return def(target, v, src[v]);
  });
};


/*
 * overloade data
 */

defineReactive = function(data, key, value) {
  var childOb, dep, getter, property, setter;
  dep = new Dependence();
  property = Object.getOwnPropertyDescriptor(data, key);
  getter = property && property.get;
  setter = property && property.set;
  childOb = observer(value);
  return Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      var val;
      if (getter) {
        val = getter.call(data);
      }
      if (!getter) {
        val = value;
      }
      if (Dependence.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
      }
      return val;
    },
    set: function(newVal) {
      var val;
      if (getter) {
        val = getter.call(data);
      }
      if (!getter) {
        val = value;
      }
      if (val === newVal) {
        return;
      }
      if (setter) {
        setter.call(data, newVal);
      } else {
        value = newVal;
      }
      childOb = observer(newVal);
      return dep.notify();
    }
  });
};

Observer = (function() {
  function Observer(data) {
    var args;
    this.dep = new Dependence();
    this.data = data;
    if (Array.isArray(data)) {
      if (hasProto) {
        args = protoAugment;
      }
      if (!hasProto) {
        args = copyAugment;
      }
      args(data, arrayMethods, arrayKeys);
      this.observerArray(data);
    } else {
      this.walk(data);
    }
    Object.defineProperty(data, '__ob__', {
      value: this,
      enumerable: false,
      writable: true,
      configurable: true
    });
  }

  Observer.prototype.walk = function(data) {
    var key;
    key = Object.keys(data);
    return key.forEach(function(v, i) {
      return defineReactive(data, v, data[v]);
    });
  };

  Observer.prototype.observerArray = function(data) {
    return data.forEach(function(v, i) {
      return observer(v);
    });
  };

  Observer.prototype.addVm = function(vm) {};

  return Observer;

})();


/*
 * generate data observer
 */

observer = function(data, vm) {
  var ob;
  if (!data || typeof data !== 'object') {
    return;
  }
  if (hasOwn(data, '__ob__' && data.__ob__ instanceof Observer)) {
    ob = data.__ob__;
  } else {
    ob = new Observer(data);
  }
  if (vm) {
    ob.addVm(vm);
  }
  return ob;
};

module.exports = observer;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * watcher
 * @author jackieLin <dashi_lin@163.com>
 */

var Dependence, Watcher, uid;

Dependence = __webpack_require__(11);

uid = 0;

module.exports = Watcher = (function() {
  function Watcher(vm, render, cb) {
    var isFun;
    this.vm = vm;
    this.render = render;
    this.cb = cb;
    this.id = ++uid;
    isFun = typeof this.render === 'function';
    this.dirty = this.lazy;
    this.vm.watchers.push(this);
    if (isFun) {
      this.getter = this.render;
      this.setter = void 0;
    }
    if (this.lazy) {
      this.value = void 0;
    }
    if (!this.lazy) {
      this.value = this.get();
    }
  }

  Watcher.prototype.get = function() {
    var value;
    this.beforeGet();
    value = this.getter.call(this.vm, this.vm);
    this.afterGet();
    return value;
  };

  Watcher.prototype.set = function(value) {
    return this.setter.call(this.vm, this.vm, value);
  };

  Watcher.prototype.update = function() {
    return this.run();
  };

  Watcher.prototype.run = function() {
    var value;
    value = this.get();
    if (value !== this.value) {
      this.oldValue = this.value;
      this.value = value;
      return this.cb.call(this.vm, value, this.oldValue);
    }
  };

  Watcher.prototype.beforeGet = function() {
    return Dependence.target = this;
  };

  Watcher.prototype.afterGet = function() {
    return Dependence.target = null;
  };

  return Watcher;

})();


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * array profilly
 * @author jackieLin <dashi_lin@163.com>
 */

var arrayMethods, arrayProto, def;

def = __webpack_require__(1).def;

arrayProto = Array.prototype;

arrayMethods = Object.create(arrayProto);

exports.arrayMethods = arrayMethods;


/*
 * intercept mutating array method
 * @wiki Vue array implementation
 */

['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'].forEach(function(method, i) {
  var origin;
  origin = arrayProto[method];
  return def(arrayMethods, method, function() {
    var args, inserted, ob, result;
    i = arguments.length;
    args = new Array(i);
    while (i--) {
      args[i] = arguments[i];
    }
    result = origin.apply(this, args);
    ob = this.__ob__;
    if (method === 'push') {
      inserted = args;
    }
    if (method === 'unshift') {
      inserted = args;
    }
    if (method === 'splice') {
      inserted = args.slice(2);
    }
    if (inserted) {
      ob.observerArray(inserted);
    }
    ob.dep.notify();
    return result;
  });
});

def(arrayProto, '$remove', function(item) {
  var index;
  if (!this.length) {
    return;
  }
  index = this.indexOf(item);
  if (index > 1) {
    return this.splice(index, 1);
  }
});


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
 * dom
 * @author jackieLin <dashi_lin@163.com>
 */


/*
 * @param oldEl {Dom}
 * @param newEl {Dom}
 * replace oldEl to newEl
 */
exports.replaceWith = function(newEl, oldEl) {
  var parentNode;
  if (!newEl || !oldEl) {
    return;
  }
  parentNode = oldEl.parentNode;
  return parentNode.replaceChild(newEl, oldEl);
};


/*
 * @param el            {Dom}
 * @param htmlString    {String}
 * html function
 */

exports.html = function(el, htmlString) {
  if (!el || !htmlString) {
    return;
  }
  el.innerHTML = htmlString;
  return el;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cuid.js
 * Collision-resistant UID generator for browsers and node.
 * Sequential for fast db lookups and recency sorting.
 * Safe for element IDs and server-side lookups.
 *
 * Extracted from CLCTR
 *
 * Copyright (c) Eric Elliott 2012
 * MIT License
 */

/*global window, navigator, document, require, process, module */
(function (app) {
  'use strict';
  var namespace = 'cuid',
    c = 0,
    blockSize = 4,
    base = 36,
    discreteValues = Math.pow(base, blockSize),

    pad = function pad(num, size) {
      var s = "000000000" + num;
      return s.substr(s.length-size);
    },

    randomBlock = function randomBlock() {
      return pad((Math.random() *
            discreteValues << 0)
            .toString(base), blockSize);
    },

    safeCounter = function () {
      c = (c < discreteValues) ? c : 0;
      c++; // this is not subliminal
      return c - 1;
    },

    api = function cuid() {
      // Starting with a lowercase letter makes
      // it HTML element ID friendly.
      var letter = 'c', // hard-coded allows for sequential access

        // timestamp
        // warning: this exposes the exact date and time
        // that the uid was created.
        timestamp = (new Date().getTime()).toString(base),

        // Prevent same-machine collisions.
        counter,

        // A few chars to generate distinct ids for different
        // clients (so different computers are far less
        // likely to generate the same id)
        fingerprint = api.fingerprint(),

        // Grab some more chars from Math.random()
        random = randomBlock() + randomBlock();

        counter = pad(safeCounter().toString(base), blockSize);

      return  (letter + timestamp + counter + fingerprint + random);
    };

  api.slug = function slug() {
    var date = new Date().getTime().toString(36),
      counter,
      print = api.fingerprint().slice(0,1) +
        api.fingerprint().slice(-1),
      random = randomBlock().slice(-2);

      counter = safeCounter().toString(36).slice(-4);

    return date.slice(-2) +
      counter + print + random;
  };

  api.globalCount = function globalCount() {
    // We want to cache the results of this
    var cache = (function calc() {
        var i,
          count = 0;

        for (i in window) {
          count++;
        }

        return count;
      }());

    api.globalCount = function () { return cache; };
    return cache;
  };

  api.fingerprint = function browserPrint() {
    return pad((navigator.mimeTypes.length +
      navigator.userAgent.length).toString(36) +
      api.globalCount().toString(36), 4);
  };

  // don't change anything from here down.
  if (app.register) {
    app.register(namespace, api);
  } else if (true) {
    module.exports = api;
  } else {
    app[namespace] = api;
  }

}(this.applitude || this));


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var EvStore = __webpack_require__(4)

module.exports = addEvent

function addEvent(target, type, handler) {
    var events = EvStore(target)
    var event = events[type]

    if (!event) {
        events[type] = handler
    } else if (Array.isArray(event)) {
        if (event.indexOf(handler) === -1) {
            event.push(handler)
        }
    } else if (event !== handler) {
        events[type] = [event, handler]
    }
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var globalDocument = __webpack_require__(5)
var EvStore = __webpack_require__(4)
var createStore = __webpack_require__(56)

var addEvent = __webpack_require__(31)
var removeEvent = __webpack_require__(35)
var ProxyEvent = __webpack_require__(34)

var HANDLER_STORE = createStore()

module.exports = DOMDelegator

function DOMDelegator(document) {
    if (!(this instanceof DOMDelegator)) {
        return new DOMDelegator(document);
    }

    document = document || globalDocument

    this.target = document.documentElement
    this.events = {}
    this.rawEventListeners = {}
    this.globalListeners = {}
}

DOMDelegator.prototype.addEventListener = addEvent
DOMDelegator.prototype.removeEventListener = removeEvent

DOMDelegator.allocateHandle =
    function allocateHandle(func) {
        var handle = new Handle()

        HANDLER_STORE(handle).func = func;

        return handle
    }

DOMDelegator.transformHandle =
    function transformHandle(handle, broadcast) {
        var func = HANDLER_STORE(handle).func

        return this.allocateHandle(function (ev) {
            broadcast(ev, func);
        })
    }

DOMDelegator.prototype.addGlobalEventListener =
    function addGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];
        if (listeners.indexOf(fn) === -1) {
            listeners.push(fn)
        }

        this.globalListeners[eventName] = listeners;
    }

DOMDelegator.prototype.removeGlobalEventListener =
    function removeGlobalEventListener(eventName, fn) {
        var listeners = this.globalListeners[eventName] || [];

        var index = listeners.indexOf(fn)
        if (index !== -1) {
            listeners.splice(index, 1)
        }
    }

DOMDelegator.prototype.listenTo = function listenTo(eventName) {
    if (!(eventName in this.events)) {
        this.events[eventName] = 0;
    }

    this.events[eventName]++;

    if (this.events[eventName] !== 1) {
        return
    }

    var listener = this.rawEventListeners[eventName]
    if (!listener) {
        listener = this.rawEventListeners[eventName] =
            createHandler(eventName, this)
    }

    this.target.addEventListener(eventName, listener, true)
}

DOMDelegator.prototype.unlistenTo = function unlistenTo(eventName) {
    if (!(eventName in this.events)) {
        this.events[eventName] = 0;
    }

    if (this.events[eventName] === 0) {
        throw new Error("already unlistened to event.");
    }

    this.events[eventName]--;

    if (this.events[eventName] !== 0) {
        return
    }

    var listener = this.rawEventListeners[eventName]

    if (!listener) {
        throw new Error("dom-delegator#unlistenTo: cannot " +
            "unlisten to " + eventName)
    }

    this.target.removeEventListener(eventName, listener, true)
}

function createHandler(eventName, delegator) {
    var globalListeners = delegator.globalListeners;
    var delegatorTarget = delegator.target;

    return handler

    function handler(ev) {
        var globalHandlers = globalListeners[eventName] || []

        if (globalHandlers.length > 0) {
            var globalEvent = new ProxyEvent(ev);
            globalEvent.currentTarget = delegatorTarget;
            callListeners(globalHandlers, globalEvent)
        }

        findAndInvokeListeners(ev.target, ev, eventName)
    }
}

function findAndInvokeListeners(elem, ev, eventName) {
    var listener = getListener(elem, eventName)

    if (listener && listener.handlers.length > 0) {
        var listenerEvent = new ProxyEvent(ev);
        listenerEvent.currentTarget = listener.currentTarget
        callListeners(listener.handlers, listenerEvent)

        if (listenerEvent._bubbles) {
            var nextTarget = listener.currentTarget.parentNode
            findAndInvokeListeners(nextTarget, ev, eventName)
        }
    }
}

function getListener(target, type) {
    // terminate recursion if parent is `null`
    if (target === null || typeof target === "undefined") {
        return null
    }

    var events = EvStore(target)
    // fetch list of handler fns for this event
    var handler = events[type]
    var allHandler = events.event

    if (!handler && !allHandler) {
        return getListener(target.parentNode, type)
    }

    var handlers = [].concat(handler || [], allHandler || [])
    return new Listener(target, handlers)
}

function callListeners(handlers, ev) {
    handlers.forEach(function (handler) {
        if (typeof handler === "function") {
            handler(ev)
        } else if (typeof handler.handleEvent === "function") {
            handler.handleEvent(ev)
        } else if (handler.type === "dom-delegator-handle") {
            HANDLER_STORE(handler).func(ev)
        } else {
            throw new Error("dom-delegator: unknown handler " +
                "found: " + JSON.stringify(handlers));
        }
    })
}

function Listener(target, handlers) {
    this.currentTarget = target
    this.handlers = handlers
}

function Handle() {
    this.type = "dom-delegator-handle"
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var Individual = __webpack_require__(38)
var cuid = __webpack_require__(30)
var globalDocument = __webpack_require__(5)

var DOMDelegator = __webpack_require__(32)

var versionKey = "13"
var cacheKey = "__DOM_DELEGATOR_CACHE@" + versionKey
var cacheTokenKey = "__DOM_DELEGATOR_CACHE_TOKEN@" + versionKey
var delegatorCache = Individual(cacheKey, {
    delegators: {}
})
var commonEvents = [
    "blur", "change", "click",  "contextmenu", "dblclick",
    "error","focus", "focusin", "focusout", "input", "keydown",
    "keypress", "keyup", "load", "mousedown", "mouseup",
    "resize", "select", "submit", "touchcancel",
    "touchend", "touchstart", "unload"
]

/*  Delegator is a thin wrapper around a singleton `DOMDelegator`
        instance.

    Only one DOMDelegator should exist because we do not want
        duplicate event listeners bound to the DOM.

    `Delegator` will also `listenTo()` all events unless
        every caller opts out of it
*/
module.exports = Delegator

function Delegator(opts) {
    opts = opts || {}
    var document = opts.document || globalDocument

    var cacheKey = document[cacheTokenKey]

    if (!cacheKey) {
        cacheKey =
            document[cacheTokenKey] = cuid()
    }

    var delegator = delegatorCache.delegators[cacheKey]

    if (!delegator) {
        delegator = delegatorCache.delegators[cacheKey] =
            new DOMDelegator(document)
    }

    if (opts.defaultEvents !== false) {
        for (var i = 0; i < commonEvents.length; i++) {
            delegator.listenTo(commonEvents[i])
        }
    }

    return delegator
}

Delegator.allocateHandle = DOMDelegator.allocateHandle;
Delegator.transformHandle = DOMDelegator.transformHandle;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var inherits = __webpack_require__(39)

var ALL_PROPS = [
    "altKey", "bubbles", "cancelable", "ctrlKey",
    "eventPhase", "metaKey", "relatedTarget", "shiftKey",
    "target", "timeStamp", "type", "view", "which"
]
var KEY_PROPS = ["char", "charCode", "key", "keyCode"]
var MOUSE_PROPS = [
    "button", "buttons", "clientX", "clientY", "layerX",
    "layerY", "offsetX", "offsetY", "pageX", "pageY",
    "screenX", "screenY", "toElement"
]

var rkeyEvent = /^key|input/
var rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/

module.exports = ProxyEvent

function ProxyEvent(ev) {
    if (!(this instanceof ProxyEvent)) {
        return new ProxyEvent(ev)
    }

    if (rkeyEvent.test(ev.type)) {
        return new KeyEvent(ev)
    } else if (rmouseEvent.test(ev.type)) {
        return new MouseEvent(ev)
    }

    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    this._rawEvent = ev
    this._bubbles = false;
}

ProxyEvent.prototype.preventDefault = function () {
    this._rawEvent.preventDefault()
}

ProxyEvent.prototype.startPropagation = function () {
    this._bubbles = true;
}

function MouseEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < MOUSE_PROPS.length; j++) {
        var mousePropKey = MOUSE_PROPS[j]
        this[mousePropKey] = ev[mousePropKey]
    }

    this._rawEvent = ev
}

inherits(MouseEvent, ProxyEvent)

function KeyEvent(ev) {
    for (var i = 0; i < ALL_PROPS.length; i++) {
        var propKey = ALL_PROPS[i]
        this[propKey] = ev[propKey]
    }

    for (var j = 0; j < KEY_PROPS.length; j++) {
        var keyPropKey = KEY_PROPS[j]
        this[keyPropKey] = ev[keyPropKey]
    }

    this._rawEvent = ev
}

inherits(KeyEvent, ProxyEvent)


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var EvStore = __webpack_require__(4)

module.exports = removeEvent

function removeEvent(target, type, handler) {
    var events = EvStore(target)
    var event = events[type]

    if (!event) {
        return
    } else if (Array.isArray(event)) {
        var index = event.indexOf(handler)
        if (index !== -1) {
            event.splice(index, 1)
        }
    } else if (event === handler) {
        events[type] = null
    }
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

/*global window, global*/

var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual;

function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Individual = __webpack_require__(36);

module.exports = OneVersion;

function OneVersion(moduleName, version, defaultValue) {
    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
    var enforceKey = key + '_ENFORCE_SINGLETON';

    var versionValue = Individual(enforceKey, version);

    if (versionValue !== version) {
        throw new Error('Can only have one copy of ' +
            moduleName + '.\n' +
            'You already have version ' + versionValue +
            ' installed.\n' +
            'This means you cannot install version ' + version);
    }

    return Individual(key, defaultValue);
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual

function Individual(key, value) {
    if (root[key]) {
        return root[key]
    }

    Object.defineProperty(root, key, {
        value: value
        , configurable: true
    })

    return value
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 39 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var createElement = __webpack_require__(14)

module.exports = createElement


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var diff = __webpack_require__(55)

module.exports = diff


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var h = __webpack_require__(50)

module.exports = h


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var patch = __webpack_require__(46)

module.exports = patch


/***/ }),
/* 44 */
/***/ (function(module, exports) {

// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var applyProperties = __webpack_require__(13)

var isWidget = __webpack_require__(0)
var VPatch = __webpack_require__(16)

var updateWidget = __webpack_require__(47)

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = renderOptions.render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = renderOptions.render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(5)
var isArray = __webpack_require__(10)

var render = __webpack_require__(14)
var domIndex = __webpack_require__(44)
var patchOp = __webpack_require__(45)
module.exports = patch

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    renderOptions.patch = renderOptions.patch && renderOptions.patch !== patch
        ? renderOptions.patch
        : patchRecursive
    renderOptions.render = renderOptions.render || render

    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var isWidget = __webpack_require__(0)

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var EvStore = __webpack_require__(4);

module.exports = EvHook;

function EvHook(value) {
    if (!(this instanceof EvHook)) {
        return new EvHook(value);
    }

    this.value = value;
}

EvHook.prototype.hook = function (node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = this.value;
};

EvHook.prototype.unhook = function(node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = undefined;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = SoftSetHook;

function SoftSetHook(value) {
    if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
    }

    this.value = value;
}

SoftSetHook.prototype.hook = function (node, propertyName) {
    if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
    }
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArray = __webpack_require__(10);

var VNode = __webpack_require__(52);
var VText = __webpack_require__(53);
var isVNode = __webpack_require__(2);
var isVText = __webpack_require__(8);
var isWidget = __webpack_require__(0);
var isHook = __webpack_require__(7);
var isVThunk = __webpack_require__(6);

var parseTag = __webpack_require__(51);
var softSetHook = __webpack_require__(49);
var evHook = __webpack_require__(48);

module.exports = h;

function h(tagName, properties, children) {
    var childNodes = [];
    var tag, props, key, namespace;

    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};
    tag = parseTag(tagName, props);

    // support keys
    if (props.hasOwnProperty('key')) {
        key = props.key;
        props.key = undefined;
    }

    // support namespace
    if (props.hasOwnProperty('namespace')) {
        namespace = props.namespace;
        props.namespace = undefined;
    }

    // fix cursor bug
    if (tag === 'INPUT' &&
        !namespace &&
        props.hasOwnProperty('value') &&
        props.value !== undefined &&
        !isHook(props.value)
    ) {
        props.value = softSetHook(props.value);
    }

    transformProperties(props);

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props);
    }


    return new VNode(tag, props, childNodes, key, namespace);
}

function addChild(c, childNodes, tag, props) {
    if (typeof c === 'string') {
        childNodes.push(new VText(c));
    } else if (typeof c === 'number') {
        childNodes.push(new VText(String(c)));
    } else if (isChild(c)) {
        childNodes.push(c);
    } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
        }
    } else if (c === null || c === undefined) {
        return;
    } else {
        throw UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
                tagName: tag,
                properties: props
            }
        });
    }
}

function transformProperties(props) {
    for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
            var value = props[propName];

            if (isHook(value)) {
                continue;
            }

            if (propName.substr(0, 3) === 'ev-') {
                // add ev-foo support
                props[propName] = evHook(value);
            }
        }
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
}

function isChildren(x) {
    return typeof x === 'string' || isArray(x) || isChild(x);
}

function UnexpectedVirtualElement(data) {
    var err = new Error();

    err.type = 'virtual-hyperscript.unexpected.virtual-element';
    err.message = 'Unexpected virtual child passed to h().\n' +
        'Expected a VNode / Vthunk / VWidget / string but:\n' +
        'got:\n' +
        errorString(data.foreignObject) +
        '.\n' +
        'The parent vnode is:\n' +
        errorString(data.parentVnode)
        '\n' +
        'Suggested fix: change your `h(..., [ ... ])` callsite.';
    err.foreignObject = data.foreignObject;
    err.parentVnode = data.parentVnode;

    return err;
}

function errorString(obj) {
    try {
        return JSON.stringify(obj, null, '    ');
    } catch (e) {
        return String(obj);
    }
}


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var split = __webpack_require__(19);

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(tag, props) {
    if (!tag) {
        return 'DIV';
    }

    var noId = !(props.hasOwnProperty('id'));

    var tagParts = split(tag, classIdSplit);
    var tagName = null;

    if (notClassId.test(tagParts[1])) {
        tagName = 'DIV';
    }

    var classes, part, type, i;

    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];

        if (!part) {
            continue;
        }

        type = part.charAt(0);

        if (!tagName) {
            tagName = part;
        } else if (type === '.') {
            classes = classes || [];
            classes.push(part.substring(1, part.length));
        } else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }

    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }

        props.className = classes.join(' ');
    }

    return props.namespace ? tagName : tagName.toUpperCase();
}


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(3)
var isVNode = __webpack_require__(2)
var isWidget = __webpack_require__(0)
var isThunk = __webpack_require__(6)
var isVHook = __webpack_require__(7)

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var version = __webpack_require__(3)

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(12)
var isHook = __webpack_require__(7)

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(10)

var VPatch = __webpack_require__(16)
var isVNode = __webpack_require__(2)
var isVText = __webpack_require__(8)
var isWidget = __webpack_require__(0)
var isThunk = __webpack_require__(6)
var handleThunk = __webpack_require__(15)

var diffProps = __webpack_require__(54)

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free      // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var hiddenStore = __webpack_require__(57);

module.exports = createStore;

function createStore() {
    var key = {};

    return function (obj) {
        if ((typeof obj !== 'object' || obj === null) &&
            typeof obj !== 'function'
        ) {
            throw new Error('Weakmap-shim: Key must be object')
        }

        var store = obj.valueOf(key);
        return store && store.identity === key ?
            store : hiddenStore(obj, key);
    };
}


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = hiddenStore;

function hiddenStore(obj, key) {
    var store = { identity: key };
    var valueOf = obj.valueOf;

    Object.defineProperty(obj, "valueOf", {
        value: function (value) {
            return value !== key ?
                valueOf.apply(this, arguments) : store;
        },
        writable: true
    });

    return store;
}


/***/ }),
/* 58 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
/******/ ]);
});