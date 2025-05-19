import axios from 'axios';
import endPoints from './index'; // ajusta la ruta según tu proyecto

// Obtener todas las Comercializadoras
const findAllComercializadora = async () => {
  try {
    const response = await axios.get(endPoints.comercializadoras.findAll);
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener las Comercializadoras: ' + error.message);
  }
};

// Crear una nueva Comercializadora
const createComercializadora = async (data) => {
  try {
    const response = await axios.post(endPoints.comercializadoras.create, data);
    return response.data;
  } catch (error) {
    throw new Error('Error al crear la Comercializadora: ' + error.message);
  }
};

// Buscar Comercializadora(s) con filtro global (búsqueda tipo search)
const filterGlobalComercializadora = async (query) => {
  try {
    const response = await axios.get(endPoints.comercializadoras.filterGlobal(query));
    return response.data;
  } catch (error) {
    throw new Error('Error en búsqueda global: ' + error.message);
  }
};

// Filtrar por varios campos, ejemplo: { nombre: 'Comercializadora1', habilitado: true }
const filterByCamposComercializadora = async (filtros) => {
  try {
    const response = await axios.get(endPoints.comercializadoras.filterByCampos(filtros));
    return response.data;
  } catch (error) {
    throw new Error('Error en filtro por campos: ' + error.message);
  }
};

// Obtener Comercializadora por id
const findByIdComercializadora = async (id) => {
  try {
    const response = await axios.get(endPoints.comercializadoras.findById(id));
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener la Comercializadora: ' + error.message);
  }
};

// Actualizar Comercializadora por id
const updateComercializadora = async (id, changes) => {
  try {
    const response = await axios.patch(endPoints.comercializadoras.update(id), changes);
    return response.data;
  } catch (error) {
    throw new Error('Error al actualizar la Comercializadora: ' + error.message);
  }
};

// Eliminar Comercializadora por id
const removeComercializadora = async (id) => {
  try {
    const response = await axios.delete(endPoints.comercializadoras.delete(id));
    return response.data;
  } catch (error) {
    throw new Error('Error al eliminar la Comercializadora: ' + error.message);
  }
};

export {
  findAllComercializadora,
  createComercializadora,
  filterGlobalComercializadora,
  filterByCamposComercializadora,
  findByIdComercializadora,
  updateComercializadora,
  removeComercializadora,
};
