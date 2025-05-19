"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateItem = exports.filtrarDatos = void 0;

var _agrupacionFincas = require("@/services/agrupacionFincas");

var _comercializadoras = require("@/services/comercializadoras");

var _fincas = require("@/services/fincas");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Formatea un título reemplazando guiones por espacios y capitalizando la primera letra.
 * @param {string} title - El título a formatear.
 * @returns {string} - Título formateado.
 */
var formatTitle = function formatTitle(title) {
  var formatted = title.replace(/-/g, ' ');
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};
/**
 * Configuración de la tabla 'fincas'.
 * @returns {Object} - Configuración de la tabla.
 */


var getFincasConfig = function getFincasConfig() {
  var _ref, _ref2, agrupaciones, comercializadoras, agrupacionesOptions, comercializadorasOptions, labels, encabezados, selects, datalist, checkboxes;

  return regeneratorRuntime.async(function getFincasConfig$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(Promise.all([(0, _agrupacionFincas.findAllAgrupacionFinca)(), (0, _comercializadoras.findAllComercializadora)()]));

        case 2:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 2);
          agrupaciones = _ref2[0];
          comercializadoras = _ref2[1];
          agrupacionesOptions = agrupaciones.map(function (item) {
            return {
              id: item.id,
              nombre: item.grupo
            };
          });
          comercializadorasOptions = comercializadoras.map(function (item) {
            return {
              id: item.id,
              nombre: item.nombre_comercial
            };
          });
          labels = {
            id: 'ID',
            nombre: 'Nombre',
            comercializadora: 'Comercializadora',
            grupo: 'Grupo'
          };
          encabezados = _objectSpread({}, labels, {
            habilitado: 'Estado'
          });
          selects = [{
            label: 'Grupo',
            data: agrupacionesOptions,
            dataValue: 'nombre'
          }, {
            label: 'Comercializadora',
            data: comercializadorasOptions,
            dataValue: 'nombre'
          }];
          datalist = {};
          checkboxes = {
            label: 'Estado',
            options: [{
              value: true,
              label: 'Sí'
            }, {
              value: false,
              label: 'No'
            }]
          };
          return _context.abrupt("return", {
            labels: labels,
            encabezados: encabezados,
            selects: selects,
            datalist: datalist,
            checkboxes: checkboxes
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};
/**
 * Configuración de la tabla 'cliente' (comercializadoras).
 * @returns {Object} - Configuración de la tabla.
 */


var getComercializadoraConfig = function getComercializadoraConfig() {
  var labels, encabezados, selects, datalist, checkboxes;
  return regeneratorRuntime.async(function getComercializadoraConfig$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          labels = {
            id: 'ID',
            razon_social: 'Razón Social',
            nombre_comercial: 'Nombre Comercial'
          };
          encabezados = _objectSpread({}, labels, {
            habilitado: 'Estado'
          });
          selects = [];
          datalist = {};
          checkboxes = {
            label: 'Estado',
            options: [{
              value: true,
              label: 'Sí'
            }, {
              value: false,
              label: 'No'
            }]
          };
          return _context2.abrupt("return", {
            labels: labels,
            encabezados: encabezados,
            selects: selects,
            datalist: datalist,
            checkboxes: checkboxes
          });

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
};
/**
 * Obtiene la configuración de una tabla específica.
 * @param {string} nombreTabla - Nombre de la tabla.
 * @returns {Object} - Configuración de la tabla.
 */


var getLabelsAndHeaders = function getLabelsAndHeaders(nombreTabla) {
  return regeneratorRuntime.async(function getLabelsAndHeaders$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.t0 = nombreTabla;
          _context3.next = _context3.t0 === 'fincas' ? 3 : _context3.t0 === 'clientes' ? 6 : 9;
          break;

        case 3:
          _context3.next = 5;
          return regeneratorRuntime.awrap(getFincasConfig());

        case 5:
          return _context3.abrupt("return", _context3.sent);

        case 6:
          _context3.next = 8;
          return regeneratorRuntime.awrap(getComercializadoraConfig());

        case 8:
          return _context3.abrupt("return", _context3.sent);

        case 9:
          return _context3.abrupt("return", {
            labels: {},
            encabezados: {},
            selects: [],
            datalist: {},
            checkboxes: {}
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  });
};
/**
 * Filtra datos de una tabla específica utilizando filtros, paginación y título.
 * @param {string} nombreTabla - Nombre de la tabla a filtrar.
 * @param {Object} filtros - Filtros a aplicar.
 * @param {number} offset - Desplazamiento para paginación.
 * @param {number} limit - Límite de resultados por página.
 * @returns {Object} - Objeto con datos filtrados y configuración de la tabla.
 */


var filtrarDatos = function filtrarDatos() {
  var nombreTabla,
      filtros,
      offset,
      limit,
      _ref3,
      labels,
      encabezados,
      selects,
      datalist,
      checkboxes,
      titulo,
      data,
      _args4 = arguments;

  return regeneratorRuntime.async(function filtrarDatos$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          nombreTabla = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : '';
          filtros = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : {};
          offset = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : 1;
          limit = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : 10;
          _context4.prev = 4;
          _context4.next = 7;
          return regeneratorRuntime.awrap(getLabelsAndHeaders(nombreTabla));

        case 7:
          _ref3 = _context4.sent;
          labels = _ref3.labels;
          encabezados = _ref3.encabezados;
          selects = _ref3.selects;
          datalist = _ref3.datalist;
          checkboxes = _ref3.checkboxes;
          titulo = formatTitle(nombreTabla);
          data = [];
          console.log(nombreTabla);
          _context4.t0 = nombreTabla;
          _context4.next = _context4.t0 === 'fincas' ? 19 : _context4.t0 === 'comercializadoras' ? 25 : 31;
          break;

        case 19:
          _context4.next = 21;
          return regeneratorRuntime.awrap((0, _fincas.filterByCamposFinca)(filtros, offset, limit));

        case 21:
          data = _context4.sent;
          data.data = data;
          console.log(data);
          return _context4.abrupt("break", 33);

        case 25:
          _context4.next = 27;
          return regeneratorRuntime.awrap((0, _comercializadoras.filterByCamposComercializadora)(filtros, offset, limit));

        case 27:
          data = _context4.sent;
          console.log(data);
          data.data = data.data.map(function (comercializadora) {
            return _objectSpread({}, comercializadora);
          });
          return _context4.abrupt("break", 33);

        case 31:
          console.error('Tabla no válida');
          return _context4.abrupt("return", {
            data: [],
            encabezados: {},
            labels: {},
            selects: [],
            datalist: {},
            checkboxes: {},
            titulo: ''
          });

        case 33:
          return _context4.abrupt("return", {
            data: data,
            encabezados: encabezados,
            labels: labels,
            selects: selects,
            datalist: datalist,
            checkboxes: checkboxes,
            titulo: titulo
          });

        case 36:
          _context4.prev = 36;
          _context4.t1 = _context4["catch"](4);
          console.error('Error al filtrar datos:', _context4.t1.message);
          return _context4.abrupt("return", {
            data: [],
            encabezados: {},
            labels: {},
            selects: [],
            datalist: {},
            checkboxes: {},
            titulo: ''
          });

        case 40:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[4, 36]]);
};
/**
 * Actualiza un elemento en una tabla específica.
 * @param {string} nombreTabla - Nombre de la tabla.
 * @param {number|string} id - ID del elemento a actualizar.
 * @param {Object} change - Cambios a aplicar.
 */


exports.filtrarDatos = filtrarDatos;

var updateItem = function updateItem(nombreTabla, id, change) {
  return regeneratorRuntime.async(function updateItem$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.t0 = nombreTabla;
          _context5.next = _context5.t0 === 'fincas' ? 4 : _context5.t0 === 'comercializadoras' ? 7 : 10;
          break;

        case 4:
          _context5.next = 6;
          return regeneratorRuntime.awrap((0, _fincas.updateFinca)(id, change));

        case 6:
          return _context5.abrupt("break", 11);

        case 7:
          _context5.next = 9;
          return regeneratorRuntime.awrap((0, _comercializadoras.updateComercializadora)(id, change));

        case 9:
          return _context5.abrupt("break", 11);

        case 10:
          throw new Error('Tabla no válida');

        case 11:
          _context5.next = 17;
          break;

        case 13:
          _context5.prev = 13;
          _context5.t1 = _context5["catch"](0);
          console.error("Error al actualizar en la tabla ".concat(nombreTabla, ":"), _context5.t1.message);
          throw _context5.t1;

        case 17:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

exports.updateItem = updateItem;