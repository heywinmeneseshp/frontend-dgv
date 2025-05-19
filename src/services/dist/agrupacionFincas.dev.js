"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeAgrupacionFinca = exports.updateAgrupacionFinca = exports.findByIdAgrupacionFinca = exports.filterByCamposAgrupacionFinca = exports.filterGlobalAgrupacionFinca = exports.createAgrupacionFinca = exports.findAllAgrupacionFinca = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ajusta la ruta según tu proyecto
// Obtener todas las Agrupacionfincas
var findAllAgrupacionFinca = function findAllAgrupacionFinca() {
  var response;
  return regeneratorRuntime.async(function findAllAgrupacionFinca$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(_index["default"].agrupacionFincas.findAll));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw new Error('Error al obtener las Agrupacionfincas: ' + _context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Crear una nueva Agrupacionfinca


exports.findAllAgrupacionFinca = findAllAgrupacionFinca;

var createAgrupacionFinca = function createAgrupacionFinca(data) {
  var response;
  return regeneratorRuntime.async(function createAgrupacionFinca$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(_index["default"].agrupacionFincas.create, data));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw new Error('Error al crear la Agrupacionfinca: ' + _context2.t0.message);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Buscar Agrupacionfinca(s) con filtro global (búsqueda tipo search)


exports.createAgrupacionFinca = createAgrupacionFinca;

var filterGlobalAgrupacionFinca = function filterGlobalAgrupacionFinca(query) {
  var response;
  return regeneratorRuntime.async(function filterGlobalAgrupacionFinca$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(_index["default"].agrupacionFincas.filterGlobal(query)));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          throw new Error('Error en búsqueda global: ' + _context3.t0.message);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Filtrar por varios campos, ejemplo: { nombre: 'AgrupacionFinca1', habilitado: true }


exports.filterGlobalAgrupacionFinca = filterGlobalAgrupacionFinca;

var filterByCamposAgrupacionFinca = function filterByCamposAgrupacionFinca(filtros) {
  var response;
  return regeneratorRuntime.async(function filterByCamposAgrupacionFinca$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(_index["default"].agrupacionFincas.filterByCampos(filtros)));

        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          throw new Error('Error en filtro por campos: ' + _context4.t0.message);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Obtener Agrupacionfinca por id


exports.filterByCamposAgrupacionFinca = filterByCamposAgrupacionFinca;

var findByIdAgrupacionFinca = function findByIdAgrupacionFinca(id) {
  var response;
  return regeneratorRuntime.async(function findByIdAgrupacionFinca$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(_index["default"].agrupacionFincas.findById(id)));

        case 3:
          response = _context5.sent;
          return _context5.abrupt("return", response.data);

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          throw new Error('Error al obtener la Agrupacionfinca: ' + _context5.t0.message);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Actualizar Agrupacionfinca por id


exports.findByIdAgrupacionFinca = findByIdAgrupacionFinca;

var updateAgrupacionFinca = function updateAgrupacionFinca(id, changes) {
  var response;
  return regeneratorRuntime.async(function updateAgrupacionFinca$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].patch(_index["default"].agrupacionFincas.update(id), changes));

        case 3:
          response = _context6.sent;
          return _context6.abrupt("return", response.data);

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          throw new Error('Error al actualizar la Agrupacionfinca: ' + _context6.t0.message);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Eliminar Agrupacionfinca por id


exports.updateAgrupacionFinca = updateAgrupacionFinca;

var removeAgrupacionFinca = function removeAgrupacionFinca(id) {
  var response;
  return regeneratorRuntime.async(function removeAgrupacionFinca$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_axios["default"]["delete"](_index["default"].agrupacionFincas["delete"](id)));

        case 3:
          response = _context7.sent;
          return _context7.abrupt("return", response.data);

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          throw new Error('Error al eliminar la Agrupacionfinca: ' + _context7.t0.message);

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.removeAgrupacionFinca = removeAgrupacionFinca;