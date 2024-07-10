var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __reExport = (target, mod, secondTarget) => (__copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default"));
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../../node_modules/lodash/lodash.js
var require_lodash = __commonJS({
  "../../node_modules/lodash/lodash.js"(exports, module) {
    "use strict";
    (function() {
      var undefined2;
      var VERSION = "4.17.21";
      var LARGE_ARRAY_SIZE = 200;
      var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
      var HASH_UNDEFINED = "__lodash_hash_undefined__";
      var MAX_MEMOIZE_SIZE = 500;
      var PLACEHOLDER = "__lodash_placeholder__";
      var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
      var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
      var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
      var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
      var HOT_COUNT = 800, HOT_SPAN = 16;
      var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
      var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
      var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
      var wrapFlags = [
        ["ary", WRAP_ARY_FLAG],
        ["bind", WRAP_BIND_FLAG],
        ["bindKey", WRAP_BIND_KEY_FLAG],
        ["curry", WRAP_CURRY_FLAG],
        ["curryRight", WRAP_CURRY_RIGHT_FLAG],
        ["flip", WRAP_FLIP_FLAG],
        ["partial", WRAP_PARTIAL_FLAG],
        ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
        ["rearg", WRAP_REARG_FLAG]
      ];
      var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
      var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
      var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
      var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
      var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
      var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
      var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
      var reTrimStart = /^\s+/;
      var reWhitespace = /\s/;
      var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
      var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
      var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
      var reEscapeChar = /\\(\\)?/g;
      var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
      var reFlags = /\w*$/;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsHostCtor = /^\[object .+?Constructor\]$/;
      var reIsOctal = /^0o[0-7]+$/i;
      var reIsUint = /^(?:0|[1-9]\d*)$/;
      var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
      var reNoMatch = /($^)/;
      var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
      var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
      var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
      var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
      var reApos = RegExp(rsApos, "g");
      var reComboMark = RegExp(rsCombo, "g");
      var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
      var reUnicodeWord = RegExp([
        rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
        rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
        rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
        rsUpper + "+" + rsOptContrUpper,
        rsOrdUpper,
        rsOrdLower,
        rsDigits,
        rsEmoji
      ].join("|"), "g");
      var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
      var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
      var contextProps = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ];
      var templateCounter = -1;
      var typedArrayTags = {};
      typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
      typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
      var cloneableTags = {};
      cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
      cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
      var deburredLetters = {
        // Latin-1 Supplement block.
        "\xC0": "A",
        "\xC1": "A",
        "\xC2": "A",
        "\xC3": "A",
        "\xC4": "A",
        "\xC5": "A",
        "\xE0": "a",
        "\xE1": "a",
        "\xE2": "a",
        "\xE3": "a",
        "\xE4": "a",
        "\xE5": "a",
        "\xC7": "C",
        "\xE7": "c",
        "\xD0": "D",
        "\xF0": "d",
        "\xC8": "E",
        "\xC9": "E",
        "\xCA": "E",
        "\xCB": "E",
        "\xE8": "e",
        "\xE9": "e",
        "\xEA": "e",
        "\xEB": "e",
        "\xCC": "I",
        "\xCD": "I",
        "\xCE": "I",
        "\xCF": "I",
        "\xEC": "i",
        "\xED": "i",
        "\xEE": "i",
        "\xEF": "i",
        "\xD1": "N",
        "\xF1": "n",
        "\xD2": "O",
        "\xD3": "O",
        "\xD4": "O",
        "\xD5": "O",
        "\xD6": "O",
        "\xD8": "O",
        "\xF2": "o",
        "\xF3": "o",
        "\xF4": "o",
        "\xF5": "o",
        "\xF6": "o",
        "\xF8": "o",
        "\xD9": "U",
        "\xDA": "U",
        "\xDB": "U",
        "\xDC": "U",
        "\xF9": "u",
        "\xFA": "u",
        "\xFB": "u",
        "\xFC": "u",
        "\xDD": "Y",
        "\xFD": "y",
        "\xFF": "y",
        "\xC6": "Ae",
        "\xE6": "ae",
        "\xDE": "Th",
        "\xFE": "th",
        "\xDF": "ss",
        // Latin Extended-A block.
        "\u0100": "A",
        "\u0102": "A",
        "\u0104": "A",
        "\u0101": "a",
        "\u0103": "a",
        "\u0105": "a",
        "\u0106": "C",
        "\u0108": "C",
        "\u010A": "C",
        "\u010C": "C",
        "\u0107": "c",
        "\u0109": "c",
        "\u010B": "c",
        "\u010D": "c",
        "\u010E": "D",
        "\u0110": "D",
        "\u010F": "d",
        "\u0111": "d",
        "\u0112": "E",
        "\u0114": "E",
        "\u0116": "E",
        "\u0118": "E",
        "\u011A": "E",
        "\u0113": "e",
        "\u0115": "e",
        "\u0117": "e",
        "\u0119": "e",
        "\u011B": "e",
        "\u011C": "G",
        "\u011E": "G",
        "\u0120": "G",
        "\u0122": "G",
        "\u011D": "g",
        "\u011F": "g",
        "\u0121": "g",
        "\u0123": "g",
        "\u0124": "H",
        "\u0126": "H",
        "\u0125": "h",
        "\u0127": "h",
        "\u0128": "I",
        "\u012A": "I",
        "\u012C": "I",
        "\u012E": "I",
        "\u0130": "I",
        "\u0129": "i",
        "\u012B": "i",
        "\u012D": "i",
        "\u012F": "i",
        "\u0131": "i",
        "\u0134": "J",
        "\u0135": "j",
        "\u0136": "K",
        "\u0137": "k",
        "\u0138": "k",
        "\u0139": "L",
        "\u013B": "L",
        "\u013D": "L",
        "\u013F": "L",
        "\u0141": "L",
        "\u013A": "l",
        "\u013C": "l",
        "\u013E": "l",
        "\u0140": "l",
        "\u0142": "l",
        "\u0143": "N",
        "\u0145": "N",
        "\u0147": "N",
        "\u014A": "N",
        "\u0144": "n",
        "\u0146": "n",
        "\u0148": "n",
        "\u014B": "n",
        "\u014C": "O",
        "\u014E": "O",
        "\u0150": "O",
        "\u014D": "o",
        "\u014F": "o",
        "\u0151": "o",
        "\u0154": "R",
        "\u0156": "R",
        "\u0158": "R",
        "\u0155": "r",
        "\u0157": "r",
        "\u0159": "r",
        "\u015A": "S",
        "\u015C": "S",
        "\u015E": "S",
        "\u0160": "S",
        "\u015B": "s",
        "\u015D": "s",
        "\u015F": "s",
        "\u0161": "s",
        "\u0162": "T",
        "\u0164": "T",
        "\u0166": "T",
        "\u0163": "t",
        "\u0165": "t",
        "\u0167": "t",
        "\u0168": "U",
        "\u016A": "U",
        "\u016C": "U",
        "\u016E": "U",
        "\u0170": "U",
        "\u0172": "U",
        "\u0169": "u",
        "\u016B": "u",
        "\u016D": "u",
        "\u016F": "u",
        "\u0171": "u",
        "\u0173": "u",
        "\u0174": "W",
        "\u0175": "w",
        "\u0176": "Y",
        "\u0177": "y",
        "\u0178": "Y",
        "\u0179": "Z",
        "\u017B": "Z",
        "\u017D": "Z",
        "\u017A": "z",
        "\u017C": "z",
        "\u017E": "z",
        "\u0132": "IJ",
        "\u0133": "ij",
        "\u0152": "Oe",
        "\u0153": "oe",
        "\u0149": "'n",
        "\u017F": "s"
      };
      var htmlEscapes = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };
      var htmlUnescapes = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      };
      var stringEscapes = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      };
      var freeParseFloat = parseFloat, freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var freeExports = typeof exports == "object" && exports && !exports.nodeType && exports;
      var freeModule = freeExports && typeof module == "object" && module && !module.nodeType && module;
      var moduleExports = freeModule && freeModule.exports === freeExports;
      var freeProcess = moduleExports && freeGlobal.process;
      var nodeUtil = function() {
        try {
          var types = freeModule && freeModule.require && freeModule.require("util").types;
          if (types) {
            return types;
          }
          return freeProcess && freeProcess.binding && freeProcess.binding("util");
        } catch (e) {
        }
      }();
      var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
      function apply(func, thisArg, args) {
        switch (args.length) {
          case 0:
            return func.call(thisArg);
          case 1:
            return func.call(thisArg, args[0]);
          case 2:
            return func.call(thisArg, args[0], args[1]);
          case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
        }
        return func.apply(thisArg, args);
      }
      function arrayAggregator(array, setter, iteratee, accumulator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          var value = array[index];
          setter(accumulator, value, iteratee(value), array);
        }
        return accumulator;
      }
      function arrayEach(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (iteratee(array[index], index, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEachRight(array, iteratee) {
        var length = array == null ? 0 : array.length;
        while (length--) {
          if (iteratee(array[length], length, array) === false) {
            break;
          }
        }
        return array;
      }
      function arrayEvery(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (!predicate(array[index], index, array)) {
            return false;
          }
        }
        return true;
      }
      function arrayFilter(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result[resIndex++] = value;
          }
        }
        return result;
      }
      function arrayIncludes(array, value) {
        var length = array == null ? 0 : array.length;
        return !!length && baseIndexOf(array, value, 0) > -1;
      }
      function arrayIncludesWith(array, value, comparator) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (comparator(value, array[index])) {
            return true;
          }
        }
        return false;
      }
      function arrayMap(array, iteratee) {
        var index = -1, length = array == null ? 0 : array.length, result = Array(length);
        while (++index < length) {
          result[index] = iteratee(array[index], index, array);
        }
        return result;
      }
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      function arrayReduce(array, iteratee, accumulator, initAccum) {
        var index = -1, length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[++index];
        }
        while (++index < length) {
          accumulator = iteratee(accumulator, array[index], index, array);
        }
        return accumulator;
      }
      function arrayReduceRight(array, iteratee, accumulator, initAccum) {
        var length = array == null ? 0 : array.length;
        if (initAccum && length) {
          accumulator = array[--length];
        }
        while (length--) {
          accumulator = iteratee(accumulator, array[length], length, array);
        }
        return accumulator;
      }
      function arraySome(array, predicate) {
        var index = -1, length = array == null ? 0 : array.length;
        while (++index < length) {
          if (predicate(array[index], index, array)) {
            return true;
          }
        }
        return false;
      }
      var asciiSize = baseProperty("length");
      function asciiToArray(string) {
        return string.split("");
      }
      function asciiWords(string) {
        return string.match(reAsciiWord) || [];
      }
      function baseFindKey(collection, predicate, eachFunc) {
        var result;
        eachFunc(collection, function(value, key, collection2) {
          if (predicate(value, key, collection2)) {
            result = key;
            return false;
          }
        });
        return result;
      }
      function baseFindIndex(array, predicate, fromIndex, fromRight) {
        var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
        while (fromRight ? index-- : ++index < length) {
          if (predicate(array[index], index, array)) {
            return index;
          }
        }
        return -1;
      }
      function baseIndexOf(array, value, fromIndex) {
        return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
      }
      function baseIndexOfWith(array, value, fromIndex, comparator) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (comparator(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function baseIsNaN(value) {
        return value !== value;
      }
      function baseMean(array, iteratee) {
        var length = array == null ? 0 : array.length;
        return length ? baseSum(array, iteratee) / length : NAN;
      }
      function baseProperty(key) {
        return function(object) {
          return object == null ? undefined2 : object[key];
        };
      }
      function basePropertyOf(object) {
        return function(key) {
          return object == null ? undefined2 : object[key];
        };
      }
      function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
        eachFunc(collection, function(value, index, collection2) {
          accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
        });
        return accumulator;
      }
      function baseSortBy(array, comparer) {
        var length = array.length;
        array.sort(comparer);
        while (length--) {
          array[length] = array[length].value;
        }
        return array;
      }
      function baseSum(array, iteratee) {
        var result, index = -1, length = array.length;
        while (++index < length) {
          var current = iteratee(array[index]);
          if (current !== undefined2) {
            result = result === undefined2 ? current : result + current;
          }
        }
        return result;
      }
      function baseTimes(n, iteratee) {
        var index = -1, result = Array(n);
        while (++index < n) {
          result[index] = iteratee(index);
        }
        return result;
      }
      function baseToPairs(object, props) {
        return arrayMap(props, function(key) {
          return [key, object[key]];
        });
      }
      function baseTrim(string) {
        return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
      }
      function baseUnary(func) {
        return function(value) {
          return func(value);
        };
      }
      function baseValues(object, props) {
        return arrayMap(props, function(key) {
          return object[key];
        });
      }
      function cacheHas(cache, key) {
        return cache.has(key);
      }
      function charsStartIndex(strSymbols, chrSymbols) {
        var index = -1, length = strSymbols.length;
        while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function charsEndIndex(strSymbols, chrSymbols) {
        var index = strSymbols.length;
        while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
        }
        return index;
      }
      function countHolders(array, placeholder) {
        var length = array.length, result = 0;
        while (length--) {
          if (array[length] === placeholder) {
            ++result;
          }
        }
        return result;
      }
      var deburrLetter = basePropertyOf(deburredLetters);
      var escapeHtmlChar = basePropertyOf(htmlEscapes);
      function escapeStringChar(chr) {
        return "\\" + stringEscapes[chr];
      }
      function getValue(object, key) {
        return object == null ? undefined2 : object[key];
      }
      function hasUnicode(string) {
        return reHasUnicode.test(string);
      }
      function hasUnicodeWord(string) {
        return reHasUnicodeWord.test(string);
      }
      function iteratorToArray(iterator) {
        var data, result = [];
        while (!(data = iterator.next()).done) {
          result.push(data.value);
        }
        return result;
      }
      function mapToArray(map) {
        var index = -1, result = Array(map.size);
        map.forEach(function(value, key) {
          result[++index] = [key, value];
        });
        return result;
      }
      function overArg(func, transform) {
        return function(arg) {
          return func(transform(arg));
        };
      }
      function replaceHolders(array, placeholder) {
        var index = -1, length = array.length, resIndex = 0, result = [];
        while (++index < length) {
          var value = array[index];
          if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
          }
        }
        return result;
      }
      function setToArray(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = value;
        });
        return result;
      }
      function setToPairs(set) {
        var index = -1, result = Array(set.size);
        set.forEach(function(value) {
          result[++index] = [value, value];
        });
        return result;
      }
      function strictIndexOf(array, value, fromIndex) {
        var index = fromIndex - 1, length = array.length;
        while (++index < length) {
          if (array[index] === value) {
            return index;
          }
        }
        return -1;
      }
      function strictLastIndexOf(array, value, fromIndex) {
        var index = fromIndex + 1;
        while (index--) {
          if (array[index] === value) {
            return index;
          }
        }
        return index;
      }
      function stringSize(string) {
        return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
      }
      function stringToArray(string) {
        return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
      }
      function trimmedEndIndex(string) {
        var index = string.length;
        while (index-- && reWhitespace.test(string.charAt(index))) {
        }
        return index;
      }
      var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
      function unicodeSize(string) {
        var result = reUnicode.lastIndex = 0;
        while (reUnicode.test(string)) {
          ++result;
        }
        return result;
      }
      function unicodeToArray(string) {
        return string.match(reUnicode) || [];
      }
      function unicodeWords(string) {
        return string.match(reUnicodeWord) || [];
      }
      var runInContext = function runInContext2(context2) {
        context2 = context2 == null ? root : _2.defaults(root.Object(), context2, _2.pick(root, contextProps));
        var Array2 = context2.Array, Date2 = context2.Date, Error2 = context2.Error, Function2 = context2.Function, Math2 = context2.Math, Object2 = context2.Object, RegExp2 = context2.RegExp, String2 = context2.String, TypeError2 = context2.TypeError;
        var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
        var coreJsData = context2["__core-js_shared__"];
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var idCounter = 0;
        var maskSrcKey = function() {
          var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
          return uid ? "Symbol(src)_1." + uid : "";
        }();
        var nativeObjectToString = objectProto.toString;
        var objectCtorString = funcToString.call(Object2);
        var oldDash = root._;
        var reIsNative = RegExp2(
          "^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        );
        var Buffer2 = moduleExports ? context2.Buffer : undefined2, Symbol2 = context2.Symbol, Uint8Array2 = context2.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined2, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined2, symIterator = Symbol2 ? Symbol2.iterator : undefined2, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined2;
        var defineProperty4 = function() {
          try {
            var func = getNative(Object2, "defineProperty");
            func({}, "", {});
            return func;
          } catch (e) {
          }
        }();
        var ctxClearTimeout = context2.clearTimeout !== root.clearTimeout && context2.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context2.setTimeout !== root.setTimeout && context2.setTimeout;
        var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined2, nativeIsFinite = context2.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context2.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
        var DataView = getNative(context2, "DataView"), Map2 = getNative(context2, "Map"), Promise2 = getNative(context2, "Promise"), Set2 = getNative(context2, "Set"), WeakMap = getNative(context2, "WeakMap"), nativeCreate = getNative(Object2, "create");
        var metaMap = WeakMap && new WeakMap();
        var realNames = {};
        var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map2), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set2), weakMapCtorString = toSource(WeakMap);
        var symbolProto = Symbol2 ? Symbol2.prototype : undefined2, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined2, symbolToString = symbolProto ? symbolProto.toString : undefined2;
        function lodash(value) {
          if (isObjectLike(value) && !isArray2(value) && !(value instanceof LazyWrapper)) {
            if (value instanceof LodashWrapper) {
              return value;
            }
            if (hasOwnProperty.call(value, "__wrapped__")) {
              return wrapperClone(value);
            }
          }
          return new LodashWrapper(value);
        }
        var baseCreate = /* @__PURE__ */ function() {
          function object() {
          }
          return function(proto) {
            if (!isObject(proto)) {
              return {};
            }
            if (objectCreate) {
              return objectCreate(proto);
            }
            object.prototype = proto;
            var result2 = new object();
            object.prototype = undefined2;
            return result2;
          };
        }();
        function baseLodash() {
        }
        function LodashWrapper(value, chainAll) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__chain__ = !!chainAll;
          this.__index__ = 0;
          this.__values__ = undefined2;
        }
        lodash.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "escape": reEscape,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "evaluate": reEvaluate,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          "interpolate": reInterpolate,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          "variable": "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          "imports": {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            "_": lodash
          }
        };
        lodash.prototype = baseLodash.prototype;
        lodash.prototype.constructor = lodash;
        LodashWrapper.prototype = baseCreate(baseLodash.prototype);
        LodashWrapper.prototype.constructor = LodashWrapper;
        function LazyWrapper(value) {
          this.__wrapped__ = value;
          this.__actions__ = [];
          this.__dir__ = 1;
          this.__filtered__ = false;
          this.__iteratees__ = [];
          this.__takeCount__ = MAX_ARRAY_LENGTH;
          this.__views__ = [];
        }
        function lazyClone() {
          var result2 = new LazyWrapper(this.__wrapped__);
          result2.__actions__ = copyArray(this.__actions__);
          result2.__dir__ = this.__dir__;
          result2.__filtered__ = this.__filtered__;
          result2.__iteratees__ = copyArray(this.__iteratees__);
          result2.__takeCount__ = this.__takeCount__;
          result2.__views__ = copyArray(this.__views__);
          return result2;
        }
        function lazyReverse() {
          if (this.__filtered__) {
            var result2 = new LazyWrapper(this);
            result2.__dir__ = -1;
            result2.__filtered__ = true;
          } else {
            result2 = this.clone();
            result2.__dir__ *= -1;
          }
          return result2;
        }
        function lazyValue() {
          var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray2(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
          if (!isArr || !isRight && arrLength == length && takeCount == length) {
            return baseWrapperValue(array, this.__actions__);
          }
          var result2 = [];
          outer:
            while (length-- && resIndex < takeCount) {
              index += dir;
              var iterIndex = -1, value = array[index];
              while (++iterIndex < iterLength) {
                var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
                if (type == LAZY_MAP_FLAG) {
                  value = computed;
                } else if (!computed) {
                  if (type == LAZY_FILTER_FLAG) {
                    continue outer;
                  } else {
                    break outer;
                  }
                }
              }
              result2[resIndex++] = value;
            }
          return result2;
        }
        LazyWrapper.prototype = baseCreate(baseLodash.prototype);
        LazyWrapper.prototype.constructor = LazyWrapper;
        function Hash(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function hashClear() {
          this.__data__ = nativeCreate ? nativeCreate(null) : {};
          this.size = 0;
        }
        function hashDelete(key) {
          var result2 = this.has(key) && delete this.__data__[key];
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function hashGet(key) {
          var data = this.__data__;
          if (nativeCreate) {
            var result2 = data[key];
            return result2 === HASH_UNDEFINED ? undefined2 : result2;
          }
          return hasOwnProperty.call(data, key) ? data[key] : undefined2;
        }
        function hashHas(key) {
          var data = this.__data__;
          return nativeCreate ? data[key] !== undefined2 : hasOwnProperty.call(data, key);
        }
        function hashSet(key, value) {
          var data = this.__data__;
          this.size += this.has(key) ? 0 : 1;
          data[key] = nativeCreate && value === undefined2 ? HASH_UNDEFINED : value;
          return this;
        }
        Hash.prototype.clear = hashClear;
        Hash.prototype["delete"] = hashDelete;
        Hash.prototype.get = hashGet;
        Hash.prototype.has = hashHas;
        Hash.prototype.set = hashSet;
        function ListCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function listCacheClear() {
          this.__data__ = [];
          this.size = 0;
        }
        function listCacheDelete(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            return false;
          }
          var lastIndex = data.length - 1;
          if (index == lastIndex) {
            data.pop();
          } else {
            splice.call(data, index, 1);
          }
          --this.size;
          return true;
        }
        function listCacheGet(key) {
          var data = this.__data__, index = assocIndexOf(data, key);
          return index < 0 ? undefined2 : data[index][1];
        }
        function listCacheHas(key) {
          return assocIndexOf(this.__data__, key) > -1;
        }
        function listCacheSet(key, value) {
          var data = this.__data__, index = assocIndexOf(data, key);
          if (index < 0) {
            ++this.size;
            data.push([key, value]);
          } else {
            data[index][1] = value;
          }
          return this;
        }
        ListCache.prototype.clear = listCacheClear;
        ListCache.prototype["delete"] = listCacheDelete;
        ListCache.prototype.get = listCacheGet;
        ListCache.prototype.has = listCacheHas;
        ListCache.prototype.set = listCacheSet;
        function MapCache(entries) {
          var index = -1, length = entries == null ? 0 : entries.length;
          this.clear();
          while (++index < length) {
            var entry = entries[index];
            this.set(entry[0], entry[1]);
          }
        }
        function mapCacheClear() {
          this.size = 0;
          this.__data__ = {
            "hash": new Hash(),
            "map": new (Map2 || ListCache)(),
            "string": new Hash()
          };
        }
        function mapCacheDelete(key) {
          var result2 = getMapData(this, key)["delete"](key);
          this.size -= result2 ? 1 : 0;
          return result2;
        }
        function mapCacheGet(key) {
          return getMapData(this, key).get(key);
        }
        function mapCacheHas(key) {
          return getMapData(this, key).has(key);
        }
        function mapCacheSet(key, value) {
          var data = getMapData(this, key), size2 = data.size;
          data.set(key, value);
          this.size += data.size == size2 ? 0 : 1;
          return this;
        }
        MapCache.prototype.clear = mapCacheClear;
        MapCache.prototype["delete"] = mapCacheDelete;
        MapCache.prototype.get = mapCacheGet;
        MapCache.prototype.has = mapCacheHas;
        MapCache.prototype.set = mapCacheSet;
        function SetCache(values2) {
          var index = -1, length = values2 == null ? 0 : values2.length;
          this.__data__ = new MapCache();
          while (++index < length) {
            this.add(values2[index]);
          }
        }
        function setCacheAdd(value) {
          this.__data__.set(value, HASH_UNDEFINED);
          return this;
        }
        function setCacheHas(value) {
          return this.__data__.has(value);
        }
        SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
        SetCache.prototype.has = setCacheHas;
        function Stack(entries) {
          var data = this.__data__ = new ListCache(entries);
          this.size = data.size;
        }
        function stackClear() {
          this.__data__ = new ListCache();
          this.size = 0;
        }
        function stackDelete(key) {
          var data = this.__data__, result2 = data["delete"](key);
          this.size = data.size;
          return result2;
        }
        function stackGet(key) {
          return this.__data__.get(key);
        }
        function stackHas(key) {
          return this.__data__.has(key);
        }
        function stackSet(key, value) {
          var data = this.__data__;
          if (data instanceof ListCache) {
            var pairs = data.__data__;
            if (!Map2 || pairs.length < LARGE_ARRAY_SIZE - 1) {
              pairs.push([key, value]);
              this.size = ++data.size;
              return this;
            }
            data = this.__data__ = new MapCache(pairs);
          }
          data.set(key, value);
          this.size = data.size;
          return this;
        }
        Stack.prototype.clear = stackClear;
        Stack.prototype["delete"] = stackDelete;
        Stack.prototype.get = stackGet;
        Stack.prototype.has = stackHas;
        Stack.prototype.set = stackSet;
        function arrayLikeKeys(value, inherited) {
          var isArr = isArray2(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
          for (var key in value) {
            if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
            (key == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            isBuff && (key == "offset" || key == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
            isIndex(key, length)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function arraySample(array) {
          var length = array.length;
          return length ? array[baseRandom(0, length - 1)] : undefined2;
        }
        function arraySampleSize(array, n) {
          return shuffleSelf(copyArray(array), baseClamp(n, 0, array.length));
        }
        function arrayShuffle(array) {
          return shuffleSelf(copyArray(array));
        }
        function assignMergeValue(object, key, value) {
          if (value !== undefined2 && !eq(object[key], value) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assignValue(object, key, value) {
          var objValue = object[key];
          if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined2 && !(key in object)) {
            baseAssignValue(object, key, value);
          }
        }
        function assocIndexOf(array, key) {
          var length = array.length;
          while (length--) {
            if (eq(array[length][0], key)) {
              return length;
            }
          }
          return -1;
        }
        function baseAggregator(collection, setter, iteratee2, accumulator) {
          baseEach(collection, function(value, key, collection2) {
            setter(accumulator, value, iteratee2(value), collection2);
          });
          return accumulator;
        }
        function baseAssign(object, source) {
          return object && copyObject(source, keys(source), object);
        }
        function baseAssignIn(object, source) {
          return object && copyObject(source, keysIn(source), object);
        }
        function baseAssignValue(object, key, value) {
          if (key == "__proto__" && defineProperty4) {
            defineProperty4(object, key, {
              "configurable": true,
              "enumerable": true,
              "value": value,
              "writable": true
            });
          } else {
            object[key] = value;
          }
        }
        function baseAt(object, paths) {
          var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
          while (++index < length) {
            result2[index] = skip ? undefined2 : get(object, paths[index]);
          }
          return result2;
        }
        function baseClamp(number, lower, upper) {
          if (number === number) {
            if (upper !== undefined2) {
              number = number <= upper ? number : upper;
            }
            if (lower !== undefined2) {
              number = number >= lower ? number : lower;
            }
          }
          return number;
        }
        function baseClone(value, bitmask, customizer, key, object, stack) {
          var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
          if (customizer) {
            result2 = object ? customizer(value, key, object, stack) : customizer(value);
          }
          if (result2 !== undefined2) {
            return result2;
          }
          if (!isObject(value)) {
            return value;
          }
          var isArr = isArray2(value);
          if (isArr) {
            result2 = initCloneArray(value);
            if (!isDeep) {
              return copyArray(value, result2);
            }
          } else {
            var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
            if (isBuffer(value)) {
              return cloneBuffer(value, isDeep);
            }
            if (tag == objectTag || tag == argsTag || isFunc && !object) {
              result2 = isFlat || isFunc ? {} : initCloneObject(value);
              if (!isDeep) {
                return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
              }
            } else {
              if (!cloneableTags[tag]) {
                return object ? value : {};
              }
              result2 = initCloneByTag(value, tag, isDeep);
            }
          }
          stack || (stack = new Stack());
          var stacked = stack.get(value);
          if (stacked) {
            return stacked;
          }
          stack.set(value, result2);
          if (isSet(value)) {
            value.forEach(function(subValue) {
              result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
            });
          } else if (isMap(value)) {
            value.forEach(function(subValue, key2) {
              result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
            });
          }
          var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
          var props = isArr ? undefined2 : keysFunc(value);
          arrayEach(props || value, function(subValue, key2) {
            if (props) {
              key2 = subValue;
              subValue = value[key2];
            }
            assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
          return result2;
        }
        function baseConforms(source) {
          var props = keys(source);
          return function(object) {
            return baseConformsTo(object, source, props);
          };
        }
        function baseConformsTo(object, source, props) {
          var length = props.length;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (length--) {
            var key = props[length], predicate = source[key], value = object[key];
            if (value === undefined2 && !(key in object) || !predicate(value)) {
              return false;
            }
          }
          return true;
        }
        function baseDelay(func, wait, args) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return setTimeout2(function() {
            func.apply(undefined2, args);
          }, wait);
        }
        function baseDifference(array, values2, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
          if (!length) {
            return result2;
          }
          if (iteratee2) {
            values2 = arrayMap(values2, baseUnary(iteratee2));
          }
          if (comparator) {
            includes2 = arrayIncludesWith;
            isCommon = false;
          } else if (values2.length >= LARGE_ARRAY_SIZE) {
            includes2 = cacheHas;
            isCommon = false;
            values2 = new SetCache(values2);
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var valuesIndex = valuesLength;
                while (valuesIndex--) {
                  if (values2[valuesIndex] === computed) {
                    continue outer;
                  }
                }
                result2.push(value);
              } else if (!includes2(values2, computed, comparator)) {
                result2.push(value);
              }
            }
          return result2;
        }
        var baseEach = createBaseEach(baseForOwn);
        var baseEachRight = createBaseEach(baseForOwnRight, true);
        function baseEvery(collection, predicate) {
          var result2 = true;
          baseEach(collection, function(value, index, collection2) {
            result2 = !!predicate(value, index, collection2);
            return result2;
          });
          return result2;
        }
        function baseExtremum(array, iteratee2, comparator) {
          var index = -1, length = array.length;
          while (++index < length) {
            var value = array[index], current = iteratee2(value);
            if (current != null && (computed === undefined2 ? current === current && !isSymbol(current) : comparator(current, computed))) {
              var computed = current, result2 = value;
            }
          }
          return result2;
        }
        function baseFill(array, value, start, end) {
          var length = array.length;
          start = toInteger(start);
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end === undefined2 || end > length ? length : toInteger(end);
          if (end < 0) {
            end += length;
          }
          end = start > end ? 0 : toLength(end);
          while (start < end) {
            array[start++] = value;
          }
          return array;
        }
        function baseFilter(collection, predicate) {
          var result2 = [];
          baseEach(collection, function(value, index, collection2) {
            if (predicate(value, index, collection2)) {
              result2.push(value);
            }
          });
          return result2;
        }
        function baseFlatten(array, depth, predicate, isStrict, result2) {
          var index = -1, length = array.length;
          predicate || (predicate = isFlattenable);
          result2 || (result2 = []);
          while (++index < length) {
            var value = array[index];
            if (depth > 0 && predicate(value)) {
              if (depth > 1) {
                baseFlatten(value, depth - 1, predicate, isStrict, result2);
              } else {
                arrayPush(result2, value);
              }
            } else if (!isStrict) {
              result2[result2.length] = value;
            }
          }
          return result2;
        }
        var baseFor = createBaseFor();
        var baseForRight = createBaseFor(true);
        function baseForOwn(object, iteratee2) {
          return object && baseFor(object, iteratee2, keys);
        }
        function baseForOwnRight(object, iteratee2) {
          return object && baseForRight(object, iteratee2, keys);
        }
        function baseFunctions(object, props) {
          return arrayFilter(props, function(key) {
            return isFunction2(object[key]);
          });
        }
        function baseGet(object, path3) {
          path3 = castPath(path3, object);
          var index = 0, length = path3.length;
          while (object != null && index < length) {
            object = object[toKey(path3[index++])];
          }
          return index && index == length ? object : undefined2;
        }
        function baseGetAllKeys(object, keysFunc, symbolsFunc) {
          var result2 = keysFunc(object);
          return isArray2(object) ? result2 : arrayPush(result2, symbolsFunc(object));
        }
        function baseGetTag(value) {
          if (value == null) {
            return value === undefined2 ? undefinedTag : nullTag;
          }
          return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString2(value);
        }
        function baseGt(value, other) {
          return value > other;
        }
        function baseHas(object, key) {
          return object != null && hasOwnProperty.call(object, key);
        }
        function baseHasIn(object, key) {
          return object != null && key in Object2(object);
        }
        function baseInRange(number, start, end) {
          return number >= nativeMin(start, end) && number < nativeMax(start, end);
        }
        function baseIntersection(arrays, iteratee2, comparator) {
          var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
          while (othIndex--) {
            var array = arrays[othIndex];
            if (othIndex && iteratee2) {
              array = arrayMap(array, baseUnary(iteratee2));
            }
            maxLength = nativeMin(array.length, maxLength);
            caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined2;
          }
          array = arrays[0];
          var index = -1, seen = caches[0];
          outer:
            while (++index < length && result2.length < maxLength) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
                othIndex = othLength;
                while (--othIndex) {
                  var cache = caches[othIndex];
                  if (!(cache ? cacheHas(cache, computed) : includes2(arrays[othIndex], computed, comparator))) {
                    continue outer;
                  }
                }
                if (seen) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseInverter(object, setter, iteratee2, accumulator) {
          baseForOwn(object, function(value, key, object2) {
            setter(accumulator, iteratee2(value), key, object2);
          });
          return accumulator;
        }
        function baseInvoke(object, path3, args) {
          path3 = castPath(path3, object);
          object = parent(object, path3);
          var func = object == null ? object : object[toKey(last(path3))];
          return func == null ? undefined2 : apply(func, object, args);
        }
        function baseIsArguments(value) {
          return isObjectLike(value) && baseGetTag(value) == argsTag;
        }
        function baseIsArrayBuffer(value) {
          return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
        }
        function baseIsDate(value) {
          return isObjectLike(value) && baseGetTag(value) == dateTag;
        }
        function baseIsEqual(value, other, bitmask, customizer, stack) {
          if (value === other) {
            return true;
          }
          if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
            return value !== value && other !== other;
          }
          return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
        }
        function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
          var objIsArr = isArray2(object), othIsArr = isArray2(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
          objTag = objTag == argsTag ? objectTag : objTag;
          othTag = othTag == argsTag ? objectTag : othTag;
          var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
          if (isSameTag && isBuffer(object)) {
            if (!isBuffer(other)) {
              return false;
            }
            objIsArr = true;
            objIsObj = false;
          }
          if (isSameTag && !objIsObj) {
            stack || (stack = new Stack());
            return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
          }
          if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
            var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
            if (objIsWrapped || othIsWrapped) {
              var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
              stack || (stack = new Stack());
              return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
            }
          }
          if (!isSameTag) {
            return false;
          }
          stack || (stack = new Stack());
          return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
        }
        function baseIsMap(value) {
          return isObjectLike(value) && getTag(value) == mapTag;
        }
        function baseIsMatch(object, source, matchData, customizer) {
          var index = matchData.length, length = index, noCustomizer = !customizer;
          if (object == null) {
            return !length;
          }
          object = Object2(object);
          while (index--) {
            var data = matchData[index];
            if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
              return false;
            }
          }
          while (++index < length) {
            data = matchData[index];
            var key = data[0], objValue = object[key], srcValue = data[1];
            if (noCustomizer && data[2]) {
              if (objValue === undefined2 && !(key in object)) {
                return false;
              }
            } else {
              var stack = new Stack();
              if (customizer) {
                var result2 = customizer(objValue, srcValue, key, object, source, stack);
              }
              if (!(result2 === undefined2 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
                return false;
              }
            }
          }
          return true;
        }
        function baseIsNative(value) {
          if (!isObject(value) || isMasked(value)) {
            return false;
          }
          var pattern = isFunction2(value) ? reIsNative : reIsHostCtor;
          return pattern.test(toSource(value));
        }
        function baseIsRegExp(value) {
          return isObjectLike(value) && baseGetTag(value) == regexpTag;
        }
        function baseIsSet(value) {
          return isObjectLike(value) && getTag(value) == setTag;
        }
        function baseIsTypedArray(value) {
          return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
        }
        function baseIteratee(value) {
          if (typeof value == "function") {
            return value;
          }
          if (value == null) {
            return identity;
          }
          if (typeof value == "object") {
            return isArray2(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
          }
          return property(value);
        }
        function baseKeys(object) {
          if (!isPrototype(object)) {
            return nativeKeys(object);
          }
          var result2 = [];
          for (var key in Object2(object)) {
            if (hasOwnProperty.call(object, key) && key != "constructor") {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseKeysIn(object) {
          if (!isObject(object)) {
            return nativeKeysIn(object);
          }
          var isProto = isPrototype(object), result2 = [];
          for (var key in object) {
            if (!(key == "constructor" && (isProto || !hasOwnProperty.call(object, key)))) {
              result2.push(key);
            }
          }
          return result2;
        }
        function baseLt(value, other) {
          return value < other;
        }
        function baseMap(collection, iteratee2) {
          var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value, key, collection2) {
            result2[++index] = iteratee2(value, key, collection2);
          });
          return result2;
        }
        function baseMatches(source) {
          var matchData = getMatchData(source);
          if (matchData.length == 1 && matchData[0][2]) {
            return matchesStrictComparable(matchData[0][0], matchData[0][1]);
          }
          return function(object) {
            return object === source || baseIsMatch(object, source, matchData);
          };
        }
        function baseMatchesProperty(path3, srcValue) {
          if (isKey(path3) && isStrictComparable(srcValue)) {
            return matchesStrictComparable(toKey(path3), srcValue);
          }
          return function(object) {
            var objValue = get(object, path3);
            return objValue === undefined2 && objValue === srcValue ? hasIn(object, path3) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
          };
        }
        function baseMerge(object, source, srcIndex, customizer, stack) {
          if (object === source) {
            return;
          }
          baseFor(source, function(srcValue, key) {
            stack || (stack = new Stack());
            if (isObject(srcValue)) {
              baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
            } else {
              var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined2;
              if (newValue === undefined2) {
                newValue = srcValue;
              }
              assignMergeValue(object, key, newValue);
            }
          }, keysIn);
        }
        function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
          var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
          if (stacked) {
            assignMergeValue(object, key, stacked);
            return;
          }
          var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined2;
          var isCommon = newValue === undefined2;
          if (isCommon) {
            var isArr = isArray2(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
            newValue = srcValue;
            if (isArr || isBuff || isTyped) {
              if (isArray2(objValue)) {
                newValue = objValue;
              } else if (isArrayLikeObject(objValue)) {
                newValue = copyArray(objValue);
              } else if (isBuff) {
                isCommon = false;
                newValue = cloneBuffer(srcValue, true);
              } else if (isTyped) {
                isCommon = false;
                newValue = cloneTypedArray(srcValue, true);
              } else {
                newValue = [];
              }
            } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
              newValue = objValue;
              if (isArguments(objValue)) {
                newValue = toPlainObject(objValue);
              } else if (!isObject(objValue) || isFunction2(objValue)) {
                newValue = initCloneObject(srcValue);
              }
            } else {
              isCommon = false;
            }
          }
          if (isCommon) {
            stack.set(srcValue, newValue);
            mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
            stack["delete"](srcValue);
          }
          assignMergeValue(object, key, newValue);
        }
        function baseNth(array, n) {
          var length = array.length;
          if (!length) {
            return;
          }
          n += n < 0 ? length : 0;
          return isIndex(n, length) ? array[n] : undefined2;
        }
        function baseOrderBy(collection, iteratees, orders) {
          if (iteratees.length) {
            iteratees = arrayMap(iteratees, function(iteratee2) {
              if (isArray2(iteratee2)) {
                return function(value) {
                  return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
                };
              }
              return iteratee2;
            });
          } else {
            iteratees = [identity];
          }
          var index = -1;
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          var result2 = baseMap(collection, function(value, key, collection2) {
            var criteria = arrayMap(iteratees, function(iteratee2) {
              return iteratee2(value);
            });
            return { "criteria": criteria, "index": ++index, "value": value };
          });
          return baseSortBy(result2, function(object, other) {
            return compareMultiple(object, other, orders);
          });
        }
        function basePick(object, paths) {
          return basePickBy(object, paths, function(value, path3) {
            return hasIn(object, path3);
          });
        }
        function basePickBy(object, paths, predicate) {
          var index = -1, length = paths.length, result2 = {};
          while (++index < length) {
            var path3 = paths[index], value = baseGet(object, path3);
            if (predicate(value, path3)) {
              baseSet(result2, castPath(path3, object), value);
            }
          }
          return result2;
        }
        function basePropertyDeep(path3) {
          return function(object) {
            return baseGet(object, path3);
          };
        }
        function basePullAll(array, values2, iteratee2, comparator) {
          var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
          if (array === values2) {
            values2 = copyArray(values2);
          }
          if (iteratee2) {
            seen = arrayMap(array, baseUnary(iteratee2));
          }
          while (++index < length) {
            var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
            while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
              if (seen !== array) {
                splice.call(seen, fromIndex, 1);
              }
              splice.call(array, fromIndex, 1);
            }
          }
          return array;
        }
        function basePullAt(array, indexes) {
          var length = array ? indexes.length : 0, lastIndex = length - 1;
          while (length--) {
            var index = indexes[length];
            if (length == lastIndex || index !== previous) {
              var previous = index;
              if (isIndex(index)) {
                splice.call(array, index, 1);
              } else {
                baseUnset(array, index);
              }
            }
          }
          return array;
        }
        function baseRandom(lower, upper) {
          return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
        }
        function baseRange(start, end, step, fromRight) {
          var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
          while (length--) {
            result2[fromRight ? length : ++index] = start;
            start += step;
          }
          return result2;
        }
        function baseRepeat(string, n) {
          var result2 = "";
          if (!string || n < 1 || n > MAX_SAFE_INTEGER) {
            return result2;
          }
          do {
            if (n % 2) {
              result2 += string;
            }
            n = nativeFloor(n / 2);
            if (n) {
              string += string;
            }
          } while (n);
          return result2;
        }
        function baseRest(func, start) {
          return setToString(overRest(func, start, identity), func + "");
        }
        function baseSample(collection) {
          return arraySample(values(collection));
        }
        function baseSampleSize(collection, n) {
          var array = values(collection);
          return shuffleSelf(array, baseClamp(n, 0, array.length));
        }
        function baseSet(object, path3, value, customizer) {
          if (!isObject(object)) {
            return object;
          }
          path3 = castPath(path3, object);
          var index = -1, length = path3.length, lastIndex = length - 1, nested = object;
          while (nested != null && ++index < length) {
            var key = toKey(path3[index]), newValue = value;
            if (key === "__proto__" || key === "constructor" || key === "prototype") {
              return object;
            }
            if (index != lastIndex) {
              var objValue = nested[key];
              newValue = customizer ? customizer(objValue, key, nested) : undefined2;
              if (newValue === undefined2) {
                newValue = isObject(objValue) ? objValue : isIndex(path3[index + 1]) ? [] : {};
              }
            }
            assignValue(nested, key, newValue);
            nested = nested[key];
          }
          return object;
        }
        var baseSetData = !metaMap ? identity : function(func, data) {
          metaMap.set(func, data);
          return func;
        };
        var baseSetToString = !defineProperty4 ? identity : function(func, string) {
          return defineProperty4(func, "toString", {
            "configurable": true,
            "enumerable": false,
            "value": constant(string),
            "writable": true
          });
        };
        function baseShuffle(collection) {
          return shuffleSelf(values(collection));
        }
        function baseSlice(array, start, end) {
          var index = -1, length = array.length;
          if (start < 0) {
            start = -start > length ? 0 : length + start;
          }
          end = end > length ? length : end;
          if (end < 0) {
            end += length;
          }
          length = start > end ? 0 : end - start >>> 0;
          start >>>= 0;
          var result2 = Array2(length);
          while (++index < length) {
            result2[index] = array[index + start];
          }
          return result2;
        }
        function baseSome(collection, predicate) {
          var result2;
          baseEach(collection, function(value, index, collection2) {
            result2 = predicate(value, index, collection2);
            return !result2;
          });
          return !!result2;
        }
        function baseSortedIndex(array, value, retHighest) {
          var low = 0, high = array == null ? low : array.length;
          if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
            while (low < high) {
              var mid = low + high >>> 1, computed = array[mid];
              if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
                low = mid + 1;
              } else {
                high = mid;
              }
            }
            return high;
          }
          return baseSortedIndexBy(array, value, identity, retHighest);
        }
        function baseSortedIndexBy(array, value, iteratee2, retHighest) {
          var low = 0, high = array == null ? 0 : array.length;
          if (high === 0) {
            return 0;
          }
          value = iteratee2(value);
          var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined2;
          while (low < high) {
            var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined2, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
            if (valIsNaN) {
              var setLow = retHighest || othIsReflexive;
            } else if (valIsUndefined) {
              setLow = othIsReflexive && (retHighest || othIsDefined);
            } else if (valIsNull) {
              setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
            } else if (valIsSymbol) {
              setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
            } else if (othIsNull || othIsSymbol) {
              setLow = false;
            } else {
              setLow = retHighest ? computed <= value : computed < value;
            }
            if (setLow) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return nativeMin(high, MAX_ARRAY_INDEX);
        }
        function baseSortedUniq(array, iteratee2) {
          var index = -1, length = array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            if (!index || !eq(computed, seen)) {
              var seen = computed;
              result2[resIndex++] = value === 0 ? 0 : value;
            }
          }
          return result2;
        }
        function baseToNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          return +value;
        }
        function baseToString(value) {
          if (typeof value == "string") {
            return value;
          }
          if (isArray2(value)) {
            return arrayMap(value, baseToString) + "";
          }
          if (isSymbol(value)) {
            return symbolToString ? symbolToString.call(value) : "";
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function baseUniq(array, iteratee2, comparator) {
          var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
          if (comparator) {
            isCommon = false;
            includes2 = arrayIncludesWith;
          } else if (length >= LARGE_ARRAY_SIZE) {
            var set2 = iteratee2 ? null : createSet(array);
            if (set2) {
              return setToArray(set2);
            }
            isCommon = false;
            includes2 = cacheHas;
            seen = new SetCache();
          } else {
            seen = iteratee2 ? [] : result2;
          }
          outer:
            while (++index < length) {
              var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
              value = comparator || value !== 0 ? value : 0;
              if (isCommon && computed === computed) {
                var seenIndex = seen.length;
                while (seenIndex--) {
                  if (seen[seenIndex] === computed) {
                    continue outer;
                  }
                }
                if (iteratee2) {
                  seen.push(computed);
                }
                result2.push(value);
              } else if (!includes2(seen, computed, comparator)) {
                if (seen !== result2) {
                  seen.push(computed);
                }
                result2.push(value);
              }
            }
          return result2;
        }
        function baseUnset(object, path3) {
          path3 = castPath(path3, object);
          object = parent(object, path3);
          return object == null || delete object[toKey(last(path3))];
        }
        function baseUpdate(object, path3, updater, customizer) {
          return baseSet(object, path3, updater(baseGet(object, path3)), customizer);
        }
        function baseWhile(array, predicate, isDrop, fromRight) {
          var length = array.length, index = fromRight ? length : -1;
          while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
          }
          return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
        }
        function baseWrapperValue(value, actions) {
          var result2 = value;
          if (result2 instanceof LazyWrapper) {
            result2 = result2.value();
          }
          return arrayReduce(actions, function(result3, action) {
            return action.func.apply(action.thisArg, arrayPush([result3], action.args));
          }, result2);
        }
        function baseXor(arrays, iteratee2, comparator) {
          var length = arrays.length;
          if (length < 2) {
            return length ? baseUniq(arrays[0]) : [];
          }
          var index = -1, result2 = Array2(length);
          while (++index < length) {
            var array = arrays[index], othIndex = -1;
            while (++othIndex < length) {
              if (othIndex != index) {
                result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
              }
            }
          }
          return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
        }
        function baseZipObject(props, values2, assignFunc) {
          var index = -1, length = props.length, valsLength = values2.length, result2 = {};
          while (++index < length) {
            var value = index < valsLength ? values2[index] : undefined2;
            assignFunc(result2, props[index], value);
          }
          return result2;
        }
        function castArrayLikeObject(value) {
          return isArrayLikeObject(value) ? value : [];
        }
        function castFunction(value) {
          return typeof value == "function" ? value : identity;
        }
        function castPath(value, object) {
          if (isArray2(value)) {
            return value;
          }
          return isKey(value, object) ? [value] : stringToPath(toString(value));
        }
        var castRest = baseRest;
        function castSlice(array, start, end) {
          var length = array.length;
          end = end === undefined2 ? length : end;
          return !start && end >= length ? array : baseSlice(array, start, end);
        }
        var clearTimeout2 = ctxClearTimeout || function(id) {
          return root.clearTimeout(id);
        };
        function cloneBuffer(buffer, isDeep) {
          if (isDeep) {
            return buffer.slice();
          }
          var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
          buffer.copy(result2);
          return result2;
        }
        function cloneArrayBuffer(arrayBuffer) {
          var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
          new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
          return result2;
        }
        function cloneDataView(dataView, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
          return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
        }
        function cloneRegExp(regexp) {
          var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
          result2.lastIndex = regexp.lastIndex;
          return result2;
        }
        function cloneSymbol(symbol) {
          return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
        }
        function cloneTypedArray(typedArray, isDeep) {
          var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
          return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
        }
        function compareAscending(value, other) {
          if (value !== other) {
            var valIsDefined = value !== undefined2, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
            var othIsDefined = other !== undefined2, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
            if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
              return 1;
            }
            if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
              return -1;
            }
          }
          return 0;
        }
        function compareMultiple(object, other, orders) {
          var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
          while (++index < length) {
            var result2 = compareAscending(objCriteria[index], othCriteria[index]);
            if (result2) {
              if (index >= ordersLength) {
                return result2;
              }
              var order = orders[index];
              return result2 * (order == "desc" ? -1 : 1);
            }
          }
          return object.index - other.index;
        }
        function composeArgs(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
          while (++leftIndex < leftLength) {
            result2[leftIndex] = partials[leftIndex];
          }
          while (++argsIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[holders[argsIndex]] = args[argsIndex];
            }
          }
          while (rangeLength--) {
            result2[leftIndex++] = args[argsIndex++];
          }
          return result2;
        }
        function composeArgsRight(args, partials, holders, isCurried) {
          var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
          while (++argsIndex < rangeLength) {
            result2[argsIndex] = args[argsIndex];
          }
          var offset = argsIndex;
          while (++rightIndex < rightLength) {
            result2[offset + rightIndex] = partials[rightIndex];
          }
          while (++holdersIndex < holdersLength) {
            if (isUncurried || argsIndex < argsLength) {
              result2[offset + holders[holdersIndex]] = args[argsIndex++];
            }
          }
          return result2;
        }
        function copyArray(source, array) {
          var index = -1, length = source.length;
          array || (array = Array2(length));
          while (++index < length) {
            array[index] = source[index];
          }
          return array;
        }
        function copyObject(source, props, object, customizer) {
          var isNew = !object;
          object || (object = {});
          var index = -1, length = props.length;
          while (++index < length) {
            var key = props[index];
            var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined2;
            if (newValue === undefined2) {
              newValue = source[key];
            }
            if (isNew) {
              baseAssignValue(object, key, newValue);
            } else {
              assignValue(object, key, newValue);
            }
          }
          return object;
        }
        function copySymbols(source, object) {
          return copyObject(source, getSymbols(source), object);
        }
        function copySymbolsIn(source, object) {
          return copyObject(source, getSymbolsIn(source), object);
        }
        function createAggregator(setter, initializer) {
          return function(collection, iteratee2) {
            var func = isArray2(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
            return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
          };
        }
        function createAssigner(assigner) {
          return baseRest(function(object, sources) {
            var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined2, guard = length > 2 ? sources[2] : undefined2;
            customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined2;
            if (guard && isIterateeCall(sources[0], sources[1], guard)) {
              customizer = length < 3 ? undefined2 : customizer;
              length = 1;
            }
            object = Object2(object);
            while (++index < length) {
              var source = sources[index];
              if (source) {
                assigner(object, source, index, customizer);
              }
            }
            return object;
          });
        }
        function createBaseEach(eachFunc, fromRight) {
          return function(collection, iteratee2) {
            if (collection == null) {
              return collection;
            }
            if (!isArrayLike(collection)) {
              return eachFunc(collection, iteratee2);
            }
            var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
            while (fromRight ? index-- : ++index < length) {
              if (iteratee2(iterable[index], index, iterable) === false) {
                break;
              }
            }
            return collection;
          };
        }
        function createBaseFor(fromRight) {
          return function(object, iteratee2, keysFunc) {
            var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
            while (length--) {
              var key = props[fromRight ? length : ++index];
              if (iteratee2(iterable[key], key, iterable) === false) {
                break;
              }
            }
            return object;
          };
        }
        function createBind(func, bitmask, thisArg) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return fn.apply(isBind ? thisArg : this, arguments);
          }
          return wrapper;
        }
        function createCaseFirst(methodName) {
          return function(string) {
            string = toString(string);
            var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined2;
            var chr = strSymbols ? strSymbols[0] : string.charAt(0);
            var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
            return chr[methodName]() + trailing;
          };
        }
        function createCompounder(callback) {
          return function(string) {
            return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
          };
        }
        function createCtor(Ctor) {
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return new Ctor();
              case 1:
                return new Ctor(args[0]);
              case 2:
                return new Ctor(args[0], args[1]);
              case 3:
                return new Ctor(args[0], args[1], args[2]);
              case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
              case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
              case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
              case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
            }
            var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
            return isObject(result2) ? result2 : thisBinding;
          };
        }
        function createCurry(func, bitmask, arity) {
          var Ctor = createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
            while (index--) {
              args[index] = arguments[index];
            }
            var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
            length -= holders.length;
            if (length < arity) {
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                undefined2,
                args,
                holders,
                undefined2,
                undefined2,
                arity - length
              );
            }
            var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            return apply(fn, this, args);
          }
          return wrapper;
        }
        function createFind(findIndexFunc) {
          return function(collection, predicate, fromIndex) {
            var iterable = Object2(collection);
            if (!isArrayLike(collection)) {
              var iteratee2 = getIteratee(predicate, 3);
              collection = keys(collection);
              predicate = function(key) {
                return iteratee2(iterable[key], key, iterable);
              };
            }
            var index = findIndexFunc(collection, predicate, fromIndex);
            return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined2;
          };
        }
        function createFlow(fromRight) {
          return flatRest(function(funcs) {
            var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
            if (fromRight) {
              funcs.reverse();
            }
            while (index--) {
              var func = funcs[index];
              if (typeof func != "function") {
                throw new TypeError2(FUNC_ERROR_TEXT);
              }
              if (prereq && !wrapper && getFuncName(func) == "wrapper") {
                var wrapper = new LodashWrapper([], true);
              }
            }
            index = wrapper ? index : length;
            while (++index < length) {
              func = funcs[index];
              var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined2;
              if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
                wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
              } else {
                wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
              }
            }
            return function() {
              var args = arguments, value = args[0];
              if (wrapper && args.length == 1 && isArray2(value)) {
                return wrapper.plant(value).value();
              }
              var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
              while (++index2 < length) {
                result2 = funcs[index2].call(this, result2);
              }
              return result2;
            };
          });
        }
        function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
          var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined2 : createCtor(func);
          function wrapper() {
            var length = arguments.length, args = Array2(length), index = length;
            while (index--) {
              args[index] = arguments[index];
            }
            if (isCurried) {
              var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
            }
            if (partials) {
              args = composeArgs(args, partials, holders, isCurried);
            }
            if (partialsRight) {
              args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
            }
            length -= holdersCount;
            if (isCurried && length < arity) {
              var newHolders = replaceHolders(args, placeholder);
              return createRecurry(
                func,
                bitmask,
                createHybrid,
                wrapper.placeholder,
                thisArg,
                args,
                newHolders,
                argPos,
                ary2,
                arity - length
              );
            }
            var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
            length = args.length;
            if (argPos) {
              args = reorder(args, argPos);
            } else if (isFlip && length > 1) {
              args.reverse();
            }
            if (isAry && ary2 < length) {
              args.length = ary2;
            }
            if (this && this !== root && this instanceof wrapper) {
              fn = Ctor || createCtor(fn);
            }
            return fn.apply(thisBinding, args);
          }
          return wrapper;
        }
        function createInverter(setter, toIteratee) {
          return function(object, iteratee2) {
            return baseInverter(object, setter, toIteratee(iteratee2), {});
          };
        }
        function createMathOperation(operator, defaultValue) {
          return function(value, other) {
            var result2;
            if (value === undefined2 && other === undefined2) {
              return defaultValue;
            }
            if (value !== undefined2) {
              result2 = value;
            }
            if (other !== undefined2) {
              if (result2 === undefined2) {
                return other;
              }
              if (typeof value == "string" || typeof other == "string") {
                value = baseToString(value);
                other = baseToString(other);
              } else {
                value = baseToNumber(value);
                other = baseToNumber(other);
              }
              result2 = operator(value, other);
            }
            return result2;
          };
        }
        function createOver(arrayFunc) {
          return flatRest(function(iteratees) {
            iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
            return baseRest(function(args) {
              var thisArg = this;
              return arrayFunc(iteratees, function(iteratee2) {
                return apply(iteratee2, thisArg, args);
              });
            });
          });
        }
        function createPadding(length, chars) {
          chars = chars === undefined2 ? " " : baseToString(chars);
          var charsLength = chars.length;
          if (charsLength < 2) {
            return charsLength ? baseRepeat(chars, length) : chars;
          }
          var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
          return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
        }
        function createPartial(func, bitmask, thisArg, partials) {
          var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
          function wrapper() {
            var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
            while (++leftIndex < leftLength) {
              args[leftIndex] = partials[leftIndex];
            }
            while (argsLength--) {
              args[leftIndex++] = arguments[++argsIndex];
            }
            return apply(fn, isBind ? thisArg : this, args);
          }
          return wrapper;
        }
        function createRange(fromRight) {
          return function(start, end, step) {
            if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
              end = step = undefined2;
            }
            start = toFinite(start);
            if (end === undefined2) {
              end = start;
              start = 0;
            } else {
              end = toFinite(end);
            }
            step = step === undefined2 ? start < end ? 1 : -1 : toFinite(step);
            return baseRange(start, end, step, fromRight);
          };
        }
        function createRelationalOperation(operator) {
          return function(value, other) {
            if (!(typeof value == "string" && typeof other == "string")) {
              value = toNumber(value);
              other = toNumber(other);
            }
            return operator(value, other);
          };
        }
        function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
          var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined2, newHoldersRight = isCurry ? undefined2 : holders, newPartials = isCurry ? partials : undefined2, newPartialsRight = isCurry ? undefined2 : partials;
          bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
          bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
          if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
            bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
          }
          var newData = [
            func,
            bitmask,
            thisArg,
            newPartials,
            newHolders,
            newPartialsRight,
            newHoldersRight,
            argPos,
            ary2,
            arity
          ];
          var result2 = wrapFunc.apply(undefined2, newData);
          if (isLaziable(func)) {
            setData(result2, newData);
          }
          result2.placeholder = placeholder;
          return setWrapToString(result2, func, bitmask);
        }
        function createRound(methodName) {
          var func = Math2[methodName];
          return function(number, precision) {
            number = toNumber(number);
            precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
            if (precision && nativeIsFinite(number)) {
              var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
              pair = (toString(value) + "e").split("e");
              return +(pair[0] + "e" + (+pair[1] - precision));
            }
            return func(number);
          };
        }
        var createSet = !(Set2 && 1 / setToArray(new Set2([, -0]))[1] == INFINITY) ? noop : function(values2) {
          return new Set2(values2);
        };
        function createToPairs(keysFunc) {
          return function(object) {
            var tag = getTag(object);
            if (tag == mapTag) {
              return mapToArray(object);
            }
            if (tag == setTag) {
              return setToPairs(object);
            }
            return baseToPairs(object, keysFunc(object));
          };
        }
        function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
          var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
          if (!isBindKey && typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var length = partials ? partials.length : 0;
          if (!length) {
            bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
            partials = holders = undefined2;
          }
          ary2 = ary2 === undefined2 ? ary2 : nativeMax(toInteger(ary2), 0);
          arity = arity === undefined2 ? arity : toInteger(arity);
          length -= holders ? holders.length : 0;
          if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
            var partialsRight = partials, holdersRight = holders;
            partials = holders = undefined2;
          }
          var data = isBindKey ? undefined2 : getData(func);
          var newData = [
            func,
            bitmask,
            thisArg,
            partials,
            holders,
            partialsRight,
            holdersRight,
            argPos,
            ary2,
            arity
          ];
          if (data) {
            mergeData(newData, data);
          }
          func = newData[0];
          bitmask = newData[1];
          thisArg = newData[2];
          partials = newData[3];
          holders = newData[4];
          arity = newData[9] = newData[9] === undefined2 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
          if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
            bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
          }
          if (!bitmask || bitmask == WRAP_BIND_FLAG) {
            var result2 = createBind(func, bitmask, thisArg);
          } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
            result2 = createCurry(func, bitmask, arity);
          } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
            result2 = createPartial(func, bitmask, thisArg, partials);
          } else {
            result2 = createHybrid.apply(undefined2, newData);
          }
          var setter = data ? baseSetData : setData;
          return setWrapToString(setter(result2, newData), func, bitmask);
        }
        function customDefaultsAssignIn(objValue, srcValue, key, object) {
          if (objValue === undefined2 || eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key)) {
            return srcValue;
          }
          return objValue;
        }
        function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
          if (isObject(objValue) && isObject(srcValue)) {
            stack.set(srcValue, objValue);
            baseMerge(objValue, srcValue, undefined2, customDefaultsMerge, stack);
            stack["delete"](srcValue);
          }
          return objValue;
        }
        function customOmitClone(value) {
          return isPlainObject(value) ? undefined2 : value;
        }
        function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
          if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
            return false;
          }
          var arrStacked = stack.get(array);
          var othStacked = stack.get(other);
          if (arrStacked && othStacked) {
            return arrStacked == other && othStacked == array;
          }
          var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined2;
          stack.set(array, other);
          stack.set(other, array);
          while (++index < arrLength) {
            var arrValue = array[index], othValue = other[index];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
            }
            if (compared !== undefined2) {
              if (compared) {
                continue;
              }
              result2 = false;
              break;
            }
            if (seen) {
              if (!arraySome(other, function(othValue2, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                  return seen.push(othIndex);
                }
              })) {
                result2 = false;
                break;
              }
            } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              result2 = false;
              break;
            }
          }
          stack["delete"](array);
          stack["delete"](other);
          return result2;
        }
        function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
          switch (tag) {
            case dataViewTag:
              if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
                return false;
              }
              object = object.buffer;
              other = other.buffer;
            case arrayBufferTag:
              if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
                return false;
              }
              return true;
            case boolTag:
            case dateTag:
            case numberTag:
              return eq(+object, +other);
            case errorTag:
              return object.name == other.name && object.message == other.message;
            case regexpTag:
            case stringTag:
              return object == other + "";
            case mapTag:
              var convert = mapToArray;
            case setTag:
              var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
              convert || (convert = setToArray);
              if (object.size != other.size && !isPartial) {
                return false;
              }
              var stacked = stack.get(object);
              if (stacked) {
                return stacked == other;
              }
              bitmask |= COMPARE_UNORDERED_FLAG;
              stack.set(object, other);
              var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
              stack["delete"](object);
              return result2;
            case symbolTag:
              if (symbolValueOf) {
                return symbolValueOf.call(object) == symbolValueOf.call(other);
              }
          }
          return false;
        }
        function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
          var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
          if (objLength != othLength && !isPartial) {
            return false;
          }
          var index = objLength;
          while (index--) {
            var key = objProps[index];
            if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
              return false;
            }
          }
          var objStacked = stack.get(object);
          var othStacked = stack.get(other);
          if (objStacked && othStacked) {
            return objStacked == other && othStacked == object;
          }
          var result2 = true;
          stack.set(object, other);
          stack.set(other, object);
          var skipCtor = isPartial;
          while (++index < objLength) {
            key = objProps[index];
            var objValue = object[key], othValue = other[key];
            if (customizer) {
              var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
            }
            if (!(compared === undefined2 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
              result2 = false;
              break;
            }
            skipCtor || (skipCtor = key == "constructor");
          }
          if (result2 && !skipCtor) {
            var objCtor = object.constructor, othCtor = other.constructor;
            if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
              result2 = false;
            }
          }
          stack["delete"](object);
          stack["delete"](other);
          return result2;
        }
        function flatRest(func) {
          return setToString(overRest(func, undefined2, flatten), func + "");
        }
        function getAllKeys(object) {
          return baseGetAllKeys(object, keys, getSymbols);
        }
        function getAllKeysIn(object) {
          return baseGetAllKeys(object, keysIn, getSymbolsIn);
        }
        var getData = !metaMap ? noop : function(func) {
          return metaMap.get(func);
        };
        function getFuncName(func) {
          var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty.call(realNames, result2) ? array.length : 0;
          while (length--) {
            var data = array[length], otherFunc = data.func;
            if (otherFunc == null || otherFunc == func) {
              return data.name;
            }
          }
          return result2;
        }
        function getHolder(func) {
          var object = hasOwnProperty.call(lodash, "placeholder") ? lodash : func;
          return object.placeholder;
        }
        function getIteratee() {
          var result2 = lodash.iteratee || iteratee;
          result2 = result2 === iteratee ? baseIteratee : result2;
          return arguments.length ? result2(arguments[0], arguments[1]) : result2;
        }
        function getMapData(map2, key) {
          var data = map2.__data__;
          return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
        }
        function getMatchData(object) {
          var result2 = keys(object), length = result2.length;
          while (length--) {
            var key = result2[length], value = object[key];
            result2[length] = [key, value, isStrictComparable(value)];
          }
          return result2;
        }
        function getNative(object, key) {
          var value = getValue(object, key);
          return baseIsNative(value) ? value : undefined2;
        }
        function getRawTag(value) {
          var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
          try {
            value[symToStringTag] = undefined2;
            var unmasked = true;
          } catch (e) {
          }
          var result2 = nativeObjectToString.call(value);
          if (unmasked) {
            if (isOwn) {
              value[symToStringTag] = tag;
            } else {
              delete value[symToStringTag];
            }
          }
          return result2;
        }
        var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
          if (object == null) {
            return [];
          }
          object = Object2(object);
          return arrayFilter(nativeGetSymbols(object), function(symbol) {
            return propertyIsEnumerable.call(object, symbol);
          });
        };
        var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
          var result2 = [];
          while (object) {
            arrayPush(result2, getSymbols(object));
            object = getPrototype(object);
          }
          return result2;
        };
        var getTag = baseGetTag;
        if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map2 && getTag(new Map2()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set2 && getTag(new Set2()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
          getTag = function(value) {
            var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined2, ctorString = Ctor ? toSource(Ctor) : "";
            if (ctorString) {
              switch (ctorString) {
                case dataViewCtorString:
                  return dataViewTag;
                case mapCtorString:
                  return mapTag;
                case promiseCtorString:
                  return promiseTag;
                case setCtorString:
                  return setTag;
                case weakMapCtorString:
                  return weakMapTag;
              }
            }
            return result2;
          };
        }
        function getView(start, end, transforms) {
          var index = -1, length = transforms.length;
          while (++index < length) {
            var data = transforms[index], size2 = data.size;
            switch (data.type) {
              case "drop":
                start += size2;
                break;
              case "dropRight":
                end -= size2;
                break;
              case "take":
                end = nativeMin(end, start + size2);
                break;
              case "takeRight":
                start = nativeMax(start, end - size2);
                break;
            }
          }
          return { "start": start, "end": end };
        }
        function getWrapDetails(source) {
          var match = source.match(reWrapDetails);
          return match ? match[1].split(reSplitDetails) : [];
        }
        function hasPath(object, path3, hasFunc) {
          path3 = castPath(path3, object);
          var index = -1, length = path3.length, result2 = false;
          while (++index < length) {
            var key = toKey(path3[index]);
            if (!(result2 = object != null && hasFunc(object, key))) {
              break;
            }
            object = object[key];
          }
          if (result2 || ++index != length) {
            return result2;
          }
          length = object == null ? 0 : object.length;
          return !!length && isLength(length) && isIndex(key, length) && (isArray2(object) || isArguments(object));
        }
        function initCloneArray(array) {
          var length = array.length, result2 = new array.constructor(length);
          if (length && typeof array[0] == "string" && hasOwnProperty.call(array, "index")) {
            result2.index = array.index;
            result2.input = array.input;
          }
          return result2;
        }
        function initCloneObject(object) {
          return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
        }
        function initCloneByTag(object, tag, isDeep) {
          var Ctor = object.constructor;
          switch (tag) {
            case arrayBufferTag:
              return cloneArrayBuffer(object);
            case boolTag:
            case dateTag:
              return new Ctor(+object);
            case dataViewTag:
              return cloneDataView(object, isDeep);
            case float32Tag:
            case float64Tag:
            case int8Tag:
            case int16Tag:
            case int32Tag:
            case uint8Tag:
            case uint8ClampedTag:
            case uint16Tag:
            case uint32Tag:
              return cloneTypedArray(object, isDeep);
            case mapTag:
              return new Ctor();
            case numberTag:
            case stringTag:
              return new Ctor(object);
            case regexpTag:
              return cloneRegExp(object);
            case setTag:
              return new Ctor();
            case symbolTag:
              return cloneSymbol(object);
          }
        }
        function insertWrapDetails(source, details) {
          var length = details.length;
          if (!length) {
            return source;
          }
          var lastIndex = length - 1;
          details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
          details = details.join(length > 2 ? ", " : " ");
          return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
        }
        function isFlattenable(value) {
          return isArray2(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
        }
        function isIndex(value, length) {
          var type = typeof value;
          length = length == null ? MAX_SAFE_INTEGER : length;
          return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
        }
        function isIterateeCall(value, index, object) {
          if (!isObject(object)) {
            return false;
          }
          var type = typeof index;
          if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
            return eq(object[index], value);
          }
          return false;
        }
        function isKey(value, object) {
          if (isArray2(value)) {
            return false;
          }
          var type = typeof value;
          if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
            return true;
          }
          return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
        }
        function isKeyable(value) {
          var type = typeof value;
          return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
        }
        function isLaziable(func) {
          var funcName = getFuncName(func), other = lodash[funcName];
          if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
            return false;
          }
          if (func === other) {
            return true;
          }
          var data = getData(other);
          return !!data && func === data[0];
        }
        function isMasked(func) {
          return !!maskSrcKey && maskSrcKey in func;
        }
        var isMaskable = coreJsData ? isFunction2 : stubFalse;
        function isPrototype(value) {
          var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
          return value === proto;
        }
        function isStrictComparable(value) {
          return value === value && !isObject(value);
        }
        function matchesStrictComparable(key, srcValue) {
          return function(object) {
            if (object == null) {
              return false;
            }
            return object[key] === srcValue && (srcValue !== undefined2 || key in Object2(object));
          };
        }
        function memoizeCapped(func) {
          var result2 = memoize(func, function(key) {
            if (cache.size === MAX_MEMOIZE_SIZE) {
              cache.clear();
            }
            return key;
          });
          var cache = result2.cache;
          return result2;
        }
        function mergeData(data, source) {
          var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
          var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
          if (!(isCommon || isCombo)) {
            return data;
          }
          if (srcBitmask & WRAP_BIND_FLAG) {
            data[2] = source[2];
            newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
          }
          var value = source[3];
          if (value) {
            var partials = data[3];
            data[3] = partials ? composeArgs(partials, value, source[4]) : value;
            data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
          }
          value = source[5];
          if (value) {
            partials = data[5];
            data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
            data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
          }
          value = source[7];
          if (value) {
            data[7] = value;
          }
          if (srcBitmask & WRAP_ARY_FLAG) {
            data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
          }
          if (data[9] == null) {
            data[9] = source[9];
          }
          data[0] = source[0];
          data[1] = newBitmask;
          return data;
        }
        function nativeKeysIn(object) {
          var result2 = [];
          if (object != null) {
            for (var key in Object2(object)) {
              result2.push(key);
            }
          }
          return result2;
        }
        function objectToString2(value) {
          return nativeObjectToString.call(value);
        }
        function overRest(func, start, transform2) {
          start = nativeMax(start === undefined2 ? func.length - 1 : start, 0);
          return function() {
            var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
            while (++index < length) {
              array[index] = args[start + index];
            }
            index = -1;
            var otherArgs = Array2(start + 1);
            while (++index < start) {
              otherArgs[index] = args[index];
            }
            otherArgs[start] = transform2(array);
            return apply(func, this, otherArgs);
          };
        }
        function parent(object, path3) {
          return path3.length < 2 ? object : baseGet(object, baseSlice(path3, 0, -1));
        }
        function reorder(array, indexes) {
          var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
          while (length--) {
            var index = indexes[length];
            array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined2;
          }
          return array;
        }
        function safeGet(object, key) {
          if (key === "constructor" && typeof object[key] === "function") {
            return;
          }
          if (key == "__proto__") {
            return;
          }
          return object[key];
        }
        var setData = shortOut(baseSetData);
        var setTimeout2 = ctxSetTimeout || function(func, wait) {
          return root.setTimeout(func, wait);
        };
        var setToString = shortOut(baseSetToString);
        function setWrapToString(wrapper, reference, bitmask) {
          var source = reference + "";
          return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
        }
        function shortOut(func) {
          var count = 0, lastCalled = 0;
          return function() {
            var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
            lastCalled = stamp;
            if (remaining > 0) {
              if (++count >= HOT_COUNT) {
                return arguments[0];
              }
            } else {
              count = 0;
            }
            return func.apply(undefined2, arguments);
          };
        }
        function shuffleSelf(array, size2) {
          var index = -1, length = array.length, lastIndex = length - 1;
          size2 = size2 === undefined2 ? length : size2;
          while (++index < size2) {
            var rand = baseRandom(index, lastIndex), value = array[rand];
            array[rand] = array[index];
            array[index] = value;
          }
          array.length = size2;
          return array;
        }
        var stringToPath = memoizeCapped(function(string) {
          var result2 = [];
          if (string.charCodeAt(0) === 46) {
            result2.push("");
          }
          string.replace(rePropName, function(match, number, quote, subString) {
            result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
          });
          return result2;
        });
        function toKey(value) {
          if (typeof value == "string" || isSymbol(value)) {
            return value;
          }
          var result2 = value + "";
          return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
        }
        function toSource(func) {
          if (func != null) {
            try {
              return funcToString.call(func);
            } catch (e) {
            }
            try {
              return func + "";
            } catch (e) {
            }
          }
          return "";
        }
        function updateWrapDetails(details, bitmask) {
          arrayEach(wrapFlags, function(pair) {
            var value = "_." + pair[0];
            if (bitmask & pair[1] && !arrayIncludes(details, value)) {
              details.push(value);
            }
          });
          return details.sort();
        }
        function wrapperClone(wrapper) {
          if (wrapper instanceof LazyWrapper) {
            return wrapper.clone();
          }
          var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
          result2.__actions__ = copyArray(wrapper.__actions__);
          result2.__index__ = wrapper.__index__;
          result2.__values__ = wrapper.__values__;
          return result2;
        }
        function chunk(array, size2, guard) {
          if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined2) {
            size2 = 1;
          } else {
            size2 = nativeMax(toInteger(size2), 0);
          }
          var length = array == null ? 0 : array.length;
          if (!length || size2 < 1) {
            return [];
          }
          var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
          while (index < length) {
            result2[resIndex++] = baseSlice(array, index, index += size2);
          }
          return result2;
        }
        function compact(array) {
          var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
          while (++index < length) {
            var value = array[index];
            if (value) {
              result2[resIndex++] = value;
            }
          }
          return result2;
        }
        function concat() {
          var length = arguments.length;
          if (!length) {
            return [];
          }
          var args = Array2(length - 1), array = arguments[0], index = length;
          while (index--) {
            args[index - 1] = arguments[index];
          }
          return arrayPush(isArray2(array) ? copyArray(array) : [array], baseFlatten(args, 1));
        }
        var difference = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
        });
        var differenceBy = baseRest(function(array, values2) {
          var iteratee2 = last(values2);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
        });
        var differenceWith = baseRest(function(array, values2) {
          var comparator = last(values2);
          if (isArrayLikeObject(comparator)) {
            comparator = undefined2;
          }
          return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined2, comparator) : [];
        });
        function drop(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function dropRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function dropRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
        }
        function dropWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
        }
        function fill(array, value, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
            start = 0;
            end = length;
          }
          return baseFill(array, value, start, end);
        }
        function findIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index);
        }
        function findLastIndex(array, predicate, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length - 1;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return baseFindIndex(array, getIteratee(predicate, 3), index, true);
        }
        function flatten(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, 1) : [];
        }
        function flattenDeep(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseFlatten(array, INFINITY) : [];
        }
        function flattenDepth(array, depth) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(array, depth);
        }
        function fromPairs(pairs) {
          var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
          while (++index < length) {
            var pair = pairs[index];
            result2[pair[0]] = pair[1];
          }
          return result2;
        }
        function head(array) {
          return array && array.length ? array[0] : undefined2;
        }
        function indexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = fromIndex == null ? 0 : toInteger(fromIndex);
          if (index < 0) {
            index = nativeMax(length + index, 0);
          }
          return baseIndexOf(array, value, index);
        }
        function initial(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 0, -1) : [];
        }
        var intersection = baseRest(function(arrays) {
          var mapped = arrayMap(arrays, castArrayLikeObject);
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
        });
        var intersectionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          if (iteratee2 === last(mapped)) {
            iteratee2 = undefined2;
          } else {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
        });
        var intersectionWith = baseRest(function(arrays) {
          var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          if (comparator) {
            mapped.pop();
          }
          return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined2, comparator) : [];
        });
        function join(array, separator) {
          return array == null ? "" : nativeJoin.call(array, separator);
        }
        function last(array) {
          var length = array == null ? 0 : array.length;
          return length ? array[length - 1] : undefined2;
        }
        function lastIndexOf(array, value, fromIndex) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return -1;
          }
          var index = length;
          if (fromIndex !== undefined2) {
            index = toInteger(fromIndex);
            index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
          }
          return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
        }
        function nth(array, n) {
          return array && array.length ? baseNth(array, toInteger(n)) : undefined2;
        }
        var pull = baseRest(pullAll);
        function pullAll(array, values2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
        }
        function pullAllBy(array, values2, iteratee2) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
        }
        function pullAllWith(array, values2, comparator) {
          return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined2, comparator) : array;
        }
        var pullAt = flatRest(function(array, indexes) {
          var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
          basePullAt(array, arrayMap(indexes, function(index) {
            return isIndex(index, length) ? +index : index;
          }).sort(compareAscending));
          return result2;
        });
        function remove4(array, predicate) {
          var result2 = [];
          if (!(array && array.length)) {
            return result2;
          }
          var index = -1, indexes = [], length = array.length;
          predicate = getIteratee(predicate, 3);
          while (++index < length) {
            var value = array[index];
            if (predicate(value, index, array)) {
              result2.push(value);
              indexes.push(index);
            }
          }
          basePullAt(array, indexes);
          return result2;
        }
        function reverse(array) {
          return array == null ? array : nativeReverse.call(array);
        }
        function slice(array, start, end) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
            start = 0;
            end = length;
          } else {
            start = start == null ? 0 : toInteger(start);
            end = end === undefined2 ? length : toInteger(end);
          }
          return baseSlice(array, start, end);
        }
        function sortedIndex(array, value) {
          return baseSortedIndex(array, value);
        }
        function sortedIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
        }
        function sortedIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value);
            if (index < length && eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedLastIndex(array, value) {
          return baseSortedIndex(array, value, true);
        }
        function sortedLastIndexBy(array, value, iteratee2) {
          return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
        }
        function sortedLastIndexOf(array, value) {
          var length = array == null ? 0 : array.length;
          if (length) {
            var index = baseSortedIndex(array, value, true) - 1;
            if (eq(array[index], value)) {
              return index;
            }
          }
          return -1;
        }
        function sortedUniq(array) {
          return array && array.length ? baseSortedUniq(array) : [];
        }
        function sortedUniqBy(array, iteratee2) {
          return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function tail(array) {
          var length = array == null ? 0 : array.length;
          return length ? baseSlice(array, 1, length) : [];
        }
        function take(array, n, guard) {
          if (!(array && array.length)) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          return baseSlice(array, 0, n < 0 ? 0 : n);
        }
        function takeRight(array, n, guard) {
          var length = array == null ? 0 : array.length;
          if (!length) {
            return [];
          }
          n = guard || n === undefined2 ? 1 : toInteger(n);
          n = length - n;
          return baseSlice(array, n < 0 ? 0 : n, length);
        }
        function takeRightWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
        }
        function takeWhile(array, predicate) {
          return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
        }
        var union = baseRest(function(arrays) {
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
        });
        var unionBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
        });
        var unionWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined2, comparator);
        });
        function uniq(array) {
          return array && array.length ? baseUniq(array) : [];
        }
        function uniqBy(array, iteratee2) {
          return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
        }
        function uniqWith(array, comparator) {
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return array && array.length ? baseUniq(array, undefined2, comparator) : [];
        }
        function unzip(array) {
          if (!(array && array.length)) {
            return [];
          }
          var length = 0;
          array = arrayFilter(array, function(group) {
            if (isArrayLikeObject(group)) {
              length = nativeMax(group.length, length);
              return true;
            }
          });
          return baseTimes(length, function(index) {
            return arrayMap(array, baseProperty(index));
          });
        }
        function unzipWith(array, iteratee2) {
          if (!(array && array.length)) {
            return [];
          }
          var result2 = unzip(array);
          if (iteratee2 == null) {
            return result2;
          }
          return arrayMap(result2, function(group) {
            return apply(iteratee2, undefined2, group);
          });
        }
        var without = baseRest(function(array, values2) {
          return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
        });
        var xor = baseRest(function(arrays) {
          return baseXor(arrayFilter(arrays, isArrayLikeObject));
        });
        var xorBy = baseRest(function(arrays) {
          var iteratee2 = last(arrays);
          if (isArrayLikeObject(iteratee2)) {
            iteratee2 = undefined2;
          }
          return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
        });
        var xorWith = baseRest(function(arrays) {
          var comparator = last(arrays);
          comparator = typeof comparator == "function" ? comparator : undefined2;
          return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined2, comparator);
        });
        var zip = baseRest(unzip);
        function zipObject(props, values2) {
          return baseZipObject(props || [], values2 || [], assignValue);
        }
        function zipObjectDeep(props, values2) {
          return baseZipObject(props || [], values2 || [], baseSet);
        }
        var zipWith = baseRest(function(arrays) {
          var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined2;
          iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined2;
          return unzipWith(arrays, iteratee2);
        });
        function chain(value) {
          var result2 = lodash(value);
          result2.__chain__ = true;
          return result2;
        }
        function tap(value, interceptor) {
          interceptor(value);
          return value;
        }
        function thru(value, interceptor) {
          return interceptor(value);
        }
        var wrapperAt = flatRest(function(paths) {
          var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
            return baseAt(object, paths);
          };
          if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
            return this.thru(interceptor);
          }
          value = value.slice(start, +start + (length ? 1 : 0));
          value.__actions__.push({
            "func": thru,
            "args": [interceptor],
            "thisArg": undefined2
          });
          return new LodashWrapper(value, this.__chain__).thru(function(array) {
            if (length && !array.length) {
              array.push(undefined2);
            }
            return array;
          });
        });
        function wrapperChain() {
          return chain(this);
        }
        function wrapperCommit() {
          return new LodashWrapper(this.value(), this.__chain__);
        }
        function wrapperNext() {
          if (this.__values__ === undefined2) {
            this.__values__ = toArray(this.value());
          }
          var done = this.__index__ >= this.__values__.length, value = done ? undefined2 : this.__values__[this.__index__++];
          return { "done": done, "value": value };
        }
        function wrapperToIterator() {
          return this;
        }
        function wrapperPlant(value) {
          var result2, parent2 = this;
          while (parent2 instanceof baseLodash) {
            var clone3 = wrapperClone(parent2);
            clone3.__index__ = 0;
            clone3.__values__ = undefined2;
            if (result2) {
              previous.__wrapped__ = clone3;
            } else {
              result2 = clone3;
            }
            var previous = clone3;
            parent2 = parent2.__wrapped__;
          }
          previous.__wrapped__ = value;
          return result2;
        }
        function wrapperReverse() {
          var value = this.__wrapped__;
          if (value instanceof LazyWrapper) {
            var wrapped = value;
            if (this.__actions__.length) {
              wrapped = new LazyWrapper(this);
            }
            wrapped = wrapped.reverse();
            wrapped.__actions__.push({
              "func": thru,
              "args": [reverse],
              "thisArg": undefined2
            });
            return new LodashWrapper(wrapped, this.__chain__);
          }
          return this.thru(reverse);
        }
        function wrapperValue() {
          return baseWrapperValue(this.__wrapped__, this.__actions__);
        }
        var countBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            ++result2[key];
          } else {
            baseAssignValue(result2, key, 1);
          }
        });
        function every(collection, predicate, guard) {
          var func = isArray2(collection) ? arrayEvery : baseEvery;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        function filter(collection, predicate) {
          var func = isArray2(collection) ? arrayFilter : baseFilter;
          return func(collection, getIteratee(predicate, 3));
        }
        var find = createFind(findIndex);
        var findLast = createFind(findLastIndex);
        function flatMap(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), 1);
        }
        function flatMapDeep(collection, iteratee2) {
          return baseFlatten(map(collection, iteratee2), INFINITY);
        }
        function flatMapDepth(collection, iteratee2, depth) {
          depth = depth === undefined2 ? 1 : toInteger(depth);
          return baseFlatten(map(collection, iteratee2), depth);
        }
        function forEach(collection, iteratee2) {
          var func = isArray2(collection) ? arrayEach : baseEach;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function forEachRight(collection, iteratee2) {
          var func = isArray2(collection) ? arrayEachRight : baseEachRight;
          return func(collection, getIteratee(iteratee2, 3));
        }
        var groupBy = createAggregator(function(result2, value, key) {
          if (hasOwnProperty.call(result2, key)) {
            result2[key].push(value);
          } else {
            baseAssignValue(result2, key, [value]);
          }
        });
        function includes(collection, value, fromIndex, guard) {
          collection = isArrayLike(collection) ? collection : values(collection);
          fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
          var length = collection.length;
          if (fromIndex < 0) {
            fromIndex = nativeMax(length + fromIndex, 0);
          }
          return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
        }
        var invokeMap = baseRest(function(collection, path3, args) {
          var index = -1, isFunc = typeof path3 == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
          baseEach(collection, function(value) {
            result2[++index] = isFunc ? apply(path3, value, args) : baseInvoke(value, path3, args);
          });
          return result2;
        });
        var keyBy = createAggregator(function(result2, value, key) {
          baseAssignValue(result2, key, value);
        });
        function map(collection, iteratee2) {
          var func = isArray2(collection) ? arrayMap : baseMap;
          return func(collection, getIteratee(iteratee2, 3));
        }
        function orderBy(collection, iteratees, orders, guard) {
          if (collection == null) {
            return [];
          }
          if (!isArray2(iteratees)) {
            iteratees = iteratees == null ? [] : [iteratees];
          }
          orders = guard ? undefined2 : orders;
          if (!isArray2(orders)) {
            orders = orders == null ? [] : [orders];
          }
          return baseOrderBy(collection, iteratees, orders);
        }
        var partition = createAggregator(function(result2, value, key) {
          result2[key ? 0 : 1].push(value);
        }, function() {
          return [[], []];
        });
        function reduce(collection, iteratee2, accumulator) {
          var func = isArray2(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
        }
        function reduceRight(collection, iteratee2, accumulator) {
          var func = isArray2(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
          return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
        }
        function reject(collection, predicate) {
          var func = isArray2(collection) ? arrayFilter : baseFilter;
          return func(collection, negate(getIteratee(predicate, 3)));
        }
        function sample(collection) {
          var func = isArray2(collection) ? arraySample : baseSample;
          return func(collection);
        }
        function sampleSize(collection, n, guard) {
          if (guard ? isIterateeCall(collection, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          var func = isArray2(collection) ? arraySampleSize : baseSampleSize;
          return func(collection, n);
        }
        function shuffle(collection) {
          var func = isArray2(collection) ? arrayShuffle : baseShuffle;
          return func(collection);
        }
        function size(collection) {
          if (collection == null) {
            return 0;
          }
          if (isArrayLike(collection)) {
            return isString(collection) ? stringSize(collection) : collection.length;
          }
          var tag = getTag(collection);
          if (tag == mapTag || tag == setTag) {
            return collection.size;
          }
          return baseKeys(collection).length;
        }
        function some(collection, predicate, guard) {
          var func = isArray2(collection) ? arraySome : baseSome;
          if (guard && isIterateeCall(collection, predicate, guard)) {
            predicate = undefined2;
          }
          return func(collection, getIteratee(predicate, 3));
        }
        var sortBy = baseRest(function(collection, iteratees) {
          if (collection == null) {
            return [];
          }
          var length = iteratees.length;
          if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
            iteratees = [];
          } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
            iteratees = [iteratees[0]];
          }
          return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
        });
        var now = ctxNow || function() {
          return root.Date.now();
        };
        function after(n, func) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n < 1) {
              return func.apply(this, arguments);
            }
          };
        }
        function ary(func, n, guard) {
          n = guard ? undefined2 : n;
          n = func && n == null ? func.length : n;
          return createWrap(func, WRAP_ARY_FLAG, undefined2, undefined2, undefined2, undefined2, n);
        }
        function before(n, func) {
          var result2;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          n = toInteger(n);
          return function() {
            if (--n > 0) {
              result2 = func.apply(this, arguments);
            }
            if (n <= 1) {
              func = undefined2;
            }
            return result2;
          };
        }
        var bind = baseRest(function(func, thisArg, partials) {
          var bitmask = WRAP_BIND_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bind));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(func, bitmask, thisArg, partials, holders);
        });
        var bindKey = baseRest(function(object, key, partials) {
          var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
          if (partials.length) {
            var holders = replaceHolders(partials, getHolder(bindKey));
            bitmask |= WRAP_PARTIAL_FLAG;
          }
          return createWrap(key, bitmask, object, partials, holders);
        });
        function curry(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curry.placeholder;
          return result2;
        }
        function curryRight(func, arity, guard) {
          arity = guard ? undefined2 : arity;
          var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined2, undefined2, undefined2, undefined2, undefined2, arity);
          result2.placeholder = curryRight.placeholder;
          return result2;
        }
        function debounce(func, wait, options) {
          var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          wait = toNumber(wait) || 0;
          if (isObject(options)) {
            leading = !!options.leading;
            maxing = "maxWait" in options;
            maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          function invokeFunc(time) {
            var args = lastArgs, thisArg = lastThis;
            lastArgs = lastThis = undefined2;
            lastInvokeTime = time;
            result2 = func.apply(thisArg, args);
            return result2;
          }
          function leadingEdge(time) {
            lastInvokeTime = time;
            timerId = setTimeout2(timerExpired, wait);
            return leading ? invokeFunc(time) : result2;
          }
          function remainingWait(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
            return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
          }
          function shouldInvoke(time) {
            var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
            return lastCallTime === undefined2 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
          }
          function timerExpired() {
            var time = now();
            if (shouldInvoke(time)) {
              return trailingEdge(time);
            }
            timerId = setTimeout2(timerExpired, remainingWait(time));
          }
          function trailingEdge(time) {
            timerId = undefined2;
            if (trailing && lastArgs) {
              return invokeFunc(time);
            }
            lastArgs = lastThis = undefined2;
            return result2;
          }
          function cancel() {
            if (timerId !== undefined2) {
              clearTimeout2(timerId);
            }
            lastInvokeTime = 0;
            lastArgs = lastCallTime = lastThis = timerId = undefined2;
          }
          function flush() {
            return timerId === undefined2 ? result2 : trailingEdge(now());
          }
          function debounced() {
            var time = now(), isInvoking = shouldInvoke(time);
            lastArgs = arguments;
            lastThis = this;
            lastCallTime = time;
            if (isInvoking) {
              if (timerId === undefined2) {
                return leadingEdge(lastCallTime);
              }
              if (maxing) {
                clearTimeout2(timerId);
                timerId = setTimeout2(timerExpired, wait);
                return invokeFunc(lastCallTime);
              }
            }
            if (timerId === undefined2) {
              timerId = setTimeout2(timerExpired, wait);
            }
            return result2;
          }
          debounced.cancel = cancel;
          debounced.flush = flush;
          return debounced;
        }
        var defer = baseRest(function(func, args) {
          return baseDelay(func, 1, args);
        });
        var delay = baseRest(function(func, wait, args) {
          return baseDelay(func, toNumber(wait) || 0, args);
        });
        function flip(func) {
          return createWrap(func, WRAP_FLIP_FLAG);
        }
        function memoize(func, resolver) {
          if (typeof func != "function" || resolver != null && typeof resolver != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          var memoized = function() {
            var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
            if (cache.has(key)) {
              return cache.get(key);
            }
            var result2 = func.apply(this, args);
            memoized.cache = cache.set(key, result2) || cache;
            return result2;
          };
          memoized.cache = new (memoize.Cache || MapCache)();
          return memoized;
        }
        memoize.Cache = MapCache;
        function negate(predicate) {
          if (typeof predicate != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return function() {
            var args = arguments;
            switch (args.length) {
              case 0:
                return !predicate.call(this);
              case 1:
                return !predicate.call(this, args[0]);
              case 2:
                return !predicate.call(this, args[0], args[1]);
              case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
            }
            return !predicate.apply(this, args);
          };
        }
        function once(func) {
          return before(2, func);
        }
        var overArgs = castRest(function(func, transforms) {
          transforms = transforms.length == 1 && isArray2(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
          var funcsLength = transforms.length;
          return baseRest(function(args) {
            var index = -1, length = nativeMin(args.length, funcsLength);
            while (++index < length) {
              args[index] = transforms[index].call(this, args[index]);
            }
            return apply(func, this, args);
          });
        });
        var partial = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partial));
          return createWrap(func, WRAP_PARTIAL_FLAG, undefined2, partials, holders);
        });
        var partialRight = baseRest(function(func, partials) {
          var holders = replaceHolders(partials, getHolder(partialRight));
          return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined2, partials, holders);
        });
        var rearg = flatRest(function(func, indexes) {
          return createWrap(func, WRAP_REARG_FLAG, undefined2, undefined2, undefined2, indexes);
        });
        function rest(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start === undefined2 ? start : toInteger(start);
          return baseRest(func, start);
        }
        function spread(func, start) {
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          start = start == null ? 0 : nativeMax(toInteger(start), 0);
          return baseRest(function(args) {
            var array = args[start], otherArgs = castSlice(args, 0, start);
            if (array) {
              arrayPush(otherArgs, array);
            }
            return apply(func, this, otherArgs);
          });
        }
        function throttle(func, wait, options) {
          var leading = true, trailing = true;
          if (typeof func != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          if (isObject(options)) {
            leading = "leading" in options ? !!options.leading : leading;
            trailing = "trailing" in options ? !!options.trailing : trailing;
          }
          return debounce(func, wait, {
            "leading": leading,
            "maxWait": wait,
            "trailing": trailing
          });
        }
        function unary(func) {
          return ary(func, 1);
        }
        function wrap(value, wrapper) {
          return partial(castFunction(wrapper), value);
        }
        function castArray() {
          if (!arguments.length) {
            return [];
          }
          var value = arguments[0];
          return isArray2(value) ? value : [value];
        }
        function clone2(value) {
          return baseClone(value, CLONE_SYMBOLS_FLAG);
        }
        function cloneWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
        }
        function cloneDeep2(value) {
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
        }
        function cloneDeepWith(value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
        }
        function conformsTo(object, source) {
          return source == null || baseConformsTo(object, source, keys(source));
        }
        function eq(value, other) {
          return value === other || value !== value && other !== other;
        }
        var gt = createRelationalOperation(baseGt);
        var gte = createRelationalOperation(function(value, other) {
          return value >= other;
        });
        var isArguments = baseIsArguments(/* @__PURE__ */ function() {
          return arguments;
        }()) ? baseIsArguments : function(value) {
          return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
        };
        var isArray2 = Array2.isArray;
        var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
        function isArrayLike(value) {
          return value != null && isLength(value.length) && !isFunction2(value);
        }
        function isArrayLikeObject(value) {
          return isObjectLike(value) && isArrayLike(value);
        }
        function isBoolean(value) {
          return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
        }
        var isBuffer = nativeIsBuffer || stubFalse;
        var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
        function isElement(value) {
          return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
        }
        function isEmpty(value) {
          if (value == null) {
            return true;
          }
          if (isArrayLike(value) && (isArray2(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
            return !value.length;
          }
          var tag = getTag(value);
          if (tag == mapTag || tag == setTag) {
            return !value.size;
          }
          if (isPrototype(value)) {
            return !baseKeys(value).length;
          }
          for (var key in value) {
            if (hasOwnProperty.call(value, key)) {
              return false;
            }
          }
          return true;
        }
        function isEqual2(value, other) {
          return baseIsEqual(value, other);
        }
        function isEqualWith(value, other, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          var result2 = customizer ? customizer(value, other) : undefined2;
          return result2 === undefined2 ? baseIsEqual(value, other, undefined2, customizer) : !!result2;
        }
        function isError(value) {
          if (!isObjectLike(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
        }
        function isFinite(value) {
          return typeof value == "number" && nativeIsFinite(value);
        }
        function isFunction2(value) {
          if (!isObject(value)) {
            return false;
          }
          var tag = baseGetTag(value);
          return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
        }
        function isInteger(value) {
          return typeof value == "number" && value == toInteger(value);
        }
        function isLength(value) {
          return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
        }
        function isObject(value) {
          var type = typeof value;
          return value != null && (type == "object" || type == "function");
        }
        function isObjectLike(value) {
          return value != null && typeof value == "object";
        }
        var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
        function isMatch2(object, source) {
          return object === source || baseIsMatch(object, source, getMatchData(source));
        }
        function isMatchWith(object, source, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return baseIsMatch(object, source, getMatchData(source), customizer);
        }
        function isNaN2(value) {
          return isNumber(value) && value != +value;
        }
        function isNative(value) {
          if (isMaskable(value)) {
            throw new Error2(CORE_ERROR_TEXT);
          }
          return baseIsNative(value);
        }
        function isNull(value) {
          return value === null;
        }
        function isNil(value) {
          return value == null;
        }
        function isNumber(value) {
          return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
        function isSafeInteger(value) {
          return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
        }
        var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
        function isString(value) {
          return typeof value == "string" || !isArray2(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
        }
        function isSymbol(value) {
          return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
        }
        var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
        function isUndefined(value) {
          return value === undefined2;
        }
        function isWeakMap(value) {
          return isObjectLike(value) && getTag(value) == weakMapTag;
        }
        function isWeakSet(value) {
          return isObjectLike(value) && baseGetTag(value) == weakSetTag;
        }
        var lt = createRelationalOperation(baseLt);
        var lte = createRelationalOperation(function(value, other) {
          return value <= other;
        });
        function toArray(value) {
          if (!value) {
            return [];
          }
          if (isArrayLike(value)) {
            return isString(value) ? stringToArray(value) : copyArray(value);
          }
          if (symIterator && value[symIterator]) {
            return iteratorToArray(value[symIterator]());
          }
          var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
          return func(value);
        }
        function toFinite(value) {
          if (!value) {
            return value === 0 ? value : 0;
          }
          value = toNumber(value);
          if (value === INFINITY || value === -INFINITY) {
            var sign = value < 0 ? -1 : 1;
            return sign * MAX_INTEGER;
          }
          return value === value ? value : 0;
        }
        function toInteger(value) {
          var result2 = toFinite(value), remainder = result2 % 1;
          return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
        }
        function toLength(value) {
          return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
        }
        function toNumber(value) {
          if (typeof value == "number") {
            return value;
          }
          if (isSymbol(value)) {
            return NAN;
          }
          if (isObject(value)) {
            var other = typeof value.valueOf == "function" ? value.valueOf() : value;
            value = isObject(other) ? other + "" : other;
          }
          if (typeof value != "string") {
            return value === 0 ? value : +value;
          }
          value = baseTrim(value);
          var isBinary = reIsBinary.test(value);
          return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
        }
        function toPlainObject(value) {
          return copyObject(value, keysIn(value));
        }
        function toSafeInteger(value) {
          return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
        }
        function toString(value) {
          return value == null ? "" : baseToString(value);
        }
        var assign = createAssigner(function(object, source) {
          if (isPrototype(source) || isArrayLike(source)) {
            copyObject(source, keys(source), object);
            return;
          }
          for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
              assignValue(object, key, source[key]);
            }
          }
        });
        var assignIn = createAssigner(function(object, source) {
          copyObject(source, keysIn(source), object);
        });
        var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keysIn(source), object, customizer);
        });
        var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
          copyObject(source, keys(source), object, customizer);
        });
        var at2 = flatRest(baseAt);
        function create(prototype, properties) {
          var result2 = baseCreate(prototype);
          return properties == null ? result2 : baseAssign(result2, properties);
        }
        var defaults = baseRest(function(object, sources) {
          object = Object2(object);
          var index = -1;
          var length = sources.length;
          var guard = length > 2 ? sources[2] : undefined2;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            length = 1;
          }
          while (++index < length) {
            var source = sources[index];
            var props = keysIn(source);
            var propsIndex = -1;
            var propsLength = props.length;
            while (++propsIndex < propsLength) {
              var key = props[propsIndex];
              var value = object[key];
              if (value === undefined2 || eq(value, objectProto[key]) && !hasOwnProperty.call(object, key)) {
                object[key] = source[key];
              }
            }
          }
          return object;
        });
        var defaultsDeep = baseRest(function(args) {
          args.push(undefined2, customDefaultsMerge);
          return apply(mergeWith, undefined2, args);
        });
        function findKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
        }
        function findLastKey(object, predicate) {
          return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
        }
        function forIn(object, iteratee2) {
          return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forInRight(object, iteratee2) {
          return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
        }
        function forOwn(object, iteratee2) {
          return object && baseForOwn(object, getIteratee(iteratee2, 3));
        }
        function forOwnRight(object, iteratee2) {
          return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
        }
        function functions(object) {
          return object == null ? [] : baseFunctions(object, keys(object));
        }
        function functionsIn(object) {
          return object == null ? [] : baseFunctions(object, keysIn(object));
        }
        function get(object, path3, defaultValue) {
          var result2 = object == null ? undefined2 : baseGet(object, path3);
          return result2 === undefined2 ? defaultValue : result2;
        }
        function has(object, path3) {
          return object != null && hasPath(object, path3, baseHas);
        }
        function hasIn(object, path3) {
          return object != null && hasPath(object, path3, baseHasIn);
        }
        var invert = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          result2[value] = key;
        }, constant(identity));
        var invertBy = createInverter(function(result2, value, key) {
          if (value != null && typeof value.toString != "function") {
            value = nativeObjectToString.call(value);
          }
          if (hasOwnProperty.call(result2, value)) {
            result2[value].push(key);
          } else {
            result2[value] = [key];
          }
        }, getIteratee);
        var invoke = baseRest(baseInvoke);
        function keys(object) {
          return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
        }
        function keysIn(object) {
          return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
        }
        function mapKeys(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, iteratee2(value, key, object2), value);
          });
          return result2;
        }
        function mapValues(object, iteratee2) {
          var result2 = {};
          iteratee2 = getIteratee(iteratee2, 3);
          baseForOwn(object, function(value, key, object2) {
            baseAssignValue(result2, key, iteratee2(value, key, object2));
          });
          return result2;
        }
        var merge = createAssigner(function(object, source, srcIndex) {
          baseMerge(object, source, srcIndex);
        });
        var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
          baseMerge(object, source, srcIndex, customizer);
        });
        var omit = flatRest(function(object, paths) {
          var result2 = {};
          if (object == null) {
            return result2;
          }
          var isDeep = false;
          paths = arrayMap(paths, function(path3) {
            path3 = castPath(path3, object);
            isDeep || (isDeep = path3.length > 1);
            return path3;
          });
          copyObject(object, getAllKeysIn(object), result2);
          if (isDeep) {
            result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
          }
          var length = paths.length;
          while (length--) {
            baseUnset(result2, paths[length]);
          }
          return result2;
        });
        function omitBy(object, predicate) {
          return pickBy(object, negate(getIteratee(predicate)));
        }
        var pick2 = flatRest(function(object, paths) {
          return object == null ? {} : basePick(object, paths);
        });
        function pickBy(object, predicate) {
          if (object == null) {
            return {};
          }
          var props = arrayMap(getAllKeysIn(object), function(prop) {
            return [prop];
          });
          predicate = getIteratee(predicate);
          return basePickBy(object, props, function(value, path3) {
            return predicate(value, path3[0]);
          });
        }
        function result(object, path3, defaultValue) {
          path3 = castPath(path3, object);
          var index = -1, length = path3.length;
          if (!length) {
            length = 1;
            object = undefined2;
          }
          while (++index < length) {
            var value = object == null ? undefined2 : object[toKey(path3[index])];
            if (value === undefined2) {
              index = length;
              value = defaultValue;
            }
            object = isFunction2(value) ? value.call(object) : value;
          }
          return object;
        }
        function set(object, path3, value) {
          return object == null ? object : baseSet(object, path3, value);
        }
        function setWith(object, path3, value, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseSet(object, path3, value, customizer);
        }
        var toPairs = createToPairs(keys);
        var toPairsIn = createToPairs(keysIn);
        function transform(object, iteratee2, accumulator) {
          var isArr = isArray2(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
          iteratee2 = getIteratee(iteratee2, 4);
          if (accumulator == null) {
            var Ctor = object && object.constructor;
            if (isArrLike) {
              accumulator = isArr ? new Ctor() : [];
            } else if (isObject(object)) {
              accumulator = isFunction2(Ctor) ? baseCreate(getPrototype(object)) : {};
            } else {
              accumulator = {};
            }
          }
          (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
            return iteratee2(accumulator, value, index, object2);
          });
          return accumulator;
        }
        function unset(object, path3) {
          return object == null ? true : baseUnset(object, path3);
        }
        function update(object, path3, updater) {
          return object == null ? object : baseUpdate(object, path3, castFunction(updater));
        }
        function updateWith(object, path3, updater, customizer) {
          customizer = typeof customizer == "function" ? customizer : undefined2;
          return object == null ? object : baseUpdate(object, path3, castFunction(updater), customizer);
        }
        function values(object) {
          return object == null ? [] : baseValues(object, keys(object));
        }
        function valuesIn(object) {
          return object == null ? [] : baseValues(object, keysIn(object));
        }
        function clamp3(number, lower, upper) {
          if (upper === undefined2) {
            upper = lower;
            lower = undefined2;
          }
          if (upper !== undefined2) {
            upper = toNumber(upper);
            upper = upper === upper ? upper : 0;
          }
          if (lower !== undefined2) {
            lower = toNumber(lower);
            lower = lower === lower ? lower : 0;
          }
          return baseClamp(toNumber(number), lower, upper);
        }
        function inRange(number, start, end) {
          start = toFinite(start);
          if (end === undefined2) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          number = toNumber(number);
          return baseInRange(number, start, end);
        }
        function random(lower, upper, floating) {
          if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
            upper = floating = undefined2;
          }
          if (floating === undefined2) {
            if (typeof upper == "boolean") {
              floating = upper;
              upper = undefined2;
            } else if (typeof lower == "boolean") {
              floating = lower;
              lower = undefined2;
            }
          }
          if (lower === undefined2 && upper === undefined2) {
            lower = 0;
            upper = 1;
          } else {
            lower = toFinite(lower);
            if (upper === undefined2) {
              upper = lower;
              lower = 0;
            } else {
              upper = toFinite(upper);
            }
          }
          if (lower > upper) {
            var temp = lower;
            lower = upper;
            upper = temp;
          }
          if (floating || lower % 1 || upper % 1) {
            var rand = nativeRandom();
            return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
          }
          return baseRandom(lower, upper);
        }
        var camelCase = createCompounder(function(result2, word, index) {
          word = word.toLowerCase();
          return result2 + (index ? capitalize(word) : word);
        });
        function capitalize(string) {
          return upperFirst(toString(string).toLowerCase());
        }
        function deburr(string) {
          string = toString(string);
          return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
        }
        function endsWith(string, target, position) {
          string = toString(string);
          target = baseToString(target);
          var length = string.length;
          position = position === undefined2 ? length : baseClamp(toInteger(position), 0, length);
          var end = position;
          position -= target.length;
          return position >= 0 && string.slice(position, end) == target;
        }
        function escape(string) {
          string = toString(string);
          return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
        }
        function escapeRegExp2(string) {
          string = toString(string);
          return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
        }
        var kebabCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "-" : "") + word.toLowerCase();
        });
        var lowerCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toLowerCase();
        });
        var lowerFirst = createCaseFirst("toLowerCase");
        function pad(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          if (!length || strLength >= length) {
            return string;
          }
          var mid = (length - strLength) / 2;
          return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
        }
        function padEnd(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
        }
        function padStart(string, length, chars) {
          string = toString(string);
          length = toInteger(length);
          var strLength = length ? stringSize(string) : 0;
          return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
        }
        function parseInt2(string, radix, guard) {
          if (guard || radix == null) {
            radix = 0;
          } else if (radix) {
            radix = +radix;
          }
          return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
        }
        function repeat(string, n, guard) {
          if (guard ? isIterateeCall(string, n, guard) : n === undefined2) {
            n = 1;
          } else {
            n = toInteger(n);
          }
          return baseRepeat(toString(string), n);
        }
        function replace() {
          var args = arguments, string = toString(args[0]);
          return args.length < 3 ? string : string.replace(args[1], args[2]);
        }
        var snakeCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? "_" : "") + word.toLowerCase();
        });
        function split(string, separator, limit) {
          if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
            separator = limit = undefined2;
          }
          limit = limit === undefined2 ? MAX_ARRAY_LENGTH : limit >>> 0;
          if (!limit) {
            return [];
          }
          string = toString(string);
          if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
            separator = baseToString(separator);
            if (!separator && hasUnicode(string)) {
              return castSlice(stringToArray(string), 0, limit);
            }
          }
          return string.split(separator, limit);
        }
        var startCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + upperFirst(word);
        });
        function startsWith(string, target, position) {
          string = toString(string);
          position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
          target = baseToString(target);
          return string.slice(position, position + target.length) == target;
        }
        function template(string, options, guard) {
          var settings = lodash.templateSettings;
          if (guard && isIterateeCall(string, options, guard)) {
            options = undefined2;
          }
          string = toString(string);
          options = assignInWith({}, options, settings, customDefaultsAssignIn);
          var imports = assignInWith({}, options.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
          var isEscaping, isEvaluating, index = 0, interpolate = options.interpolate || reNoMatch, source = "__p += '";
          var reDelimiters = RegExp2(
            (options.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options.evaluate || reNoMatch).source + "|$",
            "g"
          );
          var sourceURL = "//# sourceURL=" + (hasOwnProperty.call(options, "sourceURL") ? (options.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
          string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
            interpolateValue || (interpolateValue = esTemplateValue);
            source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
            if (escapeValue) {
              isEscaping = true;
              source += "' +\n__e(" + escapeValue + ") +\n'";
            }
            if (evaluateValue) {
              isEvaluating = true;
              source += "';\n" + evaluateValue + ";\n__p += '";
            }
            if (interpolateValue) {
              source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
            }
            index = offset + match.length;
            return match;
          });
          source += "';\n";
          var variable = hasOwnProperty.call(options, "variable") && options.variable;
          if (!variable) {
            source = "with (obj) {\n" + source + "\n}\n";
          } else if (reForbiddenIdentifierChars.test(variable)) {
            throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
          }
          source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
          source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
          var result2 = attempt(function() {
            return Function2(importsKeys, sourceURL + "return " + source).apply(undefined2, importsValues);
          });
          result2.source = source;
          if (isError(result2)) {
            throw result2;
          }
          return result2;
        }
        function toLower(value) {
          return toString(value).toLowerCase();
        }
        function toUpper(value) {
          return toString(value).toUpperCase();
        }
        function trim(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return baseTrim(string);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
          return castSlice(strSymbols, start, end).join("");
        }
        function trimEnd(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.slice(0, trimmedEndIndex(string) + 1);
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
          return castSlice(strSymbols, 0, end).join("");
        }
        function trimStart(string, chars, guard) {
          string = toString(string);
          if (string && (guard || chars === undefined2)) {
            return string.replace(reTrimStart, "");
          }
          if (!string || !(chars = baseToString(chars))) {
            return string;
          }
          var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
          return castSlice(strSymbols, start).join("");
        }
        function truncate(string, options) {
          var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
          if (isObject(options)) {
            var separator = "separator" in options ? options.separator : separator;
            length = "length" in options ? toInteger(options.length) : length;
            omission = "omission" in options ? baseToString(options.omission) : omission;
          }
          string = toString(string);
          var strLength = string.length;
          if (hasUnicode(string)) {
            var strSymbols = stringToArray(string);
            strLength = strSymbols.length;
          }
          if (length >= strLength) {
            return string;
          }
          var end = length - stringSize(omission);
          if (end < 1) {
            return omission;
          }
          var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
          if (separator === undefined2) {
            return result2 + omission;
          }
          if (strSymbols) {
            end += result2.length - end;
          }
          if (isRegExp(separator)) {
            if (string.slice(end).search(separator)) {
              var match, substring = result2;
              if (!separator.global) {
                separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
              }
              separator.lastIndex = 0;
              while (match = separator.exec(substring)) {
                var newEnd = match.index;
              }
              result2 = result2.slice(0, newEnd === undefined2 ? end : newEnd);
            }
          } else if (string.indexOf(baseToString(separator), end) != end) {
            var index = result2.lastIndexOf(separator);
            if (index > -1) {
              result2 = result2.slice(0, index);
            }
          }
          return result2 + omission;
        }
        function unescape(string) {
          string = toString(string);
          return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
        }
        var upperCase = createCompounder(function(result2, word, index) {
          return result2 + (index ? " " : "") + word.toUpperCase();
        });
        var upperFirst = createCaseFirst("toUpperCase");
        function words(string, pattern, guard) {
          string = toString(string);
          pattern = guard ? undefined2 : pattern;
          if (pattern === undefined2) {
            return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
          }
          return string.match(pattern) || [];
        }
        var attempt = baseRest(function(func, args) {
          try {
            return apply(func, undefined2, args);
          } catch (e) {
            return isError(e) ? e : new Error2(e);
          }
        });
        var bindAll = flatRest(function(object, methodNames) {
          arrayEach(methodNames, function(key) {
            key = toKey(key);
            baseAssignValue(object, key, bind(object[key], object));
          });
          return object;
        });
        function cond(pairs) {
          var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
          pairs = !length ? [] : arrayMap(pairs, function(pair) {
            if (typeof pair[1] != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            return [toIteratee(pair[0]), pair[1]];
          });
          return baseRest(function(args) {
            var index = -1;
            while (++index < length) {
              var pair = pairs[index];
              if (apply(pair[0], this, args)) {
                return apply(pair[1], this, args);
              }
            }
          });
        }
        function conforms(source) {
          return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
        }
        function constant(value) {
          return function() {
            return value;
          };
        }
        function defaultTo(value, defaultValue) {
          return value == null || value !== value ? defaultValue : value;
        }
        var flow = createFlow();
        var flowRight = createFlow(true);
        function identity(value) {
          return value;
        }
        function iteratee(func) {
          return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
        }
        function matches(source) {
          return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
        }
        function matchesProperty(path3, srcValue) {
          return baseMatchesProperty(path3, baseClone(srcValue, CLONE_DEEP_FLAG));
        }
        var method = baseRest(function(path3, args) {
          return function(object) {
            return baseInvoke(object, path3, args);
          };
        });
        var methodOf = baseRest(function(object, args) {
          return function(path3) {
            return baseInvoke(object, path3, args);
          };
        });
        function mixin(object, source, options) {
          var props = keys(source), methodNames = baseFunctions(source, props);
          if (options == null && !(isObject(source) && (methodNames.length || !props.length))) {
            options = source;
            source = object;
            object = this;
            methodNames = baseFunctions(source, keys(source));
          }
          var chain2 = !(isObject(options) && "chain" in options) || !!options.chain, isFunc = isFunction2(object);
          arrayEach(methodNames, function(methodName) {
            var func = source[methodName];
            object[methodName] = func;
            if (isFunc) {
              object.prototype[methodName] = function() {
                var chainAll = this.__chain__;
                if (chain2 || chainAll) {
                  var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                  actions.push({ "func": func, "args": arguments, "thisArg": object });
                  result2.__chain__ = chainAll;
                  return result2;
                }
                return func.apply(object, arrayPush([this.value()], arguments));
              };
            }
          });
          return object;
        }
        function noConflict() {
          if (root._ === this) {
            root._ = oldDash;
          }
          return this;
        }
        function noop() {
        }
        function nthArg(n) {
          n = toInteger(n);
          return baseRest(function(args) {
            return baseNth(args, n);
          });
        }
        var over = createOver(arrayMap);
        var overEvery = createOver(arrayEvery);
        var overSome = createOver(arraySome);
        function property(path3) {
          return isKey(path3) ? baseProperty(toKey(path3)) : basePropertyDeep(path3);
        }
        function propertyOf(object) {
          return function(path3) {
            return object == null ? undefined2 : baseGet(object, path3);
          };
        }
        var range = createRange();
        var rangeRight = createRange(true);
        function stubArray() {
          return [];
        }
        function stubFalse() {
          return false;
        }
        function stubObject() {
          return {};
        }
        function stubString() {
          return "";
        }
        function stubTrue() {
          return true;
        }
        function times(n, iteratee2) {
          n = toInteger(n);
          if (n < 1 || n > MAX_SAFE_INTEGER) {
            return [];
          }
          var index = MAX_ARRAY_LENGTH, length = nativeMin(n, MAX_ARRAY_LENGTH);
          iteratee2 = getIteratee(iteratee2);
          n -= MAX_ARRAY_LENGTH;
          var result2 = baseTimes(length, iteratee2);
          while (++index < n) {
            iteratee2(index);
          }
          return result2;
        }
        function toPath(value) {
          if (isArray2(value)) {
            return arrayMap(value, toKey);
          }
          return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
        }
        function uniqueId(prefix) {
          var id = ++idCounter;
          return toString(prefix) + id;
        }
        var add = createMathOperation(function(augend, addend) {
          return augend + addend;
        }, 0);
        var ceil = createRound("ceil");
        var divide = createMathOperation(function(dividend, divisor) {
          return dividend / divisor;
        }, 1);
        var floor = createRound("floor");
        function max(array) {
          return array && array.length ? baseExtremum(array, identity, baseGt) : undefined2;
        }
        function maxBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined2;
        }
        function mean(array) {
          return baseMean(array, identity);
        }
        function meanBy(array, iteratee2) {
          return baseMean(array, getIteratee(iteratee2, 2));
        }
        function min(array) {
          return array && array.length ? baseExtremum(array, identity, baseLt) : undefined2;
        }
        function minBy(array, iteratee2) {
          return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined2;
        }
        var multiply = createMathOperation(function(multiplier, multiplicand) {
          return multiplier * multiplicand;
        }, 1);
        var round = createRound("round");
        var subtract = createMathOperation(function(minuend, subtrahend) {
          return minuend - subtrahend;
        }, 0);
        function sum(array) {
          return array && array.length ? baseSum(array, identity) : 0;
        }
        function sumBy(array, iteratee2) {
          return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
        }
        lodash.after = after;
        lodash.ary = ary;
        lodash.assign = assign;
        lodash.assignIn = assignIn;
        lodash.assignInWith = assignInWith;
        lodash.assignWith = assignWith;
        lodash.at = at2;
        lodash.before = before;
        lodash.bind = bind;
        lodash.bindAll = bindAll;
        lodash.bindKey = bindKey;
        lodash.castArray = castArray;
        lodash.chain = chain;
        lodash.chunk = chunk;
        lodash.compact = compact;
        lodash.concat = concat;
        lodash.cond = cond;
        lodash.conforms = conforms;
        lodash.constant = constant;
        lodash.countBy = countBy;
        lodash.create = create;
        lodash.curry = curry;
        lodash.curryRight = curryRight;
        lodash.debounce = debounce;
        lodash.defaults = defaults;
        lodash.defaultsDeep = defaultsDeep;
        lodash.defer = defer;
        lodash.delay = delay;
        lodash.difference = difference;
        lodash.differenceBy = differenceBy;
        lodash.differenceWith = differenceWith;
        lodash.drop = drop;
        lodash.dropRight = dropRight;
        lodash.dropRightWhile = dropRightWhile;
        lodash.dropWhile = dropWhile;
        lodash.fill = fill;
        lodash.filter = filter;
        lodash.flatMap = flatMap;
        lodash.flatMapDeep = flatMapDeep;
        lodash.flatMapDepth = flatMapDepth;
        lodash.flatten = flatten;
        lodash.flattenDeep = flattenDeep;
        lodash.flattenDepth = flattenDepth;
        lodash.flip = flip;
        lodash.flow = flow;
        lodash.flowRight = flowRight;
        lodash.fromPairs = fromPairs;
        lodash.functions = functions;
        lodash.functionsIn = functionsIn;
        lodash.groupBy = groupBy;
        lodash.initial = initial;
        lodash.intersection = intersection;
        lodash.intersectionBy = intersectionBy;
        lodash.intersectionWith = intersectionWith;
        lodash.invert = invert;
        lodash.invertBy = invertBy;
        lodash.invokeMap = invokeMap;
        lodash.iteratee = iteratee;
        lodash.keyBy = keyBy;
        lodash.keys = keys;
        lodash.keysIn = keysIn;
        lodash.map = map;
        lodash.mapKeys = mapKeys;
        lodash.mapValues = mapValues;
        lodash.matches = matches;
        lodash.matchesProperty = matchesProperty;
        lodash.memoize = memoize;
        lodash.merge = merge;
        lodash.mergeWith = mergeWith;
        lodash.method = method;
        lodash.methodOf = methodOf;
        lodash.mixin = mixin;
        lodash.negate = negate;
        lodash.nthArg = nthArg;
        lodash.omit = omit;
        lodash.omitBy = omitBy;
        lodash.once = once;
        lodash.orderBy = orderBy;
        lodash.over = over;
        lodash.overArgs = overArgs;
        lodash.overEvery = overEvery;
        lodash.overSome = overSome;
        lodash.partial = partial;
        lodash.partialRight = partialRight;
        lodash.partition = partition;
        lodash.pick = pick2;
        lodash.pickBy = pickBy;
        lodash.property = property;
        lodash.propertyOf = propertyOf;
        lodash.pull = pull;
        lodash.pullAll = pullAll;
        lodash.pullAllBy = pullAllBy;
        lodash.pullAllWith = pullAllWith;
        lodash.pullAt = pullAt;
        lodash.range = range;
        lodash.rangeRight = rangeRight;
        lodash.rearg = rearg;
        lodash.reject = reject;
        lodash.remove = remove4;
        lodash.rest = rest;
        lodash.reverse = reverse;
        lodash.sampleSize = sampleSize;
        lodash.set = set;
        lodash.setWith = setWith;
        lodash.shuffle = shuffle;
        lodash.slice = slice;
        lodash.sortBy = sortBy;
        lodash.sortedUniq = sortedUniq;
        lodash.sortedUniqBy = sortedUniqBy;
        lodash.split = split;
        lodash.spread = spread;
        lodash.tail = tail;
        lodash.take = take;
        lodash.takeRight = takeRight;
        lodash.takeRightWhile = takeRightWhile;
        lodash.takeWhile = takeWhile;
        lodash.tap = tap;
        lodash.throttle = throttle;
        lodash.thru = thru;
        lodash.toArray = toArray;
        lodash.toPairs = toPairs;
        lodash.toPairsIn = toPairsIn;
        lodash.toPath = toPath;
        lodash.toPlainObject = toPlainObject;
        lodash.transform = transform;
        lodash.unary = unary;
        lodash.union = union;
        lodash.unionBy = unionBy;
        lodash.unionWith = unionWith;
        lodash.uniq = uniq;
        lodash.uniqBy = uniqBy;
        lodash.uniqWith = uniqWith;
        lodash.unset = unset;
        lodash.unzip = unzip;
        lodash.unzipWith = unzipWith;
        lodash.update = update;
        lodash.updateWith = updateWith;
        lodash.values = values;
        lodash.valuesIn = valuesIn;
        lodash.without = without;
        lodash.words = words;
        lodash.wrap = wrap;
        lodash.xor = xor;
        lodash.xorBy = xorBy;
        lodash.xorWith = xorWith;
        lodash.zip = zip;
        lodash.zipObject = zipObject;
        lodash.zipObjectDeep = zipObjectDeep;
        lodash.zipWith = zipWith;
        lodash.entries = toPairs;
        lodash.entriesIn = toPairsIn;
        lodash.extend = assignIn;
        lodash.extendWith = assignInWith;
        mixin(lodash, lodash);
        lodash.add = add;
        lodash.attempt = attempt;
        lodash.camelCase = camelCase;
        lodash.capitalize = capitalize;
        lodash.ceil = ceil;
        lodash.clamp = clamp3;
        lodash.clone = clone2;
        lodash.cloneDeep = cloneDeep2;
        lodash.cloneDeepWith = cloneDeepWith;
        lodash.cloneWith = cloneWith;
        lodash.conformsTo = conformsTo;
        lodash.deburr = deburr;
        lodash.defaultTo = defaultTo;
        lodash.divide = divide;
        lodash.endsWith = endsWith;
        lodash.eq = eq;
        lodash.escape = escape;
        lodash.escapeRegExp = escapeRegExp2;
        lodash.every = every;
        lodash.find = find;
        lodash.findIndex = findIndex;
        lodash.findKey = findKey;
        lodash.findLast = findLast;
        lodash.findLastIndex = findLastIndex;
        lodash.findLastKey = findLastKey;
        lodash.floor = floor;
        lodash.forEach = forEach;
        lodash.forEachRight = forEachRight;
        lodash.forIn = forIn;
        lodash.forInRight = forInRight;
        lodash.forOwn = forOwn;
        lodash.forOwnRight = forOwnRight;
        lodash.get = get;
        lodash.gt = gt;
        lodash.gte = gte;
        lodash.has = has;
        lodash.hasIn = hasIn;
        lodash.head = head;
        lodash.identity = identity;
        lodash.includes = includes;
        lodash.indexOf = indexOf;
        lodash.inRange = inRange;
        lodash.invoke = invoke;
        lodash.isArguments = isArguments;
        lodash.isArray = isArray2;
        lodash.isArrayBuffer = isArrayBuffer;
        lodash.isArrayLike = isArrayLike;
        lodash.isArrayLikeObject = isArrayLikeObject;
        lodash.isBoolean = isBoolean;
        lodash.isBuffer = isBuffer;
        lodash.isDate = isDate;
        lodash.isElement = isElement;
        lodash.isEmpty = isEmpty;
        lodash.isEqual = isEqual2;
        lodash.isEqualWith = isEqualWith;
        lodash.isError = isError;
        lodash.isFinite = isFinite;
        lodash.isFunction = isFunction2;
        lodash.isInteger = isInteger;
        lodash.isLength = isLength;
        lodash.isMap = isMap;
        lodash.isMatch = isMatch2;
        lodash.isMatchWith = isMatchWith;
        lodash.isNaN = isNaN2;
        lodash.isNative = isNative;
        lodash.isNil = isNil;
        lodash.isNull = isNull;
        lodash.isNumber = isNumber;
        lodash.isObject = isObject;
        lodash.isObjectLike = isObjectLike;
        lodash.isPlainObject = isPlainObject;
        lodash.isRegExp = isRegExp;
        lodash.isSafeInteger = isSafeInteger;
        lodash.isSet = isSet;
        lodash.isString = isString;
        lodash.isSymbol = isSymbol;
        lodash.isTypedArray = isTypedArray;
        lodash.isUndefined = isUndefined;
        lodash.isWeakMap = isWeakMap;
        lodash.isWeakSet = isWeakSet;
        lodash.join = join;
        lodash.kebabCase = kebabCase;
        lodash.last = last;
        lodash.lastIndexOf = lastIndexOf;
        lodash.lowerCase = lowerCase;
        lodash.lowerFirst = lowerFirst;
        lodash.lt = lt;
        lodash.lte = lte;
        lodash.max = max;
        lodash.maxBy = maxBy;
        lodash.mean = mean;
        lodash.meanBy = meanBy;
        lodash.min = min;
        lodash.minBy = minBy;
        lodash.stubArray = stubArray;
        lodash.stubFalse = stubFalse;
        lodash.stubObject = stubObject;
        lodash.stubString = stubString;
        lodash.stubTrue = stubTrue;
        lodash.multiply = multiply;
        lodash.nth = nth;
        lodash.noConflict = noConflict;
        lodash.noop = noop;
        lodash.now = now;
        lodash.pad = pad;
        lodash.padEnd = padEnd;
        lodash.padStart = padStart;
        lodash.parseInt = parseInt2;
        lodash.random = random;
        lodash.reduce = reduce;
        lodash.reduceRight = reduceRight;
        lodash.repeat = repeat;
        lodash.replace = replace;
        lodash.result = result;
        lodash.round = round;
        lodash.runInContext = runInContext2;
        lodash.sample = sample;
        lodash.size = size;
        lodash.snakeCase = snakeCase;
        lodash.some = some;
        lodash.sortedIndex = sortedIndex;
        lodash.sortedIndexBy = sortedIndexBy;
        lodash.sortedIndexOf = sortedIndexOf;
        lodash.sortedLastIndex = sortedLastIndex;
        lodash.sortedLastIndexBy = sortedLastIndexBy;
        lodash.sortedLastIndexOf = sortedLastIndexOf;
        lodash.startCase = startCase;
        lodash.startsWith = startsWith;
        lodash.subtract = subtract;
        lodash.sum = sum;
        lodash.sumBy = sumBy;
        lodash.template = template;
        lodash.times = times;
        lodash.toFinite = toFinite;
        lodash.toInteger = toInteger;
        lodash.toLength = toLength;
        lodash.toLower = toLower;
        lodash.toNumber = toNumber;
        lodash.toSafeInteger = toSafeInteger;
        lodash.toString = toString;
        lodash.toUpper = toUpper;
        lodash.trim = trim;
        lodash.trimEnd = trimEnd;
        lodash.trimStart = trimStart;
        lodash.truncate = truncate;
        lodash.unescape = unescape;
        lodash.uniqueId = uniqueId;
        lodash.upperCase = upperCase;
        lodash.upperFirst = upperFirst;
        lodash.each = forEach;
        lodash.eachRight = forEachRight;
        lodash.first = head;
        mixin(lodash, function() {
          var source = {};
          baseForOwn(lodash, function(func, methodName) {
            if (!hasOwnProperty.call(lodash.prototype, methodName)) {
              source[methodName] = func;
            }
          });
          return source;
        }(), { "chain": false });
        lodash.VERSION = VERSION;
        arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
          lodash[methodName].placeholder = lodash;
        });
        arrayEach(["drop", "take"], function(methodName, index) {
          LazyWrapper.prototype[methodName] = function(n) {
            n = n === undefined2 ? 1 : nativeMax(toInteger(n), 0);
            var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
            if (result2.__filtered__) {
              result2.__takeCount__ = nativeMin(n, result2.__takeCount__);
            } else {
              result2.__views__.push({
                "size": nativeMin(n, MAX_ARRAY_LENGTH),
                "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
              });
            }
            return result2;
          };
          LazyWrapper.prototype[methodName + "Right"] = function(n) {
            return this.reverse()[methodName](n).reverse();
          };
        });
        arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
          var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
          LazyWrapper.prototype[methodName] = function(iteratee2) {
            var result2 = this.clone();
            result2.__iteratees__.push({
              "iteratee": getIteratee(iteratee2, 3),
              "type": type
            });
            result2.__filtered__ = result2.__filtered__ || isFilter;
            return result2;
          };
        });
        arrayEach(["head", "last"], function(methodName, index) {
          var takeName = "take" + (index ? "Right" : "");
          LazyWrapper.prototype[methodName] = function() {
            return this[takeName](1).value()[0];
          };
        });
        arrayEach(["initial", "tail"], function(methodName, index) {
          var dropName = "drop" + (index ? "" : "Right");
          LazyWrapper.prototype[methodName] = function() {
            return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
          };
        });
        LazyWrapper.prototype.compact = function() {
          return this.filter(identity);
        };
        LazyWrapper.prototype.find = function(predicate) {
          return this.filter(predicate).head();
        };
        LazyWrapper.prototype.findLast = function(predicate) {
          return this.reverse().find(predicate);
        };
        LazyWrapper.prototype.invokeMap = baseRest(function(path3, args) {
          if (typeof path3 == "function") {
            return new LazyWrapper(this);
          }
          return this.map(function(value) {
            return baseInvoke(value, path3, args);
          });
        });
        LazyWrapper.prototype.reject = function(predicate) {
          return this.filter(negate(getIteratee(predicate)));
        };
        LazyWrapper.prototype.slice = function(start, end) {
          start = toInteger(start);
          var result2 = this;
          if (result2.__filtered__ && (start > 0 || end < 0)) {
            return new LazyWrapper(result2);
          }
          if (start < 0) {
            result2 = result2.takeRight(-start);
          } else if (start) {
            result2 = result2.drop(start);
          }
          if (end !== undefined2) {
            end = toInteger(end);
            result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
          }
          return result2;
        };
        LazyWrapper.prototype.takeRightWhile = function(predicate) {
          return this.reverse().takeWhile(predicate).reverse();
        };
        LazyWrapper.prototype.toArray = function() {
          return this.take(MAX_ARRAY_LENGTH);
        };
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
          if (!lodashFunc) {
            return;
          }
          lodash.prototype[methodName] = function() {
            var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray2(value);
            var interceptor = function(value2) {
              var result3 = lodashFunc.apply(lodash, arrayPush([value2], args));
              return isTaker && chainAll ? result3[0] : result3;
            };
            if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
              isLazy = useLazy = false;
            }
            var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
            if (!retUnwrapped && useLazy) {
              value = onlyLazy ? value : new LazyWrapper(this);
              var result2 = func.apply(value, args);
              result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined2 });
              return new LodashWrapper(result2, chainAll);
            }
            if (isUnwrapped && onlyLazy) {
              return func.apply(this, args);
            }
            result2 = this.thru(interceptor);
            return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
          };
        });
        arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
          var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
          lodash.prototype[methodName] = function() {
            var args = arguments;
            if (retUnwrapped && !this.__chain__) {
              var value = this.value();
              return func.apply(isArray2(value) ? value : [], args);
            }
            return this[chainName](function(value2) {
              return func.apply(isArray2(value2) ? value2 : [], args);
            });
          };
        });
        baseForOwn(LazyWrapper.prototype, function(func, methodName) {
          var lodashFunc = lodash[methodName];
          if (lodashFunc) {
            var key = lodashFunc.name + "";
            if (!hasOwnProperty.call(realNames, key)) {
              realNames[key] = [];
            }
            realNames[key].push({ "name": methodName, "func": lodashFunc });
          }
        });
        realNames[createHybrid(undefined2, WRAP_BIND_KEY_FLAG).name] = [{
          "name": "wrapper",
          "func": undefined2
        }];
        LazyWrapper.prototype.clone = lazyClone;
        LazyWrapper.prototype.reverse = lazyReverse;
        LazyWrapper.prototype.value = lazyValue;
        lodash.prototype.at = wrapperAt;
        lodash.prototype.chain = wrapperChain;
        lodash.prototype.commit = wrapperCommit;
        lodash.prototype.next = wrapperNext;
        lodash.prototype.plant = wrapperPlant;
        lodash.prototype.reverse = wrapperReverse;
        lodash.prototype.toJSON = lodash.prototype.valueOf = lodash.prototype.value = wrapperValue;
        lodash.prototype.first = lodash.prototype.head;
        if (symIterator) {
          lodash.prototype[symIterator] = wrapperToIterator;
        }
        return lodash;
      };
      var _2 = runInContext();
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        root._ = _2;
        define(function() {
          return _2;
        });
      } else if (freeModule) {
        (freeModule.exports = _2)._ = _2;
        freeExports._ = _2;
      } else {
        root._ = _2;
      }
    }).call(exports);
  }
});

// src/app/wsclient.ts
import { autorun, makeAutoObservable } from "mobx";

// ../../adapters/qq/src/types.ts
var types_exports = {};
__export(types_exports, {
  AnnounceType: () => AnnounceType,
  ChannelPrivateType: () => ChannelPrivateType,
  ChannelSpeakPermission: () => ChannelSpeakPermission,
  ChannelSubType: () => ChannelSubType,
  ChannelType: () => ChannelType,
  ChatType: () => ChatType,
  DefaultRoles: () => DefaultRoles,
  DeleteHistoryMsgDays: () => DeleteHistoryMsgDays,
  EmojiType: () => EmojiType,
  Forum: () => Forum,
  Intents: () => Intents,
  Message: () => Message,
  Opcode: () => Opcode,
  ReactionTargetType: () => ReactionTargetType,
  RemindType: () => RemindType
});
var Intents = /* @__PURE__ */ ((Intents2) => {
  Intents2[Intents2["GUILDS"] = 1] = "GUILDS";
  Intents2[Intents2["GUILD_MEMBERS"] = 2] = "GUILD_MEMBERS";
  Intents2[Intents2["GUILD_MESSAGES"] = 512] = "GUILD_MESSAGES";
  Intents2[Intents2["GUILD_MESSAGE_REACTIONS"] = 1024] = "GUILD_MESSAGE_REACTIONS";
  Intents2[Intents2["DIRECT_MESSAGES"] = 4096] = "DIRECT_MESSAGES";
  Intents2[Intents2["OPEN_FORUMS_EVENT"] = 262144] = "OPEN_FORUMS_EVENT";
  Intents2[Intents2["AUDIO_OR_LIVE_CHANNEL_MEMBER"] = 524288] = "AUDIO_OR_LIVE_CHANNEL_MEMBER";
  Intents2[Intents2["USER_MESSAGE"] = 33554432] = "USER_MESSAGE";
  Intents2[Intents2["INTERACTIONS"] = 67108864] = "INTERACTIONS";
  Intents2[Intents2["MESSAGE_AUDIT"] = 134217728] = "MESSAGE_AUDIT";
  Intents2[Intents2["FORUM_EVENT"] = 268435456] = "FORUM_EVENT";
  Intents2[Intents2["AUDIO_ACTION"] = 536870912] = "AUDIO_ACTION";
  Intents2[Intents2["PUBLIC_GUILD_MESSAGES"] = 1073741824] = "PUBLIC_GUILD_MESSAGES";
  return Intents2;
})(Intents || {});
var Opcode = /* @__PURE__ */ ((Opcode3) => {
  Opcode3[Opcode3["DISPATCH"] = 0] = "DISPATCH";
  Opcode3[Opcode3["HEARTBEAT"] = 1] = "HEARTBEAT";
  Opcode3[Opcode3["IDENTIFY"] = 2] = "IDENTIFY";
  Opcode3[Opcode3["RESUME"] = 6] = "RESUME";
  Opcode3[Opcode3["RECONNECT"] = 7] = "RECONNECT";
  Opcode3[Opcode3["INVALID_SESSION"] = 9] = "INVALID_SESSION";
  Opcode3[Opcode3["HELLO"] = 10] = "HELLO";
  Opcode3[Opcode3["HEARTBEAT_ACK"] = 11] = "HEARTBEAT_ACK";
  Opcode3[Opcode3["HTTP_CAKKBACK_ACK"] = 12] = "HTTP_CAKKBACK_ACK";
  return Opcode3;
})(Opcode || {});
var Message;
((Message2) => {
  let Type;
  ((Type2) => {
    Type2[Type2["TEXT"] = 0] = "TEXT";
    Type2[Type2["MIXED"] = 1] = "MIXED";
    Type2[Type2["MARKDOWN"] = 2] = "MARKDOWN";
    Type2[Type2["ARK"] = 3] = "ARK";
    Type2[Type2["EMBED"] = 4] = "EMBED";
    Type2[Type2["MEDIA"] = 7] = "MEDIA";
  })(Type = Message2.Type || (Message2.Type = {}));
  let File;
  ((File2) => {
    let Type2;
    ((Type3) => {
      Type3[Type3["IMAGE"] = 1] = "IMAGE";
      Type3[Type3["VIDEO"] = 2] = "VIDEO";
      Type3[Type3["AUDIO"] = 3] = "AUDIO";
      Type3[Type3["FILE"] = 4] = "FILE";
    })(Type2 = File2.Type || (File2.Type = {}));
  })(File = Message2.File || (Message2.File = {}));
})(Message || (Message = {}));
var DefaultRoles = /* @__PURE__ */ ((DefaultRoles2) => {
  DefaultRoles2[DefaultRoles2["ALL"] = 1] = "ALL";
  DefaultRoles2[DefaultRoles2["ADMIN"] = 2] = "ADMIN";
  DefaultRoles2[DefaultRoles2["OWNER"] = 4] = "OWNER";
  DefaultRoles2[DefaultRoles2["SUBCHANNEL_ADMIN"] = 5] = "SUBCHANNEL_ADMIN";
  return DefaultRoles2;
})(DefaultRoles || {});
var ChannelType = /* @__PURE__ */ ((ChannelType2) => {
  ChannelType2[ChannelType2["TEXT"] = 0] = "TEXT";
  ChannelType2[ChannelType2["VOICE"] = 2] = "VOICE";
  ChannelType2[ChannelType2["GROUP"] = 4] = "GROUP";
  ChannelType2[ChannelType2["LIVE"] = 10005] = "LIVE";
  ChannelType2[ChannelType2["APPLICATION"] = 10006] = "APPLICATION";
  ChannelType2[ChannelType2["FORUM"] = 10007] = "FORUM";
  return ChannelType2;
})(ChannelType || {});
var ChannelSubType = /* @__PURE__ */ ((ChannelSubType2) => {
  ChannelSubType2[ChannelSubType2["IDLE"] = 0] = "IDLE";
  ChannelSubType2[ChannelSubType2["ANNOUNCEMENT"] = 1] = "ANNOUNCEMENT";
  ChannelSubType2[ChannelSubType2["STRATEGY"] = 2] = "STRATEGY";
  ChannelSubType2[ChannelSubType2["BLACK"] = 3] = "BLACK";
  return ChannelSubType2;
})(ChannelSubType || {});
var ChannelPrivateType = /* @__PURE__ */ ((ChannelPrivateType2) => {
  ChannelPrivateType2[ChannelPrivateType2["PUBLIC"] = 0] = "PUBLIC";
  ChannelPrivateType2[ChannelPrivateType2["ADMIN_ONLY"] = 1] = "ADMIN_ONLY";
  ChannelPrivateType2[ChannelPrivateType2["SELECTED_MEMBERS"] = 2] = "SELECTED_MEMBERS";
  return ChannelPrivateType2;
})(ChannelPrivateType || {});
var ChannelSpeakPermission = /* @__PURE__ */ ((ChannelSpeakPermission2) => {
  ChannelSpeakPermission2[ChannelSpeakPermission2["INVALID"] = 0] = "INVALID";
  ChannelSpeakPermission2[ChannelSpeakPermission2["ALL"] = 1] = "ALL";
  ChannelSpeakPermission2[ChannelSpeakPermission2["SELECTED_MEMBERS"] = 2] = "SELECTED_MEMBERS";
  return ChannelSpeakPermission2;
})(ChannelSpeakPermission || {});
var AnnounceType = /* @__PURE__ */ ((AnnounceType2) => {
  AnnounceType2[AnnounceType2["MEMBER"] = 0] = "MEMBER";
  AnnounceType2[AnnounceType2["WELCOME"] = 1] = "WELCOME";
  return AnnounceType2;
})(AnnounceType || {});
var ReactionTargetType = /* @__PURE__ */ ((ReactionTargetType2) => {
  ReactionTargetType2["MESSAGE"] = "ReactionTargetType_MSG";
  ReactionTargetType2["POST"] = "ReactionTargetType_FEED";
  ReactionTargetType2["COMMENT"] = "ReactionTargetType_COMMNENT";
  ReactionTargetType2["REPLY"] = "ReactionTargetType_REPLY";
  return ReactionTargetType2;
})(ReactionTargetType || {});
var EmojiType = /* @__PURE__ */ ((EmojiType2) => {
  EmojiType2[EmojiType2["SYSTEM"] = 1] = "SYSTEM";
  EmojiType2[EmojiType2["DEFAULT"] = 2] = "DEFAULT";
  return EmojiType2;
})(EmojiType || {});
var RemindType = /* @__PURE__ */ ((RemindType2) => {
  RemindType2["NEVER"] = "0";
  RemindType2["START"] = "1";
  RemindType2["BEFORE_5"] = "2";
  RemindType2["BEFORE_15"] = "3";
  RemindType2["BEFORE_30"] = "4";
  RemindType2["BEFORE_60"] = "5";
  return RemindType2;
})(RemindType || {});
var DeleteHistoryMsgDays = /* @__PURE__ */ ((DeleteHistoryMsgDays2) => {
  DeleteHistoryMsgDays2[DeleteHistoryMsgDays2["ALL"] = -1] = "ALL";
  DeleteHistoryMsgDays2[DeleteHistoryMsgDays2["NONE"] = 0] = "NONE";
  DeleteHistoryMsgDays2[DeleteHistoryMsgDays2["DAY_3"] = 3] = "DAY_3";
  DeleteHistoryMsgDays2[DeleteHistoryMsgDays2["DAY_7"] = 7] = "DAY_7";
  DeleteHistoryMsgDays2[DeleteHistoryMsgDays2["DAY_15"] = 15] = "DAY_15";
  DeleteHistoryMsgDays2[DeleteHistoryMsgDays2["DAY_30"] = 30] = "DAY_30";
  return DeleteHistoryMsgDays2;
})(DeleteHistoryMsgDays || {});
var Forum;
((Forum2) => {
  let AuditType;
  ((AuditType2) => {
    AuditType2[AuditType2["PUBLISH_THREAD"] = 1] = "PUBLISH_THREAD";
    AuditType2[AuditType2["PUBLISH_POST"] = 2] = "PUBLISH_POST";
    AuditType2[AuditType2["PUBLISH_REPLY"] = 3] = "PUBLISH_REPLY";
  })(AuditType = Forum2.AuditType || (Forum2.AuditType = {}));
  let RichType;
  ((RichType2) => {
    RichType2[RichType2["TEXT"] = 1] = "TEXT";
    RichType2[RichType2["AT"] = 2] = "AT";
    RichType2[RichType2["URL"] = 3] = "URL";
    RichType2[RichType2["EMOJI"] = 4] = "EMOJI";
    RichType2[RichType2["CHANNEL"] = 5] = "CHANNEL";
    RichType2[RichType2["VIDEO"] = 10] = "VIDEO";
    RichType2[RichType2["IMAGE"] = 11] = "IMAGE";
  })(RichType = Forum2.RichType || (Forum2.RichType = {}));
  let AtType;
  ((AtType2) => {
    AtType2[AtType2["AT_EXPLICIT_USER"] = 1] = "AT_EXPLICIT_USER";
    AtType2[AtType2["AT_ROLE_GROUP"] = 2] = "AT_ROLE_GROUP";
    AtType2[AtType2["AT_GUILD"] = 3] = "AT_GUILD";
  })(AtType = Forum2.AtType || (Forum2.AtType = {}));
  let ElemType;
  ((ElemType2) => {
    ElemType2[ElemType2["ELEM_TYPE_TEXT"] = 1] = "ELEM_TYPE_TEXT";
    ElemType2[ElemType2["ELEM_TYPE_IMAGE"] = 2] = "ELEM_TYPE_IMAGE";
    ElemType2[ElemType2["ELEM_TYPE_VIDEO"] = 3] = "ELEM_TYPE_VIDEO";
    ElemType2[ElemType2["ELEM_TYPE_URL"] = 4] = "ELEM_TYPE_URL";
  })(ElemType = Forum2.ElemType || (Forum2.ElemType = {}));
  let Alignment;
  ((Alignment2) => {
    Alignment2[Alignment2["ALIGNMENT_LEFT"] = 0] = "ALIGNMENT_LEFT";
    Alignment2[Alignment2["ALIGNMENT_MIDDLE"] = 1] = "ALIGNMENT_MIDDLE";
    Alignment2[Alignment2["ALIGNMENT_RIGHT"] = 2] = "ALIGNMENT_RIGHT";
  })(Alignment || (Alignment = {}));
  let PostFormat;
  ((PostFormat2) => {
    PostFormat2[PostFormat2["FORMAT_TEXT"] = 1] = "FORMAT_TEXT";
    PostFormat2[PostFormat2["FORMAT_HTML"] = 2] = "FORMAT_HTML";
    PostFormat2[PostFormat2["FORMAT_MARKDOWN"] = 3] = "FORMAT_MARKDOWN";
    PostFormat2[PostFormat2["FORMAT_JSON"] = 4] = "FORMAT_JSON";
  })(PostFormat = Forum2.PostFormat || (Forum2.PostFormat = {}));
})(Forum || (Forum = {}));
var ChatType = /* @__PURE__ */ ((ChatType2) => {
  ChatType2[ChatType2["GROUP"] = 1] = "GROUP";
  ChatType2[ChatType2["DIRECT"] = 2] = "DIRECT";
  ChatType2[ChatType2["CHANNEL"] = 3] = "CHANNEL";
  return ChatType2;
})(ChatType || {});

// ../../node_modules/@satorijs/core/lib/index.mjs
var lib_exports2 = {};
__export(lib_exports2, {
  Adapter: () => Adapter,
  Bot: () => Bot,
  Context: () => SatoriContext,
  Element: () => lib_default,
  HTTP: () => HTTP,
  MessageEncoder: () => MessageEncoder,
  Messenger: () => MessageEncoder,
  Modulator: () => MessageEncoder,
  Quester: () => HTTP,
  Satori: () => Satori,
  Session: () => Session,
  Universal: () => lib_exports,
  default: () => src_default,
  defineAccessor: () => defineAccessor,
  h: () => lib_default,
  segment: () => lib_default
});
import { Context as Context4, Logger as Logger2, Service as Service2, z as z2 } from "cordis";
import { defineProperty as defineProperty22, makeArray as makeArray2, remove as remove3 } from "cosmokit";

// ../../node_modules/@cordisjs/plugin-http/lib/index.js
import { Context, Service } from "cordis";
import { Binary as Binary2, defineProperty, isNullable, trimSlash } from "cosmokit";

// ../../node_modules/@cordisjs/plugin-http/lib/adapter/node.js
import { fileURLToPath } from "node:url";
import { basename } from "node:path";
import FileType from "file-type";
import { readFile } from "node:fs/promises";
import { Binary } from "cosmokit";
import { lookup } from "node:dns/promises";
import { WebSocket } from "ws";
var __defProp2 = Object.defineProperty;
var __name = (target, value) => __defProp2(target, "name", { value, configurable: true });
async function loadFile(url) {
  if (url.startsWith("file://")) {
    const data = await readFile(fileURLToPath(url));
    const result = await FileType.fromBuffer(data);
    return {
      type: result?.mime,
      mime: result?.mime,
      filename: basename(url),
      data: Binary.fromSource(data)
    };
  }
}
__name(loadFile, "loadFile");

// ../../node_modules/@cordisjs/plugin-http/lib/index.js
import mimedb from "mime-db";
var __defProp3 = Object.defineProperty;
var __name2 = (target, value) => __defProp3(target, "name", { value, configurable: true });
var bogonV4 = [
  "0.0.0.0/8",
  // RFC 1122 'this' network
  "10.0.0.0/8",
  // RFC 1918 private space
  "100.64.0.0/10",
  // RFC 6598 Carrier grade nat space
  "127.0.0.0/8",
  // RFC 1122 localhost
  "169.254.0.0/16",
  // RFC 3927 link local
  "172.16.0.0/12",
  // RFC 1918 private space
  "192.0.2.0/24",
  // RFC 5737 TEST-NET-1
  "192.88.99.0/24",
  // RFC 7526 6to4 anycast relay
  "192.168.0.0/16",
  // RFC 1918 private space
  "198.18.0.0/15",
  // RFC 2544 benchmarking
  "198.51.100.0/24",
  // RFC 5737 TEST-NET-2
  "203.0.113.0/24",
  // RFC 5737 TEST-NET-3
  "224.0.0.0/4",
  // multicast
  "240.0.0.0/4"
  // reserved
];
var bogonV6 = [
  "::/8",
  // RFC 4291 IPv4-compatible, loopback, et al
  "0100::/64",
  // RFC 6666 Discard-Only
  "2001:2::/48",
  // RFC 5180 BMWG
  "2001:10::/28",
  // RFC 4843 ORCHID
  "2001:db8::/32",
  // RFC 3849 documentation
  "2002::/16",
  // RFC 7526 6to4 anycast relay
  "3ffe::/16",
  // RFC 3701 old 6bone
  "fc00::/7",
  // RFC 4193 unique local unicast
  "fe80::/10",
  // RFC 4291 link local unicast
  "fec0::/10",
  // RFC 3879 old site local unicast
  "ff00::/8"
  // RFC 4291 multicast
];
function parseIPv4(ip) {
  return ip.split(".").reduce((a, b) => (a << 8n) + BigInt(b), 0n);
}
__name2(parseIPv4, "parseIPv4");
function parseIPv6(ip) {
  const exp = ip.indexOf("::");
  let num = 0n;
  if (exp !== -1 && exp !== 0) {
    ip.slice(0, exp).split(":").forEach((piece, i) => {
      num |= BigInt(`0x${piece}`) << BigInt((7 - i) * 16);
    });
  }
  if (exp === ip.length - 2) {
    return num;
  }
  const rest = exp === -1 ? ip : ip.slice(exp + 2);
  const v4 = rest.includes(".");
  const pieces = rest.split(":");
  let start = 0;
  if (v4) {
    start += 2;
    const [addr] = pieces.splice(-1, 1);
    num |= parseIPv4(addr);
  }
  pieces.reverse().forEach((piece, i) => {
    num |= BigInt(`0x${piece}`) << BigInt((start + i) * 8);
  });
  return num;
}
__name2(parseIPv6, "parseIPv6");
async function isLocalAddress({ address, family }) {
  if (family !== 4 && family !== 6)
    return false;
  const { bogons, length, parse: parse3 } = family === 4 ? { bogons: bogonV4, length: 32, parse: parseIPv4 } : { bogons: bogonV6, length: 128, parse: parseIPv6 };
  const num = parse3(address);
  for (const bogon of bogons) {
    const [prefix, cidr] = bogon.split("/");
    const mask = (1n << BigInt(cidr)) - 1n << BigInt(length - +cidr);
    if ((num & mask) === parse3(prefix))
      return true;
  }
  return false;
}
__name2(isLocalAddress, "isLocalAddress");
var kHTTPError = Symbol.for("cordis.http.error");
var HTTPError = class extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
  }
  static {
    __name2(this, "HTTPError");
  }
  [kHTTPError] = true;
  response;
  static is(error) {
    return !!error?.[kHTTPError];
  }
};
function encodeRequest(data) {
  if (data instanceof URLSearchParams)
    return [null, data];
  if (data instanceof ArrayBuffer)
    return [null, data];
  if (ArrayBuffer.isView(data))
    return [null, data];
  if (data instanceof Blob)
    return [null, data];
  if (data instanceof FormData)
    return [null, data];
  return ["application/json", JSON.stringify(data)];
}
__name2(encodeRequest, "encodeRequest");
var HTTP = class _HTTP extends Service {
  static {
    __name2(this, "HTTP");
  }
  static Error = HTTPError;
  /** @deprecated use `http.isError()` instead */
  static isAxiosError = HTTPError.is;
  static [Service.provide] = "http";
  static [Service.immediate] = true;
  static {
    for (const method of ["get", "delete"]) {
      defineProperty(_HTTP.prototype, method, async function(url, config) {
        const response = await this(url, { method, ...config });
        return response.data;
      });
    }
    for (const method of ["patch", "post", "put"]) {
      defineProperty(_HTTP.prototype, method, async function(url, data, config) {
        const response = await this(url, { method, data, ...config });
        return response.data;
      });
    }
  }
  isError = HTTPError.is;
  _decoders = /* @__PURE__ */ Object.create(null);
  constructor(...args) {
    super(args[0], args[1]);
    this.decoder("json", (raw) => raw.json());
    this.decoder("text", (raw) => raw.text());
    this.decoder("blob", (raw) => raw.blob());
    this.decoder("arraybuffer", (raw) => raw.arrayBuffer());
    this.decoder("formdata", (raw) => raw.formData());
    this.decoder("stream", (raw) => raw.body);
    this.ctx.on("http/file", (url, options) => loadFile(url));
  }
  static mergeConfig = (target, source) => ({
    ...target,
    ...source,
    headers: {
      ...target?.headers,
      ...source?.headers
    }
  });
  decoder(type, decoder) {
    return this[Context.origin].effect(() => {
      this._decoders[type] = decoder;
      return () => delete this._decoders[type];
    });
  }
  extend(config = {}) {
    return this[Service.extend]({
      config: _HTTP.mergeConfig(this.config, config)
    });
  }
  resolveConfig(init) {
    const caller = this[Context.origin];
    let result = { headers: {}, ...this.config };
    caller.emit(this, "http/config", result);
    let intercept = caller[Context.intercept];
    while (intercept) {
      result = _HTTP.mergeConfig(result, intercept.http);
      intercept = Object.getPrototypeOf(intercept);
    }
    result = _HTTP.mergeConfig(result, init);
    return result;
  }
  resolveURL(url, config, isWebSocket = false) {
    if (config.endpoint) {
      try {
        new URL(url);
      } catch {
        url = trimSlash(config.endpoint) + url;
      }
    }
    try {
      url = new URL(url, config.baseURL);
    } catch (error) {
      throw new TypeError(`Invalid URL: ${url}`);
    }
    if (isWebSocket)
      url.protocol = url.protocol.replace(/^http/, "ws");
    for (const [key, value] of Object.entries(config.params ?? {})) {
      if (isNullable(value))
        continue;
      url.searchParams.append(key, value);
    }
    return url;
  }
  defaultDecoder(response) {
    const type = response.headers.get("Content-Type");
    if (type?.startsWith("application/json")) {
      return response.json();
    } else if (type?.startsWith("text/")) {
      return response.text();
    } else {
      return response.arrayBuffer();
    }
  }
  async [Service.invoke](...args) {
    const caller = this[Context.origin];
    let method;
    if (typeof args[1] === "string" || args[1] instanceof URL) {
      method = args.shift();
    }
    const config = this.resolveConfig(args[1]);
    const url = this.resolveURL(args[0], config);
    method ??= config.method ?? "GET";
    const controller = new AbortController();
    if (config.signal) {
      if (config.signal.aborted) {
        throw config.signal.reason;
      }
      config.signal.addEventListener("abort", () => {
        controller.abort(config.signal.reason);
      });
    }
    const dispose = caller.effect(() => {
      const timer = config.timeout && setTimeout(() => {
        controller.abort(new HTTPError("request timeout", "ETIMEDOUT"));
      }, config.timeout);
      return (done) => {
        clearTimeout(timer);
        if (done)
          return;
        controller.abort(new HTTPError("context disposed", "ETIMEDOUT"));
      };
    });
    controller.signal.addEventListener("abort", () => dispose());
    try {
      const headers = new Headers(config.headers);
      const init = {
        method,
        headers,
        body: config.data,
        keepalive: config.keepAlive,
        redirect: config.redirect,
        signal: controller.signal
      };
      if (config.data && typeof config.data === "object") {
        const [type, body] = encodeRequest(config.data);
        init.body = body;
        if (type && !headers.has("Content-Type")) {
          headers.append("Content-Type", type);
        }
      }
      caller.emit(this, "http/fetch-init", url, init, config);
      const raw = await fetch(url, init).catch((cause) => {
        if (_HTTP.Error.is(cause))
          throw cause;
        const error = new _HTTP.Error(`fetch ${url} failed`);
        error.cause = cause;
        throw error;
      });
      const response = {
        data: null,
        url: raw.url,
        status: raw.status,
        statusText: raw.statusText,
        headers: raw.headers
      };
      const validateStatus = config.validateStatus ?? ((status) => status < 400);
      if (!validateStatus(raw.status)) {
        const error = new _HTTP.Error(raw.statusText);
        error.response = response;
        try {
          response.data = await this.defaultDecoder(raw);
        } catch {
        }
        throw error;
      }
      if (config.responseType) {
        if (!(config.responseType in this._decoders)) {
          throw new TypeError(`Unknown responseType: ${config.responseType}`);
        }
        const decoder = this._decoders[config.responseType];
        response.data = await decoder(raw);
      } else {
        response.data = await this.defaultDecoder(raw);
      }
      return response;
    } finally {
      dispose(true);
    }
  }
  async head(url, config) {
    const response = await this(url, { method: "HEAD", ...config });
    return response.headers;
  }
  axios(...args) {
    const caller = this[Context.origin];
    caller.emit("internal/warning", "ctx.http.axios() is deprecated, use ctx.http() instead");
    if (typeof args[0] === "string") {
      return this(args[0], args[1]);
    } else {
      return this(args[0].url, args[0]);
    }
  }
  ws(url, init) {
    const caller = this[Context.origin];
    const config = this.resolveConfig(init);
    url = this.resolveURL(url, config, true);
    let options;
    if (WebSocket !== globalThis.WebSocket) {
      options = {
        handshakeTimeout: config?.timeout,
        headers: config?.headers
      };
      caller.emit(this, "http/websocket-init", url, options, config);
    }
    const socket = new WebSocket(url, options);
    const dispose = caller.on("dispose", () => {
      socket.close(1e3, "context disposed");
    });
    socket.addEventListener("close", () => {
      dispose();
    });
    return socket;
  }
  async file(url, options = {}) {
    const task = await this[Context.origin].serial(this, "http/file", url, options);
    if (task)
      return task;
    const capture = /^data:([\w/-]+);base64,(.*)$/.exec(url);
    if (capture) {
      const [, type2, base64] = capture;
      let name2 = "file";
      const ext = type2 && mimedb[type2]?.extensions?.[0];
      if (ext)
        name2 += `.${ext}`;
      return { type: type2, mime: type2, data: Binary2.fromBase64(base64), filename: name2 };
    }
    const { headers, data, url: responseUrl } = await this(url, {
      method: "GET",
      responseType: "arraybuffer",
      timeout: +options.timeout || void 0
    });
    const type = headers.get("content-type");
    const [, name] = responseUrl.match(/.+\/([^/?]*)(?=\?)?/);
    return { type, mime: type, filename: name, data };
  }
  async isLocal(url) {
    let { hostname, protocol } = new URL(url);
    if (protocol !== "http:" && protocol !== "https:")
      return true;
    if (/^\[.+\]$/.test(hostname)) {
      hostname = hostname.slice(1, -1);
    }
    try {
      const address = await lookup(hostname);
      return isLocalAddress(address);
    } catch {
      return false;
    }
  }
};

// ../../node_modules/@satorijs/element/lib/index.mjs
import { arrayBufferToBase64, camelize, defineProperty as defineProperty2, hyphenate, is, isNullable as isNullable2, makeArray } from "cosmokit";
var __defProp4 = Object.defineProperty;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __name3 = (target, value) => __defProp4(target, "name", { value, configurable: true });
var __commonJS2 = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var require_src = __commonJS2({
  "src/index.ts"(exports, module) {
    var kElement = Symbol.for("satori.element");
    var ElementConstructor = class {
      static {
        __name3(this, "ElementConstructor");
      }
      get data() {
        return this.attrs;
      }
      getTagName() {
        if (this.type === "component") {
          return this.attrs.is?.name ?? "component";
        } else {
          return this.type;
        }
      }
      toAttrString() {
        return Object.entries(this.attrs).map(([key, value]) => {
          if (isNullable2(value))
            return "";
          key = hyphenate(key);
          if (value === true)
            return ` ${key}`;
          if (value === false)
            return ` no-${key}`;
          return ` ${key}="${Element.escape("" + value, true)}"`;
        }).join("");
      }
      toString(strip = false) {
        if (this.type === "text" && "content" in this.attrs) {
          return strip ? this.attrs.content : Element.escape(this.attrs.content);
        }
        const inner = this.children.map((child) => child.toString(strip)).join("");
        if (strip)
          return inner;
        const attrs = this.toAttrString();
        const tag = this.getTagName();
        if (!this.children.length)
          return `<${tag}${attrs}/>`;
        return `<${tag}${attrs}>${inner}</${tag}>`;
      }
    };
    defineProperty2(ElementConstructor, "name", "Element");
    defineProperty2(ElementConstructor.prototype, kElement, true);
    function Element(type, ...args) {
      const el = Object.create(ElementConstructor.prototype);
      const attrs = {}, children = [];
      if (args[0] && typeof args[0] === "object" && !Element.isElement(args[0]) && !Array.isArray(args[0])) {
        const props = args.shift();
        for (const [key, value] of Object.entries(props)) {
          if (isNullable2(value))
            continue;
          if (key === "children") {
            args.push(...makeArray(value));
          } else {
            attrs[camelize(key)] = value;
          }
        }
      }
      for (const child of args) {
        children.push(...Element.toElementArray(child));
      }
      if (typeof type === "function") {
        attrs.is = type;
        type = "component";
      }
      return Object.assign(el, { type, attrs, children });
    }
    __name3(Element, "Element");
    var evaluate = new Function("expr", "context", `
  try {
    with (context) {
      return eval(expr)
    }
  } catch {}
`);
    ((Element2) => {
      Element2.jsx = Element2;
      Element2.jsxs = Element2;
      Element2.jsxDEV = Element2;
      Element2.Fragment = "template";
      function isElement(source) {
        return source && typeof source === "object" && source[kElement];
      }
      Element2.isElement = isElement;
      __name3(isElement, "isElement");
      function toElement(content) {
        if (typeof content === "string" || typeof content === "number" || typeof content === "boolean") {
          content = "" + content;
          if (content)
            return Element2("text", { content });
        } else if (isElement(content)) {
          return content;
        } else if (!isNullable2(content)) {
          throw new TypeError(`Invalid content: ${content}`);
        }
      }
      Element2.toElement = toElement;
      __name3(toElement, "toElement");
      function toElementArray(content) {
        if (Array.isArray(content)) {
          return content.map(toElement).filter((x) => x);
        } else {
          return [toElement(content)].filter((x) => x);
        }
      }
      Element2.toElementArray = toElementArray;
      __name3(toElementArray, "toElementArray");
      function normalize(source, context2) {
        return typeof source === "string" ? parse3(source, context2) : toElementArray(source);
      }
      Element2.normalize = normalize;
      __name3(normalize, "normalize");
      function escape(source, inline = false) {
        const result = (source ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return inline ? result.replace(/"/g, "&quot;") : result;
      }
      Element2.escape = escape;
      __name3(escape, "escape");
      function unescape(source) {
        return source.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#(\d+);/g, (_2, code) => code === "38" ? _2 : String.fromCharCode(+code)).replace(/&#x([0-9a-f]+);/gi, (_2, code) => code === "26" ? _2 : String.fromCharCode(parseInt(code, 16))).replace(/&(amp|#38|#x26);/g, "&");
      }
      Element2.unescape = unescape;
      __name3(unescape, "unescape");
      function from(source, options = {}) {
        const elements = parse3(source);
        if (options.caret) {
          if (options.type && elements[0]?.type !== options.type)
            return;
          return elements[0];
        }
        return select(elements, options.type || "*")[0];
      }
      Element2.from = from;
      __name3(from, "from");
      const combRegExp = / *([ >+~]) */g;
      function parseSelector(input) {
        return input.split(",").map((query) => {
          const selectors = [];
          query = query.trim();
          let combCap, combinator = " ";
          while (combCap = combRegExp.exec(query)) {
            selectors.push({ type: query.slice(0, combCap.index), combinator });
            combinator = combCap[1];
            query = query.slice(combCap.index + combCap[0].length);
          }
          selectors.push({ type: query, combinator });
          return selectors;
        });
      }
      Element2.parseSelector = parseSelector;
      __name3(parseSelector, "parseSelector");
      function select(source, query) {
        if (!source || !query)
          return [];
        if (typeof source === "string")
          source = parse3(source);
        if (typeof query === "string")
          query = parseSelector(query);
        if (!query.length)
          return [];
        let adjacent = [];
        const results = [];
        for (const [index, element] of source.entries()) {
          const inner = [];
          const local = [...query, ...adjacent];
          adjacent = [];
          let matched = false;
          for (const group of local) {
            const { type, combinator } = group[0];
            if (type === element.type || type === "*") {
              if (group.length === 1) {
                matched = true;
              } else if ([" ", ">"].includes(group[1].combinator)) {
                inner.push(group.slice(1));
              } else if (group[1].combinator === "+") {
                adjacent.push(group.slice(1));
              } else {
                query.push(group.slice(1));
              }
            }
            if (combinator === " ") {
              inner.push(group);
            }
          }
          if (matched)
            results.push(source[index]);
          results.push(...select(element.children, inner));
        }
        return results;
      }
      Element2.select = select;
      __name3(select, "select");
      function interpolate(expr, context2) {
        expr = expr.trim();
        if (!/^[\w.]+$/.test(expr)) {
          return evaluate(expr, context2) ?? "";
        }
        let value = context2;
        for (const part of expr.split(".")) {
          value = value[part];
          if (isNullable2(value))
            return "";
        }
        return value ?? "";
      }
      Element2.interpolate = interpolate;
      __name3(interpolate, "interpolate");
      const tagRegExp1 = /(?<comment><!--[\s\S]*?-->)|(?<tag><(\/?)([^!\s>/]*)([^>]*?)\s*(\/?)>)/;
      const tagRegExp2 = /(?<comment><!--[\s\S]*?-->)|(?<tag><(\/?)([^!\s>/]*)([^>]*?)\s*(\/?)>)|(?<curly>\{(?<derivative>[@:/#][^\s}]*)?[\s\S]*?\})/;
      const attrRegExp1 = /([^\s=]+)(?:="(?<value1>[^"]*)"|='(?<value2>[^']*)')?/g;
      const attrRegExp2 = /([^\s=]+)(?:="(?<value1>[^"]*)"|='(?<value2>[^']*)'|=\{(?<curly>[^}]+)\})?/g;
      let Position;
      ((Position2) => {
        Position2[Position2["OPEN"] = 0] = "OPEN";
        Position2[Position2["CLOSE"] = 1] = "CLOSE";
        Position2[Position2["EMPTY"] = 2] = "EMPTY";
        Position2[Position2["CONTINUE"] = 3] = "CONTINUE";
      })(Position || (Position = {}));
      function parse3(source, context2) {
        const tokens = [];
        function pushText(content) {
          if (content)
            tokens.push(content);
        }
        __name3(pushText, "pushText");
        const tagRegExp = context2 ? tagRegExp2 : tagRegExp1;
        let tagCap;
        let trimStart = true;
        while (tagCap = tagRegExp.exec(source)) {
          const trimEnd = !tagCap.groups.curly;
          parseContent(source.slice(0, tagCap.index), trimStart, trimEnd);
          trimStart = trimEnd;
          source = source.slice(tagCap.index + tagCap[0].length);
          const [_2, , , close, type, extra, empty] = tagCap;
          if (tagCap.groups.comment)
            continue;
          if (tagCap.groups.curly) {
            let name = "", position = 2;
            if (tagCap.groups.derivative) {
              name = tagCap.groups.derivative.slice(1);
              position = {
                "@": 2,
                "#": 0,
                "/": 1,
                ":": 3
                /* CONTINUE */
              }[tagCap.groups.derivative[0]];
            }
            tokens.push({
              type: "curly",
              name,
              position,
              source: tagCap.groups.curly,
              extra: tagCap.groups.curly.slice(1 + (tagCap.groups.derivative ?? "").length, -1)
            });
            continue;
          }
          tokens.push({
            type: "angle",
            source: _2,
            name: type || Element2.Fragment,
            position: close ? 1 : empty ? 2 : 0,
            extra
          });
        }
        parseContent(source, trimStart, true);
        function parseContent(source2, trimStart2, trimEnd) {
          source2 = unescape(source2);
          if (trimStart2)
            source2 = source2.replace(/^\s*\n\s*/, "");
          if (trimEnd)
            source2 = source2.replace(/\s*\n\s*$/, "");
          pushText(source2);
        }
        __name3(parseContent, "parseContent");
        return parseTokens(foldTokens(tokens), context2);
      }
      Element2.parse = parse3;
      __name3(parse3, "parse");
      function foldTokens(tokens) {
        const stack = [[{
          type: "angle",
          name: Element2.Fragment,
          position: 0,
          source: "",
          extra: "",
          children: { default: [] }
        }, "default"]];
        function pushToken(...tokens2) {
          const [token, slot] = stack[0];
          token.children[slot].push(...tokens2);
        }
        __name3(pushToken, "pushToken");
        for (const token of tokens) {
          if (typeof token === "string") {
            pushToken(token);
            continue;
          }
          const { name, position } = token;
          if (position === 1) {
            if (stack[0][0].name === name) {
              stack.shift();
            }
          } else if (position === 3) {
            stack[0][0].children[name] = [];
            stack[0][1] = name;
          } else if (position === 0) {
            pushToken(token);
            token.children = { default: [] };
            stack.unshift([token, "default"]);
          } else {
            pushToken(token);
          }
        }
        return stack[stack.length - 1][0].children.default;
      }
      __name3(foldTokens, "foldTokens");
      function parseTokens(tokens, context2) {
        const result = [];
        for (const token of tokens) {
          if (typeof token === "string") {
            result.push(Element2("text", { content: token }));
          } else if (token.type === "angle") {
            const attrs = {};
            const attrRegExp = context2 ? attrRegExp2 : attrRegExp1;
            let attrCap;
            while (attrCap = attrRegExp.exec(token.extra)) {
              const [, key, v1, v2 = v1, v3] = attrCap;
              if (v3) {
                attrs[key] = interpolate(v3, context2);
              } else if (!isNullable2(v2)) {
                attrs[key] = unescape(v2);
              } else if (key.startsWith("no-")) {
                attrs[key.slice(3)] = false;
              } else {
                attrs[key] = true;
              }
            }
            result.push(Element2(token.name, attrs, token.children && parseTokens(token.children.default, context2)));
          } else if (!token.name) {
            result.push(...toElementArray(interpolate(token.extra, context2)));
          } else if (token.name === "if") {
            if (evaluate(token.extra, context2)) {
              result.push(...parseTokens(token.children.default, context2));
            } else {
              result.push(...parseTokens(token.children.else || [], context2));
            }
          } else if (token.name === "each") {
            const [expr, ident] = token.extra.split(/\s+as\s+/);
            const items = interpolate(expr, context2);
            if (!items || !items[Symbol.iterator])
              continue;
            for (const item of items) {
              result.push(...parseTokens(token.children.default, { ...context2, [ident]: item }));
            }
          }
        }
        return result;
      }
      __name3(parseTokens, "parseTokens");
      function visit(element, rules, session) {
        const { type, attrs, children } = element;
        if (typeof rules === "function") {
          return rules(element, session);
        } else {
          let result = rules[typeof type === "string" ? type : ""] ?? rules.default ?? true;
          if (typeof result === "function") {
            result = result(attrs, children, session);
          }
          return result;
        }
      }
      __name3(visit, "visit");
      function transform(source, rules, session) {
        const elements = typeof source === "string" ? parse3(source) : source;
        const output = [];
        elements.forEach((element) => {
          const { type, attrs, children } = element;
          const result = visit(element, rules, session);
          if (result === true) {
            output.push(Element2(type, attrs, transform(children, rules, session)));
          } else if (result !== false) {
            output.push(...toElementArray(result));
          }
        });
        return typeof source === "string" ? output.join("") : output;
      }
      Element2.transform = transform;
      __name3(transform, "transform");
      async function transformAsync(source, rules, session) {
        const elements = typeof source === "string" ? parse3(source) : source;
        const children = (await Promise.all(elements.map(async (element) => {
          const { type, attrs, children: children2 } = element;
          const result = await visit(element, rules, session);
          if (result === true) {
            return [Element2(type, attrs, await transformAsync(children2, rules, session))];
          } else if (result !== false) {
            return toElementArray(result);
          } else {
            return [];
          }
        }))).flat(1);
        return typeof source === "string" ? children.join("") : children;
      }
      Element2.transformAsync = transformAsync;
      __name3(transformAsync, "transformAsync");
      function createFactory(type, ...keys) {
        return (...args) => {
          const element = Element2(type);
          keys.forEach((key, index) => {
            if (!isNullable2(args[index])) {
              element.attrs[key] = args[index];
            }
          });
          if (args[keys.length]) {
            Object.assign(element.attrs, args[keys.length]);
          }
          return element;
        };
      }
      __name3(createFactory, "createFactory");
      Element2.warn = /* @__PURE__ */ __name3(() => {
      }, "warn");
      function createAssetFactory(type) {
        return (src, ...args) => {
          let prefix = "base64://";
          if (typeof args[0] === "string") {
            prefix = `data:${args.shift()};base64,`;
          }
          if (is("Buffer", src)) {
            src = prefix + src.toString("base64");
          } else if (is("ArrayBuffer", src)) {
            src = prefix + arrayBufferToBase64(src);
          } else if (ArrayBuffer.isView(src)) {
            src = prefix + arrayBufferToBase64(src.buffer);
          }
          if (src.startsWith("base64://")) {
            (0, Element2.warn)(`protocol "base64:" is deprecated and will be removed in the future, please use "data:" instead`);
          }
          return Element2(type, { ...args[0], src });
        };
      }
      __name3(createAssetFactory, "createAssetFactory");
      Element2.text = createFactory("text", "content");
      Element2.at = createFactory("at", "id");
      Element2.sharp = createFactory("sharp", "id");
      Element2.quote = createFactory("quote", "id");
      Element2.image = createAssetFactory("img");
      Element2.img = createAssetFactory("img");
      Element2.video = createAssetFactory("video");
      Element2.audio = createAssetFactory("audio");
      Element2.file = createAssetFactory("file");
      function i18n(path3, children) {
        return Element2("i18n", typeof path3 === "string" ? { path: path3 } : path3, children);
      }
      Element2.i18n = i18n;
      __name3(i18n, "i18n");
    })(Element || (Element = {}));
    module.exports = Element;
  }
});
var lib_default = require_src();

// ../../node_modules/@satorijs/core/lib/index.mjs
__reExport(lib_exports2, cordis_star);
__reExport(lib_exports2, cosmokit_star);
import * as cordis_star from "cordis";
import * as cosmokit_star from "cosmokit";

// ../../node_modules/@satorijs/protocol/lib/index.mjs
var lib_exports = {};
__export(lib_exports, {
  Channel: () => Channel,
  Methods: () => Methods,
  Opcode: () => Opcode2,
  Status: () => Status,
  WebSocket: () => WebSocket2
});
var __defProp5 = Object.defineProperty;
var __name4 = (target, value) => __defProp5(target, "name", { value, configurable: true });
function Field(name) {
  return { name };
}
__name4(Field, "Field");
function Method(name, fields, isForm = false) {
  return { name, fields: fields.map(Field), isForm };
}
__name4(Method, "Method");
var Methods = {
  "channel.get": Method("getChannel", ["channel_id", "guild_id"]),
  "channel.list": Method("getChannelList", ["guild_id", "next"]),
  "channel.create": Method("createChannel", ["guild_id", "data"]),
  "channel.update": Method("updateChannel", ["channel_id", "data"]),
  "channel.delete": Method("deleteChannel", ["channel_id"]),
  "channel.mute": Method("muteChannel", ["channel_id", "guild_id", "enable"]),
  "message.create": Method("createMessage", ["channel_id", "content"]),
  "message.update": Method("editMessage", ["channel_id", "message_id", "content"]),
  "message.delete": Method("deleteMessage", ["channel_id", "message_id"]),
  "message.get": Method("getMessage", ["channel_id", "message_id"]),
  "message.list": Method("getMessageList", ["channel_id", "next", "direction", "limit", "order"]),
  "reaction.create": Method("createReaction", ["channel_id", "message_id", "emoji"]),
  "reaction.delete": Method("deleteReaction", ["channel_id", "message_id", "emoji", "user_id"]),
  "reaction.clear": Method("clearReaction", ["channel_id", "message_id", "emoji"]),
  "reaction.list": Method("getReactionList", ["channel_id", "message_id", "emoji", "next"]),
  "upload.create": Method("createUpload", [], true),
  "guild.get": Method("getGuild", ["guild_id"]),
  "guild.list": Method("getGuildList", ["next"]),
  "guild.member.get": Method("getGuildMember", ["guild_id", "user_id"]),
  "guild.member.list": Method("getGuildMemberList", ["guild_id", "next"]),
  "guild.member.kick": Method("kickGuildMember", ["guild_id", "user_id", "permanent"]),
  "guild.member.mute": Method("muteGuildMember", ["guild_id", "user_id", "duration", "reason"]),
  "guild.member.role.set": Method("setGuildMemberRole", ["guild_id", "user_id", "role_id"]),
  "guild.member.role.unset": Method("unsetGuildMemberRole", ["guild_id", "user_id", "role_id"]),
  "guild.role.list": Method("getGuildRoleList", ["guild_id", "next"]),
  "guild.role.create": Method("createGuildRole", ["guild_id", "data"]),
  "guild.role.update": Method("updateGuildRole", ["guild_id", "role_id", "data"]),
  "guild.role.delete": Method("deleteGuildRole", ["guild_id", "role_id"]),
  "login.get": Method("getLogin", []),
  "user.get": Method("getUser", ["user_id"]),
  "user.channel.create": Method("createDirectChannel", ["user_id", "guild_id"]),
  "friend.list": Method("getFriendList", ["next"]),
  "friend.delete": Method("deleteFriend", ["user_id"]),
  "friend.approve": Method("handleFriendRequest", ["message_id", "approve", "comment"]),
  "guild.approve": Method("handleGuildRequest", ["message_id", "approve", "comment"]),
  "guild.member.approve": Method("handleGuildMemberRequest", ["message_id", "approve", "comment"])
};
var Channel;
((Channel22) => {
  let Type;
  ((Type2) => {
    Type2[Type2["TEXT"] = 0] = "TEXT";
    Type2[Type2["DIRECT"] = 1] = "DIRECT";
    Type2[Type2["VOICE"] = 2] = "VOICE";
    Type2[Type2["CATEGORY"] = 3] = "CATEGORY";
  })(Type = Channel22.Type || (Channel22.Type = {}));
})(Channel || (Channel = {}));
var Status = /* @__PURE__ */ ((Status2) => {
  Status2[Status2["OFFLINE"] = 0] = "OFFLINE";
  Status2[Status2["ONLINE"] = 1] = "ONLINE";
  Status2[Status2["CONNECT"] = 2] = "CONNECT";
  Status2[Status2["DISCONNECT"] = 3] = "DISCONNECT";
  Status2[Status2["RECONNECT"] = 4] = "RECONNECT";
  return Status2;
})(Status || {});
var Opcode2 = /* @__PURE__ */ ((Opcode22) => {
  Opcode22[Opcode22["EVENT"] = 0] = "EVENT";
  Opcode22[Opcode22["PING"] = 1] = "PING";
  Opcode22[Opcode22["PONG"] = 2] = "PONG";
  Opcode22[Opcode22["IDENTIFY"] = 3] = "IDENTIFY";
  Opcode22[Opcode22["READY"] = 4] = "READY";
  return Opcode22;
})(Opcode2 || {});
var WebSocket2;
((WebSocket22) => {
  WebSocket22.CONNECTING = 0;
  WebSocket22.OPEN = 1;
  WebSocket22.CLOSING = 2;
  WebSocket22.CLOSED = 3;
})(WebSocket2 || (WebSocket2 = {}));

// ../../node_modules/@satorijs/core/lib/index.mjs
import { clone, pick, remove } from "cosmokit";
import { Context as Context2 } from "cordis";
import { defineProperty as defineProperty3, isNullable as isNullable3 } from "cosmokit";
import { Context as Context3 } from "cordis";
import { remove as remove2, Time } from "cosmokit";
import { z } from "cordis";
var __defProp6 = Object.defineProperty;
var __name5 = (target, value) => __defProp6(target, "name", { value, configurable: true });
var Session = class _Session {
  static {
    __name5(this, "Session");
  }
  static counter = 0;
  id;
  bot;
  app;
  event;
  locales = [];
  constructor(bot, event) {
    event.selfId ??= bot.selfId;
    event.platform ??= bot.platform;
    event.timestamp ??= Date.now();
    this.event = event;
    this.id = ++_Session.counter;
    defineProperty3(this, "bot", bot);
    defineProperty3(this, "app", bot.ctx.root);
    defineProperty3(this, Context3.current, bot.ctx);
    return Context3.associate(this, "session");
  }
  /** @deprecated */
  get data() {
    return this.event;
  }
  get isDirect() {
    return this.event.channel.type === Channel.Type.DIRECT;
  }
  set isDirect(value) {
    (this.event.channel ??= {}).type = value ? Channel.Type.DIRECT : Channel.Type.TEXT;
  }
  get author() {
    return {
      ...this.event.user,
      ...this.event.member,
      userId: this.event.user?.id,
      username: this.event.user?.name,
      nickname: this.event.member?.name
    };
  }
  get uid() {
    return `${this.platform}:${this.userId}`;
  }
  get gid() {
    return `${this.platform}:${this.guildId}`;
  }
  get cid() {
    return `${this.platform}:${this.channelId}`;
  }
  get fid() {
    return `${this.platform}:${this.channelId}:${this.userId}`;
  }
  get sid() {
    return `${this.platform}:${this.selfId}`;
  }
  get elements() {
    return this.event.message?.elements;
  }
  set elements(value) {
    this.event.message ??= {};
    this.event.message.elements = value;
  }
  get content() {
    return this.event.message?.elements?.join("");
  }
  set content(value) {
    this.event.message ??= {};
    this.event.message.elements = isNullable3(value) ? value : lib_default.parse(value);
  }
  setInternal(type, data) {
    this.event._type = type;
    this.event._data = data;
    const internal = Object.create(this.bot.internal);
    defineProperty3(this, type, Object.assign(internal, data));
  }
  async transform(elements) {
    return await lib_default.transformAsync(elements, ({ type, attrs, children }, session) => {
      const render3 = type === "component" ? attrs.is : this.app.get("component:" + type);
      return render3?.(attrs, children, session) ?? true;
    }, this);
  }
  toJSON() {
    return { ...this.event, id: this.id };
  }
};
function defineAccessor(prototype, name, keys) {
  Object.defineProperty(prototype, name, {
    get() {
      return keys.reduce((data, key) => data?.[key], this);
    },
    set(value) {
      if (value === void 0)
        return;
      const _keys = keys.slice();
      const last = _keys.pop();
      const data = _keys.reduce((data2, key) => data2[key] ??= {}, this);
      data[last] = value;
    }
  });
}
__name5(defineAccessor, "defineAccessor");
defineAccessor(Session.prototype, "type", ["event", "type"]);
defineAccessor(Session.prototype, "subtype", ["event", "subtype"]);
defineAccessor(Session.prototype, "subsubtype", ["event", "subsubtype"]);
defineAccessor(Session.prototype, "selfId", ["event", "selfId"]);
defineAccessor(Session.prototype, "platform", ["event", "platform"]);
defineAccessor(Session.prototype, "timestamp", ["event", "timestamp"]);
defineAccessor(Session.prototype, "userId", ["event", "user", "id"]);
defineAccessor(Session.prototype, "channelId", ["event", "channel", "id"]);
defineAccessor(Session.prototype, "channelName", ["event", "channel", "name"]);
defineAccessor(Session.prototype, "guildId", ["event", "guild", "id"]);
defineAccessor(Session.prototype, "guildName", ["event", "guild", "name"]);
defineAccessor(Session.prototype, "messageId", ["event", "message", "id"]);
defineAccessor(Session.prototype, "operatorId", ["event", "operator", "id"]);
defineAccessor(Session.prototype, "roleId", ["event", "role", "id"]);
defineAccessor(Session.prototype, "quote", ["event", "message", "quote"]);
var eventAliases = [
  ["message-created", "message"],
  ["guild-removed", "guild-deleted"],
  ["guild-member-removed", "guild-member-deleted"]
];
var Bot = class {
  constructor(ctx, config, platform) {
    this.ctx = ctx;
    this.config = config;
    this.internal = null;
    this.context = ctx;
    this[Context2.current] = ctx;
    const self2 = Context2.associate(this, "bot");
    ctx.bots.push(self2);
    self2.context.emit("bot-added", self2);
    if (platform) {
      self2.logger = ctx.logger(platform);
      self2.platform = platform;
    }
    this.proxyUrls = [`upload://temp/${ctx.satori.uid}/`];
    this.features = Object.entries(Methods).filter(([, value]) => this[value.name]).map(([key]) => key);
    ctx.on("ready", async () => {
      await Promise.resolve();
      self2.dispatchLoginEvent("login-added");
      return self2.start();
    });
    ctx.on("dispose", () => self2.dispose());
    ctx.on("interaction/button", (session) => {
      const cb = this.callbacks[session.event.button.id];
      if (cb)
        cb(session);
    });
    return self2;
  }
  static {
    __name5(this, "Bot");
  }
  static reusable = true;
  static MessageEncoder;
  self = this;
  user = {};
  isBot = true;
  hidden = false;
  platform;
  features;
  proxyUrls;
  adapter;
  error;
  callbacks = {};
  logger;
  [Context2.current];
  // Same as `this.ctx`, but with a more specific type.
  context;
  _status = Status.OFFLINE;
  registerUpload(path3, callback) {
    this.ctx.satori.upload(path3, callback, this.proxyUrls);
  }
  update(login) {
    const { status, ...rest } = login;
    Object.assign(this, rest);
    this.status = status;
  }
  dispose() {
    remove(this.ctx.bots, this);
    this.context.emit("bot-removed", this);
    this.dispatchLoginEvent("login-removed");
    return this.stop();
  }
  dispatchLoginEvent(type) {
    const session = this.session();
    session.type = type;
    session.event.login = this.toJSON();
    this.dispatch(session);
  }
  get status() {
    return this._status;
  }
  set status(value) {
    if (value === this._status)
      return;
    this._status = value;
    if (this.ctx.bots?.includes(this)) {
      this.context.emit("bot-status-updated", this);
      this.dispatchLoginEvent("login-updated");
    }
  }
  get isActive() {
    return this._status !== Status.OFFLINE && this._status !== Status.DISCONNECT;
  }
  online() {
    this.status = Status.ONLINE;
    this.error = null;
  }
  offline(error) {
    this.status = Status.OFFLINE;
    this.error = error;
  }
  async start() {
    if (this.isActive)
      return;
    this.status = Status.CONNECT;
    try {
      await this.context.parallel("bot-connect", this);
      await this.adapter?.connect(this);
    } catch (error) {
      this.offline(error);
    }
  }
  async stop() {
    if (!this.isActive)
      return;
    this.status = Status.DISCONNECT;
    try {
      await this.context.parallel("bot-disconnect", this);
      await this.adapter?.disconnect(this);
    } catch (error) {
      this.context.emit("internal/error", error);
    } finally {
      this.offline();
    }
  }
  get sid() {
    return `${this.platform}:${this.selfId}`;
  }
  session(event = {}) {
    return new Session(this, event);
  }
  dispatch(session) {
    if (!this.ctx.lifecycle.isActive)
      return;
    let events = [session.type];
    for (const aliases of eventAliases) {
      if (aliases.includes(session.type)) {
        events = aliases;
        session.type = aliases[0];
        break;
      }
    }
    this.context.emit("internal/session", session);
    if (session.type === "internal") {
      this.context.emit(session.event._type, session.event._data, session.bot);
      return;
    }
    for (const event of events) {
      this.context.emit(session, event, session);
    }
  }
  async createMessage(channelId, content, guildId, options) {
    const { MessageEncoder: MessageEncoder2 } = this.constructor;
    return new MessageEncoder2(this, channelId, guildId, options).send(content);
  }
  async sendMessage(channelId, content, guildId, options) {
    const messages = await this.createMessage(channelId, content, guildId, options);
    return messages.map((message) => message.id);
  }
  async sendPrivateMessage(userId, content, guildId, options) {
    const { id } = await this.createDirectChannel(userId, guildId ?? options?.session?.guildId);
    return this.sendMessage(id, content, null, options);
  }
  async createUpload(...uploads) {
    const ids = [];
    for (const upload of uploads) {
      const id = Math.random().toString(36).slice(2);
      const headers = new Headers();
      headers.set("content-type", upload.type);
      if (upload.filename) {
        headers.set("content-disposition", `attachment; filename="${upload.filename}"`);
      }
      this.ctx.satori._tempStore[id] = {
        status: 200,
        data: upload.data,
        headers
      };
      ids.push(id);
    }
    const timer = setTimeout(() => dispose(), 6e5);
    const dispose = /* @__PURE__ */ __name5(() => {
      _dispose();
      clearTimeout(timer);
      for (const id of ids) {
        delete this.ctx.satori._tempStore[id];
      }
    }, "dispose");
    const _dispose = this[Context2.current].on("dispose", dispose);
    return ids.map((id) => `upload://temp/${this.ctx.satori.uid}/${id}`);
  }
  async supports(name, session = {}) {
    return !!this[Methods[name]?.name];
  }
  async checkPermission(name, session) {
    if (name.startsWith("bot.")) {
      return this.supports(name.slice(4), session);
    }
  }
  toJSON() {
    return clone(pick(this, ["platform", "selfId", "status", "user", "hidden", "features", "proxyUrls"]));
  }
  async getLogin() {
    return this.toJSON();
  }
  /** @deprecated use `bot.getLogin()` instead */
  async getSelf() {
    const { user } = await this.getLogin();
    return user;
  }
};
var iterableMethods = [
  "getMessage",
  "getReaction",
  "getFriend",
  "getGuild",
  "getGuildMember",
  "getGuildRole",
  "getChannel"
];
for (const name of iterableMethods) {
  Bot.prototype[name + "Iter"] = function(...args) {
    let list;
    if (!this[name + "List"])
      throw new Error(`not implemented: ${name}List`);
    const getList = /* @__PURE__ */ __name5(async () => {
      list = await this[name + "List"](...args, list?.next);
      if (name === "getMessage")
        list.data.reverse();
    }, "getList");
    return {
      async next() {
        if (list?.data.length)
          return { done: false, value: list.data.shift() };
        if (list && !list?.next)
          return { done: true, value: void 0 };
        await getList();
        return this.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  };
}
defineAccessor(Bot.prototype, "selfId", ["user", "id"]);
defineAccessor(Bot.prototype, "userId", ["user", "id"]);
var Adapter = class {
  constructor(ctx) {
    this.ctx = ctx;
  }
  static {
    __name5(this, "Adapter");
  }
  static schema = false;
  bots = [];
  async connect(bot) {
  }
  async disconnect(bot) {
  }
  fork(ctx, bot) {
    bot.adapter = this;
    this.bots.push(bot);
    ctx.on("dispose", () => {
      remove2(this.bots, bot);
    });
  }
};
((Adapter2) => {
  Adapter2.WsClientConfig = z.object({
    retryTimes: z.natural().description("\u521D\u6B21\u8FDE\u63A5\u65F6\u7684\u6700\u5927\u91CD\u8BD5\u6B21\u6570\u3002").default(6),
    retryInterval: z.natural().role("ms").description("\u521D\u6B21\u8FDE\u63A5\u65F6\u7684\u91CD\u8BD5\u65F6\u95F4\u95F4\u9694\u3002").default(5 * Time.second),
    retryLazy: z.natural().role("ms").description("\u8FDE\u63A5\u5173\u95ED\u540E\u7684\u91CD\u8BD5\u65F6\u95F4\u95F4\u9694\u3002").default(Time.minute)
  }).description("\u8FDE\u63A5\u8BBE\u7F6E");
  class WsClientBase extends Adapter2 {
    constructor(ctx, config) {
      super(ctx);
      this.config = config;
    }
    static {
      __name5(this, "WsClientBase");
    }
    socket;
    async start() {
      let _retryCount = 0;
      const logger = this.ctx.logger("adapter");
      const { retryTimes, retryInterval, retryLazy } = this.config;
      const reconnect = /* @__PURE__ */ __name5(async (initial = false) => {
        logger.debug("websocket client opening");
        let socket;
        try {
          socket = await this.prepare();
        } catch (error) {
          logger.warn(error);
          return;
        }
        const url = socket.url.replace(/\?.+/, "");
        socket.addEventListener("error", (event) => {
          if (event.message)
            logger.warn(event.message);
        });
        socket.addEventListener("close", ({ code, reason }) => {
          this.socket = null;
          logger.debug(`websocket closed with ${code}`);
          if (!this.getActive())
            return;
          const message = reason.toString() || `failed to connect to ${url}, code: ${code}`;
          let timeout = retryInterval;
          if (_retryCount >= retryTimes) {
            if (initial) {
              return this.setStatus(Status.OFFLINE, new Error(message));
            } else {
              timeout = retryLazy;
            }
          }
          _retryCount++;
          this.setStatus(Status.RECONNECT);
          logger.warn(`${message}, will retry in ${Time.format(timeout)}...`);
          setTimeout(() => {
            if (this.getActive())
              reconnect();
          }, timeout);
        });
        socket.addEventListener("open", () => {
          _retryCount = 0;
          this.socket = socket;
          logger.info("connect to server: %c", url);
          this.accept(socket);
        });
      }, "reconnect");
      reconnect(true);
    }
    async stop() {
      this.socket?.close();
    }
  }
  Adapter2.WsClientBase = WsClientBase;
  class WsClient3 extends WsClientBase {
    constructor(ctx, bot) {
      super(ctx, bot.config);
      this.bot = bot;
      bot.adapter = this;
    }
    static {
      __name5(this, "WsClient");
    }
    static reusable = true;
    getActive() {
      return this.bot.isActive;
    }
    setStatus(status, error = null) {
      this.bot.status = status;
      this.bot.error = error;
    }
    async connect(bot) {
      this.start();
    }
    async disconnect(bot) {
      this.stop();
    }
  }
  Adapter2.WsClient = WsClient3;
})(Adapter || (Adapter = {}));
var AggregateError = class extends Error {
  constructor(errors, message = "") {
    super(message);
    this.errors = errors;
  }
  static {
    __name5(this, "AggregateError");
  }
};
var MessageEncoder = class {
  constructor(bot, channelId, guildId, options = {}) {
    this.bot = bot;
    this.channelId = channelId;
    this.guildId = guildId;
    this.options = options;
  }
  static {
    __name5(this, "MessageEncoder");
  }
  errors = [];
  results = [];
  session;
  async prepare() {
  }
  async render(elements, flush) {
    for (const element of elements) {
      await this.visit(element);
    }
    if (flush) {
      await this.flush();
    }
  }
  async send(content) {
    this.session = this.bot.session({
      type: "send",
      channel: { id: this.channelId, ...this.options.session?.event.channel },
      guild: this.options.session?.event.guild
    });
    for (const key in this.options.session || {}) {
      if (key === "id" || key === "event")
        continue;
      this.session[key] = this.options.session[key];
    }
    await this.prepare();
    const session = this.options.session ?? this.session;
    this.session.elements = await session.transform(lib_default.normalize(content));
    const btns = lib_default.select(this.session.elements, "button").filter((v) => v.attrs.type !== "link" && !v.attrs.id);
    for (const btn of btns) {
      const r = Math.random().toString(36).slice(2);
      btn.attrs.id ||= r;
      if (typeof btn.attrs.action === "function")
        this.bot.callbacks[btn.attrs.id] = btn.attrs.action;
    }
    if (await this.session.app.serial(this.session, "before-send", this.session, this.options))
      return;
    await this.render(this.session.elements);
    await this.flush();
    if (this.errors.length) {
      throw new AggregateError(this.errors);
    } else {
      return this.results;
    }
  }
};
lib_default.warn = new Logger2("element").warn;
defineProperty22(HTTP, "Config", z2.object({
  timeout: z2.natural().role("ms").description("\u7B49\u5F85\u8FDE\u63A5\u5EFA\u7ACB\u7684\u6700\u957F\u65F6\u95F4\u3002"),
  proxyAgent: z2.string().description("\u4F7F\u7528\u7684\u4EE3\u7406\u670D\u52A1\u5668\u5730\u5740\u3002"),
  keepAlive: z2.boolean().description("\u662F\u5426\u4FDD\u6301\u8FDE\u63A5\u3002")
}).description("\u8BF7\u6C42\u8BBE\u7F6E"));
HTTP.createConfig = /* @__PURE__ */ __name5(function createConfig(endpoint) {
  return z2.object({
    endpoint: z2.string().role("link").description("\u8981\u8FDE\u63A5\u7684\u670D\u52A1\u5668\u5730\u5740\u3002").default(typeof endpoint === "string" ? endpoint : null).required(typeof endpoint === "boolean" ? endpoint : false),
    headers: z2.dict(String).role("table").description("\u8981\u9644\u52A0\u7684\u989D\u5916\u8BF7\u6C42\u5934\u3002"),
    ...this.Config.dict
  }).description("\u8BF7\u6C42\u8BBE\u7F6E");
}, "createConfig");
var SatoriContext = class extends Context4 {
  static {
    __name5(this, "SatoriContext");
  }
  constructor(config) {
    super(config);
    this.provide("satori", void 0, true);
    this.plugin(Satori);
  }
};
var Satori = class extends Service2 {
  static {
    __name5(this, "Satori");
  }
  static [Service2.provide] = "satori";
  static [Service2.immediate] = true;
  uid = Math.random().toString(36).slice(2);
  _uploadRoutes = [];
  _tempStore = /* @__PURE__ */ Object.create(null);
  constructor(ctx) {
    super(ctx);
    ctx.mixin("satori", ["bots", "component"]);
    this.upload(`/temp/${this.uid}/`, async (path3) => {
      const id = path3.split("/").pop();
      return this._tempStore[id] ?? { status: 404 };
    });
    const self2 = this;
    ctx.on("http/file", async function(url, options) {
      if (!url.startsWith("upload://"))
        return;
      const { status, data, headers } = await self2.download(url.slice(9));
      if (status >= 400)
        throw new Error(`Failed to fetch ${url}, status code: ${status}`);
      if (status >= 300) {
        const location = headers?.get("location");
        return this.file(location, options);
      }
      const type = headers?.get("content-type");
      const filename = headers?.get("content-disposition")?.split("filename=")[1];
      return { data, filename, type, mime: type };
    });
  }
  bots = new Proxy([], {
    get(target, prop) {
      if (prop in target || typeof prop === "symbol") {
        return Reflect.get(target, prop);
      }
      return target.find((bot) => bot.sid === prop);
    },
    deleteProperty(target, prop) {
      if (prop in target || typeof prop === "symbol") {
        return Reflect.deleteProperty(target, prop);
      }
      const bot = target.findIndex((bot2) => bot2.sid === prop);
      if (bot < 0)
        return true;
      target.splice(bot, 1);
      return true;
    }
  });
  component(name, component, options = {}) {
    const render3 = /* @__PURE__ */ __name5(async (attrs, children, session) => {
      if (options.session && session.type === "send") {
        throw new Error("interactive components is not available outside sessions");
      }
      const result = await component(attrs, children, session);
      return session.transform(lib_default.normalize(result));
    }, "render");
    return this.ctx.set("component:" + name, render3);
  }
  upload(path3, callback, proxyUrls = []) {
    return this[Context4.current].effect(() => {
      const route = { path: path3, callback };
      this._uploadRoutes.push(route);
      proxyUrls.push(path3);
      return () => {
        remove3(this._uploadRoutes, route);
        remove3(proxyUrls, path3);
      };
    });
  }
  async download(path3) {
    for (const route of this._uploadRoutes) {
      const paths = makeArray2(typeof route.path === "function" ? route.path() : route.path);
      if (paths.some((prefix) => path3.startsWith(prefix))) {
        return route.callback(path3);
      }
    }
    return { status: 404 };
  }
};
var src_default = Satori;

// ../../adapters/qq/src/utils.ts
var decodeGuild = (guild) => ({
  id: guild.id,
  name: guild.name,
  avatar: guild.icon
});
var decodeChannel = (channel) => ({
  id: channel.id,
  name: channel.name,
  type: channel.type === 0 /* TEXT */ ? lib_exports.Channel.Type.TEXT : channel.type === 2 /* VOICE */ ? lib_exports.Channel.Type.VOICE : channel.type === 4 /* GROUP */ ? lib_exports.Channel.Type.CATEGORY : channel.type === 10005 /* LIVE */ ? 10005 : -1,
  // not supported
  parentId: channel.parent_id,
  position: channel.position
});
var decodeUser = (user) => ({
  id: user.id,
  name: user.username,
  isBot: user.bot,
  avatar: user.avatar
});
var decodeGuildMember = (member) => ({
  user: member.user ? decodeUser(member.user) : void 0,
  nick: member.nick,
  roles: member.roles,
  joinedAt: new Date(member.joined_at).getTime()
});
function decodeGroupMessage(bot, data, message = {}, payload = message) {
  message.id = data.id;
  const date = data.timestamp.slice(0, data.timestamp.indexOf("m=")).trim().replace(/\+(\d{4}) CST/, "GMT+$1");
  message.timestamp = new Date(date).valueOf();
  message.elements = [];
  if (data.content.length) message.elements.push(lib_default.text(data.content));
  for (const attachment of data.attachments ?? []) {
    if (attachment.content_type === "file") {
      message.elements.push(lib_default.file(attachment.url, {
        filename: attachment.filename
      }));
    } else if (attachment.content_type.startsWith("image/")) {
      message.elements.push(lib_default.image(attachment.url));
    } else if (attachment.content_type === "voice") {
      message.elements.push(lib_default.audio(attachment.url));
    } else if (attachment.content_type === "video") {
      message.elements.push(lib_default.video(attachment.url));
    }
  }
  message.content = message.elements.join("");
  message.guild = { id: data.group_id };
  message.user = { id: data.author.id };
  return message;
}
async function decodeMessage(bot, data, message = {}, payload = message) {
  message.id = message.messageId = data.id;
  message.content = (data.content ?? "").replace(/<@!(\d+)>/g, (_2, $1) => lib_default.at($1).toString());
  const { attachments = [] } = data;
  if (attachments.length && !/\s$/.test(message.content)) message.content += " ";
  message.content = attachments.filter(({ content_type }) => content_type.startsWith("image")).reduce((content, attachment) => content + lib_default.image("https://" + attachment.url), message.content);
  message.elements = lib_default.parse(message.content);
  message.elements = lib_default.transform(message.elements, {
    text: (attrs) => lib_default.unescape(attrs.content)
  });
  if (data.message_reference) {
    message.quote = bot.getMessage ? await bot.getMessage(data.channel_id, data.message_reference.message_id) : { id: data.message_reference.message_id };
  }
  if (!payload) return message;
  payload.timestamp = new Date(data.timestamp).valueOf();
  payload.user = data.author ? decodeUser(data.author) : void 0;
  payload.member = data.member ? decodeGuildMember(data.member) : void 0;
  if (data.direct_message) {
    payload.guild = { id: `${data.src_guild_id}_${data.guild_id}` };
    payload.channel = { id: `${data.guild_id}_${data.channel_id}`, type: lib_exports.Channel.Type.DIRECT };
  } else {
    payload.guild = { id: data.guild_id };
    payload.channel = { id: data.channel_id, type: lib_exports.Channel.Type.TEXT };
  }
  return message;
}
function setupReaction(session, data) {
  session.userId = data.user_id;
  session.guildId = data.guild_id;
  session.channelId = data.channel_id;
  session.content = `${data.emoji.type}:${data.emoji.id}`;
  session.messageId = data.target.id;
  session.isDirect = false;
  return session;
}
async function adaptSession(bot, input) {
  let session = bot.session();
  if (![
    "GROUP_AT_MESSAGE_CREATE",
    "C2C_MESSAGE_CREATE",
    "FRIEND_ADD",
    "FRIEND_DEL",
    "GROUP_ADD_ROBOT",
    "GROUP_DEL_ROBOT",
    "INTERACTION_CREATE"
  ].includes(input.t)) {
    session = bot.guildBot.session();
    session.setInternal(bot.guildBot.platform, input);
  } else {
    session.setInternal(bot.platform, input);
  }
  if (input.t === "MESSAGE_CREATE" || input.t === "AT_MESSAGE_CREATE" || input.t === "DIRECT_MESSAGE_CREATE") {
    if (bot.config.type === "private" && input.t === "AT_MESSAGE_CREATE" && bot.config.intents & 512 /* GUILD_MESSAGES */) return;
    session.type = "message";
    await decodeMessage(bot, input.d, session.event.message = {}, session.event);
  } else if (input.t === "MESSAGE_REACTION_ADD") {
    if (input.d.target.type !== "ReactionTargetType_MSG") return;
    setupReaction(session, input.d);
    session.type = "reaction-added";
  } else if (input.t === "MESSAGE_REACTION_REMOVE") {
    if (input.d.target.type !== "ReactionTargetType_MSG") return;
    setupReaction(session, input.d);
    session.type = "reaction-removed";
  } else if (input.t === "CHANNEL_CREATE" || input.t === "CHANNEL_UPDATE" || input.t === "CHANNEL_DELETE") {
    session.type = {
      CHANNEL_CREATE: "channel-added",
      CHANNEL_UPDATE: "channel-updated",
      CHANNEL_DELETE: "channel-deleted"
    }[input.t];
    session.guildId = input.d.guild_id;
    session.event.channel = decodeChannel(input.d);
  } else if (input.t === "GUILD_CREATE" || input.t === "GUILD_UPDATE" || input.t === "GUILD_DELETE") {
    session.type = {
      GUILD_CREATE: "guild-added",
      GUILD_UPDATE: "guild-updated",
      GUILD_DELETE: "guild-deleted"
    }[input.t];
    session.event.guild = decodeGuild(input.d);
  } else if (input.t === "DIRECT_MESSAGE_DELETE" || input.t === "MESSAGE_DELETE" || input.t === "PUBLIC_MESSAGE_DELETE") {
    if (bot.config.type === "private" && input.t === "PUBLIC_MESSAGE_DELETE" && bot.config.intents & 512 /* GUILD_MESSAGES */) return;
    session.type = "message-deleted";
    session.userId = input.d.message.author.id;
    session.operatorId = input.d.op_user.id;
    session.messageId = input.d.message.id;
    session.isDirect = input.d.message.direct_message;
    if (session.isDirect) {
      session.guildId = `${input.d.message.src_guild_id}_${input.d.message.guild_id}`;
      session.channelId = `${input.d.message.guild_id}_${input.d.message.channel_id}`;
    } else {
      session.guildId = input.d.message.guild_id;
      session.channelId = input.d.message.channel_id;
    }
  } else if (input.t === "GROUP_AT_MESSAGE_CREATE") {
    session.type = "message";
    session.isDirect = false;
    decodeGroupMessage(bot, input.d, session.event.message = {}, session.event);
    session.guildId = session.event.message.guild.id;
    session.channelId = session.guildId;
    session.userId = session.event.message.user.id;
    session.elements.unshift(lib_default.at(session.selfId));
  } else if (input.t === "C2C_MESSAGE_CREATE") {
    session.type = "message";
    session.isDirect = true;
    decodeGroupMessage(bot, input.d, session.event.message = {}, session.event);
    session.userId = input.d.author.id;
    session.channelId = session.userId;
  } else if (input.t === "FRIEND_ADD") {
    session.type = "friend-added";
    session.timestamp = input.d.timestamp;
    session.userId = input.d.openid;
  } else if (input.t === "FRIEND_DEL") {
    session.type = "friend-added";
    session.timestamp = input.d.timestamp;
    session.userId = input.d.openid;
  } else if (input.t === "GROUP_ADD_ROBOT") {
    session.type = "guild-added";
    session.timestamp = input.d.timestamp;
    session.guildId = input.d.group_openid;
    session.operatorId = input.d.op_member_openid;
  } else if (input.t === "GROUP_DEL_ROBOT") {
    session.type = "guild-removed";
    session.timestamp = input.d.timestamp;
    session.guildId = input.d.group_openid;
    session.operatorId = input.d.op_member_openid;
  } else if (input.t === "INTERACTION_CREATE") {
    session.type = "interaction/button";
    session.userId = input.d.group_member_openid ?? input.d.user_openid ?? input.d.data.resolved.user_id;
    if (input.d.chat_type === 1 /* GROUP */) {
      session.guildId = input.d.group_openid;
      session.channelId = input.d.group_openid;
      session.isDirect = false;
    } else if (input.d.chat_type === 3 /* CHANNEL */) {
      session.channelId = input.d.channel_id;
      session.isDirect = false;
    } else if (input.d.chat_type === 2 /* DIRECT */) {
      session.isDirect = true;
      session.channelId = session.userId;
    }
    session.event.button = {
      id: input.d.data.resolved.button_id
    };
    bot.internal.acknowledgeInteraction(input.d.id, { code: 0 }).catch(() => {
    });
  } else if (input.t === "GUILD_MEMBER_ADD" || input.t === "GUILD_MEMBER_DELETE" || input.t === "GUILD_MEMBER_UPDATE") {
    session.type = {
      GUILD_MEMBER_ADD: "guild-member-added",
      GUILD_MEMBER_UPDATE: "guild-member-updated",
      GUILD_MEMBER_DELETE: "guild-member-removed"
    }[input.t];
    session.guildId = input.d.guild_id;
    session.operatorId = input.d.op_user_id;
    session.timestamp = Date.now();
    session.event.user = decodeUser(input.d.user);
  } else {
    return;
  }
  return session;
}

// ../../adapters/qq/src/ws.ts
var WsClient = class extends Adapter.WsClient {
  _sessionId = "";
  _s = null;
  _ping;
  async prepare() {
    await this.bot.getAccessToken();
    let { url } = await this.bot.internal.getGateway();
    url = url.replace("api.sgroup.qq.com", new URL(this.bot.config.endpoint).host);
    this.bot.logger.debug("url: %s", url);
    return this.bot.http.ws(url);
  }
  heartbeat() {
    this.socket.send(JSON.stringify({
      op: 1 /* HEARTBEAT */,
      s: this._s
    }));
  }
  async accept() {
    this.socket.addEventListener("message", async ({ data }) => {
      const parsed = JSON.parse(data.toString());
      this.bot.logger.debug("websocket receives %o", parsed);
      if (parsed.op === 10 /* HELLO */) {
        const token = await this.bot.getAccessToken();
        if (this._sessionId) {
          this.socket.send(JSON.stringify({
            op: 6 /* RESUME */,
            d: {
              token: `QQBot ${token}`,
              // token: `Bot ${this.bot.config.id}.${this.bot.config.token}`,
              session_id: this._sessionId,
              seq: this._s
            }
          }));
        } else {
          this.socket.send(JSON.stringify({
            op: 2 /* IDENTIFY */,
            d: {
              // token: `Bot ${this.bot.config.id}.${this.bot.config.token}`,
              token: `QQBot ${token}`,
              intents: this.bot.config.intents,
              shard: [0, 1]
            }
          }));
        }
        this._ping = setInterval(() => this.heartbeat(), parsed.d.heartbeat_interval);
      } else if (parsed.op === 9 /* INVALID_SESSION */) {
        this._sessionId = "";
        this._s = null;
        this.bot.logger.warn("offline: invalid session");
        this.socket?.close();
      } else if (parsed.op === 7 /* RECONNECT */) {
        this.bot.logger.warn("offline: server request reconnect");
        this.socket?.close();
      } else if (parsed.op === 0 /* DISPATCH */) {
        this.bot.dispatch(this.bot.session({
          type: "internal",
          _type: "qq/" + parsed.t.toLowerCase().replace(/_/g, "-"),
          _data: parsed.d
        }));
        this._s = parsed.s;
        if (parsed.t === "READY") {
          this._sessionId = parsed.d.session_id;
          this.bot.user = decodeUser(parsed.d.user);
          this.bot.guildBot.user = this.bot.user;
          await this.bot.initialize();
          return this.bot.online();
        }
        if (parsed.t === "RESUMED") {
          return this.bot.online();
        }
        const session = await adaptSession(this.bot, parsed);
        if (session) this.bot.dispatch(session);
      }
    });
    this.socket.addEventListener("close", (e) => {
      this.bot.logger.debug("websocket closed, code %o, reason: %s", e.code, e.reason);
      clearInterval(this._ping);
    });
  }
};
((WsClient3) => {
  WsClient3.Options = lib_exports2.Schema.intersect([
    Adapter.WsClientConfig
  ]);
})(WsClient || (WsClient = {}));

// ../../adapters/qq/src/internal/internal.ts
var Internal = class {
  constructor(bot, http) {
    this.bot = bot;
    this.http = http;
  }
  static define(isGuild, routes) {
    for (const path3 in routes) {
      for (const key in routes[path3]) {
        const method = key;
        for (const name of (0, lib_exports2.makeArray)(routes[path3][method])) {
          (isGuild ? GuildInternal : GroupInternal).prototype[name] = async function(...args) {
            const raw = args.join(", ");
            const url = path3.replace(/\{([^}]+)\}/g, () => {
              if (!args.length) throw new Error(`too few arguments for ${path3}, received ${raw}`);
              return args.shift();
            });
            const config = {};
            if (args.length === 1) {
              if (method === "GET" || method === "DELETE") {
                config.params = args[0];
              } else {
                config.data = args[0];
              }
            } else if (args.length === 2 && method !== "GET" && method !== "DELETE") {
              config.data = args[0];
              config.params = args[1];
            } else if (args.length > 1) {
              throw new Error(`too many arguments for ${path3}, received ${raw}`);
            }
            const http = this.http();
            try {
              this.bot.logger.debug(`${method} ${url} request: %o`, config);
              const response = await http(url, { ...config, method });
              this.bot.logger.debug(`${method} ${url} response: %o, trace id: %s`, response.data, response.headers.get("x-tps-trace-id"));
              return response.data;
            } catch (error) {
              this.bot.logger.warn(`${method} ${url} request: %o`, config);
              if (!http.isError(error) || !error.response) throw error;
              this.bot.logger.warn(`${method} ${url} response: %o, trace id: %s`, error.response.data, error.response.headers.get("x-tps-trace-id"));
              throw error;
            }
          };
        }
      }
    }
  }
};
var GroupInternal = class extends Internal {
};
var GuildInternal = class extends Internal {
};

// ../../adapters/qq/src/internal/group.ts
GroupInternal.define(false, {
  "/v2/groups/{channel.id}/messages": {
    POST: "sendMessage"
  },
  "/v2/groups/{channel.id}/messages/{message.id}": {
    DELETE: "deleteMessage"
  },
  "/v2/users/{user.id}/messages": {
    POST: "sendPrivateMessage"
  },
  "/v2/users/{user.id}/messages/{message.id}": {
    DELETE: "deletePrivateMessage"
  },
  "/v2/users/{user.id}/files": {
    POST: "sendFilePrivate"
  },
  "/v2/groups/{channel.id}/files": {
    POST: "sendFileGuild"
  },
  "/interactions/{interaction.id}": {
    PUT: "acknowledgeInteraction"
  },
  "/gateway": {
    GET: "getGateway"
  },
  "/gateway/bot": {
    GET: "getGatewayBot"
  }
});

// ../../adapters/qq/src/internal/guild.ts
GuildInternal.define(true, {
  "/users/@me": {
    GET: "getMe"
  },
  "/users/@me/guilds": {
    GET: "getGuilds"
  },
  "/guilds/{guild.id}": {
    GET: "getGuild"
  },
  "/guilds/{guild.id}/channels": {
    GET: "getChannels",
    POST: "createGuildChannel"
  },
  "/channels/{channel.id}": {
    GET: "getChannel",
    PATCH: "modifyChannel",
    DELETE: "deleteChannel"
  },
  "/channels/{channel.id}/online_nums": {
    GET: "getChannelOnlineNums"
  },
  "/guilds/{guild.id}/members": {
    GET: "getGuildMembers"
  },
  "/guilds/{guild.id}/roles/{role.id}/members": {
    GET: "getGuildRoleMembers"
  },
  "/guilds/{guild.id}/members/{user.id}": {
    GET: "getGuildMember",
    DELETE: "removeGuildMember"
  },
  "/guilds/{guild.id}/roles": {
    GET: "getGuildRoles",
    POST: "createGuildRole"
  },
  "/guilds/{guild.id}/roles/{role.id}": {
    PATCH: "modifyGuildRole",
    DELETE: "removeGuildRole"
  },
  "/guilds/{guild.id}/members/{user.id}/roles/{role.id}": {
    PUT: "addGuildMemberRole",
    DELETE: "removeGuildMemberRole"
  },
  "/channels/{channel.id}/members/{user.id}/permissions": {
    GET: "getChannelMemberPermissions",
    PUT: "modifyChannelMemberPermissions"
  },
  "/channels/{channel.id}/roles/{role.id}/permissions": {
    GET: "getChannelRole",
    PUT: "modifyChannelRole"
  },
  "/channels/{channel.id}/messages/{message.id}": {
    GET: "getMessage",
    DELETE: "deleteMessage"
  },
  "/channels/{channel.id}/messages": {
    POST: "sendMessage"
  },
  "/dms/{guild.id}/messages": {
    POST: "sendDM"
  },
  "/guilds/{guild.id}/messages/setting": {
    GET: "getMessageSetting"
  },
  "/users/@me/dms": {
    POST: "createDMS"
  },
  "/dms/{guild.id}/messages/{message.id}": {
    DELETE: "deleteDM"
  },
  "/guilds/{guild.id}/mute": {
    PATCH: "muteGuildOrMembers"
  },
  "/guilds/{guild.id}/members/{user.id}/mute": {
    PATCH: "muteGuildMember"
  },
  "/guilds/{guild.id}/announces": {
    POST: "createGuildAnnounce"
  },
  "/guilds/{guild.id}/announces/{message.id}": {
    DELETE: "removeGuildAnnounce"
  },
  "/channels/{channel.id}/pins/{message.id}": {
    PUT: "createPinsMessage",
    DELETE: "removePinsMessage"
  },
  "/channels/{channel.id}/pins": {
    GET: "getPinsMessage"
  },
  "/channels/{channel.id}/schedules": {
    GET: "getSchedules",
    POST: "createSchedule"
  },
  "/channels/{channel.id}/schedules/{schedule.id}": {
    GET: "getSchedule",
    PATCH: "modifySchedule",
    DELETE: "removeSchedule"
  },
  "/channels/{channel.id}/messages/{message.id}/reactions/{type}/{id}": {
    PUT: "createReaction",
    DELETE: "deleteReaction",
    GET: "getReactions"
  },
  "/channels/{channel.id}/threads": {
    GET: "listThreads",
    PUT: "createPost"
  },
  "/channels/{channel.id}/threads/{thread.id}": {
    DELETE: "removePost"
  },
  "/guilds/{guild.id}/api_permissions": {
    GET: "getGuildApiPermissions"
  },
  "/guilds/{guild.id}/api_permissions/demand": {
    POST: "createGuildApiPermissionDemand"
  }
});

// ../../adapters/qq/src/message.ts
var escapeMarkdown = (val) => val.replace(/([\\`*_[\*_~`\]\-(#!>])/g, "\\$&");
var QQGuildMessageEncoder = class extends MessageEncoder {
  content = "";
  file;
  filename;
  fileUrl;
  passiveId;
  passiveEventId;
  reference;
  retry = false;
  // 先文后图
  async flush() {
    if (!this.content.trim().length && !this.file && !this.fileUrl) {
      return;
    }
    const isDirect = this.channelId.includes("_");
    let endpoint = `/channels/${this.channelId}/messages`;
    if (isDirect) endpoint = `/dms/${this.channelId.split("_")[0]}/messages`;
    const useFormData = Boolean(this.file);
    let msg_id = this.options?.session?.messageId;
    if (this.options?.session && Date.now() - this.options?.session?.timestamp > MSG_TIMEOUT) {
      msg_id = null;
    }
    if (this.passiveId) msg_id = this.passiveId;
    let r;
    this.bot.logger.debug("use form data %s", useFormData);
    try {
      if (useFormData) {
        const form = new FormData();
        form.append("content", this.content);
        if (this.options?.session && msg_id) {
          form.append("msg_id", msg_id);
        }
        if (this.passiveEventId) {
          form.append("event_id", this.passiveEventId);
        }
        if (this.file) {
          form.append("file_image", this.file, this.filename);
        }
        r = await this.bot.http.post(endpoint, form);
      } else {
        const payload = {
          ...{
            content: this.content,
            msg_id,
            image: this.fileUrl
          },
          ...this.reference ? {
            message_reference: {
              message_id: this.reference
            }
          } : {},
          ...this.passiveEventId ? {
            event_id: this.passiveEventId
          } : {}
        };
        if (isDirect) r = await this.bot.internal.sendDM(this.channelId.split("_")[0], payload);
        else r = await this.bot.internal.sendMessage(this.channelId, payload);
      }
    } catch (e) {
      if (this.bot.http.isError(e)) {
        if (this.bot.parent.config.retryWhen.includes(e.response.data.code) && !this.retry && this.fileUrl) {
          this.bot.logger.warn("retry image sending");
          this.retry = true;
          await this.resolveFile(null, true);
          await this.flush();
        }
        if (useFormData) {
          this.bot.logger.warn(`POST ${endpoint} response: %o, trace id: %s`, e.response.data, e.response.headers.get("x-tps-trace-id"));
        }
      }
    }
    const session = this.bot.session();
    session.type = "send";
    session.guildId = this.session.guildId;
    session.channelId = this.channelId;
    session.isDirect = isDirect;
    if (r?.id) {
      session.messageId = r.id;
      session.app.emit(session, "send", session);
      this.results.push(session.event.message);
    } else if (r?.code === 304023 && this.bot.config.parent.intents & 134217728 /* MESSAGE_AUDIT */) {
      try {
        const auditData = await this.audit(r.data.message_audit.audit_id);
        session.messageId = auditData.message_id;
        session.app.emit(session, "send", session);
        this.results.push(session.event.message);
      } catch (e) {
        this.bot.logger.error(e);
      }
    }
    this.content = "";
    this.file = null;
    this.filename = null;
    this.fileUrl = null;
    this.retry = false;
  }
  async audit(audit_id) {
    return new Promise((resolve, reject) => {
      const dispose = this.bot.ctx.on("qq/message-audit-pass", (data) => {
        if (data.audit_id === audit_id) {
          dispose();
          dispose2();
          resolve(data);
        }
      });
      const dispose2 = this.bot.ctx.on("qq/message-audit-reject", (data) => {
        if (data.audit_id === audit_id) {
          dispose();
          dispose2();
          reject(data);
        }
      });
    });
  }
  async resolveFile(attrs, download = false) {
    if (!download && !await this.bot.ctx.http.isLocal(attrs.src || attrs.url)) {
      return this.fileUrl = attrs.src || attrs.url;
    }
    const { data, filename, type } = await this.bot.ctx.http.file(this.fileUrl || attrs.src || attrs.url, attrs);
    this.file = new Blob([data], { type });
    this.filename = filename;
    this.fileUrl = null;
  }
  async visit(element) {
    const { type, attrs, children } = element;
    if (type === "text") {
      this.content += attrs.content;
    } else if (type === "at") {
      switch (attrs.type) {
        case "all":
          this.content += `@everyone`;
          break;
        default:
          this.content += `<@${attrs.id}>`;
      }
    } else if (type === "br") {
      this.content += "\n";
    } else if (type === "p") {
      if (!this.content.endsWith("\n")) this.content += "\n";
      await this.render(children);
      if (!this.content.endsWith("\n")) this.content += "\n";
    } else if (type === "sharp") {
      this.content += `<#${attrs.id}>`;
    } else if (type === "quote") {
      this.reference = attrs.id;
      await this.flush();
    } else if (type === "passive") {
      if (attrs.messageId) this.passiveId = attrs.messageId;
      if (attrs.eventId) this.passiveEventId = attrs.eventId;
    } else if ((type === "img" || type === "image") && (attrs.src || attrs.url)) {
      await this.flush();
      await this.resolveFile(attrs);
      await this.flush();
    } else if (type === "message") {
      await this.flush();
      await this.render(children);
      await this.flush();
    } else {
      await this.render(children);
    }
  }
};
var MSG_TIMEOUT = 5 * 60 * 1e3 - 2e3;
var QQMessageEncoder = class extends MessageEncoder {
  content = "";
  passiveId;
  passiveSeq;
  useMarkdown = false;
  rows = [];
  attachedFile;
  retry = false;
  // 先图后文
  async flush() {
    if (!this.content.trim() && !this.rows.flat().length && !this.attachedFile) return;
    this.trimButtons();
    let msg_id, msg_seq;
    if (this.options?.session?.messageId && Date.now() - this.options.session.timestamp < MSG_TIMEOUT) {
      this.options.session["seq"] ||= 0;
      msg_id = this.options.session.messageId;
      msg_seq = ++this.options.session["seq"];
    }
    if (this.passiveId) msg_id = this.passiveId;
    if (this.passiveSeq) msg_seq = this.passiveSeq;
    const data = {
      content: this.content,
      msg_type: Message.Type.TEXT,
      msg_id,
      msg_seq
    };
    if (this.attachedFile) {
      if (!data.content.length) data.content = " ";
      data.media = this.attachedFile;
      data.msg_type = Message.Type.MEDIA;
    }
    if (this.useMarkdown) {
      data.msg_type = Message.Type.MARKDOWN;
      delete data.content;
      data.markdown = {
        content: escapeMarkdown(this.content) || " "
      };
      if (this.rows.length) {
        data.keyboard = {
          content: {
            rows: this.exportButtons()
          }
        };
      }
    }
    const session = this.bot.session();
    session.type = "send";
    const send = async () => {
      try {
        if (this.session.isDirect) {
          const { sendResult: { msg_id: msg_id2 } } = await this.bot.internal.sendPrivateMessage(this.session.channelId, data);
          session.messageId = msg_id2;
        } else {
          const resp = await this.bot.internal.sendMessage(this.session.channelId, data);
          if (resp.id) {
            session.messageId = resp.id;
            session.timestamp = new Date(resp.timestamp).valueOf();
            session.channelId = this.session.channelId;
            session.guildId = this.session.guildId;
            session.app.emit(session, "send", session);
            this.results.push(session.event.message);
          } else if (resp.code === 304023 && this.bot.config.intents & 134217728 /* MESSAGE_AUDIT */) {
            try {
              const auditData = await this.audit(resp.data.message_audit.audit_id);
              session.messageId = auditData.message_id;
              session.app.emit(session, "send", session);
              this.results.push(session.event.message);
            } catch (e) {
              this.bot.logger.error(e);
            }
          }
        }
      } catch (e) {
        if (!this.bot.http.isError(e)) throw e;
        this.errors.push(e);
        if (!this.retry && this.bot.config.retryWhen.includes(e.response.data.code)) {
          this.bot.logger.warn("%s retry message sending", this.session.cid);
          this.retry = true;
          await send();
        }
      }
    };
    await send();
    this.content = "";
    this.attachedFile = null;
    this.rows = [];
    this.retry = false;
  }
  async audit(audit_id) {
    return new Promise((resolve, reject) => {
      const dispose = this.bot.ctx.on("qq/message-audit-pass", (data) => {
        if (data.audit_id === audit_id) {
          dispose();
          dispose2();
          resolve(data);
        }
      });
      const dispose2 = this.bot.ctx.on("qq/message-audit-reject", (data) => {
        if (data.audit_id === audit_id) {
          dispose();
          dispose2();
          reject(data);
        }
      });
    });
  }
  async sendFile(type, attrs) {
    const url = attrs.src || attrs.url;
    let file_type = 0;
    if (type === "img" || type === "image") file_type = 1;
    else if (type === "video") file_type = 2;
    else if (type === "audio") file_type = 3;
    else return;
    const data = {
      file_type,
      srv_send_msg: false
    };
    const capture = /^data:([\w/-]+);base64,(.*)$/.exec(url);
    if (capture?.[2]) {
      data.file_data = capture[2];
    } else if (await this.bot.ctx.http.isLocal(url)) {
      data.file_data = Buffer.from((await this.bot.ctx.http.file(url)).data).toString("base64");
    } else {
      data.url = url;
    }
    let res;
    try {
      if (this.session.isDirect) {
        res = await this.bot.internal.sendFilePrivate(this.options.session.event.message.user.id, data);
      } else {
        res = await this.bot.internal.sendFileGuild(this.session.guildId, data);
      }
    } catch (e) {
      if (!this.bot.http.isError(e)) throw e;
      this.errors.push(e);
      if (!this.retry && this.bot.config.retryWhen.includes(e.response.data.code)) {
        this.bot.logger.warn("%s retry message sending", this.session.cid);
        this.retry = true;
        await this.sendFile(type, attrs);
      }
    }
    this.retry = false;
    return res;
  }
  decodeButton(attrs, label) {
    const result = {
      id: attrs.id,
      render_data: {
        label,
        visited_label: label,
        style: attrs.class === "primary" ? 1 : 0
      },
      action: {
        type: attrs.type === "input" ? 2 : attrs.type === "link" ? 0 : 1,
        permission: {
          type: 2
        },
        data: attrs.type === "input" ? attrs.text : attrs.type === "link" ? attrs.href : attrs.id
      }
    };
    return result;
  }
  lastRow() {
    if (!this.rows.length) this.rows.push([]);
    let last = this.rows[this.rows.length - 1];
    if (last.length >= 5) {
      this.rows.push([]);
      last = this.rows[this.rows.length - 1];
    }
    return last;
  }
  trimButtons() {
    if (this.rows.length && this.rows[this.rows.length - 1].length === 0) this.rows.pop();
  }
  exportButtons() {
    return this.rows.map((v) => ({
      buttons: v
    }));
  }
  async visit(element) {
    const { type, attrs, children } = element;
    if (type === "text") {
      this.content += attrs.content;
    } else if (type === "passive") {
      this.passiveId = attrs.messageId;
      this.passiveSeq = Number(attrs.seq);
    } else if ((type === "img" || type === "image") && (attrs.src || attrs.url)) {
      await this.flush();
      const data = await this.sendFile(type, attrs);
      if (data) this.attachedFile = data;
    } else if (type === "video" && (attrs.src || attrs.url)) {
      await this.flush();
      const data = await this.sendFile(type, attrs);
      if (data) this.attachedFile = data;
      await this.flush();
    } else if (type === "audio" && (attrs.src || attrs.url)) {
      await this.flush();
      const { data } = await this.bot.ctx.http.file(attrs.src || attrs.url, attrs);
      if (data.slice(0, 7).toString().includes("#!SILK")) {
        const onlineFile = await this.sendFile(type, {
          src: `data:audio/amr;base64,` + Buffer.from(data).toString("base64")
        });
        this.attachedFile = onlineFile;
      } else {
        const silk = this.bot.ctx.get("silk");
        if (!silk) return this.bot.logger.warn("missing silk service, cannot send non-silk audio");
        if (silk.isWav(data)) {
          const result = await silk.encode(data, 0);
          const onlineFile = await this.sendFile(type, {
            src: `data:audio/amr;base64,` + Buffer.from(result.data).toString("base64")
          });
          if (onlineFile) this.attachedFile = onlineFile;
        } else {
          if (!this.bot.ctx.get("ffmpeg")) return this.bot.logger.warn("missing ffmpeg service, cannot send non-silk audio except wav");
          const wavBuf = await this.bot.ctx.get("ffmpeg").builder().input(Buffer.from(data)).outputOption("-ar", "24000", "-ac", "1", "-f", "s16le").run("buffer");
          const result = await silk.encode(wavBuf, 24e3);
          const onlineFile = await this.sendFile(type, {
            src: `data:audio/amr;base64,` + Buffer.from(result.data).toString("base64")
          });
          if (onlineFile) this.attachedFile = onlineFile;
        }
      }
      await this.flush();
    } else if (type === "br") {
      this.content += "\n";
    } else if (type === "p") {
      if (!this.content.endsWith("\n")) this.content += "\n";
      await this.render(children);
      if (!this.content.endsWith("\n")) this.content += "\n";
    } else if (type === "button-group") {
      this.useMarkdown = true;
      this.rows.push([]);
      await this.render(children);
      this.rows.push([]);
    } else if (type === "button") {
      this.useMarkdown = true;
      const last = this.lastRow();
      last.push(this.decodeButton(attrs, children.join("")));
    } else if (type === "message") {
      await this.flush();
      await this.render(children);
      await this.flush();
    } else {
      await this.render(children);
    }
  }
};

// ../../adapters/qq/src/bot/guild.ts
var QQGuildBot = class extends Bot {
  hidden = true;
  internal;
  http;
  static MessageEncoder = QQGuildMessageEncoder;
  constructor(ctx, config) {
    super(ctx, config, "qq");
    this.parent = config.parent;
    this.parent.guildBot = this;
    this.platform = "qqguild";
    this.internal = new GuildInternal(this, () => config.parent.guildHttp);
    this.http = config.parent.guildHttp;
  }
  get status() {
    return this.parent.status;
  }
  set status(status) {
    this.parent.status = status;
  }
  async getUser(userId, guildId) {
    const { user } = await this.getGuildMember(guildId, userId);
    return user;
  }
  async getGuildList(next) {
    const guilds = await this.internal.getGuilds();
    return { data: guilds.map(decodeGuild) };
  }
  async getGuild(guildId) {
    const guild = await this.internal.getGuild(guildId);
    return decodeGuild(guild);
  }
  async getChannelList(guildId, next) {
    const channels = await this.internal.getChannels(guildId);
    return { data: channels.map(decodeChannel) };
  }
  async getChannel(channelId) {
    const channel = await this.internal.getChannel(channelId);
    return decodeChannel(channel);
  }
  async createChannel(guildId, data) {
    const channel = await this.internal.createGuildChannel(guildId, {
      name: data.name,
      type: data.type === lib_exports.Channel.Type.TEXT ? 0 /* TEXT */ : data.type === lib_exports.Channel.Type.CATEGORY ? 4 /* GROUP */ : data.type === lib_exports.Channel.Type.VOICE ? 2 /* VOICE */ : 0 /* TEXT */,
      parent_id: data.parentId,
      position: data.position,
      sub_type: 0,
      private_type: 0,
      speak_permission: 1,
      private_user_ids: []
    });
    return decodeChannel(channel);
  }
  async getGuildMemberList(guildId, next) {
    const members = await this.internal.getGuildMembers(guildId, {
      limit: 400,
      after: next
    });
    return { data: members.map(decodeGuildMember), next: members[members.length - 1].user.id };
  }
  async getGuildMember(guildId, userId) {
    const member = await this.internal.getGuildMember(guildId, userId);
    return decodeGuildMember(member);
  }
  async kickGuildMember(guildId, userId) {
    await this.internal.removeGuildMember(guildId, userId);
  }
  async muteGuildMember(guildId, userId, duration) {
    await this.internal.muteGuildMember(guildId, userId, {
      mute_seconds: Math.floor(duration / 1e3)
    });
  }
  async getReactionList(channelId, messageId, emoji, next) {
    const [type, id] = emoji.split(":");
    const { users, cookie } = await this.internal.getReactions(channelId, messageId, type, id, {
      limit: 50,
      cookie: next
    });
    return { next: cookie, data: users.map(decodeUser) };
  }
  async createReaction(channelId, messageId, emoji) {
    const [type, id] = emoji.split(":");
    await this.internal.createReaction(channelId, messageId, type, id);
  }
  async deleteReaction(channelId, messageId, emoji) {
    const [type, id] = emoji.split(":");
    await this.internal.deleteReaction(channelId, messageId, type, id);
  }
  async getMessage(channelId, messageId) {
    const r = await this.internal.getMessage(channelId, messageId);
    return decodeMessage(this, r);
  }
  async deleteMessage(channelId, messageId) {
    if (channelId.includes("_")) {
      const [guildId] = channelId.split("_");
      await this.internal.deleteDM(guildId, messageId);
    } else {
      await this.internal.deleteMessage(channelId, messageId);
    }
  }
  async getLogin() {
    return this.parent.getLogin();
  }
  async createDirectChannel(id, guild_id) {
    let input_guild_id = guild_id;
    if (guild_id?.includes("_")) input_guild_id = guild_id.split("_")[0];
    const dms = await this.internal.createDMS({
      recipient_id: id,
      source_guild_id: input_guild_id
    });
    return { id: `${dms.guild_id}_${input_guild_id}`, type: lib_exports.Channel.Type.DIRECT };
  }
};

// ../../adapters/qq/src/bot/index.ts
var QQBot = class extends Bot {
  static MessageEncoder = QQMessageEncoder;
  static inject = ["http"];
  guildBot;
  internal;
  http;
  guildHttp;
  _token;
  _timer;
  constructor(ctx, config) {
    super(ctx, config, "qq");
    let endpoint = config.endpoint;
    if (config.sandbox) {
      endpoint = endpoint.replace(/^(https?:\/\/)/, "$1sandbox.");
    }
    this.guildHttp = ctx.http.extend({
      endpoint,
      headers: {
        "Authorization": `Bot ${this.config.id}.${this.config.token}`
      }
    });
    this.ctx.plugin(QQGuildBot, {
      parent: this
    });
    this.internal = new GroupInternal(this, () => this.http);
    this.ctx.plugin(WsClient, this);
  }
  async initialize() {
    try {
      const user = await this.guildBot.internal.getMe();
      Object.assign(this.user, decodeUser(user));
    } catch (e) {
      this.logger.error(e);
    }
  }
  async stop() {
    clearTimeout(this._timer);
    if (this.guildBot) {
      delete this.ctx.bots[this.guildBot.sid];
    }
    await super.stop();
  }
  async _ensureAccessToken() {
    try {
      const result = await this.ctx.http("https://bots.qq.com/app/getAppAccessToken", {
        method: "POST",
        data: {
          appId: this.config.id,
          clientSecret: this.config.secret
        }
      });
      if (!result.data.access_token) {
        this.logger.warn(`POST https://bots.qq.com/app/getAppAccessToken response: %o, trace id: %s`, result.data, result.headers.get("x-tps-trace-id"));
        throw new Error("failed to refresh access token");
      }
      let endpoint = this.config.endpoint;
      if (this.config.sandbox) {
        endpoint = endpoint.replace(/^(https?:\/\/)/, "$1sandbox.");
      }
      this._token = result.data.access_token;
      this.http = this.ctx.http.extend({
        endpoint,
        headers: {
          "Authorization": `QQBot ${this._token}`,
          "X-Union-Appid": this.config.id
        }
      });
      this._timer = setTimeout(() => {
        this._ensureAccessToken();
      }, (result.data.expires_in - 40) * 1e3);
    } catch (e) {
      if (!this.ctx.http.isError(e) || !e.response) throw e;
      this.logger.warn(`POST https://bots.qq.com/app/getAppAccessToken response: %o, trace id: %s`, e.response.data, e.response.headers.get("x-tps-trace-id"));
      throw e;
    }
  }
  async getAccessToken() {
    if (!this._token) {
      await this._ensureAccessToken();
    }
    return this._token;
  }
  async getLogin() {
    await this.initialize();
    return this.toJSON();
  }
  async createDirectChannel(id) {
    return { id, type: lib_exports.Channel.Type.DIRECT };
  }
  async deleteMessage(channelId, messageId) {
    try {
      await this.internal.deleteMessage(channelId, messageId);
    } catch (e) {
      await this.internal.deletePrivateMessage(channelId, messageId);
    }
  }
};
((QQBot2) => {
  QQBot2.Config = lib_exports2.Schema.intersect([
    lib_exports2.Schema.object({
      id: lib_exports2.Schema.string().description("\u673A\u5668\u4EBA id\u3002").required(),
      secret: lib_exports2.Schema.string().description("\u673A\u5668\u4EBA\u5BC6\u94A5\u3002").role("secret"),
      token: lib_exports2.Schema.string().description("\u673A\u5668\u4EBA\u4EE4\u724C\u3002").role("secret"),
      type: lib_exports2.Schema.union(["public", "private"]).description("\u673A\u5668\u4EBA\u7C7B\u578B\u3002").required(),
      sandbox: lib_exports2.Schema.boolean().description("\u662F\u5426\u5F00\u542F\u6C99\u7BB1\u6A21\u5F0F\u3002").default(false),
      endpoint: lib_exports2.Schema.string().role("link").description("\u8981\u8FDE\u63A5\u7684\u670D\u52A1\u5668\u5730\u5740\u3002").default("https://api.sgroup.qq.com/"),
      authType: lib_exports2.Schema.union(["bot", "bearer"]).description("\u91C7\u7528\u7684\u9A8C\u8BC1\u65B9\u5F0F\u3002").default("bot"),
      intents: lib_exports2.Schema.bitset(Intents).description("\u9700\u8981\u8BA2\u9605\u7684\u673A\u5668\u4EBA\u4E8B\u4EF6\u3002"),
      retryWhen: lib_exports2.Schema.array(Number).description("\u53D1\u9001\u6D88\u606F\u9047\u5230\u5E73\u53F0\u9519\u8BEF\u7801\u65F6\u91CD\u8BD5\u3002").default([])
    }),
    WsClient.Options
  ]);
})(QQBot || (QQBot = {}));

// src/adapter/utils.ts
function getBotId(platform, appid) {
  return `${platform}:${appid}`;
}
function getChannelUnionId(platform, guildId, channelId) {
  return `${platform}_${guildId}_${channelId}`;
}
function adapterPlugin(platform) {
  switch (platform) {
    case "qqguild":
      return QQBot;
    case "kook":
      return QQBot;
  }
}
function adapterConfig(config) {
  switch (config.platform) {
    case "qqguild":
      return adapterQQ(config);
    case "kook":
      return adapterKook(config);
  }
}
function adapterQQ(config) {
  const type = config.type ?? "private";
  return {
    id: config.appid,
    secret: config.secret,
    token: config.token,
    type,
    sandbox: config.sandbox ?? false,
    intents: types_exports.Intents.GUILDS | types_exports.Intents.GUILD_MEMBERS | (type === "private" ? types_exports.Intents.GUILD_MESSAGES : types_exports.Intents.PUBLIC_GUILD_MESSAGES) | types_exports.Intents.GUILD_MESSAGE_REACTIONS | types_exports.Intents.DIRECT_MESSAGES,
    retryWhen: []
  };
}
function adapterKook(config) {
  return {
    protocol: "ws",
    token: config.token
  };
}

// src/app/wsclient.ts
var WsClient2 = class {
  constructor(server, peer) {
    this.peer = peer;
    makeAutoObservable(this, { peer: false });
    this.server = server;
    this.autorun(
      (ws) => this.server.sendToClient(ws, this.onCardListUpdate())
    );
  }
  // 该 client 登录机器人的 id
  _botId;
  // 该 client 监听的频道 id
  _listenToGuildId = "";
  // 该 client 监听的子频道 id
  _listenToChannelId = "";
  server;
  disposers = [];
  get id() {
    return this.peer?.id;
  }
  get botId() {
    return this._botId;
  }
  get bot() {
    return this.server.bots.find(this.botId);
  }
  get platform() {
    return this.bot?.platform;
  }
  get listenToGuildId() {
    return this._listenToGuildId;
  }
  get listenToChannelId() {
    return this._listenToChannelId;
  }
  get listenToChannelUnionId() {
    if (this.platform && this.listenToGuildId && this.listenToChannelId) {
      return getChannelUnionId(
        this.platform,
        this.listenToGuildId,
        this.listenToChannelId
      );
    } else {
      return void 0;
    }
  }
  onMessage(rawData) {
    try {
      const body = JSON.parse(rawData.toString());
      console.log(body);
      this.server.handleClientRequest(this, body);
    } catch (e) {
      console.error("\u6D88\u606F\u5904\u7406\u5931\u8D25", e);
      console.error("\u539F\u59CB\u6D88\u606F", rawData);
    }
  }
  onError(e) {
    console.error("\u5BA2\u6237\u7AEF\u56E0\u53D1\u751F\u9519\u8BEF\u800C\u5173\u95ED", e);
    this.disposeAllEffects();
    this.server.removeClient(this);
  }
  onClose() {
    console.log("\u5BA2\u6237\u7AEF\u5173\u95ED");
    this.disposeAllEffects();
    this.server.removeClient(this);
  }
  onCardListUpdate() {
    const cardList = this.server.cards.cardList;
    return {
      cmd: "card/list",
      success: true,
      data: cardList
    };
  }
  // 客户端绑定某个 bot 实例
  bindToBot(botId) {
    this._botId = botId;
  }
  // 客户端选择某个子频道
  listenTo(channelId, guildId) {
    this._listenToChannelId = channelId;
    this._listenToGuildId = guildId;
    this.bot.listenTo(channelId, guildId);
  }
  // 发送给网页
  send(data) {
    console.log("send", this.peer);
    this.peer?.send(JSON.stringify(data), {});
  }
  // 注册 ws 相关的 effect
  autorun(effect) {
    const dispose = autorun(() => effect(this));
    this.disposers.push(dispose);
  }
  // 取消注册所有的 effect
  disposeAllEffects() {
    this.disposers.forEach((dispose) => dispose());
    this.disposers.length = 0;
  }
};

// ../../packages/dicecore/src/utils/eventBus.ts
import mitt from "mitt";
var eventBus = mitt();

// ../../packages/dicecore/src/config/plugin-provider.ts
var PluginProvider = class _PluginProvider {
  static INSTANCE = new _PluginProvider();
  pluginMap = /* @__PURE__ */ new Map();
  pluginId2ItemIds = /* @__PURE__ */ new Map();
  itemsMap = /* @__PURE__ */ new Map();
  constructor() {
  }
  get allPlugins() {
    return Array.from(this.pluginMap.values());
  }
  register(plugins) {
    if (plugins.length > 0) {
      for (const plugin2 of plugins) {
        this._register(plugin2.id, plugin2);
      }
      eventBus.emit("plugins-added", plugins);
    }
  }
  _register(pluginId, plugin2) {
    if (this.pluginMap.has(pluginId)) {
      this._unregister(pluginId);
    }
    this.pluginMap.set(pluginId, plugin2);
    const allIds = /* @__PURE__ */ new Set();
    ["customReply", "rollDecider", "aliasRoll", "customText"].forEach((key) => {
      plugin2[key]?.forEach((item) => {
        const fullId = `${plugin2.id}.${item.id}`;
        allIds.add(fullId);
        this.itemsMap.set(fullId, item);
      });
    });
    ["onReceiveCommand", "beforeParseDiceRoll", "onCardEntryChange", "onMessageReaction", "beforeDiceRoll", "afterDiceRoll"].forEach((key) => {
      plugin2.hook?.[key]?.forEach((item) => {
        const fullId = `${plugin2.id}.${item.id}`;
        allIds.add(fullId);
        this.itemsMap.set(fullId, item);
      });
    });
    this.pluginId2ItemIds.set(pluginId, allIds);
  }
  _unregister(pluginId) {
    const itemIds = this.pluginId2ItemIds.get(pluginId);
    if (itemIds) {
      itemIds.forEach((id) => this.itemsMap.delete(id));
    }
    this.pluginId2ItemIds.delete(pluginId);
    this.pluginMap.delete(pluginId);
  }
  // 调用方保证类型正确
  getPluginItem(fullId) {
    return this.itemsMap.get(fullId);
  }
};

// ../../packages/dicecore/src/utils/sync-lru-cache.ts
import LRUCache from "lru-cache";
var SyncLruCache = class {
  cache;
  fetchMethod;
  constructor({ max, fetchMethod }) {
    this.cache = new LRUCache({ max });
    this.fetchMethod = fetchMethod;
  }
  get(key) {
    if (this.cache.has(key)) {
      return this.cache.get(key);
    }
    const value = this.fetchMethod(key);
    this.cache.set(key, value);
    return value;
  }
};

// ../../packages/dicecore/src/config/helpers/decider.ts
var RollDeciderExpressionCache = new SyncLruCache({
  max: 50,
  fetchMethod: (expression) => {
    const normalized = expression.trim() || false;
    return new Function("context", `"use strict"; const { baseValue, targetValue, roll } = context; return !!(${normalized})`);
  }
});
function decideRoll(decider, context2) {
  if (!decider) {
    return void 0;
  }
  const resultLevel = rollDeciderHit(decider, context2);
  if (!resultLevel) {
    return void 0;
  }
  return {
    success: ["\u6210\u529F", "\u56F0\u96BE\u6210\u529F", "\u6781\u96BE\u6210\u529F", "\u5927\u6210\u529F"].includes(resultLevel),
    level: resultLevel
  };
}
function rollDeciderHit(decider, context2) {
  try {
    for (const rule of decider.rules) {
      const func = RollDeciderExpressionCache.get(rule.expression);
      if (func?.(context2)) {
        return rule.level;
      }
    }
    return void 0;
  } catch (e) {
    console.error("[Config] \u5224\u65AD\u6210\u529F\u7B49\u7EA7\u51FA\u9519", e?.message, "context=", JSON.stringify(context2));
    return void 0;
  }
}

// ../../packages/card/src/types.ts
import mitt2 from "mitt";
var BaseCard = class {
  data;
  get type() {
    return this.data.type;
  }
  get name() {
    return this.data.name;
  }
  get isTemplate() {
    return this.data.isTemplate;
  }
  constructor(data) {
    this.data = data;
  }
  getEntryDisplay(name) {
    const entry = this.getEntry(name);
    if (entry) {
      return `${name}:${entry.value}`;
    }
    const ability = this.getAbility(name);
    if (ability) {
      return `${name}:${ability.value}`;
    }
    return `${name}:-`;
  }
  getAliases(name) {
    return [name.toUpperCase()];
  }
  // region events
  emitter = mitt2();
  emitCardEntryChange(key, value, oldValue) {
    this.emitter.emit("EntryChange", {
      key,
      value,
      oldValue,
      card: this
    });
  }
  addCardEntryChangeListener(listener) {
    this.emitter.on("EntryChange", listener);
  }
  removeCardEntryChangeListener(listener) {
    this.emitter.off("EntryChange", listener);
  }
  // endregion
};

// ../../packages/card/src/coc.ts
var CocCard = class extends BaseCard {
  defaultRoll = "d%";
  riDefaultRoll = "$\u654F\u6377";
  get HP() {
    return this.data.basic.HP;
  }
  set HP(value) {
    this.data.basic.HP = clamp(value, 0, this.MAXHP);
  }
  get MAXHP() {
    return Math.floor((this.data.props.\u4F53\u8D28 + this.data.props.\u4F53\u578B) / 10);
  }
  get MP() {
    return this.data.basic.MP;
  }
  set MP(value) {
    this.data.basic.MP = clamp(value, 0, this.MAXMP);
  }
  get MAXMP() {
    return Math.floor(this.data.props.\u610F\u5FD7 / 5);
  }
  get SAN() {
    return this.data.basic.SAN;
  }
  set SAN(value) {
    this.data.basic.SAN = clamp(value, 0, this.MAXSAN);
  }
  get MAXSAN() {
    return Math.max(0, 99 - this.data.basic.CM);
  }
  get CM() {
    return this.data.basic.CM;
  }
  set CM(value) {
    this.data.basic.CM = value;
    this.SAN = Math.min(this.SAN, this.MAXSAN);
  }
  // 计算伤害加值和体格
  get dbAndBuild() {
    const sum = this.data.props.\u529B\u91CF + this.data.props.\u4F53\u578B;
    if (sum < 65) {
      return ["-2", -2];
    } else if (sum < 85) {
      return ["-1", -1];
    } else if (sum < 125) {
      return ["0", 0];
    } else if (sum < 165) {
      return ["1d4", 1];
    } else if (sum < 205) {
      return ["1d6", 2];
    } else {
      const extra = Math.floor((sum - 205) / 80);
      return [`${2 + extra}d6`, 3 + extra];
    }
  }
  get DB() {
    return this.dbAndBuild[0];
  }
  get \u4F53\u683C() {
    return this.dbAndBuild[1];
  }
  getAbility(input) {
    const possibleNames = this.getAliases(input);
    for (const key of possibleNames) {
      const ability = this.data.abilities.find((item) => item.name.toUpperCase() === key);
      if (ability) {
        return { input, key: ability.name, value: ability.expression, readonly: false };
      }
    }
    for (const key of possibleNames) {
      const keyAsComputedAbilities = key;
      if (COMPUTED_ABILITIES.includes(keyAsComputedAbilities)) {
        return { input, key, value: this[keyAsComputedAbilities], readonly: true };
      }
    }
    return void 0;
  }
  setAbility(name, expression) {
    const abilityRet = this.getAbility(name);
    if (abilityRet && !abilityRet.readonly) {
      const ability = this.data.abilities.find((item) => item.name === abilityRet.key);
      if (ability.expression !== expression) {
        ability.expression = expression;
        this.data.lastModified = Date.now();
        return true;
      } else {
        return false;
      }
    } else {
      this.data.abilities.push({ name, expression, ext: "" });
      this.data.lastModified = Date.now();
      return true;
    }
  }
  removeAbility(name) {
    const abilityRet = this.getAbility(name);
    if (abilityRet && !abilityRet.readonly) {
      const index = this.data.abilities.findIndex((item) => item.name === abilityRet.key);
      if (index >= 0) {
        this.data.abilities.splice(index, 1);
        this.data.lastModified = Date.now();
        return true;
      }
    }
    return false;
  }
  // 不包含困难前缀的获取
  getRawEntry(input) {
    const possibleSkills = this.getAliases(input);
    for (const key of possibleSkills) {
      for (const type of ["skills", "basic", "props"]) {
        const target = this.data[type][key];
        if (typeof target === "number") {
          return { input, key, baseValue: target, isTemp: false, readonly: false, type };
        }
      }
    }
    for (const key of possibleSkills) {
      const keyAsComputedEntries = key;
      if (COMPUTED_ENTRIES.includes(keyAsComputedEntries)) {
        return { input, key, baseValue: this[keyAsComputedEntries], isTemp: false, readonly: true, type: "basic" };
      }
    }
    return void 0;
  }
  getEntry(input) {
    const [skillWithoutDifficulty, difficulty] = parseDifficulty(input);
    if (!skillWithoutDifficulty) return void 0;
    const target = this.getRawEntry(skillWithoutDifficulty);
    if (target) {
      const value = calculateTargetValueWithDifficulty(target.baseValue, difficulty);
      return { ...target, value, difficulty };
    } else {
      return void 0;
    }
  }
  setEntry(name, value) {
    const [skillWithoutDifficulty, difficulty] = parseDifficulty(name);
    if (!skillWithoutDifficulty) return false;
    const _input = skillWithoutDifficulty.toUpperCase();
    const rawEntry = this.getRawEntry(skillWithoutDifficulty);
    if (rawEntry && rawEntry.type === "basic") {
      const keyAsSpecialSetters = rawEntry.key;
      if (SPECIAL_ENTRY_SETTERS.includes(keyAsSpecialSetters)) {
        const oldValue = this[keyAsSpecialSetters];
        this[keyAsSpecialSetters] = value;
        const newValue = this[keyAsSpecialSetters];
        if (oldValue !== newValue) {
          this.data.lastModified = Date.now();
          this.emitCardEntryChange(rawEntry.key, newValue, oldValue);
          return true;
        } else {
          return false;
        }
      }
    }
    const targetValue = calculateTargetValueWithDifficulty(value, difficulty, true);
    if (rawEntry && !rawEntry.readonly) {
      if (targetValue !== rawEntry.baseValue) {
        const oldValue = rawEntry.baseValue;
        this.data[rawEntry.type][rawEntry.key] = targetValue;
        this.data.lastModified = Date.now();
        this.emitCardEntryChange(rawEntry.key, targetValue, oldValue);
        return true;
      } else {
        return false;
      }
    } else {
      this.data.skills[_input] = targetValue;
      this.data.lastModified = Date.now();
      this.emitCardEntryChange(_input, targetValue, void 0);
      return true;
    }
  }
  removeEntry(name) {
    const [skillWithoutDifficulty] = parseDifficulty(name);
    if (!skillWithoutDifficulty) return false;
    const entry = this.getRawEntry(skillWithoutDifficulty);
    if (entry && entry.type === "skills" && !entry.readonly) {
      const oldValue = entry.baseValue;
      delete this.data.skills[entry.key];
      this.data.lastModified = Date.now();
      this.emitCardEntryChange(entry.key, void 0, oldValue);
      return true;
    } else {
      return false;
    }
  }
  /**
   * 标记技能成长
   */
  markSkillGrowth(skill) {
    const entry = this.getRawEntry(skill);
    if (!entry || entry.type !== "skills") return false;
    const key = entry.key;
    if (this.data.meta.skillGrowth[key]) {
      return false;
    } else {
      this.data.meta.skillGrowth[key] = true;
      this.data.lastModified = Date.now();
      return true;
    }
  }
  /**
   * 取消技能成长
   */
  cancelSkillGrowth(skill) {
    let updated = false;
    const possibleSkills = this.getAliases(skill);
    possibleSkills.forEach((skill2) => {
      if (this.data.meta.skillGrowth[skill2]) {
        delete this.data.meta.skillGrowth[skill2];
        updated = true;
      }
    });
    return updated;
  }
  /**
   * 清除所有技能成长标记
   */
  clearSkillGrowth() {
    const count = Object.keys(this.data.meta.skillGrowth).length;
    this.data.meta.skillGrowth = {};
    return count > 0;
  }
  /**
   * 如果人物卡未设置一些值，则以默认值填充
   */
  applyDefaultValues() {
    if (!this.HP) this.HP = this.MAXHP;
    if (!this.MP) this.MP = this.MAXMP;
    if (!this.SAN) this.SAN = this.data.props.\u610F\u5FD7;
    Object.entries(DEFAULT_SKILLS).forEach(([key, value]) => {
      const entry = this.getRawEntry(key);
      if (!entry) {
        this.data.skills[key] = value;
      }
    });
    const shanbiEntry = this.getRawEntry("\u95EA\u907F");
    if (!shanbiEntry) {
      this.data.skills["\u95EA\u907F"] = Math.floor(this.data.props.\u654F\u6377 / 2);
    }
    const muyuEntry = this.getRawEntry("\u6BCD\u8BED");
    if (!muyuEntry) {
      this.data.skills["\u6BCD\u8BED"] = this.data.props.\u6559\u80B2;
    }
    this.data.lastModified = Date.now();
  }
  getEntryDisplay(name) {
    const entry = this.getEntry(name);
    if (entry) {
      const isSkillGrowth = entry && entry.type === "skills" && this.data.meta.skillGrowth[entry.key];
      return `${name}${isSkillGrowth ? "*" : ""}:${entry.value}`;
    }
    const ability = this.getAbility(name);
    if (ability) {
      return `${name}:${ability.value}`;
    }
    return `${name}:-`;
  }
  getSummary() {
    const _2 = (name) => this.getEntry(name)?.value ?? "-";
    const basic = [
      `\u751F\u547D:${_2("HP")}/${_2("MAXHP")}`,
      `\u7406\u667A:${_2("SAN")}/${_2("MAXSAN")}`,
      `\u5E78\u8FD0:${_2("LUCK")}`,
      `\u9B54\u6CD5:${_2("MP")}/${_2("MAXMP")}`,
      `\u514B\u82CF\u9C81\u795E\u8BDD:${_2("CM")}`,
      `\u4FE1\u7528\u8BC4\u7EA7:${_2("\u4FE1\u7528")}`
    ].join(" ");
    const props = Object.entries(this.data.props).map(([k, v]) => `${k}:${v}`).join(" ");
    const skills = Object.keys(this.data.skills).map((name) => this.getEntryDisplay(name)).join(" ");
    const abilities = this.data.abilities.map((item) => `${item.name}:${item.expression}`).join("\n");
    return "\u89D2\u8272\uFF1A" + this.name + "\n" + basic + "\n" + props + "\n" + skills + "\n" + abilities;
  }
  getAliases(name) {
    const _input = name.toUpperCase();
    return SKILL_ALIAS[_input] ?? [_input];
  }
};
var COMPUTED_ENTRIES = ["MAXHP", "MAXMP", "MAXSAN", "\u4F53\u683C"];
var COMPUTED_ABILITIES = ["DB"];
var SPECIAL_ENTRY_SETTERS = ["HP", "MP", "SAN", "CM"];
var _SKILL_ALIAS = Object.freeze([
  ["\u529B\u91CF", "STR"],
  ["\u654F\u6377", "DEX"],
  ["\u610F\u5FD7", "POW"],
  ["\u4F53\u8D28", "CON"],
  ["\u5916\u8C8C", "APP"],
  ["\u6559\u80B2", "\u77E5\u8BC6", "EDU"],
  ["\u4F53\u578B", "SIZ", "SIZE"],
  ["\u667A\u529B", "\u7075\u611F", "INT"],
  ["\u751F\u547D", "HP", "\u751F\u547D\u503C"],
  ["\u751F\u547D\u4E0A\u9650", "MAXHP", "HPMAX", "\u751F\u547D\u503C\u4E0A\u9650"],
  ["\u7406\u667A", "SC", "SAN", "SAN\u503C", "\u7406\u667A\u503C"],
  ["\u7406\u667A\u4E0A\u9650", "MAXSAN", "SANMAX", "\u7406\u667A\u503C\u4E0A\u9650"],
  ["\u9B54\u6CD5", "MP", "\u9B54\u6CD5\u503C"],
  ["\u9B54\u6CD5\u4E0A\u9650", "MAXMP", "MPMAX", "\u9B54\u6CD5\u503C\u4E0A\u9650"],
  ["\u5E78\u8FD0", "LUCK", "LUK", "\u8FD0\u6C14"],
  ["\u5E74\u9F84", "AGE"],
  ["\u4F24\u5BB3\u52A0\u503C", "DB"],
  ["\u4F53\u683C", "BUILD"],
  ["\u4FA6\u67E5", "\u4FA6\u5BDF"],
  ["\u4FE1\u7528", "\u4FE1\u8A89", "\u4FE1\u7528\u8BC4\u7EA7"],
  ["\u514B\u82CF\u9C81", "\u514B\u82CF\u9C81\u795E\u8BDD", "CM"],
  ["\u8BA1\u7B97\u673A", "\u8BA1\u7B97\u673A\u4F7F\u7528", "\u7535\u8111"],
  ["\u56FE\u4E66\u9986", "\u56FE\u4E66\u9986\u4F7F\u7528"],
  ["\u6C7D\u8F66", "\u9A7E\u9A76", "\u6C7D\u8F66\u9A7E\u9A76"],
  ["\u535A\u7269", "\u535A\u7269\u5B66", "\u81EA\u7136\u5B66"],
  ["\u9886\u822A", "\u5BFC\u822A"],
  ["\u9501\u5320", "\u5F00\u9501", "\u64AC\u9501"],
  ["\u91CD\u578B\u673A\u68B0", "\u91CD\u578B\u64CD\u4F5C", "\u64CD\u4F5C\u91CD\u578B\u673A\u68B0", "\u91CD\u578B"],
  ["\u9A6F\u517D", "\u52A8\u7269\u9A6F\u517B"],
  ["\u9A91\u4E58", "\u9A91\u672F"]
]);
var SKILL_ALIAS = _SKILL_ALIAS.map((line) => line.reduce((obj, str) => Object.assign(obj, { [str]: line }), {})).reduce((total, obj) => Object.assign(total, obj), {});
function parseDifficulty(expression) {
  let difficulty = "normal";
  if (expression.includes("\u56F0\u96BE")) {
    difficulty = "hard";
  } else if (expression.includes("\u6781\u96BE") || expression.includes("\u6781\u9650")) {
    difficulty = "ex";
  }
  expression = expression.replace(/(困难|极难|极限)/g, "");
  return [expression.trim(), difficulty];
}
function calculateTargetValueWithDifficulty(baseValue, difficulty, reverse = false) {
  if (difficulty === "hard") {
    return reverse ? baseValue * 2 : Math.floor(baseValue / 2);
  } else if (difficulty === "ex") {
    return reverse ? baseValue * 5 : Math.floor(baseValue / 5);
  } else {
    return baseValue;
  }
}
function getCocTempEntry(key, tempValue) {
  const [skillWithoutDifficulty, difficulty] = parseDifficulty(key);
  const value = calculateTargetValueWithDifficulty(tempValue, difficulty);
  return { input: key, type: "skills", key: skillWithoutDifficulty, difficulty, value, baseValue: tempValue, isTemp: true, readonly: true };
}
var DEFAULT_SKILLS = Object.freeze({
  "\u4F1A\u8BA1": 5,
  "\u4EBA\u7C7B\u5B66": 1,
  "\u4F30\u4EF7": 5,
  "\u8003\u53E4\u5B66": 1,
  "\u53D6\u60A6": 15,
  "\u6500\u722C": 20,
  "\u8BA1\u7B97\u673A": 5,
  "\u4E54\u88C5": 5,
  "\u9A7E\u9A76": 20,
  "\u7535\u6C14\u7EF4\u4FEE": 10,
  "\u7535\u5B50\u5B66": 1,
  "\u8BDD\u672F": 5,
  "\u6025\u6551": 30,
  "\u5386\u53F2": 5,
  "\u6050\u5413": 15,
  "\u8DF3\u8DC3": 20,
  "\u6CD5\u5F8B": 5,
  "\u56FE\u4E66\u9986": 20,
  "\u8046\u542C": 20,
  "\u9501\u5320": 1,
  "\u673A\u68B0\u7EF4\u4FEE": 10,
  "\u533B\u5B66": 1,
  "\u535A\u7269": 10,
  "\u5BFC\u822A": 10,
  "\u795E\u79D8\u5B66": 5,
  "\u514B\u82CF\u9C81": 0,
  "\u91CD\u578B\u673A\u68B0": 1,
  "\u8BF4\u670D": 10,
  "\u7CBE\u795E\u5206\u6790": 1,
  "\u5FC3\u7406\u5B66": 10,
  "\u9A91\u4E58": 5,
  "\u5999\u624B": 10,
  "\u4FA6\u67E5": 25,
  "\u6F5C\u884C": 20,
  "\u6E38\u6CF3": 20,
  "\u6295\u63B7": 20,
  "\u8FFD\u8E2A": 10,
  "\u9A6F\u517D": 5,
  "\u6F5C\u6C34": 1,
  "\u7206\u7834": 1,
  "\u8BFB\u5507": 1,
  "\u50AC\u7720": 1,
  "\u70AE\u672F": 1,
  // 格斗
  "\u97AD": 5,
  "\u5200\u5251": 20,
  "\u6597\u6BB4": 25,
  "\u65A7": 15,
  "\u7EDE\u7D22": 15,
  "\u8FDE\u67B7": 10,
  "\u94FE\u952F": 10,
  // 射击
  "\u6B65\u67AA": 25,
  "\u51B2\u950B\u67AA": 15,
  "\u5F13": 15,
  "\u77DB": 20,
  "\u706B\u7130\u55B7\u5C04\u5668": 10,
  "\u673A\u67AA": 10,
  "\u624B\u67AA": 20,
  "\u9730\u5F39\u67AA": 25,
  "\u91CD\u6B66\u5668": 10,
  // 艺术与手艺
  "\u8868\u6F14": 5,
  "\u7F8E\u672F": 5,
  "\u6444\u5F71": 5,
  "\u4F2A\u9020\u6587\u4E66": 5,
  // 科学
  "\u5730\u8D28\u5B66": 1,
  "\u52A8\u7269\u5B66": 1,
  "\u5316\u5B66": 1,
  "\u5BC6\u7801\u5B66": 1,
  "\u6C14\u8C61\u5B66": 1,
  "\u751F\u7269\u5B66": 1,
  "\u6570\u5B66": 10,
  "\u53F8\u6CD5\u79D1\u5B66": 1,
  "\u5929\u6587\u5B66": 1,
  "\u7269\u7406\u5B66": 1,
  "\u836F\u5B66": 1,
  "\u690D\u7269\u5B66": 1
});
function clamp(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

// ../../packages/card/src/general.ts
var GeneralCard = class extends BaseCard {
  get HP() {
    return this.getEntry("HP")?.value;
  }
  get MAXHP() {
    return this.getEntry("MAXHP")?.value;
  }
  getAbility(input) {
    const key = input.toUpperCase();
    const ability = this.data.abilities.find((item) => item.key.toUpperCase() === key);
    if (ability) {
      return { input, key: ability.key, value: ability.value };
    }
    return void 0;
  }
  setAbility(name, value) {
    const abilityRet = this.getAbility(name);
    if (abilityRet) {
      const ability = this.data.abilities.find((item) => item.key === abilityRet.key);
      if (ability.value !== value) {
        ability.value = value;
        this.data.lastModified = Date.now();
        return true;
      } else {
        return false;
      }
    } else {
      this.data.abilities.push({ key: name, value });
      this.data.lastModified = Date.now();
      return true;
    }
  }
  removeAbility(name) {
    const abilityRet = this.getAbility(name);
    if (abilityRet) {
      const index = this.data.abilities.findIndex((item) => item.key === abilityRet.key);
      if (index >= 0) {
        this.data.abilities.splice(index, 1);
        this.data.lastModified = Date.now();
        return true;
      }
    }
    return false;
  }
  getEntry(input) {
    const key = input.toUpperCase();
    const value = this.data.skills[key];
    if (typeof value !== "undefined") {
      return { input, key, value, isTemp: false };
    } else {
      return void 0;
    }
  }
  setEntry(name, value) {
    const key = name.toUpperCase();
    const oldValue = this.data.skills[key];
    if (oldValue !== value) {
      this.data.skills[key] = value;
      this.data.lastModified = Date.now();
      this.emitCardEntryChange(key, value, oldValue);
      return true;
    }
    return false;
  }
  removeEntry(name) {
    const key = name.toUpperCase();
    const oldValue = this.data.skills[key];
    if (typeof oldValue !== "undefined") {
      delete this.data.skills[key];
      this.data.lastModified = Date.now();
      this.emitCardEntryChange(key, void 0, oldValue);
      return true;
    } else {
      return false;
    }
  }
  getSummary() {
    const skills = Object.entries(this.data.skills).map(([k, v]) => `${k}:${v}`).join(" ");
    const abilities = this.data.abilities.map((item) => `${item.key}:${item.value}`).join("\n");
    return "\u89D2\u8272\uFF1A" + this.name + "\n" + skills + "\n" + abilities;
  }
};

// ../../packages/card/src/dnd.ts
var DndCard = class extends BaseCard {
  defaultRoll = "d20";
  riDefaultRoll = "d20+{$\u654F\u6377\u8C03\u6574}[\u654F\u6377]+{$\u5148\u653B\u4E34\u65F6}[\u4E34\u65F6]";
  get HP() {
    return this.data.basic.HP;
  }
  set HP(value) {
    this.data.basic.HP = clamp2(value, 0, this.MAXHP);
  }
  get MAXHP() {
    return this.data.basic.MAXHP;
  }
  getAbility(input) {
    const possibleNames = this.getAliases(input);
    for (const key of possibleNames) {
      for (const type of ["spells", "equips"]) {
        const ability = this.data[type].find((item) => item.name.toUpperCase() === key);
        if (ability) {
          return { input, key: ability.name, value: ability.expression, type };
        }
      }
    }
    return void 0;
  }
  setAbility(name, expression) {
    const abilityRet = this.getAbility(name);
    if (abilityRet) {
      const ability = this.data[abilityRet.type].find((item) => item.name === abilityRet.key);
      if (ability.expression !== expression) {
        ability.expression = expression;
        this.data.lastModified = Date.now();
        return true;
      } else {
        return false;
      }
    } else {
      this.data.equips.push({ name, expression, ext: "" });
      this.data.lastModified = Date.now();
      return true;
    }
  }
  removeAbility(name) {
    const abilityRet = this.getAbility(name);
    if (abilityRet) {
      const index = this.data[abilityRet.type].findIndex((item) => item.name === abilityRet.key);
      if (index >= 0) {
        this.data[abilityRet.type].splice(index, 1);
        this.data.lastModified = Date.now();
        return true;
      }
    }
    return false;
  }
  getValueByPostfix(type, key, value, postfix) {
    if (type === "props") {
      if (postfix === "modifier") {
        return calculatePropModifier(value);
      } else if (postfix === "saving") {
        const experienced = !!this.data.meta.experienced[key];
        return calculatePropModifier(value) + (experienced ? this.data.basic.\u719F\u7EC3 : 0);
      }
    } else if (type === "skills") {
      if (postfix === "none") {
        const prop = getPropOfSkill(key);
        const modifiedValue = calculatePropModifier(this.data.props[prop]);
        const isExperienced = !!this.data.meta.experienced[key];
        return modifiedValue + value + (isExperienced ? this.data.basic.\u719F\u7EC3 : 0);
      } else if (postfix === "modifier") {
        return value;
      }
    }
    return value;
  }
  getEntry(input) {
    const [skillName, postfix] = parseInput(input);
    if (!skillName) return void 0;
    const possibleSkills = this.getAliases(skillName);
    for (const key of possibleSkills) {
      for (const type of ["items", "basic", "props", "skills"]) {
        const target = this.data[type][key];
        if (typeof target === "number") {
          const value = this.getValueByPostfix(type, key, target, postfix);
          return { input, key, value, isTemp: false, type, postfix };
        }
      }
    }
    return void 0;
  }
  setEntry(name, value) {
    const [skillName, postfix] = parseInput(name);
    if (!skillName) return false;
    const _input = skillName.toUpperCase();
    const entry = this.getEntry(name);
    if (entry && entry.type === "basic") {
      const keyAsSpecialSetters = entry.key;
      if (SPECIAL_ENTRY_SETTERS2.includes(keyAsSpecialSetters)) {
        const oldValue = this[keyAsSpecialSetters];
        this[keyAsSpecialSetters] = value;
        const newValue = this[keyAsSpecialSetters];
        if (oldValue !== newValue) {
          this.data.lastModified = Date.now();
          this.emitCardEntryChange(entry.key, newValue, oldValue);
          return true;
        } else {
          return false;
        }
      }
    }
    if (entry) {
      if (value !== entry.value) {
        const oldValue = entry.value;
        this.data[entry.type][entry.key] = value;
        this.data.lastModified = Date.now();
        this.emitCardEntryChange(entry.key, value, oldValue);
        return true;
      } else {
        return false;
      }
    } else {
      this.data.items[_input] = value;
      this.data.lastModified = Date.now();
      this.emitCardEntryChange(_input, value, void 0);
      return true;
    }
  }
  removeEntry(name) {
    const [skillName, postfix] = parseInput(name);
    if (!skillName) return false;
    if (postfix !== "none") return false;
    const entry = this.getEntry(name);
    if (entry && entry.type === "items" && !["CP", "SP", "GP", "EP", "PP"].includes(entry.key)) {
      const oldValue = entry.value;
      delete this.data.items[entry.key];
      this.data.lastModified = Date.now();
      this.emitCardEntryChange(entry.key, void 0, oldValue);
      return true;
    } else {
      return false;
    }
  }
  /**
   * 标记属性/技能熟练
   */
  markExperienced(skill) {
    const entry = this.getEntry(skill);
    if (!entry || !["props", "skills"].includes(entry.type)) return false;
    const key = entry.key;
    if (this.data.meta.experienced[key]) {
      return false;
    } else {
      this.data.meta.experienced[key] = true;
      this.data.lastModified = Date.now();
      return true;
    }
  }
  /**
   * 取消属性/技能熟练
   */
  cancelExperienced(skill) {
    let updated = false;
    const possibleSkills = this.getAliases(skill);
    possibleSkills.forEach((skill2) => {
      if (this.data.meta.experienced[skill2]) {
        delete this.data.meta.experienced[skill2];
        updated = true;
      }
    });
    return updated;
  }
  getEntryDisplay(name) {
    const entry = this.getEntry(name);
    if (entry) {
      const isExperienced = !!this.data.meta.experienced[entry.key];
      if (entry.type === "skills" && entry.postfix === "none") {
        const skillModifier = this.data.skills[entry.key];
        const skillSign = skillModifier > 0 ? "+" : "";
        return `${name}${isExperienced ? "*" : ""}:${entry.value}(${skillSign}${skillModifier})`;
      } else {
        return `${name}${isExperienced ? "*" : ""}:${entry.value}`;
      }
    }
    const ability = this.getAbility(name);
    if (ability) {
      return `${name}:${ability.value}`;
    }
    return `${name}:-`;
  }
  getSummary() {
    const _2 = (name) => this.getEntry(name)?.value ?? "-";
    const basic = [
      `\u751F\u547D:${_2("HP")}/${_2("MAXHP")}`,
      `LV:${_2("LV")}`,
      `AC:${_2("AC")}`
    ].join(" ");
    const props = Object.keys(this.data.props).map((name) => this.getEntryDisplay(name)).join(" ");
    const skills = Object.keys(this.data.skills).map((name) => this.getEntryDisplay(name)).join(" ");
    const items = Object.entries(this.data.items).map(([k, v]) => `${k}:${v}`).join(" ");
    return "\u89D2\u8272\uFF1A" + this.name + "\n" + basic + "\n" + props + "\n" + skills + "\n" + items;
  }
  getAliases(name) {
    const _input = name.toUpperCase();
    return SKILL_ALIAS2[_input] ?? [_input];
  }
};
var SPECIAL_ENTRY_SETTERS2 = ["HP"];
var _PROP2SKILLS = Object.freeze({
  "\u529B\u91CF": ["\u8FD0\u52A8"],
  "\u654F\u6377": ["\u4F53\u64CD", "\u5DE7\u624B", "\u9690\u533F"],
  "\u667A\u529B": ["\u5965\u79D8", "\u5386\u53F2", "\u8C03\u67E5", "\u81EA\u7136", "\u5B97\u6559"],
  "\u611F\u77E5": ["\u9A6F\u517D", "\u6D1E\u6089", "\u533B\u7597", "\u5BDF\u89C9", "\u751F\u5B58"],
  "\u9B45\u529B": ["\u6B3A\u7792", "\u5A01\u5413", "\u8868\u6F14", "\u8BF4\u670D"]
});
var _SKILL2PROP = (() => {
  const ret = {};
  Object.keys(_PROP2SKILLS).forEach((prop) => {
    const skills = _PROP2SKILLS[prop];
    skills.forEach((skill) => {
      ret[skill] = prop;
    });
  });
  return ret;
})();
function getPropOfSkill(skill) {
  return _SKILL2PROP[skill];
}
var _SKILL_ALIAS2 = Object.freeze([
  ["\u529B\u91CF", "STR"],
  ["\u654F\u6377", "DEX"],
  ["\u4F53\u8D28", "CON"],
  ["\u667A\u529B", "INT"],
  ["\u611F\u77E5", "WIS"],
  ["\u9B45\u529B", "CHA"],
  ["EXP", "XP", "\u7ECF\u9A8C", "\u7ECF\u9A8C\u503C"],
  ["LV", "LEVEL", "\u7B49\u7EA7"],
  ["\u751F\u547D", "HP", "\u751F\u547D\u503C"],
  ["\u751F\u547D\u4E0A\u9650", "MAXHP", "HPMAX", "\u751F\u547D\u503C\u4E0A\u9650"],
  ["AC", "\u62A4\u7532"],
  ["\u94DC\u5E01", "CP"],
  ["\u94F6\u5E01", "SP"],
  ["\u91D1\u5E01", "GP"],
  ["\u94F6\u91D1\u5E01", "EP"],
  ["\u94C2\u91D1\u5E01", "PP"],
  ["\u8BF4\u670D", "\u6E38\u8BF4"],
  ["\u533B\u7597", "\u533B\u836F"],
  ["\u751F\u5B58", "\u6C42\u751F"],
  ["\u4F53\u64CD", "\u7279\u6280"]
]);
var SKILL_ALIAS2 = _SKILL_ALIAS2.map((line) => line.reduce((obj, str) => Object.assign(obj, { [str]: line }), {})).reduce((total, obj) => Object.assign(total, obj), {});
function parseInput(expression) {
  let type = "none";
  if (expression.endsWith("\u8C03\u6574") || expression.endsWith("\u8C03\u6574\u503C") || expression.endsWith("\u4FEE\u6B63") || expression.endsWith("\u4FEE\u6B63\u503C")) {
    type = "modifier";
  } else if (expression.endsWith("\u8C41\u514D")) {
    type = "saving";
  }
  expression = expression.replace(/(调整值|调整|修正值|修正|豁免)$/g, "");
  return [expression.trim(), type];
}
function calculatePropModifier(value) {
  return Math.floor(value / 2) - 5;
}
function clamp2(num, min, max) {
  return Math.min(Math.max(num, min), max);
}

// ../../packages/card/src/index.ts
function createCard(data) {
  switch (data.type) {
    case "coc":
      return new CocCard(data);
    case "dnd":
      return new DndCard(data);
    case "general":
      return new GeneralCard(data);
    default:
      throw new Error("Invalid card type!");
  }
}

// ../../packages/dicecore/src/card/card-linker.ts
var DefaultCardLinker = class {
  channelLinkMap;
  constructor(map = {}) {
    this.channelLinkMap = map;
  }
  getLinkMap(channelUnionId) {
    if (!this.channelLinkMap[channelUnionId]) {
      this.channelLinkMap[channelUnionId] = {};
    }
    return this.channelLinkMap[channelUnionId];
  }
  linkCard(channelUnionId, cardId, userId) {
    const linkMap = this.getLinkMap(channelUnionId);
    const user2delete = Object.keys(linkMap).find((userId2) => linkMap[userId2] === cardId);
    if (user2delete) {
      delete linkMap[user2delete];
    }
    if (userId) {
      linkMap[userId] = cardId;
    }
    eventBus.emit("card-link-change", {
      channelUnionId,
      cardId,
      oldUserId: user2delete,
      userId
    });
  }
  deleteCard(cardId) {
    Object.keys(this.channelLinkMap).forEach((channelUnionId) => {
      const linkMap = this.channelLinkMap[channelUnionId];
      const user2delete = Object.keys(linkMap).find((uid) => linkMap[uid] === cardId);
      if (user2delete) {
        delete linkMap[user2delete];
        eventBus.emit("card-link-change", {
          channelUnionId,
          cardId,
          oldUserId: user2delete,
          userId: void 0
        });
      }
    });
  }
};

// ../../packages/dicecore/src/card/card-provider.ts
var CardProvider = class _CardProvider {
  static INSTANCE = new _CardProvider();
  cardMap = /* @__PURE__ */ new Map();
  _linker;
  constructor() {
  }
  get linker() {
    if (!this._linker) {
      this._linker = new DefaultCardLinker();
    }
    return this._linker;
  }
  // 允许外部整体替换整个数据结构
  setLinker(linker) {
    this._linker = linker;
  }
  registerCard(id, card) {
    const oldCard = this.cardMap.get(id);
    oldCard?.removeCardEntryChangeListener();
    const newCard = createCard(card);
    newCard.addCardEntryChangeListener((e) => eventBus.emit("card-entry-change", e));
    this.cardMap.set(id, newCard);
  }
  unregisterCard(id) {
    const oldCard = this.cardMap.get(id);
    if (oldCard) {
      oldCard.removeCardEntryChangeListener();
      this.cardMap.delete(id);
    }
    this.linker.deleteCard(id);
  }
  getCardById(id) {
    return this.cardMap.get(id);
  }
  getLinkMap(channelUnionId) {
    return this.linker.getLinkMap(channelUnionId);
  }
  getCard(channelUnionId, userId) {
    const linkMap = this.getLinkMap(channelUnionId);
    const cardId = linkMap[userId];
    return this.getCardById(cardId);
  }
  linkCard(channelUnionId, cardId, userId) {
    this.linker.linkCard(channelUnionId, cardId, userId);
  }
  // 根据条件查询人物卡
  queryCard(query = {}) {
    let list = Array.from(this.cardMap.values());
    if (typeof query.isTemplate === "boolean") {
      list = list.filter((data) => data.isTemplate === query.isTemplate);
    }
    if (Array.isArray(query.type)) {
      list = list.filter((data) => query.type.includes(data.type));
    }
    if (query.name) {
      const keyword = query.name.toLowerCase();
      list = list.filter((data) => data.name.toLowerCase().includes(keyword));
    }
    return list;
  }
};

// ../../packages/dicecore/src/dice/standard/inline.ts
import { DiceRoll as DiceRoll2 } from "@dice-roller/rpg-dice-roller";

// ../../packages/dicecore/src/dice/standard/index.ts
import { DiceRoll } from "@dice-roller/rpg-dice-roller";

// ../../packages/dicecore/src/dice/base.ts
import mitt3 from "mitt";

// ../../packages/dicecore/src/dice/utils/index.ts
function convertSuccessLevel2CustomTextKey(level) {
  switch (level) {
    case "\u5927\u5931\u8D25":
      return "test.worst";
    case "\u5927\u6210\u529F":
      return "test.best";
    case "\u5931\u8D25":
      return "test.fail";
    case "\u6781\u96BE\u6210\u529F":
      return "test.exsuccess";
    case "\u56F0\u96BE\u6210\u529F":
      return "test.hardsuccess";
    case "\u6210\u529F":
      return "test.success";
  }
}
function removeTrailingOneSpace(str) {
  if (str.endsWith(" ")) {
    return str.slice(0, str.length - 1);
  } else {
    return str;
  }
}
var AtUserPattern = /^<at id="(\d+)"\/>/;
var at = (userId) => `<at id="${userId}"/>`;

// ../../packages/dicecore/src/dice/base.ts
var BasePtDiceRoll = class {
  rawExpression;
  context;
  inlineRolls;
  // InlineDiceRoll[]
  get config() {
    return ConfigProvider.INSTANCE.getConfig(this.context.channelUnionId);
  }
  get selfCard() {
    return CardProvider.INSTANCE.getCard(this.context.channelUnionId, this.context.userId);
  }
  get defaultRoll() {
    return this.config.defaultRoll(this.selfCard);
  }
  get hasInlineRolls() {
    return this.inlineRolls.length > 0;
  }
  constructor(fullExp, context2, inlineRolls = []) {
    this.rawExpression = fullExp;
    this.context = context2;
    this.inlineRolls = inlineRolls;
  }
  // 应用副作用修改人物卡，返回被真正修改的人物卡列表
  applyToCard() {
    return [];
  }
  // 根据配置判断成功等级
  decide(context2) {
    return this.config.decideRoll(context2);
  }
  // 自定义文案格式化
  /*protected */
  t(key, args = {}) {
    return this.config.formatCustomText(key, { ...this._commonTArgs, ...args }, this);
  }
  // 自定义文案 - 检定结果字符串
  ts(level, args) {
    if (!level) return "";
    return this.t(convertSuccessLevel2CustomTextKey(level), args);
  }
  // 自定义文案 - 通用格式化参数
  get _commonTArgs() {
    return {
      \u7528\u6237\u540D: this.context.username,
      \u4EBA\u7269\u5361\u540D: this.selfCard?.name ?? this.context.username,
      at\u7528\u6237: this.context.userId === "system" ? this.context.username : at(this.context.userId)
    };
  }
  // 判断当前用户是否有对应级别的权限
  hasPermission(control) {
    const userRole = this.context.userRole;
    if (control === "none") {
      return false;
    } else if (control === "all") {
      return true;
    } else {
      return userRole !== "user";
    }
  }
  // region card actions
  linkCard(cardId, userId) {
    CardProvider.INSTANCE.linkCard(this.context.channelUnionId, cardId, userId);
  }
  queryCard(query = {}) {
    return CardProvider.INSTANCE.queryCard(query);
  }
  // endregion
  // region events
  emitter = mitt3();
  emitDiceRollEvent(type) {
    this.emitter.emit(type, this);
  }
  addDiceRollEventListener({ before, after }) {
    if (before) {
      this.emitter.on("BeforeDiceRoll", before);
    }
    if (after) {
      this.emitter.on("AfterDiceRoll", after);
    }
  }
  removeDiceRollEventListener({ before, after }) {
    if (before) {
      this.emitter.off("BeforeDiceRoll", before);
    }
    if (after) {
      this.emitter.off("AfterDiceRoll", after);
    }
  }
  // endregion
};

// ../../packages/dicecore/src/dice/utils/parseDescription.ts
var ParseFlags = Object.freeze({
  PARSE_EXP: 1,
  PARSE_TEMPVALUE: 2,
  PARSE_MODIFIEDVALUE: 4
});
var ParseFlagsAll = ParseFlags.PARSE_EXP | ParseFlags.PARSE_TEMPVALUE | ParseFlags.PARSE_MODIFIEDVALUE;
function parseDescriptions(rawExp, flag = ParseFlags.PARSE_EXP | ParseFlags.PARSE_TEMPVALUE) {
  let exp = "", desc = rawExp.trim(), tempValue = NaN;
  if (flag & ParseFlags.PARSE_EXP) {
    const index = desc.search(/[\p{Unified_Ideograph}\s]/u);
    const [_exp, _desc = ""] = index < 0 ? [desc] : [desc.slice(0, index), desc.slice(index)];
    exp = _exp;
    desc = _desc.trim();
  }
  if (flag & ParseFlags.PARSE_TEMPVALUE) {
    const index = desc.search(/(\d+)$/);
    const [_desc, _tempValue = ""] = index < 0 ? [desc] : [desc.slice(0, index), desc.slice(index)];
    desc = _desc.trim();
    tempValue = parseInt(_tempValue, 10);
  }
  return [exp, desc, tempValue];
}
function parseDescriptions2(rawExp, flag = ParseFlagsAll) {
  let exp = "", desc = rawExp.trim();
  if (flag & ParseFlags.PARSE_EXP) {
    const index = desc.search(/[\p{Unified_Ideograph}\s]/u);
    const [_exp, _desc = ""] = index < 0 ? [desc] : [desc.slice(0, index), desc.slice(index)];
    exp = _exp;
    desc = _desc.trim();
  }
  const regexParts = [
    /(?<skill>[^\d\s,，;；+-]+)?/,
    // 匹配 0-1 个技能名（仅临时值场景可以无技能名）
    flag & ParseFlags.PARSE_TEMPVALUE ? /(?<tempValue>\d+)?/ : void 0,
    // 匹配 0-1 个临时值
    flag & ParseFlags.PARSE_MODIFIEDVALUE ? /(?<modified>[+-]\s*\d+)?/ : void 0
    // 匹配调整值
  ];
  const regex = new RegExp(regexParts.filter((p) => !!p).map((p) => p.source).join("\\s*"), "g");
  const matchResult = [...desc.matchAll(regex)].map((entry) => entry.groups || {}).filter(({ skill, tempValue, modified }) => skill || tempValue || modified).map((groups) => {
    const skill = groups.skill || "";
    const tempValue = parseInt(groups.tempValue, 10);
    const modifiedValue = parseInt((groups.modified || "").replace(/\s+/g, ""));
    return { skill, tempValue, modifiedValue };
  });
  return { exp, skills: matchResult };
}

// ../../packages/dicecore/src/dice/standard/index.ts
var StandardDiceRoll = class extends BasePtDiceRoll {
  times = 1;
  hidden = false;
  quiet = false;
  vsFlag = false;
  isAlias = false;
  expression = "";
  // 当次请求检定的技能和临时值
  /*protected*/
  skillsForTest = [];
  // 掷骰描述
  get description() {
    return this.skillsForTest.map((item) => item.skill).join("\uFF0C");
  }
  // 掷骰结果
  rolls = [];
  /* final */
  roll() {
    this.parse();
    this.emitDiceRollEvent("BeforeDiceRoll");
    this.doRoll();
    this.emitDiceRollEvent("AfterDiceRoll");
    return this;
  }
  doRoll() {
    for (let i = 0; i < this.times; i++) {
      const roll = new DiceRoll(this.expression);
      this.rolls.push({
        roll,
        tests: this.skillsForTest.map(({ skill, tempValue, modifiedValue }) => {
          let cardEntry;
          if (!isNaN(tempValue)) {
            cardEntry = { input: skill, key: skill, value: tempValue, isTemp: true };
          } else {
            cardEntry = this.selfCard?.getEntry(skill);
          }
          let targetValue;
          let result;
          if (cardEntry) {
            targetValue = cardEntry.value + (modifiedValue || 0);
            result = this.decide({ baseValue: cardEntry.value, targetValue, roll: roll.total });
          }
          return { skill, targetValue, cardEntry, result };
        })
      });
    }
  }
  // 解析指令，最终结果存入 this.expression
  parse() {
    const removeAlias = this.parseAlias(this.rawExpression).trim();
    const removeR = removeAlias.startsWith("r") ? removeAlias.slice(1).trim() : removeAlias;
    const removeFlags = this.parseFlags(removeR).trim();
    this.parseDescriptions(removeFlags);
    this.detectDefaultRoll();
    console.log("[Dice] \u539F\u59CB\u6307\u4EE4", this.rawExpression, "|\u89E3\u6790\u6307\u4EE4", this.expression, "|\u63CF\u8FF0", JSON.stringify(this.skillsForTest), "|\u6697\u9AB0", this.hidden, "|\u7701\u7565", this.quiet, "|\u5BF9\u6297", this.vsFlag, "|\u6B21\u6570", this.times);
  }
  // 解析别名指令
  parseAlias(expression) {
    const parsed = this.config.parseAliasRoll_expression(expression, this.context, this.inlineRolls);
    if (parsed && expression !== parsed.expression) {
      this.isAlias = true;
      this.expression = parsed.expression;
      return parsed.rest;
    }
    return expression;
  }
  parseFlags(expression) {
    const match = expression.match(/^(h|q|v|x\d+|\s)*/);
    if (match) {
      const flags = match[0];
      if (flags.includes("h")) this.hidden = true;
      if (flags.includes("q")) this.quiet = true;
      if (flags.includes("v")) this.vsFlag = true;
      const timesMatch = flags.match(/x(\d+)/);
      if (timesMatch) {
        const times = parseInt(timesMatch[1], 10);
        this.times = Math.max(1, Math.min(100, times));
      }
      return expression.slice(flags.length);
    }
    return expression;
  }
  parseDescriptions(expression) {
    if (this.isAlias) {
      const { skills: skills2 } = parseDescriptions2(expression, ParseFlagsAll ^ ParseFlags.PARSE_EXP);
      this.skillsForTest.push(...skills2);
      return;
    }
    const { exp, skills } = parseDescriptions2(expression);
    if (!exp && skills.length === 1 && isNaN(skills[0].tempValue) && isNaN(skills[0].modifiedValue)) {
      const ability = this.selfCard?.getAbility(skills[0].skill);
      if (ability) {
        this.expression = parseTemplate(ability.value, this.context, this.inlineRolls);
        this.skillsForTest.push(skills[0]);
        return;
      }
    }
    this.expression = exp;
    this.skillsForTest.push(...skills);
  }
  detectDefaultRoll() {
    if (this.expression === "" || this.expression === "d") {
      this.expression = this.defaultRoll;
    }
  }
  get output() {
    const headLine = this.t("roll.start", this.getRollStartArgs());
    const inlineRollLines = [];
    if (this.hasInlineRolls && !this.quiet) {
      const inlineLines = this.inlineRolls.map((roll, i) => {
        return this.t(i === 0 ? "roll.inline.first" : "roll.inline.middle") + roll.output;
      });
      inlineRollLines.push(...inlineLines, this.t("roll.inline.last"));
    }
    const rollLines = this.rolls.map((rollResult) => {
      const roll = rollResult.roll;
      const lines2 = [this.t(this.quiet ? "roll.result.quiet" : "roll.result", this.getFormatArgs(roll))];
      if (rollResult.tests.length === 1) {
        const { tests: [test] } = rollResult;
        const testResult = this.ts(test.result?.level, this.getFormatArgs(roll, test));
        lines2[0] += testResult;
      } else {
        rollResult.tests.forEach((test) => {
          const testResult = this.ts(test.result?.level, this.getFormatArgs(roll, test));
          if (testResult) {
            lines2.push(`${test.skill} ${roll.total}${testResult}`);
          }
        });
      }
      return lines2;
    });
    const lines = [headLine, ...inlineRollLines];
    if (rollLines.length === 1) {
      const lastLine = lines[lines.length - 1];
      const [first, ...rest] = rollLines[0];
      lines[lines.length - 1] = `${removeTrailingOneSpace(lastLine)} ${first}`;
      lines.push(...rest);
    } else {
      lines.push(...rollLines.flat());
    }
    if (this.vsFlag && this.eligibleForOpposedRoll) {
      lines.push(this.t("roll.vs.prompt"));
    }
    return lines.map((line) => line.trim()).join("\n");
  }
  // 是否可基于此骰进行对抗检定
  get eligibleForOpposedRoll() {
    return false;
  }
  // roll.start 格式化参数
  getRollStartArgs() {
    const hasTest = this.rolls.some((roll) => roll.tests.some((test) => !!test.result));
    return {
      \u63CF\u8FF0: this.description,
      \u539F\u59CB\u6307\u4EE4: this.rawExpression,
      \u666E\u901A\u68C0\u5B9A: hasTest,
      \u666E\u901A\u63B7\u9AB0: !hasTest
    };
  }
  // 技能检定格式化可提供参数
  getFormatArgs(roll, test) {
    return {
      \u539F\u59CB\u6307\u4EE4: this.rawExpression,
      \u63CF\u8FF0: test?.skill,
      \u76EE\u6807\u503C: test?.targetValue,
      \u63B7\u9AB0\u7ED3\u679C: roll.total,
      \u63B7\u9AB0\u8868\u8FBE\u5F0F: roll.notation,
      \u63B7\u9AB0\u8F93\u51FA: roll.output
    };
  }
};

// ../../packages/dicecore/src/dice/standard/inline.ts
var InlineDiceRoll = class extends StandardDiceRoll {
  diceRoll = void 0;
  doRoll() {
    this.diceRoll = new DiceRoll2(this.expression);
  }
  get total() {
    return this.diceRoll.total;
  }
  get output() {
    const roll = this.diceRoll;
    return `${this.description.trim()} ${this.t(this.quiet ? "roll.result.quiet" : "roll.result", this.getFormatArgs(roll))}`.trim();
  }
  applyToCard() {
    return [];
  }
};

// ../../packages/dicecore/src/dice/utils/parseTemplate.ts
var ENTRY_REGEX = /\$\{(.*?)\}|\$([a-zA-Z\p{Unified_Ideograph}]+)/gu;
var INLINE_ROLL_REGEX = /\[\[([^[\]]+)]]/;
var HISTORY_ROLL_REGEX = /\$(\d+)/g;
function parseTemplate(expression, context2, history, source, depth = 0) {
  debug(depth, "\u89E3\u6790\u539F\u59CB\u8868\u8FBE\u5F0F:", expression);
  if (depth > 99) throw new Error("stackoverflow in parseTemplate!!");
  const config = ConfigProvider.INSTANCE.getConfig(context2.channelUnionId);
  if (source !== "message_template") {
    const diceCommand = { command: expression, context: context2 };
    config.hook_beforeParseDiceRoll(diceCommand);
    expression = diceCommand.command;
  }
  const selfCard = CardProvider.INSTANCE.getCard(context2.channelUnionId, context2.userId);
  const getEntry = (key) => selfCard?.getEntry(key)?.value ?? "";
  const getAbility = (key) => selfCard?.getAbility(key)?.value ?? "";
  expression = expression.replace(ENTRY_REGEX, (_2, key1, key2) => {
    const key = key1 ?? key2 ?? "";
    const abilityExpression = getAbility(key);
    if (abilityExpression) {
      debug(depth, "\u9012\u5F52\u89E3\u6790 ability:", key, "=", abilityExpression);
      const parsedAbility = parseTemplate(abilityExpression, context2, history, void 0, depth + 1);
      const dice = new InlineDiceRoll(`${parsedAbility.trim()} ${key}`, context2).roll();
      debug(depth, "\u6C42\u503C ability:", dice.total);
      history.push(dice);
      return dice.hidden ? "" : String(dice.total);
    }
    const skillValue = getEntry(key);
    debug(depth, "\u89E3\u6790 attribute:", key, "=", skillValue);
    return String(skillValue ?? "");
  });
  const thisLevelInlineRolls = [];
  while (INLINE_ROLL_REGEX.test(expression)) {
    expression = expression.replace(INLINE_ROLL_REGEX, (_2, notation) => {
      debug(depth, "\u5FAA\u73AF\u89E3\u6790 inline:", notation);
      notation = notation.replace(HISTORY_ROLL_REGEX, (_3, index) => {
        const historyRoll = thisLevelInlineRolls[Number(index) - 1];
        const result = historyRoll ? String(historyRoll.total) : "";
        debug(depth, `\u66FF\u6362 $${index} =`, result);
        return result;
      });
      const dice = new InlineDiceRoll(notation.trim(), context2).roll();
      debug(depth, "\u6C42\u503C inline:", dice.total);
      history.push(dice);
      thisLevelInlineRolls.push(dice);
      return dice.hidden ? "" : String(dice.total);
    });
  }
  expression = expression.replace(HISTORY_ROLL_REGEX, (_2, index) => {
    const historyRoll = thisLevelInlineRolls[Number(index) - 1];
    const result = historyRoll ? String(historyRoll.total) : "";
    debug(depth, `\u66FF\u6362 $${index} =`, result);
    return result;
  });
  debug(depth, "\u89E3\u6790\u7ED3\u679C:", expression);
  return expression;
}
function debug(depth, tag, ...args) {
  const indent = new Array(depth).fill("__").join("");
  console.log(indent + tag, ...args);
}

// ../../packages/dicecore/src/config/helpers/alias.ts
var NaiveCommandCache = new SyncLruCache({
  max: 50,
  fetchMethod: (expression) => {
    const defaultValues = {};
    const parsed = expression.replace(/\{\{\s*([^{}]*)\s*\}\}/g, (_2, key) => {
      const [_name, _defaultValue = ""] = key.split("=");
      const name = _name.trim();
      defaultValues[name] = parseInt(_defaultValue.trim(), 10) || 1;
      return `(?<${name}>\\d*)`;
    });
    return { regex: new RegExp(`^${parsed}`), defaultValues };
  }
});
var StringReplacerCache = new SyncLruCache({
  max: 50,
  fetchMethod: (expression) => {
    const [paramsList, funcBody] = expression.split("|");
    const templateString = funcBody.replace(/\{\{\s*([^{}]*)\s*\}\}/g, "${$1}");
    return new Function("context", `"use strict"; const {${paramsList}} = context; return \`${templateString}\``);
  }
});
var RegexCommandCache = new SyncLruCache({
  max: 50,
  fetchMethod: (expression) => new RegExp(`^${expression}`)
});
function parseAliasForExpression(processors, expression, context2, inlineRolls, depth = 0) {
  if (depth > 99) throw new Error("\u522B\u540D\u6307\u4EE4\u5D4C\u5957\u8FC7\u6DF1\uFF0C\u53EF\u80FD\u89E6\u53D1\u6B7B\u5FAA\u73AF\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684\u522B\u540D\u6307\u4EE4\u914D\u7F6E\uFF01");
  for (const config of processors) {
    if (!config.command) continue;
    if (config.scope !== "expression") continue;
    let match = null;
    let replacement = void 0;
    if (config.trigger === "naive") {
      const naiveParsedCommand = NaiveCommandCache.get(config.command);
      if (!naiveParsedCommand) continue;
      const regex = naiveParsedCommand.regex;
      match = expression.match(regex);
      if (!match) continue;
      const paramsList = Object.keys(naiveParsedCommand.defaultValues).join(",");
      const userParams = combineReplaceParams(match.groups, naiveParsedCommand.defaultValues);
      const replacer = StringReplacerCache.get(`${paramsList}|${config.replacer}`);
      try {
        replacement = replacer?.(userParams);
      } catch (e) {
        console.error("[Config] \u89E3\u6790\u522B\u540D\u6307\u4EE4\u5931\u8D25", e?.message, "command=", config.command);
      }
    } else {
      const regex = RegexCommandCache.get(config.command);
      if (!regex) continue;
      match = expression.match(regex);
      if (!match) continue;
      try {
        replacement = config.replacer(match);
      } catch (e) {
        console.error("[Config] \u89E3\u6790\u522B\u540D\u6307\u4EE4\u5931\u8D25", e?.message, "command=", config.command);
      }
    }
    if (!replacement) break;
    console.log("[Dice] \u89E3\u6790\u522B\u540D:", match[0], "=", replacement);
    const parsed = parseTemplate(replacement, context2, inlineRolls);
    return {
      expression: parseAliasForExpression(processors, parsed, context2, inlineRolls, depth + 1).expression,
      rest: expression.slice(match[0].length)
    };
  }
  return { expression, rest: "" };
}
function combineReplaceParams(matchGroup, defaultValues = {}) {
  if (!matchGroup) return defaultValues;
  const userParams = Object.keys(matchGroup).reduce((obj, varname) => {
    const value = parseInt(matchGroup[varname], 10);
    return isNaN(value) ? obj : Object.assign(obj, { [varname]: value });
  }, {});
  return { ...defaultValues, ...userParams };
}

// ../../packages/dicecore/src/version.ts
var VERSION_CODE2 = 41;

// ../../packages/dicecore/src/config/default.ts
var embedPluginId = "io.paotuan.embed";
function getInitialDefaultConfig() {
  const customReplies = getEmbedCustomReply();
  const aliasRolls = getEmbedAliasRoll();
  const rollDeciders = getEmbedRollDecider();
  const customText = getEmbedCustomText();
  const customReplyPlugins = [
    "io.paotuan.plugin.namegen.name",
    "io.paotuan.plugin.insane.ti",
    "io.paotuan.plugin.insane.li",
    "io.paotuan.plugin.cardgen.coc",
    "io.paotuan.plugin.cardgen.dnd",
    "io.paotuan.plugin.draw.draw"
  ];
  return {
    version: VERSION_CODE2,
    botOwner: null,
    defaultRoll: { expression: "d100", preferCard: true },
    specialDice: getSpecialDiceConfig(),
    customReplyIds: customReplies.map((item) => ({ id: `${embedPluginId}.${item.id}`, enabled: true })).concat(customReplyPlugins.map((id) => ({ id, enabled: true }))),
    aliasRollIds: aliasRolls.map((item) => ({ id: `${embedPluginId}.${item.id}`, enabled: true })),
    rollDeciderId: `${embedPluginId}.${rollDeciders[0].id}`,
    rollDeciderIds: rollDeciders.map((item) => `${embedPluginId}.${item.id}`),
    customTextIds: [],
    hookIds: {
      onReceiveCommand: [],
      beforeParseDiceRoll: [],
      onCardEntryChange: [],
      onMessageReaction: [],
      beforeDiceRoll: [],
      afterDiceRoll: []
    },
    embedPlugin: {
      id: embedPluginId,
      customReply: customReplies,
      aliasRoll: aliasRolls,
      rollDecider: rollDeciders,
      customText: [customText]
      // embed 默认只有一份
    },
    plugins: [],
    lastModified: 0
  };
}
function getEmbedCustomReply() {
  return [
    {
      id: "jrrp",
      name: "\u4ECA\u65E5\u8FD0\u52BF",
      description: "\u4F7F\u7528 /jrrp \u67E5\u8BE2\u4ECA\u65E5\u8FD0\u52BF",
      command: "jrrp",
      trigger: "exact",
      items: [
        {
          weight: 1,
          reply: "{{at}}\u4ECA\u5929\u7684\u5E78\u8FD0\u6307\u6570\u662F [[d100]] !"
        }
      ]
    },
    {
      id: "gacha",
      name: "\u7B80\u5355\u62BD\u5361",
      description: "\u4F7F\u7528\u4E0D\u540C\u6743\u91CD\u8FDB\u884C\u62BD\u5361\u7684\u4F8B\u5B50",
      command: "\u62BD\u5361",
      trigger: "exact",
      items: [
        {
          weight: 2,
          reply: "{{at}}\u62BD\u5230\u4E86 \u2605\u2605\u2605\u2605\u2605\u2605"
        },
        {
          weight: 8,
          reply: "{{at}}\u62BD\u5230\u4E86 \u2605\u2605\u2605\u2605\u2605"
        },
        {
          weight: 48,
          reply: "{{at}}\u62BD\u5230\u4E86 \u2605\u2605\u2605\u2605"
        },
        {
          weight: 42,
          reply: "{{at}}\u62BD\u5230\u4E86 \u2605\u2605\u2605"
        }
      ]
    },
    {
      id: "fudu",
      name: "\u590D\u8BFB\u673A",
      description: "\u4F7F\u7528\u6B63\u5219\u5339\u914D\u7684\u4F8B\u5B50",
      command: "\u590D\u8BFB\\s*(?<content>.+)",
      trigger: "regex",
      items: [
        {
          weight: 1,
          reply: "{{content}}"
        }
      ]
    },
    {
      id: "help",
      name: "\u5E2E\u52A9\u6587\u6863",
      description: "\u4F7F\u7528 /help \u67E5\u770B\u5E2E\u52A9\u6587\u6863\u5730\u5740",
      command: "help",
      trigger: "exact",
      items: [
        {
          weight: 1,
          reply: "\u8DD1\u56E2IO\u673A\u5668\u4EBA {{version}}\n\u6307\u4EE4\u6587\u6863\u8BF7\u79FB\u6B65\u7F51\u5740: paotuan[\u70B9]io/dice"
        }
      ]
    }
  ];
}
function getEmbedAliasRoll() {
  return [
    {
      id: "ra",
      name: "ra",
      description: "\u517C\u5BB9\u6307\u4EE4\uFF0C\u7B49\u4EF7\u4E8E d%",
      scope: "expression",
      command: "ra",
      trigger: "naive",
      replacer: "d%"
    },
    {
      id: "rc",
      name: "rc",
      description: "\u517C\u5BB9\u6307\u4EE4\uFF0C\u7B49\u4EF7\u4E8E d%",
      scope: "expression",
      command: "rc",
      trigger: "naive",
      replacer: "d%"
    },
    {
      id: "rb",
      name: "\u5956\u52B1\u9AB0\uFF08rb\uFF09",
      description: "rb - \u4E00\u4E2A\u5956\u52B1\u9AB0\uFF0CrbX - X\u4E2A\u5956\u52B1\u9AB0",
      scope: "expression",
      command: "rb{{X}}",
      trigger: "naive",
      replacer: "{{X+1}}d%kl1"
    },
    {
      id: "rp",
      name: "\u60E9\u7F5A\u9AB0\uFF08rp\uFF09",
      description: "rp - \u4E00\u4E2A\u60E9\u7F5A\u9AB0\uFF0CrpX - X\u4E2A\u60E9\u7F5A\u9AB0",
      scope: "expression",
      command: "rp{{X}}",
      trigger: "naive",
      replacer: "{{X+1}}d%kh1"
      // new Function 吧，只解析 {{}} 内部的部分，防止外部的内容也被当成代码
    },
    // {
    //   id: 'advantage',
    //   name: '优势',
    //   description: 'DND 优势掷骰',
    //   scope: 'command',
    //   command: '优势',
    //   trigger: 'startWith',
    //   replacer: '2d20kh1'
    // },
    // {
    //   id: 'disadvantage',
    //   name: '劣势',
    //   description: 'DND 劣势掷骰',
    //   scope: 'command',
    //   command: '劣势',
    //   trigger: 'startWith',
    //   replacer: '2d20kl1'
    // },
    {
      id: "wwa",
      name: "\u9AB0\u6C60\uFF08wwXaY\uFF09",
      description: "\u6295 X \u4E2A d10\uFF0C\u6BCF\u6709\u4E00\u4E2A\u9AB0\u5B50 \u2265 Y\uFF0C\u5219\u53EF\u591A\u6295\u4E00\u6B21\u3002\u6700\u540E\u8BA1\u7B97\u70B9\u6570 \u2265 8 \u7684\u9AB0\u5B50\u6570",
      scope: "expression",
      command: "ww{{X}}a{{Y=10}}",
      trigger: "naive",
      replacer: "{{X}}d10!>={{Y}}>=8"
    },
    {
      id: "ww",
      name: "\u9AB0\u6C60\uFF08wwX\uFF09",
      description: "\u9AB0\u6C60\uFF08wwXaY\uFF09\u7684\u7B80\u5199\uFF0C\u9ED8\u8BA4 Y=10",
      scope: "expression",
      command: "ww{{X}}",
      trigger: "naive",
      replacer: "ww{{X}}a10"
    }
  ];
}
function getEmbedRollDecider() {
  return [
    {
      id: "coc0",
      name: "COC \u9ED8\u8BA4\u89C4\u5219",
      description: "\u51FA 1 \u5927\u6210\u529F\uFF1B\u4E0D\u6EE1 50 \u51FA 96-100 \u5927\u5931\u8D25\uFF0C\u6EE1 50 \u51FA 100 \u5927\u5931\u8D25",
      rules: [
        { level: "\u5927\u5931\u8D25", expression: "(targetValue < 50 && roll > 95) || (targetValue >= 50 && roll == 100)" },
        { level: "\u5927\u6210\u529F", expression: "roll == 1" },
        { level: "\u5931\u8D25", expression: "roll > targetValue" },
        { level: "\u6781\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 5" },
        { level: "\u56F0\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 2" },
        { level: "\u6210\u529F", expression: "roll <= targetValue" }
      ]
    },
    {
      id: "dnd0",
      name: "DND \u9ED8\u8BA4\u89C4\u5219",
      description: "\u5927\u4E8E\u7B49\u4E8E DC \u6210\u529F\uFF0C\u5C0F\u4E8E DC \u5931\u8D25",
      rules: [
        { level: "\u5931\u8D25", expression: "roll < targetValue" },
        { level: "\u6210\u529F", expression: "roll >= targetValue" }
      ]
    },
    {
      id: "coc1",
      name: "COC \u89C4\u5219 1",
      description: "\u4E0D\u6EE1 50 \u51FA 1 \u5927\u6210\u529F\uFF0C\u6EE1 50 \u51FA 1-5 \u5927\u6210\u529F\uFF1B\u4E0D\u6EE1 50 \u51FA 96-100 \u5927\u5931\u8D25\uFF0C\u6EE1 50 \u51FA 100 \u5927\u5931\u8D25",
      rules: [
        { level: "\u5927\u5931\u8D25", expression: "(targetValue < 50 && roll > 95) || (targetValue >= 50 && roll == 100)" },
        { level: "\u5927\u6210\u529F", expression: "(targetValue < 50 && roll == 1) || (targetValue >= 50 && roll <= 5)" },
        { level: "\u5931\u8D25", expression: "roll > targetValue" },
        { level: "\u6781\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 5" },
        { level: "\u56F0\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 2" },
        { level: "\u6210\u529F", expression: "roll <= targetValue" }
      ]
    },
    {
      id: "coc2",
      name: "COC \u89C4\u5219 2",
      description: "\u51FA 1-5 \u4E14 \u2264 \u6210\u529F\u7387\u5927\u6210\u529F\uFF1B\u51FA 100 \u6216\u51FA 96-99 \u4E14 > \u6210\u529F\u7387\u5927\u5931\u8D25",
      rules: [
        { level: "\u5927\u5931\u8D25", expression: "roll == 100 || (roll > 95 && roll > targetValue)" },
        { level: "\u5927\u6210\u529F", expression: "roll <= 5 && roll <= targetValue" },
        { level: "\u5931\u8D25", expression: "roll > targetValue" },
        { level: "\u6781\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 5" },
        { level: "\u56F0\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 2" },
        { level: "\u6210\u529F", expression: "roll <= targetValue" }
      ]
    },
    {
      id: "coc3",
      name: "COC \u89C4\u5219 3",
      description: "\u51FA 1-5 \u5927\u6210\u529F\uFF1B\u51FA 96-100 \u5927\u5931\u8D25",
      rules: [
        { level: "\u5927\u5931\u8D25", expression: "roll > 95" },
        { level: "\u5927\u6210\u529F", expression: "roll <= 5" },
        { level: "\u5931\u8D25", expression: "roll > targetValue" },
        { level: "\u6781\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 5" },
        { level: "\u56F0\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 2" },
        { level: "\u6210\u529F", expression: "roll <= targetValue" }
      ]
    },
    {
      id: "coc4",
      name: "COC \u89C4\u5219 4",
      description: "\u51FA 1-5 \u4E14 \u2264 \u6210\u529F\u7387/10 \u5927\u6210\u529F\uFF1B\u4E0D\u6EE1 50 \u51FA \u2265 96+\u6210\u529F\u7387/10 \u5927\u5931\u8D25\uFF0C\u6EE1 50 \u51FA 100 \u5927\u5931\u8D25",
      rules: [
        { level: "\u5927\u5931\u8D25", expression: "(targetValue < 50 && roll >= 96 + targetValue / 10) || (targetValue >= 50 && roll == 100)" },
        { level: "\u5927\u6210\u529F", expression: "roll <= 5 && roll <= targetValue / 10" },
        { level: "\u5931\u8D25", expression: "roll > targetValue" },
        { level: "\u6781\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 5" },
        { level: "\u56F0\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 2" },
        { level: "\u6210\u529F", expression: "roll <= targetValue" }
      ]
    },
    {
      id: "coc5",
      name: "COC \u89C4\u5219 5",
      description: "\u51FA 1-2 \u4E14 < \u6210\u529F\u7387/5 \u5927\u6210\u529F\uFF1B\u4E0D\u6EE1 50 \u51FA 96-100 \u5927\u5931\u8D25\uFF0C\u6EE1 50 \u51FA 99-100 \u5927\u5931\u8D25",
      rules: [
        { level: "\u5927\u5931\u8D25", expression: "(targetValue < 50 && roll >= 96) || (targetValue >= 50 && roll >= 99)" },
        { level: "\u5927\u6210\u529F", expression: "roll <= 2 && roll < targetValue / 5" },
        { level: "\u5931\u8D25", expression: "roll > targetValue" },
        { level: "\u6781\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 5" },
        { level: "\u56F0\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 2" },
        { level: "\u6210\u529F", expression: "roll <= targetValue" }
      ]
    },
    {
      id: "deltagreen",
      name: "\u7EFF\u8272\u4E09\u89D2\u6D32\u89C4\u5219",
      description: "\u51FA 1\uFF0C\u6216\u4E2A\u4F4D\u6570 = \u5341\u4F4D\u6570\u4E14 \u2264 \u6210\u529F\u7387\u5219\u5927\u6210\u529F\uFF1B\u51FA 100\uFF0C\u6216\u4E2A\u4F4D\u6570 = \u5341\u4F4D\u6570\u4E14 > \u6210\u529F\u7387\u5219\u5927\u5931\u8D25",
      rules: [
        { level: "\u5927\u5931\u8D25", expression: "roll == 100 || (roll % 11 == 0 && roll > targetValue)" },
        { level: "\u5927\u6210\u529F", expression: "roll == 1 || (roll % 11 == 0 && roll <= targetValue)" },
        { level: "\u5931\u8D25", expression: "roll > targetValue" },
        { level: "\u6781\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 5" },
        { level: "\u56F0\u96BE\u6210\u529F", expression: "roll <= targetValue && roll <= baseValue / 2" },
        { level: "\u6210\u529F", expression: "roll <= targetValue" }
      ]
    }
  ];
}
function getEmbedCustomText() {
  const s = (text) => [{ text, weight: 1 }];
  const texts = {
    "roll.start": s("{{\u7528\u6237\u540D}} \u{1F3B2} {{\u63CF\u8FF0}}"),
    "roll.inline.first": s("\u5148\u662F \u{1F3B2} "),
    "roll.inline.middle": s("\u7136\u540E \u{1F3B2} "),
    "roll.inline.last": s("\u6700\u540E \u{1F3B2} "),
    "roll.result": s("{{\u63B7\u9AB0\u8F93\u51FA}}"),
    "roll.result.quiet": s("{{\u63B7\u9AB0\u8868\u8FBE\u5F0F}} = {{\u63B7\u9AB0\u7ED3\u679C}}"),
    "roll.hidden": s("{{\u7528\u6237\u540D}} \u5728\u5E37\u5E55\u540E\u9762\u5077\u5077\u5730 \u{1F3B2} {{\u63CF\u8FF0}}\uFF0C\u731C\u731C\u7ED3\u679C\u662F\u4EC0\u4E48"),
    "test.worst": s(" \u5927\u5931\u8D25"),
    "test.best": s(" \u5927\u6210\u529F"),
    "test.fail": s(" / {{\u76EE\u6807\u503C}} \u5931\u8D25"),
    "test.exsuccess": s(" / {{\u76EE\u6807\u503C}} \u6210\u529F"),
    "test.hardsuccess": s(" / {{\u76EE\u6807\u503C}} \u6210\u529F"),
    "test.success": s(" / {{\u76EE\u6807\u503C}} \u6210\u529F"),
    "roll.vs.prompt": s("> \u56DE\u590D\u672C\u6761\u6D88\u606F\u4EE5\u8FDB\u884C\u5BF9\u6297"),
    "roll.vs.result": s("{{#\u80DC}}\u{1F7E9}{{/\u80DC}}{{#\u8D1F}}\u{1F7E5}{{/\u8D1F}}{{#\u5E73}}\u{1F7E8}{{/\u5E73}} {{\u7528\u6237\u540D}} {{\u63CF\u8FF0}}{{#coc}}({{\u6280\u80FD\u503C}}) {{\u6210\u529F\u7B49\u7EA7}}{{/coc}}{{#dnd}} {{\u63B7\u9AB0\u7ED3\u679C}}{{/dnd}} \u2194\uFE0F {{\u5BF9\u65B9\u7528\u6237\u540D}} {{\u5BF9\u65B9\u63CF\u8FF0}}{{#coc}}({{\u5BF9\u65B9\u6280\u80FD\u503C}}) {{\u5BF9\u65B9\u6210\u529F\u7B49\u7EA7}}{{/coc}}{{#dnd}} {{\u5BF9\u65B9\u63B7\u9AB0\u7ED3\u679C}}{{/dnd}} {{#\u5BF9\u65B9\u80DC}}\u{1F7E9}{{/\u5BF9\u65B9\u80DC}}{{#\u5BF9\u65B9\u8D1F}}\u{1F7E5}{{/\u5BF9\u65B9\u8D1F}}{{#\u5BF9\u65B9\u5E73}}\u{1F7E8}{{/\u5BF9\u65B9\u5E73}}"),
    "roll.ds.best": s(" \u8D77\u6B7B\u56DE\u751F\uFF0CHP+1"),
    "roll.ds.worst": s(" \u4E8C\u6B21\u5931\u8D25"),
    "roll.ds.tostable": s("\n\u6210\u529F\u4E09\u6B21\uFF0C\u4F24\u52BF\u7A33\u5B9A\u4E86"),
    "roll.ds.todeath": s("\n\u5931\u8D25\u4E09\u6B21\uFF0C\u53BB\u4E16\u4E86"),
    "roll.en.empty": s("{{\u7528\u6237\u540D}} \u5F53\u524D\u6682\u65E0\u53EF\u6210\u957F\u7684\u6280\u80FD\u6216\u4E0D\u652F\u6301\u6210\u957F"),
    "roll.en.list": s("{{\u7528\u6237\u540D}} \u5F53\u524D\u53EF\u6210\u957F\u7684\u6280\u80FD\uFF1A\n{{#\u6280\u80FD\u5217\u8868}}{{\u6280\u80FD\u540D}}{{^last}}\u3001{{/last}}{{/\u6280\u80FD\u5217\u8868}}"),
    "roll.en.extra": s("\n{{\u63CF\u8FF0}}\u53D8\u5316\uFF1A{{\u65E7\u503C}} \u2192 {{\u65B0\u503C}}"),
    "roll.en.mark": s("{{\u7528\u6237\u540D}} \u5DF2{{#\u6DFB\u52A0}}\u6DFB\u52A0{{/\u6DFB\u52A0}}{{^\u6DFB\u52A0}}\u79FB\u9664{{/\u6DFB\u52A0}}\u4EE5\u4E0B\u6280\u80FD\u6210\u957F\u6807\u8BB0\uFF1A\n{{#\u6280\u80FD\u5217\u8868}}{{\u6280\u80FD\u540D}}{{^last}}\u3001{{/last}}{{/\u6280\u80FD\u5217\u8868}}"),
    "roll.en.markclear": s("{{\u7528\u6237\u540D}} \u5DF2\u79FB\u9664\u6240\u6709\u7684\u6280\u80FD\u6210\u957F\u6807\u8BB0"),
    "roll.ri.unsupported": s("\u5F53\u524D\u573A\u666F\u4E0D\u652F\u6301\u5148\u653B\u5217\u8868"),
    "roll.ri.del": s("{{\u7528\u6237\u540D}} \u5220\u9664\u5148\u653B\uFF1A{{#\u4EBA\u7269\u5217\u8868}}{{\u4EBA\u7269\u540D}}{{^last}}\u3001{{/last}}{{/\u4EBA\u7269\u5217\u8868}}"),
    "roll.ri.clear": s("*\u5148\u653B\u5217\u8868\u5DF2\u6E05\u7A7A"),
    "roll.sc.unsupported": s(" \u2026\u2026\u672A\u6307\u5B9A\u7406\u667A\u503C\uFF0C\u6210\u529F\u4E86\u5417\uFF1F"),
    "roll.sc.extra": s("\n{{#\u63B7\u9AB0\u7ED3\u679C}}\u7406\u667A\u53D8\u5316\uFF1A{{\u65E7\u503C}} \u2192 {{\u65B0\u503C}}{{/\u63B7\u9AB0\u7ED3\u679C}}"),
    "card.empty": s("{{at\u7528\u6237}}\u6CA1\u6709\u5173\u8054\u4EBA\u7269\u5361"),
    "card.nopermission": s("{{\u7528\u6237\u540D}} \u6CA1\u6709\u64CD\u4F5C\u4EBA\u7269\u5361\u7684\u6743\u9650"),
    "roll.st.prompt": s("{{at\u7528\u6237}}\u8BF7\u6307\u5B9A\u60F3\u8981\u8BBE\u7F6E\u7684\u5C5E\u6027\u540D\u4E0E\u5C5E\u6027\u503C"),
    "roll.st.show": s("{{at\u7528\u6237}}({{\u4EBA\u7269\u5361\u540D}}):\n{{#\u6761\u76EE\u5217\u8868}}{{\u6761\u76EE}}{{^last}} {{/last}}{{/\u6761\u76EE\u5217\u8868}}"),
    "roll.st.set": s("{{at\u7528\u6237}}({{\u4EBA\u7269\u5361\u540D}}) \u8BBE\u7F6E:\n{{#\u6761\u76EE\u5217\u8868}}{{\u6761\u76EE}}{{^last}}\n{{/last}}{{/\u6761\u76EE\u5217\u8868}}"),
    "nn.show": s("{{at\u7528\u6237}}\u5F53\u524D{{#\u4EBA\u7269\u5361\u540D}}\u5DF2\u5173\u8054\u4EBA\u7269\u5361\uFF1A{{\u4EBA\u7269\u5361\u540D}}{{/\u4EBA\u7269\u5361\u540D}}{{^\u4EBA\u7269\u5361\u540D}}\u672A\u5173\u8054\u4EBA\u7269\u5361{{/\u4EBA\u7269\u5361\u540D}}"),
    "nn.link": s("{{at\u7528\u6237}}\u5DF2\u5173\u8054\u4EBA\u7269\u5361\uFF1A{{\u4EBA\u7269\u5361\u540D}}"),
    "nn.clear": s("{{at\u7528\u6237}}\u5DF2\u53D6\u6D88\u5173\u8054\u4EBA\u7269\u5361"),
    "nn.search": s("{{at\u7528\u6237}}\u8BF7\u9009\u62E9\u60F3\u8981\u5173\u8054\u7684\u4EBA\u7269\u5361\uFF1A\n{{#\u4EBA\u7269\u5361\u5217\u8868}}{{\u4EBA\u7269\u5361\u540D}}{{^last}}\n{{/last}}{{/\u4EBA\u7269\u5361\u5217\u8868}}\n{{^\u4EBA\u7269\u5361\u5217\u8868}}\u672A\u627E\u5230\u540D\u5B57\u5305\u542B{{\u5173\u952E\u8BCD}}\u7684\u4EBA\u7269\u5361{{/\u4EBA\u7269\u5361\u5217\u8868}}")
  };
  return { id: "default", name: "\u9ED8\u8BA4\u6587\u6848", texts };
}
function getSpecialDiceConfig() {
  return {
    enDice: { enabled: true },
    scDice: { enabled: true },
    riDice: { enabled: true, baseRoll: "d20" },
    stDice: { enabled: true, writable: "all" },
    dsDice: { enabled: true },
    nnDice: { enabled: true, writable: "all" },
    opposeDice: { enabled: true },
    inMessageDice: { enabled: true }
    // 暂不处理
  };
}

// ../../node_modules/mustache/mustache.mjs
var objectToString = Object.prototype.toString;
var isArray = Array.isArray || function isArrayPolyfill(object) {
  return objectToString.call(object) === "[object Array]";
};
function isFunction(object) {
  return typeof object === "function";
}
function typeStr(obj) {
  return isArray(obj) ? "array" : typeof obj;
}
function escapeRegExp(string) {
  return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function hasProperty(obj, propName) {
  return obj != null && typeof obj === "object" && propName in obj;
}
function primitiveHasOwnProperty(primitive, propName) {
  return primitive != null && typeof primitive !== "object" && primitive.hasOwnProperty && primitive.hasOwnProperty(propName);
}
var regExpTest = RegExp.prototype.test;
function testRegExp(re, string) {
  return regExpTest.call(re, string);
}
var nonSpaceRe = /\S/;
function isWhitespace(string) {
  return !testRegExp(nonSpaceRe, string);
}
var entityMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
  "`": "&#x60;",
  "=": "&#x3D;"
};
function escapeHtml(string) {
  return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
    return entityMap[s];
  });
}
var whiteRe = /\s*/;
var spaceRe = /\s+/;
var equalsRe = /\s*=/;
var curlyRe = /\s*\}/;
var tagRe = /#|\^|\/|>|\{|&|=|!/;
function parseTemplate2(template, tags) {
  if (!template)
    return [];
  var lineHasNonSpace = false;
  var sections = [];
  var tokens = [];
  var spaces = [];
  var hasTag = false;
  var nonSpace = false;
  var indentation = "";
  var tagIndex = 0;
  function stripSpace() {
    if (hasTag && !nonSpace) {
      while (spaces.length)
        delete tokens[spaces.pop()];
    } else {
      spaces = [];
    }
    hasTag = false;
    nonSpace = false;
  }
  var openingTagRe, closingTagRe, closingCurlyRe;
  function compileTags(tagsToCompile) {
    if (typeof tagsToCompile === "string")
      tagsToCompile = tagsToCompile.split(spaceRe, 2);
    if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
      throw new Error("Invalid tags: " + tagsToCompile);
    openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + "\\s*");
    closingTagRe = new RegExp("\\s*" + escapeRegExp(tagsToCompile[1]));
    closingCurlyRe = new RegExp("\\s*" + escapeRegExp("}" + tagsToCompile[1]));
  }
  compileTags(tags || mustache.tags);
  var scanner = new Scanner(template);
  var start, type, value, chr, token, openSection;
  while (!scanner.eos()) {
    start = scanner.pos;
    value = scanner.scanUntil(openingTagRe);
    if (value) {
      for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
        chr = value.charAt(i);
        if (isWhitespace(chr)) {
          spaces.push(tokens.length);
          indentation += chr;
        } else {
          nonSpace = true;
          lineHasNonSpace = true;
          indentation += " ";
        }
        tokens.push(["text", chr, start, start + 1]);
        start += 1;
        if (chr === "\n") {
          stripSpace();
          indentation = "";
          tagIndex = 0;
          lineHasNonSpace = false;
        }
      }
    }
    if (!scanner.scan(openingTagRe))
      break;
    hasTag = true;
    type = scanner.scan(tagRe) || "name";
    scanner.scan(whiteRe);
    if (type === "=") {
      value = scanner.scanUntil(equalsRe);
      scanner.scan(equalsRe);
      scanner.scanUntil(closingTagRe);
    } else if (type === "{") {
      value = scanner.scanUntil(closingCurlyRe);
      scanner.scan(curlyRe);
      scanner.scanUntil(closingTagRe);
      type = "&";
    } else {
      value = scanner.scanUntil(closingTagRe);
    }
    if (!scanner.scan(closingTagRe))
      throw new Error("Unclosed tag at " + scanner.pos);
    if (type == ">") {
      token = [type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace];
    } else {
      token = [type, value, start, scanner.pos];
    }
    tagIndex++;
    tokens.push(token);
    if (type === "#" || type === "^") {
      sections.push(token);
    } else if (type === "/") {
      openSection = sections.pop();
      if (!openSection)
        throw new Error('Unopened section "' + value + '" at ' + start);
      if (openSection[1] !== value)
        throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
    } else if (type === "name" || type === "{" || type === "&") {
      nonSpace = true;
    } else if (type === "=") {
      compileTags(value);
    }
  }
  stripSpace();
  openSection = sections.pop();
  if (openSection)
    throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
  return nestTokens(squashTokens(tokens));
}
function squashTokens(tokens) {
  var squashedTokens = [];
  var token, lastToken;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];
    if (token) {
      if (token[0] === "text" && lastToken && lastToken[0] === "text") {
        lastToken[1] += token[1];
        lastToken[3] = token[3];
      } else {
        squashedTokens.push(token);
        lastToken = token;
      }
    }
  }
  return squashedTokens;
}
function nestTokens(tokens) {
  var nestedTokens = [];
  var collector = nestedTokens;
  var sections = [];
  var token, section;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    token = tokens[i];
    switch (token[0]) {
      case "#":
      case "^":
        collector.push(token);
        sections.push(token);
        collector = token[4] = [];
        break;
      case "/":
        section = sections.pop();
        section[5] = token[2];
        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
        break;
      default:
        collector.push(token);
    }
  }
  return nestedTokens;
}
function Scanner(string) {
  this.string = string;
  this.tail = string;
  this.pos = 0;
}
Scanner.prototype.eos = function eos() {
  return this.tail === "";
};
Scanner.prototype.scan = function scan(re) {
  var match = this.tail.match(re);
  if (!match || match.index !== 0)
    return "";
  var string = match[0];
  this.tail = this.tail.substring(string.length);
  this.pos += string.length;
  return string;
};
Scanner.prototype.scanUntil = function scanUntil(re) {
  var index = this.tail.search(re), match;
  switch (index) {
    case -1:
      match = this.tail;
      this.tail = "";
      break;
    case 0:
      match = "";
      break;
    default:
      match = this.tail.substring(0, index);
      this.tail = this.tail.substring(index);
  }
  this.pos += match.length;
  return match;
};
function Context10(view, parentContext) {
  this.view = view;
  this.cache = { ".": this.view };
  this.parent = parentContext;
}
Context10.prototype.push = function push(view) {
  return new Context10(view, this);
};
Context10.prototype.lookup = function lookup2(name) {
  var cache = this.cache;
  var value;
  if (cache.hasOwnProperty(name)) {
    value = cache[name];
  } else {
    var context2 = this, intermediateValue, names, index, lookupHit = false;
    while (context2) {
      if (name.indexOf(".") > 0) {
        intermediateValue = context2.view;
        names = name.split(".");
        index = 0;
        while (intermediateValue != null && index < names.length) {
          if (index === names.length - 1)
            lookupHit = hasProperty(intermediateValue, names[index]) || primitiveHasOwnProperty(intermediateValue, names[index]);
          intermediateValue = intermediateValue[names[index++]];
        }
      } else {
        intermediateValue = context2.view[name];
        lookupHit = hasProperty(context2.view, name);
      }
      if (lookupHit) {
        value = intermediateValue;
        break;
      }
      context2 = context2.parent;
    }
    cache[name] = value;
  }
  if (isFunction(value))
    value = value.call(this.view);
  return value;
};
function Writer() {
  this.templateCache = {
    _cache: {},
    set: function set(key, value) {
      this._cache[key] = value;
    },
    get: function get(key) {
      return this._cache[key];
    },
    clear: function clear() {
      this._cache = {};
    }
  };
}
Writer.prototype.clearCache = function clearCache() {
  if (typeof this.templateCache !== "undefined") {
    this.templateCache.clear();
  }
};
Writer.prototype.parse = function parse(template, tags) {
  var cache = this.templateCache;
  var cacheKey = template + ":" + (tags || mustache.tags).join(":");
  var isCacheEnabled = typeof cache !== "undefined";
  var tokens = isCacheEnabled ? cache.get(cacheKey) : void 0;
  if (tokens == void 0) {
    tokens = parseTemplate2(template, tags);
    isCacheEnabled && cache.set(cacheKey, tokens);
  }
  return tokens;
};
Writer.prototype.render = function render(template, view, partials, config) {
  var tags = this.getConfigTags(config);
  var tokens = this.parse(template, tags);
  var context2 = view instanceof Context10 ? view : new Context10(view, void 0);
  return this.renderTokens(tokens, context2, partials, template, config);
};
Writer.prototype.renderTokens = function renderTokens(tokens, context2, partials, originalTemplate, config) {
  var buffer = "";
  var token, symbol, value;
  for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
    value = void 0;
    token = tokens[i];
    symbol = token[0];
    if (symbol === "#") value = this.renderSection(token, context2, partials, originalTemplate, config);
    else if (symbol === "^") value = this.renderInverted(token, context2, partials, originalTemplate, config);
    else if (symbol === ">") value = this.renderPartial(token, context2, partials, config);
    else if (symbol === "&") value = this.unescapedValue(token, context2);
    else if (symbol === "name") value = this.escapedValue(token, context2, config);
    else if (symbol === "text") value = this.rawValue(token);
    if (value !== void 0)
      buffer += value;
  }
  return buffer;
};
Writer.prototype.renderSection = function renderSection(token, context2, partials, originalTemplate, config) {
  var self2 = this;
  var buffer = "";
  var value = context2.lookup(token[1]);
  function subRender(template) {
    return self2.render(template, context2, partials, config);
  }
  if (!value) return;
  if (isArray(value)) {
    for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
      buffer += this.renderTokens(token[4], context2.push(value[j]), partials, originalTemplate, config);
    }
  } else if (typeof value === "object" || typeof value === "string" || typeof value === "number") {
    buffer += this.renderTokens(token[4], context2.push(value), partials, originalTemplate, config);
  } else if (isFunction(value)) {
    if (typeof originalTemplate !== "string")
      throw new Error("Cannot use higher-order sections without the original template");
    value = value.call(context2.view, originalTemplate.slice(token[3], token[5]), subRender);
    if (value != null)
      buffer += value;
  } else {
    buffer += this.renderTokens(token[4], context2, partials, originalTemplate, config);
  }
  return buffer;
};
Writer.prototype.renderInverted = function renderInverted(token, context2, partials, originalTemplate, config) {
  var value = context2.lookup(token[1]);
  if (!value || isArray(value) && value.length === 0)
    return this.renderTokens(token[4], context2, partials, originalTemplate, config);
};
Writer.prototype.indentPartial = function indentPartial(partial, indentation, lineHasNonSpace) {
  var filteredIndentation = indentation.replace(/[^ \t]/g, "");
  var partialByNl = partial.split("\n");
  for (var i = 0; i < partialByNl.length; i++) {
    if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
      partialByNl[i] = filteredIndentation + partialByNl[i];
    }
  }
  return partialByNl.join("\n");
};
Writer.prototype.renderPartial = function renderPartial(token, context2, partials, config) {
  if (!partials) return;
  var tags = this.getConfigTags(config);
  var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
  if (value != null) {
    var lineHasNonSpace = token[6];
    var tagIndex = token[5];
    var indentation = token[4];
    var indentedValue = value;
    if (tagIndex == 0 && indentation) {
      indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
    }
    var tokens = this.parse(indentedValue, tags);
    return this.renderTokens(tokens, context2, partials, indentedValue, config);
  }
};
Writer.prototype.unescapedValue = function unescapedValue(token, context2) {
  var value = context2.lookup(token[1]);
  if (value != null)
    return value;
};
Writer.prototype.escapedValue = function escapedValue(token, context2, config) {
  var escape = this.getConfigEscape(config) || mustache.escape;
  var value = context2.lookup(token[1]);
  if (value != null)
    return typeof value === "number" && escape === mustache.escape ? String(value) : escape(value);
};
Writer.prototype.rawValue = function rawValue(token) {
  return token[1];
};
Writer.prototype.getConfigTags = function getConfigTags(config) {
  if (isArray(config)) {
    return config;
  } else if (config && typeof config === "object") {
    return config.tags;
  } else {
    return void 0;
  }
};
Writer.prototype.getConfigEscape = function getConfigEscape(config) {
  if (config && typeof config === "object" && !isArray(config)) {
    return config.escape;
  } else {
    return void 0;
  }
};
var mustache = {
  name: "mustache.js",
  version: "4.2.0",
  tags: ["{{", "}}"],
  clearCache: void 0,
  escape: void 0,
  parse: void 0,
  render: void 0,
  Scanner: void 0,
  Context: void 0,
  Writer: void 0,
  /**
   * Allows a user to override the default caching strategy, by providing an
   * object with set, get and clear methods. This can also be used to disable
   * the cache by setting it to the literal `undefined`.
   */
  set templateCache(cache) {
    defaultWriter.templateCache = cache;
  },
  /**
   * Gets the default or overridden caching object from the default writer.
   */
  get templateCache() {
    return defaultWriter.templateCache;
  }
};
var defaultWriter = new Writer();
mustache.clearCache = function clearCache2() {
  return defaultWriter.clearCache();
};
mustache.parse = function parse2(template, tags) {
  return defaultWriter.parse(template, tags);
};
mustache.render = function render2(template, view, partials, config) {
  if (typeof template !== "string") {
    throw new TypeError('Invalid template! Template should be a "string" but "' + typeStr(template) + '" was given as the first argument for mustache#render(template, view, partials)');
  }
  return defaultWriter.render(template, view, partials, config);
};
mustache.escape = escapeHtml;
mustache.Scanner = Scanner;
mustache.Context = Context10;
mustache.Writer = Writer;
var mustache_default = mustache;

// ../../packages/dicecore/src/config/helpers/customText.ts
function renderCustomText(customTextMap, key, args, context2) {
  const processor = customTextMap[key];
  if (!processor) {
    console.error(`[Config] \u627E\u4E0D\u5230 ${key} \u7684\u81EA\u5B9A\u4E49\u6587\u6848`);
    return "";
  }
  if (typeof processor === "function") {
    try {
      return processor(args, context2);
    } catch (e) {
      console.error(`[Config] \u81EA\u5B9A\u4E49\u6587\u6848 ${key} \u5904\u7406\u51FA\u9519`, e?.message);
      return "";
    }
  } else {
    const replyItem = randomReplyItem(processor);
    let result = mustache_default.render(replyItem.text, args, void 0, { escape: (value) => value });
    const endIndex = result.indexOf("$end$");
    if (endIndex >= 0) {
      result = result.substring(0, endIndex);
    }
    return result;
  }
}
function randomReplyItem(items) {
  if (items.length === 1) return items[0];
  const totalWeight = items.map((item) => item.weight).reduce((a, b) => a + b, 0);
  let randomWeight = Math.random() * totalWeight;
  for (const item of items) {
    randomWeight -= item.weight;
    if (randomWeight < 0) {
      return item;
    }
  }
  return items[items.length - 1];
}

// ../../packages/dicecore/src/config/helpers/aliasCommand.ts
var RegexCommandCache2 = new SyncLruCache({
  max: 50,
  fetchMethod: (expression) => new RegExp(expression)
});
function parseAliasForCommand(processors, command) {
  let depth = 0;
  let result = command;
  while (true) {
    if (depth > 99) throw new Error("\u522B\u540D\u6307\u4EE4\u5D4C\u5957\u8FC7\u6DF1\uFF0C\u53EF\u80FD\u89E6\u53D1\u6B7B\u5FAA\u73AF\uFF0C\u8BF7\u68C0\u67E5\u4F60\u7684\u522B\u540D\u6307\u4EE4\u914D\u7F6E\uFF01");
    depth++;
    let matchedAlias = false;
    for (const config of processors) {
      if (!config.command) continue;
      if (config.scope !== "command") continue;
      if (config.trigger === "startWith") {
        if (result.startsWith(config.command)) {
          matchedAlias = true;
          if (typeof config.replacer === "string") {
            result = result.replace(config.command, config.replacer);
          } else {
            console.warn("[Alias] unsupported trigger = startWith & replacer = function");
          }
        }
      } else {
        const regex = RegexCommandCache2.get(config.command);
        if (!regex) continue;
        const match = result.match(regex);
        if (!match) continue;
        matchedAlias = true;
        if (typeof config.replacer === "string") {
          const matchGroups = match.groups || {};
          result = mustache_default.render(config.replacer, matchGroups, void 0, { escape: (value) => value });
        } else {
          result = config.replacer(match);
        }
      }
    }
    if (!matchedAlias) {
      break;
    }
  }
  return result;
}

// ../../packages/dicecore/src/config/helpers/hook.ts
function handleHooks(processors, arg) {
  let depth = 0;
  while (true) {
    if (depth > 99) {
      console.warn("hook \u5D4C\u5957\u8FC7\u6DF1\uFF0C\u53EF\u80FD\u51FA\u73B0\u6B7B\u5FAA\u73AF\uFF01");
      break;
    }
    depth++;
    let anyHandled = false;
    for (const processor of processors) {
      const handled = processor.handler(arg);
      anyHandled ||= handled;
    }
    if (!anyHandled) {
      break;
    }
  }
}
async function handleHooksAsync(processors, arg) {
  let depth = 0;
  while (true) {
    if (depth > 99) {
      console.warn("hook \u5D4C\u5957\u8FC7\u6DF1\uFF0C\u53EF\u80FD\u51FA\u73B0\u6B7B\u5FAA\u73AF\uFF01");
      break;
    }
    depth++;
    let anyHandled = false;
    for (const processor of processors) {
      const handled = await processor.handler(arg);
      anyHandled ||= handled;
    }
    if (!anyHandled) {
      break;
    }
  }
}
function handleVoidHooks(processors, arg) {
  for (const processor of processors) {
    processor.handler(arg);
  }
}
async function handleLinearHooksAsync(processors, arg) {
  let anyHandled = false;
  for (const processor of processors) {
    const handled = await processor.handler(arg);
    anyHandled ||= handled;
  }
  return anyHandled;
}

// ../../packages/dicecore/src/config/migration/upgrade.ts
function upgradeConfig(config) {
  if (config.version === 1) {
    const rollDeciders = getEmbedRollDecider();
    config.embedPlugin.rollDecider = rollDeciders;
    config.rollDeciderId = `${embedPluginId}.${rollDeciders[0].id}`;
    config.rollDeciderIds = rollDeciders.map((item) => `${embedPluginId}.${item.id}`);
    config.version = 2;
  }
  if (config.version === 2) {
    const aliasRolls = getEmbedAliasRoll();
    config.embedPlugin.aliasRoll = aliasRolls;
    config.aliasRollIds = aliasRolls.map((item) => ({ id: `${embedPluginId}.${item.id}`, enabled: true }));
    config.specialDice = getSpecialDiceConfig();
    config.version = 3;
  }
  if (config.version === 3) {
    config.customReplyIds.push({ id: "io.paotuan.plugin.namegen.name", enabled: true });
    config.customReplyIds.push({ id: "io.paotuan.plugin.insane.ti", enabled: true });
    config.customReplyIds.push({ id: "io.paotuan.plugin.insane.li", enabled: true });
    config.customReplyIds.push({ id: "io.paotuan.plugin.cardgen.coc", enabled: true });
    config.customReplyIds.push({ id: "io.paotuan.plugin.cardgen.dnd", enabled: true });
    const index = config.embedPlugin.customReply?.findIndex((item) => item.id === "coccardrand");
    if (typeof index === "number" && index >= 0) {
      config.embedPlugin.customReply?.splice(index, 1);
    }
    const index1 = config.customReplyIds.findIndex((item) => item.id === "io.paotuan.embed.coccardrand");
    if (index1 >= 0) {
      config.customReplyIds.splice(index1, 1);
    }
    const rules2remove = ["coc1", "coc2", "coc3", "coc4", "coc5", "deltagreen"];
    rules2remove.forEach((id) => {
      const index2 = config.embedPlugin.rollDecider?.findIndex((item) => item.id === id);
      if (typeof index2 === "number" && index2 >= 0) {
        config.embedPlugin.rollDecider?.splice(index2, 1);
      }
      const index12 = config.rollDeciderIds.findIndex((_id) => _id === "io.paotuan.embed." + id);
      if (index12 >= 0) {
        config.rollDeciderIds.splice(index12, 1);
        if (config.rollDeciderId === "io.paotuan.embed." + id) {
          config.rollDeciderId = "io.paotuan.embed.coc0";
        }
      }
    });
    config.version = 4;
  }
  if (config.version < 17) {
    const defaultRoll = config.defaultRoll;
    config.defaultRoll = { expression: defaultRoll, preferCard: true };
    config.specialDice.dsDice = { enabled: true };
    config.version = 17;
  }
  if (config.version < 21) {
    const oldDeciderConfig = config.embedPlugin.rollDecider || [];
    config.embedPlugin.rollDecider = getEmbedRollDecider();
    const decider2insert = oldDeciderConfig.filter((decider) => decider.id !== "coc0" && decider.id !== "dnd0");
    config.embedPlugin.rollDecider.splice(
      2,
      0,
      ...decider2insert.map((decider) => ({
        id: decider.id,
        name: decider.name,
        description: decider.description,
        rules: [
          { level: "\u5927\u5931\u8D25", expression: decider.rules.worst.expression },
          { level: "\u5927\u6210\u529F", expression: decider.rules.best.expression },
          { level: "\u5931\u8D25", expression: decider.rules.fail.expression },
          { level: "\u6210\u529F", expression: decider.rules.success.expression }
        ]
      }))
    );
    config.rollDeciderIds = config.embedPlugin.rollDecider.map((decider) => `${embedPluginId}.${decider.id}`);
    if (!config.rollDeciderIds.includes(config.rollDeciderId)) {
      config.rollDeciderId = config.rollDeciderIds[0];
    }
    config.customTextIds = [];
    const embedText = getEmbedCustomText();
    config.embedPlugin.customText = [embedText];
    const oldDeciderReplies = [];
    oldDeciderConfig.forEach((decider) => {
      oldDeciderReplies.push(decider.name + "\n" + decider.description);
      const rules = decider.rules;
      oldDeciderReplies.push(rules.worst.expression + " | " + rules.worst.reply);
      oldDeciderReplies.push(rules.best.expression + " | " + rules.best.reply);
      oldDeciderReplies.push(rules.fail.expression + " | " + rules.fail.reply);
      oldDeciderReplies.push(rules.success.expression + " | " + rules.success.reply);
      oldDeciderReplies.push("\n");
    });
    const index = config.embedPlugin.customReply?.findIndex((item) => item.id === "help");
    if (typeof index === "number" && index < 0) {
      const helpConfig = getEmbedCustomReply().find((item) => item.id === "help");
      if (helpConfig) {
        config.embedPlugin.customReply.push(helpConfig);
        config.customReplyIds.push({ id: `${embedPluginId}.help`, enabled: true });
      }
    }
    config.version = 21;
  }
  if (config.version < 22) {
    config.customReplyIds.push({ id: "io.paotuan.plugin.draw.draw", enabled: true });
    const embedText = getEmbedCustomText();
    config.embedPlugin.customText[0].texts["roll.sc.extra"] = embedText.texts["roll.sc.extra"];
    config.version = 22;
  }
  if (config.version < 23) {
    if (config.embedPlugin.rollDecider) {
      const mistakeIds = [["coc0", "\u5927\u5931\u8D25"], ["coc1", "\u5927\u5931\u8D25"], ["coc1", "\u5927\u6210\u529F"], ["coc4", "\u5927\u5931\u8D25"], ["coc5", "\u5927\u5931\u8D25"]];
      const newestConfig = getEmbedRollDecider();
      const getRule = (config2, id, level) => {
        const item = config2.find((_item) => _item.id === id);
        return item?.rules.find((rule) => rule.level === level);
      };
      mistakeIds.forEach(([id, level]) => {
        const now = getRule(config.embedPlugin.rollDecider, id, level);
        if (!now) return;
        const right = getRule(newestConfig, id, level);
        if (!right) return;
        now.expression = right.expression;
      });
    }
    config.version = 23;
  }
  if (config.version < 26) {
    config.botOwner = null;
    config.version = 26;
  }
  if (config.version < 29) {
    config.specialDice.nnDice = { enabled: true, writable: "all" };
    config.version = 29;
  }
  if (config.version < 30) {
    config.version = 30;
  }
  if (config.version < 32) {
    const embedText = getEmbedCustomText();
    const texts = config.embedPlugin.customText[0].texts;
    if (Array.isArray(texts["roll.sc.extra"]) && texts["roll.sc.extra"].length === 1 && texts["roll.sc.extra"][0].text === "\n{{#\u635F\u5931\u503C}}\u7406\u667A\u53D8\u5316\uFF1A{{\u65E7\u503C}} \u2192 {{\u65B0\u503C}}{{/\u635F\u5931\u503C}}") {
      texts["roll.sc.extra"] = embedText.texts["roll.sc.extra"];
    }
    texts["roll.en.extra"] = embedText.texts["roll.en.extra"];
    texts["roll.en.mark"] = embedText.texts["roll.en.mark"];
    texts["roll.en.markclear"] = embedText.texts["roll.en.markclear"];
    texts["nn.show"] = embedText.texts["nn.show"];
    texts["nn.link"] = embedText.texts["nn.link"];
    texts["nn.clear"] = embedText.texts["nn.clear"];
    texts["nn.search"] = embedText.texts["nn.search"];
    config.version = 32;
  }
  if (config.version < 33) {
    config.plugins = [];
    config.customTextIds = config.customTextIds.map((id) => ({ id, enabled: true }));
    config.embedPlugin.aliasRoll.forEach((alias) => alias.scope = "expression");
    config.version = 33;
  }
  if (config.version < 35) {
    config.hookIds = {
      onReceiveCommand: [],
      beforeParseDiceRoll: [],
      onCardEntryChange: [],
      onMessageReaction: [],
      beforeDiceRoll: [],
      afterDiceRoll: []
    };
    if (config.parseRule) {
      config.hookIds.onReceiveCommand.push({ id: "io.paotuan.plugin.compatible.convertCase-Prefix", enabled: !!config.parseRule.convertCase });
      config.hookIds.beforeParseDiceRoll.push({ id: "io.paotuan.plugin.compatible.convertCase", enabled: !!config.parseRule.convertCase });
      config.hookIds.beforeParseDiceRoll.push({ id: "io.paotuan.plugin.compatible.detectCardEntry", enabled: !!config.parseRule.detectCardEntry });
      config.hookIds.beforeParseDiceRoll.push({ id: "io.paotuan.plugin.compatible.detectDefaultRoll", enabled: !!config.parseRule.detectDefaultRoll });
    }
    config.version = 35;
  }
  return config;
}

// ../../packages/dicecore/src/config/migration/updateByPlugin.ts
function _ensurePluginConfig(config, pluginId) {
  const pluginConfig = config.plugins.find((_plugin) => _plugin.id === pluginId);
  if (pluginConfig) {
    return pluginConfig;
  }
  const newPluginConfig = { id: pluginId, enabled: true, preference: {} };
  config.plugins.push(newPluginConfig);
  return config.plugins.find((_plugin) => _plugin.id === pluginId);
}
function updateConfigByPlugin(config) {
  const manifest = PluginProvider.INSTANCE.allPlugins;
  const existIds = {
    customReplyIds: /* @__PURE__ */ new Set(),
    aliasRollIds: /* @__PURE__ */ new Set(),
    customTextIds: /* @__PURE__ */ new Set(),
    hookIds: {
      onReceiveCommand: /* @__PURE__ */ new Set(),
      beforeParseDiceRoll: /* @__PURE__ */ new Set(),
      onCardEntryChange: /* @__PURE__ */ new Set(),
      onMessageReaction: /* @__PURE__ */ new Set(),
      beforeDiceRoll: /* @__PURE__ */ new Set(),
      afterDiceRoll: /* @__PURE__ */ new Set()
    }
  };
  manifest.forEach((plugin2) => {
    const pluginConfig = _ensurePluginConfig(config, plugin2.id);
    const preference = {};
    plugin2.preference?.forEach((pref) => {
      preference[pref.key] = pluginConfig.preference[pref.key] ?? pref.defaultValue;
    });
    pluginConfig.preference = preference;
    if (!pluginConfig.enabled) return;
    plugin2.customReply?.forEach((item) => {
      const id = `${plugin2.id}.${item.id}`;
      existIds.customReplyIds.add(id);
      if (!config.customReplyIds.find((_config) => _config.id === id)) {
        config.customReplyIds.push({ id, enabled: item.defaultEnabled ?? true });
      }
    });
    plugin2.aliasRoll?.forEach((item) => {
      const id = `${plugin2.id}.${item.id}`;
      existIds.aliasRollIds.add(id);
      if (!config.aliasRollIds.find((_config) => _config.id === id)) {
        config.aliasRollIds.push({ id, enabled: item.defaultEnabled ?? true });
      }
    });
    plugin2.customText?.forEach((item) => {
      const id = `${plugin2.id}.${item.id}`;
      existIds.customTextIds.add(id);
      if (!config.customTextIds.find((_config) => _config.id === id)) {
        config.customTextIds.push({ id, enabled: item.defaultEnabled ?? true });
      }
    });
    ["onReceiveCommand", "beforeParseDiceRoll", "onCardEntryChange", "onMessageReaction", "beforeDiceRoll", "afterDiceRoll"].forEach((prop) => {
      plugin2.hook?.[prop]?.forEach((item) => {
        const id = `${plugin2.id}.${item.id}`;
        existIds.hookIds[prop].add(id);
        if (!config.hookIds[prop].find((_config) => _config.id === id)) {
          config.hookIds[prop].push({ id, enabled: item.defaultEnabled ?? true });
        }
      });
    });
  });
  ["customReplyIds", "aliasRollIds", "customTextIds"].forEach((prop) => {
    config[prop] = config[prop].filter((item) => item.id.startsWith("io.paotuan.embed") || existIds[prop].has(item.id));
  });
  ["onReceiveCommand", "beforeParseDiceRoll", "onCardEntryChange", "onMessageReaction", "beforeDiceRoll", "afterDiceRoll"].forEach((prop) => {
    config.hookIds[prop] = config.hookIds[prop].filter((item) => existIds.hookIds[prop].has(item.id));
  });
  return config;
}

// ../../packages/dicecore/src/dice/special/sc.ts
import { DiceRoll as DiceRoll3 } from "@dice-roller/rpg-dice-roller";
var SC_CARD_ENTRY_NAME = "SAN";
var ScDiceRoll = class extends BasePtDiceRoll {
  noModify = false;
  expression1 = "";
  expression2 = "";
  description = "";
  tempValue = NaN;
  modifiedValue = NaN;
  scEntry;
  // 是否人物卡有 sc 项 / 有临时值，可以骰 sc
  rollSc;
  rollScResult;
  rollLoss;
  // 记录变化前后值，用于展示. 负值代表不可用（无人物卡等情况）
  oldSan = -1;
  newSan = -1;
  get scLoss() {
    const roll = this.rollLoss;
    if (!roll) return 0;
    if (roll.maxTotal > 0) {
      return Math.max(roll.total, 0);
    } else {
      return roll.total;
    }
  }
  // 检定目标值
  get scTargetValue() {
    if (!this.scEntry) return void 0;
    return this.scEntry.value + (this.modifiedValue || 0);
  }
  // sc1d10/1d100直视伟大的克苏鲁
  // sc! 不修改人物卡
  roll() {
    this.parse();
    this.rollLoss = void 0;
    this.rollScResult = void 0;
    this.rollSc = new DiceRoll3("d%");
    if (!isNaN(this.tempValue)) {
      this.scEntry = { input: SC_CARD_ENTRY_NAME, key: SC_CARD_ENTRY_NAME, value: this.tempValue, isTemp: true };
    } else {
      this.scEntry = this.selfCard?.getEntry(SC_CARD_ENTRY_NAME);
    }
    if (this.scEntry) {
      this.rollScResult = this.decide({ baseValue: this.scEntry.value, targetValue: this.scTargetValue, roll: this.rollSc.total });
      if (this.rollScResult) {
        if (this.rollScResult.level === "\u5927\u5931\u8D25") {
          const maxLoss = new DiceRoll3(this.expression2).maxTotal;
          this.rollLoss = new DiceRoll3(String(maxLoss));
        } else {
          this.rollLoss = new DiceRoll3(this.rollScResult.success ? this.expression1 : this.expression2);
        }
      }
    }
    return this;
  }
  parse() {
    const removeSc = this.rawExpression.slice(2).trim();
    const removeFlags = this.parseFlags(removeSc);
    this.parseMain(removeFlags);
    this.detectDefaultRoll();
    console.log("[Dice] \u7406\u667A\u68C0\u5B9A \u539F\u59CB\u6307\u4EE4", this.rawExpression, "\u6210\u529F", this.expression1, "\u5931\u8D25", this.expression2, "\u63CF\u8FF0", this.description, "\u4E34\u65F6\u503C", this.tempValue, "noModify", this.noModify);
  }
  parseFlags(expression) {
    if (expression.startsWith("!") || expression.startsWith("\uFF01")) {
      this.noModify = true;
      return expression.slice(1).trim();
    } else {
      return expression;
    }
  }
  parseMain(expression) {
    let exp2andDesc = expression;
    const firstSplitIndex = expression.indexOf("/");
    if (firstSplitIndex >= 0) {
      this.expression1 = expression.slice(0, firstSplitIndex).trim();
      exp2andDesc = expression.slice(firstSplitIndex + 1).trim();
    }
    const { exp, skills } = parseDescriptions2(exp2andDesc);
    const { skill: desc = "", tempValue = NaN, modifiedValue = NaN } = skills[0] || {};
    this.expression2 = exp;
    this.expression1 ||= exp;
    this.description = desc;
    this.tempValue = tempValue;
    this.modifiedValue = modifiedValue;
  }
  detectDefaultRoll() {
    if (this.expression1 === "" || this.expression1 === "d") {
      this.expression1 = "0";
    }
    if (this.expression2 === "" || this.expression2 === "d") {
      this.expression2 = this.defaultRoll;
    }
  }
  get output() {
    const firstArgs = this.getFormatArgs(this.rollSc, this.description, this.scTargetValue);
    const firstStart = this.t("roll.start", firstArgs);
    const firstResult = this.t("roll.result.quiet", firstArgs);
    const firstTest = this.rollScResult ? this.ts(this.rollScResult.level, firstArgs) : this.t("roll.sc.unsupported", firstArgs);
    let line = `${removeTrailingOneSpace(firstStart)} ${firstResult}${firstTest}`;
    if (!this.rollScResult) return line;
    const secondArgs = this.getFormatArgs(this.rollLoss, "\u7406\u667A\u635F\u5931");
    const secondStart = this.t("roll.start", secondArgs);
    const secondResult = this.t("roll.result", secondArgs);
    line += `
${secondStart} ${secondResult}`;
    if (this.oldSan >= 0) {
      const extra = this.t("roll.sc.extra", this.getFormatArgs(this.rollLoss));
      line += extra;
    }
    return line;
  }
  getFormatArgs(roll, skill, targetValue) {
    return {
      \u539F\u59CB\u6307\u4EE4: this.rawExpression,
      \u63CF\u8FF0: skill,
      \u76EE\u6807\u503C: targetValue,
      \u63B7\u9AB0\u7ED3\u679C: roll.total,
      \u63B7\u9AB0\u8868\u8FBE\u5F0F: roll.notation,
      \u63B7\u9AB0\u8F93\u51FA: roll.output,
      \u65E7\u503C: this.oldSan,
      \u65B0\u503C: this.newSan,
      \u635F\u5931\u503C: this.scLoss,
      sc: true,
      coc: true
    };
  }
  applyToCard() {
    if (!this.scEntry) return [];
    this.oldSan = this.scEntry.value;
    this.newSan = Math.max(0, this.oldSan - this.scLoss);
    if (this.scEntry.isTemp || this.noModify) {
      return [];
    } else {
      const card = this.selfCard;
      const updated = card.setEntry(SC_CARD_ENTRY_NAME, this.newSan);
      this.newSan = card.getEntry(SC_CARD_ENTRY_NAME).value;
      return updated ? [card] : [];
    }
  }
};

// ../../packages/dicecore/src/dice/special/en/en.ts
import { DiceRoll as DiceRoll4 } from "@dice-roller/rpg-dice-roller";
var EnDiceRoll = class extends BasePtDiceRoll {
  enSkillNames = [];
  tempValue = NaN;
  // 先 d100 判断是否能成长，再 0/d10
  skill2Growth = {};
  roll() {
    const removeEn = this.rawExpression.slice(2).trim();
    this.parseMain(removeEn);
    this.realRoll();
    return this;
  }
  parseMain(expression) {
    if (!expression) {
      this.enSkillNames = getAllSkillsCanEn(this.selfCard);
    } else {
      const index = expression.search(/[\s\d]/);
      if (index < 0) {
        this.enSkillNames = [expression];
      } else {
        this.enSkillNames = [expression.slice(0, index)];
        this.tempValue = parseInt(expression.slice(index), 10);
      }
    }
    console.log("[Dice] \u6210\u957F\u68C0\u5B9A \u539F\u59CB\u6307\u4EE4", this.rawExpression, "\u6280\u80FD", this.enSkillNames.join("|"), "\u4E34\u65F6\u503C", this.tempValue);
  }
  realRoll() {
    this.enSkillNames.forEach((skill) => {
      let entry;
      if (!isNaN(this.tempValue)) {
        entry = getCocTempEntry(skill, this.tempValue);
      } else if (this.selfCard instanceof CocCard) {
        entry = this.selfCard.getEntry(skill);
      }
      if (!entry) return;
      const firstRoll = new DiceRoll4("d%");
      const canGrowth = firstRoll.total > Math.min(95, entry.baseValue);
      const secondRoll = canGrowth ? new DiceRoll4("d10") : void 0;
      this.skill2Growth[skill] = {
        firstRoll,
        canGrowth,
        targetValue: entry.baseValue,
        secondRoll,
        isTemp: entry.isTemp,
        newValue: entry.baseValue + (secondRoll?.total ?? 0)
        // 先以简单加法算出来一个值
      };
    });
  }
  get output() {
    const skillsActualGrowth = Object.keys(this.skill2Growth);
    if (skillsActualGrowth.length === 0) {
      return this.t("roll.en.empty");
    } else {
      const lines = [];
      skillsActualGrowth.forEach((skill) => {
        const result = this.skill2Growth[skill];
        const firstArgs = this.getFormatArgs(skill, result.firstRoll, result.targetValue);
        const firstStart = this.t("roll.start", firstArgs);
        const firstResult = this.t("roll.result.quiet", firstArgs);
        const firstTestResult = result.canGrowth ? result.firstRoll.total > 95 ? "\u5927\u6210\u529F" : "\u6210\u529F" : "\u5931\u8D25";
        const firstTestResultDesc = this.ts(firstTestResult, firstArgs);
        lines.push(`${firstStart} ${firstResult}${firstTestResultDesc}`);
        if (result.canGrowth) {
          const secondArgs = this.getFormatArgs(`${skill}\u6210\u957F`, result.secondRoll);
          const secondStart = this.t("roll.start", secondArgs);
          const secondResult = this.t("roll.result.quiet", secondArgs);
          if (typeof result.newValue === "number") {
            const secondExtra = this.t("roll.en.extra", {
              ...this.getFormatArgs(skill, result.secondRoll),
              \u65E7\u503C: result.targetValue,
              \u65B0\u503C: result.newValue,
              \u53D8\u5316\u503C: result.newValue - result.targetValue
            });
            lines.push(`${secondStart} ${secondResult}${secondExtra}`);
          } else {
            lines.push(`${secondStart} ${secondResult}`);
          }
        }
      });
      return lines.join("\n");
    }
  }
  // 技能检定格式化可提供参数
  getFormatArgs(skill, roll, targetValue) {
    return {
      \u539F\u59CB\u6307\u4EE4: this.rawExpression,
      \u63CF\u8FF0: skill,
      \u76EE\u6807\u503C: targetValue,
      \u63B7\u9AB0\u7ED3\u679C: roll.total,
      \u63B7\u9AB0\u8868\u8FBE\u5F0F: roll.notation,
      \u63B7\u9AB0\u8F93\u51FA: roll.output,
      en: true,
      coc: true
    };
  }
  applyToCard() {
    const card = this.selfCard;
    if (!(card instanceof CocCard)) return [];
    let updated = false;
    Object.keys(this.skill2Growth).forEach((skill) => {
      const growthResult = this.skill2Growth[skill];
      if (growthResult.isTemp) return;
      if (growthResult.canGrowth) {
        if (card.setEntry(skill, growthResult.targetValue + growthResult.secondRoll.total)) {
          updated = true;
        }
        const entry = card.getEntry(skill);
        if (entry) {
          growthResult.newValue = entry.value;
        }
      }
      if (card.cancelSkillGrowth(skill)) {
        updated = true;
      }
    });
    return updated ? [card] : [];
  }
};

// ../../packages/dicecore/src/dice/special/en/list.ts
var EnListDiceRoll = class extends BasePtDiceRoll {
  // 如果未关联 CocCard，认为不支持
  get isCardUnsupported() {
    return !this.selfCard || !(this.selfCard instanceof CocCard);
  }
  roll() {
    console.log("[Dice] \u6210\u957F\u68C0\u5B9A-\u5217\u51FA \u539F\u59CB\u6307\u4EE4", this.rawExpression);
    return this;
  }
  get output() {
    if (this.isCardUnsupported) {
      return this.t("roll.en.empty");
    }
    const skills = getAllSkillsCanEn(this.selfCard);
    if (skills.length > 0) {
      return this.t("roll.en.list", {
        \u6280\u80FD\u5217\u8868: skills.map((\u6280\u80FD\u540D, i) => ({ \u6280\u80FD\u540D, last: i === skills.length - 1 })),
        \u6280\u80FD\u552F\u4E00: skills.length === 1,
        \u6280\u80FD\u540D: skills[0]
      });
    } else {
      return this.t("roll.en.empty");
    }
  }
};

// ../../packages/dicecore/src/dice/special/en/mark.ts
var EnMarkDiceRoll = class extends BasePtDiceRoll {
  mode;
  skillNames = [];
  // 如果未关联 CocCard，认为不支持
  get isCardUnsupported() {
    return !this.selfCard || !(this.selfCard instanceof CocCard);
  }
  roll() {
    if (this.isCardUnsupported) return this;
    const removeEn = this.rawExpression.slice(2).trim();
    const [mode, removeMode] = parseMode(removeEn);
    this.mode = mode;
    if (mode !== "clear") {
      const segments = removeMode.split(/[,，;；、\s]+/).filter((segment) => !!segment.trim());
      this.skillNames.push(...segments);
    }
    return this;
  }
  get output() {
    if (this.isCardUnsupported) {
      return this.t("roll.en.empty");
    }
    if (this.mode !== "clear" && this.skillNames.length === 0) {
      return this.t("roll.en.empty");
    }
    if (this.mode === "clear") {
      return this.t("roll.en.markclear");
    }
    const skills = this.skillNames;
    return this.t("roll.en.mark", {
      \u6280\u80FD\u5217\u8868: skills.map((\u6280\u80FD\u540D, i) => ({ \u6280\u80FD\u540D, last: i === skills.length - 1 })),
      \u6280\u80FD\u552F\u4E00: skills.length === 1,
      \u6280\u80FD\u540D: skills[0],
      \u6DFB\u52A0: this.mode === "add"
    });
  }
  applyToCard() {
    if (this.isCardUnsupported) {
      return [];
    }
    let updated = false;
    const card = this.selfCard;
    if (this.mode === "clear") {
      updated = card.clearSkillGrowth();
    } else if (this.mode === "add") {
      this.skillNames.forEach((name) => {
        if (card.markSkillGrowth(name)) {
          updated = true;
        }
      });
    } else if (this.mode === "remove") {
      this.skillNames.forEach((name) => {
        if (card.cancelSkillGrowth(name)) {
          updated = true;
        }
      });
    }
    return updated ? [card] : [];
  }
};
function parseMode(expression) {
  if (expression.startsWith("+")) {
    return ["add", expression.slice(1).trim()];
  } else if (expression.startsWith("-")) {
    return ["remove", expression.slice(1).trim()];
  } else {
    return ["clear", ""];
  }
}

// ../../packages/dicecore/src/dice/special/en/utils.ts
var EN_LIST = /^en\s*(l|list)$/;
var EN_MARK = /^en\s*(\+|-|x|clear|clr)/;
function dispatchEn(expression, context2, inlineRolls = []) {
  if (expression.match(EN_LIST)) {
    return new EnListDiceRoll(expression, context2, inlineRolls);
  } else if (expression.match(EN_MARK)) {
    return new EnMarkDiceRoll(expression, context2, inlineRolls);
  } else {
    return new EnDiceRoll(expression, context2, inlineRolls);
  }
}
function getAllSkillsCanEn(card) {
  if (card instanceof CocCard) {
    const cardData = card.data;
    return cardData ? Object.keys(cardData.meta.skillGrowth).filter((name) => cardData.meta.skillGrowth[name]) : [];
  } else {
    return [];
  }
}

// ../../packages/dicecore/src/dice/special/ri.ts
import { DiceRoll as DiceRoll5 } from "@dice-roller/rpg-dice-roller";

// ../../packages/dicecore/src/ri/state.ts
var DefaultRiState = class {
  state;
  constructor(map = {}) {
    this.state = map;
  }
  getRiList(channelUnionId) {
    if (!this.state[channelUnionId]) {
      this.state[channelUnionId] = [];
    }
    return this.state[channelUnionId];
  }
  updateRiList(channelUnionId, change) {
    const list = this.getRiList(channelUnionId);
    change.forEach((item) => {
      const exist = list.find((other) => other.type === item.type && other.id === item.id);
      if (exist) {
        Object.assign(exist, item);
      } else if (item.type && item.id) {
        list.push({
          type: item.type,
          id: item.id,
          name: item.name ?? item.id,
          seq: item.seq ?? NaN,
          seq2: item.seq2 ?? NaN
        });
      }
    });
  }
  removeRiList(channelUnionId, change) {
    const list = this.getRiList(channelUnionId);
    change.forEach(({ type, id }) => {
      const index = list.findIndex((item) => item.type === type && item.id === id);
      if (index >= 0) {
        list.splice(index, 1);
      }
    });
  }
  clearRiList(channelUnionId) {
    this.state[channelUnionId] = [];
  }
  getDescription(channelUnionId) {
    const descList = this.getRiList(channelUnionId).sort((a, b) => {
      const seq1Res = this.compareSeq(a.seq, b.seq);
      return seq1Res === 0 ? this.compareSeq(a.seq2, b.seq2) : seq1Res;
    }).map((entry, i) => `${i + 1}. ${this.getRiName(entry)} \u{1F3B2} ${isNaN(entry.seq) ? "--" : entry.seq}${isNaN(entry.seq2) ? "" : `(${entry.seq2})`}`);
    const lines = ["\u5F53\u524D\u5148\u653B\u5217\u8868\uFF1A", ...descList];
    return lines.join("\n");
  }
  compareSeq(a, b) {
    if (isNaN(a) && isNaN(b)) return 0;
    if (isNaN(a)) return 1;
    if (isNaN(b)) return -1;
    return b - a;
  }
  getRiName(item) {
    return item.type === "npc" ? item.name ?? item.id ?? "" : at(item.id);
  }
};

// ../../packages/dicecore/src/ri/ri-provider.ts
var RiProvider = class _RiProvider {
  static INSTANCE = new _RiProvider();
  _state;
  constructor() {
  }
  get state() {
    if (!this._state) {
      this._state = new DefaultRiState();
    }
    return this._state;
  }
  setState(state) {
    this._state = state;
  }
  clearRiList(channelUnionId) {
    this.state.clearRiList(channelUnionId);
  }
  getDescription(channelUnionId) {
    return this.state.getDescription(channelUnionId);
  }
  getRiList(channelUnionId) {
    return this.state.getRiList(channelUnionId);
  }
  removeRiList(channelUnionId, list) {
    this.state.removeRiList(channelUnionId, list);
  }
  updateRiList(channelUnionId, list) {
    this.state.updateRiList(channelUnionId, list);
  }
  getRiName(item) {
    return this.state.getRiName(item);
  }
};

// ../../packages/dicecore/src/dice/special/ri.ts
var RiDiceRoll = class extends BasePtDiceRoll {
  rolls = [];
  // username 用于展示
  roll() {
    const removeRi = this.rawExpression.slice(2).trim();
    const segments = removeRi.split(/[,，;；]+/).filter((segment) => !!segment.trim());
    if (segments.length === 0) segments.push("");
    console.log("[Dice] \u5148\u653B\u6307\u4EE4 \u539F\u59CB\u6307\u4EE4", this.rawExpression);
    segments.forEach((segment) => {
      const [exp, desc] = parseDescriptions(segment, ParseFlags.PARSE_EXP);
      const type = desc ? "npc" : "actor";
      const baseRoll = (type === "actor" ? this.selfCard?.riDefaultRoll : void 0) ?? "d20";
      const expression = exp.startsWith("+") || exp.startsWith("-") ? `${baseRoll}${exp}` : exp || baseRoll;
      const parsed = parseTemplate(expression, this.context, this.inlineRolls);
      const diceRoll = new DiceRoll5(parsed);
      this.rolls.push({
        type,
        id: desc || this.context.userId,
        username: type === "actor" ? this.context.username : void 0,
        roll: diceRoll
      });
    });
    return this;
  }
  get output() {
    return this.rolls.map((item) => {
      const args = {
        // ri 不一定是自己，且要区分玩家与 npc
        \u7528\u6237\u540D: item.username || item.id,
        \u4EBA\u7269\u5361\u540D: this.selfCard?.name ?? (item.username || item.id),
        at\u7528\u6237: RiProvider.INSTANCE.getRiName(item),
        \u539F\u59CB\u6307\u4EE4: this.rawExpression,
        \u63CF\u8FF0: "\u5148\u653B",
        \u63B7\u9AB0\u7ED3\u679C: item.roll.total,
        \u63B7\u9AB0\u8868\u8FBE\u5F0F: item.roll.notation,
        \u63B7\u9AB0\u8F93\u51FA: item.roll.output,
        ri: true
      };
      const head = this.t("roll.start", args);
      const desc = this.t("roll.result", args);
      return `${head} ${desc}`;
    }).join("\n");
  }
  applyToCard() {
    RiProvider.INSTANCE.updateRiList(this.context.channelUnionId, this.rolls.map((item) => ({
      type: item.type,
      id: item.id,
      name: item.username,
      seq: item.roll.total,
      seq2: NaN
    })));
    return [];
  }
};
var RiListDiceRoll = class extends BasePtDiceRoll {
  clear = false;
  delList = [];
  riListDescription = "";
  roll() {
    const removeInit = this.rawExpression.slice(4).trim();
    if (removeInit === "clear" || removeInit === "clr") {
      this.clear = true;
    } else if (removeInit.startsWith("del")) {
      this.parseDelList(removeInit.slice(3));
    } else if (removeInit.startsWith("rm")) {
      this.parseDelList(removeInit.slice(2));
    }
    console.log("[Dice] \u5148\u653B\u5217\u8868 \u539F\u59CB\u6307\u4EE4", this.rawExpression);
    return this;
  }
  parseDelList(expression) {
    const atSelf = at(this.context.userId);
    const delList = expression.trim().split(/[\s,，;；]+/).map((name) => name || atSelf);
    const uniqList = Array.from(new Set(delList));
    const uniqDelList = uniqList.length > 0 ? uniqList : [atSelf];
    this.delList = uniqDelList.map((nameOrAt) => {
      const userIdMatch = nameOrAt.match(AtUserPattern);
      if (userIdMatch) {
        return { id: userIdMatch[1], type: "actor" };
      } else {
        return { id: nameOrAt, type: "npc" };
      }
    });
  }
  applyToCard() {
    this.riListDescription = RiProvider.INSTANCE.getDescription(this.context.channelUnionId);
    if (this.clear) {
      RiProvider.INSTANCE.clearRiList(this.context.channelUnionId);
    } else if (this.delList.length > 0) {
      RiProvider.INSTANCE.updateRiList(this.context.channelUnionId, this.delList);
    }
    return [];
  }
  get output() {
    if (this.delList.length > 0) {
      const charaList = this.delList.map((item) => RiProvider.INSTANCE.getRiName(item));
      return this.t("roll.ri.del", {
        \u4EBA\u7269\u5217\u8868: charaList.map((\u4EBA\u7269\u540D, i) => ({ \u4EBA\u7269\u540D, last: i === charaList.length - 1 })),
        \u4EBA\u7269\u552F\u4E00: charaList.length === 0,
        \u4EBA\u7269\u540D: charaList[0]
      });
    } else {
      let listDesc = this.riListDescription;
      if (this.clear) {
        listDesc += "\n" + this.t("roll.ri.clear");
      }
      return listDesc;
    }
  }
};

// ../../packages/dicecore/src/dice/special/st/st.ts
import { DiceRoll as DiceRoll6 } from "@dice-roller/rpg-dice-roller";
var StDiceRoll = class extends BasePtDiceRoll {
  rolls = [];
  roll() {
    if (!this.selfCard) return this;
    const exp = this.rawExpression.slice(2).trim();
    this.rollSet(exp);
    return this;
  }
  get hasEditPermission() {
    return this.hasPermission(this.config.specialDice.stDice.writable);
  }
  rollSet(exp) {
    const segments = exp.split(/[,，;；、]+/).filter((segment) => !!segment.trim());
    segments.forEach((segment) => {
      let [name, value] = splitSegment(segment);
      if (!name || !value) return;
      if (this.selfCard instanceof DndCard) {
        const entry = this.selfCard.getEntry(name);
        if (entry && entry.type === "skills" && entry.postfix === "none") {
          name = `${name}\u4FEE\u6B63`;
        }
      }
      const expression = value.startsWith("+") || value.startsWith("-") ? `\${${name}}${value}` : value;
      const parsed = parseTemplate(expression, this.context, this.inlineRolls);
      this.rolls.push({ name, roll: new DiceRoll6(parsed) });
    });
  }
  get output() {
    if (!this.selfCard) {
      return this.t("card.empty", this.formatArgs);
    }
    if (!this.hasEditPermission) {
      return this.t("card.nopermission", this.formatArgs);
    }
    if (this.rolls.length === 0) {
      return this.t("roll.st.prompt", this.formatArgs);
    }
    const \u6761\u76EE\u5217\u8868 = this.rolls.map((item, i) => {
      const rollOutput = this.t("roll.result", {
        ...this.formatArgs,
        \u63B7\u9AB0\u7ED3\u679C: item.roll.total,
        \u63B7\u9AB0\u8868\u8FBE\u5F0F: item.roll.notation,
        \u63B7\u9AB0\u8F93\u51FA: item.roll.output
      });
      return { \u6761\u76EE: `${item.name} ${rollOutput}`, last: i === this.rolls.length - 1 };
    });
    return this.t("roll.st.set", {
      ...this.formatArgs,
      \u6761\u76EE\u5217\u8868,
      \u6761\u76EE\u552F\u4E00: this.rolls.length === 1,
      \u6761\u76EE: \u6761\u76EE\u5217\u8868[0]
    });
  }
  get formatArgs() {
    return {
      \u76EE\u6807\u4EBA\u7269\u5361\u540D: this.selfCard?.name,
      // 仅用于兼容
      \u76EE\u6807\u7528\u6237: at(this.context.userId),
      // 仅用于兼容
      st: true
    };
  }
  applyToCard() {
    if (!this.hasEditPermission) return [];
    if (!this.selfCard) return [];
    if (this.rolls.length === 0) return [];
    let modified = false;
    this.rolls.forEach((item) => {
      const b = this.selfCard.setEntry(item.name, item.roll.total);
      modified ||= b;
    });
    return modified ? [this.selfCard] : [];
  }
};
function splitSegment(segment) {
  const index = segment.search(/[\s+\-=\d]/);
  if (index < 0) return [segment];
  const name = segment.slice(0, index).trim();
  let value = segment.slice(index).trim();
  if (value.startsWith("=")) {
    value = value.slice(1).trim();
  }
  return [name, value];
}

// ../../packages/dicecore/src/dice/special/st/show.ts
var StShowDiceRoll = class extends BasePtDiceRoll {
  shows = [];
  showSummary = false;
  roll() {
    if (!this.selfCard) return this;
    const exp = this.rawExpression.replace(/^st\s*show/, "").trim();
    this.rollShow(exp);
    return this;
  }
  rollShow(exp) {
    const segments = exp.split(/[,，;；、]+/).filter((segment) => !!segment.trim());
    if (segments.length > 0) {
      this.shows.push(...segments.map((name) => this.selfCard.getEntryDisplay(name)));
    } else {
      this.shows.push(this.selfCard.getSummary());
      this.showSummary = true;
    }
  }
  get output() {
    if (!this.selfCard) {
      return this.t("card.empty", this.formatArgs);
    }
    return this.t("roll.st.show", {
      ...this.formatArgs,
      \u6761\u76EE\u5217\u8868: this.shows.map((\u6761\u76EE, i) => ({ \u6761\u76EE, last: i === this.shows.length - 1 })),
      \u6761\u76EE\u552F\u4E00: this.shows.length === 1,
      \u6761\u76EE: this.shows[0],
      \u5C55\u793A\u5168\u90E8: this.showSummary
    });
  }
  get formatArgs() {
    return {
      \u76EE\u6807\u4EBA\u7269\u5361\u540D: this.selfCard?.name,
      // 仅用于兼容
      \u76EE\u6807\u7528\u6237: at(this.context.userId),
      // 仅用于兼容
      st: true
    };
  }
};

// ../../packages/dicecore/src/dice/special/st/stAbility.ts
var StAbilityDiceRoll = class extends BasePtDiceRoll {
  abilities = [];
  roll() {
    if (!this.selfCard) return this;
    const exp = this.rawExpression.slice(2).trim();
    this.rollSet(exp);
    return this;
  }
  get hasEditPermission() {
    return this.hasPermission(this.config.specialDice.stDice.writable);
  }
  rollSet(exp) {
    const segments = exp.split(/[,，;；、]+/).map((segment) => segment.trim()).filter((segment) => !!segment);
    segments.forEach((segment) => {
      const [name, value] = splitSegment2(segment);
      if (!name || !value) return;
      this.abilities.push({ name, value });
    });
  }
  get output() {
    if (!this.selfCard) {
      return this.t("card.empty", this.formatArgs);
    }
    if (!this.hasEditPermission) {
      return this.t("card.nopermission", this.formatArgs);
    }
    if (this.abilities.length === 0) {
      return this.t("roll.st.prompt", this.formatArgs);
    }
    const \u6761\u76EE\u5217\u8868 = this.abilities.map((item, i) => {
      return { \u6761\u76EE: `${item.name} ${item.value}`, last: i === this.abilities.length - 1 };
    });
    return this.t("roll.st.set", {
      ...this.formatArgs,
      \u6761\u76EE\u5217\u8868,
      \u6761\u76EE\u552F\u4E00: this.abilities.length === 1,
      \u6761\u76EE: \u6761\u76EE\u5217\u8868[0]
    });
  }
  get formatArgs() {
    return {
      \u76EE\u6807\u4EBA\u7269\u5361\u540D: this.selfCard?.name,
      // 仅用于兼容
      \u76EE\u6807\u7528\u6237: at(this.context.userId),
      // 仅用于兼容
      st: true
    };
  }
  applyToCard() {
    if (!this.hasEditPermission) return [];
    if (!this.selfCard) return [];
    if (this.abilities.length === 0) return [];
    let modified = false;
    this.abilities.forEach((item) => {
      const b = this.selfCard.setAbility(item.name, item.value);
      modified ||= b;
    });
    return modified ? [this.selfCard] : [];
  }
};
function splitSegment2(segment) {
  if (segment.startsWith("&")) {
    segment = segment.slice(1);
  }
  const index = segment.indexOf("=");
  if (index >= 0) {
    const name = segment.slice(0, index).trim();
    const value = segment.slice(index + 1).trim();
    return [name, value];
  }
  const index2 = segment.search(/[^\p{Unified_Ideograph}]/u);
  if (index2 >= 0) {
    const name = segment.slice(0, index2).trim();
    const value = segment.slice(index2).trim();
    return [name, value];
  }
  return [segment];
}

// ../../packages/dicecore/src/dice/special/st/utils.ts
var ST_SHOW = /^st\s*show/;
var ST_SET_ABILITY = /^st\s*&/;
function dispatchSt(expression, context2, inlineRolls = []) {
  if (expression.match(ST_SHOW)) {
    return new StShowDiceRoll(expression, context2, inlineRolls);
  } else if (expression.match(ST_SET_ABILITY)) {
    return new StAbilityDiceRoll(expression, context2, inlineRolls);
  } else {
    return new StDiceRoll(expression, context2, inlineRolls);
  }
}

// ../../packages/dicecore/src/dice/special/ds.ts
import { DiceRoll as DiceRoll7 } from "@dice-roller/rpg-dice-roller";
var DsDiceRoll = class extends BasePtDiceRoll {
  diceRoll = new DiceRoll7("d20");
  isBest = this.diceRoll.total === 20;
  isWorst = this.diceRoll.total === 1;
  isSuccess = this.diceRoll.total >= 10;
  toStable = false;
  // 是否伤势转为稳定
  toDeath = false;
  // 是否死亡
  roll() {
    return this;
  }
  get formatArgs() {
    return {
      \u539F\u59CB\u6307\u4EE4: this.rawExpression,
      \u63CF\u8FF0: "\u6B7B\u4EA1\u8C41\u514D",
      \u76EE\u6807\u503C: 10,
      \u63B7\u9AB0\u7ED3\u679C: this.diceRoll.total,
      \u63B7\u9AB0\u8868\u8FBE\u5F0F: this.diceRoll.notation,
      \u63B7\u9AB0\u8F93\u51FA: this.diceRoll.output,
      ds: true,
      // 以防万一特殊场景使用
      dnd: true
    };
  }
  get decideResult() {
    if (this.isBest) {
      return this.t("roll.ds.best", this.formatArgs);
    } else if (this.isWorst) {
      return this.t("roll.ds.worst", this.formatArgs);
    } else if (this.isSuccess) {
      return this.ts("\u6210\u529F", this.formatArgs);
    } else {
      return this.ts("\u5931\u8D25", this.formatArgs);
    }
  }
  get output() {
    const headLine = this.t("roll.start", this.formatArgs);
    const output = this.t("roll.result", this.formatArgs);
    const firstLine = `${headLine} ${output}${this.decideResult}`;
    if (this.toStable) {
      return firstLine + this.t("roll.ds.tostable", this.formatArgs);
    } else if (this.toDeath) {
      return firstLine + this.t("roll.ds.todeath", this.formatArgs);
    } else {
      return firstLine;
    }
  }
  applyToCard() {
    if (!(this.selfCard instanceof DndCard)) {
      return [];
    }
    const card = this.selfCard;
    if (this.isBest) {
      card.HP += 1;
      card.data.meta.deathSaving.success = 0;
      card.data.meta.deathSaving.failure = 0;
    } else if (this.isWorst) {
      card.data.meta.deathSaving.failure += 2;
    } else if (this.isSuccess) {
      card.data.meta.deathSaving.success++;
    } else {
      card.data.meta.deathSaving.failure++;
    }
    if (card.data.meta.deathSaving.success >= 3) {
      this.toStable = true;
      card.data.meta.deathSaving.success = 0;
      card.data.meta.deathSaving.failure = 0;
    } else if (card.data.meta.deathSaving.failure >= 3) {
      this.toDeath = true;
    }
    return [card];
  }
};

// ../../packages/dicecore/src/dice/special/nn/show.ts
var NnShowDiceRoll = class extends BasePtDiceRoll {
  roll() {
    return this;
  }
  get output() {
    return this.t("nn.show", { \u4EBA\u7269\u5361\u540D: this.selfCard?.name });
  }
};

// ../../packages/dicecore/src/dice/special/nn/clear.ts
var NnClearDiceRoll = class extends BasePtDiceRoll {
  originCardName;
  get hasLinkPermission() {
    return this.hasPermission(this.config.specialDice.nnDice.writable);
  }
  roll() {
    this.originCardName = this.selfCard?.name;
    return this;
  }
  get output() {
    if (!this.hasLinkPermission) {
      return this.t("card.nopermission");
    } else {
      return this.t("nn.clear", { \u4EBA\u7269\u5361\u540D: this.originCardName });
    }
  }
  applyToCard() {
    if (!this.hasLinkPermission) return [];
    if (this.selfCard) {
      this.linkCard(this.selfCard.name, void 0);
    }
    return [];
  }
};

// ../../packages/dicecore/src/dice/special/nn/link.ts
var NnLinkDiceRoll = class extends BasePtDiceRoll {
  // 用户搜索的关键词
  keyword = "";
  // 查询到的卡片列表
  availableCards = [];
  // 如果只匹配到唯一一张，就执行关联
  get targetCard() {
    return this.availableCards.length === 1 ? this.availableCards[0] : void 0;
  }
  get targetCardName() {
    return this.targetCard?.name;
  }
  get hasLinkPermission() {
    return this.hasPermission(this.config.specialDice.nnDice.writable);
  }
  roll() {
    this.keyword = this.rawExpression.slice(2).trim();
    this.availableCards = this.queryCard({ name: this.keyword, isTemplate: false });
    return this;
  }
  get output() {
    if (!this.hasLinkPermission) {
      return this.t("card.nopermission");
    } else if (this.availableCards.length === 0) {
      return this.t("nn.search", { \u4EBA\u7269\u5361\u5217\u8868: [], \u5173\u952E\u8BCD: this.keyword });
    } else if (this.targetCardName) {
      return this.t("nn.link", { \u4EBA\u7269\u5361\u540D: this.targetCardName, \u5173\u952E\u8BCD: this.keyword });
    } else {
      const availableList = this.availableCards.map((card, i) => ({ \u4EBA\u7269\u5361\u540D: card.name, last: i === this.availableCards.length - 1 }));
      return this.t("nn.search", { \u4EBA\u7269\u5361\u5217\u8868: availableList, \u5173\u952E\u8BCD: this.keyword });
    }
  }
  applyToCard() {
    if (!this.hasLinkPermission) return [];
    if (this.availableCards.length === 1) {
      this.linkCard(this.targetCardName, this.context.userId);
    }
    return [];
  }
};

// ../../packages/dicecore/src/dice/special/nn/utils.ts
var NN_CLEAR = /^nn\s*(x|clear|clr)$/;
function dispatchNn(expression, context2, inlineRolls = []) {
  if (expression.match(NN_CLEAR)) {
    return new NnClearDiceRoll(expression, context2, inlineRolls);
  } else if (expression === "nn") {
    return new NnShowDiceRoll(expression, context2, inlineRolls);
  } else {
    return new NnLinkDiceRoll(expression, context2, inlineRolls);
  }
}

// ../../packages/dicecore/src/dice/standard/coc.ts
import { DiceRoll as DiceRoll8 } from "@dice-roller/rpg-dice-roller";
var CocDiceRoll = class extends StandardDiceRoll {
  // 标记技能检定列表
  skills2growth = [];
  get selfCard() {
    return super.selfCard;
  }
  doRoll() {
    for (let i = 0; i < this.times; i++) {
      const roll = new DiceRoll8(this.expression);
      this.rolls.push({
        roll,
        tests: this.skillsForTest.map(({ skill, tempValue, modifiedValue }) => {
          let cardEntry;
          if (!isNaN(tempValue)) {
            cardEntry = getCocTempEntry(skill, tempValue);
          } else {
            cardEntry = this.selfCard?.getEntry(skill);
          }
          let result;
          if (cardEntry) {
            cardEntry.value += modifiedValue || 0;
            result = this.decide({ baseValue: cardEntry.baseValue, targetValue: cardEntry.value, roll: roll.total });
            if (!cardEntry.isTemp && !((modifiedValue || 0) > 0) && !this.expression.endsWith("kl1") && cardEntry.type === "skills" && result?.success) {
              this.skills2growth.push(cardEntry.key);
            }
          }
          return { skill, targetValue: cardEntry?.value, cardEntry, result };
        })
      });
    }
  }
  applyToCard() {
    const card = this.selfCard;
    if (!card) return [];
    const uniqSkills = Array.from(new Set(this.skills2growth));
    let needUpdate = false;
    if (!this.vsFlag) {
      uniqSkills.forEach((skill) => {
        const updated = card.markSkillGrowth(skill);
        needUpdate ||= updated;
      });
    }
    return needUpdate ? [card] : [];
  }
  // 是否可以用于对抗
  get eligibleForOpposedRoll() {
    if (this.hidden) return false;
    return this.rolls.length === 1 && this.rolls[0].tests.length === 1 && !!this.rolls[0].tests[0].result;
  }
  // 用于对抗检定的数据
  /* protected */
  getSuccessLevelForOpposedRoll() {
    const rollResult = this.rolls[0];
    const test = rollResult.tests[0];
    const decideResult = test.result;
    const entry = test.cardEntry;
    return {
      // 通用参数这里也要提供一下，因为对抗检定有[对方xxx]
      \u7528\u6237\u540D: this.context.username,
      \u4EBA\u7269\u5361\u540D: this.selfCard?.name ?? this.context.username,
      at\u7528\u6237: this.context.userId === "system" ? this.context.username : at(this.context.userId),
      \u63CF\u8FF0: entry.key,
      \u63B7\u9AB0\u7ED3\u679C: rollResult.roll.total,
      \u63B7\u9AB0\u8868\u8FBE\u5F0F: rollResult.roll.notation,
      \u63B7\u9AB0\u8F93\u51FA: rollResult.roll.output,
      // 以下都是 coc 特有
      \u6280\u80FD\u503C: entry.baseValue,
      // coc 特有的因为可能存在难度前缀导致目标值与技能值不同
      \u76EE\u6807\u503C: entry.value,
      \u6210\u529F\u7B49\u7EA7: decideResult.level,
      \u6210\u529F: ["\u5927\u6210\u529F", "\u6781\u96BE\u6210\u529F", "\u56F0\u96BE\u6210\u529F", "\u6210\u529F"].includes(decideResult.level),
      \u5927\u6210\u529F: decideResult.level === "\u5927\u6210\u529F",
      \u6781\u96BE\u6210\u529F: decideResult.level === "\u6781\u96BE\u6210\u529F",
      \u56F0\u96BE\u6210\u529F: decideResult.level === "\u56F0\u96BE\u6210\u529F",
      \u5E38\u89C4\u6210\u529F: decideResult.level === "\u6210\u529F",
      \u5E38\u89C4\u5931\u8D25: decideResult.level === "\u5931\u8D25",
      \u5927\u5931\u8D25: decideResult.level === "\u5927\u5931\u8D25"
    };
  }
  getRollStartArgs() {
    return { ...super.getRollStartArgs(), coc: true };
  }
  getFormatArgs(roll, test) {
    const _test = test?.cardEntry;
    return {
      ...super.getFormatArgs(roll, test),
      // coc 额外追加是否是 困难/极难 前缀
      coc: true,
      \u56F0\u96BE\u524D\u7F00: _test?.difficulty === "hard",
      \u6781\u96BE\u524D\u7F00: _test?.difficulty === "ex",
      \u65E0\u524D\u7F00: _test?.difficulty === "normal"
    };
  }
};

// ../../packages/dicecore/src/dice/standard/cocOppose.ts
var CocOpposedDiceRoll = class extends CocDiceRoll {
  _opposedRoll;
  constructor(fullExp, context2, opposedRoll, inlineRolls = []) {
    super(fullExp, context2, inlineRolls);
    this._opposedRoll = opposedRoll;
  }
  parseDescriptions(expression) {
    super.parseDescriptions(expression);
    if (this.skillsForTest.length === 0) {
      this.skillsForTest.push(this._opposedRoll.skillsForTest[0]);
    }
  }
  get output() {
    const opposedResult = this.opposedRoll(this._opposedRoll);
    if (opposedResult) {
      return super.output + "\n" + opposedResult;
    } else {
      return super.output;
    }
  }
  applyToCard() {
    return [];
  }
  // 判断对抗检定结果
  opposedRoll(other) {
    if (!(other instanceof CocDiceRoll)) return "";
    if (!this.eligibleForOpposedRoll || !other.eligibleForOpposedRoll) return "";
    const selfResult = this.getSuccessLevelForOpposedRoll();
    const otherResult = other.getSuccessLevelForOpposedRoll();
    const selfSuccess = (() => {
      if (!selfResult.\u6210\u529F) {
        return "lose";
      } else {
        if (selfResult.\u6210\u529F\u7B49\u7EA7 === otherResult.\u6210\u529F\u7B49\u7EA7) {
          if (selfResult.\u6280\u80FD\u503C === otherResult.\u6280\u80FD\u503C) return "draw";
          return selfResult.\u6280\u80FD\u503C > otherResult.\u6280\u80FD\u503C ? "win" : "lose";
        } else {
          return compareCocSuccessLevel(selfResult.\u6210\u529F\u7B49\u7EA7, otherResult.\u6210\u529F\u7B49\u7EA7) > 0 ? "win" : "lose";
        }
      }
    })();
    const otherSuccess = (() => {
      if (selfSuccess === "lose") {
        return !otherResult.\u6210\u529F ? "lose" : "win";
      } else {
        return selfSuccess === "draw" ? "draw" : "lose";
      }
    })();
    const _otherArgs = Object.entries(otherResult).reduce((o, [k, v]) => Object.assign(o, { ["\u5BF9\u65B9" + k]: v }), {});
    const args = {
      ...selfResult,
      ..._otherArgs,
      \u80DC: selfSuccess === "win",
      \u8D1F: selfSuccess === "lose",
      \u5E73: selfSuccess === "draw",
      \u5BF9\u65B9\u80DC: otherSuccess === "win",
      \u5BF9\u65B9\u8D1F: otherSuccess === "lose",
      \u5BF9\u65B9\u5E73: otherSuccess === "draw",
      coc: true
    };
    return this.t("roll.vs.result", args);
  }
};
var _successLevelCode = {
  "\u5927\u5931\u8D25": -2,
  "\u5931\u8D25": -1,
  "\u6210\u529F": 1,
  "\u56F0\u96BE\u6210\u529F": 2,
  "\u6781\u96BE\u6210\u529F": 3,
  "\u5927\u6210\u529F": 4
};
function compareCocSuccessLevel(a, b) {
  return _successLevelCode[a] - _successLevelCode[b];
}

// ../../packages/dicecore/src/dice/standard/dnd.ts
import { DiceRoll as DiceRoll9 } from "@dice-roller/rpg-dice-roller";
var DndDiceRoll = class extends StandardDiceRoll {
  get selfCard() {
    return super.selfCard;
  }
  doRoll() {
    for (let i = 0; i < this.times; i++) {
      if (this.skillsForTest.length === 0) {
        this.rolls.push({ roll: new DiceRoll9(this.expression), tests: [] });
        continue;
      }
      this.skillsForTest.forEach(({ skill, tempValue: dc, modifiedValue }) => {
        const entry = this.selfCard?.getEntry(skill);
        let finalExpression;
        if (entry && entry.type === "props" && entry.postfix === "none") {
          const modifiedValue2 = this.selfCard?.getEntry(`${entry.key}\u8C03\u6574`)?.value;
          finalExpression = typeof modifiedValue2 === "number" ? `${this.expression}+${modifiedValue2}` : this.expression;
        } else if (entry && entry.type === "skills" && entry.postfix === "none") {
          const propName = getPropOfSkill(entry.key);
          const modifiedValue2 = this.selfCard?.getEntry(`${propName}\u8C03\u6574`)?.value;
          const skillValue = this.selfCard?.getEntry(`${entry.key}\u4FEE\u6B63`)?.value;
          const experiencedValue = this.selfCard?.data.meta.experienced[entry.key] ? this.selfCard.data.basic.\u719F\u7EC3 : 0;
          const addition = `+{${modifiedValue2}}[${propName}]` + (skillValue ? `+{${skillValue}}[\u4FEE\u6B63]` : "") + (experiencedValue ? `+{${experiencedValue}}[\u719F\u7EC3]` : "");
          finalExpression = `${this.expression}${addition}`;
        } else if (entry && entry.type === "props" && entry.postfix === "saving") {
          finalExpression = `${this.expression}+${entry.value}`;
        } else {
          finalExpression = this.expression;
        }
        const roll = new DiceRoll9(finalExpression);
        let result = void 0;
        const targetValue = dc + (modifiedValue || 0);
        if (!isNaN(dc)) {
          result = this.decide({ baseValue: dc, targetValue, roll: roll.total });
        }
        this.rolls.push({ roll, tests: [{ skill, targetValue, cardEntry: entry, result }] });
      });
    }
  }
  get eligibleForOpposedRoll() {
    if (this.hidden) return false;
    return this.rolls.length === 1;
  }
  // 用于对抗检定的数据
  /* protected */
  getDataForOpposedRoll() {
    const rollResult = this.rolls[0];
    const test = rollResult.tests[0];
    return {
      // 通用参数这里也要提供一下，因为对抗检定有[对方xxx]
      \u7528\u6237\u540D: this.context.username,
      \u4EBA\u7269\u5361\u540D: this.selfCard?.name ?? this.context.username,
      at\u7528\u6237: this.context.userId === "system" ? this.context.username : at(this.context.userId),
      \u63CF\u8FF0: test?.skill ?? "",
      \u63B7\u9AB0\u7ED3\u679C: rollResult.roll.total,
      \u63B7\u9AB0\u8868\u8FBE\u5F0F: rollResult.roll.notation,
      \u63B7\u9AB0\u8F93\u51FA: rollResult.roll.output
    };
  }
  getRollStartArgs() {
    return { ...super.getRollStartArgs(), dnd: true };
  }
  getFormatArgs(roll, test) {
    return { ...super.getFormatArgs(roll, test), dnd: true };
  }
};

// ../../packages/dicecore/src/dice/standard/dndOppose.ts
var DndOpposedRoll = class extends DndDiceRoll {
  _opposedRoll;
  constructor(fullExp, context2, opposedRoll, inlineRolls = []) {
    super(fullExp, context2, inlineRolls);
    this._opposedRoll = opposedRoll;
  }
  parseDescriptions(expression) {
    super.parseDescriptions(expression);
    if (this.skillsForTest.length === 0 && this._opposedRoll.skillsForTest.length > 0) {
      const skill = this._opposedRoll.skillsForTest[0].skill;
      this.skillsForTest.push({ skill, tempValue: NaN, modifiedValue: NaN });
    }
  }
  get output() {
    const opposedResult = this.calculateResult(this._opposedRoll);
    if (opposedResult) {
      return super.output + "\n" + opposedResult;
    } else {
      return super.output;
    }
  }
  // 判断对抗检定结果
  calculateResult(other) {
    if (!(other instanceof DndDiceRoll)) return "";
    if (!this.eligibleForOpposedRoll || !other.eligibleForOpposedRoll) return "";
    const selfResult = this.getDataForOpposedRoll();
    const otherResult = other.getDataForOpposedRoll();
    const selfSuccess = selfResult.\u63B7\u9AB0\u7ED3\u679C > otherResult.\u63B7\u9AB0\u7ED3\u679C ? "win" : selfResult.\u63B7\u9AB0\u7ED3\u679C === otherResult.\u63B7\u9AB0\u7ED3\u679C ? "draw" : "lose";
    const otherSuccess = selfResult.\u63B7\u9AB0\u7ED3\u679C > otherResult.\u63B7\u9AB0\u7ED3\u679C ? "lose" : selfResult.\u63B7\u9AB0\u7ED3\u679C === otherResult.\u63B7\u9AB0\u7ED3\u679C ? "draw" : "win";
    const _otherArgs = Object.entries(otherResult).reduce((o, [k, v]) => Object.assign(o, { ["\u5BF9\u65B9" + k]: v }), {});
    const args = {
      ...selfResult,
      ..._otherArgs,
      \u80DC: selfSuccess === "win",
      \u8D1F: selfSuccess === "lose",
      \u5E73: selfSuccess === "draw",
      \u5BF9\u65B9\u80DC: otherSuccess === "win",
      \u5BF9\u65B9\u8D1F: otherSuccess === "lose",
      \u5BF9\u65B9\u5E73: otherSuccess === "draw",
      dnd: true
    };
    return this.t("roll.vs.result", args);
  }
};

// ../../packages/dicecore/src/dice/utils/create.ts
function createDiceRoll(userCommand, opposedRoll, listeners = {}) {
  const { command: expression, context: context2 } = userCommand;
  const selfCard = CardProvider.INSTANCE.getCard(context2.channelUnionId, context2.userId);
  const config = ConfigProvider.INSTANCE.getConfig(context2.channelUnionId);
  const specialDiceConfig = config.specialDice;
  const inlineRolls = [];
  if (expression.startsWith("sc") && specialDiceConfig.scDice.enabled) {
    const parsedExpression = parseTemplate(expression, context2, inlineRolls);
    return new ScDiceRoll(parsedExpression, context2, inlineRolls).roll();
  } else if (expression.startsWith("en") && specialDiceConfig.enDice.enabled) {
    return dispatchEn(expression, context2, inlineRolls).roll();
  } else if (expression.startsWith("ri") && specialDiceConfig.riDice.enabled) {
    return new RiDiceRoll(expression, context2, inlineRolls).roll();
  } else if (expression.startsWith("init") && specialDiceConfig.riDice.enabled) {
    const parsedExpression = parseTemplate(expression, context2, inlineRolls);
    return new RiListDiceRoll(parsedExpression, context2, inlineRolls).roll();
  } else if (expression.startsWith("st") && specialDiceConfig.stDice.enabled) {
    return dispatchSt(expression, context2, inlineRolls).roll();
  } else if (["ds", "\u6B7B\u4EA1\u8C41\u514D"].includes(expression) && specialDiceConfig.dsDice.enabled) {
    return new DsDiceRoll(expression, context2, inlineRolls).roll();
  } else if (expression.startsWith("nn") && specialDiceConfig.nnDice.enabled) {
    return dispatchNn(expression, context2, inlineRolls).roll();
  } else {
    const roller = (() => {
      const parsedExpression = parseTemplate(expression, context2, inlineRolls);
      if (opposedRoll && specialDiceConfig.opposeDice.enabled) {
        const opposedType = getOpposedType(opposedRoll, selfCard);
        if (opposedType === "coc") {
          return new CocOpposedDiceRoll(parsedExpression, context2, opposedRoll, inlineRolls);
        } else if (opposedType === "dnd") {
          return new DndOpposedRoll(parsedExpression, context2, opposedRoll, inlineRolls);
        }
      }
      if (selfCard instanceof GeneralCard) {
        return new StandardDiceRoll(parsedExpression, context2, inlineRolls);
      } else if (selfCard instanceof DndCard) {
        return new DndDiceRoll(parsedExpression, context2, inlineRolls);
      } else {
        return new CocDiceRoll(parsedExpression, context2, inlineRolls);
      }
    })();
    roller.addDiceRollEventListener(listeners);
    roller.roll();
    roller.removeDiceRollEventListener(listeners);
    return roller;
  }
}
function getOpposedType(opposedRoll, selfCard) {
  if (!selfCard) {
    if (opposedRoll instanceof CocDiceRoll) return "coc";
    if (opposedRoll instanceof DndDiceRoll) return "dnd";
    return void 0;
  }
  if (selfCard.type === "coc" && opposedRoll instanceof CocDiceRoll) return "coc";
  if (selfCard.type === "dnd" && opposedRoll instanceof DndDiceRoll) return "dnd";
  return void 0;
}

// ../../packages/dicecore/src/config/helpers/customReply.ts
async function handleCustomReply(processors, { command, context: context2 }) {
  for (const processor of processors) {
    const matchGroups = isMatch(processor, command);
    if (!matchGroups) continue;
    const reply = await parseMessage(processor, matchGroups, context2);
    return [true, reply];
  }
  return [false, void 0];
}
async function parseMessage(processor, matchGroups, context2) {
  try {
    if (!processor.items && !processor.handler) throw new Error("\u6CA1\u6709\u5904\u7406\u81EA\u5B9A\u4E49\u56DE\u590D\u7684\u65B9\u6CD5");
    const handler = processor.handler ?? randomReplyItem2(processor.items).reply;
    const username = context2.username;
    const userId = context2.userId;
    const userRole = context2.userRole;
    const channelUnionId = context2.channelUnionId;
    const replyFunc = typeof handler === "function" ? handler : (env2, _matchGroup) => {
      return mustache_default.render(handler, { ...env2, ..._matchGroup }, void 0, { escape: (value) => value });
    };
    const card = CardProvider.INSTANCE.getCard(channelUnionId, userId);
    const env = {
      ...context2,
      // 新增一些便于用户在 ui 上可以直接使用的参数
      nick: username,
      \u7528\u6237\u540D: username,
      \u4EBA\u7269\u5361\u540D: card?.name ?? username,
      at: at(userId),
      at\u7528\u6237: at(userId)
    };
    const template = await replyFunc(env, matchGroups);
    return parseTemplate(template, { userId, username, userRole, channelUnionId }, [], "message_template");
  } catch (e) {
    console.error("[Config] \u81EA\u5B9A\u4E49\u56DE\u590D\u5904\u7406\u51FA\u9519", e?.message);
    return void 0;
  }
}
function isMatch(processor, command) {
  switch (processor.trigger) {
    case "exact":
      return processor.command === command ? {} : false;
    case "startWith":
      return command.startsWith(processor.command) ? {} : false;
    case "include":
      return command.includes(processor.command) ? {} : false;
    case "regex": {
      const regex = new RegExp(processor.command);
      const match = command.match(regex);
      return match ? match.groups || {} : false;
    }
  }
}
function randomReplyItem2(items) {
  if (items.length === 1) return items[0];
  const totalWeight = items.map((item) => item.weight).reduce((a, b) => a + b, 0);
  let randomWeight = Math.random() * totalWeight;
  for (const item of items) {
    randomWeight -= item.weight;
    if (randomWeight < 0) {
      return item;
    }
  }
  return items[items.length - 1];
}

// ../../packages/dicecore/src/config/config.ts
var ChannelConfig = class {
  config;
  constructor(config) {
    this.config = updateConfigByPlugin(upgradeConfig(config));
  }
  get botOwner() {
    return this.config.botOwner;
  }
  /**
   * 默认骰配置
   */
  defaultRoll(card) {
    const fromCard = this.config.defaultRoll.preferCard ? card?.defaultRoll : void 0;
    return fromCard || this.config.defaultRoll.expression || "d%";
  }
  /**
   * 特殊指令配置
   */
  get specialDice() {
    return this.config.specialDice;
  }
  // 子频道 embed 自定义回复配置索引
  get embedCustomReplyMap() {
    const items = this.config.embedPlugin.customReply;
    if (!items) return {};
    const embedPluginId2 = this.config.embedPlugin.id;
    return items.reduce((obj, item) => Object.assign(obj, { [`${embedPluginId2}.${item.id}`]: item }), {});
  }
  // 子频道自定义回复处理器列表
  get customReplyProcessors() {
    return this.config.customReplyIds.filter((item) => item.enabled).map((item) => this.embedCustomReplyMap[item.id] || PluginProvider.INSTANCE.getPluginItem(item.id)).filter((conf) => !!conf);
  }
  /**
   * 处理自定义回复
   */
  async handleCustomReply(command) {
    return await handleCustomReply(this.customReplyProcessors, command);
  }
  // embed 规则配置索引
  get embedRollDeciderMap() {
    const items = this.config.embedPlugin.rollDecider;
    if (!items) return {};
    const embedPluginId2 = this.config.embedPlugin.id;
    return items.reduce((obj, item) => Object.assign(obj, { [`${embedPluginId2}.${item.id}`]: item }), {});
  }
  // 当前正在使用的规则配置
  get rollDecider() {
    const currentId = this.config.rollDeciderId;
    if (!currentId) return void 0;
    return this.embedRollDeciderMap[currentId];
  }
  /**
   * 根据当前的规则计算是否成功
   */
  decideRoll(context2) {
    return decideRoll(this.rollDecider, context2);
  }
  // 子频道 embed 别名指令配置索引
  get embedAliasRollMap() {
    const items = this.config.embedPlugin.aliasRoll;
    if (!items) return {};
    const embedPluginId2 = this.config.embedPlugin.id;
    return items.reduce((obj, item) => Object.assign(obj, { [`${embedPluginId2}.${item.id}`]: item }), {});
  }
  // 子频道别名指令处理器列表
  get aliasRollProcessors() {
    return this.config.aliasRollIds.filter((item) => item.enabled).map((item) => this.embedAliasRollMap[item.id] || PluginProvider.INSTANCE.getPluginItem(item.id));
  }
  get aliasRollProcessors_expression() {
    return this.aliasRollProcessors.filter((conf) => conf?.scope === "expression");
  }
  get aliasRollProcessors_command() {
    return this.aliasRollProcessors.filter((conf) => conf?.scope === "command");
  }
  /**
   * 解析别名指令
   */
  parseAliasRoll_expression(expression, context2, inlineRolls) {
    return parseAliasForExpression(this.aliasRollProcessors_expression, expression, context2, inlineRolls);
  }
  parseAliasRoll_command(command) {
    return parseAliasForCommand(this.aliasRollProcessors_command, command);
  }
  // 子频道自定义文案配置
  get customTextMap() {
    const embed = this.config.embedPlugin.customText?.[0] ?? getEmbedCustomText();
    const pluginList = this.config.customTextIds.filter((item) => item.enabled).map((item) => PluginProvider.INSTANCE.getPluginItem(item.id));
    const validConfigList = [embed, ...pluginList].filter((conf) => !!conf);
    return validConfigList.map((config) => config.texts).reduce((all, textMap) => Object.assign(all, textMap), {});
  }
  /**
   * 自定义文案格式化
   */
  formatCustomText(key, args, context2) {
    return renderCustomText(this.customTextMap, key, args, context2);
  }
  // 子频道 hook 处理器
  getHookProcessors(prop) {
    return this.config.hookIds[prop].filter((item) => item.enabled).map((item) => PluginProvider.INSTANCE.getPluginItem(item.id)).filter((conf) => !!conf);
  }
  /**
   * Hook 处理
   */
  async hook_onReceiveCommand(result) {
    console.log("[Hook] \u6536\u5230\u6307\u4EE4");
    await handleHooksAsync(this.getHookProcessors("onReceiveCommand"), result);
  }
  hook_beforeParseDiceRoll(diceCommand) {
    console.log("[Hook] \u89E3\u6790\u9AB0\u5B50\u6307\u4EE4\u524D");
    handleHooks(this.getHookProcessors("beforeParseDiceRoll"), diceCommand);
  }
  hook_onCardEntryChange(e) {
    console.log("[Hook] \u4EBA\u7269\u5361\u6570\u503C\u53D8\u5316");
    handleVoidHooks(this.getHookProcessors("onCardEntryChange"), e);
  }
  hook_onMessageReaction(e) {
    console.log("[Hook] \u6536\u5230\u8868\u60C5\u8868\u6001");
    return handleLinearHooksAsync(this.getHookProcessors("onMessageReaction"), e);
  }
  hook_beforeDiceRoll(roll) {
    console.log("[Hook] \u63B7\u9AB0/\u68C0\u5B9A\u524D");
    handleHooks(this.getHookProcessors("beforeDiceRoll"), roll);
  }
  hook_afterDiceRoll(roll) {
    console.log("[Hook] \u63B7\u9AB0/\u68C0\u5B9A\u540E");
    handleVoidHooks(this.getHookProcessors("afterDiceRoll"), roll);
  }
};

// ../../packages/dicecore/src/config/config-provider.ts
var ConfigProvider = class _ConfigProvider {
  static INSTANCE = new _ConfigProvider();
  configMap = /* @__PURE__ */ new Map();
  constructor() {
    eventBus.on("plugins-added", () => this._updateByPlugin());
  }
  // 插件更新后，重新更新配置
  _updateByPlugin() {
    for (const [id, channelConfig] of this.configMap.entries()) {
      this.register(id, channelConfig.config);
    }
  }
  register(id, config) {
    this.configMap.set(id, new ChannelConfig(config));
  }
  unregister(id) {
    this.configMap.delete(id);
  }
  get defaultConfig() {
    if (!this.configMap.has("default")) {
      this.register("default", getInitialDefaultConfig());
    }
    return this.configMap.get("default");
  }
  getConfig(id) {
    return this.configMap.get(id) || this.defaultConfig;
  }
};

// ../../packages/dicecore/src/main/dispatch.ts
async function dispatchCommand(userCommand, options = {}) {
  const { context: context2 } = userCommand;
  const config = ConfigProvider.INSTANCE.getConfig(context2.channelUnionId);
  const cardEntryChangeListener = (event) => {
    config.hook_onCardEntryChange({ event, context: context2 });
  };
  eventBus.on("card-entry-change", cardEntryChangeListener);
  try {
    await config.hook_onReceiveCommand(userCommand);
    userCommand.command = config.parseAliasRoll_command(userCommand.command);
    const [handled, reply] = await config.handleCustomReply(userCommand);
    if (handled) {
      return { type: "customReply", reply };
    }
    if (options.interceptor) {
      const [handled2, payload] = await options.interceptor(userCommand);
      if (handled2) {
        return { type: "interceptor", payload };
      }
    }
    const opposedRoll = await options.getOpposedRoll?.(userCommand);
    return tryRollDice(config, userCommand, opposedRoll);
  } finally {
    eventBus.off("card-entry-change", cardEntryChangeListener);
  }
}
async function dispatchReaction(userCommand, options = {}) {
  const { context: context2 } = userCommand;
  const config = ConfigProvider.INSTANCE.getConfig(context2.channelUnionId);
  const cardEntryChangeListener = (event) => {
    config.hook_onCardEntryChange({ event, context: context2 });
  };
  eventBus.on("card-entry-change", cardEntryChangeListener);
  try {
    const handled = await config.hook_onMessageReaction(userCommand);
    if (handled) return void 0;
    const command = await options.getReactionCommand?.(userCommand);
    if (!command) return void 0;
    userCommand.command = command;
    const opposedRoll = await options.getOpposedRoll?.(userCommand);
    return tryRollDice(config, userCommand, opposedRoll);
  } finally {
    eventBus.off("card-entry-change", cardEntryChangeListener);
  }
}
function tryRollDice(config, userCommand, opposedRoll) {
  try {
    const roller = createDiceRoll(
      userCommand,
      opposedRoll,
      {
        before: (roll) => config.hook_beforeDiceRoll(roll),
        after: (roll) => config.hook_afterDiceRoll(roll)
      }
    );
    const affectedCards = roller.applyToCard();
    return { type: "dice", diceRoll: roller, affectedCards };
  } catch (e) {
    console.log("[Dice] \u672A\u8BC6\u522B\u8868\u8FBE\u5F0F", e?.message);
    return { type: "dice" };
  }
}

// ../../packages/dicecore/src/index.ts
var PluginProvider2 = PluginProvider.INSTANCE;
var ConfigProvider2 = ConfigProvider.INSTANCE;
var CardProvider2 = CardProvider.INSTANCE;
var RiProvider2 = RiProvider.INSTANCE;
var Events = eventBus;

// src/app/dispatcher.ts
function dispatch(client, server, request) {
  switch (request.cmd) {
    case "bot/loginV2":
      return handleLoginV2(client, server, request.data);
    case "channel/listen":
      return handleListenToChannel(client, server, request.data);
    case "channel/create":
      return handleChannelCreate(client, server, request.data);
    case "card/import":
      return handleCardImport(client, server, request.data);
    case "card/delete":
      handleCardDelete(client, server, request.data);
      break;
    case "card/link":
      return handleCardLink(client, server, request.data);
    case "channel/config":
      return handleChannelConfig(client, server, request.data);
    case "channel/config/reset":
      return handleResetChannelConfig(client, server);
    case "scene/sendBattleLog":
      return handleSceneSendBattleLog(client, server, request.data);
    case "scene/sendMapImage":
      return handleSceneSendMapImage(client, server, request.data);
    case "ri/set":
      return handleRiSet(client, server, request.data);
    case "ri/delete":
      return handleRiDelete(client, server, request.data);
    case "dice/roll":
      return handleManualDiceRoll(client, server, request.data);
    case "user/delete":
      return handleUserDelete(client, server, request.data);
    case "plugin/reload":
      return handlePluginReload(client, server, request.data);
  }
}
async function handleLoginV2(client, server, data) {
  console.log("\u673A\u5668\u4EBA\u767B\u5F55\uFF1A", getBotId(data.platform, data.appid));
  try {
    const bot = await server.bots.login(data);
    client.bindToBot(bot.id);
    client.send({ cmd: "bot/loginV2", success: true, data: null });
    client.autorun((ws) => {
      if (bot.botInfo) {
        ws.send({ cmd: "bot/info", success: true, data: bot.botInfo });
      }
    });
    client.autorun((ws) => {
      const channels = bot.guilds.all.map((guild) => guild.allChannels.map((channel) => ({
        id: channel.id,
        name: channel.name,
        type: channel.type,
        guildId: channel.guildId,
        guildName: guild.name,
        guildIcon: guild.icon
      }))).flat();
      ws.send({ cmd: "channel/list", success: true, data: channels });
    });
    client.autorun((ws) => {
      ws.send({ cmd: "plugin/list", success: true, data: server.plugin.pluginListManifest });
    });
  } catch (e) {
    client.send({ cmd: "bot/loginV2", success: false, data: null });
  }
}
function handleListenToChannel(client, server, data) {
  console.log("\u9009\u62E9\u9891\u9053\uFF1A", data.channelId);
  client.listenTo(data.channelId, data.guildId);
  client.autorun((ws) => {
    const bot = ws.bot;
    if (bot) {
      const guild = bot.guilds.find(ws.listenToGuildId);
      if (guild) {
        const users = guild.allUsers.map((user) => ({
          id: user.id,
          nick: user.name,
          username: user.name,
          avatar: user.avatar,
          bot: user.isBot,
          deleted: user.deleted
        }));
        ws.send({ cmd: "user/list", success: true, data: users });
      }
    }
  });
  client.autorun((ws) => {
    const channel = ws.listenToChannelUnionId;
    if (channel) {
      const linkMap = server.cards.getLinkMap(channel);
      const data2 = Object.entries(linkMap).map(([userId, cardName]) => ({ userId, cardName }));
      ws.send({ cmd: "card/link", success: true, data: data2 });
    } else {
      ws.send({ cmd: "card/link", success: true, data: [] });
    }
  });
  client.autorun((ws) => {
    const channelId = ws.listenToChannelUnionId;
    if (channelId) {
      const config = server.config.getChannelConfig(channelId).config;
      ws.send({ cmd: "channel/config", success: true, data: { config } });
    }
  });
  client.autorun((ws) => {
    const bot = ws.bot;
    const channelId = ws.listenToChannelUnionId;
    if (bot && channelId) {
      const list = RiProvider2.getRiList(channelId);
      ws.send({ cmd: "ri/list", success: true, data: list });
    }
  });
}
async function handleChannelCreate(client, server, data) {
  const bot = client.bot;
  if (bot) {
    const guild = bot.guilds.find(data.guildId);
    if (guild) {
      const success = await guild.createChannel(data.name);
      client.send({ cmd: "channel/create", success, data: success ? "\u521B\u5EFA\u6210\u529F" : "\u521B\u5EFA\u5931\u8D25" });
      return;
    }
  }
  client.send({ cmd: "channel/create", success: false, data: "\u627E\u4E0D\u5230\u9891\u9053\u4FE1\u606F" });
}
function handleCardImport(client, server, data) {
  server.cards.importCard(client, data);
}
function handleCardDelete(client, server, data) {
  server.cards.deleteCard(client, data);
}
function handleCardLink(client, server, data) {
  if (!client.listenToChannelId) return;
  server.cards.handleLinkCard(client, data);
}
function handleChannelConfig(client, server, data) {
  if (!client.listenToChannelUnionId) return;
  server.config.saveChannelConfig(client.listenToChannelUnionId, data);
}
function handleResetChannelConfig(client, server) {
  if (!client.listenToChannelUnionId) return;
  server.config.resetChannelConfig(client);
}
async function handleSceneSendBattleLog(client, server, data) {
  const bot = client.bot;
  if (bot) {
    const channel = bot.guilds.findChannel(client.listenToChannelId, client.listenToGuildId);
    if (channel) {
      const resp = await channel.sendMessage(data.content);
      if (resp) {
        client.send({ cmd: "scene/sendBattleLog", success: true, data: "" });
        return;
      }
    }
  }
  client.send({ cmd: "scene/sendBattleLog", success: false, data: "\u53D1\u9001\u5931\u8D25" });
}
async function handleSceneSendMapImage(client, server, data) {
  const bot = client.bot;
  if (bot) {
    const channel = bot.guilds.findChannel(client.listenToChannelId, client.listenToGuildId);
    if (channel) {
      const resp = await channel.sendRawImageMessage(data.data);
      if (resp) {
        client.send({ cmd: "scene/sendMapImage", success: true, data: "" });
        return;
      }
    }
  }
  client.send({ cmd: "scene/sendMapImage", success: false, data: "\u53D1\u9001\u5931\u8D25" });
}
function handleRiSet(client, server, data) {
  data.seq = data.seq === null ? NaN : data.seq;
  data.seq2 = data.seq2 === null ? NaN : data.seq2;
  const bot = client.bot;
  const channelUnionId = client.listenToChannelUnionId;
  if (bot && channelUnionId) {
    RiProvider2.updateRiList(channelUnionId, [data]);
  }
}
function handleRiDelete(client, server, data) {
  const bot = client.bot;
  const channelUnionId = client.listenToChannelUnionId;
  if (bot && channelUnionId) {
    RiProvider2.removeRiList(channelUnionId, [data]);
  }
}
async function handleManualDiceRoll(client, server, data) {
  const bot = client.bot;
  if (bot) {
    await bot.commandHandler.manualDiceRollFromWeb(client, data);
    client.send({ cmd: "dice/roll", success: true, data: "" });
  }
}
function handleUserDelete(client, server, data) {
  const bot = client.bot;
  if (bot) {
    const guild = bot.guilds.find(client.listenToGuildId);
    if (guild) {
      guild.deleteUsersBatch(data.ids);
    }
  }
}
function handlePluginReload(client, server, data) {
  server.plugin.manualReloadPlugins(data);
  client.send({ cmd: "plugin/reload", success: true, data: "" });
}

// src/app/wss.ts
import { makeAutoObservable as makeAutoObservable13, configure } from "mobx";

// src/service/card.ts
import fs2 from "fs";
import { makeAutoObservable as makeAutoObservable2 } from "mobx";
import mitt4 from "mitt";

// src/utils.ts
import fs from "fs";
import path from "path";
import fetch2 from "node-fetch";
function removeBackspaces(str) {
  let index = str.indexOf("\b");
  while (index >= 0) {
    const left = str.substring(0, index - 1);
    const right = str.substring(index + 1);
    str = (left + right).trim();
    index = str.indexOf("\b");
  }
  return str;
}
function copyFolderSync(from, to) {
  if (!fs.existsSync(to)) fs.mkdirSync(to);
  fs.readdirSync(from).forEach((element) => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
}
function resolveRootDir(dirName) {
  if (process.env.NODE_ENV === "development") {
    return `../../${dirName}`;
  } else {
    return `./${dirName}`;
  }
}

// src/service/card.ts
var CARD_DIR = resolveRootDir("cards");
var LINK_FILE_NAME = "/__link.json";
var CardManager = class {
  wss;
  cardMap = {};
  // 防止文件名和卡片内部名字不一样，导致名字重复，因此以名字做 key 存储，以内部名字为准
  channelLinkMap = {};
  // channelId => 关联关系表。同一个人在不同的子频道可以关联不同的人物卡
  emitter = mitt4();
  get cardList() {
    return Object.values(this.cardMap);
  }
  constructor(wss) {
    makeAutoObservable2(this);
    this.wss = wss;
    this.initCardFiles();
    CardProvider2.setLinker(new DefaultCardLinker(this.channelLinkMap));
    Events.on("card-entry-change", (event) => this.emitter.emit("EntryChange", event));
    Events.on("card-link-change", () => saveLinkFile(this.channelLinkMap));
  }
  initCardFiles() {
    try {
      console.log("[Card] \u5F00\u59CB\u8BFB\u53D6\u4EBA\u7269\u5361");
    } catch (e) {
      console.error("[Card] \u4EBA\u7269\u5361\u5217\u8868\u5931\u8D25", e);
    }
  }
  importCard(client, req) {
    const { card } = req;
    const cardName = card.name;
    console.log("[Card] \u4FDD\u5B58\u4EBA\u7269\u5361", cardName);
    this.cardMap[cardName] = card;
    CardProvider2.registerCard(cardName, this.cardMap[cardName]);
    saveCardFile(this.cardMap[cardName]);
    this.wss.sendToChannel(client.listenToChannelUnionId, { cmd: "card/import", success: true, data: null });
  }
  saveCard(card) {
    saveCardFile(card.data);
  }
  deleteCard(client, req) {
    const { cardName } = req;
    console.log("[Card] \u5220\u9664\u4EBA\u7269\u5361", cardName);
    delete this.cardMap[cardName];
    CardProvider2.unregisterCard(cardName);
    deleteCardFile(cardName);
  }
  handleLinkCard(client, req) {
    const { cardName, userId } = req;
    const channelUnionId = client.listenToChannelUnionId;
    if (channelUnionId) {
      console.log("[Card] \u5173\u8054\u4EBA\u7269\u5361", req);
      this.linkCard(channelUnionId, cardName, userId ?? void 0);
    }
  }
  getLinkMap(channelUnionId) {
    return CardProvider2.getLinkMap(channelUnionId);
  }
  // 根据子频道和用户 id，获取该用户关联的人物卡
  getCard(channelUnionId, userId) {
    return CardProvider2.getCard(channelUnionId, userId);
  }
  // 根据子频道、用户 id、人物卡名，关联人物卡. 不传 userId 代表取消这张卡的关联
  // 注：目前不会校验 cardName 是否真的存在这张卡
  linkCard(channelUnionId, cardName, userId) {
    CardProvider2.linkCard(channelUnionId, cardName, userId);
  }
  // 根据条件查询人物卡
  queryCard(query = {}) {
    return CardProvider2.queryCard(query);
  }
  // 人物卡变化事件
  addCardEntryChangeListener(listener) {
    this.emitter.on("EntryChange", listener);
  }
  removeCardEntryChangeListener(listener) {
    this.emitter.off("EntryChange", listener);
  }
};
function saveCardFile(cardData) {
  if (!fs2.existsSync(CARD_DIR)) {
    fs2.mkdirSync(CARD_DIR);
  }
  const cardName = cardData.name;
  fs2.writeFile(`${CARD_DIR}/${cardName}.json`, JSON.stringify(cardData), (e) => {
    if (e) {
      console.error("[Card] \u4EBA\u7269\u5361\u5199\u6587\u4EF6\u5931\u8D25", e);
    }
  });
}
function deleteCardFile(name) {
  try {
    if (!fs2.existsSync(CARD_DIR)) {
      return;
    }
    fs2.unlinkSync(`${CARD_DIR}/${name}.json`);
    console.log("[Card] \u5220\u9664\u4EBA\u7269\u5361\u6210\u529F");
  } catch (e) {
    console.error("[Card] \u5220\u9664\u4EBA\u7269\u5361\u5931\u8D25", e);
  }
}
function saveLinkFile(link) {
  if (!fs2.existsSync(CARD_DIR)) {
    fs2.mkdirSync(CARD_DIR);
  }
  fs2.writeFile(`${CARD_DIR}${LINK_FILE_NAME}`, JSON.stringify(link), (e) => {
    if (e) {
      console.error("[Card] \u4EBA\u7269\u5361\u5199\u5173\u8054\u5931\u8D25", e);
    }
  });
}

// src/service/config.ts
import fs3 from "fs";
import { makeAutoObservable as makeAutoObservable3 } from "mobx";
var import_lodash = __toESM(require_lodash());
var CONFIG_DIR = resolveRootDir("config");
var ConfigManager = class {
  wss;
  configMap = {};
  defaultConfig;
  // 保存旧版本数据用于兼容 channelId(qqguild) => config
  configMapV1 = {};
  constructor(wss) {
    makeAutoObservable3(this);
    this.wss = wss;
    this.initConfig();
  }
  getChannelConfig(channelUnionId) {
    if (channelUnionId === "default") {
      return ConfigProvider2.defaultConfig;
    } else if (this.configMap[channelUnionId]) {
      return ConfigProvider2.getConfig(channelUnionId);
    } else if (channelUnionId.startsWith("qqguild_")) {
      const channelId = channelUnionId.split("_").at(-1);
      if (this.configMapV1[channelId]) {
        console.log("[Config] \u8FC1\u79FB\u65E7\u7248\u672C\u914D\u7F6E\uFF1A", channelUnionId);
        const config = this.configMapV1[channelId];
        delete this.configMapV1[channelId];
        deleteConfigFile(channelId);
        this.saveChannelConfig(channelUnionId, { config, setDefault: false });
        return ConfigProvider2.getConfig(channelUnionId);
      }
    }
    return ConfigProvider2.defaultConfig;
  }
  saveChannelConfig(channelUnionId, { config, setDefault }) {
    console.log("[Config] \u4FDD\u5B58\u914D\u7F6E\uFF0C\u8BBE\u4E3A\u9ED8\u8BA4\u914D\u7F6E\uFF1A", setDefault);
    this.configMap[channelUnionId] = (0, import_lodash.cloneDeep)(config);
    ConfigProvider2.register(channelUnionId, this.configMap[channelUnionId]);
    saveConfigFile(channelUnionId, config);
    if (setDefault) {
      this.defaultConfig = (0, import_lodash.cloneDeep)(config);
      ConfigProvider2.register("default", this.defaultConfig);
      saveConfigFile("default", config);
    }
  }
  resetChannelConfig(client) {
    console.log("[Config] \u91CD\u7F6E\u4E3A\u9ED8\u8BA4\u914D\u7F6E");
    const channelUnionId = client.listenToChannelUnionId;
    if (!channelUnionId) return;
    delete this.configMap[channelUnionId];
    deleteConfigFile(channelUnionId);
  }
  initConfig() {
    try {
      console.log("[Config] \u5F00\u59CB\u8BFB\u53D6\u914D\u7F6E");
    } catch (e) {
      console.error("[Config] \u8BFB\u53D6\u914D\u7F6E\u5217\u8868\u5931\u8D25", e);
    }
    if (!this.defaultConfig) {
      this.defaultConfig = ConfigProvider2.defaultConfig.config;
      ConfigProvider2.register("default", this.defaultConfig);
    }
  }
};
function saveConfigFile(name, config) {
  if (!fs3.existsSync(CONFIG_DIR)) {
    fs3.mkdirSync(CONFIG_DIR);
  }
  fs3.writeFile(`${CONFIG_DIR}/${name}.json`, JSON.stringify(config), (e) => {
    if (e) {
      console.error("[Config] \u914D\u7F6E\u5199\u6587\u4EF6\u5931\u8D25", e);
    }
  });
}
function deleteConfigFile(name) {
  try {
    if (!fs3.existsSync(CONFIG_DIR)) {
      return;
    }
    const filePath = `${CONFIG_DIR}/${name}.json`;
    if (!fs3.existsSync(filePath)) {
      return;
    }
    fs3.unlinkSync(filePath);
  } catch (e) {
    console.error("[Config] \u5220\u9664\u914D\u7F6E\u5931\u8D25", e);
  }
}

// ../../packages/types/src/version.ts
var VERSION_NAME = "v2.0.0-alpha.4";
var VERSION_CODE3 = 41;

// src/service/plugin.ts
var import_lodash2 = __toESM(require_lodash());
import { makeAutoObservable as makeAutoObservable4 } from "mobx";
import fs4 from "fs";
import path2 from "path";
import { DiceRoll as DiceRoll10 } from "@dice-roller/rpg-dice-roller";
var INTERNAL_PLUGIN_DIR = process.env.NODE_ENV === "development" ? path2.resolve("./src/plugins") : path2.resolve(process.cwd(), "./plugins");
var PLUGIN_DIR = "./plugins";
var PluginManager = class {
  wss;
  pluginMap = {};
  constructor(wss) {
    makeAutoObservable4(this, { wss: false });
    this.wss = wss;
    const pluginNames = this.extractOfficialPluginsIfNeed();
    this.loadPlugins(pluginNames);
    if (process.env.NODE_ENV !== "development") {
      this.checkOfficialPluginsUpdate();
    }
  }
  getPluginRegisterContext(pluginId) {
    const wss = this.wss;
    return {
      versionName: VERSION_NAME,
      versionCode: VERSION_CODE3,
      roll: (exp) => new DiceRoll10(exp),
      render: (arg1, arg2, arg3) => mustache_default.render(arg1, arg2, arg3, { escape: (value) => value }),
      getCard: ({ channelUnionId, userId }) => this.wss.cards.getCard(channelUnionId, userId),
      saveCard: (card) => this.wss.cards.saveCard(card),
      getLinkedCardUserList: ({ channelUnionId }) => Object.keys(this.wss.cards.getLinkMap(channelUnionId)),
      linkCard: ({ channelUnionId, userId }, cardName) => {
        if (userId && !cardName) {
          const cardName2 = this.wss.cards.getCard(channelUnionId, userId)?.name;
          if (cardName2) {
            this.wss.cards.linkCard(channelUnionId, cardName2, userId);
          }
        } else if (cardName && !userId) {
          this.wss.cards.linkCard(channelUnionId, cardName, userId);
        } else if (!cardName) {
          throw new Error("\u5FC5\u987B\u4F20\u5165 userId \u6216 cardName");
        } else {
          this.wss.cards.linkCard(channelUnionId, cardName, userId);
        }
      },
      queryCard: (query) => this.wss.cards.queryCard(query),
      sendMessageToChannel: ({ platform, channelId, guildId, botId, userId, username, userRole }, msg, options = {}) => {
        const bot = this.wss.bots.find(botId);
        const channel = bot?.guilds.findChannel(channelId, guildId);
        if (!channel || !bot) throw new Error(`\u627E\u4E0D\u5230\u9891\u9053\uFF0CbotId=${botId}, guildId=${guildId}, channelId=${channelId}`);
        if (typeof options === "string") {
          options = { msgType: options };
        }
        const { msgType = "text", skipParse = false } = options;
        if (msgType === "text") {
          const channelUnionId = getChannelUnionId(platform, guildId, channelId);
          const content = skipParse ? msg : parseTemplate(msg, { userId, username, userRole, channelUnionId }, [], "message_template");
          return channel.sendMessage(content);
        } else {
          return channel.sendMessage(`<img src="${msg}"/>`);
        }
      },
      sendMessageToUser: ({ platform, channelId, guildId, botId, userId, username, userRole }, msg, options = {}) => {
        const bot = this.wss.bots.find(botId);
        const user = bot?.guilds.findUser(userId, guildId);
        if (!user || !bot) throw new Error(`\u627E\u4E0D\u5230\u7528\u6237\uFF0CbotId=${botId}, guildId=${guildId}, userId=${userId}`);
        if (typeof options === "string") {
          options = { msgType: options };
        }
        const { msgType = "text", skipParse = false } = options;
        if (msgType === "text") {
          const channelUnionId = getChannelUnionId(platform, guildId, channelId);
          const content = skipParse ? msg : parseTemplate(msg, { userId, username, userRole, channelUnionId }, [], "message_template");
          return user.sendMessage(content);
        } else {
          return user.sendMessage(`<img src="${msg}"/>`);
        }
      },
      sendMessage: async (env, msg, options = {}) => {
        const bot = this.wss.bots.find(env.botId);
        if (!bot) return;
        const command = { command: "", context: env };
        const { msgType = "text", skipParse = false } = options;
        if (msgType === "text") {
          const content = skipParse ? msg : parseTemplate(msg, env, [], "message_template");
          return bot.commandHandler.sendMessage(command, content);
        } else {
          return bot.commandHandler.sendMessage(command, `<img src="${msg}"/>`);
        }
      },
      getConfig: ({ platform, guildId, channelId }) => {
        const channelUnionId = getChannelUnionId(platform, guildId, channelId);
        return wss.config.getChannelConfig(channelUnionId).config;
      },
      getPreference: ({ platform, guildId, channelId }) => {
        const channelUnionId = getChannelUnionId(platform, guildId, channelId);
        const channelConfig = wss.config.getChannelConfig(channelUnionId);
        const pluginConfig = channelConfig.config.plugins.find((plugin2) => plugin2.id === pluginId);
        return pluginConfig?.preference ?? {};
      },
      dispatchUserCommand: async (parsed) => {
        return this.wss.bots.find(parsed.context.botId)?.commandHandler.handleCommand(parsed);
      },
      _context: wss,
      _: import_lodash2.default
      // provide lodash for convenience
    };
  }
  // 自带插件释放到 plugins 文件夹下
  // 如果 plugins 下没有该 plugin 的文件夹，则复制过去
  extractOfficialPluginsIfNeed() {
    console.log("[Plugin] \u5F00\u59CB\u52A0\u8F7D\u63D2\u4EF6");
    if (process.env.NODE_ENV === "development") {
      const internalPluginNames2 = fs4.readdirSync(INTERNAL_PLUGIN_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
      return internalPluginNames2;
    }
    if (!fs4.existsSync(PLUGIN_DIR)) {
      fs4.mkdirSync(PLUGIN_DIR);
    }
    const pluginNames = new Set(fs4.readdirSync(PLUGIN_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name));
    const internalPluginNames = fs4.readdirSync(INTERNAL_PLUGIN_DIR, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
    internalPluginNames.forEach((pluginName2) => {
      if (!pluginNames.has(pluginName2)) {
        copyFolderSync(path2.join(INTERNAL_PLUGIN_DIR, pluginName2), path2.join(PLUGIN_DIR, pluginName2));
        pluginNames.add(pluginName2);
      }
    });
    return Array.from(pluginNames);
  }
  loadPlugins(pluginNames) {
    const newPlugins = [];
    PluginProvider2.register(newPlugins);
  }
  // 注意：只通过 loadPlugins 调用，以避免频繁调用 PluginProvider 注册，否则每次注册都会造成所有 config 重新计算，太重了
  _loadPlugin(pluginName) {
    try {
      const fullPath = process.env.NODE_ENV === "development" ? path2.join(INTERNAL_PLUGIN_DIR, pluginName, "index.js") : path2.join(process.cwd(), PLUGIN_DIR, pluginName, "index.js");
      eval("delete require.cache[fullPath]");
      const context = this.getPluginRegisterContext(pluginName);
      const plugin = eval("require(fullPath)(context)");
      plugin.id ||= pluginName;
      handlePluginCompatibility(plugin);
      console.log("[Plugin] \u52A0\u8F7D\u63D2\u4EF6", plugin.id);
      this.pluginMap[plugin.id] = plugin;
      return plugin;
    } catch (e) {
      console.error(`[Plugin] \u52A0\u8F7D\u63D2\u4EF6 ${pluginName} \u51FA\u9519\uFF1A`, e);
      return void 0;
    }
  }
  // 如果版本号有更新，则删除旧文件，加载新的文件
  checkOfficialPluginsUpdate() {
    const plugins2reload = [];
    Object.entries(officialPluginsVersions).forEach(([name, version]) => {
      const currentVersion = this.pluginMap[name]?.version;
      if (!currentVersion) return;
      if (version > currentVersion) {
        console.log(`[Plugin] \u68C0\u6D4B\u5230\u63D2\u4EF6 ${name} \u6709\u66F4\u65B0\uFF0C\u5373\u5C06\u8FDB\u884C\u66F4\u65B0\u3002\u82E5\u66F4\u65B0\u540E\u529F\u80FD\u5F02\u5E38\uFF0C\u8BF7\u5C1D\u8BD5\u91CD\u65B0\u542F\u52A8\u8F6F\u4EF6\u3002`);
        copyFolderSync(path2.join(INTERNAL_PLUGIN_DIR, name), path2.join(PLUGIN_DIR, name));
        plugins2reload.push(name);
      }
    });
    if (plugins2reload.length > 0) {
      this.loadPlugins(plugins2reload);
    }
  }
  // 手动重载插件
  manualReloadPlugins(pluginNames) {
    if (pluginNames.length > 0) {
      this.loadPlugins(pluginNames);
    } else {
      const pluginNames2 = this.extractOfficialPluginsIfNeed();
      this.loadPlugins(pluginNames2);
    }
  }
  // 获取插件内容清单（不含插件具体逻辑，用于展示和更新 config）
  get pluginListManifest() {
    return Object.values(this.pluginMap).map((plugin2) => ({
      id: plugin2.id,
      name: plugin2.name || plugin2.id || "--",
      description: plugin2.description ?? "",
      preference: (plugin2.preference ?? []).map((pref) => ({
        key: pref.key,
        label: pref.label ?? pref.key,
        defaultValue: pref.defaultValue ?? ""
      })),
      customReply: (plugin2.customReply || []).map(withDefaults),
      // rollDecider: (plugin.rollDecider || []).map(withDefaults),
      rollDecider: [],
      aliasRoll: (plugin2.aliasRoll || []).map(withDefaults),
      customText: (plugin2.customText || []).map(withDefaults),
      hook: {
        onReceiveCommand: (plugin2.hook?.onReceiveCommand || []).map(withDefaults),
        beforeParseDiceRoll: (plugin2.hook?.beforeParseDiceRoll || []).map(withDefaults),
        onCardEntryChange: (plugin2.hook?.onCardEntryChange || []).map(withDefaults),
        onMessageReaction: (plugin2.hook?.onMessageReaction || []).map(withDefaults),
        beforeDiceRoll: (plugin2.hook?.beforeDiceRoll || []).map(withDefaults),
        afterDiceRoll: (plugin2.hook?.afterDiceRoll || []).map(withDefaults)
      }
    }));
  }
};
function handlePluginCompatibility(plugin2) {
  plugin2.aliasRoll?.forEach((r) => {
    r.scope ||= "expression";
  });
}
function withDefaults(pluginItem) {
  return {
    id: pluginItem.id,
    name: pluginItem.name,
    description: pluginItem.description ?? "",
    defaultEnabled: pluginItem.defaultEnabled ?? true
  };
}
var officialPluginsVersions = {
  "io.paotuan.plugin.namegen": 2,
  "io.paotuan.plugin.insane": 3,
  "io.paotuan.plugin.cardgen": 5,
  "io.paotuan.plugin.draw": 2,
  // 'io.paotuan.plugin.cocrules': 1,
  // 'io.paotuan.plugin.globalflags': 1
  "io.paotuan.plugin.compatible": 1
};

// src/adapter/satori.ts
var Context11 = class extends SatoriContext {
  constructor(config = {}) {
    super(config);
    try {
      this.provide("http", void 0, true);
      this.plugin(HTTP, config.request);
    } catch (e) {
      console.log(e);
    }
  }
};

// src/adapter/Bot.ts
var import_lodash3 = __toESM(require_lodash());
import { makeAutoObservable as makeAutoObservable12, runInAction as runInAction3 } from "mobx";

// src/model/GuildManager.ts
import { makeAutoObservable as makeAutoObservable8, runInAction as runInAction2 } from "mobx";

// src/model/Guild.ts
import fs5 from "fs";
import { makeAutoObservable as makeAutoObservable7, runInAction } from "mobx";

// src/model/Channel.ts
import { makeAutoObservable as makeAutoObservable5 } from "mobx";

// src/adapter/qqguild-v1.ts
import fetch3 from "node-fetch";
import FormData2 from "form-data";
function baseUrl(bot) {
  if (bot.config.sandbox) {
    return "https://sandbox.api.sgroup.qq.com";
  } else {
    return "https://api.sgroup.qq.com";
  }
}
async function qqguildV1_getMessageContent(bot, channelId, msgId) {
  try {
    const res = await fetch3(`${baseUrl(bot)}/channels/${channelId}/messages/${msgId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bot ${bot.config.appid}.${bot.config.token}`
      }
    });
    const resp = await res.json();
    return resp.message.content;
  } catch (e) {
    console.log(e);
    return "";
  }
}
async function qqguildV1_sendRawImage(bot, channelId, imgData, replyMsgId) {
  const formData = new FormData2();
  if (replyMsgId) formData.append("msg_id", replyMsgId);
  const img = Buffer.from(imgData.split(",")[1], "base64");
  formData.append("file_image", img, "test.png");
  const res = await fetch3(`${baseUrl(bot)}/channels/${channelId}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": formData.getHeaders()["content-type"],
      "Authorization": `Bot ${bot.config.appid}.${bot.config.token}`
    },
    body: formData
  });
  const resp = await res.json();
  return resp.id;
}

// src/model/Channel.ts
var ChannelTypeLive_QQ = 10005;
var Channel2 = class {
  static VALID_TYPES = [lib_exports.Channel.Type.TEXT, lib_exports.Channel.Type.VOICE, ChannelTypeLive_QQ];
  // 只支持文字、音视频子频道
  id;
  guildId;
  name;
  type;
  lastSession;
  // 子频道最新一条消息
  bot;
  constructor(bot, id, guildId, name, type) {
    makeAutoObservable5(this);
    this.bot = bot;
    this.id = id;
    this.guildId = guildId;
    this.name = name || id;
    this.type = type;
  }
  // 发消息到该子频道
  async sendMessage(content, session, recordLog = true) {
    if (!(session instanceof Session)) {
      session = void 0;
    }
    if (!session) {
      session = this.getLastSessionForReply();
    }
    if (content) {
      content = removeBackspaces(content.trim());
    }
    try {
      const res = await this.bot.api.sendMessage(this.id, content, this.guildId, { session });
      const messageId = res.at(-1);
      console.log("[Message] \u53D1\u9001\u6210\u529F " + content);
      if (recordLog) {
        this.sendLogAsync(messageId, content);
      }
      return { id: messageId, content };
    } catch (e) {
      console.error("[Message] \u53D1\u9001\u5931\u8D25", e);
      return null;
    }
  }
  async sendRawImageMessage(imgData, recordLog = true) {
    const session = this.getLastSessionForReply();
    const content = `<img src="${imgData}"/>`;
    try {
      const messageId = await (async () => {
        if (this.bot.platform === "qqguild") {
          return await qqguildV1_sendRawImage(this.bot, this.id, imgData, session?.messageId);
        } else {
          const res = await this.bot.api.sendMessage(this.id, content, this.guildId, { session });
          return res.at(-1);
        }
      })();
      console.log("[Message] \u53D1\u9001\u672C\u5730\u56FE\u7247\u6210\u529F");
      if (recordLog) {
        this.sendLogAsync(messageId, content);
      }
      return { id: messageId };
    } catch (e) {
      console.error("[Message] \u53D1\u9001\u672C\u5730\u56FE\u7247\u5931\u8D25", e);
      return null;
    }
  }
  // 记录 log
  async sendLogAsync(msgId, content) {
    if (content) {
      this.bot.logs.onPushMessage(this.guildId, this.id, msgId, content);
    }
  }
  // 获取可用于回复的被动消息 id
  getLastSessionForReply() {
    const lastMsgTime = this.lastSession?.timestamp ? new Date(this.lastSession.timestamp).getTime() : 0;
    const currentTime = (/* @__PURE__ */ new Date()).getTime();
    if (currentTime - lastMsgTime <= 5 * 60 * 1e3 - 2e3) {
      console.log("[Message] \u547D\u4E2D\u88AB\u52A8\u6D88\u606F\u7F13\u5B58");
      return this.lastSession;
    } else {
      this.lastSession = void 0;
      return void 0;
    }
  }
};

// src/model/User.ts
import { makeAutoObservable as makeAutoObservable6 } from "mobx";
var User = class _User {
  id;
  guildId;
  isBot;
  avatar;
  name;
  deleted = false;
  lastSession;
  // 私信最新一条消息
  bot;
  constructor(bot, proto) {
    makeAutoObservable6(this);
    this.id = proto.id;
    this.guildId = proto.guildId;
    this.isBot = proto.isBot;
    this.avatar = proto.avatar;
    this.name = proto.name;
    this.bot = bot;
  }
  async sendMessage(content, session) {
    if (!(session instanceof Session)) {
      session = void 0;
    }
    if (this.bot.platform === "qqguild") {
      if (!session) {
        session = this.getLastSessionForReply();
      }
    } else {
      session = void 0;
    }
    if (content) {
      content = removeBackspaces(content.trim());
    }
    try {
      const res = await this.bot.api.sendPrivateMessage(this.id, content, this.guildId, { session });
      const messageId = res.at(-1);
      console.log("[Message] \u79C1\u4FE1\u53D1\u9001\u6210\u529F " + content);
      return { id: messageId, content };
    } catch (e) {
      console.error("[Message] \u79C1\u4FE1\u6D88\u606F\u53D1\u9001\u5931\u8D25", e);
      return null;
    }
  }
  // 获取可用于回复的被动消息 id
  getLastSessionForReply() {
    const lastMsgTime = this.lastSession?.timestamp ? new Date(this.lastSession.timestamp).getTime() : 0;
    const currentTime = (/* @__PURE__ */ new Date()).getTime();
    if (currentTime - lastMsgTime <= 5 * 60 * 1e3 - 2e3) {
      console.log("[Message] \u547D\u4E2D\u88AB\u52A8\u6D88\u606F\u7F13\u5B58");
      return this.lastSession;
    } else {
      this.lastSession = void 0;
      return void 0;
    }
  }
  // 理论上只有 userId 和 guildId 也可以使用，只是昵称和头像没有，因此遇到这种情况可以创建一个临时的 User 使用，避免阻塞主流程
  static createTemp(bot, id, guildId) {
    console.log("[User] create temp, id=", id, "guildId=", guildId);
    return new _User(bot, { id, guildId, name: id, avatar: "", isBot: false });
  }
  get toJSON() {
    return {
      id: this.id,
      guildId: this.guildId,
      isBot: this.isBot,
      name: this.name,
      avatar: this.avatar,
      deleted: this.deleted
    };
  }
  static fromJSON(bot, data) {
    data.isBot = data.bot;
    const user = new _User(bot, data);
    user.deleted = data.deleted;
    return user;
  }
};

// src/model/Guild.ts
var USER_DIR = resolveRootDir("user");
var Guild = class {
  id;
  name;
  icon;
  bot;
  channelsMap = {};
  usersMap = {};
  // 用于创建新的文字子频道，所在分组
  channelGroupId4Create;
  constructor(bot, id, name, icon) {
    makeAutoObservable7(this);
    this.bot = bot;
    this.id = id;
    this.name = name || id;
    this.icon = icon || "";
    this.fetchChannels();
    this.loadUsers();
  }
  get allChannels() {
    return Object.values(this.channelsMap);
  }
  get allUsers() {
    return Object.values(this.usersMap);
  }
  findChannel(id) {
    return this.channelsMap[id];
  }
  findUser(id) {
    return this.usersMap[id] ?? User.createTemp(this.bot, id, this.id);
  }
  addChannel(channel) {
    this.channelsMap[channel.id] = new Channel2(this.bot, channel.id, this.id, channel.name, channel.type);
  }
  //
  // updateChannel(channel: IChannel) {
  //   const chan = this.channelsMap[channel.id]
  //   if (chan) {
  //     chan.name = channel.name
  //   }
  // }
  //
  // deleteChannel(id: string) {
  //   delete this.channelsMap[id]
  // }
  async createChannel(name) {
    try {
      const resp = await this.bot.api.createChannel(this.id, { type: lib_exports.Channel.Type.TEXT, name, parentId: this.channelGroupId4Create });
      this.addChannel({ id: resp.id, name, type: lib_exports.Channel.Type.TEXT });
      return true;
    } catch (e) {
      console.error("[Guild] \u521B\u5EFA\u5B50\u9891\u9053\u5931\u8D25", e);
      return false;
    }
  }
  addOrUpdateUser(author) {
    const authorName = author.nick ?? author.nickname ?? author.name ?? author.username;
    const user = this.usersMap[author.id];
    if (user) {
      let updated = false;
      if (authorName && authorName !== user.name) {
        user.name = authorName;
        updated = true;
      }
      if (author.avatar && author.avatar !== user.avatar) {
        user.avatar = author.avatar;
        updated = true;
      }
      if (user.deleted) {
        user.deleted = false;
        updated = true;
      }
      if (updated) {
        this.saveUsers();
      }
    } else {
      const newUser = new User(this.bot, {
        id: author.id,
        guildId: this.id,
        name: authorName ?? author.id,
        avatar: author.avatar ?? "",
        isBot: author.isBot ?? false
      });
      this.usersMap[newUser.id] = newUser;
      this.saveUsers();
    }
  }
  deleteUser(id) {
    const user = this.usersMap[id];
    if (user && !user.deleted) {
      user.deleted = true;
      this.saveUsers();
    }
  }
  deleteUsersBatch(ids) {
    let updated = false;
    ids.forEach((id) => {
      const user = this.usersMap[id];
      if (user && !user.deleted) {
        user.deleted = true;
        updated = true;
      }
    });
    if (updated) {
      this.saveUsers();
    }
  }
  async fetchChannels() {
    this.channelsMap = {};
    try {
      const list = [];
      let nextToken = void 0;
      do {
        const { data, next } = await this.bot.api.getChannelList(this.id, nextToken = void 0);
        list.push(...data);
        nextToken = next;
      } while (nextToken);
      runInAction(() => {
        const channels = list.filter((channel) => Channel2.VALID_TYPES.includes(channel.type)).map((channel) => new Channel2(this.bot, channel.id, this.id, channel.name, channel.type));
        this.channelsMap = channels.reduce((obj, chan) => Object.assign(obj, { [chan.id]: chan }), {});
        this.detectChannelGroupId4Create(list);
      });
    } catch (e) {
      console.error("\u83B7\u53D6\u5B50\u9891\u9053\u4FE1\u606F\u5931\u8D25", e);
    }
  }
  // 获取可用于创建文字子频道的分组 id
  detectChannelGroupId4Create(list) {
    if (this.bot.platform !== "qqguild") return;
    const categories = list.filter((channel) => channel.type === lib_exports.Channel.Type.CATEGORY);
    const qqTextGroup = categories.find((channel) => channel.name === "\u8BA8\u8BBA\u7EC4") || categories.find((channel) => channel.name === "\u6D3B\u52A8");
    if (qqTextGroup) {
      this.channelGroupId4Create = qqTextGroup.id;
      return;
    }
    const hasTextGroup = categories.find((category) => {
      const parentId = category.id;
      return !!list.find((channel) => channel.type === lib_exports.Channel.Type.TEXT && channel.parentId === parentId);
    });
    if (hasTextGroup) {
      this.channelGroupId4Create = hasTextGroup.id;
      return;
    }
    console.warn("[Guild] \u672A\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u6587\u5B57\u5B50\u9891\u9053\u5206\u7EC4\uFF0CQQ \u63A5\u53E3\u53EF\u80FD\u6539\u52A8\u3002\u82E5\u521B\u5EFA\u5B50\u9891\u9053\u5931\u8D25\uFF0C\u8BF7\u8054\u7CFB\u5F00\u53D1\u8005");
    this.channelGroupId4Create = categories[0]?.id;
  }
  // user 持久化相关
  get userPersistenceFilename() {
    return `${USER_DIR}/${this.bot.platform}_${this.id}.json`;
  }
  saveUsers() {
    const allUsersOfGuild = Object.values(this.usersMap).map((user) => user.toJSON);
    console.log("[Guild] \u4FDD\u5B58\u7528\u6237\u5217\u8868\uFF0Ccount=", allUsersOfGuild.length);
    const data = { version: VERSION_CODE3, list: allUsersOfGuild };
    if (!fs5.existsSync(USER_DIR)) {
      fs5.mkdirSync(USER_DIR);
    }
    fs5.writeFile(this.userPersistenceFilename, JSON.stringify(data), (e) => {
      if (e) {
        console.error("[Guild] \u4FDD\u5B58\u7528\u6237\u5217\u8868\u5931\u8D25", e);
      }
    });
  }
  loadUsers() {
    console.log("[Guild] \u5F00\u59CB\u8BFB\u53D6\u7528\u6237\uFF0CguildId=", this.id);
    const filename = this.userPersistenceFilename;
    if (!fs5.existsSync(filename)) {
      this.tryLoadV1Data();
      return;
    }
    try {
      const str = fs5.readFileSync(filename, "utf8");
      const { version, list } = JSON.parse(str);
      const users = list.map((data) => User.fromJSON(this.bot, data));
      this.usersMap = users.reduce((obj, user) => Object.assign(obj, { [user.id]: user }), {});
    } catch (e) {
      console.error(`[Guild] ${filename} \u7528\u6237\u5217\u8868\u89E3\u6790\u5931\u8D25`, e);
    }
  }
  tryLoadV1Data() {
    if (this.bot.platform !== "qqguild") return;
    const filename = `${USER_DIR}/${this.id}.json`;
    if (!fs5.existsSync(filename)) return;
    try {
      console.log("[Guild] \u5F00\u59CB\u8BFB\u53D6\u65E7\u7248\u7528\u6237\u5217\u8868\uFF0CguildId=", this.id);
      const str = fs5.readFileSync(filename, "utf8");
      const { list } = JSON.parse(str);
      const users = list.map((item) => User.fromJSON(this.bot, {
        id: item.id,
        guildId: item.guildId,
        isBot: item.bot,
        name: item.nick || item.username,
        avatar: item.avatar,
        deleted: item.deleted
      }));
      this.usersMap = users.reduce((obj, user) => Object.assign(obj, { [user.id]: user }), {});
      this.saveUsers();
    } catch (e) {
      console.error(`[Guild] ${filename} \u7528\u6237\u5217\u8868\u89E3\u6790\u5931\u8D25`, e);
    }
  }
};

// src/model/GuildManager.ts
var GuildManager = class {
  bot;
  guildsMap = {};
  constructor(bot) {
    makeAutoObservable8(this);
    this.bot = bot;
    this.fetchGuilds();
    this.initEventListeners();
  }
  get all() {
    return Object.values(this.guildsMap);
  }
  find(guildId) {
    return this.guildsMap[guildId];
  }
  findUser(userId, guildId) {
    const guild = this.find(guildId);
    if (!guild) {
      if (this.bot.platform === "kook") {
        return User.createTemp(this.bot, userId, guildId);
      } else {
        console.error("[GuildManager]\u9891\u9053\u4FE1\u606F\u4E0D\u5B58\u5728\uFF0CguildId=", guildId, "userId=", userId);
        return void 0;
      }
    }
    return guild.findUser(userId);
  }
  findChannel(channelId, guildId) {
    const guild = this.find(guildId);
    if (!guild) {
      console.error("[GuildManager]\u9891\u9053\u4FE1\u606F\u4E0D\u5B58\u5728\uFF0CguildId=", guildId, "channelId=", channelId);
      return void 0;
    }
    const channel = guild.findChannel(channelId);
    if (!channel) {
      console.error("[GuildManager]\u5B50\u9891\u9053\u4FE1\u606F\u4E0D\u5B58\u5728\uFF0CguildId=", guildId, "channelId=", channelId);
      return void 0;
    }
    return channel;
  }
  // 处理获取 guild/channel 接口有时失败的问题，理论上我们只需要 guildId、channelId，可以和 user 一样直接从 message 里面取
  addGuildChannelByMessage(_guild, _channel) {
    if (!_guild || !_channel) return;
    const guildId = _guild.id;
    const channelId = _channel.id;
    let guild = this.guildsMap[guildId];
    if (!guild) {
      console.log("Create guild by message, id =", guildId);
      this.addGuild({ id: guildId, name: _guild.name ?? guildId, icon: _guild?.avatar ?? "" });
      guild = this.guildsMap[guildId];
    }
    const channel = guild.findChannel(channelId);
    if (!channel) {
      console.log("Create channel by message, id =", channelId);
      const type = Channel2.VALID_TYPES.includes(_channel.type) ? _channel.type : lib_exports.Channel.Type.TEXT;
      guild.addChannel({ id: channelId, name: _channel.name ?? channelId, type });
    }
  }
  addOrUpdateUserByMessage(_guild, _author) {
    if (!_guild || !_author) return;
    this.addOrUpdateUser(_author, _guild.id);
  }
  // 请求所有 guild
  async fetchGuilds() {
    this.guildsMap = {};
    try {
      const resp = await this.bot.api.getGuildList();
      const list = resp.data.slice(0, 10);
      runInAction2(() => {
        const guilds = list.map((info) => new Guild(this.bot, info.id, info.name, info.avatar));
        this.guildsMap = guilds.reduce((obj, guild) => Object.assign(obj, { [guild.id]: guild }), {});
      });
    } catch (e) {
      console.error("\u83B7\u53D6\u9891\u9053\u4FE1\u606F\u5931\u8D25", e);
    }
  }
  addGuild({ id, name, icon }) {
    this.guildsMap[id] = new Guild(this.bot, id, name, icon);
  }
  // private updateGuild({ id, name, icon }: { id: string, name: string, icon: string }) {
  //   if (this.guildsMap[id]) {
  //     this.guildsMap[id].name = name
  //     this.guildsMap[id].icon = icon
  //   }
  // }
  //
  // private deleteGuild(id: string) {
  //   delete this.guildsMap[id]
  // }
  //
  // addChannel(channel: IChannel) {
  //   if (!Channel.VALID_TYPES.includes(channel.type)) return // 不支持的子频道类型
  //   const guild = this.guildsMap[channel.guild_id]
  //   if (guild) {
  //     guild.addChannel(channel)
  //   }
  // }
  //
  // updateChannel(channel: IChannel) {
  //   if (!Channel.VALID_TYPES.includes(channel.type)) return // 不支持的子频道类型
  //   const guild = this.guildsMap[channel.guild_id]
  //   if (guild) {
  //     guild.updateChannel(channel)
  //   }
  // }
  //
  // deleteChannel(channel: IChannel) {
  //   if (!Channel.VALID_TYPES.includes(channel.type)) return // 不支持的子频道类型
  //   const guild = this.guildsMap[channel.guild_id]
  //   if (guild) {
  //     guild.deleteChannel(channel.id)
  //   }
  // }
  addOrUpdateUser(author, guildId) {
    const guild = this.guildsMap[guildId];
    if (guild) {
      guild.addOrUpdateUser(author);
    }
  }
  deleteUser(userId, guildId) {
    const guild = this.guildsMap[guildId];
    if (guild) {
      guild.deleteUser(userId);
    }
  }
  initEventListeners() {
    this.bot.on("guild-member-added", (session) => this.addOrUpdateUser(session.author, session.guildId));
    this.bot.on("guild-member-updated", (session) => this.addOrUpdateUser(session.author, session.guildId));
    this.bot.on("guild-member-removed", (session) => this.deleteUser(session.userId, session.guildId));
  }
};

// src/service/log.ts
import { makeAutoObservable as makeAutoObservable10 } from "mobx";

// src/service/logBackground.ts
import { createLogger, format, transports } from "winston";
import { makeAutoObservable as makeAutoObservable9 } from "mobx";
var LogBackground = class {
  bot;
  backgroundLogEnabled = {};
  // channelUnionId => logger
  backgroundLoggers = {};
  // 上一次说话人 channelUnionId => username
  lastUser = {};
  constructor(bot) {
    makeAutoObservable9(this);
    this.bot = bot;
  }
  get platform() {
    return this.bot.platform;
  }
  getBackgroundLogger(guildId, channelId) {
    const channelUnionId = getChannelUnionId(this.platform, guildId, channelId);
    if (!this.backgroundLoggers[channelUnionId]) {
      const channel = this.bot.guilds.findChannel(channelId, guildId);
      const channelName = channel?.name ?? channelId;
      this.backgroundLoggers[channelUnionId] = createLogger({
        format: backgroundLogFormatter,
        transports: new transports.File({ filename: `${resolveRootDir("logs")}/${channelName}.txt`, maxsize: 1024 * 1024 })
      });
    }
    return this.backgroundLoggers[channelUnionId];
  }
  logIfNeed(guildId, channelId, logs) {
    const channelUnionId = getChannelUnionId(this.platform, guildId, channelId);
    if (this.backgroundLogEnabled[channelUnionId]) {
      const logger = this.getBackgroundLogger(guildId, channelId);
      logs.forEach((log) => {
        logger.info({ message: log, lastUser: this.lastUser[channelUnionId] });
        this.lastUser[channelUnionId] = log.username || log.userId;
      });
    }
  }
  setEnabled(channelUnionId, enabled) {
    this.backgroundLogEnabled[channelUnionId] = enabled;
  }
  // 根据消息判断是否是控制 log 开关的指令
  detectEnabled(userCommand) {
    if (userCommand.context.isDirect) {
      return [false, void 0];
    }
    const expression = userCommand.command;
    if (expression.startsWith("log")) {
      const content = expression.slice(3).trim();
      if (content.startsWith("on")) {
        this.setEnabled(userCommand.context.channelUnionId, true);
        return [true, "\u5DF2\u5F00\u542F\u5F53\u524D\u5B50\u9891\u9053\u7684\u540E\u53F0 log \u5F55\u5236"];
      } else if (content.startsWith("off")) {
        this.setEnabled(userCommand.context.channelUnionId, false);
        return [true, "\u5DF2\u5173\u95ED\u5F53\u524D\u5B50\u9891\u9053\u7684\u540E\u53F0 log \u5F55\u5236"];
      } else {
        return [true, "\u8BF7\u4F7F\u7528 .log on/off \u5F00\u542F\u6216\u5173\u95ED\u540E\u53F0 log \u5F55\u5236\u529F\u80FD"];
      }
    } else {
      return [false, void 0];
    }
  }
};
var backgroundLogFormatter = format.printf((info) => {
  const message = info.message;
  const lastUser = info.lastUser;
  const user = message.username || message.userId;
  const content = message.msgType === "text" ? message.content : `[\u56FE\u7247](${message.content})`;
  if (user === lastUser) {
    return content;
  } else {
    const date = new Date(Number(message.timestamp));
    const pad2 = (v) => String(v).padStart(2, "0");
    const timestamp = `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())} ${pad2(date.getHours())}:${pad2(date.getMinutes())}:${pad2(date.getSeconds())}`;
    return `${user} ${timestamp}
${content}`;
  }
});

// src/service/log.ts
var LogManager = class {
  bot;
  logBackground;
  get wss() {
    return this.bot.wss;
  }
  constructor(bot) {
    makeAutoObservable10(this);
    this.bot = bot;
    this.logBackground = new LogBackground(bot);
  }
  get platform() {
    return this.bot.platform;
  }
  onReceivedMessage(session) {
    this.convertElementsToLogs(session.elements, session.messageId, session.userId, session.author.name ?? session.userId, String(session.timestamp), session.channelId, session.guildId);
  }
  onPushMessage(guildId, channelId, msgId, content) {
    const elements = lib_default.parse(content);
    const userId = this.bot.botInfo?.id ?? "";
    const username = this.bot.botInfo?.username ?? userId;
    this.convertElementsToLogs(elements, msgId, userId, username, String(Date.now()), channelId, guildId);
  }
  convertElementsToLogs(elements, msgId, userId, username, timestamp, channelId, guildId) {
    const commonArgs = { msgId, userId, username, timestamp };
    const parsedLogs = [];
    let lastTextLog = void 0;
    const ensureLastLog = () => {
      if (!lastTextLog) {
        const newLog = { ...commonArgs, msgType: "text", content: "" };
        parsedLogs.push(newLog);
        lastTextLog = newLog;
      }
      return lastTextLog;
    };
    elements.forEach((element) => {
      if (element.type === "text") {
        const content = element.attrs.content.trim();
        if (content) {
          const log = ensureLastLog();
          log.content += content;
        }
      } else if (element.type === "at") {
        const userId2 = element.attrs.id;
        let name;
        if (this.bot.botInfo?.id === userId2) {
          name = this.bot.botInfo?.username ?? userId2;
        } else {
          const user = this.bot.guilds.findUser(userId2, guildId);
          name = user?.name ?? userId2;
        }
        const content = `@${name} `;
        const log = ensureLastLog();
        log.content += content;
      } else if (element.type === "img") {
        lastTextLog = void 0;
        parsedLogs.push({ ...commonArgs, msgType: "image", content: element.attrs.src });
      }
    });
    parsedLogs.forEach((log, i) => {
      log.msgId = `${log.msgId}-${i}`;
      this.pushToClients(guildId, channelId, log);
    });
  }
  pushToClients(guildId, channelId, ...logs) {
    const channelUnionId = getChannelUnionId(this.platform, guildId, channelId);
    this.wss.sendToChannel(channelUnionId, {
      cmd: "log/push",
      success: true,
      data: logs
    });
    this.logBackground.logIfNeed(guildId, channelId, logs);
  }
  handleBackgroundLogCommand(command) {
    return this.logBackground.detectEnabled(command);
  }
};

// src/model/UserCommand.ts
var UserCommand = class _UserCommand {
  session;
  command;
  substitute;
  bot;
  constructor(bot, session, command, substitute) {
    this.session = session;
    this.command = command;
    this.substitute = substitute;
    this.bot = bot;
  }
  get botId() {
    return this.bot.id;
  }
  get platform() {
    return this.bot.platform;
  }
  get realUser() {
    const session = this.session;
    const author = session.author;
    let username = author.nick ?? author.nickname ?? author.name ?? author.username;
    if (typeof username === "undefined") {
      const user = this.bot.guilds.findUser(session.userId, session.guildId);
      if (user) username = user.name;
    }
    return {
      userId: session.userId,
      username: username || session.userId
    };
  }
  get guildId() {
    const session = this.session;
    if (session.isDirect) {
      if (this.platform === "qqguild") {
        return session.guildId.split("_")[0];
      } else if (this.platform === "kook") {
        return session.guildId || "";
      }
    }
    return session.guildId;
  }
  get channelId() {
    const session = this.session;
    if (session.isDirect) {
      return session.channelId.split("_")[1];
    } else {
      return session.channelId;
    }
  }
  get context() {
    const session = this.session;
    const substitute = this.substitute;
    const realUser = this.realUser;
    return {
      botId: this.botId,
      userId: substitute?.userId ?? realUser.userId,
      username: substitute?.username ?? realUser.username,
      userRole: convertRoleIds(session.author.roles),
      msgId: session.messageId,
      platform: this.platform,
      guildId: this.guildId,
      channelId: this.channelId,
      channelUnionId: getChannelUnionId(this.platform, this.guildId, this.channelId),
      replyMsgId: session.event.message?.quote?.id,
      isDirect: session.isDirect,
      realUser
    };
  }
  //
  // clone() {
  //   const newCommand = new UserCommand(this.bot, this.session, this.command, this.substitute)
  //   for (const key of Reflect.ownKeys(this)) {
  //     if (['session', 'command', 'substitute', 'bot'].includes(key as string)) continue
  //     newCommand[key] = this[key]
  //   }
  //   return newCommand
  // }
  static fromMessage(bot, session) {
    try {
      const elements = lib_default.transform(session.elements, ({ type, attrs }) => {
        if (type === "at") {
          return true;
        } else if (type === "text") {
          return !!attrs.content.trim();
        } else {
          return false;
        }
      }, session);
      if (elements.length === 0) throw new Error();
      const botUserId = bot.botInfo?.id;
      let isInstruction = false;
      if (botUserId && elements[0].type === "at" && elements[0].attrs.id === botUserId) {
        isInstruction = true;
        elements.splice(0, 1);
      }
      const firstElem = elements[0];
      if (firstElem && firstElem.type === "text") {
        let firstSpan = firstElem.attrs.content.trimStart();
        if (firstSpan.startsWith("/") || firstSpan.startsWith(".") || firstSpan.startsWith("\u3002")) {
          isInstruction = true;
          firstSpan = firstSpan.substring(1);
          firstElem.attrs.content = firstSpan;
        }
      }
      if (!isInstruction) throw new Error();
      let substitute = void 0;
      const lastElem = elements.at(-1);
      if (lastElem && lastElem.type === "at") {
        const userId = lastElem.attrs.id;
        const user = bot.guilds.findUser(userId, session.guildId);
        const username = user?.name ?? userId;
        substitute = { userId, username };
        elements.splice(-1, 1);
      }
      const fullExp = elements.map((elem) => elem.toString()).join("").trim();
      return new _UserCommand(bot, session, fullExp, substitute);
    } catch (e) {
      return void 0;
    }
  }
  static fromReaction(bot, session) {
    return new _UserCommand(bot, session, "", void 0);
  }
};
function convertRoleIds(ids = []) {
  if (ids.includes("4")) {
    return "admin";
  } else if (ids.includes("2") || ids.includes("5")) {
    return "manager";
  } else {
    return "user";
  }
}

// src/service/commandHandler.ts
import LRUCache2 from "lru-cache";
import { makeAutoObservable as makeAutoObservable11 } from "mobx";
var CommandHandler = class {
  bot;
  // 消息内容缓存
  msgCache = new LRUCache2({
    max: 50,
    fetchMethod: async (key) => {
      const [channelId, msgId] = key.split("$$$");
      const content = await (async () => {
        if (this.bot.platform === "qqguild") {
          return await qqguildV1_getMessageContent(this.bot, channelId, msgId);
        } else {
          const message = await this.bot.api.getMessage(channelId, msgId);
          return message.content;
        }
      })();
      const text = content?.trim();
      return { text, instruction: text ? void 0 : null };
    }
  });
  // 对抗检定缓存 msgid => roll
  opposedRollCache = new LRUCache2({ max: 50 });
  // 先攻列表缓存 channelId => ri list
  riListCache = {};
  constructor(bot) {
    makeAutoObservable11(this);
    this.bot = bot;
    RiProvider2.setState(new RiState(this.riListCache));
  }
  /**
   * 处理指令
   */
  async handleCommand(userCommand) {
    const result = await dispatchCommand(userCommand, {
      getOpposedRoll: (c) => this.getOpposedRoll(c),
      interceptor: async (c) => this.bot.logs.handleBackgroundLogCommand(c)
    });
    await this.handleDispatchResult(userCommand, result);
  }
  /**
   * 处理表情表态
   */
  async handleReaction(userCommand) {
    const result = await dispatchReaction(userCommand, {
      getReactionCommand: (c) => this.getInstruction(c)
    });
    if (result) {
      await this.handleDispatchResult(userCommand, result);
    }
  }
  /**
   * 从网页端手动发起代骰
   */
  async manualDiceRollFromWeb(wsClient, { expression, cardData }) {
    const { listenToChannelUnionId: channelUnionId, listenToGuildId: guildId, listenToChannelId: channelId } = wsClient;
    const config = this.bot.wss.config.getChannelConfig(channelUnionId);
    const userCommand = {
      command: expression,
      context: {
        botId: this.bot.id,
        userId: MockSystemUserId,
        username: cardData.name,
        userRole: "admin",
        platform: this.bot.platform,
        guildId,
        channelId,
        channelUnionId,
        isDirect: false,
        realUser: {
          userId: config.botOwner ?? MockSystemUserId,
          username: cardData.name
        }
      }
    };
    CardProvider2.registerCard(MockSystemCardId, cardData);
    CardProvider2.linkCard(channelUnionId, MockSystemCardId, MockSystemUserId);
    const result = await dispatchCommand(userCommand);
    await this.handleDispatchResult(userCommand, result);
  }
  async handleDispatchResult(userCommand, result) {
    let msgSent = false;
    switch (result.type) {
      case "customReply": {
        if (result.reply) {
          this.sendMessage(userCommand, result.reply);
        }
        msgSent = true;
        break;
      }
      case "interceptor":
        if (typeof result.payload === "string") {
          this.sendMessage(userCommand, result.payload);
          msgSent = true;
        }
        break;
      case "dice": {
        if (result.diceRoll) {
          const { context: context2 } = userCommand;
          const roll = result.diceRoll;
          if (roll instanceof StandardDiceRoll && roll.hidden && !context2.isDirect) {
            const channelMsg = roll.t("roll.hidden", { \u63CF\u8FF0: roll.description });
            this.sendMessage(userCommand, channelMsg);
            this.sendMessage(userCommand, roll.output, context2.realUser.userId);
          } else {
            const replyMsg = await this.sendMessage(userCommand, roll.output);
            if (replyMsg && roll instanceof StandardDiceRoll && roll.eligibleForOpposedRoll) {
              this.opposedRollCache.set(replyMsg.id, roll);
            }
          }
          msgSent = true;
        }
        if (result.affectedCards) {
          result.affectedCards.forEach((card) => {
            this.bot.wss.cards.saveCard(card);
          });
        }
        break;
      }
    }
    if (!msgSent && userCommand.context.isDirect) {
      const selfNick = this.bot.botInfo?.username || "";
      await this.sendMessage(userCommand, `${selfNick}\u5728\u7684\u8BF4`);
    }
  }
  // 获取对抗骰
  async getOpposedRoll(userCommand) {
    const replyMsgId = userCommand.context.replyMsgId;
    return replyMsgId ? this.opposedRollCache.get(replyMsgId) : void 0;
  }
  // 从文本内容中提取可能存在的指令
  async getInstruction(userCommand) {
    const { channelId, msgId } = userCommand.context;
    if (!msgId) return;
    const cacheMsg = await this.msgCache.fetch(`${channelId}$$$${msgId}`);
    if (!cacheMsg || cacheMsg.instruction === null) return;
    if (typeof cacheMsg.instruction === "undefined") {
      cacheMsg.instruction = detectInstruction(cacheMsg.text || "");
    }
    return cacheMsg.instruction ?? void 0;
  }
  // 发送消息
  // 如传入 forceUserId，则强制发给对应 user
  // 否则根据 isDirect 决定发给人或发给频道
  async sendMessage(userCommand, content, forceUserId) {
    let { isDirect, userId } = userCommand.context;
    const { channelId, guildId } = userCommand.context;
    if (forceUserId) {
      isDirect = true;
      userId = forceUserId;
    }
    if (isDirect) {
      const user = this.bot.guilds.findUser(userId, guildId);
      if (!user) {
        console.warn(`[SendMessage] \u627E\u4E0D\u5230\u7528\u6237, userId=${userId}, guildId=${guildId}`);
        return;
      }
      return user.sendMessage(content, userCommand.session);
    } else {
      const channel = this.bot.guilds.findChannel(channelId, guildId);
      if (!channel) {
        console.warn(`[SendMessage] \u627E\u4E0D\u5230\u9891\u9053, channelId=${channelId}, guildId=${guildId}`);
        return;
      }
      return channel.sendMessage(content, userCommand.session);
    }
  }
};
var MockSystemCardId = "__temp_card_id__";
var MockSystemUserId = "__temp_user_id__";
var RiState = class extends DefaultRiState {
  updateRiList(channelUnionId, change) {
    super.updateRiList(channelUnionId, change.filter((item) => item.id !== MockSystemUserId));
  }
};
var ATTRIBUTE_REGEX = new RegExp("(\u529B\u91CF|\u4F53\u8D28|\u4F53\u578B|\u654F\u6377|\u5916\u8C8C|\u667A\u529B|\u7075\u611F|\u610F\u5FD7|\u6559\u80B2|\u77E5\u8BC6|\u7406\u667A|\u5E78\u8FD0|\u8FD0\u6C14|\u4F1A\u8BA1|\u4EBA\u7C7B\u5B66|\u4F30\u4EF7|\u8003\u53E4\u5B66|\u9B45\u60D1|\u6500\u722C|\u8BA1\u7B97\u673A|\u7535\u8111|\u4FE1\u7528|\u4FE1\u8A89|\u514B\u82CF\u9C81|\u4E54\u88C5|\u95EA\u907F|\u9A7E\u9A76|\u6C7D\u8F66|\u7535\u6C14\u7EF4\u4FEE|\u7535\u5B50\u5B66|\u8BDD\u672F|\u683C\u6597|\u5C04\u51FB|\u6025\u6551|\u5386\u53F2|\u6050\u5413|\u8DF3\u8DC3|\u6BCD\u8BED|\u6CD5\u5F8B|\u56FE\u4E66\u9986|\u8046\u542C|\u9501\u5320|\u5F00\u9501|\u64AC\u9501|\u673A\u68B0\u7EF4\u4FEE|\u533B\u5B66|\u535A\u7269\u5B66|\u9886\u822A|\u5BFC\u822A|\u795E\u79D8\u5B66|\u91CD\u578B|\u8BF4\u670D|\u7CBE\u795E\u5206\u6790|\u5FC3\u7406\u5B66|\u9A91\u672F|\u5999\u624B|\u4FA6\u67E5|\u4FA6\u5BDF|\u6F5C\u884C|\u6E38\u6CF3|\u6295\u63B7|\u8FFD\u8E2A|sc|SC|\u611F\u77E5|\u9B45\u529B|\u8FD0\u52A8|\u4F53\u64CD|\u5DE7\u624B|\u9690\u533F|\u5965\u79D8|\u8C03\u67E5|\u81EA\u7136|\u5B97\u6559|\u9A6F\u517D|\u6D1E\u6089|\u533B\u7597|\u5BDF\u89C9|\u751F\u5B58|\u6C42\u751F|\u6B3A\u7792|\u5A01\u5413|\u8868\u6F14|\u6E38\u8BF4|\u533B\u836F)", "g");
var DIFFICULTY_REGEX = /(困难|极难|极限)/;
var INST_WRAPPER_REGEX = /【(.+)】/;
function detectInstruction(text) {
  const fullInstMatch = text.match(INST_WRAPPER_REGEX);
  if (fullInstMatch) {
    return fullInstMatch[1];
  }
  const skillMatch = text.match(ATTRIBUTE_REGEX);
  if (skillMatch) {
    const skill = skillMatch[0];
    const difficultyMatch = text.match(DIFFICULTY_REGEX);
    const difficulty = difficultyMatch ? difficultyMatch[0] : "";
    return difficulty + skill;
  }
  return null;
}

// src/adapter/Bot.ts
var Bot4 = class {
  config;
  context = new Context11();
  api;
  _fork;
  wss;
  botInfo = null;
  guilds;
  logs;
  commandHandler;
  // 维护当前工作子频道 // guildId => channelIds for quick search
  listeningChannels = /* @__PURE__ */ new Map();
  constructor(config, wss) {
    makeAutoObservable12(this, { listeningChannels: false });
    this.wss = wss;
    this.config = config;
    this._fork = this.context.plugin(adapterPlugin(config.platform), adapterConfig(config));
    this.api = this.context.bots.find((bot) => bot.platform === config.platform);
    this.fetchBotInfo();
    this.guilds = new GuildManager(this);
    this.logs = new LogManager(this);
    this.commandHandler = new CommandHandler(this);
    this.on("message", async (session) => {
      if (session.userId === this.botInfo?.id) return;
      if (!session.isDirect) {
        this.guilds.addGuildChannelByMessage(session.event.guild, session.event.channel);
        this.guilds.addOrUpdateUserByMessage(session.event.guild, session.author);
        if (this.isListening(session.channelId, session.guildId)) {
          this.logs.onReceivedMessage(session);
          if (this.platform === "qqguild") {
            const channel = this.guilds.findChannel(session.channelId, session.guildId);
            channel && (channel.lastSession = session);
          }
          const userCommand = UserCommand.fromMessage(this, session);
          if (!userCommand) return;
          await this.commandHandler.handleCommand(userCommand);
        }
      } else {
        if (this.platform === "qqguild") {
          const srcGuildId = session.guildId.split("_")[0];
          const user = this.guilds.findUser(session.userId, srcGuildId);
          user && (user.lastSession = session);
        }
        const userCommand = UserCommand.fromMessage(this, session);
        if (!userCommand) return;
        await this.commandHandler.handleCommand(userCommand);
      }
    });
    this.on("reaction-added", async (session) => {
      if (this.isListening(session.channelId, session.guildId)) {
        const userCommand = UserCommand.fromReaction(this, session);
        await this.commandHandler.handleReaction(userCommand);
      }
    });
  }
  get platform() {
    return this.config.platform;
  }
  get appid() {
    return this.config.appid;
  }
  // bot 唯一标识
  get id() {
    return getBotId(this.platform, this.appid);
  }
  // 选择某个子频道
  listenTo(channelId, guildId) {
    let set = this.listeningChannels.get(guildId);
    if (!set) {
      set = /* @__PURE__ */ new Set();
      this.listeningChannels.set(guildId, set);
    }
    set.add(channelId);
  }
  // 是否正在监听某个子频道
  isListening(channelId, guildId) {
    return !!this.listeningChannels.get(guildId)?.has(channelId);
  }
  async fetchBotInfo() {
    try {
      const user = (await this.api.getLogin()).user;
      runInAction3(() => {
        this.botInfo = {
          id: user.id,
          username: (user.name ?? "").replace(/-测试中$/, ""),
          avatar: user.avatar ?? ""
        };
      });
    } catch (e) {
      console.error("\u83B7\u53D6\u673A\u5668\u4EBA\u4FE1\u606F\u5931\u8D25", e);
    }
  }
  async start() {
    console.log("\u5F00\u59CB\u8FDE\u63A5\u670D\u52A1\u5668", this.id);
    await this.context.start();
    console.log("\u8FDE\u63A5\u670D\u52A1\u5668\u5B8C\u6210", this.id);
  }
  async disconnect() {
    this._fork.dispose();
    await this.context.stop();
  }
  sameConfigWith(anotherConfig) {
    return (0, import_lodash3.isEqual)(this.config, anotherConfig);
  }
  on(name, listener) {
    this.context.on(name, listener);
  }
};

// src/adapter/BotManager.ts
var BotManager = class {
  wss;
  bots = /* @__PURE__ */ new Map();
  // singleton
  constructor(wss) {
    this.wss = wss;
  }
  async login(config) {
    const bot = this.find(getBotId(config.platform, config.appid));
    if (bot && bot.sameConfigWith(config)) {
      console.log("\u5DF2\u5B58\u5728\u76F8\u540C\u7684\u673A\u5668\u4EBA\u8FDE\u63A5\uFF0C\u53EF\u76F4\u63A5\u590D\u7528");
      return bot;
    }
    if (bot) {
      console.log("\u673A\u5668\u4EBA\u8FDE\u63A5\u914D\u7F6E\u53D8\u66F4\uFF0C\u91CD\u65B0\u8FDE\u63A5...");
      await bot.disconnect();
    }
    const newBot = new Bot4(config, this.wss);
    this.bots.set(newBot.id, newBot);
    await newBot.start();
    return newBot;
  }
  find(id) {
    if (!id) {
      return void 0;
    }
    return this.bots.get(id);
  }
};

// src/app/wss.ts
import wsAdapter from "crossws/adapters/node";
import { defineHooks } from "crossws";
configure({ enforceActions: "never" });
var Wss = class {
  // private readonly server: WebSocketServer;
  clientMap = /* @__PURE__ */ new Map();
  bots = new BotManager(this);
  cards = new CardManager(this);
  plugin = new PluginManager(this);
  config = new ConfigManager(this);
  hooks = defineHooks({
    upgrade(req) {
    },
    close: (peer) => {
      console.log("WebSocket \u670D\u52A1\u5DF2\u5173\u95ED");
      this.clientMap.get(peer.id)?.onClose();
    },
    error: (peer, e) => {
      console.error("WebSocket \u670D\u52A1\u51FA\u9519", e);
      this.clientMap.get(peer.id)?.onError(e);
    },
    open: (peer) => {
      console.log("\u5DF2\u63A5\u5165\u65B0\u7684\u5BA2\u6237\u7AEF");
      this.clientMap.set(peer.id, new WsClient2(this, peer));
    },
    message: (peer, message) => {
      this.clientMap.get(peer.id)?.onMessage(message.rawData);
    }
  });
  constructor() {
    makeAutoObservable13(this, { server: false });
    this.mainClient();
  }
  async mainClient() {
    const mainClient = new WsClient2(this);
    await this.handleClientRequest(mainClient, {
      cmd: "bot/loginV2",
      data: {
        platform: "qqguild",
        appid: "102128160",
        secret: "GWm2Jar8PgxEWo6OgyGZsBUn6Pi2Mg1M",
        token: "XFipyH3mHMVYv8I7HK4dYBwGnD7BF1Zy",
        sandbox: true,
        type: "private"
      }
    });
    await this.handleClientRequest(mainClient, {
      cmd: "channel/listen",
      data: {
        channelId: "654461697",
        guildId: "16465426603407454801"
      }
    });
    return mainClient;
  }
  async start(port) {
    const server = wsAdapter({
      serverOptions: { port, noServer: false },
      hooks: this.hooks
    });
    return server;
  }
  async handleClientRequest(client, request) {
    return dispatch(client, this, request);
  }
  removeClient(client) {
    this.clientMap.delete(client.id);
  }
  // 发消息给某个 client
  sendToClient(client, message) {
    client.send(message);
  }
  // 发消息给正在监听某个频道的所有 client
  sendToChannel(channelUnionId, message) {
    this.clientMap.forEach((client) => {
      if (client.listenToChannelUnionId === channelUnionId) {
        client.send(message);
      }
    });
  }
  // sendToGuild<T>(guildId: string, message: IMessage<T>) {
  //   this.clients.filter(client => client.listenToGuildId === guildId).forEach(client => {
  //     client.send(message)
  //   })
  // }
};
export {
  Wss
};
/*! Bundled license information:

lodash/lodash.js:
  (**
   * @license
   * Lodash <https://lodash.com/>
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)

mustache/mustache.mjs:
  (*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   *)
*/
