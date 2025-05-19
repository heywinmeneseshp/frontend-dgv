"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFinca = exports.updateFinca = exports.findByIdFinca = exports.filterByCamposFinca = exports.filterGlobalFinca = exports.createFinca = exports.findAllFinca = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// ajusta la ruta según tu proyecto
// Obtener todas las fincas
var findAllFinca = function findAllFinca() {
  var response;
  return regeneratorRuntime.async(function findAllFinca$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(_index["default"].fincas.findAll));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          throw new Error('Error al obtener las fincas: ' + _context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Crear una nueva finca


exports.findAllFinca = findAllFinca;

var createFinca = function createFinca(data) {
  var response;
  return regeneratorRuntime.async(function createFinca$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].post(_index["default"].fincas.create, data));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          throw new Error('Error al crear la finca: ' + _context2.t0.message);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Buscar finca(s) con filtro global (búsqueda tipo search)


exports.createFinca = createFinca;

var filterGlobalFinca = function filterGlobalFinca(query) {
  var response;
  return regeneratorRuntime.async(function filterGlobalFinca$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(_index["default"].fincas.filterGlobal(query)));

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
}; // Filtrar por varios campos, ejemplo: { nombre: 'Finca1', habilitado: true }


exports.filterGlobalFinca = filterGlobalFinca;

var filterByCamposFinca = function filterByCamposFinca(filtros) {
  var response;
  return regeneratorRuntime.async(function filterByCamposFinca$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(_index["default"].fincas.filterByCampos(filtros)));

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
}; // Obtener finca por id


exports.filterByCamposFinca = filterByCamposFinca;

var findByIdFinca = function findByIdFinca(id) {
  var response;
  return regeneratorRuntime.async(function findByIdFinca$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].get(_index["default"].fincas.findById(id)));

        case 3:
          response = _context5.sent;
          return _context5.abrupt("return", response.data);

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          throw new Error('Error al obtener la finca: ' + _context5.t0.message);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Actualizar finca por id


exports.findByIdFinca = findByIdFinca;

var updateFinca = function updateFinca(id, changes) {
  var response;
  return regeneratorRuntime.async(function updateFinca$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_axios["default"].patch(_index["default"].fincas.update(id), changes));

        case 3:
          response = _context6.sent;
          return _context6.abrupt("return", response.data);

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          throw new Error('Error al actualizar la finca: ' + _context6.t0.message);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Eliminar finca por id


exports.updateFinca = updateFinca;

var removeFinca = function removeFinca(id) {
  var response;
  return regeneratorRuntime.async(function removeFinca$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_axios["default"]["delete"](_index["default"].fincas["delete"](id)));

        case 3:
          response = _context7.sent;
          return _context7.abrupt("return", response.data);

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          throw new Error('Error al eliminar la finca: ' + _context7.t0.message);

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.removeFinca = removeFinca;