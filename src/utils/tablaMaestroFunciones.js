
import { findAllAgrupacionFinca, filterByCamposAgrupacionFinca } from '@/services/agrupacionFincas';
import { filterByCamposComercializadora, findAllComercializadora, updateComercializadora } from '@/services/comercializadoras';
import { filterByCamposFinca, updateFinca } from '@/services/fincas';


/**
 * Formatea un título reemplazando guiones por espacios y capitalizando la primera letra.
 * @param {string} title - El título a formatear.
 * @returns {string} - Título formateado.
 */
const formatTitle = (title) => {
  const formatted = title.replace(/-/g, ' ');
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
};

/**
 * Configuración de la tabla 'fincas'.
 * @returns {Object} - Configuración de la tabla.
 */
const getFincasConfig = async () => {
  const [agrupaciones, comercializadoras] = await Promise.all([
    filterByCamposAgrupacionFinca({}, 1,1000 ),
    findAllComercializadora(),
  ]);

  const agrupacionesOptions = agrupaciones.data.map((item) => ({
    id: item.id,
    nombre: item.grupo,
  }));

  const comercializadorasOptions = comercializadoras.map((item) => ({
    id: item.id,
    nombre: item.nombre_comercial,
  }));

  const labels = {
    id: 'ID',
    nombre: 'Nombre',
    comercializadora: 'Comercializadora',
    grupo: 'Grupo',
  };

  const encabezados = {
    ...labels,
    habilitado: 'Estado',
  };

  const selects = [
    {
      label: 'Grupo',
      data: agrupacionesOptions,
      dataValue: 'nombre',
    },
    {
      label: 'Comercializadora',
      data: comercializadorasOptions,
      dataValue: 'nombre',
    },
  ];

  const datalist = {};

  const checkboxes = {
    label: 'Estado',
    options: [
      { value: true, label: 'Sí' },
      { value: false, label: 'No' },
    ],
  };

  return { labels, encabezados, selects, datalist, checkboxes };
};

/**
 * Configuración de la tabla 'cliente' (comercializadoras).
 * @returns {Object} - Configuración de la tabla.
 */
const getComercializadoraConfig = async () => {
  const labels = {
    id: 'ID',
    razon_social: 'Razón Social',
    nombre_comercial: 'Nombre Comercial',
  };

  const encabezados = {
    ...labels,
    habilitado: 'Estado',
  };

  const selects = [];
  const datalist = {};

  const checkboxes = {
    label: 'Estado',
    options: [
      { value: true, label: 'Sí' },
      { value: false, label: 'No' },
    ],
  };

  return { labels, encabezados, selects, datalist, checkboxes };
};

/**
 * Obtiene la configuración de una tabla específica.
 * @param {string} nombreTabla - Nombre de la tabla.
 * @returns {Object} - Configuración de la tabla.
 */
const getLabelsAndHeaders = async (nombreTabla) => {
  switch (nombreTabla) {
    case 'fincas':
      return await getFincasConfig();
    case 'comercializadoras':
      return await getComercializadoraConfig();
    default:
      return {
        labels: {},
        encabezados: {},
        selects: [],
        datalist: {},
        checkboxes: {},
      };
  }
};

/**
 * Filtra datos de una tabla específica utilizando filtros, paginación y título.
 * @param {string} nombreTabla - Nombre de la tabla a filtrar.
 * @param {Object} filtros - Filtros a aplicar.
 * @param {number} offset - Desplazamiento para paginación.
 * @param {number} limit - Límite de resultados por página.
 * @returns {Object} - Objeto con datos filtrados y configuración de la tabla.
 */
const filtrarDatos = async (nombreTabla = '', filtros = {}, offset = 1, limit = 10) => {
  try {
    const { labels, encabezados, selects, datalist, checkboxes } = await getLabelsAndHeaders(nombreTabla);
    const titulo = formatTitle(nombreTabla);
    let data = [];
      console.log(nombreTabla);
    switch (nombreTabla) {

      case 'fincas':
        
        data = await filterByCamposFinca(filtros, offset, limit);
        data.data = data.data.map((finca) => ({
          ...finca,
          comercializadora: finca.comercializadora?.nombre_comercial || '',
          grupo: finca.agrupacion_fincas?.grupo || '',
        }));
        break;
      case 'comercializadoras':
        data = await filterByCamposComercializadora(filtros, offset, limit);
        data.data = data.data.map((comercializadora) => ({
          ...comercializadora,
        }));
        console.log(data)
        break;
      default:
        console.error('Tabla no válida');
        return {
          data: [],
          encabezados: {},
          labels: {},
          selects: [],
          datalist: {},
          checkboxes: {},
          titulo: '',
        };
    }

    return { data, encabezados, labels, selects, datalist, checkboxes, titulo };
  } catch (error) {
    console.error('Error al filtrar datos:', error.message);
    return {
      data: [],
      encabezados: {},
      labels: {},
      selects: [],
      datalist: {},
      checkboxes: {},
      titulo: '',
    };
  }
};

/**
 * Actualiza un elemento en una tabla específica.
 * @param {string} nombreTabla - Nombre de la tabla.
 * @param {number|string} id - ID del elemento a actualizar.
 * @param {Object} change - Cambios a aplicar.
 */
const updateItem = async (nombreTabla, id, change) => {
  try {
    switch (nombreTabla) {
      case 'fincas':
        await updateFinca(id, change);
        break;
      case 'comercializadoras':
        await updateComercializadora(id, change);
        break;
      default:
        throw new Error('Tabla no válida');
    }
  } catch (error) {
    console.error(`Error al actualizar en la tabla ${nombreTabla}:`, error.message);
    throw error;
  }
};

export { filtrarDatos, updateItem };
