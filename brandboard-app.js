(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/react/cjs/react.production.min.js
  var require_react_production_min = __commonJS({
    "node_modules/react/cjs/react.production.min.js"(exports) {
      "use strict";
      var l = Symbol.for("react.element");
      var n6 = Symbol.for("react.portal");
      var p2 = Symbol.for("react.fragment");
      var q = Symbol.for("react.strict_mode");
      var r3 = Symbol.for("react.profiler");
      var t7 = Symbol.for("react.provider");
      var u = Symbol.for("react.context");
      var v = Symbol.for("react.forward_ref");
      var w = Symbol.for("react.suspense");
      var x = Symbol.for("react.memo");
      var y = Symbol.for("react.lazy");
      var z = Symbol.iterator;
      function A(a24) {
        if (null === a24 || "object" !== typeof a24) return null;
        a24 = z && a24[z] || a24["@@iterator"];
        return "function" === typeof a24 ? a24 : null;
      }
      var B = { isMounted: function() {
        return false;
      }, enqueueForceUpdate: function() {
      }, enqueueReplaceState: function() {
      }, enqueueSetState: function() {
      } };
      var C = Object.assign;
      var D = {};
      function E(a24, b, e43) {
        this.props = a24;
        this.context = b;
        this.refs = D;
        this.updater = e43 || B;
      }
      E.prototype.isReactComponent = {};
      E.prototype.setState = function(a24, b) {
        if ("object" !== typeof a24 && "function" !== typeof a24 && null != a24) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, a24, b, "setState");
      };
      E.prototype.forceUpdate = function(a24) {
        this.updater.enqueueForceUpdate(this, a24, "forceUpdate");
      };
      function F() {
      }
      F.prototype = E.prototype;
      function G(a24, b, e43) {
        this.props = a24;
        this.context = b;
        this.refs = D;
        this.updater = e43 || B;
      }
      var H = G.prototype = new F();
      H.constructor = G;
      C(H, E.prototype);
      H.isPureReactComponent = true;
      var I2 = Array.isArray;
      var J = Object.prototype.hasOwnProperty;
      var K = { current: null };
      var L = { key: true, ref: true, __self: true, __source: true };
      function M(a24, b, e43) {
        var d, c5 = {}, k = null, h = null;
        if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) J.call(b, d) && !L.hasOwnProperty(d) && (c5[d] = b[d]);
        var g = arguments.length - 2;
        if (1 === g) c5.children = e43;
        else if (1 < g) {
          for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
          c5.children = f2;
        }
        if (a24 && a24.defaultProps) for (d in g = a24.defaultProps, g) void 0 === c5[d] && (c5[d] = g[d]);
        return { $$typeof: l, type: a24, key: k, ref: h, props: c5, _owner: K.current };
      }
      function N(a24, b) {
        return { $$typeof: l, type: a24.type, key: b, ref: a24.ref, props: a24.props, _owner: a24._owner };
      }
      function O(a24) {
        return "object" === typeof a24 && null !== a24 && a24.$$typeof === l;
      }
      function escape(a24) {
        var b = { "=": "=0", ":": "=2" };
        return "$" + a24.replace(/[=:]/g, function(a25) {
          return b[a25];
        });
      }
      var P = /\/+/g;
      function Q(a24, b) {
        return "object" === typeof a24 && null !== a24 && null != a24.key ? escape("" + a24.key) : b.toString(36);
      }
      function R(a24, b, e43, d, c5) {
        var k = typeof a24;
        if ("undefined" === k || "boolean" === k) a24 = null;
        var h = false;
        if (null === a24) h = true;
        else switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a24.$$typeof) {
              case l:
              case n6:
                h = true;
            }
        }
        if (h) return h = a24, c5 = c5(h), a24 = "" === d ? "." + Q(h, 0) : d, I2(c5) ? (e43 = "", null != a24 && (e43 = a24.replace(P, "$&/") + "/"), R(c5, b, e43, "", function(a25) {
          return a25;
        })) : null != c5 && (O(c5) && (c5 = N(c5, e43 + (!c5.key || h && h.key === c5.key ? "" : ("" + c5.key).replace(P, "$&/") + "/") + a24)), b.push(c5)), 1;
        h = 0;
        d = "" === d ? "." : d + ":";
        if (I2(a24)) for (var g = 0; g < a24.length; g++) {
          k = a24[g];
          var f2 = d + Q(k, g);
          h += R(k, b, e43, f2, c5);
        }
        else if (f2 = A(a24), "function" === typeof f2) for (a24 = f2.call(a24), g = 0; !(k = a24.next()).done; ) k = k.value, f2 = d + Q(k, g++), h += R(k, b, e43, f2, c5);
        else if ("object" === k) throw b = String(a24), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a24).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
        return h;
      }
      function S(a24, b, e43) {
        if (null == a24) return a24;
        var d = [], c5 = 0;
        R(a24, d, "", "", function(a25) {
          return b.call(e43, a25, c5++);
        });
        return d;
      }
      function T(a24) {
        if (-1 === a24._status) {
          var b = a24._result;
          b = b();
          b.then(function(b2) {
            if (0 === a24._status || -1 === a24._status) a24._status = 1, a24._result = b2;
          }, function(b2) {
            if (0 === a24._status || -1 === a24._status) a24._status = 2, a24._result = b2;
          });
          -1 === a24._status && (a24._status = 0, a24._result = b);
        }
        if (1 === a24._status) return a24._result.default;
        throw a24._result;
      }
      var U = { current: null };
      var V = { transition: null };
      var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
      function X() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      exports.Children = { map: S, forEach: function(a24, b, e43) {
        S(a24, function() {
          b.apply(this, arguments);
        }, e43);
      }, count: function(a24) {
        var b = 0;
        S(a24, function() {
          b++;
        });
        return b;
      }, toArray: function(a24) {
        return S(a24, function(a25) {
          return a25;
        }) || [];
      }, only: function(a24) {
        if (!O(a24)) throw Error("React.Children.only expected to receive a single React element child.");
        return a24;
      } };
      exports.Component = E;
      exports.Fragment = p2;
      exports.Profiler = r3;
      exports.PureComponent = G;
      exports.StrictMode = q;
      exports.Suspense = w;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
      exports.act = X;
      exports.cloneElement = function(a24, b, e43) {
        if (null === a24 || void 0 === a24) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a24 + ".");
        var d = C({}, a24.props), c5 = a24.key, k = a24.ref, h = a24._owner;
        if (null != b) {
          void 0 !== b.ref && (k = b.ref, h = K.current);
          void 0 !== b.key && (c5 = "" + b.key);
          if (a24.type && a24.type.defaultProps) var g = a24.type.defaultProps;
          for (f2 in b) J.call(b, f2) && !L.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
        }
        var f2 = arguments.length - 2;
        if (1 === f2) d.children = e43;
        else if (1 < f2) {
          g = Array(f2);
          for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
          d.children = g;
        }
        return { $$typeof: l, type: a24.type, key: c5, ref: k, props: d, _owner: h };
      };
      exports.createContext = function(a24) {
        a24 = { $$typeof: u, _currentValue: a24, _currentValue2: a24, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
        a24.Provider = { $$typeof: t7, _context: a24 };
        return a24.Consumer = a24;
      };
      exports.createElement = M;
      exports.createFactory = function(a24) {
        var b = M.bind(null, a24);
        b.type = a24;
        return b;
      };
      exports.createRef = function() {
        return { current: null };
      };
      exports.forwardRef = function(a24) {
        return { $$typeof: v, render: a24 };
      };
      exports.isValidElement = O;
      exports.lazy = function(a24) {
        return { $$typeof: y, _payload: { _status: -1, _result: a24 }, _init: T };
      };
      exports.memo = function(a24, b) {
        return { $$typeof: x, type: a24, compare: void 0 === b ? null : b };
      };
      exports.startTransition = function(a24) {
        var b = V.transition;
        V.transition = {};
        try {
          a24();
        } finally {
          V.transition = b;
        }
      };
      exports.unstable_act = X;
      exports.useCallback = function(a24, b) {
        return U.current.useCallback(a24, b);
      };
      exports.useContext = function(a24) {
        return U.current.useContext(a24);
      };
      exports.useDebugValue = function() {
      };
      exports.useDeferredValue = function(a24) {
        return U.current.useDeferredValue(a24);
      };
      exports.useEffect = function(a24, b) {
        return U.current.useEffect(a24, b);
      };
      exports.useId = function() {
        return U.current.useId();
      };
      exports.useImperativeHandle = function(a24, b, e43) {
        return U.current.useImperativeHandle(a24, b, e43);
      };
      exports.useInsertionEffect = function(a24, b) {
        return U.current.useInsertionEffect(a24, b);
      };
      exports.useLayoutEffect = function(a24, b) {
        return U.current.useLayoutEffect(a24, b);
      };
      exports.useMemo = function(a24, b) {
        return U.current.useMemo(a24, b);
      };
      exports.useReducer = function(a24, b, e43) {
        return U.current.useReducer(a24, b, e43);
      };
      exports.useRef = function(a24) {
        return U.current.useRef(a24);
      };
      exports.useState = function(a24) {
        return U.current.useState(a24);
      };
      exports.useSyncExternalStore = function(a24, b, e43) {
        return U.current.useSyncExternalStore(a24, b, e43);
      };
      exports.useTransition = function() {
        return U.current.useTransition();
      };
      exports.version = "18.3.1";
    }
  });

  // node_modules/react/index.js
  var require_react = __commonJS({
    "node_modules/react/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/scheduler/cjs/scheduler.production.min.js
  var require_scheduler_production_min = __commonJS({
    "node_modules/scheduler/cjs/scheduler.production.min.js"(exports) {
      "use strict";
      function f2(a24, b) {
        var c5 = a24.length;
        a24.push(b);
        a: for (; 0 < c5; ) {
          var d = c5 - 1 >>> 1, e43 = a24[d];
          if (0 < g(e43, b)) a24[d] = b, a24[c5] = e43, c5 = d;
          else break a;
        }
      }
      function h(a24) {
        return 0 === a24.length ? null : a24[0];
      }
      function k(a24) {
        if (0 === a24.length) return null;
        var b = a24[0], c5 = a24.pop();
        if (c5 !== b) {
          a24[0] = c5;
          a: for (var d = 0, e43 = a24.length, w = e43 >>> 1; d < w; ) {
            var m2 = 2 * (d + 1) - 1, C = a24[m2], n6 = m2 + 1, x = a24[n6];
            if (0 > g(C, c5)) n6 < e43 && 0 > g(x, C) ? (a24[d] = x, a24[n6] = c5, d = n6) : (a24[d] = C, a24[m2] = c5, d = m2);
            else if (n6 < e43 && 0 > g(x, c5)) a24[d] = x, a24[n6] = c5, d = n6;
            else break a;
          }
        }
        return b;
      }
      function g(a24, b) {
        var c5 = a24.sortIndex - b.sortIndex;
        return 0 !== c5 ? c5 : a24.id - b.id;
      }
      if ("object" === typeof performance && "function" === typeof performance.now) {
        l = performance;
        exports.unstable_now = function() {
          return l.now();
        };
      } else {
        p2 = Date, q = p2.now();
        exports.unstable_now = function() {
          return p2.now() - q;
        };
      }
      var l;
      var p2;
      var q;
      var r3 = [];
      var t7 = [];
      var u = 1;
      var v = null;
      var y = 3;
      var z = false;
      var A = false;
      var B = false;
      var D = "function" === typeof setTimeout ? setTimeout : null;
      var E = "function" === typeof clearTimeout ? clearTimeout : null;
      var F = "undefined" !== typeof setImmediate ? setImmediate : null;
      "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function G(a24) {
        for (var b = h(t7); null !== b; ) {
          if (null === b.callback) k(t7);
          else if (b.startTime <= a24) k(t7), b.sortIndex = b.expirationTime, f2(r3, b);
          else break;
          b = h(t7);
        }
      }
      function H(a24) {
        B = false;
        G(a24);
        if (!A) if (null !== h(r3)) A = true, I2(J);
        else {
          var b = h(t7);
          null !== b && K(H, b.startTime - a24);
        }
      }
      function J(a24, b) {
        A = false;
        B && (B = false, E(L), L = -1);
        z = true;
        var c5 = y;
        try {
          G(b);
          for (v = h(r3); null !== v && (!(v.expirationTime > b) || a24 && !M()); ) {
            var d = v.callback;
            if ("function" === typeof d) {
              v.callback = null;
              y = v.priorityLevel;
              var e43 = d(v.expirationTime <= b);
              b = exports.unstable_now();
              "function" === typeof e43 ? v.callback = e43 : v === h(r3) && k(r3);
              G(b);
            } else k(r3);
            v = h(r3);
          }
          if (null !== v) var w = true;
          else {
            var m2 = h(t7);
            null !== m2 && K(H, m2.startTime - b);
            w = false;
          }
          return w;
        } finally {
          v = null, y = c5, z = false;
        }
      }
      var N = false;
      var O = null;
      var L = -1;
      var P = 5;
      var Q = -1;
      function M() {
        return exports.unstable_now() - Q < P ? false : true;
      }
      function R() {
        if (null !== O) {
          var a24 = exports.unstable_now();
          Q = a24;
          var b = true;
          try {
            b = O(true, a24);
          } finally {
            b ? S() : (N = false, O = null);
          }
        } else N = false;
      }
      var S;
      if ("function" === typeof F) S = function() {
        F(R);
      };
      else if ("undefined" !== typeof MessageChannel) {
        T = new MessageChannel(), U = T.port2;
        T.port1.onmessage = R;
        S = function() {
          U.postMessage(null);
        };
      } else S = function() {
        D(R, 0);
      };
      var T;
      var U;
      function I2(a24) {
        O = a24;
        N || (N = true, S());
      }
      function K(a24, b) {
        L = D(function() {
          a24(exports.unstable_now());
        }, b);
      }
      exports.unstable_IdlePriority = 5;
      exports.unstable_ImmediatePriority = 1;
      exports.unstable_LowPriority = 4;
      exports.unstable_NormalPriority = 3;
      exports.unstable_Profiling = null;
      exports.unstable_UserBlockingPriority = 2;
      exports.unstable_cancelCallback = function(a24) {
        a24.callback = null;
      };
      exports.unstable_continueExecution = function() {
        A || z || (A = true, I2(J));
      };
      exports.unstable_forceFrameRate = function(a24) {
        0 > a24 || 125 < a24 ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P = 0 < a24 ? Math.floor(1e3 / a24) : 5;
      };
      exports.unstable_getCurrentPriorityLevel = function() {
        return y;
      };
      exports.unstable_getFirstCallbackNode = function() {
        return h(r3);
      };
      exports.unstable_next = function(a24) {
        switch (y) {
          case 1:
          case 2:
          case 3:
            var b = 3;
            break;
          default:
            b = y;
        }
        var c5 = y;
        y = b;
        try {
          return a24();
        } finally {
          y = c5;
        }
      };
      exports.unstable_pauseExecution = function() {
      };
      exports.unstable_requestPaint = function() {
      };
      exports.unstable_runWithPriority = function(a24, b) {
        switch (a24) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            a24 = 3;
        }
        var c5 = y;
        y = a24;
        try {
          return b();
        } finally {
          y = c5;
        }
      };
      exports.unstable_scheduleCallback = function(a24, b, c5) {
        var d = exports.unstable_now();
        "object" === typeof c5 && null !== c5 ? (c5 = c5.delay, c5 = "number" === typeof c5 && 0 < c5 ? d + c5 : d) : c5 = d;
        switch (a24) {
          case 1:
            var e43 = -1;
            break;
          case 2:
            e43 = 250;
            break;
          case 5:
            e43 = 1073741823;
            break;
          case 4:
            e43 = 1e4;
            break;
          default:
            e43 = 5e3;
        }
        e43 = c5 + e43;
        a24 = { id: u++, callback: b, priorityLevel: a24, startTime: c5, expirationTime: e43, sortIndex: -1 };
        c5 > d ? (a24.sortIndex = c5, f2(t7, a24), null === h(r3) && a24 === h(t7) && (B ? (E(L), L = -1) : B = true, K(H, c5 - d))) : (a24.sortIndex = e43, f2(r3, a24), A || z || (A = true, I2(J)));
        return a24;
      };
      exports.unstable_shouldYield = M;
      exports.unstable_wrapCallback = function(a24) {
        var b = y;
        return function() {
          var c5 = y;
          y = b;
          try {
            return a24.apply(this, arguments);
          } finally {
            y = c5;
          }
        };
      };
    }
  });

  // node_modules/scheduler/index.js
  var require_scheduler = __commonJS({
    "node_modules/scheduler/index.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_scheduler_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/cjs/react-dom.production.min.js
  var require_react_dom_production_min = __commonJS({
    "node_modules/react-dom/cjs/react-dom.production.min.js"(exports) {
      "use strict";
      var aa = require_react();
      var ca = require_scheduler();
      function p2(a24) {
        for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a24, c5 = 1; c5 < arguments.length; c5++) b += "&args[]=" + encodeURIComponent(arguments[c5]);
        return "Minified React error #" + a24 + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
      }
      var da = /* @__PURE__ */ new Set();
      var ea = {};
      function fa(a24, b) {
        ha(a24, b);
        ha(a24 + "Capture", b);
      }
      function ha(a24, b) {
        ea[a24] = b;
        for (a24 = 0; a24 < b.length; a24++) da.add(b[a24]);
      }
      var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement);
      var ja = Object.prototype.hasOwnProperty;
      var ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
      var la = {};
      var ma = {};
      function oa(a24) {
        if (ja.call(ma, a24)) return true;
        if (ja.call(la, a24)) return false;
        if (ka.test(a24)) return ma[a24] = true;
        la[a24] = true;
        return false;
      }
      function pa(a24, b, c5, d) {
        if (null !== c5 && 0 === c5.type) return false;
        switch (typeof b) {
          case "function":
          case "symbol":
            return true;
          case "boolean":
            if (d) return false;
            if (null !== c5) return !c5.acceptsBooleans;
            a24 = a24.toLowerCase().slice(0, 5);
            return "data-" !== a24 && "aria-" !== a24;
          default:
            return false;
        }
      }
      function qa(a24, b, c5, d) {
        if (null === b || "undefined" === typeof b || pa(a24, b, c5, d)) return true;
        if (d) return false;
        if (null !== c5) switch (c5.type) {
          case 3:
            return !b;
          case 4:
            return false === b;
          case 5:
            return isNaN(b);
          case 6:
            return isNaN(b) || 1 > b;
        }
        return false;
      }
      function v(a24, b, c5, d, e43, f2, g) {
        this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
        this.attributeName = d;
        this.attributeNamespace = e43;
        this.mustUseProperty = c5;
        this.propertyName = a24;
        this.type = b;
        this.sanitizeURL = f2;
        this.removeEmptyString = g;
      }
      var z = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a24) {
        z[a24] = new v(a24, 0, false, a24, null, false, false);
      });
      [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a24) {
        var b = a24[0];
        z[b] = new v(b, 1, false, a24[1], null, false, false);
      });
      ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a24) {
        z[a24] = new v(a24, 2, false, a24.toLowerCase(), null, false, false);
      });
      ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a24) {
        z[a24] = new v(a24, 2, false, a24, null, false, false);
      });
      "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a24) {
        z[a24] = new v(a24, 3, false, a24.toLowerCase(), null, false, false);
      });
      ["checked", "multiple", "muted", "selected"].forEach(function(a24) {
        z[a24] = new v(a24, 3, true, a24, null, false, false);
      });
      ["capture", "download"].forEach(function(a24) {
        z[a24] = new v(a24, 4, false, a24, null, false, false);
      });
      ["cols", "rows", "size", "span"].forEach(function(a24) {
        z[a24] = new v(a24, 6, false, a24, null, false, false);
      });
      ["rowSpan", "start"].forEach(function(a24) {
        z[a24] = new v(a24, 5, false, a24.toLowerCase(), null, false, false);
      });
      var ra = /[\-:]([a-z])/g;
      function sa(a24) {
        return a24[1].toUpperCase();
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a24) {
        var b = a24.replace(
          ra,
          sa
        );
        z[b] = new v(b, 1, false, a24, null, false, false);
      });
      "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a24) {
        var b = a24.replace(ra, sa);
        z[b] = new v(b, 1, false, a24, "http://www.w3.org/1999/xlink", false, false);
      });
      ["xml:base", "xml:lang", "xml:space"].forEach(function(a24) {
        var b = a24.replace(ra, sa);
        z[b] = new v(b, 1, false, a24, "http://www.w3.org/XML/1998/namespace", false, false);
      });
      ["tabIndex", "crossOrigin"].forEach(function(a24) {
        z[a24] = new v(a24, 1, false, a24.toLowerCase(), null, false, false);
      });
      z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
      ["src", "href", "action", "formAction"].forEach(function(a24) {
        z[a24] = new v(a24, 1, false, a24.toLowerCase(), null, true, true);
      });
      function ta(a24, b, c5, d) {
        var e43 = z.hasOwnProperty(b) ? z[b] : null;
        if (null !== e43 ? 0 !== e43.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c5, e43, d) && (c5 = null), d || null === e43 ? oa(b) && (null === c5 ? a24.removeAttribute(b) : a24.setAttribute(b, "" + c5)) : e43.mustUseProperty ? a24[e43.propertyName] = null === c5 ? 3 === e43.type ? false : "" : c5 : (b = e43.attributeName, d = e43.attributeNamespace, null === c5 ? a24.removeAttribute(b) : (e43 = e43.type, c5 = 3 === e43 || 4 === e43 && true === c5 ? "" : "" + c5, d ? a24.setAttributeNS(d, b, c5) : a24.setAttribute(b, c5)));
      }
      var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      var va = Symbol.for("react.element");
      var wa = Symbol.for("react.portal");
      var ya = Symbol.for("react.fragment");
      var za = Symbol.for("react.strict_mode");
      var Aa = Symbol.for("react.profiler");
      var Ba = Symbol.for("react.provider");
      var Ca = Symbol.for("react.context");
      var Da = Symbol.for("react.forward_ref");
      var Ea = Symbol.for("react.suspense");
      var Fa = Symbol.for("react.suspense_list");
      var Ga = Symbol.for("react.memo");
      var Ha = Symbol.for("react.lazy");
      Symbol.for("react.scope");
      Symbol.for("react.debug_trace_mode");
      var Ia = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden");
      Symbol.for("react.cache");
      Symbol.for("react.tracing_marker");
      var Ja = Symbol.iterator;
      function Ka(a24) {
        if (null === a24 || "object" !== typeof a24) return null;
        a24 = Ja && a24[Ja] || a24["@@iterator"];
        return "function" === typeof a24 ? a24 : null;
      }
      var A = Object.assign;
      var La;
      function Ma(a24) {
        if (void 0 === La) try {
          throw Error();
        } catch (c5) {
          var b = c5.stack.trim().match(/\n( *(at )?)/);
          La = b && b[1] || "";
        }
        return "\n" + La + a24;
      }
      var Na = false;
      function Oa(a24, b) {
        if (!a24 || Na) return "";
        Na = true;
        var c5 = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (b) if (b = function() {
            throw Error();
          }, Object.defineProperty(b.prototype, "props", { set: function() {
            throw Error();
          } }), "object" === typeof Reflect && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (l) {
              var d = l;
            }
            Reflect.construct(a24, [], b);
          } else {
            try {
              b.call();
            } catch (l) {
              d = l;
            }
            a24.call(b.prototype);
          }
          else {
            try {
              throw Error();
            } catch (l) {
              d = l;
            }
            a24();
          }
        } catch (l) {
          if (l && d && "string" === typeof l.stack) {
            for (var e43 = l.stack.split("\n"), f2 = d.stack.split("\n"), g = e43.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e43[g] !== f2[h]; ) h--;
            for (; 1 <= g && 0 <= h; g--, h--) if (e43[g] !== f2[h]) {
              if (1 !== g || 1 !== h) {
                do
                  if (g--, h--, 0 > h || e43[g] !== f2[h]) {
                    var k = "\n" + e43[g].replace(" at new ", " at ");
                    a24.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", a24.displayName));
                    return k;
                  }
                while (1 <= g && 0 <= h);
              }
              break;
            }
          }
        } finally {
          Na = false, Error.prepareStackTrace = c5;
        }
        return (a24 = a24 ? a24.displayName || a24.name : "") ? Ma(a24) : "";
      }
      function Pa(a24) {
        switch (a24.tag) {
          case 5:
            return Ma(a24.type);
          case 16:
            return Ma("Lazy");
          case 13:
            return Ma("Suspense");
          case 19:
            return Ma("SuspenseList");
          case 0:
          case 2:
          case 15:
            return a24 = Oa(a24.type, false), a24;
          case 11:
            return a24 = Oa(a24.type.render, false), a24;
          case 1:
            return a24 = Oa(a24.type, true), a24;
          default:
            return "";
        }
      }
      function Qa(a24) {
        if (null == a24) return null;
        if ("function" === typeof a24) return a24.displayName || a24.name || null;
        if ("string" === typeof a24) return a24;
        switch (a24) {
          case ya:
            return "Fragment";
          case wa:
            return "Portal";
          case Aa:
            return "Profiler";
          case za:
            return "StrictMode";
          case Ea:
            return "Suspense";
          case Fa:
            return "SuspenseList";
        }
        if ("object" === typeof a24) switch (a24.$$typeof) {
          case Ca:
            return (a24.displayName || "Context") + ".Consumer";
          case Ba:
            return (a24._context.displayName || "Context") + ".Provider";
          case Da:
            var b = a24.render;
            a24 = a24.displayName;
            a24 || (a24 = b.displayName || b.name || "", a24 = "" !== a24 ? "ForwardRef(" + a24 + ")" : "ForwardRef");
            return a24;
          case Ga:
            return b = a24.displayName || null, null !== b ? b : Qa(a24.type) || "Memo";
          case Ha:
            b = a24._payload;
            a24 = a24._init;
            try {
              return Qa(a24(b));
            } catch (c5) {
            }
        }
        return null;
      }
      function Ra(a24) {
        var b = a24.type;
        switch (a24.tag) {
          case 24:
            return "Cache";
          case 9:
            return (b.displayName || "Context") + ".Consumer";
          case 10:
            return (b._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return a24 = b.render, a24 = a24.displayName || a24.name || "", b.displayName || ("" !== a24 ? "ForwardRef(" + a24 + ")" : "ForwardRef");
          case 7:
            return "Fragment";
          case 5:
            return b;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return Qa(b);
          case 8:
            return b === za ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if ("function" === typeof b) return b.displayName || b.name || null;
            if ("string" === typeof b) return b;
        }
        return null;
      }
      function Sa(a24) {
        switch (typeof a24) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
            return a24;
          case "object":
            return a24;
          default:
            return "";
        }
      }
      function Ta(a24) {
        var b = a24.type;
        return (a24 = a24.nodeName) && "input" === a24.toLowerCase() && ("checkbox" === b || "radio" === b);
      }
      function Ua(a24) {
        var b = Ta(a24) ? "checked" : "value", c5 = Object.getOwnPropertyDescriptor(a24.constructor.prototype, b), d = "" + a24[b];
        if (!a24.hasOwnProperty(b) && "undefined" !== typeof c5 && "function" === typeof c5.get && "function" === typeof c5.set) {
          var e43 = c5.get, f2 = c5.set;
          Object.defineProperty(a24, b, { configurable: true, get: function() {
            return e43.call(this);
          }, set: function(a25) {
            d = "" + a25;
            f2.call(this, a25);
          } });
          Object.defineProperty(a24, b, { enumerable: c5.enumerable });
          return { getValue: function() {
            return d;
          }, setValue: function(a25) {
            d = "" + a25;
          }, stopTracking: function() {
            a24._valueTracker = null;
            delete a24[b];
          } };
        }
      }
      function Va(a24) {
        a24._valueTracker || (a24._valueTracker = Ua(a24));
      }
      function Wa(a24) {
        if (!a24) return false;
        var b = a24._valueTracker;
        if (!b) return true;
        var c5 = b.getValue();
        var d = "";
        a24 && (d = Ta(a24) ? a24.checked ? "true" : "false" : a24.value);
        a24 = d;
        return a24 !== c5 ? (b.setValue(a24), true) : false;
      }
      function Xa(a24) {
        a24 = a24 || ("undefined" !== typeof document ? document : void 0);
        if ("undefined" === typeof a24) return null;
        try {
          return a24.activeElement || a24.body;
        } catch (b) {
          return a24.body;
        }
      }
      function Ya(a24, b) {
        var c5 = b.checked;
        return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c5 ? c5 : a24._wrapperState.initialChecked });
      }
      function Za(a24, b) {
        var c5 = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
        c5 = Sa(null != b.value ? b.value : c5);
        a24._wrapperState = { initialChecked: d, initialValue: c5, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
      }
      function ab(a24, b) {
        b = b.checked;
        null != b && ta(a24, "checked", b, false);
      }
      function bb(a24, b) {
        ab(a24, b);
        var c5 = Sa(b.value), d = b.type;
        if (null != c5) if ("number" === d) {
          if (0 === c5 && "" === a24.value || a24.value != c5) a24.value = "" + c5;
        } else a24.value !== "" + c5 && (a24.value = "" + c5);
        else if ("submit" === d || "reset" === d) {
          a24.removeAttribute("value");
          return;
        }
        b.hasOwnProperty("value") ? cb(a24, b.type, c5) : b.hasOwnProperty("defaultValue") && cb(a24, b.type, Sa(b.defaultValue));
        null == b.checked && null != b.defaultChecked && (a24.defaultChecked = !!b.defaultChecked);
      }
      function db2(a24, b, c5) {
        if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
          var d = b.type;
          if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
          b = "" + a24._wrapperState.initialValue;
          c5 || b === a24.value || (a24.value = b);
          a24.defaultValue = b;
        }
        c5 = a24.name;
        "" !== c5 && (a24.name = "");
        a24.defaultChecked = !!a24._wrapperState.initialChecked;
        "" !== c5 && (a24.name = c5);
      }
      function cb(a24, b, c5) {
        if ("number" !== b || Xa(a24.ownerDocument) !== a24) null == c5 ? a24.defaultValue = "" + a24._wrapperState.initialValue : a24.defaultValue !== "" + c5 && (a24.defaultValue = "" + c5);
      }
      var eb = Array.isArray;
      function fb(a24, b, c5, d) {
        a24 = a24.options;
        if (b) {
          b = {};
          for (var e43 = 0; e43 < c5.length; e43++) b["$" + c5[e43]] = true;
          for (c5 = 0; c5 < a24.length; c5++) e43 = b.hasOwnProperty("$" + a24[c5].value), a24[c5].selected !== e43 && (a24[c5].selected = e43), e43 && d && (a24[c5].defaultSelected = true);
        } else {
          c5 = "" + Sa(c5);
          b = null;
          for (e43 = 0; e43 < a24.length; e43++) {
            if (a24[e43].value === c5) {
              a24[e43].selected = true;
              d && (a24[e43].defaultSelected = true);
              return;
            }
            null !== b || a24[e43].disabled || (b = a24[e43]);
          }
          null !== b && (b.selected = true);
        }
      }
      function gb(a24, b) {
        if (null != b.dangerouslySetInnerHTML) throw Error(p2(91));
        return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a24._wrapperState.initialValue });
      }
      function hb(a24, b) {
        var c5 = b.value;
        if (null == c5) {
          c5 = b.children;
          b = b.defaultValue;
          if (null != c5) {
            if (null != b) throw Error(p2(92));
            if (eb(c5)) {
              if (1 < c5.length) throw Error(p2(93));
              c5 = c5[0];
            }
            b = c5;
          }
          null == b && (b = "");
          c5 = b;
        }
        a24._wrapperState = { initialValue: Sa(c5) };
      }
      function ib(a24, b) {
        var c5 = Sa(b.value), d = Sa(b.defaultValue);
        null != c5 && (c5 = "" + c5, c5 !== a24.value && (a24.value = c5), null == b.defaultValue && a24.defaultValue !== c5 && (a24.defaultValue = c5));
        null != d && (a24.defaultValue = "" + d);
      }
      function jb(a24) {
        var b = a24.textContent;
        b === a24._wrapperState.initialValue && "" !== b && null !== b && (a24.value = b);
      }
      function kb(a24) {
        switch (a24) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function lb(a24, b) {
        return null == a24 || "http://www.w3.org/1999/xhtml" === a24 ? kb(b) : "http://www.w3.org/2000/svg" === a24 && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a24;
      }
      var mb;
      var nb = (function(a24) {
        return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c5, d, e43) {
          MSApp.execUnsafeLocalFunction(function() {
            return a24(b, c5, d, e43);
          });
        } : a24;
      })(function(a24, b) {
        if ("http://www.w3.org/2000/svg" !== a24.namespaceURI || "innerHTML" in a24) a24.innerHTML = b;
        else {
          mb = mb || document.createElement("div");
          mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
          for (b = mb.firstChild; a24.firstChild; ) a24.removeChild(a24.firstChild);
          for (; b.firstChild; ) a24.appendChild(b.firstChild);
        }
      });
      function ob(a24, b) {
        if (b) {
          var c5 = a24.firstChild;
          if (c5 && c5 === a24.lastChild && 3 === c5.nodeType) {
            c5.nodeValue = b;
            return;
          }
        }
        a24.textContent = b;
      }
      var pb = {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageOutset: true,
        borderImageSlice: true,
        borderImageWidth: true,
        boxFlex: true,
        boxFlexGroup: true,
        boxOrdinalGroup: true,
        columnCount: true,
        columns: true,
        flex: true,
        flexGrow: true,
        flexPositive: true,
        flexShrink: true,
        flexNegative: true,
        flexOrder: true,
        gridArea: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowSpan: true,
        gridRowStart: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnSpan: true,
        gridColumnStart: true,
        fontWeight: true,
        lineClamp: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        tabSize: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeDasharray: true,
        strokeDashoffset: true,
        strokeMiterlimit: true,
        strokeOpacity: true,
        strokeWidth: true
      };
      var qb = ["Webkit", "ms", "Moz", "O"];
      Object.keys(pb).forEach(function(a24) {
        qb.forEach(function(b) {
          b = b + a24.charAt(0).toUpperCase() + a24.substring(1);
          pb[b] = pb[a24];
        });
      });
      function rb(a24, b, c5) {
        return null == b || "boolean" === typeof b || "" === b ? "" : c5 || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a24) && pb[a24] ? ("" + b).trim() : b + "px";
      }
      function sb(a24, b) {
        a24 = a24.style;
        for (var c5 in b) if (b.hasOwnProperty(c5)) {
          var d = 0 === c5.indexOf("--"), e43 = rb(c5, b[c5], d);
          "float" === c5 && (c5 = "cssFloat");
          d ? a24.setProperty(c5, e43) : a24[c5] = e43;
        }
      }
      var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
      function ub(a24, b) {
        if (b) {
          if (tb[a24] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p2(137, a24));
          if (null != b.dangerouslySetInnerHTML) {
            if (null != b.children) throw Error(p2(60));
            if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p2(61));
          }
          if (null != b.style && "object" !== typeof b.style) throw Error(p2(62));
        }
      }
      function vb(a24, b) {
        if (-1 === a24.indexOf("-")) return "string" === typeof b.is;
        switch (a24) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return false;
          default:
            return true;
        }
      }
      var wb = null;
      function xb(a24) {
        a24 = a24.target || a24.srcElement || window;
        a24.correspondingUseElement && (a24 = a24.correspondingUseElement);
        return 3 === a24.nodeType ? a24.parentNode : a24;
      }
      var yb = null;
      var zb = null;
      var Ab = null;
      function Bb(a24) {
        if (a24 = Cb(a24)) {
          if ("function" !== typeof yb) throw Error(p2(280));
          var b = a24.stateNode;
          b && (b = Db(b), yb(a24.stateNode, a24.type, b));
        }
      }
      function Eb(a24) {
        zb ? Ab ? Ab.push(a24) : Ab = [a24] : zb = a24;
      }
      function Fb() {
        if (zb) {
          var a24 = zb, b = Ab;
          Ab = zb = null;
          Bb(a24);
          if (b) for (a24 = 0; a24 < b.length; a24++) Bb(b[a24]);
        }
      }
      function Gb(a24, b) {
        return a24(b);
      }
      function Hb() {
      }
      var Ib = false;
      function Jb(a24, b, c5) {
        if (Ib) return a24(b, c5);
        Ib = true;
        try {
          return Gb(a24, b, c5);
        } finally {
          if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
        }
      }
      function Kb(a24, b) {
        var c5 = a24.stateNode;
        if (null === c5) return null;
        var d = Db(c5);
        if (null === d) return null;
        c5 = d[b];
        a: switch (b) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (d = !d.disabled) || (a24 = a24.type, d = !("button" === a24 || "input" === a24 || "select" === a24 || "textarea" === a24));
            a24 = !d;
            break a;
          default:
            a24 = false;
        }
        if (a24) return null;
        if (c5 && "function" !== typeof c5) throw Error(p2(231, b, typeof c5));
        return c5;
      }
      var Lb = false;
      if (ia) try {
        Mb = {};
        Object.defineProperty(Mb, "passive", { get: function() {
          Lb = true;
        } });
        window.addEventListener("test", Mb, Mb);
        window.removeEventListener("test", Mb, Mb);
      } catch (a24) {
        Lb = false;
      }
      var Mb;
      function Nb(a24, b, c5, d, e43, f2, g, h, k) {
        var l = Array.prototype.slice.call(arguments, 3);
        try {
          b.apply(c5, l);
        } catch (m2) {
          this.onError(m2);
        }
      }
      var Ob = false;
      var Pb = null;
      var Qb = false;
      var Rb = null;
      var Sb = { onError: function(a24) {
        Ob = true;
        Pb = a24;
      } };
      function Tb(a24, b, c5, d, e43, f2, g, h, k) {
        Ob = false;
        Pb = null;
        Nb.apply(Sb, arguments);
      }
      function Ub(a24, b, c5, d, e43, f2, g, h, k) {
        Tb.apply(this, arguments);
        if (Ob) {
          if (Ob) {
            var l = Pb;
            Ob = false;
            Pb = null;
          } else throw Error(p2(198));
          Qb || (Qb = true, Rb = l);
        }
      }
      function Vb(a24) {
        var b = a24, c5 = a24;
        if (a24.alternate) for (; b.return; ) b = b.return;
        else {
          a24 = b;
          do
            b = a24, 0 !== (b.flags & 4098) && (c5 = b.return), a24 = b.return;
          while (a24);
        }
        return 3 === b.tag ? c5 : null;
      }
      function Wb(a24) {
        if (13 === a24.tag) {
          var b = a24.memoizedState;
          null === b && (a24 = a24.alternate, null !== a24 && (b = a24.memoizedState));
          if (null !== b) return b.dehydrated;
        }
        return null;
      }
      function Xb(a24) {
        if (Vb(a24) !== a24) throw Error(p2(188));
      }
      function Yb(a24) {
        var b = a24.alternate;
        if (!b) {
          b = Vb(a24);
          if (null === b) throw Error(p2(188));
          return b !== a24 ? null : a24;
        }
        for (var c5 = a24, d = b; ; ) {
          var e43 = c5.return;
          if (null === e43) break;
          var f2 = e43.alternate;
          if (null === f2) {
            d = e43.return;
            if (null !== d) {
              c5 = d;
              continue;
            }
            break;
          }
          if (e43.child === f2.child) {
            for (f2 = e43.child; f2; ) {
              if (f2 === c5) return Xb(e43), a24;
              if (f2 === d) return Xb(e43), b;
              f2 = f2.sibling;
            }
            throw Error(p2(188));
          }
          if (c5.return !== d.return) c5 = e43, d = f2;
          else {
            for (var g = false, h = e43.child; h; ) {
              if (h === c5) {
                g = true;
                c5 = e43;
                d = f2;
                break;
              }
              if (h === d) {
                g = true;
                d = e43;
                c5 = f2;
                break;
              }
              h = h.sibling;
            }
            if (!g) {
              for (h = f2.child; h; ) {
                if (h === c5) {
                  g = true;
                  c5 = f2;
                  d = e43;
                  break;
                }
                if (h === d) {
                  g = true;
                  d = f2;
                  c5 = e43;
                  break;
                }
                h = h.sibling;
              }
              if (!g) throw Error(p2(189));
            }
          }
          if (c5.alternate !== d) throw Error(p2(190));
        }
        if (3 !== c5.tag) throw Error(p2(188));
        return c5.stateNode.current === c5 ? a24 : b;
      }
      function Zb(a24) {
        a24 = Yb(a24);
        return null !== a24 ? $b(a24) : null;
      }
      function $b(a24) {
        if (5 === a24.tag || 6 === a24.tag) return a24;
        for (a24 = a24.child; null !== a24; ) {
          var b = $b(a24);
          if (null !== b) return b;
          a24 = a24.sibling;
        }
        return null;
      }
      var ac = ca.unstable_scheduleCallback;
      var bc = ca.unstable_cancelCallback;
      var cc = ca.unstable_shouldYield;
      var dc = ca.unstable_requestPaint;
      var B = ca.unstable_now;
      var ec = ca.unstable_getCurrentPriorityLevel;
      var fc = ca.unstable_ImmediatePriority;
      var gc = ca.unstable_UserBlockingPriority;
      var hc = ca.unstable_NormalPriority;
      var ic = ca.unstable_LowPriority;
      var jc = ca.unstable_IdlePriority;
      var kc = null;
      var lc = null;
      function mc(a24) {
        if (lc && "function" === typeof lc.onCommitFiberRoot) try {
          lc.onCommitFiberRoot(kc, a24, void 0, 128 === (a24.current.flags & 128));
        } catch (b) {
        }
      }
      var oc = Math.clz32 ? Math.clz32 : nc;
      var pc = Math.log;
      var qc = Math.LN2;
      function nc(a24) {
        a24 >>>= 0;
        return 0 === a24 ? 32 : 31 - (pc(a24) / qc | 0) | 0;
      }
      var rc = 64;
      var sc = 4194304;
      function tc(a24) {
        switch (a24 & -a24) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return a24 & 4194240;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return a24 & 130023424;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return a24;
        }
      }
      function uc(a24, b) {
        var c5 = a24.pendingLanes;
        if (0 === c5) return 0;
        var d = 0, e43 = a24.suspendedLanes, f2 = a24.pingedLanes, g = c5 & 268435455;
        if (0 !== g) {
          var h = g & ~e43;
          0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
        } else g = c5 & ~e43, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
        if (0 === d) return 0;
        if (0 !== b && b !== d && 0 === (b & e43) && (e43 = d & -d, f2 = b & -b, e43 >= f2 || 16 === e43 && 0 !== (f2 & 4194240))) return b;
        0 !== (d & 4) && (d |= c5 & 16);
        b = a24.entangledLanes;
        if (0 !== b) for (a24 = a24.entanglements, b &= d; 0 < b; ) c5 = 31 - oc(b), e43 = 1 << c5, d |= a24[c5], b &= ~e43;
        return d;
      }
      function vc(a24, b) {
        switch (a24) {
          case 1:
          case 2:
          case 4:
            return b + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return b + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return -1;
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function wc(a24, b) {
        for (var c5 = a24.suspendedLanes, d = a24.pingedLanes, e43 = a24.expirationTimes, f2 = a24.pendingLanes; 0 < f2; ) {
          var g = 31 - oc(f2), h = 1 << g, k = e43[g];
          if (-1 === k) {
            if (0 === (h & c5) || 0 !== (h & d)) e43[g] = vc(h, b);
          } else k <= b && (a24.expiredLanes |= h);
          f2 &= ~h;
        }
      }
      function xc(a24) {
        a24 = a24.pendingLanes & -1073741825;
        return 0 !== a24 ? a24 : a24 & 1073741824 ? 1073741824 : 0;
      }
      function yc() {
        var a24 = rc;
        rc <<= 1;
        0 === (rc & 4194240) && (rc = 64);
        return a24;
      }
      function zc(a24) {
        for (var b = [], c5 = 0; 31 > c5; c5++) b.push(a24);
        return b;
      }
      function Ac(a24, b, c5) {
        a24.pendingLanes |= b;
        536870912 !== b && (a24.suspendedLanes = 0, a24.pingedLanes = 0);
        a24 = a24.eventTimes;
        b = 31 - oc(b);
        a24[b] = c5;
      }
      function Bc(a24, b) {
        var c5 = a24.pendingLanes & ~b;
        a24.pendingLanes = b;
        a24.suspendedLanes = 0;
        a24.pingedLanes = 0;
        a24.expiredLanes &= b;
        a24.mutableReadLanes &= b;
        a24.entangledLanes &= b;
        b = a24.entanglements;
        var d = a24.eventTimes;
        for (a24 = a24.expirationTimes; 0 < c5; ) {
          var e43 = 31 - oc(c5), f2 = 1 << e43;
          b[e43] = 0;
          d[e43] = -1;
          a24[e43] = -1;
          c5 &= ~f2;
        }
      }
      function Cc(a24, b) {
        var c5 = a24.entangledLanes |= b;
        for (a24 = a24.entanglements; c5; ) {
          var d = 31 - oc(c5), e43 = 1 << d;
          e43 & b | a24[d] & b && (a24[d] |= b);
          c5 &= ~e43;
        }
      }
      var C = 0;
      function Dc(a24) {
        a24 &= -a24;
        return 1 < a24 ? 4 < a24 ? 0 !== (a24 & 268435455) ? 16 : 536870912 : 4 : 1;
      }
      var Ec;
      var Fc;
      var Gc;
      var Hc;
      var Ic;
      var Jc = false;
      var Kc = [];
      var Lc = null;
      var Mc = null;
      var Nc = null;
      var Oc = /* @__PURE__ */ new Map();
      var Pc = /* @__PURE__ */ new Map();
      var Qc = [];
      var Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
      function Sc(a24, b) {
        switch (a24) {
          case "focusin":
          case "focusout":
            Lc = null;
            break;
          case "dragenter":
          case "dragleave":
            Mc = null;
            break;
          case "mouseover":
          case "mouseout":
            Nc = null;
            break;
          case "pointerover":
          case "pointerout":
            Oc.delete(b.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pc.delete(b.pointerId);
        }
      }
      function Tc(a24, b, c5, d, e43, f2) {
        if (null === a24 || a24.nativeEvent !== f2) return a24 = { blockedOn: b, domEventName: c5, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e43] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a24;
        a24.eventSystemFlags |= d;
        b = a24.targetContainers;
        null !== e43 && -1 === b.indexOf(e43) && b.push(e43);
        return a24;
      }
      function Uc(a24, b, c5, d, e43) {
        switch (b) {
          case "focusin":
            return Lc = Tc(Lc, a24, b, c5, d, e43), true;
          case "dragenter":
            return Mc = Tc(Mc, a24, b, c5, d, e43), true;
          case "mouseover":
            return Nc = Tc(Nc, a24, b, c5, d, e43), true;
          case "pointerover":
            var f2 = e43.pointerId;
            Oc.set(f2, Tc(Oc.get(f2) || null, a24, b, c5, d, e43));
            return true;
          case "gotpointercapture":
            return f2 = e43.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a24, b, c5, d, e43)), true;
        }
        return false;
      }
      function Vc(a24) {
        var b = Wc(a24.target);
        if (null !== b) {
          var c5 = Vb(b);
          if (null !== c5) {
            if (b = c5.tag, 13 === b) {
              if (b = Wb(c5), null !== b) {
                a24.blockedOn = b;
                Ic(a24.priority, function() {
                  Gc(c5);
                });
                return;
              }
            } else if (3 === b && c5.stateNode.current.memoizedState.isDehydrated) {
              a24.blockedOn = 3 === c5.tag ? c5.stateNode.containerInfo : null;
              return;
            }
          }
        }
        a24.blockedOn = null;
      }
      function Xc(a24) {
        if (null !== a24.blockedOn) return false;
        for (var b = a24.targetContainers; 0 < b.length; ) {
          var c5 = Yc(a24.domEventName, a24.eventSystemFlags, b[0], a24.nativeEvent);
          if (null === c5) {
            c5 = a24.nativeEvent;
            var d = new c5.constructor(c5.type, c5);
            wb = d;
            c5.target.dispatchEvent(d);
            wb = null;
          } else return b = Cb(c5), null !== b && Fc(b), a24.blockedOn = c5, false;
          b.shift();
        }
        return true;
      }
      function Zc(a24, b, c5) {
        Xc(a24) && c5.delete(b);
      }
      function $c() {
        Jc = false;
        null !== Lc && Xc(Lc) && (Lc = null);
        null !== Mc && Xc(Mc) && (Mc = null);
        null !== Nc && Xc(Nc) && (Nc = null);
        Oc.forEach(Zc);
        Pc.forEach(Zc);
      }
      function ad(a24, b) {
        a24.blockedOn === b && (a24.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
      }
      function bd(a24) {
        function b(b2) {
          return ad(b2, a24);
        }
        if (0 < Kc.length) {
          ad(Kc[0], a24);
          for (var c5 = 1; c5 < Kc.length; c5++) {
            var d = Kc[c5];
            d.blockedOn === a24 && (d.blockedOn = null);
          }
        }
        null !== Lc && ad(Lc, a24);
        null !== Mc && ad(Mc, a24);
        null !== Nc && ad(Nc, a24);
        Oc.forEach(b);
        Pc.forEach(b);
        for (c5 = 0; c5 < Qc.length; c5++) d = Qc[c5], d.blockedOn === a24 && (d.blockedOn = null);
        for (; 0 < Qc.length && (c5 = Qc[0], null === c5.blockedOn); ) Vc(c5), null === c5.blockedOn && Qc.shift();
      }
      var cd = ua.ReactCurrentBatchConfig;
      var dd = true;
      function ed(a24, b, c5, d) {
        var e43 = C, f2 = cd.transition;
        cd.transition = null;
        try {
          C = 1, fd2(a24, b, c5, d);
        } finally {
          C = e43, cd.transition = f2;
        }
      }
      function gd(a24, b, c5, d) {
        var e43 = C, f2 = cd.transition;
        cd.transition = null;
        try {
          C = 4, fd2(a24, b, c5, d);
        } finally {
          C = e43, cd.transition = f2;
        }
      }
      function fd2(a24, b, c5, d) {
        if (dd) {
          var e43 = Yc(a24, b, c5, d);
          if (null === e43) hd(a24, b, d, id, c5), Sc(a24, d);
          else if (Uc(e43, a24, b, c5, d)) d.stopPropagation();
          else if (Sc(a24, d), b & 4 && -1 < Rc.indexOf(a24)) {
            for (; null !== e43; ) {
              var f2 = Cb(e43);
              null !== f2 && Ec(f2);
              f2 = Yc(a24, b, c5, d);
              null === f2 && hd(a24, b, d, id, c5);
              if (f2 === e43) break;
              e43 = f2;
            }
            null !== e43 && d.stopPropagation();
          } else hd(a24, b, d, null, c5);
        }
      }
      var id = null;
      function Yc(a24, b, c5, d) {
        id = null;
        a24 = xb(d);
        a24 = Wc(a24);
        if (null !== a24) if (b = Vb(a24), null === b) a24 = null;
        else if (c5 = b.tag, 13 === c5) {
          a24 = Wb(b);
          if (null !== a24) return a24;
          a24 = null;
        } else if (3 === c5) {
          if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
          a24 = null;
        } else b !== a24 && (a24 = null);
        id = a24;
        return null;
      }
      function jd(a24) {
        switch (a24) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (ec()) {
              case fc:
                return 1;
              case gc:
                return 4;
              case hc:
              case ic:
                return 16;
              case jc:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      var kd = null;
      var ld = null;
      var md = null;
      function nd() {
        if (md) return md;
        var a24, b = ld, c5 = b.length, d, e43 = "value" in kd ? kd.value : kd.textContent, f2 = e43.length;
        for (a24 = 0; a24 < c5 && b[a24] === e43[a24]; a24++) ;
        var g = c5 - a24;
        for (d = 1; d <= g && b[c5 - d] === e43[f2 - d]; d++) ;
        return md = e43.slice(a24, 1 < d ? 1 - d : void 0);
      }
      function od(a24) {
        var b = a24.keyCode;
        "charCode" in a24 ? (a24 = a24.charCode, 0 === a24 && 13 === b && (a24 = 13)) : a24 = b;
        10 === a24 && (a24 = 13);
        return 32 <= a24 || 13 === a24 ? a24 : 0;
      }
      function pd() {
        return true;
      }
      function qd() {
        return false;
      }
      function rd(a24) {
        function b(b2, d, e43, f2, g) {
          this._reactName = b2;
          this._targetInst = e43;
          this.type = d;
          this.nativeEvent = f2;
          this.target = g;
          this.currentTarget = null;
          for (var c5 in a24) a24.hasOwnProperty(c5) && (b2 = a24[c5], this[c5] = b2 ? b2(f2) : f2[c5]);
          this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
          this.isPropagationStopped = qd;
          return this;
        }
        A(b.prototype, { preventDefault: function() {
          this.defaultPrevented = true;
          var a25 = this.nativeEvent;
          a25 && (a25.preventDefault ? a25.preventDefault() : "unknown" !== typeof a25.returnValue && (a25.returnValue = false), this.isDefaultPrevented = pd);
        }, stopPropagation: function() {
          var a25 = this.nativeEvent;
          a25 && (a25.stopPropagation ? a25.stopPropagation() : "unknown" !== typeof a25.cancelBubble && (a25.cancelBubble = true), this.isPropagationStopped = pd);
        }, persist: function() {
        }, isPersistent: pd });
        return b;
      }
      var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a24) {
        return a24.timeStamp || Date.now();
      }, defaultPrevented: 0, isTrusted: 0 };
      var td = rd(sd);
      var ud = A({}, sd, { view: 0, detail: 0 });
      var vd = rd(ud);
      var wd;
      var xd;
      var yd;
      var Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a24) {
        return void 0 === a24.relatedTarget ? a24.fromElement === a24.srcElement ? a24.toElement : a24.fromElement : a24.relatedTarget;
      }, movementX: function(a24) {
        if ("movementX" in a24) return a24.movementX;
        a24 !== yd && (yd && "mousemove" === a24.type ? (wd = a24.screenX - yd.screenX, xd = a24.screenY - yd.screenY) : xd = wd = 0, yd = a24);
        return wd;
      }, movementY: function(a24) {
        return "movementY" in a24 ? a24.movementY : xd;
      } });
      var Bd = rd(Ad);
      var Cd = A({}, Ad, { dataTransfer: 0 });
      var Dd = rd(Cd);
      var Ed = A({}, ud, { relatedTarget: 0 });
      var Fd = rd(Ed);
      var Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Hd = rd(Gd);
      var Id = A({}, sd, { clipboardData: function(a24) {
        return "clipboardData" in a24 ? a24.clipboardData : window.clipboardData;
      } });
      var Jd = rd(Id);
      var Kd = A({}, sd, { data: 0 });
      var Ld = rd(Kd);
      var Md = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
      };
      var Nd = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
      };
      var Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
      function Pd(a24) {
        var b = this.nativeEvent;
        return b.getModifierState ? b.getModifierState(a24) : (a24 = Od[a24]) ? !!b[a24] : false;
      }
      function zd() {
        return Pd;
      }
      var Qd = A({}, ud, { key: function(a24) {
        if (a24.key) {
          var b = Md[a24.key] || a24.key;
          if ("Unidentified" !== b) return b;
        }
        return "keypress" === a24.type ? (a24 = od(a24), 13 === a24 ? "Enter" : String.fromCharCode(a24)) : "keydown" === a24.type || "keyup" === a24.type ? Nd[a24.keyCode] || "Unidentified" : "";
      }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a24) {
        return "keypress" === a24.type ? od(a24) : 0;
      }, keyCode: function(a24) {
        return "keydown" === a24.type || "keyup" === a24.type ? a24.keyCode : 0;
      }, which: function(a24) {
        return "keypress" === a24.type ? od(a24) : "keydown" === a24.type || "keyup" === a24.type ? a24.keyCode : 0;
      } });
      var Rd = rd(Qd);
      var Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 });
      var Td = rd(Sd);
      var Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd });
      var Vd = rd(Ud);
      var Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 });
      var Xd = rd(Wd);
      var Yd = A({}, Ad, {
        deltaX: function(a24) {
          return "deltaX" in a24 ? a24.deltaX : "wheelDeltaX" in a24 ? -a24.wheelDeltaX : 0;
        },
        deltaY: function(a24) {
          return "deltaY" in a24 ? a24.deltaY : "wheelDeltaY" in a24 ? -a24.wheelDeltaY : "wheelDelta" in a24 ? -a24.wheelDelta : 0;
        },
        deltaZ: 0,
        deltaMode: 0
      });
      var Zd = rd(Yd);
      var $d = [9, 13, 27, 32];
      var ae = ia && "CompositionEvent" in window;
      var be = null;
      ia && "documentMode" in document && (be = document.documentMode);
      var ce = ia && "TextEvent" in window && !be;
      var de = ia && (!ae || be && 8 < be && 11 >= be);
      var ee = String.fromCharCode(32);
      var fe = false;
      function ge(a24, b) {
        switch (a24) {
          case "keyup":
            return -1 !== $d.indexOf(b.keyCode);
          case "keydown":
            return 229 !== b.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return true;
          default:
            return false;
        }
      }
      function he(a24) {
        a24 = a24.detail;
        return "object" === typeof a24 && "data" in a24 ? a24.data : null;
      }
      var ie = false;
      function je(a24, b) {
        switch (a24) {
          case "compositionend":
            return he(b);
          case "keypress":
            if (32 !== b.which) return null;
            fe = true;
            return ee;
          case "textInput":
            return a24 = b.data, a24 === ee && fe ? null : a24;
          default:
            return null;
        }
      }
      function ke(a24, b) {
        if (ie) return "compositionend" === a24 || !ae && ge(a24, b) ? (a24 = nd(), md = ld = kd = null, ie = false, a24) : null;
        switch (a24) {
          case "paste":
            return null;
          case "keypress":
            if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
              if (b.char && 1 < b.char.length) return b.char;
              if (b.which) return String.fromCharCode(b.which);
            }
            return null;
          case "compositionend":
            return de && "ko" !== b.locale ? null : b.data;
          default:
            return null;
        }
      }
      var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
      function me(a24) {
        var b = a24 && a24.nodeName && a24.nodeName.toLowerCase();
        return "input" === b ? !!le[a24.type] : "textarea" === b ? true : false;
      }
      function ne(a24, b, c5, d) {
        Eb(d);
        b = oe(b, "onChange");
        0 < b.length && (c5 = new td("onChange", "change", null, c5, d), a24.push({ event: c5, listeners: b }));
      }
      var pe = null;
      var qe = null;
      function re(a24) {
        se(a24, 0);
      }
      function te(a24) {
        var b = ue(a24);
        if (Wa(b)) return a24;
      }
      function ve(a24, b) {
        if ("change" === a24) return b;
      }
      var we = false;
      if (ia) {
        if (ia) {
          ye = "oninput" in document;
          if (!ye) {
            ze = document.createElement("div");
            ze.setAttribute("oninput", "return;");
            ye = "function" === typeof ze.oninput;
          }
          xe = ye;
        } else xe = false;
        we = xe && (!document.documentMode || 9 < document.documentMode);
      }
      var xe;
      var ye;
      var ze;
      function Ae() {
        pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
      }
      function Be(a24) {
        if ("value" === a24.propertyName && te(qe)) {
          var b = [];
          ne(b, qe, a24, xb(a24));
          Jb(re, b);
        }
      }
      function Ce(a24, b, c5) {
        "focusin" === a24 ? (Ae(), pe = b, qe = c5, pe.attachEvent("onpropertychange", Be)) : "focusout" === a24 && Ae();
      }
      function De(a24) {
        if ("selectionchange" === a24 || "keyup" === a24 || "keydown" === a24) return te(qe);
      }
      function Ee(a24, b) {
        if ("click" === a24) return te(b);
      }
      function Fe(a24, b) {
        if ("input" === a24 || "change" === a24) return te(b);
      }
      function Ge(a24, b) {
        return a24 === b && (0 !== a24 || 1 / a24 === 1 / b) || a24 !== a24 && b !== b;
      }
      var He = "function" === typeof Object.is ? Object.is : Ge;
      function Ie(a24, b) {
        if (He(a24, b)) return true;
        if ("object" !== typeof a24 || null === a24 || "object" !== typeof b || null === b) return false;
        var c5 = Object.keys(a24), d = Object.keys(b);
        if (c5.length !== d.length) return false;
        for (d = 0; d < c5.length; d++) {
          var e43 = c5[d];
          if (!ja.call(b, e43) || !He(a24[e43], b[e43])) return false;
        }
        return true;
      }
      function Je(a24) {
        for (; a24 && a24.firstChild; ) a24 = a24.firstChild;
        return a24;
      }
      function Ke(a24, b) {
        var c5 = Je(a24);
        a24 = 0;
        for (var d; c5; ) {
          if (3 === c5.nodeType) {
            d = a24 + c5.textContent.length;
            if (a24 <= b && d >= b) return { node: c5, offset: b - a24 };
            a24 = d;
          }
          a: {
            for (; c5; ) {
              if (c5.nextSibling) {
                c5 = c5.nextSibling;
                break a;
              }
              c5 = c5.parentNode;
            }
            c5 = void 0;
          }
          c5 = Je(c5);
        }
      }
      function Le(a24, b) {
        return a24 && b ? a24 === b ? true : a24 && 3 === a24.nodeType ? false : b && 3 === b.nodeType ? Le(a24, b.parentNode) : "contains" in a24 ? a24.contains(b) : a24.compareDocumentPosition ? !!(a24.compareDocumentPosition(b) & 16) : false : false;
      }
      function Me() {
        for (var a24 = window, b = Xa(); b instanceof a24.HTMLIFrameElement; ) {
          try {
            var c5 = "string" === typeof b.contentWindow.location.href;
          } catch (d) {
            c5 = false;
          }
          if (c5) a24 = b.contentWindow;
          else break;
          b = Xa(a24.document);
        }
        return b;
      }
      function Ne(a24) {
        var b = a24 && a24.nodeName && a24.nodeName.toLowerCase();
        return b && ("input" === b && ("text" === a24.type || "search" === a24.type || "tel" === a24.type || "url" === a24.type || "password" === a24.type) || "textarea" === b || "true" === a24.contentEditable);
      }
      function Oe(a24) {
        var b = Me(), c5 = a24.focusedElem, d = a24.selectionRange;
        if (b !== c5 && c5 && c5.ownerDocument && Le(c5.ownerDocument.documentElement, c5)) {
          if (null !== d && Ne(c5)) {
            if (b = d.start, a24 = d.end, void 0 === a24 && (a24 = b), "selectionStart" in c5) c5.selectionStart = b, c5.selectionEnd = Math.min(a24, c5.value.length);
            else if (a24 = (b = c5.ownerDocument || document) && b.defaultView || window, a24.getSelection) {
              a24 = a24.getSelection();
              var e43 = c5.textContent.length, f2 = Math.min(d.start, e43);
              d = void 0 === d.end ? f2 : Math.min(d.end, e43);
              !a24.extend && f2 > d && (e43 = d, d = f2, f2 = e43);
              e43 = Ke(c5, f2);
              var g = Ke(
                c5,
                d
              );
              e43 && g && (1 !== a24.rangeCount || a24.anchorNode !== e43.node || a24.anchorOffset !== e43.offset || a24.focusNode !== g.node || a24.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e43.node, e43.offset), a24.removeAllRanges(), f2 > d ? (a24.addRange(b), a24.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a24.addRange(b)));
            }
          }
          b = [];
          for (a24 = c5; a24 = a24.parentNode; ) 1 === a24.nodeType && b.push({ element: a24, left: a24.scrollLeft, top: a24.scrollTop });
          "function" === typeof c5.focus && c5.focus();
          for (c5 = 0; c5 < b.length; c5++) a24 = b[c5], a24.element.scrollLeft = a24.left, a24.element.scrollTop = a24.top;
        }
      }
      var Pe = ia && "documentMode" in document && 11 >= document.documentMode;
      var Qe = null;
      var Re = null;
      var Se = null;
      var Te = false;
      function Ue(a24, b, c5) {
        var d = c5.window === c5 ? c5.document : 9 === c5.nodeType ? c5 : c5.ownerDocument;
        Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c5), a24.push({ event: b, listeners: d }), b.target = Qe)));
      }
      function Ve(a24, b) {
        var c5 = {};
        c5[a24.toLowerCase()] = b.toLowerCase();
        c5["Webkit" + a24] = "webkit" + b;
        c5["Moz" + a24] = "moz" + b;
        return c5;
      }
      var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") };
      var Xe = {};
      var Ye = {};
      ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
      function Ze(a24) {
        if (Xe[a24]) return Xe[a24];
        if (!We[a24]) return a24;
        var b = We[a24], c5;
        for (c5 in b) if (b.hasOwnProperty(c5) && c5 in Ye) return Xe[a24] = b[c5];
        return a24;
      }
      var $e = Ze("animationend");
      var af = Ze("animationiteration");
      var bf = Ze("animationstart");
      var cf = Ze("transitionend");
      var df = /* @__PURE__ */ new Map();
      var ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
      function ff(a24, b) {
        df.set(a24, b);
        fa(b, [a24]);
      }
      for (gf = 0; gf < ef.length; gf++) {
        hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
        ff(jf, "on" + kf);
      }
      var hf;
      var jf;
      var kf;
      var gf;
      ff($e, "onAnimationEnd");
      ff(af, "onAnimationIteration");
      ff(bf, "onAnimationStart");
      ff("dblclick", "onDoubleClick");
      ff("focusin", "onFocus");
      ff("focusout", "onBlur");
      ff(cf, "onTransitionEnd");
      ha("onMouseEnter", ["mouseout", "mouseover"]);
      ha("onMouseLeave", ["mouseout", "mouseover"]);
      ha("onPointerEnter", ["pointerout", "pointerover"]);
      ha("onPointerLeave", ["pointerout", "pointerover"]);
      fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
      fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
      fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
      fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
      fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
      var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ");
      var mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
      function nf(a24, b, c5) {
        var d = a24.type || "unknown-event";
        a24.currentTarget = c5;
        Ub(d, b, void 0, a24);
        a24.currentTarget = null;
      }
      function se(a24, b) {
        b = 0 !== (b & 4);
        for (var c5 = 0; c5 < a24.length; c5++) {
          var d = a24[c5], e43 = d.event;
          d = d.listeners;
          a: {
            var f2 = void 0;
            if (b) for (var g = d.length - 1; 0 <= g; g--) {
              var h = d[g], k = h.instance, l = h.currentTarget;
              h = h.listener;
              if (k !== f2 && e43.isPropagationStopped()) break a;
              nf(e43, h, l);
              f2 = k;
            }
            else for (g = 0; g < d.length; g++) {
              h = d[g];
              k = h.instance;
              l = h.currentTarget;
              h = h.listener;
              if (k !== f2 && e43.isPropagationStopped()) break a;
              nf(e43, h, l);
              f2 = k;
            }
          }
        }
        if (Qb) throw a24 = Rb, Qb = false, Rb = null, a24;
      }
      function D(a24, b) {
        var c5 = b[of];
        void 0 === c5 && (c5 = b[of] = /* @__PURE__ */ new Set());
        var d = a24 + "__bubble";
        c5.has(d) || (pf(b, a24, 2, false), c5.add(d));
      }
      function qf(a24, b, c5) {
        var d = 0;
        b && (d |= 4);
        pf(c5, a24, d, b);
      }
      var rf = "_reactListening" + Math.random().toString(36).slice(2);
      function sf(a24) {
        if (!a24[rf]) {
          a24[rf] = true;
          da.forEach(function(b2) {
            "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a24), qf(b2, true, a24));
          });
          var b = 9 === a24.nodeType ? a24 : a24.ownerDocument;
          null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
        }
      }
      function pf(a24, b, c5, d) {
        switch (jd(b)) {
          case 1:
            var e43 = ed;
            break;
          case 4:
            e43 = gd;
            break;
          default:
            e43 = fd2;
        }
        c5 = e43.bind(null, b, c5, a24);
        e43 = void 0;
        !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e43 = true);
        d ? void 0 !== e43 ? a24.addEventListener(b, c5, { capture: true, passive: e43 }) : a24.addEventListener(b, c5, true) : void 0 !== e43 ? a24.addEventListener(b, c5, { passive: e43 }) : a24.addEventListener(b, c5, false);
      }
      function hd(a24, b, c5, d, e43) {
        var f2 = d;
        if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
          if (null === d) return;
          var g = d.tag;
          if (3 === g || 4 === g) {
            var h = d.stateNode.containerInfo;
            if (h === e43 || 8 === h.nodeType && h.parentNode === e43) break;
            if (4 === g) for (g = d.return; null !== g; ) {
              var k = g.tag;
              if (3 === k || 4 === k) {
                if (k = g.stateNode.containerInfo, k === e43 || 8 === k.nodeType && k.parentNode === e43) return;
              }
              g = g.return;
            }
            for (; null !== h; ) {
              g = Wc(h);
              if (null === g) return;
              k = g.tag;
              if (5 === k || 6 === k) {
                d = f2 = g;
                continue a;
              }
              h = h.parentNode;
            }
          }
          d = d.return;
        }
        Jb(function() {
          var d2 = f2, e44 = xb(c5), g2 = [];
          a: {
            var h2 = df.get(a24);
            if (void 0 !== h2) {
              var k2 = td, n6 = a24;
              switch (a24) {
                case "keypress":
                  if (0 === od(c5)) break a;
                case "keydown":
                case "keyup":
                  k2 = Rd;
                  break;
                case "focusin":
                  n6 = "focus";
                  k2 = Fd;
                  break;
                case "focusout":
                  n6 = "blur";
                  k2 = Fd;
                  break;
                case "beforeblur":
                case "afterblur":
                  k2 = Fd;
                  break;
                case "click":
                  if (2 === c5.button) break a;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  k2 = Bd;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  k2 = Dd;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  k2 = Vd;
                  break;
                case $e:
                case af:
                case bf:
                  k2 = Hd;
                  break;
                case cf:
                  k2 = Xd;
                  break;
                case "scroll":
                  k2 = vd;
                  break;
                case "wheel":
                  k2 = Zd;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  k2 = Jd;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  k2 = Td;
              }
              var t7 = 0 !== (b & 4), J = !t7 && "scroll" === a24, x = t7 ? null !== h2 ? h2 + "Capture" : null : h2;
              t7 = [];
              for (var w = d2, u; null !== w; ) {
                u = w;
                var F = u.stateNode;
                5 === u.tag && null !== F && (u = F, null !== x && (F = Kb(w, x), null != F && t7.push(tf(w, F, u))));
                if (J) break;
                w = w.return;
              }
              0 < t7.length && (h2 = new k2(h2, n6, null, c5, e44), g2.push({ event: h2, listeners: t7 }));
            }
          }
          if (0 === (b & 7)) {
            a: {
              h2 = "mouseover" === a24 || "pointerover" === a24;
              k2 = "mouseout" === a24 || "pointerout" === a24;
              if (h2 && c5 !== wb && (n6 = c5.relatedTarget || c5.fromElement) && (Wc(n6) || n6[uf])) break a;
              if (k2 || h2) {
                h2 = e44.window === e44 ? e44 : (h2 = e44.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
                if (k2) {
                  if (n6 = c5.relatedTarget || c5.toElement, k2 = d2, n6 = n6 ? Wc(n6) : null, null !== n6 && (J = Vb(n6), n6 !== J || 5 !== n6.tag && 6 !== n6.tag)) n6 = null;
                } else k2 = null, n6 = d2;
                if (k2 !== n6) {
                  t7 = Bd;
                  F = "onMouseLeave";
                  x = "onMouseEnter";
                  w = "mouse";
                  if ("pointerout" === a24 || "pointerover" === a24) t7 = Td, F = "onPointerLeave", x = "onPointerEnter", w = "pointer";
                  J = null == k2 ? h2 : ue(k2);
                  u = null == n6 ? h2 : ue(n6);
                  h2 = new t7(F, w + "leave", k2, c5, e44);
                  h2.target = J;
                  h2.relatedTarget = u;
                  F = null;
                  Wc(e44) === d2 && (t7 = new t7(x, w + "enter", n6, c5, e44), t7.target = u, t7.relatedTarget = J, F = t7);
                  J = F;
                  if (k2 && n6) b: {
                    t7 = k2;
                    x = n6;
                    w = 0;
                    for (u = t7; u; u = vf(u)) w++;
                    u = 0;
                    for (F = x; F; F = vf(F)) u++;
                    for (; 0 < w - u; ) t7 = vf(t7), w--;
                    for (; 0 < u - w; ) x = vf(x), u--;
                    for (; w--; ) {
                      if (t7 === x || null !== x && t7 === x.alternate) break b;
                      t7 = vf(t7);
                      x = vf(x);
                    }
                    t7 = null;
                  }
                  else t7 = null;
                  null !== k2 && wf(g2, h2, k2, t7, false);
                  null !== n6 && null !== J && wf(g2, J, n6, t7, true);
                }
              }
            }
            a: {
              h2 = d2 ? ue(d2) : window;
              k2 = h2.nodeName && h2.nodeName.toLowerCase();
              if ("select" === k2 || "input" === k2 && "file" === h2.type) var na = ve;
              else if (me(h2)) if (we) na = Fe;
              else {
                na = De;
                var xa = Ce;
              }
              else (k2 = h2.nodeName) && "input" === k2.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
              if (na && (na = na(a24, d2))) {
                ne(g2, na, c5, e44);
                break a;
              }
              xa && xa(a24, h2, d2);
              "focusout" === a24 && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
            }
            xa = d2 ? ue(d2) : window;
            switch (a24) {
              case "focusin":
                if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
                break;
              case "focusout":
                Se = Re = Qe = null;
                break;
              case "mousedown":
                Te = true;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                Te = false;
                Ue(g2, c5, e44);
                break;
              case "selectionchange":
                if (Pe) break;
              case "keydown":
              case "keyup":
                Ue(g2, c5, e44);
            }
            var $a;
            if (ae) b: {
              switch (a24) {
                case "compositionstart":
                  var ba = "onCompositionStart";
                  break b;
                case "compositionend":
                  ba = "onCompositionEnd";
                  break b;
                case "compositionupdate":
                  ba = "onCompositionUpdate";
                  break b;
              }
              ba = void 0;
            }
            else ie ? ge(a24, c5) && (ba = "onCompositionEnd") : "keydown" === a24 && 229 === c5.keyCode && (ba = "onCompositionStart");
            ba && (de && "ko" !== c5.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e44, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a24, null, c5, e44), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c5), null !== $a && (ba.data = $a))));
            if ($a = ce ? je(a24, c5) : ke(a24, c5)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e44 = new Ld("onBeforeInput", "beforeinput", null, c5, e44), g2.push({ event: e44, listeners: d2 }), e44.data = $a);
          }
          se(g2, b);
        });
      }
      function tf(a24, b, c5) {
        return { instance: a24, listener: b, currentTarget: c5 };
      }
      function oe(a24, b) {
        for (var c5 = b + "Capture", d = []; null !== a24; ) {
          var e43 = a24, f2 = e43.stateNode;
          5 === e43.tag && null !== f2 && (e43 = f2, f2 = Kb(a24, c5), null != f2 && d.unshift(tf(a24, f2, e43)), f2 = Kb(a24, b), null != f2 && d.push(tf(a24, f2, e43)));
          a24 = a24.return;
        }
        return d;
      }
      function vf(a24) {
        if (null === a24) return null;
        do
          a24 = a24.return;
        while (a24 && 5 !== a24.tag);
        return a24 ? a24 : null;
      }
      function wf(a24, b, c5, d, e43) {
        for (var f2 = b._reactName, g = []; null !== c5 && c5 !== d; ) {
          var h = c5, k = h.alternate, l = h.stateNode;
          if (null !== k && k === d) break;
          5 === h.tag && null !== l && (h = l, e43 ? (k = Kb(c5, f2), null != k && g.unshift(tf(c5, k, h))) : e43 || (k = Kb(c5, f2), null != k && g.push(tf(c5, k, h))));
          c5 = c5.return;
        }
        0 !== g.length && a24.push({ event: b, listeners: g });
      }
      var xf = /\r\n?/g;
      var yf = /\u0000|\uFFFD/g;
      function zf(a24) {
        return ("string" === typeof a24 ? a24 : "" + a24).replace(xf, "\n").replace(yf, "");
      }
      function Af(a24, b, c5) {
        b = zf(b);
        if (zf(a24) !== b && c5) throw Error(p2(425));
      }
      function Bf() {
      }
      var Cf = null;
      var Df = null;
      function Ef(a24, b) {
        return "textarea" === a24 || "noscript" === a24 || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
      }
      var Ff = "function" === typeof setTimeout ? setTimeout : void 0;
      var Gf = "function" === typeof clearTimeout ? clearTimeout : void 0;
      var Hf = "function" === typeof Promise ? Promise : void 0;
      var Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a24) {
        return Hf.resolve(null).then(a24).catch(If);
      } : Ff;
      function If(a24) {
        setTimeout(function() {
          throw a24;
        });
      }
      function Kf(a24, b) {
        var c5 = b, d = 0;
        do {
          var e43 = c5.nextSibling;
          a24.removeChild(c5);
          if (e43 && 8 === e43.nodeType) if (c5 = e43.data, "/$" === c5) {
            if (0 === d) {
              a24.removeChild(e43);
              bd(b);
              return;
            }
            d--;
          } else "$" !== c5 && "$?" !== c5 && "$!" !== c5 || d++;
          c5 = e43;
        } while (c5);
        bd(b);
      }
      function Lf(a24) {
        for (; null != a24; a24 = a24.nextSibling) {
          var b = a24.nodeType;
          if (1 === b || 3 === b) break;
          if (8 === b) {
            b = a24.data;
            if ("$" === b || "$!" === b || "$?" === b) break;
            if ("/$" === b) return null;
          }
        }
        return a24;
      }
      function Mf(a24) {
        a24 = a24.previousSibling;
        for (var b = 0; a24; ) {
          if (8 === a24.nodeType) {
            var c5 = a24.data;
            if ("$" === c5 || "$!" === c5 || "$?" === c5) {
              if (0 === b) return a24;
              b--;
            } else "/$" === c5 && b++;
          }
          a24 = a24.previousSibling;
        }
        return null;
      }
      var Nf = Math.random().toString(36).slice(2);
      var Of = "__reactFiber$" + Nf;
      var Pf = "__reactProps$" + Nf;
      var uf = "__reactContainer$" + Nf;
      var of = "__reactEvents$" + Nf;
      var Qf = "__reactListeners$" + Nf;
      var Rf = "__reactHandles$" + Nf;
      function Wc(a24) {
        var b = a24[Of];
        if (b) return b;
        for (var c5 = a24.parentNode; c5; ) {
          if (b = c5[uf] || c5[Of]) {
            c5 = b.alternate;
            if (null !== b.child || null !== c5 && null !== c5.child) for (a24 = Mf(a24); null !== a24; ) {
              if (c5 = a24[Of]) return c5;
              a24 = Mf(a24);
            }
            return b;
          }
          a24 = c5;
          c5 = a24.parentNode;
        }
        return null;
      }
      function Cb(a24) {
        a24 = a24[Of] || a24[uf];
        return !a24 || 5 !== a24.tag && 6 !== a24.tag && 13 !== a24.tag && 3 !== a24.tag ? null : a24;
      }
      function ue(a24) {
        if (5 === a24.tag || 6 === a24.tag) return a24.stateNode;
        throw Error(p2(33));
      }
      function Db(a24) {
        return a24[Pf] || null;
      }
      var Sf = [];
      var Tf = -1;
      function Uf(a24) {
        return { current: a24 };
      }
      function E(a24) {
        0 > Tf || (a24.current = Sf[Tf], Sf[Tf] = null, Tf--);
      }
      function G(a24, b) {
        Tf++;
        Sf[Tf] = a24.current;
        a24.current = b;
      }
      var Vf = {};
      var H = Uf(Vf);
      var Wf = Uf(false);
      var Xf = Vf;
      function Yf(a24, b) {
        var c5 = a24.type.contextTypes;
        if (!c5) return Vf;
        var d = a24.stateNode;
        if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
        var e43 = {}, f2;
        for (f2 in c5) e43[f2] = b[f2];
        d && (a24 = a24.stateNode, a24.__reactInternalMemoizedUnmaskedChildContext = b, a24.__reactInternalMemoizedMaskedChildContext = e43);
        return e43;
      }
      function Zf(a24) {
        a24 = a24.childContextTypes;
        return null !== a24 && void 0 !== a24;
      }
      function $f() {
        E(Wf);
        E(H);
      }
      function ag(a24, b, c5) {
        if (H.current !== Vf) throw Error(p2(168));
        G(H, b);
        G(Wf, c5);
      }
      function bg(a24, b, c5) {
        var d = a24.stateNode;
        b = b.childContextTypes;
        if ("function" !== typeof d.getChildContext) return c5;
        d = d.getChildContext();
        for (var e43 in d) if (!(e43 in b)) throw Error(p2(108, Ra(a24) || "Unknown", e43));
        return A({}, c5, d);
      }
      function cg(a24) {
        a24 = (a24 = a24.stateNode) && a24.__reactInternalMemoizedMergedChildContext || Vf;
        Xf = H.current;
        G(H, a24);
        G(Wf, Wf.current);
        return true;
      }
      function dg(a24, b, c5) {
        var d = a24.stateNode;
        if (!d) throw Error(p2(169));
        c5 ? (a24 = bg(a24, b, Xf), d.__reactInternalMemoizedMergedChildContext = a24, E(Wf), E(H), G(H, a24)) : E(Wf);
        G(Wf, c5);
      }
      var eg = null;
      var fg = false;
      var gg = false;
      function hg(a24) {
        null === eg ? eg = [a24] : eg.push(a24);
      }
      function ig(a24) {
        fg = true;
        hg(a24);
      }
      function jg() {
        if (!gg && null !== eg) {
          gg = true;
          var a24 = 0, b = C;
          try {
            var c5 = eg;
            for (C = 1; a24 < c5.length; a24++) {
              var d = c5[a24];
              do
                d = d(true);
              while (null !== d);
            }
            eg = null;
            fg = false;
          } catch (e43) {
            throw null !== eg && (eg = eg.slice(a24 + 1)), ac(fc, jg), e43;
          } finally {
            C = b, gg = false;
          }
        }
        return null;
      }
      var kg = [];
      var lg = 0;
      var mg = null;
      var ng = 0;
      var og = [];
      var pg = 0;
      var qg = null;
      var rg = 1;
      var sg = "";
      function tg(a24, b) {
        kg[lg++] = ng;
        kg[lg++] = mg;
        mg = a24;
        ng = b;
      }
      function ug(a24, b, c5) {
        og[pg++] = rg;
        og[pg++] = sg;
        og[pg++] = qg;
        qg = a24;
        var d = rg;
        a24 = sg;
        var e43 = 32 - oc(d) - 1;
        d &= ~(1 << e43);
        c5 += 1;
        var f2 = 32 - oc(b) + e43;
        if (30 < f2) {
          var g = e43 - e43 % 5;
          f2 = (d & (1 << g) - 1).toString(32);
          d >>= g;
          e43 -= g;
          rg = 1 << 32 - oc(b) + e43 | c5 << e43 | d;
          sg = f2 + a24;
        } else rg = 1 << f2 | c5 << e43 | d, sg = a24;
      }
      function vg(a24) {
        null !== a24.return && (tg(a24, 1), ug(a24, 1, 0));
      }
      function wg(a24) {
        for (; a24 === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
        for (; a24 === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
      }
      var xg = null;
      var yg = null;
      var I2 = false;
      var zg = null;
      function Ag(a24, b) {
        var c5 = Bg(5, null, null, 0);
        c5.elementType = "DELETED";
        c5.stateNode = b;
        c5.return = a24;
        b = a24.deletions;
        null === b ? (a24.deletions = [c5], a24.flags |= 16) : b.push(c5);
      }
      function Cg(a24, b) {
        switch (a24.tag) {
          case 5:
            var c5 = a24.type;
            b = 1 !== b.nodeType || c5.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
            return null !== b ? (a24.stateNode = b, xg = a24, yg = Lf(b.firstChild), true) : false;
          case 6:
            return b = "" === a24.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a24.stateNode = b, xg = a24, yg = null, true) : false;
          case 13:
            return b = 8 !== b.nodeType ? null : b, null !== b ? (c5 = null !== qg ? { id: rg, overflow: sg } : null, a24.memoizedState = { dehydrated: b, treeContext: c5, retryLane: 1073741824 }, c5 = Bg(18, null, null, 0), c5.stateNode = b, c5.return = a24, a24.child = c5, xg = a24, yg = null, true) : false;
          default:
            return false;
        }
      }
      function Dg(a24) {
        return 0 !== (a24.mode & 1) && 0 === (a24.flags & 128);
      }
      function Eg(a24) {
        if (I2) {
          var b = yg;
          if (b) {
            var c5 = b;
            if (!Cg(a24, b)) {
              if (Dg(a24)) throw Error(p2(418));
              b = Lf(c5.nextSibling);
              var d = xg;
              b && Cg(a24, b) ? Ag(d, c5) : (a24.flags = a24.flags & -4097 | 2, I2 = false, xg = a24);
            }
          } else {
            if (Dg(a24)) throw Error(p2(418));
            a24.flags = a24.flags & -4097 | 2;
            I2 = false;
            xg = a24;
          }
        }
      }
      function Fg(a24) {
        for (a24 = a24.return; null !== a24 && 5 !== a24.tag && 3 !== a24.tag && 13 !== a24.tag; ) a24 = a24.return;
        xg = a24;
      }
      function Gg(a24) {
        if (a24 !== xg) return false;
        if (!I2) return Fg(a24), I2 = true, false;
        var b;
        (b = 3 !== a24.tag) && !(b = 5 !== a24.tag) && (b = a24.type, b = "head" !== b && "body" !== b && !Ef(a24.type, a24.memoizedProps));
        if (b && (b = yg)) {
          if (Dg(a24)) throw Hg(), Error(p2(418));
          for (; b; ) Ag(a24, b), b = Lf(b.nextSibling);
        }
        Fg(a24);
        if (13 === a24.tag) {
          a24 = a24.memoizedState;
          a24 = null !== a24 ? a24.dehydrated : null;
          if (!a24) throw Error(p2(317));
          a: {
            a24 = a24.nextSibling;
            for (b = 0; a24; ) {
              if (8 === a24.nodeType) {
                var c5 = a24.data;
                if ("/$" === c5) {
                  if (0 === b) {
                    yg = Lf(a24.nextSibling);
                    break a;
                  }
                  b--;
                } else "$" !== c5 && "$!" !== c5 && "$?" !== c5 || b++;
              }
              a24 = a24.nextSibling;
            }
            yg = null;
          }
        } else yg = xg ? Lf(a24.stateNode.nextSibling) : null;
        return true;
      }
      function Hg() {
        for (var a24 = yg; a24; ) a24 = Lf(a24.nextSibling);
      }
      function Ig() {
        yg = xg = null;
        I2 = false;
      }
      function Jg(a24) {
        null === zg ? zg = [a24] : zg.push(a24);
      }
      var Kg = ua.ReactCurrentBatchConfig;
      function Lg(a24, b, c5) {
        a24 = c5.ref;
        if (null !== a24 && "function" !== typeof a24 && "object" !== typeof a24) {
          if (c5._owner) {
            c5 = c5._owner;
            if (c5) {
              if (1 !== c5.tag) throw Error(p2(309));
              var d = c5.stateNode;
            }
            if (!d) throw Error(p2(147, a24));
            var e43 = d, f2 = "" + a24;
            if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
            b = function(a25) {
              var b2 = e43.refs;
              null === a25 ? delete b2[f2] : b2[f2] = a25;
            };
            b._stringRef = f2;
            return b;
          }
          if ("string" !== typeof a24) throw Error(p2(284));
          if (!c5._owner) throw Error(p2(290, a24));
        }
        return a24;
      }
      function Mg(a24, b) {
        a24 = Object.prototype.toString.call(b);
        throw Error(p2(31, "[object Object]" === a24 ? "object with keys {" + Object.keys(b).join(", ") + "}" : a24));
      }
      function Ng(a24) {
        var b = a24._init;
        return b(a24._payload);
      }
      function Og(a24) {
        function b(b2, c6) {
          if (a24) {
            var d2 = b2.deletions;
            null === d2 ? (b2.deletions = [c6], b2.flags |= 16) : d2.push(c6);
          }
        }
        function c5(c6, d2) {
          if (!a24) return null;
          for (; null !== d2; ) b(c6, d2), d2 = d2.sibling;
          return null;
        }
        function d(a25, b2) {
          for (a25 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a25.set(b2.key, b2) : a25.set(b2.index, b2), b2 = b2.sibling;
          return a25;
        }
        function e43(a25, b2) {
          a25 = Pg(a25, b2);
          a25.index = 0;
          a25.sibling = null;
          return a25;
        }
        function f2(b2, c6, d2) {
          b2.index = d2;
          if (!a24) return b2.flags |= 1048576, c6;
          d2 = b2.alternate;
          if (null !== d2) return d2 = d2.index, d2 < c6 ? (b2.flags |= 2, c6) : d2;
          b2.flags |= 2;
          return c6;
        }
        function g(b2) {
          a24 && null === b2.alternate && (b2.flags |= 2);
          return b2;
        }
        function h(a25, b2, c6, d2) {
          if (null === b2 || 6 !== b2.tag) return b2 = Qg(c6, a25.mode, d2), b2.return = a25, b2;
          b2 = e43(b2, c6);
          b2.return = a25;
          return b2;
        }
        function k(a25, b2, c6, d2) {
          var f3 = c6.type;
          if (f3 === ya) return m2(a25, b2, c6.props.children, d2, c6.key);
          if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e43(b2, c6.props), d2.ref = Lg(a25, b2, c6), d2.return = a25, d2;
          d2 = Rg(c6.type, c6.key, c6.props, null, a25.mode, d2);
          d2.ref = Lg(a25, b2, c6);
          d2.return = a25;
          return d2;
        }
        function l(a25, b2, c6, d2) {
          if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c6.containerInfo || b2.stateNode.implementation !== c6.implementation) return b2 = Sg(c6, a25.mode, d2), b2.return = a25, b2;
          b2 = e43(b2, c6.children || []);
          b2.return = a25;
          return b2;
        }
        function m2(a25, b2, c6, d2, f3) {
          if (null === b2 || 7 !== b2.tag) return b2 = Tg(c6, a25.mode, d2, f3), b2.return = a25, b2;
          b2 = e43(b2, c6);
          b2.return = a25;
          return b2;
        }
        function q(a25, b2, c6) {
          if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a25.mode, c6), b2.return = a25, b2;
          if ("object" === typeof b2 && null !== b2) {
            switch (b2.$$typeof) {
              case va:
                return c6 = Rg(b2.type, b2.key, b2.props, null, a25.mode, c6), c6.ref = Lg(a25, null, b2), c6.return = a25, c6;
              case wa:
                return b2 = Sg(b2, a25.mode, c6), b2.return = a25, b2;
              case Ha:
                var d2 = b2._init;
                return q(a25, d2(b2._payload), c6);
            }
            if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a25.mode, c6, null), b2.return = a25, b2;
            Mg(a25, b2);
          }
          return null;
        }
        function r3(a25, b2, c6, d2) {
          var e44 = null !== b2 ? b2.key : null;
          if ("string" === typeof c6 && "" !== c6 || "number" === typeof c6) return null !== e44 ? null : h(a25, b2, "" + c6, d2);
          if ("object" === typeof c6 && null !== c6) {
            switch (c6.$$typeof) {
              case va:
                return c6.key === e44 ? k(a25, b2, c6, d2) : null;
              case wa:
                return c6.key === e44 ? l(a25, b2, c6, d2) : null;
              case Ha:
                return e44 = c6._init, r3(
                  a25,
                  b2,
                  e44(c6._payload),
                  d2
                );
            }
            if (eb(c6) || Ka(c6)) return null !== e44 ? null : m2(a25, b2, c6, d2, null);
            Mg(a25, c6);
          }
          return null;
        }
        function y(a25, b2, c6, d2, e44) {
          if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a25 = a25.get(c6) || null, h(b2, a25, "" + d2, e44);
          if ("object" === typeof d2 && null !== d2) {
            switch (d2.$$typeof) {
              case va:
                return a25 = a25.get(null === d2.key ? c6 : d2.key) || null, k(b2, a25, d2, e44);
              case wa:
                return a25 = a25.get(null === d2.key ? c6 : d2.key) || null, l(b2, a25, d2, e44);
              case Ha:
                var f3 = d2._init;
                return y(a25, b2, c6, f3(d2._payload), e44);
            }
            if (eb(d2) || Ka(d2)) return a25 = a25.get(c6) || null, m2(b2, a25, d2, e44, null);
            Mg(b2, d2);
          }
          return null;
        }
        function n6(e44, g2, h2, k2) {
          for (var l2 = null, m3 = null, u = g2, w = g2 = 0, x = null; null !== u && w < h2.length; w++) {
            u.index > w ? (x = u, u = null) : x = u.sibling;
            var n7 = r3(e44, u, h2[w], k2);
            if (null === n7) {
              null === u && (u = x);
              break;
            }
            a24 && u && null === n7.alternate && b(e44, u);
            g2 = f2(n7, g2, w);
            null === m3 ? l2 = n7 : m3.sibling = n7;
            m3 = n7;
            u = x;
          }
          if (w === h2.length) return c5(e44, u), I2 && tg(e44, w), l2;
          if (null === u) {
            for (; w < h2.length; w++) u = q(e44, h2[w], k2), null !== u && (g2 = f2(u, g2, w), null === m3 ? l2 = u : m3.sibling = u, m3 = u);
            I2 && tg(e44, w);
            return l2;
          }
          for (u = d(e44, u); w < h2.length; w++) x = y(u, e44, w, h2[w], k2), null !== x && (a24 && null !== x.alternate && u.delete(null === x.key ? w : x.key), g2 = f2(x, g2, w), null === m3 ? l2 = x : m3.sibling = x, m3 = x);
          a24 && u.forEach(function(a25) {
            return b(e44, a25);
          });
          I2 && tg(e44, w);
          return l2;
        }
        function t7(e44, g2, h2, k2) {
          var l2 = Ka(h2);
          if ("function" !== typeof l2) throw Error(p2(150));
          h2 = l2.call(h2);
          if (null == h2) throw Error(p2(151));
          for (var u = l2 = null, m3 = g2, w = g2 = 0, x = null, n7 = h2.next(); null !== m3 && !n7.done; w++, n7 = h2.next()) {
            m3.index > w ? (x = m3, m3 = null) : x = m3.sibling;
            var t8 = r3(e44, m3, n7.value, k2);
            if (null === t8) {
              null === m3 && (m3 = x);
              break;
            }
            a24 && m3 && null === t8.alternate && b(e44, m3);
            g2 = f2(t8, g2, w);
            null === u ? l2 = t8 : u.sibling = t8;
            u = t8;
            m3 = x;
          }
          if (n7.done) return c5(
            e44,
            m3
          ), I2 && tg(e44, w), l2;
          if (null === m3) {
            for (; !n7.done; w++, n7 = h2.next()) n7 = q(e44, n7.value, k2), null !== n7 && (g2 = f2(n7, g2, w), null === u ? l2 = n7 : u.sibling = n7, u = n7);
            I2 && tg(e44, w);
            return l2;
          }
          for (m3 = d(e44, m3); !n7.done; w++, n7 = h2.next()) n7 = y(m3, e44, w, n7.value, k2), null !== n7 && (a24 && null !== n7.alternate && m3.delete(null === n7.key ? w : n7.key), g2 = f2(n7, g2, w), null === u ? l2 = n7 : u.sibling = n7, u = n7);
          a24 && m3.forEach(function(a25) {
            return b(e44, a25);
          });
          I2 && tg(e44, w);
          return l2;
        }
        function J(a25, d2, f3, h2) {
          "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
          if ("object" === typeof f3 && null !== f3) {
            switch (f3.$$typeof) {
              case va:
                a: {
                  for (var k2 = f3.key, l2 = d2; null !== l2; ) {
                    if (l2.key === k2) {
                      k2 = f3.type;
                      if (k2 === ya) {
                        if (7 === l2.tag) {
                          c5(a25, l2.sibling);
                          d2 = e43(l2, f3.props.children);
                          d2.return = a25;
                          a25 = d2;
                          break a;
                        }
                      } else if (l2.elementType === k2 || "object" === typeof k2 && null !== k2 && k2.$$typeof === Ha && Ng(k2) === l2.type) {
                        c5(a25, l2.sibling);
                        d2 = e43(l2, f3.props);
                        d2.ref = Lg(a25, l2, f3);
                        d2.return = a25;
                        a25 = d2;
                        break a;
                      }
                      c5(a25, l2);
                      break;
                    } else b(a25, l2);
                    l2 = l2.sibling;
                  }
                  f3.type === ya ? (d2 = Tg(f3.props.children, a25.mode, h2, f3.key), d2.return = a25, a25 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a25.mode, h2), h2.ref = Lg(a25, d2, f3), h2.return = a25, a25 = h2);
                }
                return g(a25);
              case wa:
                a: {
                  for (l2 = f3.key; null !== d2; ) {
                    if (d2.key === l2) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                      c5(a25, d2.sibling);
                      d2 = e43(d2, f3.children || []);
                      d2.return = a25;
                      a25 = d2;
                      break a;
                    } else {
                      c5(a25, d2);
                      break;
                    }
                    else b(a25, d2);
                    d2 = d2.sibling;
                  }
                  d2 = Sg(f3, a25.mode, h2);
                  d2.return = a25;
                  a25 = d2;
                }
                return g(a25);
              case Ha:
                return l2 = f3._init, J(a25, d2, l2(f3._payload), h2);
            }
            if (eb(f3)) return n6(a25, d2, f3, h2);
            if (Ka(f3)) return t7(a25, d2, f3, h2);
            Mg(a25, f3);
          }
          return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c5(a25, d2.sibling), d2 = e43(d2, f3), d2.return = a25, a25 = d2) : (c5(a25, d2), d2 = Qg(f3, a25.mode, h2), d2.return = a25, a25 = d2), g(a25)) : c5(a25, d2);
        }
        return J;
      }
      var Ug = Og(true);
      var Vg = Og(false);
      var Wg = Uf(null);
      var Xg = null;
      var Yg = null;
      var Zg = null;
      function $g() {
        Zg = Yg = Xg = null;
      }
      function ah(a24) {
        var b = Wg.current;
        E(Wg);
        a24._currentValue = b;
      }
      function bh(a24, b, c5) {
        for (; null !== a24; ) {
          var d = a24.alternate;
          (a24.childLanes & b) !== b ? (a24.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
          if (a24 === c5) break;
          a24 = a24.return;
        }
      }
      function ch(a24, b) {
        Xg = a24;
        Zg = Yg = null;
        a24 = a24.dependencies;
        null !== a24 && null !== a24.firstContext && (0 !== (a24.lanes & b) && (dh = true), a24.firstContext = null);
      }
      function eh(a24) {
        var b = a24._currentValue;
        if (Zg !== a24) if (a24 = { context: a24, memoizedValue: b, next: null }, null === Yg) {
          if (null === Xg) throw Error(p2(308));
          Yg = a24;
          Xg.dependencies = { lanes: 0, firstContext: a24 };
        } else Yg = Yg.next = a24;
        return b;
      }
      var fh = null;
      function gh(a24) {
        null === fh ? fh = [a24] : fh.push(a24);
      }
      function hh(a24, b, c5, d) {
        var e43 = b.interleaved;
        null === e43 ? (c5.next = c5, gh(b)) : (c5.next = e43.next, e43.next = c5);
        b.interleaved = c5;
        return ih(a24, d);
      }
      function ih(a24, b) {
        a24.lanes |= b;
        var c5 = a24.alternate;
        null !== c5 && (c5.lanes |= b);
        c5 = a24;
        for (a24 = a24.return; null !== a24; ) a24.childLanes |= b, c5 = a24.alternate, null !== c5 && (c5.childLanes |= b), c5 = a24, a24 = a24.return;
        return 3 === c5.tag ? c5.stateNode : null;
      }
      var jh = false;
      function kh(a24) {
        a24.updateQueue = { baseState: a24.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
      }
      function lh(a24, b) {
        a24 = a24.updateQueue;
        b.updateQueue === a24 && (b.updateQueue = { baseState: a24.baseState, firstBaseUpdate: a24.firstBaseUpdate, lastBaseUpdate: a24.lastBaseUpdate, shared: a24.shared, effects: a24.effects });
      }
      function mh(a24, b) {
        return { eventTime: a24, lane: b, tag: 0, payload: null, callback: null, next: null };
      }
      function nh(a24, b, c5) {
        var d = a24.updateQueue;
        if (null === d) return null;
        d = d.shared;
        if (0 !== (K & 2)) {
          var e43 = d.pending;
          null === e43 ? b.next = b : (b.next = e43.next, e43.next = b);
          d.pending = b;
          return ih(a24, c5);
        }
        e43 = d.interleaved;
        null === e43 ? (b.next = b, gh(d)) : (b.next = e43.next, e43.next = b);
        d.interleaved = b;
        return ih(a24, c5);
      }
      function oh(a24, b, c5) {
        b = b.updateQueue;
        if (null !== b && (b = b.shared, 0 !== (c5 & 4194240))) {
          var d = b.lanes;
          d &= a24.pendingLanes;
          c5 |= d;
          b.lanes = c5;
          Cc(a24, c5);
        }
      }
      function ph(a24, b) {
        var c5 = a24.updateQueue, d = a24.alternate;
        if (null !== d && (d = d.updateQueue, c5 === d)) {
          var e43 = null, f2 = null;
          c5 = c5.firstBaseUpdate;
          if (null !== c5) {
            do {
              var g = { eventTime: c5.eventTime, lane: c5.lane, tag: c5.tag, payload: c5.payload, callback: c5.callback, next: null };
              null === f2 ? e43 = f2 = g : f2 = f2.next = g;
              c5 = c5.next;
            } while (null !== c5);
            null === f2 ? e43 = f2 = b : f2 = f2.next = b;
          } else e43 = f2 = b;
          c5 = { baseState: d.baseState, firstBaseUpdate: e43, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
          a24.updateQueue = c5;
          return;
        }
        a24 = c5.lastBaseUpdate;
        null === a24 ? c5.firstBaseUpdate = b : a24.next = b;
        c5.lastBaseUpdate = b;
      }
      function qh(a24, b, c5, d) {
        var e43 = a24.updateQueue;
        jh = false;
        var f2 = e43.firstBaseUpdate, g = e43.lastBaseUpdate, h = e43.shared.pending;
        if (null !== h) {
          e43.shared.pending = null;
          var k = h, l = k.next;
          k.next = null;
          null === g ? f2 = l : g.next = l;
          g = k;
          var m2 = a24.alternate;
          null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l : h.next = l, m2.lastBaseUpdate = k));
        }
        if (null !== f2) {
          var q = e43.baseState;
          g = 0;
          m2 = l = k = null;
          h = f2;
          do {
            var r3 = h.lane, y = h.eventTime;
            if ((d & r3) === r3) {
              null !== m2 && (m2 = m2.next = {
                eventTime: y,
                lane: 0,
                tag: h.tag,
                payload: h.payload,
                callback: h.callback,
                next: null
              });
              a: {
                var n6 = a24, t7 = h;
                r3 = b;
                y = c5;
                switch (t7.tag) {
                  case 1:
                    n6 = t7.payload;
                    if ("function" === typeof n6) {
                      q = n6.call(y, q, r3);
                      break a;
                    }
                    q = n6;
                    break a;
                  case 3:
                    n6.flags = n6.flags & -65537 | 128;
                  case 0:
                    n6 = t7.payload;
                    r3 = "function" === typeof n6 ? n6.call(y, q, r3) : n6;
                    if (null === r3 || void 0 === r3) break a;
                    q = A({}, q, r3);
                    break a;
                  case 2:
                    jh = true;
                }
              }
              null !== h.callback && 0 !== h.lane && (a24.flags |= 64, r3 = e43.effects, null === r3 ? e43.effects = [h] : r3.push(h));
            } else y = { eventTime: y, lane: r3, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l = m2 = y, k = q) : m2 = m2.next = y, g |= r3;
            h = h.next;
            if (null === h) if (h = e43.shared.pending, null === h) break;
            else r3 = h, h = r3.next, r3.next = null, e43.lastBaseUpdate = r3, e43.shared.pending = null;
          } while (1);
          null === m2 && (k = q);
          e43.baseState = k;
          e43.firstBaseUpdate = l;
          e43.lastBaseUpdate = m2;
          b = e43.shared.interleaved;
          if (null !== b) {
            e43 = b;
            do
              g |= e43.lane, e43 = e43.next;
            while (e43 !== b);
          } else null === f2 && (e43.shared.lanes = 0);
          rh |= g;
          a24.lanes = g;
          a24.memoizedState = q;
        }
      }
      function sh(a24, b, c5) {
        a24 = b.effects;
        b.effects = null;
        if (null !== a24) for (b = 0; b < a24.length; b++) {
          var d = a24[b], e43 = d.callback;
          if (null !== e43) {
            d.callback = null;
            d = c5;
            if ("function" !== typeof e43) throw Error(p2(191, e43));
            e43.call(d);
          }
        }
      }
      var th = {};
      var uh = Uf(th);
      var vh = Uf(th);
      var wh = Uf(th);
      function xh(a24) {
        if (a24 === th) throw Error(p2(174));
        return a24;
      }
      function yh(a24, b) {
        G(wh, b);
        G(vh, a24);
        G(uh, th);
        a24 = b.nodeType;
        switch (a24) {
          case 9:
          case 11:
            b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
            break;
          default:
            a24 = 8 === a24 ? b.parentNode : b, b = a24.namespaceURI || null, a24 = a24.tagName, b = lb(b, a24);
        }
        E(uh);
        G(uh, b);
      }
      function zh() {
        E(uh);
        E(vh);
        E(wh);
      }
      function Ah(a24) {
        xh(wh.current);
        var b = xh(uh.current);
        var c5 = lb(b, a24.type);
        b !== c5 && (G(vh, a24), G(uh, c5));
      }
      function Bh(a24) {
        vh.current === a24 && (E(uh), E(vh));
      }
      var L = Uf(0);
      function Ch(a24) {
        for (var b = a24; null !== b; ) {
          if (13 === b.tag) {
            var c5 = b.memoizedState;
            if (null !== c5 && (c5 = c5.dehydrated, null === c5 || "$?" === c5.data || "$!" === c5.data)) return b;
          } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
            if (0 !== (b.flags & 128)) return b;
          } else if (null !== b.child) {
            b.child.return = b;
            b = b.child;
            continue;
          }
          if (b === a24) break;
          for (; null === b.sibling; ) {
            if (null === b.return || b.return === a24) return null;
            b = b.return;
          }
          b.sibling.return = b.return;
          b = b.sibling;
        }
        return null;
      }
      var Dh = [];
      function Eh() {
        for (var a24 = 0; a24 < Dh.length; a24++) Dh[a24]._workInProgressVersionPrimary = null;
        Dh.length = 0;
      }
      var Fh = ua.ReactCurrentDispatcher;
      var Gh = ua.ReactCurrentBatchConfig;
      var Hh = 0;
      var M = null;
      var N = null;
      var O = null;
      var Ih = false;
      var Jh = false;
      var Kh = 0;
      var Lh = 0;
      function P() {
        throw Error(p2(321));
      }
      function Mh(a24, b) {
        if (null === b) return false;
        for (var c5 = 0; c5 < b.length && c5 < a24.length; c5++) if (!He(a24[c5], b[c5])) return false;
        return true;
      }
      function Nh(a24, b, c5, d, e43, f2) {
        Hh = f2;
        M = b;
        b.memoizedState = null;
        b.updateQueue = null;
        b.lanes = 0;
        Fh.current = null === a24 || null === a24.memoizedState ? Oh : Ph;
        a24 = c5(d, e43);
        if (Jh) {
          f2 = 0;
          do {
            Jh = false;
            Kh = 0;
            if (25 <= f2) throw Error(p2(301));
            f2 += 1;
            O = N = null;
            b.updateQueue = null;
            Fh.current = Qh;
            a24 = c5(d, e43);
          } while (Jh);
        }
        Fh.current = Rh;
        b = null !== N && null !== N.next;
        Hh = 0;
        O = N = M = null;
        Ih = false;
        if (b) throw Error(p2(300));
        return a24;
      }
      function Sh() {
        var a24 = 0 !== Kh;
        Kh = 0;
        return a24;
      }
      function Th() {
        var a24 = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
        null === O ? M.memoizedState = O = a24 : O = O.next = a24;
        return O;
      }
      function Uh() {
        if (null === N) {
          var a24 = M.alternate;
          a24 = null !== a24 ? a24.memoizedState : null;
        } else a24 = N.next;
        var b = null === O ? M.memoizedState : O.next;
        if (null !== b) O = b, N = a24;
        else {
          if (null === a24) throw Error(p2(310));
          N = a24;
          a24 = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
          null === O ? M.memoizedState = O = a24 : O = O.next = a24;
        }
        return O;
      }
      function Vh(a24, b) {
        return "function" === typeof b ? b(a24) : b;
      }
      function Wh(a24) {
        var b = Uh(), c5 = b.queue;
        if (null === c5) throw Error(p2(311));
        c5.lastRenderedReducer = a24;
        var d = N, e43 = d.baseQueue, f2 = c5.pending;
        if (null !== f2) {
          if (null !== e43) {
            var g = e43.next;
            e43.next = f2.next;
            f2.next = g;
          }
          d.baseQueue = e43 = f2;
          c5.pending = null;
        }
        if (null !== e43) {
          f2 = e43.next;
          d = d.baseState;
          var h = g = null, k = null, l = f2;
          do {
            var m2 = l.lane;
            if ((Hh & m2) === m2) null !== k && (k = k.next = { lane: 0, action: l.action, hasEagerState: l.hasEagerState, eagerState: l.eagerState, next: null }), d = l.hasEagerState ? l.eagerState : a24(d, l.action);
            else {
              var q = {
                lane: m2,
                action: l.action,
                hasEagerState: l.hasEagerState,
                eagerState: l.eagerState,
                next: null
              };
              null === k ? (h = k = q, g = d) : k = k.next = q;
              M.lanes |= m2;
              rh |= m2;
            }
            l = l.next;
          } while (null !== l && l !== f2);
          null === k ? g = d : k.next = h;
          He(d, b.memoizedState) || (dh = true);
          b.memoizedState = d;
          b.baseState = g;
          b.baseQueue = k;
          c5.lastRenderedState = d;
        }
        a24 = c5.interleaved;
        if (null !== a24) {
          e43 = a24;
          do
            f2 = e43.lane, M.lanes |= f2, rh |= f2, e43 = e43.next;
          while (e43 !== a24);
        } else null === e43 && (c5.lanes = 0);
        return [b.memoizedState, c5.dispatch];
      }
      function Xh(a24) {
        var b = Uh(), c5 = b.queue;
        if (null === c5) throw Error(p2(311));
        c5.lastRenderedReducer = a24;
        var d = c5.dispatch, e43 = c5.pending, f2 = b.memoizedState;
        if (null !== e43) {
          c5.pending = null;
          var g = e43 = e43.next;
          do
            f2 = a24(f2, g.action), g = g.next;
          while (g !== e43);
          He(f2, b.memoizedState) || (dh = true);
          b.memoizedState = f2;
          null === b.baseQueue && (b.baseState = f2);
          c5.lastRenderedState = f2;
        }
        return [f2, d];
      }
      function Yh() {
      }
      function Zh(a24, b) {
        var c5 = M, d = Uh(), e43 = b(), f2 = !He(d.memoizedState, e43);
        f2 && (d.memoizedState = e43, dh = true);
        d = d.queue;
        $h(ai.bind(null, c5, d, a24), [a24]);
        if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
          c5.flags |= 2048;
          bi(9, ci.bind(null, c5, d, e43, b), void 0, null);
          if (null === Q) throw Error(p2(349));
          0 !== (Hh & 30) || di(c5, b, e43);
        }
        return e43;
      }
      function di(a24, b, c5) {
        a24.flags |= 16384;
        a24 = { getSnapshot: b, value: c5 };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a24]) : (c5 = b.stores, null === c5 ? b.stores = [a24] : c5.push(a24));
      }
      function ci(a24, b, c5, d) {
        b.value = c5;
        b.getSnapshot = d;
        ei(b) && fi(a24);
      }
      function ai(a24, b, c5) {
        return c5(function() {
          ei(b) && fi(a24);
        });
      }
      function ei(a24) {
        var b = a24.getSnapshot;
        a24 = a24.value;
        try {
          var c5 = b();
          return !He(a24, c5);
        } catch (d) {
          return true;
        }
      }
      function fi(a24) {
        var b = ih(a24, 1);
        null !== b && gi(b, a24, 1, -1);
      }
      function hi(a24) {
        var b = Th();
        "function" === typeof a24 && (a24 = a24());
        b.memoizedState = b.baseState = a24;
        a24 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a24 };
        b.queue = a24;
        a24 = a24.dispatch = ii.bind(null, M, a24);
        return [b.memoizedState, a24];
      }
      function bi(a24, b, c5, d) {
        a24 = { tag: a24, create: b, destroy: c5, deps: d, next: null };
        b = M.updateQueue;
        null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a24.next = a24) : (c5 = b.lastEffect, null === c5 ? b.lastEffect = a24.next = a24 : (d = c5.next, c5.next = a24, a24.next = d, b.lastEffect = a24));
        return a24;
      }
      function ji() {
        return Uh().memoizedState;
      }
      function ki(a24, b, c5, d) {
        var e43 = Th();
        M.flags |= a24;
        e43.memoizedState = bi(1 | b, c5, void 0, void 0 === d ? null : d);
      }
      function li(a24, b, c5, d) {
        var e43 = Uh();
        d = void 0 === d ? null : d;
        var f2 = void 0;
        if (null !== N) {
          var g = N.memoizedState;
          f2 = g.destroy;
          if (null !== d && Mh(d, g.deps)) {
            e43.memoizedState = bi(b, c5, f2, d);
            return;
          }
        }
        M.flags |= a24;
        e43.memoizedState = bi(1 | b, c5, f2, d);
      }
      function mi(a24, b) {
        return ki(8390656, 8, a24, b);
      }
      function $h(a24, b) {
        return li(2048, 8, a24, b);
      }
      function ni(a24, b) {
        return li(4, 2, a24, b);
      }
      function oi(a24, b) {
        return li(4, 4, a24, b);
      }
      function pi(a24, b) {
        if ("function" === typeof b) return a24 = a24(), b(a24), function() {
          b(null);
        };
        if (null !== b && void 0 !== b) return a24 = a24(), b.current = a24, function() {
          b.current = null;
        };
      }
      function qi(a24, b, c5) {
        c5 = null !== c5 && void 0 !== c5 ? c5.concat([a24]) : null;
        return li(4, 4, pi.bind(null, b, a24), c5);
      }
      function ri() {
      }
      function si(a24, b) {
        var c5 = Uh();
        b = void 0 === b ? null : b;
        var d = c5.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        c5.memoizedState = [a24, b];
        return a24;
      }
      function ti(a24, b) {
        var c5 = Uh();
        b = void 0 === b ? null : b;
        var d = c5.memoizedState;
        if (null !== d && null !== b && Mh(b, d[1])) return d[0];
        a24 = a24();
        c5.memoizedState = [a24, b];
        return a24;
      }
      function ui(a24, b, c5) {
        if (0 === (Hh & 21)) return a24.baseState && (a24.baseState = false, dh = true), a24.memoizedState = c5;
        He(c5, b) || (c5 = yc(), M.lanes |= c5, rh |= c5, a24.baseState = true);
        return b;
      }
      function vi(a24, b) {
        var c5 = C;
        C = 0 !== c5 && 4 > c5 ? c5 : 4;
        a24(true);
        var d = Gh.transition;
        Gh.transition = {};
        try {
          a24(false), b();
        } finally {
          C = c5, Gh.transition = d;
        }
      }
      function wi() {
        return Uh().memoizedState;
      }
      function xi(a24, b, c5) {
        var d = yi(a24);
        c5 = { lane: d, action: c5, hasEagerState: false, eagerState: null, next: null };
        if (zi(a24)) Ai(b, c5);
        else if (c5 = hh(a24, b, c5, d), null !== c5) {
          var e43 = R();
          gi(c5, a24, d, e43);
          Bi(c5, b, d);
        }
      }
      function ii(a24, b, c5) {
        var d = yi(a24), e43 = { lane: d, action: c5, hasEagerState: false, eagerState: null, next: null };
        if (zi(a24)) Ai(b, e43);
        else {
          var f2 = a24.alternate;
          if (0 === a24.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
            var g = b.lastRenderedState, h = f2(g, c5);
            e43.hasEagerState = true;
            e43.eagerState = h;
            if (He(h, g)) {
              var k = b.interleaved;
              null === k ? (e43.next = e43, gh(b)) : (e43.next = k.next, k.next = e43);
              b.interleaved = e43;
              return;
            }
          } catch (l) {
          } finally {
          }
          c5 = hh(a24, b, e43, d);
          null !== c5 && (e43 = R(), gi(c5, a24, d, e43), Bi(c5, b, d));
        }
      }
      function zi(a24) {
        var b = a24.alternate;
        return a24 === M || null !== b && b === M;
      }
      function Ai(a24, b) {
        Jh = Ih = true;
        var c5 = a24.pending;
        null === c5 ? b.next = b : (b.next = c5.next, c5.next = b);
        a24.pending = b;
      }
      function Bi(a24, b, c5) {
        if (0 !== (c5 & 4194240)) {
          var d = b.lanes;
          d &= a24.pendingLanes;
          c5 |= d;
          b.lanes = c5;
          Cc(a24, c5);
        }
      }
      var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false };
      var Oh = { readContext: eh, useCallback: function(a24, b) {
        Th().memoizedState = [a24, void 0 === b ? null : b];
        return a24;
      }, useContext: eh, useEffect: mi, useImperativeHandle: function(a24, b, c5) {
        c5 = null !== c5 && void 0 !== c5 ? c5.concat([a24]) : null;
        return ki(
          4194308,
          4,
          pi.bind(null, b, a24),
          c5
        );
      }, useLayoutEffect: function(a24, b) {
        return ki(4194308, 4, a24, b);
      }, useInsertionEffect: function(a24, b) {
        return ki(4, 2, a24, b);
      }, useMemo: function(a24, b) {
        var c5 = Th();
        b = void 0 === b ? null : b;
        a24 = a24();
        c5.memoizedState = [a24, b];
        return a24;
      }, useReducer: function(a24, b, c5) {
        var d = Th();
        b = void 0 !== c5 ? c5(b) : b;
        d.memoizedState = d.baseState = b;
        a24 = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a24, lastRenderedState: b };
        d.queue = a24;
        a24 = a24.dispatch = xi.bind(null, M, a24);
        return [d.memoizedState, a24];
      }, useRef: function(a24) {
        var b = Th();
        a24 = { current: a24 };
        return b.memoizedState = a24;
      }, useState: hi, useDebugValue: ri, useDeferredValue: function(a24) {
        return Th().memoizedState = a24;
      }, useTransition: function() {
        var a24 = hi(false), b = a24[0];
        a24 = vi.bind(null, a24[1]);
        Th().memoizedState = a24;
        return [b, a24];
      }, useMutableSource: function() {
      }, useSyncExternalStore: function(a24, b, c5) {
        var d = M, e43 = Th();
        if (I2) {
          if (void 0 === c5) throw Error(p2(407));
          c5 = c5();
        } else {
          c5 = b();
          if (null === Q) throw Error(p2(349));
          0 !== (Hh & 30) || di(d, b, c5);
        }
        e43.memoizedState = c5;
        var f2 = { value: c5, getSnapshot: b };
        e43.queue = f2;
        mi(ai.bind(
          null,
          d,
          f2,
          a24
        ), [a24]);
        d.flags |= 2048;
        bi(9, ci.bind(null, d, f2, c5, b), void 0, null);
        return c5;
      }, useId: function() {
        var a24 = Th(), b = Q.identifierPrefix;
        if (I2) {
          var c5 = sg;
          var d = rg;
          c5 = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c5;
          b = ":" + b + "R" + c5;
          c5 = Kh++;
          0 < c5 && (b += "H" + c5.toString(32));
          b += ":";
        } else c5 = Lh++, b = ":" + b + "r" + c5.toString(32) + ":";
        return a24.memoizedState = b;
      }, unstable_isNewReconciler: false };
      var Ph = {
        readContext: eh,
        useCallback: si,
        useContext: eh,
        useEffect: $h,
        useImperativeHandle: qi,
        useInsertionEffect: ni,
        useLayoutEffect: oi,
        useMemo: ti,
        useReducer: Wh,
        useRef: ji,
        useState: function() {
          return Wh(Vh);
        },
        useDebugValue: ri,
        useDeferredValue: function(a24) {
          var b = Uh();
          return ui(b, N.memoizedState, a24);
        },
        useTransition: function() {
          var a24 = Wh(Vh)[0], b = Uh().memoizedState;
          return [a24, b];
        },
        useMutableSource: Yh,
        useSyncExternalStore: Zh,
        useId: wi,
        unstable_isNewReconciler: false
      };
      var Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
        return Xh(Vh);
      }, useDebugValue: ri, useDeferredValue: function(a24) {
        var b = Uh();
        return null === N ? b.memoizedState = a24 : ui(b, N.memoizedState, a24);
      }, useTransition: function() {
        var a24 = Xh(Vh)[0], b = Uh().memoizedState;
        return [a24, b];
      }, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
      function Ci(a24, b) {
        if (a24 && a24.defaultProps) {
          b = A({}, b);
          a24 = a24.defaultProps;
          for (var c5 in a24) void 0 === b[c5] && (b[c5] = a24[c5]);
          return b;
        }
        return b;
      }
      function Di(a24, b, c5, d) {
        b = a24.memoizedState;
        c5 = c5(d, b);
        c5 = null === c5 || void 0 === c5 ? b : A({}, b, c5);
        a24.memoizedState = c5;
        0 === a24.lanes && (a24.updateQueue.baseState = c5);
      }
      var Ei = { isMounted: function(a24) {
        return (a24 = a24._reactInternals) ? Vb(a24) === a24 : false;
      }, enqueueSetState: function(a24, b, c5) {
        a24 = a24._reactInternals;
        var d = R(), e43 = yi(a24), f2 = mh(d, e43);
        f2.payload = b;
        void 0 !== c5 && null !== c5 && (f2.callback = c5);
        b = nh(a24, f2, e43);
        null !== b && (gi(b, a24, e43, d), oh(b, a24, e43));
      }, enqueueReplaceState: function(a24, b, c5) {
        a24 = a24._reactInternals;
        var d = R(), e43 = yi(a24), f2 = mh(d, e43);
        f2.tag = 1;
        f2.payload = b;
        void 0 !== c5 && null !== c5 && (f2.callback = c5);
        b = nh(a24, f2, e43);
        null !== b && (gi(b, a24, e43, d), oh(b, a24, e43));
      }, enqueueForceUpdate: function(a24, b) {
        a24 = a24._reactInternals;
        var c5 = R(), d = yi(a24), e43 = mh(c5, d);
        e43.tag = 2;
        void 0 !== b && null !== b && (e43.callback = b);
        b = nh(a24, e43, d);
        null !== b && (gi(b, a24, d, c5), oh(b, a24, d));
      } };
      function Fi(a24, b, c5, d, e43, f2, g) {
        a24 = a24.stateNode;
        return "function" === typeof a24.shouldComponentUpdate ? a24.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c5, d) || !Ie(e43, f2) : true;
      }
      function Gi(a24, b, c5) {
        var d = false, e43 = Vf;
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e43 = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a24, e43) : Vf);
        b = new b(c5, f2);
        a24.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
        b.updater = Ei;
        a24.stateNode = b;
        b._reactInternals = a24;
        d && (a24 = a24.stateNode, a24.__reactInternalMemoizedUnmaskedChildContext = e43, a24.__reactInternalMemoizedMaskedChildContext = f2);
        return b;
      }
      function Hi(a24, b, c5, d) {
        a24 = b.state;
        "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c5, d);
        "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c5, d);
        b.state !== a24 && Ei.enqueueReplaceState(b, b.state, null);
      }
      function Ii(a24, b, c5, d) {
        var e43 = a24.stateNode;
        e43.props = c5;
        e43.state = a24.memoizedState;
        e43.refs = {};
        kh(a24);
        var f2 = b.contextType;
        "object" === typeof f2 && null !== f2 ? e43.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e43.context = Yf(a24, f2));
        e43.state = a24.memoizedState;
        f2 = b.getDerivedStateFromProps;
        "function" === typeof f2 && (Di(a24, b, f2, c5), e43.state = a24.memoizedState);
        "function" === typeof b.getDerivedStateFromProps || "function" === typeof e43.getSnapshotBeforeUpdate || "function" !== typeof e43.UNSAFE_componentWillMount && "function" !== typeof e43.componentWillMount || (b = e43.state, "function" === typeof e43.componentWillMount && e43.componentWillMount(), "function" === typeof e43.UNSAFE_componentWillMount && e43.UNSAFE_componentWillMount(), b !== e43.state && Ei.enqueueReplaceState(e43, e43.state, null), qh(a24, c5, e43, d), e43.state = a24.memoizedState);
        "function" === typeof e43.componentDidMount && (a24.flags |= 4194308);
      }
      function Ji(a24, b) {
        try {
          var c5 = "", d = b;
          do
            c5 += Pa(d), d = d.return;
          while (d);
          var e43 = c5;
        } catch (f2) {
          e43 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
        }
        return { value: a24, source: b, stack: e43, digest: null };
      }
      function Ki(a24, b, c5) {
        return { value: a24, source: null, stack: null != c5 ? c5 : null, digest: null != b ? b : null };
      }
      function Li(a24, b) {
        try {
          console.error(b.value);
        } catch (c5) {
          setTimeout(function() {
            throw c5;
          });
        }
      }
      var Mi = "function" === typeof WeakMap ? WeakMap : Map;
      function Ni(a24, b, c5) {
        c5 = mh(-1, c5);
        c5.tag = 3;
        c5.payload = { element: null };
        var d = b.value;
        c5.callback = function() {
          Oi || (Oi = true, Pi = d);
          Li(a24, b);
        };
        return c5;
      }
      function Qi(a24, b, c5) {
        c5 = mh(-1, c5);
        c5.tag = 3;
        var d = a24.type.getDerivedStateFromError;
        if ("function" === typeof d) {
          var e43 = b.value;
          c5.payload = function() {
            return d(e43);
          };
          c5.callback = function() {
            Li(a24, b);
          };
        }
        var f2 = a24.stateNode;
        null !== f2 && "function" === typeof f2.componentDidCatch && (c5.callback = function() {
          Li(a24, b);
          "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
          var c6 = b.stack;
          this.componentDidCatch(b.value, { componentStack: null !== c6 ? c6 : "" });
        });
        return c5;
      }
      function Si(a24, b, c5) {
        var d = a24.pingCache;
        if (null === d) {
          d = a24.pingCache = new Mi();
          var e43 = /* @__PURE__ */ new Set();
          d.set(b, e43);
        } else e43 = d.get(b), void 0 === e43 && (e43 = /* @__PURE__ */ new Set(), d.set(b, e43));
        e43.has(c5) || (e43.add(c5), a24 = Ti.bind(null, a24, b, c5), b.then(a24, a24));
      }
      function Ui(a24) {
        do {
          var b;
          if (b = 13 === a24.tag) b = a24.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
          if (b) return a24;
          a24 = a24.return;
        } while (null !== a24);
        return null;
      }
      function Vi(a24, b, c5, d, e43) {
        if (0 === (a24.mode & 1)) return a24 === b ? a24.flags |= 65536 : (a24.flags |= 128, c5.flags |= 131072, c5.flags &= -52805, 1 === c5.tag && (null === c5.alternate ? c5.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c5, b, 1))), c5.lanes |= 1), a24;
        a24.flags |= 65536;
        a24.lanes = e43;
        return a24;
      }
      var Wi = ua.ReactCurrentOwner;
      var dh = false;
      function Xi(a24, b, c5, d) {
        b.child = null === a24 ? Vg(b, null, c5, d) : Ug(b, a24.child, c5, d);
      }
      function Yi(a24, b, c5, d, e43) {
        c5 = c5.render;
        var f2 = b.ref;
        ch(b, e43);
        d = Nh(a24, b, c5, d, f2, e43);
        c5 = Sh();
        if (null !== a24 && !dh) return b.updateQueue = a24.updateQueue, b.flags &= -2053, a24.lanes &= ~e43, Zi(a24, b, e43);
        I2 && c5 && vg(b);
        b.flags |= 1;
        Xi(a24, b, d, e43);
        return b.child;
      }
      function $i(a24, b, c5, d, e43) {
        if (null === a24) {
          var f2 = c5.type;
          if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c5.compare && void 0 === c5.defaultProps) return b.tag = 15, b.type = f2, bj(a24, b, f2, d, e43);
          a24 = Rg(c5.type, null, d, b, b.mode, e43);
          a24.ref = b.ref;
          a24.return = b;
          return b.child = a24;
        }
        f2 = a24.child;
        if (0 === (a24.lanes & e43)) {
          var g = f2.memoizedProps;
          c5 = c5.compare;
          c5 = null !== c5 ? c5 : Ie;
          if (c5(g, d) && a24.ref === b.ref) return Zi(a24, b, e43);
        }
        b.flags |= 1;
        a24 = Pg(f2, d);
        a24.ref = b.ref;
        a24.return = b;
        return b.child = a24;
      }
      function bj(a24, b, c5, d, e43) {
        if (null !== a24) {
          var f2 = a24.memoizedProps;
          if (Ie(f2, d) && a24.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a24.lanes & e43)) 0 !== (a24.flags & 131072) && (dh = true);
          else return b.lanes = a24.lanes, Zi(a24, b, e43);
        }
        return cj(a24, b, c5, d, e43);
      }
      function dj(a24, b, c5) {
        var d = b.pendingProps, e43 = d.children, f2 = null !== a24 ? a24.memoizedState : null;
        if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c5;
        else {
          if (0 === (c5 & 1073741824)) return a24 = null !== f2 ? f2.baseLanes | c5 : c5, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a24, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a24, null;
          b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
          d = null !== f2 ? f2.baseLanes : c5;
          G(ej, fj);
          fj |= d;
        }
        else null !== f2 ? (d = f2.baseLanes | c5, b.memoizedState = null) : d = c5, G(ej, fj), fj |= d;
        Xi(a24, b, e43, c5);
        return b.child;
      }
      function gj(a24, b) {
        var c5 = b.ref;
        if (null === a24 && null !== c5 || null !== a24 && a24.ref !== c5) b.flags |= 512, b.flags |= 2097152;
      }
      function cj(a24, b, c5, d, e43) {
        var f2 = Zf(c5) ? Xf : H.current;
        f2 = Yf(b, f2);
        ch(b, e43);
        c5 = Nh(a24, b, c5, d, f2, e43);
        d = Sh();
        if (null !== a24 && !dh) return b.updateQueue = a24.updateQueue, b.flags &= -2053, a24.lanes &= ~e43, Zi(a24, b, e43);
        I2 && d && vg(b);
        b.flags |= 1;
        Xi(a24, b, c5, e43);
        return b.child;
      }
      function hj(a24, b, c5, d, e43) {
        if (Zf(c5)) {
          var f2 = true;
          cg(b);
        } else f2 = false;
        ch(b, e43);
        if (null === b.stateNode) ij(a24, b), Gi(b, c5, d), Ii(b, c5, d, e43), d = true;
        else if (null === a24) {
          var g = b.stateNode, h = b.memoizedProps;
          g.props = h;
          var k = g.context, l = c5.contextType;
          "object" === typeof l && null !== l ? l = eh(l) : (l = Zf(c5) ? Xf : H.current, l = Yf(b, l));
          var m2 = c5.getDerivedStateFromProps, q = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
          q || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k !== l) && Hi(b, g, d, l);
          jh = false;
          var r3 = b.memoizedState;
          g.state = r3;
          qh(b, d, g, e43);
          k = b.memoizedState;
          h !== d || r3 !== k || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c5, m2, d), k = b.memoizedState), (h = jh || Fi(b, c5, h, d, r3, k, l)) ? (q || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k), g.props = d, g.state = k, g.context = l, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
        } else {
          g = b.stateNode;
          lh(a24, b);
          h = b.memoizedProps;
          l = b.type === b.elementType ? h : Ci(b.type, h);
          g.props = l;
          q = b.pendingProps;
          r3 = g.context;
          k = c5.contextType;
          "object" === typeof k && null !== k ? k = eh(k) : (k = Zf(c5) ? Xf : H.current, k = Yf(b, k));
          var y = c5.getDerivedStateFromProps;
          (m2 = "function" === typeof y || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q || r3 !== k) && Hi(b, g, d, k);
          jh = false;
          r3 = b.memoizedState;
          g.state = r3;
          qh(b, d, g, e43);
          var n6 = b.memoizedState;
          h !== q || r3 !== n6 || Wf.current || jh ? ("function" === typeof y && (Di(b, c5, y, d), n6 = b.memoizedState), (l = jh || Fi(b, c5, l, d, r3, n6, k) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n6, k), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n6, k)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a24.memoizedProps && r3 === a24.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a24.memoizedProps && r3 === a24.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n6), g.props = d, g.state = n6, g.context = k, d = l) : ("function" !== typeof g.componentDidUpdate || h === a24.memoizedProps && r3 === a24.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a24.memoizedProps && r3 === a24.memoizedState || (b.flags |= 1024), d = false);
        }
        return jj(a24, b, c5, d, f2, e43);
      }
      function jj(a24, b, c5, d, e43, f2) {
        gj(a24, b);
        var g = 0 !== (b.flags & 128);
        if (!d && !g) return e43 && dg(b, c5, false), Zi(a24, b, f2);
        d = b.stateNode;
        Wi.current = b;
        var h = g && "function" !== typeof c5.getDerivedStateFromError ? null : d.render();
        b.flags |= 1;
        null !== a24 && g ? (b.child = Ug(b, a24.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a24, b, h, f2);
        b.memoizedState = d.state;
        e43 && dg(b, c5, true);
        return b.child;
      }
      function kj(a24) {
        var b = a24.stateNode;
        b.pendingContext ? ag(a24, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a24, b.context, false);
        yh(a24, b.containerInfo);
      }
      function lj(a24, b, c5, d, e43) {
        Ig();
        Jg(e43);
        b.flags |= 256;
        Xi(a24, b, c5, d);
        return b.child;
      }
      var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
      function nj(a24) {
        return { baseLanes: a24, cachePool: null, transitions: null };
      }
      function oj(a24, b, c5) {
        var d = b.pendingProps, e43 = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
        (h = g) || (h = null !== a24 && null === a24.memoizedState ? false : 0 !== (e43 & 2));
        if (h) f2 = true, b.flags &= -129;
        else if (null === a24 || null !== a24.memoizedState) e43 |= 1;
        G(L, e43 & 1);
        if (null === a24) {
          Eg(b);
          a24 = b.memoizedState;
          if (null !== a24 && (a24 = a24.dehydrated, null !== a24)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a24.data ? b.lanes = 8 : b.lanes = 1073741824, null;
          g = d.children;
          a24 = d.fallback;
          return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a24 = Tg(a24, d, c5, null), f2.return = b, a24.return = b, f2.sibling = a24, b.child = f2, b.child.memoizedState = nj(c5), b.memoizedState = mj, a24) : qj(b, g);
        }
        e43 = a24.memoizedState;
        if (null !== e43 && (h = e43.dehydrated, null !== h)) return rj(a24, b, g, d, h, e43, c5);
        if (f2) {
          f2 = d.fallback;
          g = b.mode;
          e43 = a24.child;
          h = e43.sibling;
          var k = { mode: "hidden", children: d.children };
          0 === (g & 1) && b.child !== e43 ? (d = b.child, d.childLanes = 0, d.pendingProps = k, b.deletions = null) : (d = Pg(e43, k), d.subtreeFlags = e43.subtreeFlags & 14680064);
          null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c5, null), f2.flags |= 2);
          f2.return = b;
          d.return = b;
          d.sibling = f2;
          b.child = d;
          d = f2;
          f2 = b.child;
          g = a24.child.memoizedState;
          g = null === g ? nj(c5) : { baseLanes: g.baseLanes | c5, cachePool: null, transitions: g.transitions };
          f2.memoizedState = g;
          f2.childLanes = a24.childLanes & ~c5;
          b.memoizedState = mj;
          return d;
        }
        f2 = a24.child;
        a24 = f2.sibling;
        d = Pg(f2, { mode: "visible", children: d.children });
        0 === (b.mode & 1) && (d.lanes = c5);
        d.return = b;
        d.sibling = null;
        null !== a24 && (c5 = b.deletions, null === c5 ? (b.deletions = [a24], b.flags |= 16) : c5.push(a24));
        b.child = d;
        b.memoizedState = null;
        return d;
      }
      function qj(a24, b) {
        b = pj({ mode: "visible", children: b }, a24.mode, 0, null);
        b.return = a24;
        return a24.child = b;
      }
      function sj(a24, b, c5, d) {
        null !== d && Jg(d);
        Ug(b, a24.child, null, c5);
        a24 = qj(b, b.pendingProps.children);
        a24.flags |= 2;
        b.memoizedState = null;
        return a24;
      }
      function rj(a24, b, c5, d, e43, f2, g) {
        if (c5) {
          if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p2(422))), sj(a24, b, g, d);
          if (null !== b.memoizedState) return b.child = a24.child, b.flags |= 128, null;
          f2 = d.fallback;
          e43 = b.mode;
          d = pj({ mode: "visible", children: d.children }, e43, 0, null);
          f2 = Tg(f2, e43, g, null);
          f2.flags |= 2;
          d.return = b;
          f2.return = b;
          d.sibling = f2;
          b.child = d;
          0 !== (b.mode & 1) && Ug(b, a24.child, null, g);
          b.child.memoizedState = nj(g);
          b.memoizedState = mj;
          return f2;
        }
        if (0 === (b.mode & 1)) return sj(a24, b, g, null);
        if ("$!" === e43.data) {
          d = e43.nextSibling && e43.nextSibling.dataset;
          if (d) var h = d.dgst;
          d = h;
          f2 = Error(p2(419));
          d = Ki(f2, d, void 0);
          return sj(a24, b, g, d);
        }
        h = 0 !== (g & a24.childLanes);
        if (dh || h) {
          d = Q;
          if (null !== d) {
            switch (g & -g) {
              case 4:
                e43 = 2;
                break;
              case 16:
                e43 = 8;
                break;
              case 64:
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
              case 67108864:
                e43 = 32;
                break;
              case 536870912:
                e43 = 268435456;
                break;
              default:
                e43 = 0;
            }
            e43 = 0 !== (e43 & (d.suspendedLanes | g)) ? 0 : e43;
            0 !== e43 && e43 !== f2.retryLane && (f2.retryLane = e43, ih(a24, e43), gi(d, a24, e43, -1));
          }
          tj();
          d = Ki(Error(p2(421)));
          return sj(a24, b, g, d);
        }
        if ("$?" === e43.data) return b.flags |= 128, b.child = a24.child, b = uj.bind(null, a24), e43._reactRetry = b, null;
        a24 = f2.treeContext;
        yg = Lf(e43.nextSibling);
        xg = b;
        I2 = true;
        zg = null;
        null !== a24 && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a24.id, sg = a24.overflow, qg = b);
        b = qj(b, d.children);
        b.flags |= 4096;
        return b;
      }
      function vj(a24, b, c5) {
        a24.lanes |= b;
        var d = a24.alternate;
        null !== d && (d.lanes |= b);
        bh(a24.return, b, c5);
      }
      function wj(a24, b, c5, d, e43) {
        var f2 = a24.memoizedState;
        null === f2 ? a24.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c5, tailMode: e43 } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c5, f2.tailMode = e43);
      }
      function xj(a24, b, c5) {
        var d = b.pendingProps, e43 = d.revealOrder, f2 = d.tail;
        Xi(a24, b, d.children, c5);
        d = L.current;
        if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
        else {
          if (null !== a24 && 0 !== (a24.flags & 128)) a: for (a24 = b.child; null !== a24; ) {
            if (13 === a24.tag) null !== a24.memoizedState && vj(a24, c5, b);
            else if (19 === a24.tag) vj(a24, c5, b);
            else if (null !== a24.child) {
              a24.child.return = a24;
              a24 = a24.child;
              continue;
            }
            if (a24 === b) break a;
            for (; null === a24.sibling; ) {
              if (null === a24.return || a24.return === b) break a;
              a24 = a24.return;
            }
            a24.sibling.return = a24.return;
            a24 = a24.sibling;
          }
          d &= 1;
        }
        G(L, d);
        if (0 === (b.mode & 1)) b.memoizedState = null;
        else switch (e43) {
          case "forwards":
            c5 = b.child;
            for (e43 = null; null !== c5; ) a24 = c5.alternate, null !== a24 && null === Ch(a24) && (e43 = c5), c5 = c5.sibling;
            c5 = e43;
            null === c5 ? (e43 = b.child, b.child = null) : (e43 = c5.sibling, c5.sibling = null);
            wj(b, false, e43, c5, f2);
            break;
          case "backwards":
            c5 = null;
            e43 = b.child;
            for (b.child = null; null !== e43; ) {
              a24 = e43.alternate;
              if (null !== a24 && null === Ch(a24)) {
                b.child = e43;
                break;
              }
              a24 = e43.sibling;
              e43.sibling = c5;
              c5 = e43;
              e43 = a24;
            }
            wj(b, true, c5, null, f2);
            break;
          case "together":
            wj(b, false, null, null, void 0);
            break;
          default:
            b.memoizedState = null;
        }
        return b.child;
      }
      function ij(a24, b) {
        0 === (b.mode & 1) && null !== a24 && (a24.alternate = null, b.alternate = null, b.flags |= 2);
      }
      function Zi(a24, b, c5) {
        null !== a24 && (b.dependencies = a24.dependencies);
        rh |= b.lanes;
        if (0 === (c5 & b.childLanes)) return null;
        if (null !== a24 && b.child !== a24.child) throw Error(p2(153));
        if (null !== b.child) {
          a24 = b.child;
          c5 = Pg(a24, a24.pendingProps);
          b.child = c5;
          for (c5.return = b; null !== a24.sibling; ) a24 = a24.sibling, c5 = c5.sibling = Pg(a24, a24.pendingProps), c5.return = b;
          c5.sibling = null;
        }
        return b.child;
      }
      function yj(a24, b, c5) {
        switch (b.tag) {
          case 3:
            kj(b);
            Ig();
            break;
          case 5:
            Ah(b);
            break;
          case 1:
            Zf(b.type) && cg(b);
            break;
          case 4:
            yh(b, b.stateNode.containerInfo);
            break;
          case 10:
            var d = b.type._context, e43 = b.memoizedProps.value;
            G(Wg, d._currentValue);
            d._currentValue = e43;
            break;
          case 13:
            d = b.memoizedState;
            if (null !== d) {
              if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
              if (0 !== (c5 & b.child.childLanes)) return oj(a24, b, c5);
              G(L, L.current & 1);
              a24 = Zi(a24, b, c5);
              return null !== a24 ? a24.sibling : null;
            }
            G(L, L.current & 1);
            break;
          case 19:
            d = 0 !== (c5 & b.childLanes);
            if (0 !== (a24.flags & 128)) {
              if (d) return xj(a24, b, c5);
              b.flags |= 128;
            }
            e43 = b.memoizedState;
            null !== e43 && (e43.rendering = null, e43.tail = null, e43.lastEffect = null);
            G(L, L.current);
            if (d) break;
            else return null;
          case 22:
          case 23:
            return b.lanes = 0, dj(a24, b, c5);
        }
        return Zi(a24, b, c5);
      }
      var zj;
      var Aj;
      var Bj;
      var Cj;
      zj = function(a24, b) {
        for (var c5 = b.child; null !== c5; ) {
          if (5 === c5.tag || 6 === c5.tag) a24.appendChild(c5.stateNode);
          else if (4 !== c5.tag && null !== c5.child) {
            c5.child.return = c5;
            c5 = c5.child;
            continue;
          }
          if (c5 === b) break;
          for (; null === c5.sibling; ) {
            if (null === c5.return || c5.return === b) return;
            c5 = c5.return;
          }
          c5.sibling.return = c5.return;
          c5 = c5.sibling;
        }
      };
      Aj = function() {
      };
      Bj = function(a24, b, c5, d) {
        var e43 = a24.memoizedProps;
        if (e43 !== d) {
          a24 = b.stateNode;
          xh(uh.current);
          var f2 = null;
          switch (c5) {
            case "input":
              e43 = Ya(a24, e43);
              d = Ya(a24, d);
              f2 = [];
              break;
            case "select":
              e43 = A({}, e43, { value: void 0 });
              d = A({}, d, { value: void 0 });
              f2 = [];
              break;
            case "textarea":
              e43 = gb(a24, e43);
              d = gb(a24, d);
              f2 = [];
              break;
            default:
              "function" !== typeof e43.onClick && "function" === typeof d.onClick && (a24.onclick = Bf);
          }
          ub(c5, d);
          var g;
          c5 = null;
          for (l in e43) if (!d.hasOwnProperty(l) && e43.hasOwnProperty(l) && null != e43[l]) if ("style" === l) {
            var h = e43[l];
            for (g in h) h.hasOwnProperty(g) && (c5 || (c5 = {}), c5[g] = "");
          } else "dangerouslySetInnerHTML" !== l && "children" !== l && "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && "autoFocus" !== l && (ea.hasOwnProperty(l) ? f2 || (f2 = []) : (f2 = f2 || []).push(l, null));
          for (l in d) {
            var k = d[l];
            h = null != e43 ? e43[l] : void 0;
            if (d.hasOwnProperty(l) && k !== h && (null != k || null != h)) if ("style" === l) if (h) {
              for (g in h) !h.hasOwnProperty(g) || k && k.hasOwnProperty(g) || (c5 || (c5 = {}), c5[g] = "");
              for (g in k) k.hasOwnProperty(g) && h[g] !== k[g] && (c5 || (c5 = {}), c5[g] = k[g]);
            } else c5 || (f2 || (f2 = []), f2.push(
              l,
              c5
            )), c5 = k;
            else "dangerouslySetInnerHTML" === l ? (k = k ? k.__html : void 0, h = h ? h.__html : void 0, null != k && h !== k && (f2 = f2 || []).push(l, k)) : "children" === l ? "string" !== typeof k && "number" !== typeof k || (f2 = f2 || []).push(l, "" + k) : "suppressContentEditableWarning" !== l && "suppressHydrationWarning" !== l && (ea.hasOwnProperty(l) ? (null != k && "onScroll" === l && D("scroll", a24), f2 || h === k || (f2 = [])) : (f2 = f2 || []).push(l, k));
          }
          c5 && (f2 = f2 || []).push("style", c5);
          var l = f2;
          if (b.updateQueue = l) b.flags |= 4;
        }
      };
      Cj = function(a24, b, c5, d) {
        c5 !== d && (b.flags |= 4);
      };
      function Dj(a24, b) {
        if (!I2) switch (a24.tailMode) {
          case "hidden":
            b = a24.tail;
            for (var c5 = null; null !== b; ) null !== b.alternate && (c5 = b), b = b.sibling;
            null === c5 ? a24.tail = null : c5.sibling = null;
            break;
          case "collapsed":
            c5 = a24.tail;
            for (var d = null; null !== c5; ) null !== c5.alternate && (d = c5), c5 = c5.sibling;
            null === d ? b || null === a24.tail ? a24.tail = null : a24.tail.sibling = null : d.sibling = null;
        }
      }
      function S(a24) {
        var b = null !== a24.alternate && a24.alternate.child === a24.child, c5 = 0, d = 0;
        if (b) for (var e43 = a24.child; null !== e43; ) c5 |= e43.lanes | e43.childLanes, d |= e43.subtreeFlags & 14680064, d |= e43.flags & 14680064, e43.return = a24, e43 = e43.sibling;
        else for (e43 = a24.child; null !== e43; ) c5 |= e43.lanes | e43.childLanes, d |= e43.subtreeFlags, d |= e43.flags, e43.return = a24, e43 = e43.sibling;
        a24.subtreeFlags |= d;
        a24.childLanes = c5;
        return b;
      }
      function Ej(a24, b, c5) {
        var d = b.pendingProps;
        wg(b);
        switch (b.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return S(b), null;
          case 1:
            return Zf(b.type) && $f(), S(b), null;
          case 3:
            d = b.stateNode;
            zh();
            E(Wf);
            E(H);
            Eh();
            d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
            if (null === a24 || null === a24.child) Gg(b) ? b.flags |= 4 : null === a24 || a24.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
            Aj(a24, b);
            S(b);
            return null;
          case 5:
            Bh(b);
            var e43 = xh(wh.current);
            c5 = b.type;
            if (null !== a24 && null != b.stateNode) Bj(a24, b, c5, d, e43), a24.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            else {
              if (!d) {
                if (null === b.stateNode) throw Error(p2(166));
                S(b);
                return null;
              }
              a24 = xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c5 = b.type;
                var f2 = b.memoizedProps;
                d[Of] = b;
                d[Pf] = f2;
                a24 = 0 !== (b.mode & 1);
                switch (c5) {
                  case "dialog":
                    D("cancel", d);
                    D("close", d);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    D("load", d);
                    break;
                  case "video":
                  case "audio":
                    for (e43 = 0; e43 < lf.length; e43++) D(lf[e43], d);
                    break;
                  case "source":
                    D("error", d);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    D(
                      "error",
                      d
                    );
                    D("load", d);
                    break;
                  case "details":
                    D("toggle", d);
                    break;
                  case "input":
                    Za(d, f2);
                    D("invalid", d);
                    break;
                  case "select":
                    d._wrapperState = { wasMultiple: !!f2.multiple };
                    D("invalid", d);
                    break;
                  case "textarea":
                    hb(d, f2), D("invalid", d);
                }
                ub(c5, f2);
                e43 = null;
                for (var g in f2) if (f2.hasOwnProperty(g)) {
                  var h = f2[g];
                  "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a24), e43 = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                    d.textContent,
                    h,
                    a24
                  ), e43 = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
                }
                switch (c5) {
                  case "input":
                    Va(d);
                    db2(d, f2, true);
                    break;
                  case "textarea":
                    Va(d);
                    jb(d);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" === typeof f2.onClick && (d.onclick = Bf);
                }
                d = e43;
                b.updateQueue = d;
                null !== d && (b.flags |= 4);
              } else {
                g = 9 === e43.nodeType ? e43 : e43.ownerDocument;
                "http://www.w3.org/1999/xhtml" === a24 && (a24 = kb(c5));
                "http://www.w3.org/1999/xhtml" === a24 ? "script" === c5 ? (a24 = g.createElement("div"), a24.innerHTML = "<script><\/script>", a24 = a24.removeChild(a24.firstChild)) : "string" === typeof d.is ? a24 = g.createElement(c5, { is: d.is }) : (a24 = g.createElement(c5), "select" === c5 && (g = a24, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a24 = g.createElementNS(a24, c5);
                a24[Of] = b;
                a24[Pf] = d;
                zj(a24, b, false, false);
                b.stateNode = a24;
                a: {
                  g = vb(c5, d);
                  switch (c5) {
                    case "dialog":
                      D("cancel", a24);
                      D("close", a24);
                      e43 = d;
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      D("load", a24);
                      e43 = d;
                      break;
                    case "video":
                    case "audio":
                      for (e43 = 0; e43 < lf.length; e43++) D(lf[e43], a24);
                      e43 = d;
                      break;
                    case "source":
                      D("error", a24);
                      e43 = d;
                      break;
                    case "img":
                    case "image":
                    case "link":
                      D(
                        "error",
                        a24
                      );
                      D("load", a24);
                      e43 = d;
                      break;
                    case "details":
                      D("toggle", a24);
                      e43 = d;
                      break;
                    case "input":
                      Za(a24, d);
                      e43 = Ya(a24, d);
                      D("invalid", a24);
                      break;
                    case "option":
                      e43 = d;
                      break;
                    case "select":
                      a24._wrapperState = { wasMultiple: !!d.multiple };
                      e43 = A({}, d, { value: void 0 });
                      D("invalid", a24);
                      break;
                    case "textarea":
                      hb(a24, d);
                      e43 = gb(a24, d);
                      D("invalid", a24);
                      break;
                    default:
                      e43 = d;
                  }
                  ub(c5, e43);
                  h = e43;
                  for (f2 in h) if (h.hasOwnProperty(f2)) {
                    var k = h[f2];
                    "style" === f2 ? sb(a24, k) : "dangerouslySetInnerHTML" === f2 ? (k = k ? k.__html : void 0, null != k && nb(a24, k)) : "children" === f2 ? "string" === typeof k ? ("textarea" !== c5 || "" !== k) && ob(a24, k) : "number" === typeof k && ob(a24, "" + k) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k && "onScroll" === f2 && D("scroll", a24) : null != k && ta(a24, f2, k, g));
                  }
                  switch (c5) {
                    case "input":
                      Va(a24);
                      db2(a24, d, false);
                      break;
                    case "textarea":
                      Va(a24);
                      jb(a24);
                      break;
                    case "option":
                      null != d.value && a24.setAttribute("value", "" + Sa(d.value));
                      break;
                    case "select":
                      a24.multiple = !!d.multiple;
                      f2 = d.value;
                      null != f2 ? fb(a24, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                        a24,
                        !!d.multiple,
                        d.defaultValue,
                        true
                      );
                      break;
                    default:
                      "function" === typeof e43.onClick && (a24.onclick = Bf);
                  }
                  switch (c5) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      d = !!d.autoFocus;
                      break a;
                    case "img":
                      d = true;
                      break a;
                    default:
                      d = false;
                  }
                }
                d && (b.flags |= 4);
              }
              null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
            }
            S(b);
            return null;
          case 6:
            if (a24 && null != b.stateNode) Cj(a24, b, a24.memoizedProps, d);
            else {
              if ("string" !== typeof d && null === b.stateNode) throw Error(p2(166));
              c5 = xh(wh.current);
              xh(uh.current);
              if (Gg(b)) {
                d = b.stateNode;
                c5 = b.memoizedProps;
                d[Of] = b;
                if (f2 = d.nodeValue !== c5) {
                  if (a24 = xg, null !== a24) switch (a24.tag) {
                    case 3:
                      Af(d.nodeValue, c5, 0 !== (a24.mode & 1));
                      break;
                    case 5:
                      true !== a24.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c5, 0 !== (a24.mode & 1));
                  }
                }
                f2 && (b.flags |= 4);
              } else d = (9 === c5.nodeType ? c5 : c5.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
            }
            S(b);
            return null;
          case 13:
            E(L);
            d = b.memoizedState;
            if (null === a24 || null !== a24.memoizedState && null !== a24.memoizedState.dehydrated) {
              if (I2 && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
              else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
                if (null === a24) {
                  if (!f2) throw Error(p2(318));
                  f2 = b.memoizedState;
                  f2 = null !== f2 ? f2.dehydrated : null;
                  if (!f2) throw Error(p2(317));
                  f2[Of] = b;
                } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
                S(b);
                f2 = false;
              } else null !== zg && (Fj(zg), zg = null), f2 = true;
              if (!f2) return b.flags & 65536 ? b : null;
            }
            if (0 !== (b.flags & 128)) return b.lanes = c5, b;
            d = null !== d;
            d !== (null !== a24 && null !== a24.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a24 || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
            null !== b.updateQueue && (b.flags |= 4);
            S(b);
            return null;
          case 4:
            return zh(), Aj(a24, b), null === a24 && sf(b.stateNode.containerInfo), S(b), null;
          case 10:
            return ah(b.type._context), S(b), null;
          case 17:
            return Zf(b.type) && $f(), S(b), null;
          case 19:
            E(L);
            f2 = b.memoizedState;
            if (null === f2) return S(b), null;
            d = 0 !== (b.flags & 128);
            g = f2.rendering;
            if (null === g) if (d) Dj(f2, false);
            else {
              if (0 !== T || null !== a24 && 0 !== (a24.flags & 128)) for (a24 = b.child; null !== a24; ) {
                g = Ch(a24);
                if (null !== g) {
                  b.flags |= 128;
                  Dj(f2, false);
                  d = g.updateQueue;
                  null !== d && (b.updateQueue = d, b.flags |= 4);
                  b.subtreeFlags = 0;
                  d = c5;
                  for (c5 = b.child; null !== c5; ) f2 = c5, a24 = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a24, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a24 = g.dependencies, f2.dependencies = null === a24 ? null : { lanes: a24.lanes, firstContext: a24.firstContext }), c5 = c5.sibling;
                  G(L, L.current & 1 | 2);
                  return b.child;
                }
                a24 = a24.sibling;
              }
              null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
            }
            else {
              if (!d) if (a24 = Ch(g), null !== a24) {
                if (b.flags |= 128, d = true, c5 = a24.updateQueue, null !== c5 && (b.updateQueue = c5, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I2) return S(b), null;
              } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c5 && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
              f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c5 = f2.last, null !== c5 ? c5.sibling = g : b.child = g, f2.last = g);
            }
            if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c5 = L.current, G(L, d ? c5 & 1 | 2 : c5 & 1), b;
            S(b);
            return null;
          case 22:
          case 23:
            return Hj(), d = null !== b.memoizedState, null !== a24 && null !== a24.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
          case 24:
            return null;
          case 25:
            return null;
        }
        throw Error(p2(156, b.tag));
      }
      function Ij(a24, b) {
        wg(b);
        switch (b.tag) {
          case 1:
            return Zf(b.type) && $f(), a24 = b.flags, a24 & 65536 ? (b.flags = a24 & -65537 | 128, b) : null;
          case 3:
            return zh(), E(Wf), E(H), Eh(), a24 = b.flags, 0 !== (a24 & 65536) && 0 === (a24 & 128) ? (b.flags = a24 & -65537 | 128, b) : null;
          case 5:
            return Bh(b), null;
          case 13:
            E(L);
            a24 = b.memoizedState;
            if (null !== a24 && null !== a24.dehydrated) {
              if (null === b.alternate) throw Error(p2(340));
              Ig();
            }
            a24 = b.flags;
            return a24 & 65536 ? (b.flags = a24 & -65537 | 128, b) : null;
          case 19:
            return E(L), null;
          case 4:
            return zh(), null;
          case 10:
            return ah(b.type._context), null;
          case 22:
          case 23:
            return Hj(), null;
          case 24:
            return null;
          default:
            return null;
        }
      }
      var Jj = false;
      var U = false;
      var Kj = "function" === typeof WeakSet ? WeakSet : Set;
      var V = null;
      function Lj(a24, b) {
        var c5 = a24.ref;
        if (null !== c5) if ("function" === typeof c5) try {
          c5(null);
        } catch (d) {
          W(a24, b, d);
        }
        else c5.current = null;
      }
      function Mj(a24, b, c5) {
        try {
          c5();
        } catch (d) {
          W(a24, b, d);
        }
      }
      var Nj = false;
      function Oj(a24, b) {
        Cf = dd;
        a24 = Me();
        if (Ne(a24)) {
          if ("selectionStart" in a24) var c5 = { start: a24.selectionStart, end: a24.selectionEnd };
          else a: {
            c5 = (c5 = a24.ownerDocument) && c5.defaultView || window;
            var d = c5.getSelection && c5.getSelection();
            if (d && 0 !== d.rangeCount) {
              c5 = d.anchorNode;
              var e43 = d.anchorOffset, f2 = d.focusNode;
              d = d.focusOffset;
              try {
                c5.nodeType, f2.nodeType;
              } catch (F) {
                c5 = null;
                break a;
              }
              var g = 0, h = -1, k = -1, l = 0, m2 = 0, q = a24, r3 = null;
              b: for (; ; ) {
                for (var y; ; ) {
                  q !== c5 || 0 !== e43 && 3 !== q.nodeType || (h = g + e43);
                  q !== f2 || 0 !== d && 3 !== q.nodeType || (k = g + d);
                  3 === q.nodeType && (g += q.nodeValue.length);
                  if (null === (y = q.firstChild)) break;
                  r3 = q;
                  q = y;
                }
                for (; ; ) {
                  if (q === a24) break b;
                  r3 === c5 && ++l === e43 && (h = g);
                  r3 === f2 && ++m2 === d && (k = g);
                  if (null !== (y = q.nextSibling)) break;
                  q = r3;
                  r3 = q.parentNode;
                }
                q = y;
              }
              c5 = -1 === h || -1 === k ? null : { start: h, end: k };
            } else c5 = null;
          }
          c5 = c5 || { start: 0, end: 0 };
        } else c5 = null;
        Df = { focusedElem: a24, selectionRange: c5 };
        dd = false;
        for (V = b; null !== V; ) if (b = V, a24 = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a24) a24.return = b, V = a24;
        else for (; null !== V; ) {
          b = V;
          try {
            var n6 = b.alternate;
            if (0 !== (b.flags & 1024)) switch (b.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n6) {
                  var t7 = n6.memoizedProps, J = n6.memoizedState, x = b.stateNode, w = x.getSnapshotBeforeUpdate(b.elementType === b.type ? t7 : Ci(b.type, t7), J);
                  x.__reactInternalSnapshotBeforeUpdate = w;
                }
                break;
              case 3:
                var u = b.stateNode.containerInfo;
                1 === u.nodeType ? u.textContent = "" : 9 === u.nodeType && u.documentElement && u.removeChild(u.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p2(163));
            }
          } catch (F) {
            W(b, b.return, F);
          }
          a24 = b.sibling;
          if (null !== a24) {
            a24.return = b.return;
            V = a24;
            break;
          }
          V = b.return;
        }
        n6 = Nj;
        Nj = false;
        return n6;
      }
      function Pj(a24, b, c5) {
        var d = b.updateQueue;
        d = null !== d ? d.lastEffect : null;
        if (null !== d) {
          var e43 = d = d.next;
          do {
            if ((e43.tag & a24) === a24) {
              var f2 = e43.destroy;
              e43.destroy = void 0;
              void 0 !== f2 && Mj(b, c5, f2);
            }
            e43 = e43.next;
          } while (e43 !== d);
        }
      }
      function Qj(a24, b) {
        b = b.updateQueue;
        b = null !== b ? b.lastEffect : null;
        if (null !== b) {
          var c5 = b = b.next;
          do {
            if ((c5.tag & a24) === a24) {
              var d = c5.create;
              c5.destroy = d();
            }
            c5 = c5.next;
          } while (c5 !== b);
        }
      }
      function Rj(a24) {
        var b = a24.ref;
        if (null !== b) {
          var c5 = a24.stateNode;
          switch (a24.tag) {
            case 5:
              a24 = c5;
              break;
            default:
              a24 = c5;
          }
          "function" === typeof b ? b(a24) : b.current = a24;
        }
      }
      function Sj(a24) {
        var b = a24.alternate;
        null !== b && (a24.alternate = null, Sj(b));
        a24.child = null;
        a24.deletions = null;
        a24.sibling = null;
        5 === a24.tag && (b = a24.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
        a24.stateNode = null;
        a24.return = null;
        a24.dependencies = null;
        a24.memoizedProps = null;
        a24.memoizedState = null;
        a24.pendingProps = null;
        a24.stateNode = null;
        a24.updateQueue = null;
      }
      function Tj(a24) {
        return 5 === a24.tag || 3 === a24.tag || 4 === a24.tag;
      }
      function Uj(a24) {
        a: for (; ; ) {
          for (; null === a24.sibling; ) {
            if (null === a24.return || Tj(a24.return)) return null;
            a24 = a24.return;
          }
          a24.sibling.return = a24.return;
          for (a24 = a24.sibling; 5 !== a24.tag && 6 !== a24.tag && 18 !== a24.tag; ) {
            if (a24.flags & 2) continue a;
            if (null === a24.child || 4 === a24.tag) continue a;
            else a24.child.return = a24, a24 = a24.child;
          }
          if (!(a24.flags & 2)) return a24.stateNode;
        }
      }
      function Vj(a24, b, c5) {
        var d = a24.tag;
        if (5 === d || 6 === d) a24 = a24.stateNode, b ? 8 === c5.nodeType ? c5.parentNode.insertBefore(a24, b) : c5.insertBefore(a24, b) : (8 === c5.nodeType ? (b = c5.parentNode, b.insertBefore(a24, c5)) : (b = c5, b.appendChild(a24)), c5 = c5._reactRootContainer, null !== c5 && void 0 !== c5 || null !== b.onclick || (b.onclick = Bf));
        else if (4 !== d && (a24 = a24.child, null !== a24)) for (Vj(a24, b, c5), a24 = a24.sibling; null !== a24; ) Vj(a24, b, c5), a24 = a24.sibling;
      }
      function Wj(a24, b, c5) {
        var d = a24.tag;
        if (5 === d || 6 === d) a24 = a24.stateNode, b ? c5.insertBefore(a24, b) : c5.appendChild(a24);
        else if (4 !== d && (a24 = a24.child, null !== a24)) for (Wj(a24, b, c5), a24 = a24.sibling; null !== a24; ) Wj(a24, b, c5), a24 = a24.sibling;
      }
      var X = null;
      var Xj = false;
      function Yj(a24, b, c5) {
        for (c5 = c5.child; null !== c5; ) Zj(a24, b, c5), c5 = c5.sibling;
      }
      function Zj(a24, b, c5) {
        if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
          lc.onCommitFiberUnmount(kc, c5);
        } catch (h) {
        }
        switch (c5.tag) {
          case 5:
            U || Lj(c5, b);
          case 6:
            var d = X, e43 = Xj;
            X = null;
            Yj(a24, b, c5);
            X = d;
            Xj = e43;
            null !== X && (Xj ? (a24 = X, c5 = c5.stateNode, 8 === a24.nodeType ? a24.parentNode.removeChild(c5) : a24.removeChild(c5)) : X.removeChild(c5.stateNode));
            break;
          case 18:
            null !== X && (Xj ? (a24 = X, c5 = c5.stateNode, 8 === a24.nodeType ? Kf(a24.parentNode, c5) : 1 === a24.nodeType && Kf(a24, c5), bd(a24)) : Kf(X, c5.stateNode));
            break;
          case 4:
            d = X;
            e43 = Xj;
            X = c5.stateNode.containerInfo;
            Xj = true;
            Yj(a24, b, c5);
            X = d;
            Xj = e43;
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (!U && (d = c5.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
              e43 = d = d.next;
              do {
                var f2 = e43, g = f2.destroy;
                f2 = f2.tag;
                void 0 !== g && (0 !== (f2 & 2) ? Mj(c5, b, g) : 0 !== (f2 & 4) && Mj(c5, b, g));
                e43 = e43.next;
              } while (e43 !== d);
            }
            Yj(a24, b, c5);
            break;
          case 1:
            if (!U && (Lj(c5, b), d = c5.stateNode, "function" === typeof d.componentWillUnmount)) try {
              d.props = c5.memoizedProps, d.state = c5.memoizedState, d.componentWillUnmount();
            } catch (h) {
              W(c5, b, h);
            }
            Yj(a24, b, c5);
            break;
          case 21:
            Yj(a24, b, c5);
            break;
          case 22:
            c5.mode & 1 ? (U = (d = U) || null !== c5.memoizedState, Yj(a24, b, c5), U = d) : Yj(a24, b, c5);
            break;
          default:
            Yj(a24, b, c5);
        }
      }
      function ak(a24) {
        var b = a24.updateQueue;
        if (null !== b) {
          a24.updateQueue = null;
          var c5 = a24.stateNode;
          null === c5 && (c5 = a24.stateNode = new Kj());
          b.forEach(function(b2) {
            var d = bk.bind(null, a24, b2);
            c5.has(b2) || (c5.add(b2), b2.then(d, d));
          });
        }
      }
      function ck(a24, b) {
        var c5 = b.deletions;
        if (null !== c5) for (var d = 0; d < c5.length; d++) {
          var e43 = c5[d];
          try {
            var f2 = a24, g = b, h = g;
            a: for (; null !== h; ) {
              switch (h.tag) {
                case 5:
                  X = h.stateNode;
                  Xj = false;
                  break a;
                case 3:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
                case 4:
                  X = h.stateNode.containerInfo;
                  Xj = true;
                  break a;
              }
              h = h.return;
            }
            if (null === X) throw Error(p2(160));
            Zj(f2, g, e43);
            X = null;
            Xj = false;
            var k = e43.alternate;
            null !== k && (k.return = null);
            e43.return = null;
          } catch (l) {
            W(e43, b, l);
          }
        }
        if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a24), b = b.sibling;
      }
      function dk(a24, b) {
        var c5 = a24.alternate, d = a24.flags;
        switch (a24.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            ck(b, a24);
            ek(a24);
            if (d & 4) {
              try {
                Pj(3, a24, a24.return), Qj(3, a24);
              } catch (t7) {
                W(a24, a24.return, t7);
              }
              try {
                Pj(5, a24, a24.return);
              } catch (t7) {
                W(a24, a24.return, t7);
              }
            }
            break;
          case 1:
            ck(b, a24);
            ek(a24);
            d & 512 && null !== c5 && Lj(c5, c5.return);
            break;
          case 5:
            ck(b, a24);
            ek(a24);
            d & 512 && null !== c5 && Lj(c5, c5.return);
            if (a24.flags & 32) {
              var e43 = a24.stateNode;
              try {
                ob(e43, "");
              } catch (t7) {
                W(a24, a24.return, t7);
              }
            }
            if (d & 4 && (e43 = a24.stateNode, null != e43)) {
              var f2 = a24.memoizedProps, g = null !== c5 ? c5.memoizedProps : f2, h = a24.type, k = a24.updateQueue;
              a24.updateQueue = null;
              if (null !== k) try {
                "input" === h && "radio" === f2.type && null != f2.name && ab(e43, f2);
                vb(h, g);
                var l = vb(h, f2);
                for (g = 0; g < k.length; g += 2) {
                  var m2 = k[g], q = k[g + 1];
                  "style" === m2 ? sb(e43, q) : "dangerouslySetInnerHTML" === m2 ? nb(e43, q) : "children" === m2 ? ob(e43, q) : ta(e43, m2, q, l);
                }
                switch (h) {
                  case "input":
                    bb(e43, f2);
                    break;
                  case "textarea":
                    ib(e43, f2);
                    break;
                  case "select":
                    var r3 = e43._wrapperState.wasMultiple;
                    e43._wrapperState.wasMultiple = !!f2.multiple;
                    var y = f2.value;
                    null != y ? fb(e43, !!f2.multiple, y, false) : r3 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                      e43,
                      !!f2.multiple,
                      f2.defaultValue,
                      true
                    ) : fb(e43, !!f2.multiple, f2.multiple ? [] : "", false));
                }
                e43[Pf] = f2;
              } catch (t7) {
                W(a24, a24.return, t7);
              }
            }
            break;
          case 6:
            ck(b, a24);
            ek(a24);
            if (d & 4) {
              if (null === a24.stateNode) throw Error(p2(162));
              e43 = a24.stateNode;
              f2 = a24.memoizedProps;
              try {
                e43.nodeValue = f2;
              } catch (t7) {
                W(a24, a24.return, t7);
              }
            }
            break;
          case 3:
            ck(b, a24);
            ek(a24);
            if (d & 4 && null !== c5 && c5.memoizedState.isDehydrated) try {
              bd(b.containerInfo);
            } catch (t7) {
              W(a24, a24.return, t7);
            }
            break;
          case 4:
            ck(b, a24);
            ek(a24);
            break;
          case 13:
            ck(b, a24);
            ek(a24);
            e43 = a24.child;
            e43.flags & 8192 && (f2 = null !== e43.memoizedState, e43.stateNode.isHidden = f2, !f2 || null !== e43.alternate && null !== e43.alternate.memoizedState || (fk = B()));
            d & 4 && ak(a24);
            break;
          case 22:
            m2 = null !== c5 && null !== c5.memoizedState;
            a24.mode & 1 ? (U = (l = U) || m2, ck(b, a24), U = l) : ck(b, a24);
            ek(a24);
            if (d & 8192) {
              l = null !== a24.memoizedState;
              if ((a24.stateNode.isHidden = l) && !m2 && 0 !== (a24.mode & 1)) for (V = a24, m2 = a24.child; null !== m2; ) {
                for (q = V = m2; null !== V; ) {
                  r3 = V;
                  y = r3.child;
                  switch (r3.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      Pj(4, r3, r3.return);
                      break;
                    case 1:
                      Lj(r3, r3.return);
                      var n6 = r3.stateNode;
                      if ("function" === typeof n6.componentWillUnmount) {
                        d = r3;
                        c5 = r3.return;
                        try {
                          b = d, n6.props = b.memoizedProps, n6.state = b.memoizedState, n6.componentWillUnmount();
                        } catch (t7) {
                          W(d, c5, t7);
                        }
                      }
                      break;
                    case 5:
                      Lj(r3, r3.return);
                      break;
                    case 22:
                      if (null !== r3.memoizedState) {
                        gk(q);
                        continue;
                      }
                  }
                  null !== y ? (y.return = r3, V = y) : gk(q);
                }
                m2 = m2.sibling;
              }
              a: for (m2 = null, q = a24; ; ) {
                if (5 === q.tag) {
                  if (null === m2) {
                    m2 = q;
                    try {
                      e43 = q.stateNode, l ? (f2 = e43.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q.stateNode, k = q.memoizedProps.style, g = void 0 !== k && null !== k && k.hasOwnProperty("display") ? k.display : null, h.style.display = rb("display", g));
                    } catch (t7) {
                      W(a24, a24.return, t7);
                    }
                  }
                } else if (6 === q.tag) {
                  if (null === m2) try {
                    q.stateNode.nodeValue = l ? "" : q.memoizedProps;
                  } catch (t7) {
                    W(a24, a24.return, t7);
                  }
                } else if ((22 !== q.tag && 23 !== q.tag || null === q.memoizedState || q === a24) && null !== q.child) {
                  q.child.return = q;
                  q = q.child;
                  continue;
                }
                if (q === a24) break a;
                for (; null === q.sibling; ) {
                  if (null === q.return || q.return === a24) break a;
                  m2 === q && (m2 = null);
                  q = q.return;
                }
                m2 === q && (m2 = null);
                q.sibling.return = q.return;
                q = q.sibling;
              }
            }
            break;
          case 19:
            ck(b, a24);
            ek(a24);
            d & 4 && ak(a24);
            break;
          case 21:
            break;
          default:
            ck(
              b,
              a24
            ), ek(a24);
        }
      }
      function ek(a24) {
        var b = a24.flags;
        if (b & 2) {
          try {
            a: {
              for (var c5 = a24.return; null !== c5; ) {
                if (Tj(c5)) {
                  var d = c5;
                  break a;
                }
                c5 = c5.return;
              }
              throw Error(p2(160));
            }
            switch (d.tag) {
              case 5:
                var e43 = d.stateNode;
                d.flags & 32 && (ob(e43, ""), d.flags &= -33);
                var f2 = Uj(a24);
                Wj(a24, f2, e43);
                break;
              case 3:
              case 4:
                var g = d.stateNode.containerInfo, h = Uj(a24);
                Vj(a24, h, g);
                break;
              default:
                throw Error(p2(161));
            }
          } catch (k) {
            W(a24, a24.return, k);
          }
          a24.flags &= -3;
        }
        b & 4096 && (a24.flags &= -4097);
      }
      function hk(a24, b, c5) {
        V = a24;
        ik(a24, b, c5);
      }
      function ik(a24, b, c5) {
        for (var d = 0 !== (a24.mode & 1); null !== V; ) {
          var e43 = V, f2 = e43.child;
          if (22 === e43.tag && d) {
            var g = null !== e43.memoizedState || Jj;
            if (!g) {
              var h = e43.alternate, k = null !== h && null !== h.memoizedState || U;
              h = Jj;
              var l = U;
              Jj = g;
              if ((U = k) && !l) for (V = e43; null !== V; ) g = V, k = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e43) : null !== k ? (k.return = g, V = k) : jk(e43);
              for (; null !== f2; ) V = f2, ik(f2, b, c5), f2 = f2.sibling;
              V = e43;
              Jj = h;
              U = l;
            }
            kk(a24, b, c5);
          } else 0 !== (e43.subtreeFlags & 8772) && null !== f2 ? (f2.return = e43, V = f2) : kk(a24, b, c5);
        }
      }
      function kk(a24) {
        for (; null !== V; ) {
          var b = V;
          if (0 !== (b.flags & 8772)) {
            var c5 = b.alternate;
            try {
              if (0 !== (b.flags & 8772)) switch (b.tag) {
                case 0:
                case 11:
                case 15:
                  U || Qj(5, b);
                  break;
                case 1:
                  var d = b.stateNode;
                  if (b.flags & 4 && !U) if (null === c5) d.componentDidMount();
                  else {
                    var e43 = b.elementType === b.type ? c5.memoizedProps : Ci(b.type, c5.memoizedProps);
                    d.componentDidUpdate(e43, c5.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                  }
                  var f2 = b.updateQueue;
                  null !== f2 && sh(b, f2, d);
                  break;
                case 3:
                  var g = b.updateQueue;
                  if (null !== g) {
                    c5 = null;
                    if (null !== b.child) switch (b.child.tag) {
                      case 5:
                        c5 = b.child.stateNode;
                        break;
                      case 1:
                        c5 = b.child.stateNode;
                    }
                    sh(b, g, c5);
                  }
                  break;
                case 5:
                  var h = b.stateNode;
                  if (null === c5 && b.flags & 4) {
                    c5 = h;
                    var k = b.memoizedProps;
                    switch (b.type) {
                      case "button":
                      case "input":
                      case "select":
                      case "textarea":
                        k.autoFocus && c5.focus();
                        break;
                      case "img":
                        k.src && (c5.src = k.src);
                    }
                  }
                  break;
                case 6:
                  break;
                case 4:
                  break;
                case 12:
                  break;
                case 13:
                  if (null === b.memoizedState) {
                    var l = b.alternate;
                    if (null !== l) {
                      var m2 = l.memoizedState;
                      if (null !== m2) {
                        var q = m2.dehydrated;
                        null !== q && bd(q);
                      }
                    }
                  }
                  break;
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break;
                default:
                  throw Error(p2(163));
              }
              U || b.flags & 512 && Rj(b);
            } catch (r3) {
              W(b, b.return, r3);
            }
          }
          if (b === a24) {
            V = null;
            break;
          }
          c5 = b.sibling;
          if (null !== c5) {
            c5.return = b.return;
            V = c5;
            break;
          }
          V = b.return;
        }
      }
      function gk(a24) {
        for (; null !== V; ) {
          var b = V;
          if (b === a24) {
            V = null;
            break;
          }
          var c5 = b.sibling;
          if (null !== c5) {
            c5.return = b.return;
            V = c5;
            break;
          }
          V = b.return;
        }
      }
      function jk(a24) {
        for (; null !== V; ) {
          var b = V;
          try {
            switch (b.tag) {
              case 0:
              case 11:
              case 15:
                var c5 = b.return;
                try {
                  Qj(4, b);
                } catch (k) {
                  W(b, c5, k);
                }
                break;
              case 1:
                var d = b.stateNode;
                if ("function" === typeof d.componentDidMount) {
                  var e43 = b.return;
                  try {
                    d.componentDidMount();
                  } catch (k) {
                    W(b, e43, k);
                  }
                }
                var f2 = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, f2, k);
                }
                break;
              case 5:
                var g = b.return;
                try {
                  Rj(b);
                } catch (k) {
                  W(b, g, k);
                }
            }
          } catch (k) {
            W(b, b.return, k);
          }
          if (b === a24) {
            V = null;
            break;
          }
          var h = b.sibling;
          if (null !== h) {
            h.return = b.return;
            V = h;
            break;
          }
          V = b.return;
        }
      }
      var lk = Math.ceil;
      var mk = ua.ReactCurrentDispatcher;
      var nk = ua.ReactCurrentOwner;
      var ok = ua.ReactCurrentBatchConfig;
      var K = 0;
      var Q = null;
      var Y = null;
      var Z = 0;
      var fj = 0;
      var ej = Uf(0);
      var T = 0;
      var pk = null;
      var rh = 0;
      var qk = 0;
      var rk = 0;
      var sk = null;
      var tk = null;
      var fk = 0;
      var Gj = Infinity;
      var uk = null;
      var Oi = false;
      var Pi = null;
      var Ri = null;
      var vk = false;
      var wk = null;
      var xk = 0;
      var yk = 0;
      var zk = null;
      var Ak = -1;
      var Bk = 0;
      function R() {
        return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
      }
      function yi(a24) {
        if (0 === (a24.mode & 1)) return 1;
        if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
        if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
        a24 = C;
        if (0 !== a24) return a24;
        a24 = window.event;
        a24 = void 0 === a24 ? 16 : jd(a24.type);
        return a24;
      }
      function gi(a24, b, c5, d) {
        if (50 < yk) throw yk = 0, zk = null, Error(p2(185));
        Ac(a24, c5, d);
        if (0 === (K & 2) || a24 !== Q) a24 === Q && (0 === (K & 2) && (qk |= c5), 4 === T && Ck(a24, Z)), Dk(a24, d), 1 === c5 && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
      }
      function Dk(a24, b) {
        var c5 = a24.callbackNode;
        wc(a24, b);
        var d = uc(a24, a24 === Q ? Z : 0);
        if (0 === d) null !== c5 && bc(c5), a24.callbackNode = null, a24.callbackPriority = 0;
        else if (b = d & -d, a24.callbackPriority !== b) {
          null != c5 && bc(c5);
          if (1 === b) 0 === a24.tag ? ig(Ek.bind(null, a24)) : hg(Ek.bind(null, a24)), Jf(function() {
            0 === (K & 6) && jg();
          }), c5 = null;
          else {
            switch (Dc(d)) {
              case 1:
                c5 = fc;
                break;
              case 4:
                c5 = gc;
                break;
              case 16:
                c5 = hc;
                break;
              case 536870912:
                c5 = jc;
                break;
              default:
                c5 = hc;
            }
            c5 = Fk(c5, Gk.bind(null, a24));
          }
          a24.callbackPriority = b;
          a24.callbackNode = c5;
        }
      }
      function Gk(a24, b) {
        Ak = -1;
        Bk = 0;
        if (0 !== (K & 6)) throw Error(p2(327));
        var c5 = a24.callbackNode;
        if (Hk() && a24.callbackNode !== c5) return null;
        var d = uc(a24, a24 === Q ? Z : 0);
        if (0 === d) return null;
        if (0 !== (d & 30) || 0 !== (d & a24.expiredLanes) || b) b = Ik(a24, d);
        else {
          b = d;
          var e43 = K;
          K |= 2;
          var f2 = Jk();
          if (Q !== a24 || Z !== b) uk = null, Gj = B() + 500, Kk(a24, b);
          do
            try {
              Lk();
              break;
            } catch (h) {
              Mk(a24, h);
            }
          while (1);
          $g();
          mk.current = f2;
          K = e43;
          null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
        }
        if (0 !== b) {
          2 === b && (e43 = xc(a24), 0 !== e43 && (d = e43, b = Nk(a24, e43)));
          if (1 === b) throw c5 = pk, Kk(a24, 0), Ck(a24, d), Dk(a24, B()), c5;
          if (6 === b) Ck(a24, d);
          else {
            e43 = a24.current.alternate;
            if (0 === (d & 30) && !Ok(e43) && (b = Ik(a24, d), 2 === b && (f2 = xc(a24), 0 !== f2 && (d = f2, b = Nk(a24, f2))), 1 === b)) throw c5 = pk, Kk(a24, 0), Ck(a24, d), Dk(a24, B()), c5;
            a24.finishedWork = e43;
            a24.finishedLanes = d;
            switch (b) {
              case 0:
              case 1:
                throw Error(p2(345));
              case 2:
                Pk(a24, tk, uk);
                break;
              case 3:
                Ck(a24, d);
                if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
                  if (0 !== uc(a24, 0)) break;
                  e43 = a24.suspendedLanes;
                  if ((e43 & d) !== d) {
                    R();
                    a24.pingedLanes |= a24.suspendedLanes & e43;
                    break;
                  }
                  a24.timeoutHandle = Ff(Pk.bind(null, a24, tk, uk), b);
                  break;
                }
                Pk(a24, tk, uk);
                break;
              case 4:
                Ck(a24, d);
                if ((d & 4194240) === d) break;
                b = a24.eventTimes;
                for (e43 = -1; 0 < d; ) {
                  var g = 31 - oc(d);
                  f2 = 1 << g;
                  g = b[g];
                  g > e43 && (e43 = g);
                  d &= ~f2;
                }
                d = e43;
                d = B() - d;
                d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
                if (10 < d) {
                  a24.timeoutHandle = Ff(Pk.bind(null, a24, tk, uk), d);
                  break;
                }
                Pk(a24, tk, uk);
                break;
              case 5:
                Pk(a24, tk, uk);
                break;
              default:
                throw Error(p2(329));
            }
          }
        }
        Dk(a24, B());
        return a24.callbackNode === c5 ? Gk.bind(null, a24) : null;
      }
      function Nk(a24, b) {
        var c5 = sk;
        a24.current.memoizedState.isDehydrated && (Kk(a24, b).flags |= 256);
        a24 = Ik(a24, b);
        2 !== a24 && (b = tk, tk = c5, null !== b && Fj(b));
        return a24;
      }
      function Fj(a24) {
        null === tk ? tk = a24 : tk.push.apply(tk, a24);
      }
      function Ok(a24) {
        for (var b = a24; ; ) {
          if (b.flags & 16384) {
            var c5 = b.updateQueue;
            if (null !== c5 && (c5 = c5.stores, null !== c5)) for (var d = 0; d < c5.length; d++) {
              var e43 = c5[d], f2 = e43.getSnapshot;
              e43 = e43.value;
              try {
                if (!He(f2(), e43)) return false;
              } catch (g) {
                return false;
              }
            }
          }
          c5 = b.child;
          if (b.subtreeFlags & 16384 && null !== c5) c5.return = b, b = c5;
          else {
            if (b === a24) break;
            for (; null === b.sibling; ) {
              if (null === b.return || b.return === a24) return true;
              b = b.return;
            }
            b.sibling.return = b.return;
            b = b.sibling;
          }
        }
        return true;
      }
      function Ck(a24, b) {
        b &= ~rk;
        b &= ~qk;
        a24.suspendedLanes |= b;
        a24.pingedLanes &= ~b;
        for (a24 = a24.expirationTimes; 0 < b; ) {
          var c5 = 31 - oc(b), d = 1 << c5;
          a24[c5] = -1;
          b &= ~d;
        }
      }
      function Ek(a24) {
        if (0 !== (K & 6)) throw Error(p2(327));
        Hk();
        var b = uc(a24, 0);
        if (0 === (b & 1)) return Dk(a24, B()), null;
        var c5 = Ik(a24, b);
        if (0 !== a24.tag && 2 === c5) {
          var d = xc(a24);
          0 !== d && (b = d, c5 = Nk(a24, d));
        }
        if (1 === c5) throw c5 = pk, Kk(a24, 0), Ck(a24, b), Dk(a24, B()), c5;
        if (6 === c5) throw Error(p2(345));
        a24.finishedWork = a24.current.alternate;
        a24.finishedLanes = b;
        Pk(a24, tk, uk);
        Dk(a24, B());
        return null;
      }
      function Qk(a24, b) {
        var c5 = K;
        K |= 1;
        try {
          return a24(b);
        } finally {
          K = c5, 0 === K && (Gj = B() + 500, fg && jg());
        }
      }
      function Rk(a24) {
        null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
        var b = K;
        K |= 1;
        var c5 = ok.transition, d = C;
        try {
          if (ok.transition = null, C = 1, a24) return a24();
        } finally {
          C = d, ok.transition = c5, K = b, 0 === (K & 6) && jg();
        }
      }
      function Hj() {
        fj = ej.current;
        E(ej);
      }
      function Kk(a24, b) {
        a24.finishedWork = null;
        a24.finishedLanes = 0;
        var c5 = a24.timeoutHandle;
        -1 !== c5 && (a24.timeoutHandle = -1, Gf(c5));
        if (null !== Y) for (c5 = Y.return; null !== c5; ) {
          var d = c5;
          wg(d);
          switch (d.tag) {
            case 1:
              d = d.type.childContextTypes;
              null !== d && void 0 !== d && $f();
              break;
            case 3:
              zh();
              E(Wf);
              E(H);
              Eh();
              break;
            case 5:
              Bh(d);
              break;
            case 4:
              zh();
              break;
            case 13:
              E(L);
              break;
            case 19:
              E(L);
              break;
            case 10:
              ah(d.type._context);
              break;
            case 22:
            case 23:
              Hj();
          }
          c5 = c5.return;
        }
        Q = a24;
        Y = a24 = Pg(a24.current, null);
        Z = fj = b;
        T = 0;
        pk = null;
        rk = qk = rh = 0;
        tk = sk = null;
        if (null !== fh) {
          for (b = 0; b < fh.length; b++) if (c5 = fh[b], d = c5.interleaved, null !== d) {
            c5.interleaved = null;
            var e43 = d.next, f2 = c5.pending;
            if (null !== f2) {
              var g = f2.next;
              f2.next = e43;
              d.next = g;
            }
            c5.pending = d;
          }
          fh = null;
        }
        return a24;
      }
      function Mk(a24, b) {
        do {
          var c5 = Y;
          try {
            $g();
            Fh.current = Rh;
            if (Ih) {
              for (var d = M.memoizedState; null !== d; ) {
                var e43 = d.queue;
                null !== e43 && (e43.pending = null);
                d = d.next;
              }
              Ih = false;
            }
            Hh = 0;
            O = N = M = null;
            Jh = false;
            Kh = 0;
            nk.current = null;
            if (null === c5 || null === c5.return) {
              T = 1;
              pk = b;
              Y = null;
              break;
            }
            a: {
              var f2 = a24, g = c5.return, h = c5, k = b;
              b = Z;
              h.flags |= 32768;
              if (null !== k && "object" === typeof k && "function" === typeof k.then) {
                var l = k, m2 = h, q = m2.tag;
                if (0 === (m2.mode & 1) && (0 === q || 11 === q || 15 === q)) {
                  var r3 = m2.alternate;
                  r3 ? (m2.updateQueue = r3.updateQueue, m2.memoizedState = r3.memoizedState, m2.lanes = r3.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
                }
                var y = Ui(g);
                if (null !== y) {
                  y.flags &= -257;
                  Vi(y, g, h, f2, b);
                  y.mode & 1 && Si(f2, l, b);
                  b = y;
                  k = l;
                  var n6 = b.updateQueue;
                  if (null === n6) {
                    var t7 = /* @__PURE__ */ new Set();
                    t7.add(k);
                    b.updateQueue = t7;
                  } else n6.add(k);
                  break a;
                } else {
                  if (0 === (b & 1)) {
                    Si(f2, l, b);
                    tj();
                    break a;
                  }
                  k = Error(p2(426));
                }
              } else if (I2 && h.mode & 1) {
                var J = Ui(g);
                if (null !== J) {
                  0 === (J.flags & 65536) && (J.flags |= 256);
                  Vi(J, g, h, f2, b);
                  Jg(Ji(k, h));
                  break a;
                }
              }
              f2 = k = Ji(k, h);
              4 !== T && (T = 2);
              null === sk ? sk = [f2] : sk.push(f2);
              f2 = g;
              do {
                switch (f2.tag) {
                  case 3:
                    f2.flags |= 65536;
                    b &= -b;
                    f2.lanes |= b;
                    var x = Ni(f2, k, b);
                    ph(f2, x);
                    break a;
                  case 1:
                    h = k;
                    var w = f2.type, u = f2.stateNode;
                    if (0 === (f2.flags & 128) && ("function" === typeof w.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === Ri || !Ri.has(u)))) {
                      f2.flags |= 65536;
                      b &= -b;
                      f2.lanes |= b;
                      var F = Qi(f2, h, b);
                      ph(f2, F);
                      break a;
                    }
                }
                f2 = f2.return;
              } while (null !== f2);
            }
            Sk(c5);
          } catch (na) {
            b = na;
            Y === c5 && null !== c5 && (Y = c5 = c5.return);
            continue;
          }
          break;
        } while (1);
      }
      function Jk() {
        var a24 = mk.current;
        mk.current = Rh;
        return null === a24 ? Rh : a24;
      }
      function tj() {
        if (0 === T || 3 === T || 2 === T) T = 4;
        null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
      }
      function Ik(a24, b) {
        var c5 = K;
        K |= 2;
        var d = Jk();
        if (Q !== a24 || Z !== b) uk = null, Kk(a24, b);
        do
          try {
            Tk();
            break;
          } catch (e43) {
            Mk(a24, e43);
          }
        while (1);
        $g();
        K = c5;
        mk.current = d;
        if (null !== Y) throw Error(p2(261));
        Q = null;
        Z = 0;
        return T;
      }
      function Tk() {
        for (; null !== Y; ) Uk(Y);
      }
      function Lk() {
        for (; null !== Y && !cc(); ) Uk(Y);
      }
      function Uk(a24) {
        var b = Vk(a24.alternate, a24, fj);
        a24.memoizedProps = a24.pendingProps;
        null === b ? Sk(a24) : Y = b;
        nk.current = null;
      }
      function Sk(a24) {
        var b = a24;
        do {
          var c5 = b.alternate;
          a24 = b.return;
          if (0 === (b.flags & 32768)) {
            if (c5 = Ej(c5, b, fj), null !== c5) {
              Y = c5;
              return;
            }
          } else {
            c5 = Ij(c5, b);
            if (null !== c5) {
              c5.flags &= 32767;
              Y = c5;
              return;
            }
            if (null !== a24) a24.flags |= 32768, a24.subtreeFlags = 0, a24.deletions = null;
            else {
              T = 6;
              Y = null;
              return;
            }
          }
          b = b.sibling;
          if (null !== b) {
            Y = b;
            return;
          }
          Y = b = a24;
        } while (null !== b);
        0 === T && (T = 5);
      }
      function Pk(a24, b, c5) {
        var d = C, e43 = ok.transition;
        try {
          ok.transition = null, C = 1, Wk(a24, b, c5, d);
        } finally {
          ok.transition = e43, C = d;
        }
        return null;
      }
      function Wk(a24, b, c5, d) {
        do
          Hk();
        while (null !== wk);
        if (0 !== (K & 6)) throw Error(p2(327));
        c5 = a24.finishedWork;
        var e43 = a24.finishedLanes;
        if (null === c5) return null;
        a24.finishedWork = null;
        a24.finishedLanes = 0;
        if (c5 === a24.current) throw Error(p2(177));
        a24.callbackNode = null;
        a24.callbackPriority = 0;
        var f2 = c5.lanes | c5.childLanes;
        Bc(a24, f2);
        a24 === Q && (Y = Q = null, Z = 0);
        0 === (c5.subtreeFlags & 2064) && 0 === (c5.flags & 2064) || vk || (vk = true, Fk(hc, function() {
          Hk();
          return null;
        }));
        f2 = 0 !== (c5.flags & 15990);
        if (0 !== (c5.subtreeFlags & 15990) || f2) {
          f2 = ok.transition;
          ok.transition = null;
          var g = C;
          C = 1;
          var h = K;
          K |= 4;
          nk.current = null;
          Oj(a24, c5);
          dk(c5, a24);
          Oe(Df);
          dd = !!Cf;
          Df = Cf = null;
          a24.current = c5;
          hk(c5, a24, e43);
          dc();
          K = h;
          C = g;
          ok.transition = f2;
        } else a24.current = c5;
        vk && (vk = false, wk = a24, xk = e43);
        f2 = a24.pendingLanes;
        0 === f2 && (Ri = null);
        mc(c5.stateNode, d);
        Dk(a24, B());
        if (null !== b) for (d = a24.onRecoverableError, c5 = 0; c5 < b.length; c5++) e43 = b[c5], d(e43.value, { componentStack: e43.stack, digest: e43.digest });
        if (Oi) throw Oi = false, a24 = Pi, Pi = null, a24;
        0 !== (xk & 1) && 0 !== a24.tag && Hk();
        f2 = a24.pendingLanes;
        0 !== (f2 & 1) ? a24 === zk ? yk++ : (yk = 0, zk = a24) : yk = 0;
        jg();
        return null;
      }
      function Hk() {
        if (null !== wk) {
          var a24 = Dc(xk), b = ok.transition, c5 = C;
          try {
            ok.transition = null;
            C = 16 > a24 ? 16 : a24;
            if (null === wk) var d = false;
            else {
              a24 = wk;
              wk = null;
              xk = 0;
              if (0 !== (K & 6)) throw Error(p2(331));
              var e43 = K;
              K |= 4;
              for (V = a24.current; null !== V; ) {
                var f2 = V, g = f2.child;
                if (0 !== (V.flags & 16)) {
                  var h = f2.deletions;
                  if (null !== h) {
                    for (var k = 0; k < h.length; k++) {
                      var l = h[k];
                      for (V = l; null !== V; ) {
                        var m2 = V;
                        switch (m2.tag) {
                          case 0:
                          case 11:
                          case 15:
                            Pj(8, m2, f2);
                        }
                        var q = m2.child;
                        if (null !== q) q.return = m2, V = q;
                        else for (; null !== V; ) {
                          m2 = V;
                          var r3 = m2.sibling, y = m2.return;
                          Sj(m2);
                          if (m2 === l) {
                            V = null;
                            break;
                          }
                          if (null !== r3) {
                            r3.return = y;
                            V = r3;
                            break;
                          }
                          V = y;
                        }
                      }
                    }
                    var n6 = f2.alternate;
                    if (null !== n6) {
                      var t7 = n6.child;
                      if (null !== t7) {
                        n6.child = null;
                        do {
                          var J = t7.sibling;
                          t7.sibling = null;
                          t7 = J;
                        } while (null !== t7);
                      }
                    }
                    V = f2;
                  }
                }
                if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
                else b: for (; null !== V; ) {
                  f2 = V;
                  if (0 !== (f2.flags & 2048)) switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(9, f2, f2.return);
                  }
                  var x = f2.sibling;
                  if (null !== x) {
                    x.return = f2.return;
                    V = x;
                    break b;
                  }
                  V = f2.return;
                }
              }
              var w = a24.current;
              for (V = w; null !== V; ) {
                g = V;
                var u = g.child;
                if (0 !== (g.subtreeFlags & 2064) && null !== u) u.return = g, V = u;
                else b: for (g = w; null !== V; ) {
                  h = V;
                  if (0 !== (h.flags & 2048)) try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Qj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                  if (h === g) {
                    V = null;
                    break b;
                  }
                  var F = h.sibling;
                  if (null !== F) {
                    F.return = h.return;
                    V = F;
                    break b;
                  }
                  V = h.return;
                }
              }
              K = e43;
              jg();
              if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
                lc.onPostCommitFiberRoot(kc, a24);
              } catch (na) {
              }
              d = true;
            }
            return d;
          } finally {
            C = c5, ok.transition = b;
          }
        }
        return false;
      }
      function Xk(a24, b, c5) {
        b = Ji(c5, b);
        b = Ni(a24, b, 1);
        a24 = nh(a24, b, 1);
        b = R();
        null !== a24 && (Ac(a24, 1, b), Dk(a24, b));
      }
      function W(a24, b, c5) {
        if (3 === a24.tag) Xk(a24, a24, c5);
        else for (; null !== b; ) {
          if (3 === b.tag) {
            Xk(b, a24, c5);
            break;
          } else if (1 === b.tag) {
            var d = b.stateNode;
            if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
              a24 = Ji(c5, a24);
              a24 = Qi(b, a24, 1);
              b = nh(b, a24, 1);
              a24 = R();
              null !== b && (Ac(b, 1, a24), Dk(b, a24));
              break;
            }
          }
          b = b.return;
        }
      }
      function Ti(a24, b, c5) {
        var d = a24.pingCache;
        null !== d && d.delete(b);
        b = R();
        a24.pingedLanes |= a24.suspendedLanes & c5;
        Q === a24 && (Z & c5) === c5 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a24, 0) : rk |= c5);
        Dk(a24, b);
      }
      function Yk(a24, b) {
        0 === b && (0 === (a24.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
        var c5 = R();
        a24 = ih(a24, b);
        null !== a24 && (Ac(a24, b, c5), Dk(a24, c5));
      }
      function uj(a24) {
        var b = a24.memoizedState, c5 = 0;
        null !== b && (c5 = b.retryLane);
        Yk(a24, c5);
      }
      function bk(a24, b) {
        var c5 = 0;
        switch (a24.tag) {
          case 13:
            var d = a24.stateNode;
            var e43 = a24.memoizedState;
            null !== e43 && (c5 = e43.retryLane);
            break;
          case 19:
            d = a24.stateNode;
            break;
          default:
            throw Error(p2(314));
        }
        null !== d && d.delete(b);
        Yk(a24, c5);
      }
      var Vk;
      Vk = function(a24, b, c5) {
        if (null !== a24) if (a24.memoizedProps !== b.pendingProps || Wf.current) dh = true;
        else {
          if (0 === (a24.lanes & c5) && 0 === (b.flags & 128)) return dh = false, yj(a24, b, c5);
          dh = 0 !== (a24.flags & 131072) ? true : false;
        }
        else dh = false, I2 && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
        b.lanes = 0;
        switch (b.tag) {
          case 2:
            var d = b.type;
            ij(a24, b);
            a24 = b.pendingProps;
            var e43 = Yf(b, H.current);
            ch(b, c5);
            e43 = Nh(null, b, d, a24, e43, c5);
            var f2 = Sh();
            b.flags |= 1;
            "object" === typeof e43 && null !== e43 && "function" === typeof e43.render && void 0 === e43.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e43.state && void 0 !== e43.state ? e43.state : null, kh(b), e43.updater = Ei, b.stateNode = e43, e43._reactInternals = b, Ii(b, d, a24, c5), b = jj(null, b, d, true, f2, c5)) : (b.tag = 0, I2 && f2 && vg(b), Xi(null, b, e43, c5), b = b.child);
            return b;
          case 16:
            d = b.elementType;
            a: {
              ij(a24, b);
              a24 = b.pendingProps;
              e43 = d._init;
              d = e43(d._payload);
              b.type = d;
              e43 = b.tag = Zk(d);
              a24 = Ci(d, a24);
              switch (e43) {
                case 0:
                  b = cj(null, b, d, a24, c5);
                  break a;
                case 1:
                  b = hj(null, b, d, a24, c5);
                  break a;
                case 11:
                  b = Yi(null, b, d, a24, c5);
                  break a;
                case 14:
                  b = $i(null, b, d, Ci(d.type, a24), c5);
                  break a;
              }
              throw Error(p2(
                306,
                d,
                ""
              ));
            }
            return b;
          case 0:
            return d = b.type, e43 = b.pendingProps, e43 = b.elementType === d ? e43 : Ci(d, e43), cj(a24, b, d, e43, c5);
          case 1:
            return d = b.type, e43 = b.pendingProps, e43 = b.elementType === d ? e43 : Ci(d, e43), hj(a24, b, d, e43, c5);
          case 3:
            a: {
              kj(b);
              if (null === a24) throw Error(p2(387));
              d = b.pendingProps;
              f2 = b.memoizedState;
              e43 = f2.element;
              lh(a24, b);
              qh(b, d, null, c5);
              var g = b.memoizedState;
              d = g.element;
              if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
                e43 = Ji(Error(p2(423)), b);
                b = lj(a24, b, d, c5, e43);
                break a;
              } else if (d !== e43) {
                e43 = Ji(Error(p2(424)), b);
                b = lj(a24, b, d, c5, e43);
                break a;
              } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I2 = true, zg = null, c5 = Vg(b, null, d, c5), b.child = c5; c5; ) c5.flags = c5.flags & -3 | 4096, c5 = c5.sibling;
              else {
                Ig();
                if (d === e43) {
                  b = Zi(a24, b, c5);
                  break a;
                }
                Xi(a24, b, d, c5);
              }
              b = b.child;
            }
            return b;
          case 5:
            return Ah(b), null === a24 && Eg(b), d = b.type, e43 = b.pendingProps, f2 = null !== a24 ? a24.memoizedProps : null, g = e43.children, Ef(d, e43) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a24, b), Xi(a24, b, g, c5), b.child;
          case 6:
            return null === a24 && Eg(b), null;
          case 13:
            return oj(a24, b, c5);
          case 4:
            return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a24 ? b.child = Ug(b, null, d, c5) : Xi(a24, b, d, c5), b.child;
          case 11:
            return d = b.type, e43 = b.pendingProps, e43 = b.elementType === d ? e43 : Ci(d, e43), Yi(a24, b, d, e43, c5);
          case 7:
            return Xi(a24, b, b.pendingProps, c5), b.child;
          case 8:
            return Xi(a24, b, b.pendingProps.children, c5), b.child;
          case 12:
            return Xi(a24, b, b.pendingProps.children, c5), b.child;
          case 10:
            a: {
              d = b.type._context;
              e43 = b.pendingProps;
              f2 = b.memoizedProps;
              g = e43.value;
              G(Wg, d._currentValue);
              d._currentValue = g;
              if (null !== f2) if (He(f2.value, g)) {
                if (f2.children === e43.children && !Wf.current) {
                  b = Zi(a24, b, c5);
                  break a;
                }
              } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
                var h = f2.dependencies;
                if (null !== h) {
                  g = f2.child;
                  for (var k = h.firstContext; null !== k; ) {
                    if (k.context === d) {
                      if (1 === f2.tag) {
                        k = mh(-1, c5 & -c5);
                        k.tag = 2;
                        var l = f2.updateQueue;
                        if (null !== l) {
                          l = l.shared;
                          var m2 = l.pending;
                          null === m2 ? k.next = k : (k.next = m2.next, m2.next = k);
                          l.pending = k;
                        }
                      }
                      f2.lanes |= c5;
                      k = f2.alternate;
                      null !== k && (k.lanes |= c5);
                      bh(
                        f2.return,
                        c5,
                        b
                      );
                      h.lanes |= c5;
                      break;
                    }
                    k = k.next;
                  }
                } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
                else if (18 === f2.tag) {
                  g = f2.return;
                  if (null === g) throw Error(p2(341));
                  g.lanes |= c5;
                  h = g.alternate;
                  null !== h && (h.lanes |= c5);
                  bh(g, c5, b);
                  g = f2.sibling;
                } else g = f2.child;
                if (null !== g) g.return = f2;
                else for (g = f2; null !== g; ) {
                  if (g === b) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
                f2 = g;
              }
              Xi(a24, b, e43.children, c5);
              b = b.child;
            }
            return b;
          case 9:
            return e43 = b.type, d = b.pendingProps.children, ch(b, c5), e43 = eh(e43), d = d(e43), b.flags |= 1, Xi(a24, b, d, c5), b.child;
          case 14:
            return d = b.type, e43 = Ci(d, b.pendingProps), e43 = Ci(d.type, e43), $i(a24, b, d, e43, c5);
          case 15:
            return bj(a24, b, b.type, b.pendingProps, c5);
          case 17:
            return d = b.type, e43 = b.pendingProps, e43 = b.elementType === d ? e43 : Ci(d, e43), ij(a24, b), b.tag = 1, Zf(d) ? (a24 = true, cg(b)) : a24 = false, ch(b, c5), Gi(b, d, e43), Ii(b, d, e43, c5), jj(null, b, d, true, a24, c5);
          case 19:
            return xj(a24, b, c5);
          case 22:
            return dj(a24, b, c5);
        }
        throw Error(p2(156, b.tag));
      };
      function Fk(a24, b) {
        return ac(a24, b);
      }
      function $k(a24, b, c5, d) {
        this.tag = a24;
        this.key = c5;
        this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
        this.index = 0;
        this.ref = null;
        this.pendingProps = b;
        this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
        this.mode = d;
        this.subtreeFlags = this.flags = 0;
        this.deletions = null;
        this.childLanes = this.lanes = 0;
        this.alternate = null;
      }
      function Bg(a24, b, c5, d) {
        return new $k(a24, b, c5, d);
      }
      function aj(a24) {
        a24 = a24.prototype;
        return !(!a24 || !a24.isReactComponent);
      }
      function Zk(a24) {
        if ("function" === typeof a24) return aj(a24) ? 1 : 0;
        if (void 0 !== a24 && null !== a24) {
          a24 = a24.$$typeof;
          if (a24 === Da) return 11;
          if (a24 === Ga) return 14;
        }
        return 2;
      }
      function Pg(a24, b) {
        var c5 = a24.alternate;
        null === c5 ? (c5 = Bg(a24.tag, b, a24.key, a24.mode), c5.elementType = a24.elementType, c5.type = a24.type, c5.stateNode = a24.stateNode, c5.alternate = a24, a24.alternate = c5) : (c5.pendingProps = b, c5.type = a24.type, c5.flags = 0, c5.subtreeFlags = 0, c5.deletions = null);
        c5.flags = a24.flags & 14680064;
        c5.childLanes = a24.childLanes;
        c5.lanes = a24.lanes;
        c5.child = a24.child;
        c5.memoizedProps = a24.memoizedProps;
        c5.memoizedState = a24.memoizedState;
        c5.updateQueue = a24.updateQueue;
        b = a24.dependencies;
        c5.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
        c5.sibling = a24.sibling;
        c5.index = a24.index;
        c5.ref = a24.ref;
        return c5;
      }
      function Rg(a24, b, c5, d, e43, f2) {
        var g = 2;
        d = a24;
        if ("function" === typeof a24) aj(a24) && (g = 1);
        else if ("string" === typeof a24) g = 5;
        else a: switch (a24) {
          case ya:
            return Tg(c5.children, e43, f2, b);
          case za:
            g = 8;
            e43 |= 8;
            break;
          case Aa:
            return a24 = Bg(12, c5, b, e43 | 2), a24.elementType = Aa, a24.lanes = f2, a24;
          case Ea:
            return a24 = Bg(13, c5, b, e43), a24.elementType = Ea, a24.lanes = f2, a24;
          case Fa:
            return a24 = Bg(19, c5, b, e43), a24.elementType = Fa, a24.lanes = f2, a24;
          case Ia:
            return pj(c5, e43, f2, b);
          default:
            if ("object" === typeof a24 && null !== a24) switch (a24.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
            throw Error(p2(130, null == a24 ? a24 : typeof a24, ""));
        }
        b = Bg(g, c5, b, e43);
        b.elementType = a24;
        b.type = d;
        b.lanes = f2;
        return b;
      }
      function Tg(a24, b, c5, d) {
        a24 = Bg(7, a24, d, b);
        a24.lanes = c5;
        return a24;
      }
      function pj(a24, b, c5, d) {
        a24 = Bg(22, a24, d, b);
        a24.elementType = Ia;
        a24.lanes = c5;
        a24.stateNode = { isHidden: false };
        return a24;
      }
      function Qg(a24, b, c5) {
        a24 = Bg(6, a24, null, b);
        a24.lanes = c5;
        return a24;
      }
      function Sg(a24, b, c5) {
        b = Bg(4, null !== a24.children ? a24.children : [], a24.key, b);
        b.lanes = c5;
        b.stateNode = { containerInfo: a24.containerInfo, pendingChildren: null, implementation: a24.implementation };
        return b;
      }
      function al(a24, b, c5, d, e43) {
        this.tag = b;
        this.containerInfo = a24;
        this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
        this.timeoutHandle = -1;
        this.callbackNode = this.pendingContext = this.context = null;
        this.callbackPriority = 0;
        this.eventTimes = zc(0);
        this.expirationTimes = zc(-1);
        this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
        this.entanglements = zc(0);
        this.identifierPrefix = d;
        this.onRecoverableError = e43;
        this.mutableSourceEagerHydrationData = null;
      }
      function bl(a24, b, c5, d, e43, f2, g, h, k) {
        a24 = new al(a24, b, c5, h, k);
        1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
        f2 = Bg(3, null, null, b);
        a24.current = f2;
        f2.stateNode = a24;
        f2.memoizedState = { element: d, isDehydrated: c5, cache: null, transitions: null, pendingSuspenseBoundaries: null };
        kh(f2);
        return a24;
      }
      function cl(a24, b, c5) {
        var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return { $$typeof: wa, key: null == d ? null : "" + d, children: a24, containerInfo: b, implementation: c5 };
      }
      function dl(a24) {
        if (!a24) return Vf;
        a24 = a24._reactInternals;
        a: {
          if (Vb(a24) !== a24 || 1 !== a24.tag) throw Error(p2(170));
          var b = a24;
          do {
            switch (b.tag) {
              case 3:
                b = b.stateNode.context;
                break a;
              case 1:
                if (Zf(b.type)) {
                  b = b.stateNode.__reactInternalMemoizedMergedChildContext;
                  break a;
                }
            }
            b = b.return;
          } while (null !== b);
          throw Error(p2(171));
        }
        if (1 === a24.tag) {
          var c5 = a24.type;
          if (Zf(c5)) return bg(a24, c5, b);
        }
        return b;
      }
      function el(a24, b, c5, d, e43, f2, g, h, k) {
        a24 = bl(c5, d, true, a24, e43, f2, g, h, k);
        a24.context = dl(null);
        c5 = a24.current;
        d = R();
        e43 = yi(c5);
        f2 = mh(d, e43);
        f2.callback = void 0 !== b && null !== b ? b : null;
        nh(c5, f2, e43);
        a24.current.lanes = e43;
        Ac(a24, e43, d);
        Dk(a24, d);
        return a24;
      }
      function fl(a24, b, c5, d) {
        var e43 = b.current, f2 = R(), g = yi(e43);
        c5 = dl(c5);
        null === b.context ? b.context = c5 : b.pendingContext = c5;
        b = mh(f2, g);
        b.payload = { element: a24 };
        d = void 0 === d ? null : d;
        null !== d && (b.callback = d);
        a24 = nh(e43, b, g);
        null !== a24 && (gi(a24, e43, g, f2), oh(a24, e43, g));
        return g;
      }
      function gl(a24) {
        a24 = a24.current;
        if (!a24.child) return null;
        switch (a24.child.tag) {
          case 5:
            return a24.child.stateNode;
          default:
            return a24.child.stateNode;
        }
      }
      function hl(a24, b) {
        a24 = a24.memoizedState;
        if (null !== a24 && null !== a24.dehydrated) {
          var c5 = a24.retryLane;
          a24.retryLane = 0 !== c5 && c5 < b ? c5 : b;
        }
      }
      function il(a24, b) {
        hl(a24, b);
        (a24 = a24.alternate) && hl(a24, b);
      }
      function jl() {
        return null;
      }
      var kl = "function" === typeof reportError ? reportError : function(a24) {
        console.error(a24);
      };
      function ll(a24) {
        this._internalRoot = a24;
      }
      ml.prototype.render = ll.prototype.render = function(a24) {
        var b = this._internalRoot;
        if (null === b) throw Error(p2(409));
        fl(a24, b, null, null);
      };
      ml.prototype.unmount = ll.prototype.unmount = function() {
        var a24 = this._internalRoot;
        if (null !== a24) {
          this._internalRoot = null;
          var b = a24.containerInfo;
          Rk(function() {
            fl(null, a24, null, null);
          });
          b[uf] = null;
        }
      };
      function ml(a24) {
        this._internalRoot = a24;
      }
      ml.prototype.unstable_scheduleHydration = function(a24) {
        if (a24) {
          var b = Hc();
          a24 = { blockedOn: null, target: a24, priority: b };
          for (var c5 = 0; c5 < Qc.length && 0 !== b && b < Qc[c5].priority; c5++) ;
          Qc.splice(c5, 0, a24);
          0 === c5 && Vc(a24);
        }
      };
      function nl(a24) {
        return !(!a24 || 1 !== a24.nodeType && 9 !== a24.nodeType && 11 !== a24.nodeType);
      }
      function ol(a24) {
        return !(!a24 || 1 !== a24.nodeType && 9 !== a24.nodeType && 11 !== a24.nodeType && (8 !== a24.nodeType || " react-mount-point-unstable " !== a24.nodeValue));
      }
      function pl() {
      }
      function ql(a24, b, c5, d, e43) {
        if (e43) {
          if ("function" === typeof d) {
            var f2 = d;
            d = function() {
              var a25 = gl(g);
              f2.call(a25);
            };
          }
          var g = el(b, d, a24, 0, null, false, false, "", pl);
          a24._reactRootContainer = g;
          a24[uf] = g.current;
          sf(8 === a24.nodeType ? a24.parentNode : a24);
          Rk();
          return g;
        }
        for (; e43 = a24.lastChild; ) a24.removeChild(e43);
        if ("function" === typeof d) {
          var h = d;
          d = function() {
            var a25 = gl(k);
            h.call(a25);
          };
        }
        var k = bl(a24, 0, false, null, null, false, false, "", pl);
        a24._reactRootContainer = k;
        a24[uf] = k.current;
        sf(8 === a24.nodeType ? a24.parentNode : a24);
        Rk(function() {
          fl(b, k, c5, d);
        });
        return k;
      }
      function rl(a24, b, c5, d, e43) {
        var f2 = c5._reactRootContainer;
        if (f2) {
          var g = f2;
          if ("function" === typeof e43) {
            var h = e43;
            e43 = function() {
              var a25 = gl(g);
              h.call(a25);
            };
          }
          fl(b, g, a24, e43);
        } else g = ql(c5, b, a24, e43, d);
        return gl(g);
      }
      Ec = function(a24) {
        switch (a24.tag) {
          case 3:
            var b = a24.stateNode;
            if (b.current.memoizedState.isDehydrated) {
              var c5 = tc(b.pendingLanes);
              0 !== c5 && (Cc(b, c5 | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
            }
            break;
          case 13:
            Rk(function() {
              var b2 = ih(a24, 1);
              if (null !== b2) {
                var c6 = R();
                gi(b2, a24, 1, c6);
              }
            }), il(a24, 1);
        }
      };
      Fc = function(a24) {
        if (13 === a24.tag) {
          var b = ih(a24, 134217728);
          if (null !== b) {
            var c5 = R();
            gi(b, a24, 134217728, c5);
          }
          il(a24, 134217728);
        }
      };
      Gc = function(a24) {
        if (13 === a24.tag) {
          var b = yi(a24), c5 = ih(a24, b);
          if (null !== c5) {
            var d = R();
            gi(c5, a24, b, d);
          }
          il(a24, b);
        }
      };
      Hc = function() {
        return C;
      };
      Ic = function(a24, b) {
        var c5 = C;
        try {
          return C = a24, b();
        } finally {
          C = c5;
        }
      };
      yb = function(a24, b, c5) {
        switch (b) {
          case "input":
            bb(a24, c5);
            b = c5.name;
            if ("radio" === c5.type && null != b) {
              for (c5 = a24; c5.parentNode; ) c5 = c5.parentNode;
              c5 = c5.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
              for (b = 0; b < c5.length; b++) {
                var d = c5[b];
                if (d !== a24 && d.form === a24.form) {
                  var e43 = Db(d);
                  if (!e43) throw Error(p2(90));
                  Wa(d);
                  bb(d, e43);
                }
              }
            }
            break;
          case "textarea":
            ib(a24, c5);
            break;
          case "select":
            b = c5.value, null != b && fb(a24, !!c5.multiple, b, false);
        }
      };
      Gb = Qk;
      Hb = Rk;
      var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] };
      var tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
      var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a24) {
        a24 = Zb(a24);
        return null === a24 ? null : a24.stateNode;
      }, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
      if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!vl.isDisabled && vl.supportsFiber) try {
          kc = vl.inject(ul), lc = vl;
        } catch (a24) {
        }
      }
      var vl;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
      exports.createPortal = function(a24, b) {
        var c5 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nl(b)) throw Error(p2(200));
        return cl(a24, b, null, c5);
      };
      exports.createRoot = function(a24, b) {
        if (!nl(a24)) throw Error(p2(299));
        var c5 = false, d = "", e43 = kl;
        null !== b && void 0 !== b && (true === b.unstable_strictMode && (c5 = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e43 = b.onRecoverableError));
        b = bl(a24, 1, false, null, null, c5, false, d, e43);
        a24[uf] = b.current;
        sf(8 === a24.nodeType ? a24.parentNode : a24);
        return new ll(b);
      };
      exports.findDOMNode = function(a24) {
        if (null == a24) return null;
        if (1 === a24.nodeType) return a24;
        var b = a24._reactInternals;
        if (void 0 === b) {
          if ("function" === typeof a24.render) throw Error(p2(188));
          a24 = Object.keys(a24).join(",");
          throw Error(p2(268, a24));
        }
        a24 = Zb(b);
        a24 = null === a24 ? null : a24.stateNode;
        return a24;
      };
      exports.flushSync = function(a24) {
        return Rk(a24);
      };
      exports.hydrate = function(a24, b, c5) {
        if (!ol(b)) throw Error(p2(200));
        return rl(null, a24, b, true, c5);
      };
      exports.hydrateRoot = function(a24, b, c5) {
        if (!nl(a24)) throw Error(p2(405));
        var d = null != c5 && c5.hydratedSources || null, e43 = false, f2 = "", g = kl;
        null !== c5 && void 0 !== c5 && (true === c5.unstable_strictMode && (e43 = true), void 0 !== c5.identifierPrefix && (f2 = c5.identifierPrefix), void 0 !== c5.onRecoverableError && (g = c5.onRecoverableError));
        b = el(b, null, a24, 1, null != c5 ? c5 : null, e43, false, f2, g);
        a24[uf] = b.current;
        sf(a24);
        if (d) for (a24 = 0; a24 < d.length; a24++) c5 = d[a24], e43 = c5._getVersion, e43 = e43(c5._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c5, e43] : b.mutableSourceEagerHydrationData.push(
          c5,
          e43
        );
        return new ml(b);
      };
      exports.render = function(a24, b, c5) {
        if (!ol(b)) throw Error(p2(200));
        return rl(null, a24, b, false, c5);
      };
      exports.unmountComponentAtNode = function(a24) {
        if (!ol(a24)) throw Error(p2(40));
        return a24._reactRootContainer ? (Rk(function() {
          rl(null, null, a24, false, function() {
            a24._reactRootContainer = null;
            a24[uf] = null;
          });
        }), true) : false;
      };
      exports.unstable_batchedUpdates = Qk;
      exports.unstable_renderSubtreeIntoContainer = function(a24, b, c5, d) {
        if (!ol(c5)) throw Error(p2(200));
        if (null == a24 || void 0 === a24._reactInternals) throw Error(p2(38));
        return rl(a24, b, c5, false, d);
      };
      exports.version = "18.3.1-next-f1338f8080-20240426";
    }
  });

  // node_modules/react-dom/index.js
  var require_react_dom = __commonJS({
    "node_modules/react-dom/index.js"(exports, module) {
      "use strict";
      function checkDCE() {
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
          return;
        }
        if (false) {
          throw new Error("^_^");
        }
        try {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
        } catch (err) {
          console.error(err);
        }
      }
      if (true) {
        checkDCE();
        module.exports = require_react_dom_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // node_modules/react-dom/client.js
  var require_client = __commonJS({
    "node_modules/react-dom/client.js"(exports) {
      "use strict";
      var m2 = require_react_dom();
      if (true) {
        exports.createRoot = m2.createRoot;
        exports.hydrateRoot = m2.hydrateRoot;
      } else {
        i = m2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        exports.createRoot = function(c5, o19) {
          i.usingClientEntryPoint = true;
          try {
            return m2.createRoot(c5, o19);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
        exports.hydrateRoot = function(c5, h, o19) {
          i.usingClientEntryPoint = true;
          try {
            return m2.hydrateRoot(c5, h, o19);
          } finally {
            i.usingClientEntryPoint = false;
          }
        };
      }
      var i;
    }
  });

  // node_modules/react/cjs/react-jsx-runtime.production.min.js
  var require_react_jsx_runtime_production_min = __commonJS({
    "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
      "use strict";
      var f2 = require_react();
      var k = Symbol.for("react.element");
      var l = Symbol.for("react.fragment");
      var m2 = Object.prototype.hasOwnProperty;
      var n6 = f2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      var p2 = { key: true, ref: true, __self: true, __source: true };
      function q(c5, a24, g) {
        var b, d = {}, e43 = null, h = null;
        void 0 !== g && (e43 = "" + g);
        void 0 !== a24.key && (e43 = "" + a24.key);
        void 0 !== a24.ref && (h = a24.ref);
        for (b in a24) m2.call(a24, b) && !p2.hasOwnProperty(b) && (d[b] = a24[b]);
        if (c5 && c5.defaultProps) for (b in a24 = c5.defaultProps, a24) void 0 === d[b] && (d[b] = a24[b]);
        return { $$typeof: k, type: c5, key: e43, ref: h, props: d, _owner: n6.current };
      }
      exports.Fragment = l;
      exports.jsx = q;
      exports.jsxs = q;
    }
  });

  // node_modules/react/jsx-runtime.js
  var require_jsx_runtime = __commonJS({
    "node_modules/react/jsx-runtime.js"(exports, module) {
      "use strict";
      if (true) {
        module.exports = require_react_jsx_runtime_production_min();
      } else {
        module.exports = null;
      }
    }
  });

  // main.jsx
  var import_react4 = __toESM(require_react());
  var import_client = __toESM(require_client());

  // brandboard.jsx
  var import_react2 = __toESM(require_react());

  // node_modules/@phosphor-icons/react/dist/defs/ArrowLeft.es.js
  var e = __toESM(require_react(), 1);
  var a = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M112,56V200L40,128Z", opacity: "0.2" }), /* @__PURE__ */ e.createElement("path", { d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e.createElement(e.Fragment, null, /* @__PURE__ */ e.createElement("path", { d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/Bell.es.js
  var a2 = __toESM(require_react(), 1);
  var e2 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ a2.createElement(a2.Fragment, null, /* @__PURE__ */ a2.createElement("path", { d: "M225.29,165.93C216.61,151,212,129.57,212,104a84,84,0,0,0-168,0c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.66,186,19.77,19.77,0,0,0,48,196H84.18a44,44,0,0,0,87.64,0H208a19.77,19.77,0,0,0,17.31-10A20.08,20.08,0,0,0,225.29,165.93ZM128,212a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM54.66,172C63.51,154,68,131.14,68,104a60,60,0,0,1,120,0c0,27.13,4.48,50,13.33,68Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ a2.createElement(a2.Fragment, null, /* @__PURE__ */ a2.createElement(
        "path",
        {
          d: "M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ a2.createElement("path", { d: "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ a2.createElement(a2.Fragment, null, /* @__PURE__ */ a2.createElement("path", { d: "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ a2.createElement(a2.Fragment, null, /* @__PURE__ */ a2.createElement("path", { d: "M220.07,176.94C214.41,167.2,206,139.73,206,104a78,78,0,1,0-156,0c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198H90.48a38,38,0,0,0,75,0H208a14,14,0,0,0,12.06-21.06ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218Zm81.71-33a1.9,1.9,0,0,1-1.7,1H48a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.87,170,62,139.69,62,104a66,66,0,1,1,132,0c0,35.68,8.14,65.95,15.71,79A2,2,0,0,1,209.71,185Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ a2.createElement(a2.Fragment, null, /* @__PURE__ */ a2.createElement("path", { d: "M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ a2.createElement(a2.Fragment, null, /* @__PURE__ */ a2.createElement("path", { d: "M218.35,178C212.58,168,204,140.13,204,104a76,76,0,1,0-152,0c0,36.13-8.59,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0H208A12,12,0,0,0,218.35,178ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220Zm83.45-34a3.91,3.91,0,0,1-3.44,2H48a3.91,3.91,0,0,1-3.44-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a68,68,0,1,1,136,0c0,35.31,8,65.17,15.44,78A4,4,0,0,1,211.45,186Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/BellSlash.es.js
  var a3 = __toESM(require_react(), 1);
  var e3 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ a3.createElement(a3.Fragment, null, /* @__PURE__ */ a3.createElement("path", { d: "M216.88,207.93l-160-176A12,12,0,1,0,39.12,48.07l14.8,16.29A83.58,83.58,0,0,0,44,104c0,25.58-4.59,47-13.27,61.93A20.08,20.08,0,0,0,30.68,186,19.75,19.75,0,0,0,48,196H84.19a44,44,0,0,0,87.62,0h1.79l25.52,28.07a12,12,0,0,0,17.76-16.14ZM68,104a59.84,59.84,0,0,1,3.52-20.29L151.78,172H54.68C63.52,154,68,131.14,68,104Zm60,108a20,20,0,0,1-19.6-16h39.2A20,20,0,0,1,128,212ZM88.89,42.35a12,12,0,0,1,6.37-15.73A84,84,0,0,1,212,104c0,18.68,2.38,34.93,7.07,48.28a12,12,0,1,1-22.64,8C190.83,144.32,188,125.4,188,104a60,60,0,0,0-83.38-55.28A12,12,0,0,1,88.89,42.35Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ a3.createElement(a3.Fragment, null, /* @__PURE__ */ a3.createElement(
        "path",
        {
          d: "M208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,139.81,56,104a72,72,0,0,1,144,0c0,35.82,8.3,64.6,14.9,76A8,8,0,0,1,208,192Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ a3.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L58.82,63.8A79.59,79.59,0,0,0,48,104c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.8a40,40,0,0,0,78.4,0h15.44l19.44,21.38a8,8,0,1,0,11.84-10.76ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a63.65,63.65,0,0,1,6.26-27.62L168.09,184Zm166-4.73a8.13,8.13,0,0,1-2.93.55,8,8,0,0,1-7.44-5.08C196.35,156.19,192,129.75,192,104A64,64,0,0,0,96.43,48.31a8,8,0,0,1-7.9-13.91A80,80,0,0,1,208,104c0,35.35,8.05,58.59,10.52,64.88A8,8,0,0,1,214,179.25Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ a3.createElement(a3.Fragment, null, /* @__PURE__ */ a3.createElement("path", { d: "M221.84,192v0a1.85,1.85,0,0,1-3,.28L83.27,43.19a4,4,0,0,1,.8-6A79.55,79.55,0,0,1,129.17,24C173,24.66,207.8,61.1,208,104.92c.14,34.88,8.31,61.54,13.82,71A15.89,15.89,0,0,1,221.84,192Zm-7.92,18.62a8,8,0,0,1-11.85,10.76L182.62,200H167.16a40,40,0,0,1-78.41,0H47.91a15.78,15.78,0,0,1-13.59-7.59,16.42,16.42,0,0,1-.09-16.68c5.55-9.73,13.7-36.64,13.7-71.73A79.42,79.42,0,0,1,58.79,63.85L42,45.38A8,8,0,1,1,53.84,34.62ZM150.59,200H105.32a24,24,0,0,0,45.27,0Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ a3.createElement(a3.Fragment, null, /* @__PURE__ */ a3.createElement("path", { d: "M52.44,36A6,6,0,0,0,43.56,44L61.31,63.56A77.45,77.45,0,0,0,50,104c0,35.74-8.42,63.2-14.08,72.94A14,14,0,0,0,48,198h42.5a38,38,0,0,0,75,0h18l20,22a6,6,0,0,0,8.88-8.08ZM128,218a26,26,0,0,1-25.29-20h50.58A26,26,0,0,1,128,218ZM48,186a1.9,1.9,0,0,1-1.7-1,2,2,0,0,1,0-2C53.86,170,62,139.69,62,104a65.63,65.63,0,0,1,7.78-31.12L172.62,186Zm165.29-8.62a5.88,5.88,0,0,1-2.2.42,6,6,0,0,1-5.58-3.81c-7.2-18.31-11.49-44.48-11.49-70A66,66,0,0,0,95.45,46.57a6,6,0,1,1-5.93-10.43A78,78,0,0,1,206,104c0,35.7,8.16,59.24,10.66,65.61A6,6,0,0,1,213.27,177.38Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ a3.createElement(a3.Fragment, null, /* @__PURE__ */ a3.createElement("path", { d: "M53.92,34.62A8,8,0,1,0,42.08,45.38L58.82,63.8A79.59,79.59,0,0,0,48,104c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.8a40,40,0,0,0,78.4,0h15.44l19.44,21.38a8,8,0,1,0,11.84-10.76ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a63.65,63.65,0,0,1,6.26-27.62L168.09,184Zm166-4.73a8.13,8.13,0,0,1-2.93.55,8,8,0,0,1-7.44-5.08C196.35,156.19,192,129.75,192,104A64,64,0,0,0,96.43,48.31a8,8,0,0,1-7.9-13.91A80,80,0,0,1,208,104c0,35.35,8.05,58.59,10.52,64.88A8,8,0,0,1,214,179.25Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ a3.createElement(a3.Fragment, null, /* @__PURE__ */ a3.createElement("path", { d: "M51,37.31A4,4,0,0,0,45,42.69L63.8,63.32A75.52,75.52,0,0,0,52,104c0,36.13-8.58,64-14.36,73.95A12,12,0,0,0,48,196H92.23a36,36,0,0,0,71.54,0h20.64L205,218.69a4,4,0,1,0,5.92-5.38ZM128,220a28,28,0,0,1-27.71-24h55.42A28,28,0,0,1,128,220ZM48,188a3.89,3.89,0,0,1-3.43-2,4,4,0,0,1,0-4C52,169.17,60,139.32,60,104a67.58,67.58,0,0,1,9.4-34.51L177.14,188Zm164.55-12.48a3.94,3.94,0,0,1-1.46.28,4,4,0,0,1-3.72-2.54C200.24,155.17,196,129.28,196,104A68,68,0,0,0,94.46,44.83a4,4,0,1,1-4-6.95A76,76,0,0,1,204,104c0,36.05,8.26,59.89,10.79,66.34A4,4,0,0,1,212.53,175.52Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/CalendarBlank.es.js
  var a4 = __toESM(require_react(), 1);
  var e4 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ a4.createElement(a4.Fragment, null, /* @__PURE__ */ a4.createElement("path", { d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ a4.createElement(a4.Fragment, null, /* @__PURE__ */ a4.createElement(
        "path",
        {
          d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ a4.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ a4.createElement(a4.Fragment, null, /* @__PURE__ */ a4.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,48H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ a4.createElement(a4.Fragment, null, /* @__PURE__ */ a4.createElement("path", { d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ a4.createElement(a4.Fragment, null, /* @__PURE__ */ a4.createElement("path", { d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ a4.createElement(a4.Fragment, null, /* @__PURE__ */ a4.createElement("path", { d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/CaretDown.es.js
  var e5 = __toESM(require_react(), 1);
  var t = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e5.createElement(e5.Fragment, null, /* @__PURE__ */ e5.createElement("path", { d: "M216.49,104.49l-80,80a12,12,0,0,1-17,0l-80-80a12,12,0,0,1,17-17L128,159l71.51-71.52a12,12,0,0,1,17,17Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e5.createElement(e5.Fragment, null, /* @__PURE__ */ e5.createElement("path", { d: "M208,96l-80,80L48,96Z", opacity: "0.2" }), /* @__PURE__ */ e5.createElement("path", { d: "M215.39,92.94A8,8,0,0,0,208,88H48a8,8,0,0,0-5.66,13.66l80,80a8,8,0,0,0,11.32,0l80-80A8,8,0,0,0,215.39,92.94ZM128,164.69,67.31,104H188.69Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e5.createElement(e5.Fragment, null, /* @__PURE__ */ e5.createElement("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,48,88H208a8,8,0,0,1,5.66,13.66Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e5.createElement(e5.Fragment, null, /* @__PURE__ */ e5.createElement("path", { d: "M212.24,100.24l-80,80a6,6,0,0,1-8.48,0l-80-80a6,6,0,0,1,8.48-8.48L128,167.51l75.76-75.75a6,6,0,0,1,8.48,8.48Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e5.createElement(e5.Fragment, null, /* @__PURE__ */ e5.createElement("path", { d: "M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e5.createElement(e5.Fragment, null, /* @__PURE__ */ e5.createElement("path", { d: "M210.83,98.83l-80,80a4,4,0,0,1-5.66,0l-80-80a4,4,0,0,1,5.66-5.66L128,170.34l77.17-77.17a4,4,0,1,1,5.66,5.66Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/CaretLeft.es.js
  var e6 = __toESM(require_react(), 1);
  var a5 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e6.createElement(e6.Fragment, null, /* @__PURE__ */ e6.createElement("path", { d: "M168.49,199.51a12,12,0,0,1-17,17l-80-80a12,12,0,0,1,0-17l80-80a12,12,0,0,1,17,17L97,128Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e6.createElement(e6.Fragment, null, /* @__PURE__ */ e6.createElement("path", { d: "M160,48V208L80,128Z", opacity: "0.2" }), /* @__PURE__ */ e6.createElement("path", { d: "M163.06,40.61a8,8,0,0,0-8.72,1.73l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,168,208V48A8,8,0,0,0,163.06,40.61ZM152,188.69,91.31,128,152,67.31Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e6.createElement(e6.Fragment, null, /* @__PURE__ */ e6.createElement("path", { d: "M168,48V208a8,8,0,0,1-13.66,5.66l-80-80a8,8,0,0,1,0-11.32l80-80A8,8,0,0,1,168,48Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e6.createElement(e6.Fragment, null, /* @__PURE__ */ e6.createElement("path", { d: "M164.24,203.76a6,6,0,1,1-8.48,8.48l-80-80a6,6,0,0,1,0-8.48l80-80a6,6,0,0,1,8.48,8.48L88.49,128Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e6.createElement(e6.Fragment, null, /* @__PURE__ */ e6.createElement("path", { d: "M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e6.createElement(e6.Fragment, null, /* @__PURE__ */ e6.createElement("path", { d: "M162.83,205.17a4,4,0,0,1-5.66,5.66l-80-80a4,4,0,0,1,0-5.66l80-80a4,4,0,1,1,5.66,5.66L85.66,128Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/CaretRight.es.js
  var e7 = __toESM(require_react(), 1);
  var t2 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e7.createElement(e7.Fragment, null, /* @__PURE__ */ e7.createElement("path", { d: "M184.49,136.49l-80,80a12,12,0,0,1-17-17L159,128,87.51,56.49a12,12,0,1,1,17-17l80,80A12,12,0,0,1,184.49,136.49Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e7.createElement(e7.Fragment, null, /* @__PURE__ */ e7.createElement("path", { d: "M176,128,96,208V48Z", opacity: "0.2" }), /* @__PURE__ */ e7.createElement("path", { d: "M181.66,122.34l-80-80A8,8,0,0,0,88,48V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,181.66,122.34ZM104,188.69V67.31L164.69,128Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e7.createElement(e7.Fragment, null, /* @__PURE__ */ e7.createElement("path", { d: "M181.66,133.66l-80,80A8,8,0,0,1,88,208V48a8,8,0,0,1,13.66-5.66l80,80A8,8,0,0,1,181.66,133.66Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e7.createElement(e7.Fragment, null, /* @__PURE__ */ e7.createElement("path", { d: "M180.24,132.24l-80,80a6,6,0,0,1-8.48-8.48L167.51,128,91.76,52.24a6,6,0,0,1,8.48-8.48l80,80A6,6,0,0,1,180.24,132.24Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e7.createElement(e7.Fragment, null, /* @__PURE__ */ e7.createElement("path", { d: "M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e7.createElement(e7.Fragment, null, /* @__PURE__ */ e7.createElement("path", { d: "M178.83,130.83l-80,80a4,4,0,0,1-5.66-5.66L170.34,128,93.17,50.83a4,4,0,0,1,5.66-5.66l80,80A4,4,0,0,1,178.83,130.83Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/ChatCircle.es.js
  var e8 = __toESM(require_react(), 1);
  var a6 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e8.createElement(e8.Fragment, null, /* @__PURE__ */ e8.createElement("path", { d: "M128,20A108,108,0,0,0,31.85,177.23L21,209.66A20,20,0,0,0,46.34,235l32.43-10.81A108,108,0,1,0,128,20Zm0,192a84,84,0,0,1-42.06-11.27,12,12,0,0,0-6-1.62,12.1,12.1,0,0,0-3.8.62l-29.79,9.93,9.93-29.79a12,12,0,0,0-1-9.81A84,84,0,1,1,128,212Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e8.createElement(e8.Fragment, null, /* @__PURE__ */ e8.createElement(
        "path",
        {
          d: "M224,128A96,96,0,0,1,79.93,211.11h0L42.54,223.58a8,8,0,0,1-10.12-10.12l12.47-37.39h0A96,96,0,1,1,224,128Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ e8.createElement("path", { d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e8.createElement(e8.Fragment, null, /* @__PURE__ */ e8.createElement("path", { d: "M232,128A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e8.createElement(e8.Fragment, null, /* @__PURE__ */ e8.createElement("path", { d: "M128,26A102,102,0,0,0,38.35,176.69L26.73,211.56a14,14,0,0,0,17.71,17.71l34.87-11.62A102,102,0,1,0,128,26Zm0,192a90,90,0,0,1-45.06-12.08,6.09,6.09,0,0,0-3-.81,6.2,6.2,0,0,0-1.9.31L40.65,217.88a2,2,0,0,1-2.53-2.53L50.58,178a6,6,0,0,0-.5-4.91A90,90,0,1,1,128,218Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e8.createElement(e8.Fragment, null, /* @__PURE__ */ e8.createElement("path", { d: "M128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e8.createElement(e8.Fragment, null, /* @__PURE__ */ e8.createElement("path", { d: "M128,28A100,100,0,0,0,40.53,176.5l-11.9,35.69a12,12,0,0,0,15.18,15.18l35.69-11.9A100,100,0,1,0,128,28Zm0,192a92,92,0,0,1-46.07-12.35,4.05,4.05,0,0,0-2-.54,3.93,3.93,0,0,0-1.27.21L41.28,219.78a4,4,0,0,1-5.06-5.06l12.46-37.38a4,4,0,0,0-.33-3.27A92,92,0,1,1,128,220Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/Check.es.js
  var e9 = __toESM(require_react(), 1);
  var a7 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e9.createElement(e9.Fragment, null, /* @__PURE__ */ e9.createElement("path", { d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e9.createElement(e9.Fragment, null, /* @__PURE__ */ e9.createElement(
        "path",
        {
          d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ e9.createElement("path", { d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e9.createElement(e9.Fragment, null, /* @__PURE__ */ e9.createElement("path", { d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e9.createElement(e9.Fragment, null, /* @__PURE__ */ e9.createElement("path", { d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e9.createElement(e9.Fragment, null, /* @__PURE__ */ e9.createElement("path", { d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e9.createElement(e9.Fragment, null, /* @__PURE__ */ e9.createElement("path", { d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/CheckCircle.es.js
  var e10 = __toESM(require_react(), 1);
  var a8 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e10.createElement(e10.Fragment, null, /* @__PURE__ */ e10.createElement("path", { d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e10.createElement(e10.Fragment, null, /* @__PURE__ */ e10.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ e10.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e10.createElement(e10.Fragment, null, /* @__PURE__ */ e10.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e10.createElement(e10.Fragment, null, /* @__PURE__ */ e10.createElement("path", { d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e10.createElement(e10.Fragment, null, /* @__PURE__ */ e10.createElement("path", { d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e10.createElement(e10.Fragment, null, /* @__PURE__ */ e10.createElement("path", { d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/Circle.es.js
  var e11 = __toESM(require_react(), 1);
  var t3 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e11.createElement(e11.Fragment, null, /* @__PURE__ */ e11.createElement("path", { d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e11.createElement(e11.Fragment, null, /* @__PURE__ */ e11.createElement("path", { d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z", opacity: "0.2" }), /* @__PURE__ */ e11.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e11.createElement(e11.Fragment, null, /* @__PURE__ */ e11.createElement("path", { d: "M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e11.createElement(e11.Fragment, null, /* @__PURE__ */ e11.createElement("path", { d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e11.createElement(e11.Fragment, null, /* @__PURE__ */ e11.createElement("path", { d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e11.createElement(e11.Fragment, null, /* @__PURE__ */ e11.createElement("path", { d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/Heart.es.js
  var e12 = __toESM(require_react(), 1);
  var a9 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e12.createElement(e12.Fragment, null, /* @__PURE__ */ e12.createElement("path", { d: "M178,36c-20.09,0-37.92,7.93-50,21.56C115.92,43.93,98.09,36,78,36a66.08,66.08,0,0,0-66,66c0,72.34,105.81,130.14,110.31,132.57a12,12,0,0,0,11.38,0C138.19,232.14,244,174.34,244,102A66.08,66.08,0,0,0,178,36Zm-5.49,142.36A328.69,328.69,0,0,1,128,210.16a328.69,328.69,0,0,1-44.51-31.8C61.82,159.77,36,131.42,36,102A42,42,0,0,1,78,60c17.8,0,32.7,9.4,38.89,24.54a12,12,0,0,0,22.22,0C145.3,69.4,160.2,60,178,60a42,42,0,0,1,42,42C220,131.42,194.18,159.77,172.51,178.36Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e12.createElement(e12.Fragment, null, /* @__PURE__ */ e12.createElement(
        "path",
        {
          d: "M232,102c0,66-104,122-104,122S24,168,24,102A54,54,0,0,1,78,48c22.59,0,41.94,12.31,50,32,8.06-19.69,27.41-32,50-32A54,54,0,0,1,232,102Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ e12.createElement("path", { d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e12.createElement(e12.Fragment, null, /* @__PURE__ */ e12.createElement("path", { d: "M240,102c0,70-103.79,126.66-108.21,129a8,8,0,0,1-7.58,0C119.79,228.66,16,172,16,102A62.07,62.07,0,0,1,78,40c20.65,0,38.73,8.88,50,23.89C139.27,48.88,157.35,40,178,40A62.07,62.07,0,0,1,240,102Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e12.createElement(e12.Fragment, null, /* @__PURE__ */ e12.createElement("path", { d: "M178,42c-21,0-39.26,9.47-50,25.34C117.26,51.47,99,42,78,42a60.07,60.07,0,0,0-60,60c0,29.2,18.2,59.59,54.1,90.31a334.68,334.68,0,0,0,53.06,37,6,6,0,0,0,5.68,0,334.68,334.68,0,0,0,53.06-37C219.8,161.59,238,131.2,238,102A60.07,60.07,0,0,0,178,42ZM128,217.11C111.59,207.64,30,157.72,30,102A48.05,48.05,0,0,1,78,54c20.28,0,37.31,10.83,44.45,28.27a6,6,0,0,0,11.1,0C140.69,64.83,157.72,54,178,54a48.05,48.05,0,0,1,48,48C226,157.72,144.41,207.64,128,217.11Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e12.createElement(e12.Fragment, null, /* @__PURE__ */ e12.createElement("path", { d: "M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40ZM128,214.8C109.74,204.16,32,155.69,32,102A46.06,46.06,0,0,1,78,56c19.45,0,35.78,10.36,42.6,27a8,8,0,0,0,14.8,0c6.82-16.67,23.15-27,42.6-27a46.06,46.06,0,0,1,46,46C224,155.61,146.24,204.15,128,214.8Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e12.createElement(e12.Fragment, null, /* @__PURE__ */ e12.createElement("path", { d: "M178,44c-21.44,0-39.92,10.19-50,27.07C117.92,54.19,99.44,44,78,44a58.07,58.07,0,0,0-58,58c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,160.47,236,130.59,236,102A58.07,58.07,0,0,0,178,44ZM128,219.42c-14-8-100-59.35-100-117.42A50.06,50.06,0,0,1,78,52c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,63.31,156.89,52,178,52a50.06,50.06,0,0,1,50,50C228,160,142,211.46,128,219.42Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/ImageSquare.es.js
  var a10 = __toESM(require_react(), 1);
  var e13 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ a10.createElement(a10.Fragment, null, /* @__PURE__ */ a10.createElement("path", { d: "M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,24v63.72L186.14,97.86a20,20,0,0,0-28.28,0L52,203.72V52ZM85.66,204,172,117.66l32,32V204ZM76,96a20,20,0,1,1,20,20A20,20,0,0,1,76,96Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ a10.createElement(a10.Fragment, null, /* @__PURE__ */ a10.createElement(
        "path",
        {
          d: "M208,40H48a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8h8.69L166.34,106.34a8,8,0,0,1,11.32,0L216,144.69V48A8,8,0,0,0,208,40ZM96,112a16,16,0,1,1,16-16A16,16,0,0,1,96,112Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ a10.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ a10.createElement(a10.Fragment, null, /* @__PURE__ */ a10.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM80,96a16,16,0,1,1,16,16A16,16,0,0,1,80,96Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ a10.createElement(a10.Fragment, null, /* @__PURE__ */ a10.createElement("path", { d: "M208,34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM46,208V48a2,2,0,0,1,2-2H208a2,2,0,0,1,2,2v82.2l-28.1-28.1a14,14,0,0,0-19.8,0L54.2,210H48A2,2,0,0,1,46,208Zm162,2H71.17l99.41-99.41a2,2,0,0,1,2.83,0L210,147.17V208A2,2,0,0,1,208,210ZM96,118A22,22,0,1,0,74,96,22,22,0,0,0,96,118Zm0-32A10,10,0,1,1,86,96,10,10,0,0,1,96,86Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ a10.createElement(a10.Fragment, null, /* @__PURE__ */ a10.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ a10.createElement(a10.Fragment, null, /* @__PURE__ */ a10.createElement("path", { d: "M208,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM44,208V48a4,4,0,0,1,4-4H208a4,4,0,0,1,4,4v87l-31.51-31.52a12,12,0,0,0-17,0L55,212H48A4,4,0,0,1,44,208Zm164,4H66.34L169.17,109.17a4,4,0,0,1,5.66,0L212,146.34V208A4,4,0,0,1,208,212ZM96,116A20,20,0,1,0,76,96,20,20,0,0,0,96,116Zm0-32A12,12,0,1,1,84,96,12,12,0,0,1,96,84Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/MagnifyingGlass.es.js
  var e14 = __toESM(require_react(), 1);
  var a11 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e14.createElement(e14.Fragment, null, /* @__PURE__ */ e14.createElement("path", { d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e14.createElement(e14.Fragment, null, /* @__PURE__ */ e14.createElement("path", { d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z", opacity: "0.2" }), /* @__PURE__ */ e14.createElement("path", { d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e14.createElement(e14.Fragment, null, /* @__PURE__ */ e14.createElement("path", { d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e14.createElement(e14.Fragment, null, /* @__PURE__ */ e14.createElement("path", { d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e14.createElement(e14.Fragment, null, /* @__PURE__ */ e14.createElement("path", { d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e14.createElement(e14.Fragment, null, /* @__PURE__ */ e14.createElement("path", { d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/Microphone.es.js
  var a12 = __toESM(require_react(), 1);
  var e15 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ a12.createElement(a12.Fragment, null, /* @__PURE__ */ a12.createElement("path", { d: "M128,180a52.06,52.06,0,0,0,52-52V64A52,52,0,0,0,76,64v64A52.06,52.06,0,0,0,128,180ZM100,64a28,28,0,0,1,56,0v64a28,28,0,0,1-56,0Zm40,155.22V240a12,12,0,0,1-24,0V219.22A92.14,92.14,0,0,1,36,128a12,12,0,0,1,24,0,68,68,0,0,0,136,0,12,12,0,0,1,24,0A92.14,92.14,0,0,1,140,219.22Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ a12.createElement(a12.Fragment, null, /* @__PURE__ */ a12.createElement(
        "path",
        {
          d: "M168,64v64a40,40,0,0,1-40,40h0a40,40,0,0,1-40-40V64a40,40,0,0,1,40-40h0A40,40,0,0,1,168,64Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ a12.createElement("path", { d: "M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ a12.createElement(a12.Fragment, null, /* @__PURE__ */ a12.createElement("path", { d: "M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V240a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ a12.createElement(a12.Fragment, null, /* @__PURE__ */ a12.createElement("path", { d: "M128,174a46.06,46.06,0,0,0,46-46V64a46,46,0,0,0-92,0v64A46.06,46.06,0,0,0,128,174ZM94,64a34,34,0,0,1,68,0v64a34,34,0,0,1-68,0Zm40,141.75V240a6,6,0,0,1-12,0V205.75A78.09,78.09,0,0,1,50,128a6,6,0,0,1,12,0,66,66,0,0,0,132,0,6,6,0,0,1,12,0A78.09,78.09,0,0,1,134,205.75Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ a12.createElement(a12.Fragment, null, /* @__PURE__ */ a12.createElement("path", { d: "M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V240a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ a12.createElement(a12.Fragment, null, /* @__PURE__ */ a12.createElement("path", { d: "M128,172a44.05,44.05,0,0,0,44-44V64a44,44,0,0,0-88,0v64A44.05,44.05,0,0,0,128,172ZM92,64a36,36,0,0,1,72,0v64a36,36,0,0,1-72,0Zm40,139.89V240a4,4,0,0,1-8,0V203.89A76.09,76.09,0,0,1,52,128a4,4,0,0,1,8,0,68,68,0,0,0,136,0,4,4,0,0,1,8,0A76.09,76.09,0,0,1,132,203.89Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/Moon.es.js
  var e16 = __toESM(require_react(), 1);
  var a13 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e16.createElement(e16.Fragment, null, /* @__PURE__ */ e16.createElement("path", { d: "M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e16.createElement(e16.Fragment, null, /* @__PURE__ */ e16.createElement(
        "path",
        {
          d: "M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ e16.createElement("path", { d: "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e16.createElement(e16.Fragment, null, /* @__PURE__ */ e16.createElement("path", { d: "M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e16.createElement(e16.Fragment, null, /* @__PURE__ */ e16.createElement("path", { d: "M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e16.createElement(e16.Fragment, null, /* @__PURE__ */ e16.createElement("path", { d: "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e16.createElement(e16.Fragment, null, /* @__PURE__ */ e16.createElement("path", { d: "M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/PencilSimple.es.js
  var a14 = __toESM(require_react(), 1);
  var e17 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ a14.createElement(a14.Fragment, null, /* @__PURE__ */ a14.createElement("path", { d: "M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ a14.createElement(a14.Fragment, null, /* @__PURE__ */ a14.createElement(
        "path",
        {
          d: "M221.66,90.34,192,120,136,64l29.66-29.66a8,8,0,0,1,11.31,0L221.66,79A8,8,0,0,1,221.66,90.34Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ a14.createElement("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ a14.createElement(a14.Fragment, null, /* @__PURE__ */ a14.createElement("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM192,108.68,147.31,64l24-24L216,84.68Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ a14.createElement(a14.Fragment, null, /* @__PURE__ */ a14.createElement("path", { d: "M225.9,74.78,181.21,30.09a14,14,0,0,0-19.8,0L38.1,153.41a13.94,13.94,0,0,0-4.1,9.9V208a14,14,0,0,0,14,14H92.69a13.94,13.94,0,0,0,9.9-4.1L225.9,94.58a14,14,0,0,0,0-19.8ZM94.1,209.41a2,2,0,0,1-1.41.59H48a2,2,0,0,1-2-2V163.31a2,2,0,0,1,.59-1.41L136,72.48,183.51,120ZM217.41,86.1,192,111.51,144.49,64,169.9,38.58a2,2,0,0,1,2.83,0l44.68,44.69a2,2,0,0,1,0,2.83Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ a14.createElement(a14.Fragment, null, /* @__PURE__ */ a14.createElement("path", { d: "M227.31,73.37,182.63,28.68a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96a16,16,0,0,0,0-22.63ZM92.69,208H48V163.31l88-88L180.69,120ZM192,108.68,147.31,64l24-24L216,84.68Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ a14.createElement(a14.Fragment, null, /* @__PURE__ */ a14.createElement("path", { d: "M224.49,76.2,179.8,31.51a12,12,0,0,0-17,0L133.17,61.17h0L39.52,154.83A11.9,11.9,0,0,0,36,163.31V208a12,12,0,0,0,12,12H92.69a12,12,0,0,0,8.48-3.51L224.48,93.17a12,12,0,0,0,0-17Zm-129,134.63A4,4,0,0,1,92.69,212H48a4,4,0,0,1-4-4V163.31a4,4,0,0,1,1.17-2.83L136,69.65,186.34,120ZM218.83,87.51,192,114.34,141.66,64l26.82-26.83a4,4,0,0,1,5.66,0l44.69,44.68a4,4,0,0,1,0,5.66Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/Plus.es.js
  var e18 = __toESM(require_react(), 1);
  var a15 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e18.createElement(e18.Fragment, null, /* @__PURE__ */ e18.createElement("path", { d: "M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e18.createElement(e18.Fragment, null, /* @__PURE__ */ e18.createElement(
        "path",
        {
          d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ e18.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e18.createElement(e18.Fragment, null, /* @__PURE__ */ e18.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e18.createElement(e18.Fragment, null, /* @__PURE__ */ e18.createElement("path", { d: "M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e18.createElement(e18.Fragment, null, /* @__PURE__ */ e18.createElement("path", { d: "M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e18.createElement(e18.Fragment, null, /* @__PURE__ */ e18.createElement("path", { d: "M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/SignOut.es.js
  var a16 = __toESM(require_react(), 1);
  var e19 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ a16.createElement(a16.Fragment, null, /* @__PURE__ */ a16.createElement("path", { d: "M124,216a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V40A12,12,0,0,1,48,28h64a12,12,0,0,1,0,24H60V204h52A12,12,0,0,1,124,216Zm108.49-96.49-40-40a12,12,0,0,0-17,17L195,116H112a12,12,0,0,0,0,24h83l-19.52,19.51a12,12,0,0,0,17,17l40-40A12,12,0,0,0,232.49,119.51Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ a16.createElement(a16.Fragment, null, /* @__PURE__ */ a16.createElement(
        "path",
        {
          d: "M224,56V200a16,16,0,0,1-16,16H48V40H208A16,16,0,0,1,224,56Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ a16.createElement("path", { d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ a16.createElement(a16.Fragment, null, /* @__PURE__ */ a16.createElement("path", { d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40A8,8,0,0,0,176,88v32H112a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,229.66,122.34Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ a16.createElement(a16.Fragment, null, /* @__PURE__ */ a16.createElement("path", { d: "M118,216a6,6,0,0,1-6,6H48a6,6,0,0,1-6-6V40a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H54V210h58A6,6,0,0,1,118,216Zm110.24-92.24-40-40a6,6,0,0,0-8.48,8.48L209.51,122H112a6,6,0,0,0,0,12h97.51l-29.75,29.76a6,6,0,1,0,8.48,8.48l40-40A6,6,0,0,0,228.24,123.76Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ a16.createElement(a16.Fragment, null, /* @__PURE__ */ a16.createElement("path", { d: "M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ a16.createElement(a16.Fragment, null, /* @__PURE__ */ a16.createElement("path", { d: "M116,216a4,4,0,0,1-4,4H48a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H52V212h60A4,4,0,0,1,116,216Zm110.83-90.83-40-40a4,4,0,0,0-5.66,5.66L214.34,124H112a4,4,0,0,0,0,8H214.34l-33.17,33.17a4,4,0,0,0,5.66,5.66l40-40A4,4,0,0,0,226.83,125.17Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/Sun.es.js
  var a17 = __toESM(require_react(), 1);
  var e20 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ a17.createElement(a17.Fragment, null, /* @__PURE__ */ a17.createElement("path", { d: "M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ a17.createElement(a17.Fragment, null, /* @__PURE__ */ a17.createElement("path", { d: "M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z", opacity: "0.2" }), /* @__PURE__ */ a17.createElement("path", { d: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ a17.createElement(a17.Fragment, null, /* @__PURE__ */ a17.createElement("path", { d: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ a17.createElement(a17.Fragment, null, /* @__PURE__ */ a17.createElement("path", { d: "M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ a17.createElement(a17.Fragment, null, /* @__PURE__ */ a17.createElement("path", { d: "M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ a17.createElement(a17.Fragment, null, /* @__PURE__ */ a17.createElement("path", { d: "M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/UserPlus.es.js
  var a18 = __toESM(require_react(), 1);
  var e21 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ a18.createElement(a18.Fragment, null, /* @__PURE__ */ a18.createElement("path", { d: "M256,136a12,12,0,0,1-12,12h-8v8a12,12,0,0,1-24,0v-8h-8a12,12,0,0,1,0-24h8v-8a12,12,0,0,1,24,0v8h8A12,12,0,0,1,256,136Zm-54.81,56.28a12,12,0,1,1-18.38,15.44C169.12,191.42,145,172,108,172c-28.89,0-55.46,12.68-74.81,35.72a12,12,0,0,1-18.38-15.44A124.08,124.08,0,0,1,63.5,156.53a72,72,0,1,1,89,0A124,124,0,0,1,201.19,192.28ZM108,148a48,48,0,1,0-48-48A48.05,48.05,0,0,0,108,148Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ a18.createElement(a18.Fragment, null, /* @__PURE__ */ a18.createElement("path", { d: "M168,100a60,60,0,1,1-60-60A60,60,0,0,1,168,100Z", opacity: "0.2" }), /* @__PURE__ */ a18.createElement("path", { d: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ a18.createElement(a18.Fragment, null, /* @__PURE__ */ a18.createElement("path", { d: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136ZM144,157.68a68,68,0,1,0-71.9,0c-20.65,6.76-39.23,19.39-54.17,37.17A8,8,0,0,0,24,208H192a8,8,0,0,0,6.13-13.15C183.18,177.07,164.6,164.44,144,157.68Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ a18.createElement(a18.Fragment, null, /* @__PURE__ */ a18.createElement("path", { d: "M254,136a6,6,0,0,1-6,6H230v18a6,6,0,0,1-12,0V142H200a6,6,0,0,1,0-12h18V112a6,6,0,0,1,12,0v18h18A6,6,0,0,1,254,136Zm-57.41,60.14a6,6,0,1,1-9.18,7.72C166.9,179.45,138.69,166,108,166s-58.89,13.45-79.41,37.86a6,6,0,0,1-9.18-7.72C35.14,177.41,55,164.48,77,158.25a66,66,0,1,1,62,0C161,164.48,180.86,177.41,196.59,196.14ZM108,154a54,54,0,1,0-54-54A54.06,54.06,0,0,0,108,154Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ a18.createElement(a18.Fragment, null, /* @__PURE__ */ a18.createElement("path", { d: "M256,136a8,8,0,0,1-8,8H232v16a8,8,0,0,1-16,0V144H200a8,8,0,0,1,0-16h16V112a8,8,0,0,1,16,0v16h16A8,8,0,0,1,256,136Zm-57.87,58.85a8,8,0,0,1-12.26,10.3C165.75,181.19,138.09,168,108,168s-57.75,13.19-77.87,37.15a8,8,0,0,1-12.25-10.3c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM108,152a52,52,0,1,0-52-52A52.06,52.06,0,0,0,108,152Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ a18.createElement(a18.Fragment, null, /* @__PURE__ */ a18.createElement("path", { d: "M252,136a4,4,0,0,1-4,4H228v20a4,4,0,0,1-8,0V140H200a4,4,0,0,1,0-8h20V112a4,4,0,0,1,8,0v20h20A4,4,0,0,1,252,136Zm-56.94,61.43a4,4,0,0,1-6.12,5.14C168,177.7,139.3,164,108,164s-60,13.7-80.94,38.57a4,4,0,1,1-6.12-5.14c16.71-19.9,38.13-33.13,61.89-38.59a64,64,0,1,1,50.34,0C156.93,164.3,178.35,177.53,195.06,197.43ZM108,156a56,56,0,1,0-56-56A56.06,56.06,0,0,0,108,156Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/defs/X.es.js
  var e22 = __toESM(require_react(), 1);
  var a19 = /* @__PURE__ */ new Map([
    [
      "bold",
      /* @__PURE__ */ e22.createElement(e22.Fragment, null, /* @__PURE__ */ e22.createElement("path", { d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z" }))
    ],
    [
      "duotone",
      /* @__PURE__ */ e22.createElement(e22.Fragment, null, /* @__PURE__ */ e22.createElement(
        "path",
        {
          d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
          opacity: "0.2"
        }
      ), /* @__PURE__ */ e22.createElement("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
    ],
    [
      "fill",
      /* @__PURE__ */ e22.createElement(e22.Fragment, null, /* @__PURE__ */ e22.createElement("path", { d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
    ],
    [
      "light",
      /* @__PURE__ */ e22.createElement(e22.Fragment, null, /* @__PURE__ */ e22.createElement("path", { d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z" }))
    ],
    [
      "regular",
      /* @__PURE__ */ e22.createElement(e22.Fragment, null, /* @__PURE__ */ e22.createElement("path", { d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" }))
    ],
    [
      "thin",
      /* @__PURE__ */ e22.createElement(e22.Fragment, null, /* @__PURE__ */ e22.createElement("path", { d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z" }))
    ]
  ]);

  // node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js
  var e23 = __toESM(require_react(), 1);

  // node_modules/@phosphor-icons/react/dist/lib/context.es.js
  var import_react = __toESM(require_react(), 1);
  var o = (0, import_react.createContext)({
    color: "currentColor",
    size: "1em",
    weight: "regular",
    mirrored: false
  });

  // node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js
  var p = e23.forwardRef(
    (s11, a24) => {
      const {
        alt: n6,
        color: r3,
        size: t7,
        weight: o19,
        mirrored: c5,
        children: i,
        weights: m2,
        ...x
      } = s11, {
        color: d = "currentColor",
        size: l,
        weight: f2 = "regular",
        mirrored: g = false,
        ...w
      } = e23.useContext(o);
      return /* @__PURE__ */ e23.createElement(
        "svg",
        {
          ref: a24,
          xmlns: "http://www.w3.org/2000/svg",
          width: t7 != null ? t7 : l,
          height: t7 != null ? t7 : l,
          fill: r3 != null ? r3 : d,
          viewBox: "0 0 256 256",
          transform: c5 || g ? "scale(-1, 1)" : void 0,
          ...w,
          ...x
        },
        !!n6 && /* @__PURE__ */ e23.createElement("title", null, n6),
        i,
        m2.get(o19 != null ? o19 : f2)
      );
    }
  );
  p.displayName = "IconBase";

  // node_modules/@phosphor-icons/react/dist/csr/ArrowLeft.es.js
  var o2 = __toESM(require_react(), 1);
  var r2 = o2.forwardRef((e43, t7) => /* @__PURE__ */ o2.createElement(p, { ref: t7, ...e43, weights: a }));
  r2.displayName = "ArrowLeftIcon";
  var s = r2;

  // node_modules/@phosphor-icons/react/dist/csr/Bell.es.js
  var e24 = __toESM(require_react(), 1);
  var o3 = e24.forwardRef((r3, t7) => /* @__PURE__ */ e24.createElement(p, { ref: t7, ...r3, weights: e2 }));
  o3.displayName = "BellIcon";
  var s2 = o3;

  // node_modules/@phosphor-icons/react/dist/csr/BellSlash.es.js
  var e25 = __toESM(require_react(), 1);
  var o4 = e25.forwardRef((a24, l) => /* @__PURE__ */ e25.createElement(p, { ref: l, ...a24, weights: e3 }));
  o4.displayName = "BellSlashIcon";
  var c = o4;

  // node_modules/@phosphor-icons/react/dist/csr/CalendarBlank.es.js
  var a20 = __toESM(require_react(), 1);
  var e26 = a20.forwardRef((o19, r3) => /* @__PURE__ */ a20.createElement(p, { ref: r3, ...o19, weights: e4 }));
  e26.displayName = "CalendarBlankIcon";
  var c2 = e26;

  // node_modules/@phosphor-icons/react/dist/csr/CaretDown.es.js
  var o5 = __toESM(require_react(), 1);
  var e27 = o5.forwardRef((r3, t7) => /* @__PURE__ */ o5.createElement(p, { ref: t7, ...r3, weights: t }));
  e27.displayName = "CaretDownIcon";
  var s3 = e27;

  // node_modules/@phosphor-icons/react/dist/csr/CaretLeft.es.js
  var e28 = __toESM(require_react(), 1);
  var t4 = e28.forwardRef((o19, r3) => /* @__PURE__ */ e28.createElement(p, { ref: r3, ...o19, weights: a5 }));
  t4.displayName = "CaretLeftIcon";
  var s4 = t4;

  // node_modules/@phosphor-icons/react/dist/csr/CaretRight.es.js
  var t5 = __toESM(require_react(), 1);
  var e29 = t5.forwardRef((o19, r3) => /* @__PURE__ */ t5.createElement(p, { ref: r3, ...o19, weights: t2 }));
  e29.displayName = "CaretRightIcon";
  var s5 = e29;

  // node_modules/@phosphor-icons/react/dist/csr/ChatCircle.es.js
  var e30 = __toESM(require_react(), 1);
  var o6 = e30.forwardRef((r3, t7) => /* @__PURE__ */ e30.createElement(p, { ref: t7, ...r3, weights: a6 }));
  o6.displayName = "ChatCircleIcon";
  var s6 = o6;

  // node_modules/@phosphor-icons/react/dist/csr/Check.es.js
  var e31 = __toESM(require_react(), 1);
  var o7 = e31.forwardRef((c5, r3) => /* @__PURE__ */ e31.createElement(p, { ref: r3, ...c5, weights: a7 }));
  o7.displayName = "CheckIcon";
  var n = o7;

  // node_modules/@phosphor-icons/react/dist/csr/CheckCircle.es.js
  var e32 = __toESM(require_react(), 1);
  var c3 = e32.forwardRef((o19, r3) => /* @__PURE__ */ e32.createElement(p, { ref: r3, ...o19, weights: a8 }));
  c3.displayName = "CheckCircleIcon";
  var s7 = c3;

  // node_modules/@phosphor-icons/react/dist/csr/Circle.es.js
  var e33 = __toESM(require_react(), 1);
  var o8 = e33.forwardRef((r3, c5) => /* @__PURE__ */ e33.createElement(p, { ref: c5, ...r3, weights: t3 }));
  o8.displayName = "CircleIcon";
  var s8 = o8;

  // node_modules/@phosphor-icons/react/dist/csr/Heart.es.js
  var e34 = __toESM(require_react(), 1);
  var o9 = e34.forwardRef((r3, t7) => /* @__PURE__ */ e34.createElement(p, { ref: t7, ...r3, weights: a9 }));
  o9.displayName = "HeartIcon";
  var n2 = o9;

  // node_modules/@phosphor-icons/react/dist/csr/ImageSquare.es.js
  var e35 = __toESM(require_react(), 1);
  var a21 = e35.forwardRef((o19, r3) => /* @__PURE__ */ e35.createElement(p, { ref: r3, ...o19, weights: e13 }));
  a21.displayName = "ImageSquareIcon";
  var I = a21;

  // node_modules/@phosphor-icons/react/dist/csr/MagnifyingGlass.es.js
  var a22 = __toESM(require_react(), 1);
  var o10 = a22.forwardRef((s11, n6) => /* @__PURE__ */ a22.createElement(p, { ref: n6, ...s11, weights: a11 }));
  o10.displayName = "MagnifyingGlassIcon";
  var f = o10;

  // node_modules/@phosphor-icons/react/dist/csr/Microphone.es.js
  var o11 = __toESM(require_react(), 1);
  var e36 = o11.forwardRef((r3, c5) => /* @__PURE__ */ o11.createElement(p, { ref: c5, ...r3, weights: e15 }));
  e36.displayName = "MicrophoneIcon";
  var m = e36;

  // node_modules/@phosphor-icons/react/dist/csr/Moon.es.js
  var o12 = __toESM(require_react(), 1);
  var e37 = o12.forwardRef((r3, t7) => /* @__PURE__ */ o12.createElement(p, { ref: t7, ...r3, weights: a13 }));
  e37.displayName = "MoonIcon";
  var s9 = e37;

  // node_modules/@phosphor-icons/react/dist/csr/PencilSimple.es.js
  var e38 = __toESM(require_react(), 1);
  var o13 = e38.forwardRef((i, m2) => /* @__PURE__ */ e38.createElement(p, { ref: m2, ...i, weights: e17 }));
  o13.displayName = "PencilSimpleIcon";
  var a23 = o13;

  // node_modules/@phosphor-icons/react/dist/csr/Plus.es.js
  var o14 = __toESM(require_react(), 1);
  var e39 = o14.forwardRef((r3, s11) => /* @__PURE__ */ o14.createElement(p, { ref: s11, ...r3, weights: a15 }));
  e39.displayName = "PlusIcon";
  var n3 = e39;

  // node_modules/@phosphor-icons/react/dist/csr/SignOut.es.js
  var o15 = __toESM(require_react(), 1);
  var t6 = o15.forwardRef((e43, r3) => /* @__PURE__ */ o15.createElement(p, { ref: r3, ...e43, weights: e19 }));
  t6.displayName = "SignOutIcon";
  var c4 = t6;

  // node_modules/@phosphor-icons/react/dist/csr/Sun.es.js
  var o16 = __toESM(require_react(), 1);
  var e40 = o16.forwardRef((r3, t7) => /* @__PURE__ */ o16.createElement(p, { ref: t7, ...r3, weights: e20 }));
  e40.displayName = "SunIcon";
  var s10 = e40;

  // node_modules/@phosphor-icons/react/dist/csr/UserPlus.es.js
  var e41 = __toESM(require_react(), 1);
  var o17 = e41.forwardRef((r3, s11) => /* @__PURE__ */ e41.createElement(p, { ref: s11, ...r3, weights: e21 }));
  o17.displayName = "UserPlusIcon";
  var n4 = o17;

  // node_modules/@phosphor-icons/react/dist/csr/X.es.js
  var o18 = __toESM(require_react(), 1);
  var e42 = o18.forwardRef((r3, t7) => /* @__PURE__ */ o18.createElement(p, { ref: t7, ...r3, weights: a19 }));
  e42.displayName = "XIcon";
  var n5 = e42;

  // brandboard.jsx
  var import_jsx_runtime = __toESM(require_jsx_runtime());
  var DARK = {
    bg: "#0e0e13",
    surface: "#151519",
    sh: "#1a1a1f",
    border: "rgba(255,255,255,0.15)",
    text: "rgba(255,255,255,0.96)",
    muted: "rgba(255,255,255,0.64)",
    dim: "rgba(255,255,255,0.38)",
    accent: "#ff461e",
    accentBg: "rgba(255,70,30,0.13)",
    accentGlow: "rgba(255,70,30,0.28)",
    inputBg: "#111116",
    modal: "rgba(14,14,19,0.74)"
  };
  var LIGHT = {
    bg: "#ffffff",
    surface: "#f3f3f3",
    sh: "#ececec",
    border: "rgba(14,14,19,0.14)",
    text: "rgba(14,14,19,0.95)",
    muted: "rgba(14,14,19,0.62)",
    dim: "rgba(14,14,19,0.42)",
    accent: "#ff461e",
    accentBg: "rgba(255,70,30,0.10)",
    accentGlow: "rgba(255,70,30,0.22)",
    inputBg: "#ffffff",
    modal: "rgba(14,14,19,0.45)"
  };
  var TAGS = ["Marketing", "HR Brand", "Business", "PR", "Other"];
  var TAG_C = {
    "Marketing": { bg: "rgba(255,70,30,0.13)", text: "#ff704f", bd: "rgba(255,70,30,0.34)" },
    "HR Brand": { bg: "rgba(182,102,255,0.13)", text: "#b666ff", bd: "rgba(182,102,255,0.34)" },
    "Business": { bg: "rgba(107,127,255,0.13)", text: "#8c9aff", bd: "rgba(107,127,255,0.34)" },
    "PR": { bg: "rgba(34,196,138,0.13)", text: "#22c48a", bd: "rgba(34,196,138,0.34)" },
    "Other": { bg: "rgba(240,168,48,0.13)", text: "#f0a830", bd: "rgba(240,168,48,0.34)" }
  };
  var AV_COLORS = ["#ff461e", "#6b7fff", "#22c48a", "#b666ff", "#f0a830", "#ff5c5c", "#8cb4ff", "#f6c75f"];
  var SANS = "'Aeonic Pro', 'Aeonik Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
  var MONO = SANS;
  var IDEA_TEMPLATES = [
    {
      title: "Customer language we should reuse",
      body: "Paste a real sentence from a client, candidate, or partner. Add where it came from and what it reveals about the brand.",
      tag: "Marketing"
    },
    {
      title: "A small moment that feels like us",
      body: "Capture a product detail, support reply, onboarding line, or workshop habit that could become part of the brand system.",
      tag: "HR Brand"
    },
    {
      title: "What changed our mind this week",
      body: "Write down an assumption the team adjusted, what evidence changed it, and how we could share that more openly.",
      tag: "PR"
    },
    {
      title: "Decision helper for buyers",
      body: "Frame a common customer decision as a quick scenario: who they are, what they compare, and what would make the choice easier.",
      tag: "Business"
    }
  ];
  var gid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
  function ago(iso) {
    const s11 = (Date.now() - new Date(iso)) / 1e3 | 0;
    if (s11 < 60) return "just now";
    if (s11 < 3600) return `${s11 / 60 | 0}m ago`;
    if (s11 < 86400) return `${s11 / 3600 | 0}h ago`;
    if (s11 < 604800) return `${s11 / 86400 | 0}d ago`;
    return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
  }
  var ft = (iso) => new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  var fd = (iso) => new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  var replyStamp = (iso) => {
    const d = new Date(iso);
    const today = ymd(d) === ymd(/* @__PURE__ */ new Date());
    return `Last reply ${today ? "today" : fd(iso)} at ${ft(iso)}`;
  };
  var ymd = (iso) => {
    const d = new Date(iso);
    return new Date(d.getTime() - d.getTimezoneOffset() * 6e4).toISOString().slice(0, 10);
  };
  var monthLabel = (date) => date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
  var sameMonth = (a24, b) => a24.getFullYear() === b.getFullYear() && a24.getMonth() === b.getMonth();
  var addMonths = (date, delta) => new Date(date.getFullYear(), date.getMonth() + delta, 1);
  function monthDays(monthDate) {
    const start = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
    const end = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
    const firstOffset = (start.getDay() + 6) % 7;
    const days = [];
    for (let i = 0; i < firstOffset; i++) days.push(new Date(start.getFullYear(), start.getMonth(), i - firstOffset + 1));
    for (let d = 1; d <= end.getDate(); d++) days.push(new Date(start.getFullYear(), start.getMonth(), d));
    while (days.length % 7) {
      const last = days[days.length - 1];
      days.push(new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1));
    }
    return days;
  }
  var systemDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  var normalizeEmail = (email) => (email || "").trim().toLowerCase();
  var isAltyEmail = (email) => /^[^\s@]+@alty\.co$/i.test(normalizeEmail(email));
  function nameFromEmail(email) {
    const local = normalizeEmail(email).split("@")[0] || "team";
    return local.split(/[._-]+/).filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ") || "Alty Team";
  }
  function makeTeamIdentity(email) {
    const clean = normalizeEmail(email);
    let hash = 0;
    for (let i = 0; i < clean.length; i++) hash = (hash + clean.charCodeAt(i) * (i + 1)) % AV_COLORS.length;
    return { id: `alty:${clean}`, email: clean, name: nameFromEmail(clean), color: AV_COLORS[hash] };
  }
  var isValidIdentity = (identity) => identity?.email && isAltyEmail(identity.email);
  function mergeAccounts(...lists) {
    const byEmail = /* @__PURE__ */ new Map();
    lists.flat().filter(isValidIdentity).forEach((account) => {
      byEmail.set(normalizeEmail(account.email), {
        ...account,
        id: account.id || `alty:${normalizeEmail(account.email)}`,
        email: normalizeEmail(account.email),
        name: account.name || nameFromEmail(account.email),
        color: account.color || makeTeamIdentity(account.email).color
      });
    });
    return [...byEmail.values()];
  }
  var blobToDataUrl = (blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
  var fileToImage = (file) => new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => {
      URL.revokeObjectURL(url);
      resolve(img);
    };
    img.onerror = (err) => {
      URL.revokeObjectURL(url);
      reject(err);
    };
    img.src = url;
  });
  async function imageFileToWebp(file, maxSide = 1800, quality = 0.82) {
    try {
      const img = await fileToImage(file);
      const scale = Math.min(1, maxSide / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
      const width = Math.max(1, Math.round((img.naturalWidth || img.width) * scale));
      const height = Math.max(1, Math.round((img.naturalHeight || img.height) * scale));
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/webp", quality));
      if (!blob) throw new Error("WebP conversion failed.");
      return {
        dataUrl: await blobToDataUrl(blob),
        mime: "image/webp",
        size: blob.size,
        width,
        height
      };
    } catch {
      return {
        dataUrl: await blobToDataUrl(file),
        mime: file.type || "image/webp",
        size: file.size
      };
    }
  }
  var extFromMime = (mime) => ({
    "image/jpeg": ".jpg",
    "image/png": ".png",
    "image/webp": ".webp",
    "image/gif": ".gif",
    "audio/webm": ".webm",
    "audio/mp4": ".m4a",
    "audio/mpeg": ".mp3",
    "audio/wav": ".wav"
  })[(mime || "").split(";")[0]] || "";
  var slugFromText = (text) => (text || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 38);
  var titleFromText = (text) => {
    const clean = (text || "").replace(/\s+/g, " ").trim();
    if (!clean) return "";
    return clean.length > 56 ? `${clean.slice(0, 53)}...` : clean;
  };
  function makeAttachmentName(type, source, index, iso, mime) {
    const base = slugFromText(source) || `brandboard-${type}`;
    const stamp = new Date(iso || Date.now()).toISOString().slice(0, 10).replace(/-/g, "");
    return `${base}-${type}-${stamp}-${String(index).padStart(2, "0")}${extFromMime(mime)}`;
  }
  var fmtDur = (ms) => {
    const total = Math.max(0, Math.round((ms || 0) / 1e3));
    const m2 = Math.floor(total / 60);
    const s11 = String(total % 60).padStart(2, "0");
    return `${m2}:${s11}`;
  };
  var fmtSize = (bytes) => {
    if (!bytes) return "";
    if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };
  var db = {
    async notes() {
      try {
        const r3 = await window.storage.get("bb-notes", true);
        return r3 ? JSON.parse(r3.value) : [];
      } catch {
        return [];
      }
    },
    async sNotes(n6) {
      try {
        await window.storage.set("bb-notes", JSON.stringify(n6), true);
      } catch {
      }
    },
    async likes() {
      try {
        const r3 = await window.storage.get("bb-likes", true);
        return r3 ? JSON.parse(r3.value) : {};
      } catch {
        return {};
      }
    },
    async sLikes(l) {
      try {
        await window.storage.set("bb-likes", JSON.stringify(l), true);
      } catch {
      }
    },
    async get(k) {
      try {
        const r3 = await window.storage.get(`bb-${k}`, false);
        return r3 ? JSON.parse(r3.value) : null;
      } catch {
        return null;
      }
    },
    async set(k, v) {
      try {
        await window.storage.set(`bb-${k}`, JSON.stringify(v), false);
      } catch {
      }
    }
  };
  function TagPill({ tag, sm }) {
    if (!tag) return null;
    const c5 = TAG_C[tag] || TAG_C["Other"];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
      display: "inline-flex",
      alignItems: "center",
      padding: sm ? "3px 8px" : "4px 10px",
      borderRadius: 999,
      fontSize: sm ? 9 : 10,
      background: c5.bg,
      color: c5.text,
      border: `1px solid ${c5.bd}`,
      fontFamily: MONO,
      fontWeight: 500,
      letterSpacing: "0",
      whiteSpace: "nowrap"
    }, children: tag });
  }
  function AttachmentStrip({ attachments }) {
    const list = attachments || [];
    if (!list.length) return null;
    const images = list.filter((a24) => a24.type === "image");
    const voices = list.filter((a24) => a24.type === "voice");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-strip", onClick: (e43) => e43.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageCollage, { images }),
      voices.map((a24) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "att-pill", title: a24.transcript || a24.name, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, { size: 12, weight: "bold" }),
        fmtDur(a24.durationMs)
      ] }, a24.id))
    ] });
  }
  function ImageCollage({ images, detail = false }) {
    const list = (images || []).slice(0, 10);
    if (!list.length) return null;
    const visible = list.slice(0, Math.min(list.length, 5));
    const extra = list.length - visible.length;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `img-collage count-${Math.min(list.length, 5)}${detail ? " detail" : ""}`, children: visible.map((image, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "img-cell", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: image.dataUrl, alt: image.name || "Idea attachment" }),
      extra > 0 && i === visible.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "img-extra", children: [
        "+",
        extra
      ] })
    ] }, image.id || image.name || i)) });
  }
  function AttachmentDetailList({ attachments }) {
    const list = attachments || [];
    if (!list.length) return null;
    const images = list.filter((a24) => a24.type === "image");
    const voices = list.filter((a24) => a24.type === "voice");
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-detail-list", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageCollage, { images, detail: true }),
      voices.map((a24) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-detail", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-voice", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", { controls: true, src: a24.dataUrl }),
          a24.transcript && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "att-transcript", children: a24.transcript })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-caption", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a24.name }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: fmtDur(a24.durationMs) })
        ] })
      ] }, a24.id))
    ] });
  }
  function UserAvatar({ name, color, size = 24 }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "span",
      {
        className: "user-avatar",
        style: { width: size, height: size, background: color || "var(--accent)", fontSize: Math.max(8, Math.round(size * 0.36)) },
        children: (name || "?").charAt(0).toUpperCase()
      }
    );
  }
  function CommentSummary({ comments }) {
    const list = comments || [];
    if (!list.length) return null;
    const last = list[list.length - 1];
    const unique = [];
    list.forEach((comment) => {
      if (!unique.some((item) => item.authorId === comment.authorId)) unique.push(comment);
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "comment-summary", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "comment-avatars", children: unique.slice(0, 3).map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserAvatar, { name: comment.author, color: comment.authorColor, size: 25 }, comment.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "comment-count", children: [
        list.length,
        " repl",
        list.length === 1 ? "y" : "ies"
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "comment-last", children: replyStamp(last.createdAt) })
    ] });
  }
  function CommentsPanel({ comments, value, onChange, onSubmit, disabled }) {
    const list = comments || [];
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "comments-panel", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "comments-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s6, { size: 16 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
          list.length,
          " repl",
          list.length === 1 ? "y" : "ies"
        ] })
      ] }),
      list.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "comment-list", children: list.map((comment) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "comment-item", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserAvatar, { name: comment.author, color: comment.authorColor, size: 30 }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "comment-body", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "comment-meta", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: comment.author }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ago(comment.createdAt) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: comment.body })
        ] })
      ] }, comment.id)) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", { className: "comment-form", onSubmit, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "textarea",
          {
            value,
            onChange: (e43) => onChange(e43.target.value),
            placeholder: "Add a comment...",
            rows: 2
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "btn-p", type: "submit", disabled, children: "Comment" })
      ] })
    ] });
  }
  function StarterTemplates({
    templates,
    count,
    controls,
    identity,
    isLiked,
    likeCount,
    deletingId,
    onOpen,
    onComment,
    onLike,
    onEdit,
    onDeleteRequest,
    onDeleteConfirm,
    onDeleteCancel
  }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "template-board", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "template-intro", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Save your ideas." }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Because the best ideas never wait for an invitation." })
      ] }),
      controls,
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "template-meta", children: [
        count,
        " idea",
        count !== 1 ? "s" : ""
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "template-grid", children: templates.map((template, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        NoteCard,
        {
          note: template,
          idx: i,
          isRead: true,
          isOwn: template.authorId === identity?.id,
          isLiked: isLiked(template.id),
          likeCount: likeCount(template.id),
          isDeleting: deletingId === template.id,
          onClick: () => onOpen(template),
          onComment: () => onComment(template),
          onLike: () => onLike(template.id),
          onEdit: () => onEdit(template),
          onDeleteRequest: () => onDeleteRequest(template.id),
          onDeleteConfirm,
          onDeleteCancel
        },
        template.id
      )) })
    ] });
  }
  function NoteCard({ note, isRead, isOwn, isLiked, likeCount, isDeleting, onClick, onComment, onLike, onEdit, onDeleteRequest, onDeleteConfirm, onDeleteCancel, idx }) {
    const [hov, setHov] = (0, import_react2.useState)(false);
    const unread = !isRead && !isOwn;
    const comments = note.comments || [];
    const displayTag = note.tag || "Other";
    if (isDeleting) {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: {
        background: "var(--surface)",
        border: "1px solid var(--accent)",
        borderRadius: 12,
        padding: "24px 22px",
        breakInside: "avoid",
        marginBottom: 14,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 14,
        minHeight: 120,
        boxShadow: "0 18px 54px rgba(0,0,0,0.20)",
        animation: "cardIn 0.15s ease both"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: SANS, fontSize: 16, color: "var(--text)", fontWeight: 600, textAlign: "center" }, children: "Delete this idea?" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { fontFamily: MONO, fontSize: 11, color: "var(--muted)", textAlign: "center", lineHeight: 1.5 }, children: [
          '"',
          note.title.slice(0, 48),
          note.title.length > 48 ? "\u2026" : "",
          '"'
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", gap: 8 }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "btn-g", onClick: onDeleteCancel, style: { padding: "7px 14px", fontSize: 11 }, children: "Cancel" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: onDeleteConfirm, style: {
            padding: "7px 14px",
            borderRadius: 8,
            border: "none",
            background: "#ff5c5c",
            color: "#fff",
            fontFamily: MONO,
            fontSize: 11,
            fontWeight: 500,
            cursor: "pointer"
          }, children: "Delete" })
        ] })
      ] });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        onClick,
        onMouseEnter: () => setHov(true),
        onMouseLeave: () => setHov(false),
        style: {
          background: "var(--input-bg)",
          border: `1px solid ${unread ? "var(--accent-glow)" : "var(--border)"}`,
          borderRadius: 12,
          padding: "18px",
          cursor: "pointer",
          transition: "background 0.16s ease, border-color 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease",
          transform: hov ? "translateY(-1px)" : "none",
          boxShadow: hov ? "0 8px 18px rgba(0,0,0,0.08)" : unread ? "inset 0 0 0 1px var(--accent-glow)" : "none",
          breakInside: "avoid",
          marginBottom: 14,
          position: "relative",
          animation: `cardIn 0.3s ease ${(idx || 0) * 0.04}s both`
        },
        children: [
          isOwn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `card-tools${hov ? " show" : ""}`, onClick: (e43) => e43.stopPropagation(), children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: onEdit, type: "button", title: "Edit idea", "aria-label": "Edit idea", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a23, { size: 14, weight: "bold" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: onDeleteRequest, type: "button", title: "Delete idea", "aria-label": "Delete idea", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n5, { size: 14, weight: "bold" }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 8, minWidth: 0 }, children: [
              unread && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: {
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
                boxShadow: "0 0 7px var(--accent-glow)"
              } }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { style: {
                fontFamily: SANS,
                fontSize: 17,
                fontWeight: 600,
                lineHeight: 1.28,
                color: "var(--text)",
                margin: 0,
                letterSpacing: "0",
                minWidth: 0,
                overflowWrap: "anywhere"
              }, children: note.title || "Untitled" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagPill, { tag: displayTag, sm: true })
          ] }),
          note.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { style: {
            fontFamily: SANS,
            fontSize: 13,
            color: "var(--muted)",
            lineHeight: 1.58,
            margin: "0 0 14px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden"
          }, children: note.body }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttachmentStrip, { attachments: note.attachments }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CommentSummary, { comments }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", gap: 7 }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: {
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: note.authorColor || "var(--accent)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 8,
                fontWeight: 700,
                color: "#0e0e13",
                fontFamily: MONO,
                flexShrink: 0
              }, children: note.author?.charAt(0).toUpperCase() }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontFamily: MONO, fontSize: 11, color: "var(--muted)", fontWeight: 500 }, children: note.author }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { style: { fontFamily: MONO, fontSize: 10, color: "var(--dim)" }, children: [
                "\xB7 ",
                ago(note.createdAt)
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "card-actions", onClick: (e43) => e43.stopPropagation(), children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "button",
                {
                  className: "card-action-btn card-comment-btn",
                  onClick: () => onComment?.(),
                  title: "Comment",
                  "aria-label": "Comment",
                  type: "button",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s6, { size: 15 }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: comments.length })
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                "button",
                {
                  className: `card-action-btn${isLiked ? " liked" : ""}`,
                  onClick: () => onLike(),
                  title: isLiked ? "Unlike" : "Like",
                  "aria-label": isLiked ? "Unlike" : "Like",
                  type: "button",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { size: 15, weight: isLiked ? "fill" : "regular" }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: likeCount })
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    );
  }
  function NewNoteModal({ onClose, onSave, identity, initialNote, mode = "create" }) {
    const [title, setTitle] = (0, import_react2.useState)(initialNote?.title || "");
    const [body, setBody] = (0, import_react2.useState)(initialNote?.body || "");
    const [tag, setTag] = (0, import_react2.useState)(initialNote?.tag || null);
    const [isPrivate, setIsPrivate] = (0, import_react2.useState)(!!initialNote?.isPrivate);
    const [attachments, setAttachments] = (0, import_react2.useState)(initialNote?.attachments || []);
    const [isRecording, setIsRecording] = (0, import_react2.useState)(false);
    const [recordingMs, setRecordingMs] = (0, import_react2.useState)(0);
    const [liveTranscript, setLiveTranscript] = (0, import_react2.useState)("");
    const [recError, setRecError] = (0, import_react2.useState)("");
    const ref = (0, import_react2.useRef)(null);
    const fileRef = (0, import_react2.useRef)(null);
    const recorderRef = (0, import_react2.useRef)(null);
    const streamRef = (0, import_react2.useRef)(null);
    const chunksRef = (0, import_react2.useRef)([]);
    const timerRef = (0, import_react2.useRef)(null);
    const startedRef = (0, import_react2.useRef)(0);
    const transcriptRef = (0, import_react2.useRef)("");
    const mountedRef = (0, import_react2.useRef)(true);
    const discardRecordingRef = (0, import_react2.useRef)(false);
    (0, import_react2.useEffect)(() => {
      ref.current?.focus();
    }, []);
    (0, import_react2.useEffect)(() => () => {
      mountedRef.current = false;
      clearInterval(timerRef.current);
      try {
        recorderRef.current?.state === "recording" && recorderRef.current.stop();
      } catch {
      }
      try {
        streamRef.current?.getTracks().forEach((t7) => t7.stop());
      } catch {
      }
    }, []);
    const canSave = title.trim().length > 0 || body.trim().length > 0 || attachments.length > 0;
    const addImages = async (e43) => {
      const existingCount = attachments.filter((a24) => a24.type === "image").length;
      const files = [...e43.target.files || []].filter((f2) => f2.type.startsWith("image/")).slice(0, Math.max(0, 10 - existingCount));
      if (!files.length) return;
      const createdAt = (/* @__PURE__ */ new Date()).toISOString();
      const items = await Promise.all(files.map(async (file, i) => {
        const webp = await imageFileToWebp(file);
        return {
          id: gid(),
          type: "image",
          mime: webp.mime,
          size: webp.size,
          width: webp.width,
          height: webp.height,
          dataUrl: webp.dataUrl,
          name: makeAttachmentName("image", title || body || file.name, existingCount + i + 1, createdAt, webp.mime),
          createdAt,
          autoNamed: true
        };
      }));
      setAttachments((p2) => [...p2, ...items]);
      e43.target.value = "";
    };
    const removeAttachment = (id) => setAttachments((p2) => p2.filter((a24) => a24.id !== id));
    const startTranscript = () => {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) return null;
      const rec = new SpeechRecognition();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = navigator.language || "en-US";
      rec.onresult = (e43) => {
        let next = "";
        for (let i = 0; i < e43.results.length; i++) next += e43.results[i][0].transcript;
        next = next.replace(/\s+/g, " ").trim();
        transcriptRef.current = next;
        setLiveTranscript(next);
      };
      rec.onerror = () => {
      };
      try {
        rec.start();
      } catch {
      }
      return rec;
    };
    const stopRecording = () => {
      setIsRecording(false);
      clearInterval(timerRef.current);
      timerRef.current = null;
      try {
        recorderRef.current?.state === "recording" && recorderRef.current.stop();
      } catch {
      }
    };
    const cancelRecording = () => {
      discardRecordingRef.current = true;
      stopRecording();
    };
    const startRecording = async () => {
      setRecError("");
      if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
        setRecError("Voice recording is not available in this browser.");
        return;
      }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const recorder = new MediaRecorder(stream);
        const recognition = startTranscript();
        chunksRef.current = [];
        transcriptRef.current = "";
        discardRecordingRef.current = false;
        setLiveTranscript("");
        streamRef.current = stream;
        recorderRef.current = recorder;
        startedRef.current = Date.now();
        setRecordingMs(0);
        recorder.ondataavailable = (e43) => {
          if (e43.data?.size) chunksRef.current.push(e43.data);
        };
        recorder.onstop = async () => {
          clearInterval(timerRef.current);
          try {
            recognition?.stop();
          } catch {
          }
          try {
            stream.getTracks().forEach((t7) => t7.stop());
          } catch {
          }
          if (discardRecordingRef.current) {
            if (mountedRef.current) setLiveTranscript("");
            return;
          }
          const mime = recorder.mimeType || "audio/webm";
          const blob = new Blob(chunksRef.current, { type: mime });
          if (!blob.size) return;
          const durationMs = Date.now() - startedRef.current;
          const transcript = transcriptRef.current.trim();
          const createdAt = (/* @__PURE__ */ new Date()).toISOString();
          const dataUrl = await blobToDataUrl(blob);
          if (!mountedRef.current) return;
          setAttachments((p2) => {
            const idx = p2.filter((a24) => a24.type === "voice").length + 1;
            return [...p2, {
              id: gid(),
              type: "voice",
              mime,
              size: blob.size,
              dataUrl,
              durationMs,
              transcript,
              createdAt,
              autoNamed: true,
              name: makeAttachmentName("voice", transcript || title || body || "voice message", idx, createdAt, mime)
            }];
          });
          if (transcript) {
            setBody((p2) => p2.trim() ? p2 : transcript);
            setTitle((p2) => p2.trim() ? p2 : titleFromText(transcript));
          }
        };
        recorder.start(250);
        timerRef.current = setInterval(() => setRecordingMs(Date.now() - startedRef.current), 250);
        setIsRecording(true);
      } catch (err) {
        setRecError(err?.message || "Could not start the microphone.");
        try {
          streamRef.current?.getTracks().forEach((t7) => t7.stop());
        } catch {
        }
      }
    };
    const isEditing = mode === "edit";
    const save = () => canSave && onSave({
      ...initialNote,
      title: title.trim() || "Untitled",
      body: body.trim(),
      tag: tag || "Other",
      attachments,
      isPrivate
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-overlay", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "m-box", onClick: (e43) => e43.stopPropagation(), style: { maxWidth: 520 }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { fontFamily: SANS, fontSize: 14, fontWeight: 500, color: "var(--muted)" }, children: isEditing ? "Edit idea" : "New idea" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: onClose, className: "close-btn", "aria-label": "Close", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n5, { size: 16, weight: "bold" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "idea-tags", children: TAGS.map((t7) => {
        const c5 = TAG_C[t7];
        const sel = tag === t7;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            className: `idea-tag${sel ? " on" : ""}`,
            onClick: () => setTag(sel ? null : t7),
            style: sel ? { background: c5.bg, color: c5.text, borderColor: c5.bd } : {},
            type: "button",
            children: t7
          },
          t7
        );
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          ref,
          className: "m-in",
          placeholder: "What's the idea?",
          value: title,
          onChange: (e43) => setTitle(e43.target.value),
          onKeyDown: (e43) => {
            if (e43.key === "Enter" && e43.metaKey && canSave) save();
          },
          style: { fontFamily: SANS, fontSize: 20, fontWeight: 600 }
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "textarea",
        {
          className: "m-ta",
          rows: 4,
          placeholder: "Describe it\u2026 optional, but future-you will thank present-you",
          value: body,
          onChange: (e43) => setBody(e43.target.value)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-box", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { ref: fileRef, type: "file", accept: "image/*", multiple: true, onChange: addImages, style: { display: "none" } }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "attach-plus", onClick: () => fileRef.current?.click(), type: "button", "aria-label": "Add image", title: "Add image", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(I, { size: 20, weight: "bold" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Add image" })
          ] }),
          !isRecording ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "voice-trigger", onClick: startRecording, type: "button", "aria-label": "Record voice message", title: "Record voice message", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(m, { size: 20, weight: "bold" }) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "voice-recorder", role: "status", "aria-label": `Recording voice message ${fmtDur(recordingMs)}`, children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "voice-cancel", onClick: cancelRecording, type: "button", "aria-label": "Cancel recording", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n5, { size: 16, weight: "bold" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "voice-wave", "aria-hidden": "true", children: [0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { animationDelay: `${i * 0.08}s` } }, i)) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "voice-time", children: fmtDur(recordingMs) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "voice-finish", onClick: stopRecording, type: "button", "aria-label": "Save voice message", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { size: 16, weight: "bold" }) })
          ] })
        ] }),
        (liveTranscript || recError || attachments.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-workspace", children: [
          liveTranscript && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "att-transcript", children: liveTranscript }),
          recError && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "att-error", children: recError }),
          attachments.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "att-list", children: attachments.map((a24) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-row", style: a24.type === "voice" ? { gridTemplateColumns: "130px minmax(0,1fr) 24px" } : {}, children: [
            a24.type === "image" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", { src: a24.dataUrl, alt: a24.name }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", { controls: true, src: a24.dataUrl }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "att-row-meta", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a24.name }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: a24.type === "voice" ? `${fmtDur(a24.durationMs)}${a24.transcript ? " \xB7 transcript saved" : ""}` : fmtSize(a24.size) })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "att-remove", onClick: () => removeAttachment(a24.id), type: "button", "aria-label": "Remove attachment", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n5, { size: 14, weight: "bold" }) })
          ] }, a24.id)) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "idea-footer", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: "private-check", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "input",
            {
              type: "radio",
              checked: isPrivate,
              onClick: () => setIsPrivate((v) => !v),
              readOnly: true
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Save as private" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "btn-p", disabled: !canSave || isRecording, onClick: save, children: isEditing ? "Save changes" : "Share" })
      ] })
    ] }) });
  }
  function IdeaDetailPage({ note, isOwn, isLiked, likeCount, onBack, onLike, onAddComment, onEdit, onDeleteRequest }) {
    const [comment, setComment] = (0, import_react2.useState)("");
    const submitComment = (e43) => {
      e43.preventDefault();
      const body = comment.trim();
      if (!body) return;
      onAddComment(body);
      setComment("");
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { className: "idea-page", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "idea-page-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "back-btn", onClick: onBack, type: "button", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { size: 18 }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Back" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "detail-actions", children: isOwn && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: onEdit, className: "close-btn", "aria-label": "Edit idea", title: "Edit idea", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a23, { size: 16, weight: "bold" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: onDeleteRequest, className: "close-btn danger", "aria-label": "Delete idea", title: "Delete idea", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n5, { size: 16, weight: "bold" }) })
        ] }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { className: "idea-page-card", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "idea-page-topline", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: note.title || "Untitled" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagPill, { tag: note.tag || "Other", sm: true })
        ] }),
        note.body && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "idea-page-body", children: note.body }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttachmentDetailList, { attachments: note.attachments }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "idea-page-meta", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "idea-page-author", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserAvatar, { name: note.author, color: note.authorColor, size: 34 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: note.author }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
                fd(note.createdAt),
                " at ",
                ft(note.createdAt)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
            "button",
            {
              onClick: onLike,
              className: `detail-like${isLiked ? " liked" : ""}`,
              type: "button",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { size: 15, weight: isLiked ? "fill" : "regular" }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: likeCount })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          CommentsPanel,
          {
            comments: note.comments,
            value: comment,
            onChange: setComment,
            onSubmit: submitComment,
            disabled: !comment.trim()
          }
        )
      ] })
    ] });
  }
  function CommentDialog({ note, onClose, onAddComment }) {
    const [comment, setComment] = (0, import_react2.useState)("");
    const submitComment = (e43) => {
      e43.preventDefault();
      const body = comment.trim();
      if (!body) return;
      onAddComment(body);
      setComment("");
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-overlay", onClick: onClose, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "m-box comment-dialog", onClick: (e43) => e43.stopPropagation(), children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "dialog-head", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "dialog-kicker", children: "Comments" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: note.title || "Untitled" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: onClose, className: "close-btn", "aria-label": "Close", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n5, { size: 16, weight: "bold" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        CommentsPanel,
        {
          comments: note.comments,
          value: comment,
          onChange: setComment,
          onSubmit: submitComment,
          disabled: !comment.trim()
        }
      )
    ] }) });
  }
  function NotifBanner({ onDismiss, onEnable }) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: {
      background: "var(--accent-bg)",
      border: "1px solid var(--accent-glow)",
      borderRadius: 12,
      padding: "12px 16px",
      marginBottom: 18,
      display: "flex",
      alignItems: "center",
      gap: 12,
      animation: "cardIn 0.3s ease both"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { flex: 1 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: SANS, fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 2 }, children: "Get notified when teammates post ideas" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { fontFamily: SANS, fontSize: 13, color: "var(--muted)" }, children: "Enable browser notifications to catch new ideas even when the tab is in the background." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "btn-p", onClick: onEnable, style: { flexShrink: 0, fontSize: 11, padding: "7px 14px" }, children: "Enable" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: onDismiss, style: { background: "none", border: "none", color: "var(--muted)", cursor: "pointer", padding: 0, flexShrink: 0 }, "aria-label": "Dismiss", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n5, { size: 16, weight: "bold" }) })
    ] });
  }
  function LoginModal({ onLogin, mode = "signin", onBack }) {
    const [email, setEmail] = (0, import_react2.useState)("");
    const [error, setError] = (0, import_react2.useState)("");
    const inputRef = (0, import_react2.useRef)(null);
    (0, import_react2.useEffect)(() => {
      inputRef.current?.focus();
    }, []);
    const isAdding = mode === "add";
    const submit = (e43) => {
      e43?.preventDefault();
      const clean = normalizeEmail(email);
      if (!isAltyEmail(clean)) {
        setError("Enter an @alty.co email.");
        return;
      }
      setError("");
      onLogin(makeTeamIdentity(clean));
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "m-overlay", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", { className: "m-box login-box", onSubmit: submit, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "login-head", children: [
        isAdding && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "login-back", onClick: onBack, type: "button", "aria-label": "Back", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s, { size: 17 }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "login-brand", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "login-mark", children: "bb" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "login-title", children: "BrandBoard" })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "login-copy", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: isAdding ? "Add another account" : "Sign in to your board" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: isAdding ? "Sign in with another Alty email, then choose the active account from the profile menu." : "Collect the useful signal while it is still fresh." })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "input",
        {
          ref: inputRef,
          className: "m-in login-input",
          type: "email",
          inputMode: "email",
          autoComplete: "email",
          placeholder: "name@alty.co",
          value: email,
          onChange: (e43) => {
            setEmail(e43.target.value);
            setError("");
          }
        }
      ),
      error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "login-error", children: error }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "btn-p login-submit", type: "submit", children: "Sign In" })
    ] }) });
  }
  function AccountMenu({ identity, accounts, onAdd, onSwitch, onSignOut }) {
    const hasMultiple = accounts.length > 1;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "account-menu", onClick: (e43) => e43.stopPropagation(), children: [
      hasMultiple && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "account-list", children: accounts.map((account) => {
        const active = account.id === identity.id;
        return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
          "button",
          {
            className: `account-row${active ? " current" : ""}`,
            onClick: () => onSwitch(account),
            type: "button",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "account-avatar", style: { background: account.color }, children: account.name.charAt(0).toUpperCase() }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "account-copy", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: account.name }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: account.email })
              ] }),
              active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s7, { className: "account-check", size: 19, weight: "fill" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s8, { className: "account-check", size: 19 })
            ]
          },
          account.id
        );
      }) }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "account-action", type: "button", onClick: onAdd, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n4, { size: 16 }),
        "Add another account"
      ] }),
      hasMultiple && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "account-action muted", type: "button", onClick: onSignOut, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c4, { size: 16 }),
        "Sign out of this account"
      ] })
    ] });
  }
  function DatePickerDialog({ selectedDate, month, onMonthChange, onSelect, onClear, onClose }) {
    const days = monthDays(month);
    const today = ymd(/* @__PURE__ */ new Date());
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "date-picker-layer", onClick: onClose, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "date-scrim" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "date-popover", onClick: (e43) => e43.stopPropagation(), children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "date-head", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: monthLabel(month) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "date-nav", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: () => onMonthChange(addMonths(month, -1)), "aria-label": "Previous month", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s4, { size: 16, weight: "bold" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: () => onMonthChange(addMonths(month, 1)), "aria-label": "Next month", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s5, { size: 16, weight: "bold" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "date-weekdays", children: ["M", "T", "W", "T", "F", "S", "S"].map((day, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: day }, `${day}-${i}`)) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "date-grid", children: days.map((day) => {
          const value = ymd(day);
          const selected = value === selectedDate;
          const muted = !sameMonth(day, month);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              className: `date-day${selected ? " selected" : ""}${muted ? " muted" : ""}${value === today ? " today" : ""}`,
              onClick: () => onSelect(value),
              type: "button",
              children: day.getDate()
            },
            value
          );
        }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "date-actions", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: onClear, children: "Clear" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { type: "button", onClick: () => onSelect(today), children: "Today" })
        ] })
      ] })
    ] });
  }
  var CSS = `
@font-face {
  font-family:'Aeonic Pro';
  src:url('fonts/AeonikPro-Regular.otf') format('opentype');
  font-weight:400;
  font-style:normal;
}
@font-face {
  font-family:'Aeonic Pro';
  src:url('fonts/AeonikPro-Medium.otf') format('opentype');
  font-weight:500;
  font-style:normal;
}
@font-face {
  font-family:'Aeonic Pro';
  src:url('fonts/AeonikPro-Bold.otf') format('opentype');
  font-weight:700;
  font-style:normal;
}
@font-face {
  font-family:'Aeonic Pro';
  src:url('fonts/AeonikPro-Light.otf') format('opentype');
  font-weight:300;
  font-style:normal;
}
*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
:root {
  --bg:#0e0e13; --surface:#151519; --sh:#1a1a1f; --border:rgba(255,255,255,0.15);
  --text:rgba(255,255,255,0.96); --muted:rgba(255,255,255,0.64); --dim:rgba(255,255,255,0.38);
  --accent:#ff461e; --accent-bg:rgba(255,70,30,0.13); --accent-glow:rgba(255,70,30,0.28);
  --input-bg:#111116; --modal-bg:rgba(14,14,19,0.74);
}
html { background:var(--bg); }
body {
  background:var(--bg); color:var(--text); min-height:100vh;
  font-family:'Aeonic Pro','Aeonik Pro',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  font-size:15px; line-height:1.55;
}
button, input, textarea, select { font:inherit; }
button { -webkit-tap-highlight-color:transparent; }
@keyframes cardIn  { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
@keyframes slideUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }

.app { max-width:1120px; margin:0 auto; padding:0 24px 120px; }

.hdr {
  display:flex; align-items:center; justify-content:space-between;
  padding:18px 0 16px; border-bottom:1px solid var(--border); margin-bottom:18px;
  position:sticky; top:0; z-index:50; background:var(--bg);
}
.hdr-l { display:flex; align-items:center; gap:12px; min-width:0; }
.hdr-r { display:flex; align-items:center; gap:8px; }
.logo  { display:flex; align-items:center; gap:10px; min-width:0; }
.logo-ico {
  width:30px; height:30px; border-radius:8px; background:var(--accent);
  color:#fff; display:flex; align-items:center; justify-content:center;
  font-size:10px; font-weight:700; letter-spacing:0;
}
.logo-txt {
  display:block; font-size:15px; font-weight:600; line-height:1.1;
  letter-spacing:0; color:var(--text);
}
.logo-sub {
  display:block; font-size:11px; color:var(--dim);
  letter-spacing:0; margin-top:3px;
}

.icon-btn {
  background:var(--input-bg); border:1px solid var(--border); color:var(--muted);
  width:34px; height:34px; border-radius:8px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  font-size:13px; transition:all 0.15s; position:relative;
}
.icon-btn:hover { border-color:var(--accent-glow); color:var(--text); background:var(--sh); }
.icon-btn.on    { border-color:var(--accent); color:var(--accent); background:var(--accent-bg); }

.ndot {
  position:absolute; top:-5px; right:-5px;
  background:var(--accent); color:#fff;
  min-width:16px; height:16px; padding:0 4px; border-radius:999px;
  font-size:9px; font-weight:500; display:flex; align-items:center; justify-content:center;
}

.av {
  width:34px; height:34px; border-radius:50%;
  border:1px solid var(--border); font-size:12px; font-weight:700;
  color:#0e0e13; cursor:pointer; padding:0;
  display:flex; align-items:center; justify-content:center;
}

.filters {
  display:block;
  border:0; background:transparent;
  padding:0 0 12px; margin-bottom:18px;
}
.sw {
  display:flex; align-items:center; gap:10px; min-width:0;
  background:transparent; border:0; border-bottom:1px solid var(--border);
  border-radius:0; padding:0; min-height:40px; position:relative;
  transition:border-color 0.15s;
}
.sw:focus-within { border-color:var(--accent); }
.s-ico { font-size:14px; color:var(--dim); flex-shrink:0; }
.s-in  {
  flex:1; min-width:0; background:none; border:none; outline:none;
  padding:10px 0; font-size:14px; color:var(--text); caret-color:var(--accent);
}
.s-in::placeholder { color:var(--dim); }
.clr-btn {
  width:22px; height:22px; border-radius:6px; background:transparent; border:none;
  color:var(--muted); cursor:pointer; font-size:18px; display:flex; align-items:center; justify-content:center;
}
.clr-btn:hover { color:var(--text); background:var(--sh); }
.date-trigger {
  width:30px; height:30px; border:0; border-radius:8px; background:transparent;
  color:var(--muted); cursor:pointer; display:flex; align-items:center; justify-content:center;
}
.date-trigger:hover,
.date-trigger.on { color:var(--accent); background:transparent; }
.feed-controls {
  border:0; background:transparent;
  padding:8px 0 18px; margin:0 0 10px;
  display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:start; gap:18px;
}
.mfs  { display:flex; align-items:center; justify-content:flex-end; gap:10px; flex-shrink:0; }
.tcs  { display:flex; align-items:center; gap:6px; flex-wrap:wrap; justify-content:flex-start; min-width:0; }

.chip {
  min-height:30px; padding:5px 10px; border-radius:999px; border:1px solid var(--border);
  background:transparent; color:var(--muted);
  font-size:12px; font-weight:500; cursor:pointer; transition:all 0.15s; letter-spacing:0;
}
.chip:hover { border-color:var(--muted); color:var(--text); background:var(--input-bg); }
.chip.on    { background:var(--accent-bg); border-color:var(--accent); color:var(--accent); }

.feed-filter-wrap { position:relative; width:max-content; min-width:188px; justify-self:end; }
.feed-filter-trigger {
  width:100%; min-height:36px; border:0; border-bottom:1px solid var(--border);
  background:transparent; color:var(--muted); cursor:pointer;
  display:flex; align-items:center; justify-content:space-between; gap:14px;
  padding:5px 0; font-size:13px; font-weight:500; transition:all 0.15s;
}
.feed-filter-trigger:hover,
.feed-filter-trigger.open { color:var(--text); border-color:var(--accent); }
.feed-filter-trigger svg { transition:transform 0.15s; }
.feed-filter-trigger.open svg { transform:rotate(180deg); }
.feed-filter-menu {
  position:absolute; top:calc(100% + 8px); right:0; width:max-content; min-width:100%; z-index:85;
  background:#fff; border:1px solid var(--border); border-radius:12px;
  padding:6px; box-shadow:0 18px 50px rgba(0,0,0,0.18);
  animation:slideUp 0.16s ease;
}
.feed-filter-menu button {
  width:100%; border:0; border-radius:8px; background:transparent;
  color:var(--muted); text-align:left; padding:9px 9px;
  display:flex; align-items:center; gap:8px; cursor:pointer;
  font-size:13px; font-weight:500;
}
.feed-filter-menu button svg { opacity:0; color:var(--accent); flex-shrink:0; }
.feed-filter-menu button.selected { color:var(--text); }
.feed-filter-menu button.selected svg { opacity:1; }
.feed-filter-menu button:not(.selected) { padding-left:32px; }
.feed-filter-menu button:not(.selected) svg { display:none; }
.feed-filter-menu button:hover { background:var(--input-bg); color:var(--text); }

.date-picker-layer {
  position:absolute; top:calc(100% + 10px); right:0; z-index:120;
}
.date-scrim { display:none; }
.date-popover {
  width:294px; background:#fff; border:1px solid var(--border);
  border-radius:14px; padding:14px; box-shadow:0 22px 58px rgba(0,0,0,0.22);
  animation:slideUp 0.18s ease;
}
.date-head {
  display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:14px;
}
.date-head strong { font-size:14px; font-weight:600; color:var(--text); }
.date-nav { display:flex; align-items:center; gap:6px; }
.date-nav button {
  width:30px; height:30px; border-radius:8px; border:1px solid var(--border);
  background:#fff; color:var(--muted); cursor:pointer;
  display:flex; align-items:center; justify-content:center;
}
.date-nav button:hover { color:var(--text); border-color:var(--muted); }
.date-weekdays,
.date-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:4px; }
.date-weekdays { margin-bottom:5px; }
.date-weekdays span {
  height:26px; display:flex; align-items:center; justify-content:center;
  color:var(--dim); font-size:11px; font-weight:500;
}
.date-day {
  height:34px; border:1px solid transparent; border-radius:10px;
  background:transparent; color:var(--text); cursor:pointer;
  font-size:13px; font-weight:500; transition:all 0.15s;
}
.date-day:hover { background:var(--surface); border-color:var(--border); }
.date-day.muted { color:var(--dim); }
.date-day.today { border-color:var(--accent-glow); color:var(--accent); }
.date-day.selected {
  background:var(--accent); border-color:var(--accent); color:#fff;
}
.date-actions {
  display:flex; align-items:center; justify-content:space-between; margin-top:14px;
  border-top:1px solid var(--border); padding-top:12px;
}
.date-actions button {
  border:0; background:transparent; color:var(--accent); cursor:pointer;
  font-size:13px; font-weight:500; padding:5px 0;
}

.meta  { display:flex; align-items:center; gap:10px; margin:0 0 14px; min-height:26px; flex-wrap:wrap; }
.ct    { font-size:13px; color:var(--dim); }
.ur-btn {
  padding:4px 9px; border-radius:999px; background:var(--accent-bg);
  color:var(--accent); font-size:12px;
  font-weight:500; border:1px solid var(--accent-glow); cursor:pointer; transition:opacity 0.15s;
}
.ur-btn:hover { opacity:0.8; }
.liked-meta {
  display:inline-flex; align-items:center; gap:5px;
  font-size:12px; color:var(--accent);
}
.user-avatar {
  border-radius:8px; color:#0e0e13; display:inline-flex; align-items:center; justify-content:center;
  font-weight:700; flex-shrink:0; border:1px solid color-mix(in srgb,var(--border) 68%,transparent);
}
.card-tools {
  position:absolute; top:10px; right:10px; z-index:3;
  display:flex; align-items:center; gap:5px;
  opacity:0; transform:translateY(-2px); transition:all 0.14s;
}
.card-tools.show,
.card-tools:focus-within { opacity:1; transform:none; }
.card-tools button {
  width:27px; height:27px; border-radius:8px; border:1px solid var(--border);
  background:var(--input-bg); color:var(--muted); cursor:pointer;
  display:flex; align-items:center; justify-content:center; transition:all 0.14s;
}
.card-tools button:hover { border-color:var(--muted); color:var(--text); }
.card-tools button:last-child:hover { border-color:#ff5c5c; color:#ff5c5c; }
.card-actions {
  display:flex; align-items:center; gap:8px; flex-shrink:0;
}
.card-action-btn {
  background:transparent; border:0; color:var(--dim); cursor:pointer;
  display:inline-flex; align-items:center; gap:4px; padding:4px 2px;
  font-size:12px; line-height:1; border-radius:8px; transition:color 0.14s, transform 0.14s, background 0.14s;
}
.card-action-btn:hover { color:var(--accent); transform:translateY(-1px); }
.card-action-btn.liked { color:var(--accent); }
.card-action-btn span { font-size:11px; color:currentColor; }
.comment-summary {
  display:flex; align-items:center; gap:8px; margin:4px 0 14px; min-width:0;
}
.comment-avatars { display:flex; align-items:center; flex-shrink:0; }
.comment-avatars .user-avatar { margin-right:-6px; box-shadow:0 0 0 2px var(--surface); }
.comment-count {
  color:#0b66b3; font-size:13px; font-weight:600; white-space:nowrap;
}
.comment-last {
  color:var(--muted); font-size:12px; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.detail-actions {
  display:flex; align-items:center; gap:7px; margin-left:8px; flex-shrink:0;
}
.close-btn.danger:hover { color:#ff5c5c; border-color:#ff5c5c; }
.idea-page {
  max-width:760px; margin:0 auto; padding:8px 0 60px;
}
.idea-page-head {
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  margin:0 0 14px;
}
.back-btn {
  border:0; background:transparent; color:var(--muted); cursor:pointer;
  display:inline-flex; align-items:center; gap:8px; padding:8px 0;
  font-size:14px; font-weight:500;
}
.back-btn:hover { color:var(--text); }
.idea-page-card {
  background:#fff; border:1px solid var(--border); border-radius:14px;
  padding:26px; box-shadow:none;
}
.idea-page-topline {
  display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:16px;
}
.idea-page-topline h1 {
  font-size:28px; line-height:1.16; font-weight:600; color:var(--text); margin:0; letter-spacing:0;
}
.idea-page-body {
  color:var(--muted); font-size:16px; line-height:1.65; margin:0 0 22px; white-space:pre-wrap;
}
.idea-page-meta {
  display:flex; align-items:center; justify-content:space-between; gap:16px;
  padding-top:18px; border-top:1px solid var(--border);
}
.idea-page-author {
  display:flex; align-items:center; gap:10px; min-width:0;
}
.idea-page-author div div {
  font-size:13px; font-weight:600; color:var(--text);
}
.idea-page-author span {
  display:block; color:var(--muted); font-size:12px; margin-top:2px;
}
.detail-like {
  background:transparent; border:1px solid var(--border); border-radius:999px; cursor:pointer;
  padding:8px 13px; display:inline-flex; align-items:center; gap:6px;
  color:var(--muted); font-size:13px; transition:all 0.15s;
}
.detail-like:hover,
.detail-like.liked { border-color:var(--accent-glow); color:var(--accent); background:var(--accent-bg); }
.detail-like span { font-size:12px; color:currentColor; }
.comments-panel {
  margin-top:22px; padding-top:18px; border-top:1px solid var(--border);
}
.comments-head {
  display:flex; align-items:center; gap:7px; color:var(--muted);
  font-size:13px; font-weight:600; margin-bottom:14px;
}
.comment-list { display:flex; flex-direction:column; gap:14px; margin-bottom:14px; }
.comment-item { display:grid; grid-template-columns:30px minmax(0,1fr); gap:10px; align-items:start; }
.comment-body {
  background:#fff; border:0; border-bottom:1px solid var(--border); border-radius:0;
  padding:0 0 10px; min-width:0;
}
.comment-meta { display:flex; align-items:center; gap:8px; margin-bottom:4px; min-width:0; }
.comment-meta strong {
  color:var(--text); font-size:12px; font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.comment-meta span { color:var(--dim); font-size:11px; white-space:nowrap; }
.comment-body p { color:var(--muted); font-size:13px; line-height:1.5; white-space:pre-wrap; }
.comment-form { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:10px; align-items:end; }
.comment-form textarea {
  width:100%; min-height:46px; resize:vertical; border-radius:0;
  border:0; border-bottom:1px solid var(--border); background:transparent; color:var(--text);
  padding:10px 0; outline:none; line-height:1.45; caret-color:var(--accent);
}
.comment-form textarea:focus { border-color:var(--accent); background:transparent; }
.comment-form textarea::placeholder { color:var(--dim); }

.grid { column-count:3; column-gap:14px; }
@media (max-width:980px) { .grid { column-count:2; } }
@media (max-width:640px) { .grid { column-count:1; } }

.empty {
  text-align:left; padding:24px; border:1px solid var(--border);
  border-radius:12px; background:var(--surface);
}
.empty-ttl { font-size:18px; font-weight:500; color:var(--text); margin-bottom:6px; }
.empty-bd  { font-size:13px; color:var(--muted); line-height:1.65; max-width:360px; }
.template-board {
  border:0; border-radius:0;
  background:transparent; padding:22px 0 0;
}
.template-intro { margin-bottom:14px; }
.template-intro h2 { font-size:18px; line-height:1.2; font-weight:500; color:var(--text); margin-bottom:4px; }
.template-intro p { font-size:13px; color:var(--muted); }
.template-meta { font-size:13px; color:var(--dim); margin:0 0 14px; }
.template-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; }
.template-card {
  min-height:170px; text-align:left; display:flex; flex-direction:column; align-items:flex-start; gap:11px;
  border:1px solid var(--border); border-radius:10px; background:var(--input-bg);
  color:var(--text); padding:14px; cursor:pointer; transition:all 0.15s;
}
.template-card:hover { border-color:var(--accent-glow); background:var(--sh); transform:translateY(-1px); }
.template-card strong { font-size:16px; line-height:1.25; font-weight:500; }
.template-card span:last-child { font-size:13px; line-height:1.45; color:var(--muted); }

.fab {
  position:fixed; bottom:28px; right:28px;
  background:var(--accent); color:#fff; border:none;
  border-radius:999px; padding:12px 18px;
  display:flex; align-items:center; gap:8px;
  font-size:13px; font-weight:500;
  cursor:pointer;
  transition:all 0.2s; letter-spacing:0.01em; z-index:40;
}
.fab:hover { transform:translateY(-1px); filter:brightness(1.04); }

.m-overlay {
  position:fixed; inset:0; background:var(--modal-bg);
  display:flex; align-items:center; justify-content:center;
  z-index:200; padding:24px; backdrop-filter:blur(12px);
}
.m-box {
  background:#fff;
  border:1px solid color-mix(in srgb,var(--border) 86%,transparent);
  border-radius:16px; padding:26px; width:100%;
  box-shadow:0 34px 90px rgba(0,0,0,0.22);
  animation:slideUp 0.22s ease; max-height:90vh; overflow-y:auto;
}
.comment-dialog { max-width:560px; }
.dialog-head {
  display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:4px;
}
.dialog-head h2 {
  font-size:20px; line-height:1.25; font-weight:600; color:var(--text); margin:4px 0 0; letter-spacing:0;
}
.dialog-kicker {
  color:var(--muted); font-size:13px; font-weight:500;
}

.m-in {
  width:100%; background:transparent; border:0; border-bottom:1px solid var(--border);
  border-radius:0; padding:13px 0; color:var(--text);
  outline:none; transition:border-color 0.15s, background 0.15s; margin-bottom:10px; caret-color:var(--accent);
}
.m-in:focus { border-color:var(--accent); background:transparent; }
.m-in::placeholder { color:var(--dim); font-weight:400; }

.m-ta {
  width:100%; background:transparent; border:0; border-bottom:1px solid var(--border);
  border-radius:0; padding:12px 0; color:var(--text);
  font-size:14px; outline:none; resize:none;
  transition:border-color 0.15s, background 0.15s; margin-bottom:16px; line-height:1.62; caret-color:var(--accent);
}
.m-ta:focus { border-color:var(--accent); background:transparent; }
.m-ta::placeholder { color:var(--dim); }

.att-strip {
  display:flex; flex-direction:column; align-items:stretch; gap:8px; margin:0 0 14px;
  overflow:hidden;
}
.img-collage {
  width:100%; display:grid; gap:2px; overflow:hidden;
  border:1px solid var(--border); border-radius:12px;
  background:var(--border); aspect-ratio:16/9; min-height:150px;
}
.img-collage.detail { min-height:260px; max-height:520px; }
.img-collage.count-1 { grid-template-columns:1fr; }
.img-collage.count-2 { grid-template-columns:repeat(2,1fr); }
.img-collage.count-3,
.img-collage.count-4 { grid-template-columns:1.15fr 1fr; grid-template-rows:repeat(2,1fr); }
.img-collage.count-5 { grid-template-columns:1.2fr 1fr 1fr; grid-template-rows:repeat(2,1fr); }
.img-collage.count-3 .img-cell:first-child,
.img-collage.count-4 .img-cell:first-child,
.img-collage.count-5 .img-cell:first-child { grid-row:span 2; }
.img-collage.count-4 .img-cell:nth-child(4) { grid-column:2; }
.img-collage.count-5 .img-cell:nth-child(2) { grid-column:2; }
.img-collage.count-5 .img-cell:nth-child(3) { grid-column:3; }
.img-collage.count-5 .img-cell:nth-child(4) { grid-column:2; grid-row:2; }
.img-collage.count-5 .img-cell:nth-child(5) { grid-column:3; grid-row:2; }
.img-cell { min-width:0; min-height:0; position:relative; background:#111; }
.img-cell img { width:100%; height:100%; object-fit:cover; display:block; }
.img-extra {
  position:absolute; inset:0; background:rgba(0,0,0,0.46); color:#fff;
  display:flex; align-items:center; justify-content:center;
  font-size:24px; font-weight:600;
}
.att-pill {
  min-height:28px; display:inline-flex; align-items:center; justify-content:center; align-self:flex-start;
  gap:5px; padding:0 9px; border-radius:999px; border:1px solid var(--border);
  background:var(--input-bg); color:var(--muted);
  font-size:11px; font-weight:500;
  white-space:nowrap;
}
.att-box { margin-bottom:18px; }
.att-actions { display:flex; align-items:center; justify-content:space-between; gap:12px; min-height:44px; }
.attach-plus,
.voice-trigger {
  height:42px; border-radius:999px; flex-shrink:0;
  border:1px solid var(--border); background:var(--input-bg); color:var(--muted);
  display:flex; align-items:center; justify-content:center; cursor:pointer;
  transition:all 0.16s ease; font-weight:500;
}
.attach-plus { width:auto; gap:8px; padding:0 14px; font-size:13px; }
.attach-plus span { line-height:1; }
.voice-trigger { width:42px; margin-left:auto; border-radius:50%; }
.attach-plus:hover,
.voice-trigger:hover {
  border-color:var(--accent); color:var(--accent); background:var(--accent-bg);
  transform:translateY(-1px);
}
.voice-recorder {
  flex:1; max-width:320px; min-width:220px; height:44px; border-radius:999px;
  border:1px solid var(--accent-glow); background:var(--accent-bg);
  display:flex; align-items:center; gap:9px; padding:4px 5px 4px 6px;
}
.voice-cancel,
.voice-finish {
  width:34px; height:34px; border-radius:50%; border:none; flex-shrink:0;
  display:flex; align-items:center; justify-content:center; cursor:pointer;
  font-size:17px; font-weight:500;
}
.voice-cancel { background:var(--input-bg); color:var(--muted); }
.voice-cancel:hover { color:#ff5c5c; }
.voice-finish { background:var(--accent); color:#fff; }
.voice-finish:hover { filter:brightness(1.08); }
.voice-wave {
  flex:1; display:flex; align-items:center; justify-content:center; gap:4px;
  min-width:72px; height:28px;
}
.voice-wave span {
  width:3px; height:10px; border-radius:4px; background:var(--accent);
  animation:voicePulse 0.82s ease-in-out infinite alternate;
}
.voice-wave span:nth-child(2n) { height:17px; }
.voice-wave span:nth-child(3n) { height:22px; }
.voice-time {
  color:var(--accent); font-size:11px; font-weight:500;
  min-width:34px; text-align:right;
}
.att-workspace {
  margin-top:10px; border:0; border-top:1px solid var(--border); border-radius:0;
  background:transparent; padding:10px 0 0;
}
@keyframes voicePulse { from{transform:scaleY(0.55); opacity:0.55} to{transform:scaleY(1); opacity:1} }
.att-transcript {
  color:var(--muted); font-size:12px;
  line-height:1.7; white-space:pre-wrap; margin:0;
}
.att-error {
  color:#ff5c5c; font-size:11px;
  line-height:1.6; margin:0;
}
.att-list { display:flex; flex-direction:column; gap:8px; margin-top:10px; }
.att-row {
  display:grid; grid-template-columns:58px minmax(0,1fr) 24px; align-items:center;
  gap:9px; min-height:44px;
}
.att-row img {
  width:58px; height:44px; object-fit:cover; border-radius:6px;
  border:1px solid var(--border);
}
.att-row audio { width:130px; height:32px; }
.att-row-meta { min-width:0; display:flex; flex-direction:column; gap:3px; }
.att-row-meta span:first-child {
  color:var(--text); font-size:11px;
  font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.att-row-meta span:last-child {
  color:var(--dim); font-size:10px;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.att-remove {
  width:24px; height:24px; border-radius:6px; border:1px solid var(--border);
  background:transparent; color:var(--muted); cursor:pointer; font-size:15px;
}
.att-remove:hover { color:#ff5c5c; border-color:#ff5c5c; }
.att-detail-list { display:flex; flex-direction:column; gap:14px; margin:0 0 24px; }
.att-detail { display:flex; flex-direction:column; gap:7px; }
.att-detail-img {
  width:100%; max-height:360px; object-fit:contain; border-radius:10px;
  border:1px solid var(--border); background:var(--input-bg);
}
.idea-tags {
  display:flex; flex-wrap:wrap; gap:7px; margin:0 0 14px;
}
.idea-tag {
  min-height:31px; padding:6px 13px; border-radius:999px;
  border:1px solid var(--border); background:transparent; color:var(--muted);
  font-size:12px; font-weight:500; cursor:pointer; transition:all 0.15s;
}
.idea-tag:hover { border-color:var(--muted); color:var(--text); background:var(--input-bg); }
.idea-footer {
  display:flex; align-items:center; justify-content:space-between; gap:14px;
}
.private-check {
  display:inline-flex; align-items:center; gap:9px;
  color:var(--muted); font-size:13px; cursor:pointer; min-width:0;
}
.private-check input {
  appearance:none; width:18px; height:18px; border-radius:50%;
  border:1px solid var(--border); background:var(--input-bg);
  display:grid; place-items:center; flex-shrink:0; transition:all 0.15s;
  cursor:pointer;
}
.private-check input::before {
  content:""; width:8px; height:8px; border-radius:50%; transform:scale(0);
  background:var(--accent); transition:transform 0.15s;
}
.private-check input:checked {
  border-color:var(--accent); background:transparent;
}
.private-check input:checked::before { transform:scale(1); }
.att-voice {
  border:1px solid var(--border); border-radius:10px; background:var(--input-bg);
  padding:10px; display:flex; flex-direction:column; gap:10px;
}
.att-voice audio { width:100%; }
.att-caption {
  display:flex; justify-content:space-between; gap:12px;
  color:var(--dim); font-size:10px;
}
.att-caption span:first-child {
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:var(--muted);
}

.btn-p {
  padding:10px 18px; border-radius:8px; border:none;
  background:var(--accent); color:#fff;
  font-size:13px; font-weight:500;
  cursor:pointer; transition:all 0.15s;
  display:inline-flex; align-items:center; gap:6px; letter-spacing:0.02em;
}
.btn-p:disabled             { opacity:0.38; cursor:not-allowed; }
.btn-p:not(:disabled):hover { filter:brightness(1.04); transform:translateY(-1px); }

.btn-g {
  padding:10px 16px; border-radius:8px;
  border:1px solid var(--border); background:transparent; color:var(--muted);
  font-size:13px; font-weight:500;
  cursor:pointer; transition:all 0.15s;
}
.btn-g:hover { border-color:var(--muted); color:var(--text); background:var(--input-bg); }

.close-btn {
  width:30px; height:30px; border-radius:8px;
  background:var(--input-bg); border:1px solid var(--border); color:var(--muted);
  cursor:pointer; font-size:20px; line-height:1; display:flex; align-items:center; justify-content:center;
}
.close-btn:hover { color:var(--text); border-color:var(--muted); }

.login-box {
  max-width:420px; text-align:left; display:flex; flex-direction:column; align-items:stretch;
}
.login-head {
  min-height:36px; display:flex; align-items:center; justify-content:flex-start;
  gap:12px; margin-bottom:22px;
}
.login-brand { display:flex; align-items:center; gap:10px; min-width:0; }
.login-back {
  width:34px; height:34px; border-radius:8px;
  border:1px solid var(--border); background:var(--input-bg); color:var(--muted);
  cursor:pointer; display:flex; align-items:center; justify-content:center;
  transition:all 0.15s;
}
.login-back:hover { border-color:var(--muted); color:var(--text); background:var(--sh); }
.login-mark {
  width:34px; height:34px; border-radius:9px; background:var(--accent); color:#fff;
  display:flex; align-items:center; justify-content:center; flex-shrink:0;
  font-size:11px; font-weight:700; letter-spacing:0;
}
.login-title {
  color:var(--text); font-size:16px; font-weight:600;
  line-height:1.1; letter-spacing:0; margin:0;
}
.login-copy {
  display:flex; flex-direction:column; gap:7px;
  color:var(--muted); margin:0 0 18px; letter-spacing:0; font-weight:400;
}
.login-copy strong {
  color:var(--text); font-size:23px; font-weight:500;
  line-height:1.18; letter-spacing:0;
}
.login-copy span {
  color:var(--muted); font-size:14px; line-height:1.5;
}
.login-input { text-align:left; margin-bottom:10px; }
.login-error {
  color:#ff5c5c; font-size:12px;
  line-height:1.5; margin:0 0 10px;
}
.login-submit { justify-content:center; width:100%; }

.account-wrap { position:relative; }
.account-menu {
  position:absolute; top:42px; right:0; width:300px; z-index:80;
  background:#fff; border:1px solid var(--border); border-radius:12px;
  padding:10px; box-shadow:0 18px 50px rgba(0,0,0,0.18);
}
.account-list {
  display:flex; flex-direction:column; gap:4px;
  border-bottom:1px solid var(--border); padding-bottom:6px; margin-bottom:6px;
}
.account-avatar {
  width:34px; height:34px; border-radius:50%; flex-shrink:0;
  display:flex; align-items:center; justify-content:center; color:#0e0e13; font-weight:700;
}
.account-copy { min-width:0; display:flex; flex-direction:column; gap:2px; }
.account-copy strong {
  color:var(--text); font-size:13px; font-weight:500;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.account-copy span {
  color:var(--muted); font-size:12px;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.account-row,
.account-action {
  width:100%; border:0; border-radius:8px; background:transparent; color:var(--muted);
  text-align:left; padding:9px 8px; cursor:pointer; font-size:13px;
  display:flex; align-items:center; gap:8px;
}
.account-row:hover,
.account-action:hover { background:var(--input-bg); color:var(--text); }
.account-row.current { color:var(--text); }
.account-row.current .account-copy span { color:var(--muted); }
.account-check { margin-left:auto; color:var(--accent); flex-shrink:0; }
.account-action.muted { color:var(--dim); }

::-webkit-scrollbar       { width:5px; }
::-webkit-scrollbar-track { background:transparent; }
::-webkit-scrollbar-thumb { background:var(--border); border-radius:3px; }

@media (max-width:860px) {
  .feed-controls { grid-template-columns:1fr; gap:12px; }
  .feed-filter-wrap { order:-1; justify-self:stretch; width:100%; }
  .tcs { justify-content:flex-start; }
}
@media (max-width:767px) {
  .fab {
    left:16px; right:16px; width:auto; bottom:18px;
    justify-content:center;
  }
}
@media (max-width:560px) {
  .app { padding:0 16px 110px; }
  .hdr { align-items:flex-start; gap:12px; }
  .hdr-r { gap:6px; }
  .logo-sub { display:none; }
  .feed-controls { padding:16px 0 20px; }
  .feed-filter-menu { width:100%; min-width:0; }
  .template-grid { grid-template-columns:1fr; }
  .m-overlay { padding:14px; align-items:flex-end; }
  .m-box { padding:22px; border-radius:16px; max-height:94vh; }
  .date-picker-layer {
    position:fixed; inset:0; display:flex; align-items:center; justify-content:center;
    padding:18px; z-index:260;
  }
  .date-scrim {
    display:block; position:absolute; inset:0;
    background:rgba(14,14,19,0.50); backdrop-filter:blur(9px);
  }
  .date-popover { position:relative; z-index:1; width:min(100%,324px); }
  .att-actions { align-items:flex-start; }
  .voice-recorder { min-width:0; }
  .voice-wave { gap:3px; }
  .idea-footer { align-items:stretch; flex-direction:column; }
  .idea-footer .btn-p { width:100%; justify-content:center; }
  .idea-page { padding:4px 0 40px; }
  .idea-page-card { padding:20px; border-radius:14px; }
  .idea-page-topline { flex-direction:column-reverse; align-items:flex-start; gap:12px; }
  .idea-page-topline h1 { font-size:24px; }
  .idea-page-meta { align-items:flex-start; flex-direction:column; }
  .card-tools { opacity:1; transform:none; }
  .comment-summary { align-items:flex-start; }
  .comment-last { white-space:normal; }
  .comment-form { grid-template-columns:1fr; }
  .comment-form .btn-p { width:100%; justify-content:center; }
}
`;
  function applyTheme(isDark) {
    const t7 = isDark ? DARK : LIGHT;
    const r3 = document.documentElement;
    r3.style.setProperty("--bg", t7.bg);
    r3.style.setProperty("--surface", t7.surface);
    r3.style.setProperty("--sh", t7.sh);
    r3.style.setProperty("--border", t7.border);
    r3.style.setProperty("--text", t7.text);
    r3.style.setProperty("--muted", t7.muted);
    r3.style.setProperty("--dim", t7.dim);
    r3.style.setProperty("--accent", t7.accent);
    r3.style.setProperty("--accent-bg", t7.accentBg);
    r3.style.setProperty("--accent-glow", t7.accentGlow);
    r3.style.setProperty("--input-bg", t7.inputBg);
    r3.style.setProperty("--modal-bg", t7.modal);
    document.body.style.background = t7.bg;
  }
  function App() {
    const [identity, setIdentity] = (0, import_react2.useState)(null);
    const [accounts, setAccounts] = (0, import_react2.useState)([]);
    const [authMode, setAuthMode] = (0, import_react2.useState)("signin");
    const [isDark, setIsDark] = (0, import_react2.useState)(true);
    const [notes, setNotes] = (0, import_react2.useState)([]);
    const [likes, setLikes] = (0, import_react2.useState)({});
    const [readIds, setReadIds] = (0, import_react2.useState)(/* @__PURE__ */ new Set());
    const [search, setSearch] = (0, import_react2.useState)("");
    const [selTags, setSelTags] = (0, import_react2.useState)([]);
    const [readF, setReadF] = (0, import_react2.useState)("all");
    const [selectedDate, setSelectedDate] = (0, import_react2.useState)("");
    const [showDatePicker, setShowDatePicker] = (0, import_react2.useState)(false);
    const [pickerMonth, setPickerMonth] = (0, import_react2.useState)(/* @__PURE__ */ new Date());
    const [privateOnly, setPrivateOnly] = (0, import_react2.useState)(false);
    const [showFeedFilter, setShowFeedFilter] = (0, import_react2.useState)(false);
    const [likedOnly, setLikedOnly] = (0, import_react2.useState)(false);
    const [showNew, setShowNew] = (0, import_react2.useState)(false);
    const [templateDraft, setTemplateDraft] = (0, import_react2.useState)(null);
    const [expanded, setExpanded] = (0, import_react2.useState)(null);
    const [commentingNote, setCommentingNote] = (0, import_react2.useState)(null);
    const [templateComments, setTemplateComments] = (0, import_react2.useState)({});
    const [editingNote, setEditingNote] = (0, import_react2.useState)(null);
    const [deletingId, setDeletingId] = (0, import_react2.useState)(null);
    const [notif, setNotif] = (0, import_react2.useState)("default");
    const [showAccount, setShowAccount] = (0, import_react2.useState)(false);
    const [showNotifBanner, setShowNotifBanner] = (0, import_react2.useState)(false);
    const [loading, setLoading] = (0, import_react2.useState)(true);
    const lastSeen = (0, import_react2.useRef)(Date.now());
    (0, import_react2.useEffect)(() => {
      applyTheme(isDark);
    }, [isDark]);
    (0, import_react2.useEffect)(() => {
      (async () => {
        const [n6, id, savedAccounts, themeManual, rd, nb, lk] = await Promise.all([
          db.notes(),
          db.get("id"),
          db.get("accounts"),
          db.get("theme-manual"),
          db.get("rids"),
          db.get("nb-dismissed"),
          db.likes()
        ]);
        setNotes(n6 || []);
        setLikes(lk || {});
        const roster = mergeAccounts(savedAccounts, [id]);
        const current = isValidIdentity(id) ? roster.find((account) => account.email === normalizeEmail(id.email)) || makeTeamIdentity(id.email) : null;
        setAccounts(roster);
        if (roster.length) await db.set("accounts", roster);
        setIdentity(current);
        setAuthMode(current ? null : "signin");
        if (themeManual !== null && themeManual !== void 0) {
          setIsDark(themeManual === "dark");
        } else {
          setIsDark(systemDark());
        }
        if (rd) setReadIds(new Set(rd));
        if ("Notification" in window) {
          const perm = Notification.permission;
          setNotif(perm);
          if (perm === "default" && !nb) setShowNotifBanner(true);
        }
        setLoading(false);
      })();
    }, []);
    (0, import_react2.useEffect)(() => {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const handler = async (e43) => {
        const manual = await db.get("theme-manual");
        if (manual === null || manual === void 0) setIsDark(e43.matches);
      };
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    }, []);
    (0, import_react2.useEffect)(() => {
      if (!identity || loading) return;
      const iv = setInterval(async () => {
        const [fresh, freshLikes] = await Promise.all([db.notes(), db.likes()]);
        const nw = fresh.filter(
          (n6) => !n6.isPrivate && new Date(n6.createdAt).getTime() > lastSeen.current && n6.authorId !== identity.id
        );
        if (nw.length && notif === "granted") {
          nw.forEach((n6) => {
            try {
              new Notification("\u{1F4A1} New brand idea!", { body: `${n6.author}: ${n6.title}` });
            } catch {
            }
          });
        }
        lastSeen.current = Date.now();
        setNotes(fresh);
        setLikes(freshLikes || {});
      }, 3e4);
      return () => clearInterval(iv);
    }, [identity, notif, loading]);
    const markRead = (0, import_react2.useCallback)((id) => {
      setReadIds((p2) => {
        const n6 = new Set(p2);
        n6.add(id);
        db.set("rids", [...n6]);
        return n6;
      });
    }, []);
    const toggleTheme = async () => {
      const next = !isDark;
      setIsDark(next);
      await db.set("theme-manual", next ? "dark" : "light");
    };
    const toggleLike = (0, import_react2.useCallback)(async (noteId) => {
      const current = await db.likes();
      const arr = current[noteId] || [];
      const uid = identity?.id;
      const next = arr.includes(uid) ? arr.filter((x) => x !== uid) : [...arr, uid];
      const updated = { ...current, [noteId]: next };
      if (next.length === 0) delete updated[noteId];
      await db.sLikes(updated);
      setLikes(updated);
      setExpanded((prev) => prev && prev.id === noteId ? { ...prev } : prev);
    }, [identity]);
    const handleCreate = async (note) => {
      const counts = { image: 0, voice: 0 };
      const attachments = (note.attachments || []).map((a24) => {
        const type = a24.type === "voice" ? "voice" : "image";
        counts[type] += 1;
        return {
          ...a24,
          name: a24.autoNamed ? makeAttachmentName(type, type === "voice" ? a24.transcript || note.title || note.body : note.title || note.body, counts[type], a24.createdAt, a24.mime) : a24.name
        };
      });
      const n6 = {
        ...note,
        attachments,
        id: gid(),
        title: note.title || "Untitled",
        tag: note.tag || "Other",
        author: identity.name,
        authorId: identity.id,
        authorEmail: identity.email,
        authorColor: identity.color,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      const up = [n6, ...notes];
      setNotes(up);
      await db.sNotes(up);
      markRead(n6.id);
      setShowNew(false);
      setTemplateDraft(null);
    };
    const handleUpdateNote = async (nextNote) => {
      const normalized = {
        ...nextNote,
        title: nextNote.title || "Untitled",
        tag: nextNote.tag || "Other"
      };
      const up = notes.map((n6) => n6.id === normalized.id ? { ...n6, ...normalized, updatedAt: (/* @__PURE__ */ new Date()).toISOString() } : n6);
      setNotes(up);
      await db.sNotes(up);
      setEditingNote(null);
      setExpanded((prev) => prev?.id === normalized.id ? up.find((n6) => n6.id === normalized.id) : prev);
    };
    const handleAddComment = async (noteId, body) => {
      const comment = {
        id: gid(),
        body,
        author: identity.name,
        authorId: identity.id,
        authorEmail: identity.email,
        authorColor: identity.color,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      if (noteId.startsWith("template:")) {
        setTemplateComments((prev) => ({ ...prev, [noteId]: [...prev[noteId] || [], comment] }));
        setExpanded((prev) => prev?.id === noteId ? { ...prev, comments: [...prev.comments || [], comment] } : prev);
        setCommentingNote((prev) => prev?.id === noteId ? { ...prev, comments: [...prev.comments || [], comment] } : prev);
        return;
      }
      const up = notes.map((n6) => n6.id === noteId ? { ...n6, comments: [...n6.comments || [], comment] } : n6);
      setNotes(up);
      await db.sNotes(up);
      setExpanded((prev) => prev?.id === noteId ? up.find((n6) => n6.id === noteId) : prev);
      setCommentingNote((prev) => prev?.id === noteId ? up.find((n6) => n6.id === noteId) : prev);
    };
    const handleDeleteConfirm = async () => {
      if (deletingId?.startsWith("template:")) {
        setDeletingId(null);
        if (expanded?.id === deletingId) setExpanded(null);
        if (commentingNote?.id === deletingId) setCommentingNote(null);
        if (editingNote?.id === deletingId) setEditingNote(null);
        return;
      }
      const up = notes.filter((n6) => n6.id !== deletingId);
      setNotes(up);
      await db.sNotes(up);
      setDeletingId(null);
      if (editingNote?.id === deletingId) setEditingNote(null);
      if (expanded?.id === deletingId) setExpanded(null);
      if (commentingNote?.id === deletingId) setCommentingNote(null);
    };
    const handleEnableNotif = async () => {
      if (!("Notification" in window)) {
        alert("Notifications not supported in your browser.");
        return;
      }
      if (notif === "denied") {
        alert("Notifications are blocked. Enable them in your browser settings and reload.");
        return;
      }
      const p2 = await Notification.requestPermission();
      setNotif(p2);
      setShowNotifBanner(false);
      await db.set("nb-dismissed", true);
    };
    const dismissBanner = async () => {
      setShowNotifBanner(false);
      await db.set("nb-dismissed", true);
    };
    const handleLogin = async (nextIdentity) => {
      const nextAccounts = mergeAccounts(accounts, [nextIdentity]);
      await db.set("id", nextIdentity);
      await db.set("accounts", nextAccounts);
      setAccounts(nextAccounts);
      setIdentity(nextIdentity);
      setShowAccount(false);
      setAuthMode(null);
    };
    const handleAddAccount = () => {
      setShowAccount(false);
      setAuthMode("add");
    };
    const handleSwitchAccount = async (account) => {
      if (!isValidIdentity(account)) return;
      await db.set("id", account);
      setIdentity(account);
      setShowAccount(false);
    };
    const handleSignOut = async () => {
      setShowAccount(false);
      const remaining = accounts.filter((account) => account.id !== identity?.id);
      await db.set("accounts", remaining);
      setAccounts(remaining);
      const nextIdentity = remaining[0] || null;
      await db.set("id", nextIdentity);
      setIdentity(nextIdentity);
      setAuthMode(nextIdentity ? null : "signin");
    };
    const openNewIdea = (template = null) => {
      setTemplateDraft(template);
      setShowNew(true);
    };
    const openDatePicker = () => {
      setPickerMonth(selectedDate ? /* @__PURE__ */ new Date(`${selectedDate}T00:00:00`) : /* @__PURE__ */ new Date());
      setShowDatePicker((v) => !v);
    };
    const filtered = notes.filter((n6) => {
      if (search) {
        const q = search.toLowerCase();
        const attText = (n6.attachments || []).map((a24) => `${a24.name || ""} ${a24.transcript || ""}`).join(" ").toLowerCase();
        const commentText = (n6.comments || []).map((c5) => `${c5.author || ""} ${c5.body || ""}`).join(" ").toLowerCase();
        const authorText = `${n6.author || ""} ${n6.authorEmail || ""}`.toLowerCase();
        if (!n6.title?.toLowerCase().includes(q) && !n6.body?.toLowerCase().includes(q) && !attText.includes(q) && !authorText.includes(q) && !commentText.includes(q)) return false;
      }
      if (selTags.length && !selTags.includes(n6.tag)) return false;
      if (privateOnly) {
        if (!n6.isPrivate || n6.authorId !== identity?.id) return false;
      } else if (n6.isPrivate) {
        return false;
      }
      if (readF === "unread" && readIds.has(n6.id)) return false;
      if (selectedDate && ymd(n6.createdAt) !== selectedDate) return false;
      if (likedOnly) {
        const myLikes = Object.entries(likes).filter(([, uids]) => uids.includes(identity?.id)).map(([id]) => id);
        if (!myLikes.includes(n6.id)) return false;
      }
      return true;
    });
    const unread = notes.filter((n6) => !n6.isPrivate && !readIds.has(n6.id) && n6.authorId !== identity?.id).length;
    const myLikedCount = Object.entries(likes).filter(([, uids]) => uids.includes(identity?.id)).length;
    const isLiked = (id) => (likes[id] || []).includes(identity?.id);
    const likeCount = (id) => (likes[id] || []).length;
    const expandedNote = expanded?.id?.startsWith("template:") ? expanded : expanded ? notes.find((n6) => n6.id === expanded.id) || expanded : null;
    const commentingResolved = commentingNote?.id?.startsWith("template:") ? commentingNote : commentingNote ? notes.find((n6) => n6.id === commentingNote.id) || commentingNote : null;
    const feedFilterValue = privateOnly ? "private" : readF;
    const feedFilterLabel = feedFilterValue === "private" ? "My unpublished ideas" : feedFilterValue === "unread" ? "Unread only" : "All notes";
    const templateIdeas = IDEA_TEMPLATES.map((template, i) => ({
      ...template,
      id: `template:${i}`,
      attachments: [],
      author: identity?.name || "BrandBoard",
      authorId: identity?.id || "brandboard",
      authorEmail: identity?.email || "",
      authorColor: identity?.color || "var(--accent)",
      createdAt: new Date(2026, 4, 1, 9, i).toISOString(),
      isTemplate: true,
      comments: templateComments[`template:${i}`] || []
    }));
    const visibleTemplates = selTags.length ? templateIdeas.filter((template) => selTags.includes(template.tag)) : templateIdeas;
    const showStarterTemplates = filtered.length === 0 && !search && !selectedDate && !likedOnly && !privateOnly;
    const setFeedFilter = (value) => {
      setPrivateOnly(value === "private");
      setReadF(value === "unread" ? "unread" : "all");
      setShowFeedFilter(false);
    };
    if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "#0e0e13", color: "rgba(255,255,255,0.38)", fontFamily: MONO, fontSize: 12 }, children: "Loading\u2026" });
    if (!identity) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: CSS }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoginModal, { mode: "signin", onLogin: handleLogin })
    ] });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: CSS }),
      showNew && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        NewNoteModal,
        {
          onClose: () => {
            setShowNew(false);
            setTemplateDraft(null);
          },
          onSave: handleCreate,
          identity,
          initialNote: templateDraft
        }
      ),
      editingNote && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        NewNoteModal,
        {
          mode: "edit",
          onClose: () => setEditingNote(null),
          onSave: handleUpdateNote,
          identity,
          initialNote: editingNote
        }
      ),
      authMode === "add" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        LoginModal,
        {
          mode: "add",
          onBack: () => setAuthMode(null),
          onLogin: handleLogin
        }
      ),
      commentingResolved && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        CommentDialog,
        {
          note: commentingResolved,
          onClose: () => setCommentingNote(null),
          onAddComment: (body) => handleAddComment(commentingResolved.id, body)
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "app", onClick: () => {
        if (showAccount) setShowAccount(false);
        if (showFeedFilter) setShowFeedFilter(false);
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { className: "hdr", children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hdr-l", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "logo", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-ico", children: "bb" }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-txt", children: "BrandBoard" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "logo-sub", children: "Alty workspace" })
            ] })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "hdr-r", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "button",
              {
                className: `icon-btn${notif === "granted" ? " on" : ""}`,
                onClick: handleEnableNotif,
                title: notif === "granted" ? "Notifications on" : "Enable notifications",
                children: [
                  notif === "granted" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s2, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c, { size: 16 }),
                  unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ndot", children: unread > 9 ? "9+" : unread })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
              "button",
              {
                className: `icon-btn${likedOnly ? " on" : ""}`,
                onClick: () => setLikedOnly((v) => !v),
                title: likedOnly ? "Show all ideas" : "Show my liked ideas",
                style: { fontSize: 16 },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { size: 16, weight: likedOnly ? "fill" : "regular" }),
                  myLikedCount > 0 && !likedOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ndot", style: { fontSize: 8 }, children: myLikedCount > 9 ? "9+" : myLikedCount })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                className: "icon-btn",
                onClick: toggleTheme,
                title: isDark ? "Switch to light" : "Switch to dark",
                style: { fontSize: 14 },
                children: isDark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s10, { size: 16 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s9, { size: 16 })
              }
            ),
            identity && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "account-wrap", onClick: (e43) => e43.stopPropagation(), children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "button",
                {
                  className: "av",
                  style: { background: identity.color },
                  onClick: () => setShowAccount((v) => !v),
                  type: "button",
                  "aria-label": "Open account menu",
                  title: identity.email,
                  children: identity.name.charAt(0).toUpperCase()
                }
              ),
              showAccount && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                AccountMenu,
                {
                  identity,
                  accounts,
                  onAdd: handleAddAccount,
                  onSwitch: handleSwitchAccount,
                  onSignOut: handleSignOut
                }
              )
            ] })
          ] })
        ] }),
        showNotifBanner && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NotifBanner, { onDismiss: dismissBanner, onEnable: handleEnableNotif }),
        expandedNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          IdeaDetailPage,
          {
            note: expandedNote,
            isOwn: expandedNote.authorId === identity?.id,
            isLiked: isLiked(expandedNote.id),
            likeCount: likeCount(expandedNote.id),
            onBack: () => setExpanded(null),
            onLike: () => toggleLike(expandedNote.id),
            onAddComment: (body) => handleAddComment(expandedNote.id, body),
            onEdit: () => {
              setEditingNote(expandedNote);
              setExpanded(null);
            },
            onDeleteRequest: () => {
              setDeletingId(expandedNote.id);
              setExpanded(null);
            }
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "filters", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "sw", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f, { className: "s-ico", size: 15 }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                className: "s-in",
                placeholder: "Search ideas, keywords\u2026",
                value: search,
                onChange: (e43) => setSearch(e43.target.value)
              }
            ),
            search && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "clr-btn", onClick: () => setSearch(""), "aria-label": "Clear search", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n5, { size: 14, weight: "bold" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "button",
              {
                className: `date-trigger${selectedDate ? " on" : ""}`,
                onClick: openDatePicker,
                type: "button",
                "aria-label": "Pick a date",
                title: selectedDate ? `Date: ${selectedDate}` : "Pick a date",
                children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c2, { size: 18 })
              }
            ),
            showDatePicker && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              DatePickerDialog,
              {
                selectedDate,
                month: pickerMonth,
                onMonthChange: setPickerMonth,
                onSelect: (date) => {
                  setSelectedDate(date);
                  setShowDatePicker(false);
                },
                onClear: () => {
                  setSelectedDate("");
                  setShowDatePicker(false);
                },
                onClose: () => setShowDatePicker(false)
              }
            )
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: showStarterTemplates ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            StarterTemplates,
            {
              templates: visibleTemplates,
              count: visibleTemplates.length,
              identity,
              controls: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "feed-controls", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcs", children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: `chip${selTags.length === 0 ? " on" : ""}`, onClick: () => setSelTags([]), children: "All" }),
                  TAGS.map((t7) => {
                    const c5 = TAG_C[t7];
                    const on = selTags.includes(t7);
                    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                      "button",
                      {
                        className: "chip",
                        style: on ? { background: c5.bg, color: c5.text, borderColor: c5.bd } : {},
                        onClick: () => setSelTags((p2) => p2.includes(t7) ? p2.filter((x) => x !== t7) : [...p2, t7]),
                        children: t7
                      },
                      t7
                    );
                  })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "feed-filter-wrap", onClick: (e43) => e43.stopPropagation(), children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "button",
                    {
                      className: `feed-filter-trigger${showFeedFilter ? " open" : ""}`,
                      onClick: () => setShowFeedFilter((v) => !v),
                      type: "button",
                      "aria-expanded": showFeedFilter,
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feedFilterLabel }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s3, { size: 16 })
                      ]
                    }
                  ),
                  showFeedFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "feed-filter-menu", children: [
                    ["all", "All notes"],
                    ["unread", "Unread only"],
                    ["private", "My unpublished ideas"]
                  ].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                    "button",
                    {
                      className: feedFilterValue === value ? "selected" : "",
                      onClick: () => setFeedFilter(value),
                      type: "button",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { size: 15, weight: "bold" }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
                      ]
                    },
                    value
                  )) })
                ] })
              ] }),
              isLiked,
              likeCount,
              deletingId,
              onOpen: setExpanded,
              onComment: setCommentingNote,
              onLike: toggleLike,
              onEdit: setEditingNote,
              onDeleteRequest: setDeletingId,
              onDeleteConfirm: handleDeleteConfirm,
              onDeleteCancel: () => setDeletingId(null)
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "feed-controls", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "tcs", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: `chip${selTags.length === 0 ? " on" : ""}`, onClick: () => setSelTags([]), children: "All" }),
                TAGS.map((t7) => {
                  const c5 = TAG_C[t7];
                  const on = selTags.includes(t7);
                  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "button",
                    {
                      className: "chip",
                      style: on ? { background: c5.bg, color: c5.text, borderColor: c5.bd } : {},
                      onClick: () => setSelTags((p2) => p2.includes(t7) ? p2.filter((x) => x !== t7) : [...p2, t7]),
                      children: t7
                    },
                    t7
                  );
                })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "feed-filter-wrap", onClick: (e43) => e43.stopPropagation(), children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    className: `feed-filter-trigger${showFeedFilter ? " open" : ""}`,
                    onClick: () => setShowFeedFilter((v) => !v),
                    type: "button",
                    "aria-expanded": showFeedFilter,
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: feedFilterLabel }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s3, { size: 16 })
                    ]
                  }
                ),
                showFeedFilter && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "feed-filter-menu", children: [
                  ["all", "All notes"],
                  ["unread", "Unread only"],
                  ["private", "My unpublished ideas"]
                ].map(([value, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                  "button",
                  {
                    className: feedFilterValue === value ? "selected" : "",
                    onClick: () => setFeedFilter(value),
                    type: "button",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n, { size: 15, weight: "bold" }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })
                    ]
                  },
                  value
                )) })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "meta", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "ct", children: [
                filtered.length,
                " idea",
                filtered.length !== 1 ? "s" : ""
              ] }),
              unread > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "ur-btn", onClick: () => setReadF("unread"), children: [
                unread,
                " unread"
              ] }),
              privateOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "liked-meta", children: "unpublished ideas" }),
              likedOnly && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "liked-meta", children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n2, { size: 13, weight: "fill" }),
                "liked only"
              ] })
            ] }),
            filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "empty", children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "empty-ttl", children: privateOnly ? "No unpublished ideas yet" : likedOnly ? "No liked ideas yet" : "No matching ideas" }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "empty-bd", children: privateOnly ? "Use private ideas for drafts you want to polish before sharing." : likedOnly ? "Heart the ideas that inspire you and they will live here." : "Try a different search, tag, or date." })
            ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "grid", children: filtered.map((n6, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              NoteCard,
              {
                note: n6,
                idx: i,
                isRead: readIds.has(n6.id),
                isOwn: n6.authorId === identity?.id,
                isLiked: isLiked(n6.id),
                likeCount: likeCount(n6.id),
                isDeleting: deletingId === n6.id,
                onClick: () => {
                  if (deletingId !== n6.id) {
                    setExpanded(n6);
                    markRead(n6.id);
                  }
                },
                onComment: () => setCommentingNote(n6),
                onLike: () => toggleLike(n6.id),
                onEdit: () => setEditingNote(n6),
                onDeleteRequest: () => setDeletingId(n6.id),
                onDeleteConfirm: handleDeleteConfirm,
                onDeleteCancel: () => setDeletingId(null)
              },
              n6.id
            )) })
          ] }) })
        ] })
      ] }),
      !expandedNote && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", { className: "fab", onClick: () => openNewIdea(), children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "New idea" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n3, { size: 17, weight: "bold" })
      ] })
    ] });
  }

  // main.jsx
  var import_jsx_runtime2 = __toESM(require_jsx_runtime());
  (0, import_client.createRoot)(document.getElementById("root")).render(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(App, {}));
})();
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.min.js:
  (**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.min.js:
  (**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
