"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filtrarDatos = void 0;

var _fincas = require("@/services/fincas");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * Obtiene los encabezados y etiquetas correspondientes a una tabla específica.
 * @param {string} nombreTabla - Nombre de la tabla.
 * @returns {Object} - Objeto con propiedades 'labels', 'encabezados', 'selects', 'datalists' y 'checkboxes'.
 */


var getLabelsAndHeaders = function getLabelsAndHeaders(nombreTabla) {
  switch (nombreTabla) {
    case 'fincas':
      var labels = {
        id: 'ID',
        nombre: 'Nombre',
        id_comercializadora: 'Comercializadora',
        id_agrupacion_fincas: 'Grupo'
      };

      var encabezados = _objectSpread({}, labels, {
        habilitado: 'Habilitado'
      });

      var selects = {
        comercializadora: {
          label: 'Comercializadora',
          data: [{
            id: '1',
            label: 'Comercializadora A'
          }, {
            id: '2',
            label: 'Comercializadora B'
          }, {
            id: '3',
            label: 'Comercializadora C'
          }],
          dataValue: 'label'
        }
      };
      var datalists = {
        agrupacion: {
          label: 'Agrupación',
          data: [{
            id: '1',
            label: 'Agrupación X'
          }, {
            id: '2',
            label: 'Agrupación Y'
          }, {
            id: '3',
            label: 'Agrupación Z'
          }],
          dataValue: 'label'
        }
      };
      var checkboxes = {
        habilitado: {
          label: 'Habilitado',
          options: [{
            value: true,
            label: 'Sí'
          }, {
            value: false,
            label: 'No'
          }]
        }
      };
      return {
        labels: labels,
        encabezados: encabezados,
        selects: selects,
        datalists: datalists,
        checkboxes: checkboxes
      };
    // Puedes agregar más casos para otras tablas aquí.

    default:
      return {
        labels: {},
        encabezados: {},
        selects: {},
        datalists: {},
        checkboxes: {}
      };
  }
};
/**
 * Filtra datos de una tabla específica utilizando filtros, paginación y título.
 * @param {string} nombreTabla - Nombre de la tabla a filtrar.
 * @param {Object} filtros - Filtros a aplicar.
 * @param {number} offset - Desplazamiento para paginación.
 * @param {number} limit - Límite de resultados por página.
 * @param {string} title - Título para formatear.
 * @returns {Object} - Objeto con datos filtrados, encabezados, etiquetas, selects, datalists, checkboxes y título formateado.
 */


var filtrarDatos = function filtrarDatos() {
  var nombreTabla,
      filtros,
      offset,
      limit,
      data,
      _getLabelsAndHeaders,
      labels,
      encabezados,
      selects,
      datalists,
      checkboxes,
      titulo,
      _args = arguments;

  return regeneratorRuntime.async(function filtrarDatos$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          nombreTabla = _args.length > 0 && _args[0] !== undefined ? _args[0] : "";
          filtros = _args.length > 1 ? _args[1] : undefined;
          offset = _args.length > 2 ? _args[2] : undefined;
          limit = _args.length > 3 ? _args[3] : undefined;
          _context.prev = 4;
          data = [];
          _getLabelsAndHeaders = getLabelsAndHeaders(nombreTabla), labels = _getLabelsAndHeaders.labels, encabezados = _getLabelsAndHeaders.encabezados, selects = _getLabelsAndHeaders.selects, datalists = _getLabelsAndHeaders.datalists, checkboxes = _getLabelsAndHeaders.checkboxes;
          titulo = formatTitle(nombreTabla);
          _context.t0 = nombreTabla;
          _context.next = _context.t0 === 'fincas' ? 11 : 16;
          break;

        case 11:
          _context.next = 13;
          return regeneratorRuntime.awrap((0, _fincas.filterByCamposFinca)(filtros, offset, limit));

        case 13:
          data = _context.sent;
          console.log(data);
          return _context.abrupt("break", 18);

        case 16:
          console.error('Tabla no válida');
          return _context.abrupt("return", {
            data: [],
            encabezados: {},
            labels: {},
            selects: {},
            datalists: {},
            checkboxes: {},
            titulo: ''
          });

        case 18:
          return _context.abrupt("return", {
            data: data,
            encabezados: encabezados,
            labels: labels,
            selects: selects,
            datalists: datalists,
            checkboxes: checkboxes,
            titulo: titulo
          });

        case 21:
          _context.prev = 21;
          _context.t1 = _context["catch"](4);
          console.error('Error al filtrar datos:', _context.t1.message);
          return _context.abrupt("return", {
            data: [],
            encabezados: {},
            labels: {},
            selects: {},
            datalists: {},
            checkboxes: {},
            titulo: ''
          });

        case 25:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 21]]);
};

exports.filtrarDatos = filtrarDatos;