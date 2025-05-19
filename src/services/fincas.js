import axios from 'axios';
import endPoints from './index'; // ajusta la ruta según tu proyecto

// Obtener todas las fincas
const findAllFinca = async () => {
  try {
    const response = await axios.get(endPoints.fincas.findAll);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener las fincas: ' + error.message);
  }
};

// Crear una nueva finca
const createFinca = async (data) => {
  try {
    const response = await axios.post(endPoints.fincas.create, data);
    return response.data;
  } catch (error) {
    throw new Error('Error al crear la finca: ' + error.message);
  }
};

// Buscar finca(s) con filtro global (búsqueda tipo search)
const filterGlobalFinca = async (query) => {
  try {
    const response = await axios.get(endPoints.fincas.filterGlobal(query));
    return response.data;
  } catch (error) {
    throw new Error('Error en búsqueda global: ' + error.message);
  }
};

// Filtrar por varios campos, ejemplo: { nombre: 'Finca1', habilitado: true }
const filterByCamposFinca = async (filtros) => {
  try {
    const response = await axios.get(endPoints.fincas.filterByCampos(filtros));
    return response.data;
  } catch (error) {
    throw new Error('Error en filtro por campos: ' + error.message);
  }
};

// Obtener finca por id
const findByIdFinca = async (id) => {
  try {
    const response = await axios.get(endPoints.fincas.findById(id));
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la finca: ' + error.message);
  }
};

// Actualizar finca por id
const updateFinca = async (id, changes) => {
  try {
    const response = await axios.patch(endPoints.fincas.update(id), changes);
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar la finca: ' + error.message);
  }
};

// Eliminar finca por id
const removeFinca = async (id) => {
  try {
    const response = await axios.delete(endPoints.fincas.delete(id));
    return response.data;
  } catch (error) {
    throw new Error('Error al eliminar la finca: ' + error.message);
  }
};

export {
  findAllFinca,
  createFinca,
  filterGlobalFinca,
  filterByCamposFinca,
  findByIdFinca,
  updateFinca,
  removeFinca,
};
