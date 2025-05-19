const API = process.env.NEXT_PUBLIC_API_URL;

/**
 * Genera un objeto con los endpoints CRUD básicos para un recurso dado.
 * @param {string} path - Ruta base del recurso, ej: 'fincas'
 * @returns {object} - Objeto con métodos para formar URLs de endpoints
 */
const buildCrudEndpoints = (path) => ({
  findAll: `${API}/${path}`,
  create: `${API}/${path}`,
  filterGlobal: (query) => `${API}/${path}?q=${encodeURIComponent(query)}`,
  filterByCampos: (filtros, offset = 1, limit = 10) => {
    const query = Object.entries(filtros)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
      console.log( `${API}/${path}/paginate?${query}&offset=${offset}&limit=${limit}`)
    return `${API}/${path}/paginate?${query}&offset=${offset}&limit=${limit}`;
  },
  findById: (id) => `${API}/${path}/${id}`,
  update: (id) => `${API}/${path}/${id}`,
  delete: (id) => `${API}/${path}/${id}`,
});

// Definición homogénea para todos los recursos
const endPoints = {
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
  companias: buildCrudEndpoints('companias'),
};

export default endPoints;
