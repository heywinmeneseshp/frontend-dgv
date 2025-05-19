"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var API = process.env.NEXT_PUBLIC_API_URL;
/**
 * Genera un objeto con los endpoints CRUD básicos para un recurso dado.
 * @param {string} path - Ruta base del recurso, ej: 'fincas'
 * @returns {object} - Objeto con métodos para formar URLs de endpoints
 */

var buildCrudEndpoints = function buildCrudEndpoints(path) {
  return {
    findAll: "".concat(API, "/").concat(path),
    create: "".concat(API, "/").concat(path),
    filterGlobal: function filterGlobal(query) {
      return "".concat(API, "/").concat(path, "?q=").concat(encodeURIComponent(query));
    },
    filterByCampos: function filterByCampos(filtros) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      var limit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10;
      var query = Object.entries(filtros).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(value));
      }).join('&');
      console.log("".concat(API, "/").concat(path, "/paginate?").concat(query, "&offset=").concat(offset, "&limit=").concat(limit));
      return "".concat(API, "/").concat(path, "/paginate?").concat(query, "&offset=").concat(offset, "&limit=").concat(limit);
    },
    findById: function findById(id) {
      return "".concat(API, "/").concat(path, "/").concat(id);
    },
    update: function update(id) {
      return "".concat(API, "/").concat(path, "/").concat(id);
    },
    "delete": function _delete(id) {
      return "".concat(API, "/").concat(path, "/").concat(id);
    }
  };
}; // Definición homogénea para todos los recursos


var endPoints = {
  tiposUsuarios: buildCrudEndpoints('tipos-usuarios'),
  usuarios: buildCrudEndpoints('usuarios'),
  tipos: buildCrudEndpoints('tipos'),
  motivos: buildCrudEndpoints('motivos'),
  semanas: buildCrudEndpoints('semanas'),
  agrupacionFincas: buildCrudEndpoints('agrupacion-fincas'),
  comercializadoras: buildCrudEndpoints('comercializadoras'),
  fincas: buildCrudEndpoints('fincas'),
  lotes: buildCrudEndpoints('lotes'),
  zonas: buildCrudEndpoints('zonas'),
  calibracionLargo: buildCrudEndpoints('calibracion-largo'),
  ppf: buildCrudEndpoints('ppf'),
  grupoLabores: buildCrudEndpoints('grupo-labores'),
  labores: buildCrudEndpoints('labores'),
  itemsLabor: buildCrudEndpoints('items-labor'),
  frutas: buildCrudEndpoints('frutas'),
  mermaRapida: buildCrudEndpoints('merma-rapida'),
  companias: buildCrudEndpoints('companias')
};
var _default = endPoints;
exports["default"] = _default;