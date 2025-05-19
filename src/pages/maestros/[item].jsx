
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Layout from '@/layout/Layout';
import Tabla from '@/components/shared/Tabla';
import Formulario from '@/components/shared/Formulario';
import { filtrarDatos, updateItem } from '@/utils/tablaMaestroFunciones';

export default function MaestrosPage() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [titulo, setTitulo] = useState();
  const [show, setShow] = useState(false);
  const [filtros, setFiltros] = useState([]);
  const [encabezados, setEncabezados] = useState([]);
  const [labels, setLabels] = useState([]);
  const [datalist, setDatalist] = useState([]);
  const [selects, setSelects] = useState([]);
  const [checkboxes, setCheckboxes] = useState([]);
  const [actualizado, setActualizado] = useState(false);


  const cargarDatos = async () => {
    if (!router.isReady) return;
    const { item } = router.query;

    const datos = await filtrarDatos(item, filtros, 1, 10);
    setTitulo(datos.titulo);
    setLabels(datos?.labels);
    setSelects(datos?.selects);
    console.log(datos)
    setEncabezados(datos?.encabezados);
    setDatalist(datos?.datalist);
    setData(datos?.data.data || []);
    setCheckboxes(datos?.checkboxes);
  };

  useEffect(() => {
    cargarDatos();
  }, [router.query, actualizado]); // si quieres que recargue también al cambiar filtros

  // Función para actualizar un item y luego recargar datos
  const handleUpdateItem = async (itemId, nuevosDatos) => {
    try {
      await updateItem(router?.query?.item,itemId, nuevosDatos);
      // Luego de actualizar, recarga los datos
      setActualizado(!actualizado);  // Cambiamos el valor para disparar useEffect
    } catch (error) {
      console.error('Error actualizando item:', error);
    }
  };


  return (
    <Layout>
      <Tabla
        setShow={setShow}
        titulo={titulo}
        data={data}
        encabezados={encabezados}
        setTitulo={setTitulo}
        actualizar={handleUpdateItem}
        setFiltros={setFiltros}
      />
      <Formulario
        titulo={titulo}
        show={show}
        setShow={setShow}
        labels={labels}
        selects={selects}
        datalist={datalist}
        actualizar={handleUpdateItem}
        checkboxes={{}}
      />
    </Layout>
  );
}
