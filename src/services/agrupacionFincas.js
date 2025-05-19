import axios from 'axios';
import endPoints from './index'; // ajusta la ruta según tu proyecto

// Obtener todas las Agrupacionfincas
const findAllAgrupacionFinca = async () => {
  try {
    const response = await axios.get(endPoints.agrupacionFincas.findAll);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener las Agrupacionfincas: ' + error.message);
  }
};

// Crear una nueva Agrupacionfinca
const createAgrupacionFinca = async (data) => {
  try {
    const response = await axios.post(endPoints.agrupacionFincas.create, data);
    return response.data;
  } catch (error) {
    throw new Error('Error al crear la Agrupacionfinca: ' + error.message);
  }
};

// Buscar Agrupacionfinca(s) con filtro global (búsqueda tipo search)
const filterGlobalAgrupacionFinca = async (query) => {
  try {
    const response = await axios.get(endPoints.agrupacionFincas.filterGlobal(query));
    return response.data;
  } catch (error) {
    throw new Error('Error en búsqueda global: ' + error.message);
  }
};

// Filtrar por varios campos, ejemplo: { nombre: 'AgrupacionFinca1', habilitado: true }
const filterByCamposAgrupacionFinca = async (filtros) => {
  try {
    const response = await axios.get(endPoints.agrupacionFincas.filterByCampos(filtros));
    return response.data;
  } catch (error) {
    throw new Error('Error en filtro por campos: ' + error.message);
  }
};

// Obtener Agrupacionfinca por id
const findByIdAgrupacionFinca = async (id) => {
  try {
    const response = await axios.get(endPoints.agrupacionFincas.findById(id));
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la Agrupacionfinca: ' + error.message);
  }
};

// Actualizar Agrupacionfinca por id
const updateAgrupacionFinca = async (id, changes) => {
  try {
    const response = await axios.patch(endPoints.agrupacionFincas.update(id), changes);
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar la Agrupacionfinca: ' + error.message);
  }
};

// Eliminar Agrupacionfinca por id
const removeAgrupacionFinca = async (id) => {
  try {
    const response = await axios.delete(endPoints.agrupacionFincas.delete(id));
    return response.data;
  } catch (error) {
    throw new Error('Error al eliminar la Agrupacionfinca: ' + error.message);
  }
};

export {
  findAllAgrupacionFinca,
  createAgrupacionFinca,
  filterGlobalAgrupacionFinca,
  filterByCamposAgrupacionFinca,
  findByIdAgrupacionFinca,
  updateAgrupacionFinca,
  removeAgrupacionFinca,
};
