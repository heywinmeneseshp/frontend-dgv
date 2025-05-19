import React from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const Formulario = ({ show, setShow, titulo, labels, selects, datalist, checkboxes }) => {

  // Función para cerrar el modal
  const cerrarModal = () => setShow(false);

  // Renderizado dinámico del input según tipo: texto, select, datalist o checkbox
  const renderInput = (key, item) => {
    const label = labels[item];

    // Checkbox
    if (checkboxes?.label === label) {
      return (
        <Form.Group key={key} className="mb-3" size="sm">
          <Form.Check id={item} type="checkbox" label="Acepto términos y condiciones" />
        </Form.Group>
      );
    }

    // Select dropdown
    const resultado = selects?.find(element => element.label === label);
    console.log(resultado)
    if (resultado) {
      return (
        <Form.Group key={key} className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Select id={resultado.dataValue} size="sm" defaultValue="">
            <option value="">Selecciona una opción</option>
            {resultado.data.map((element, i) => {
              console.log(element)
              return (
                (
                  <option key={i} value={element.id}>
                    {element[resultado.dataValue]}
                  </option>
                )
              )
            })}
          </Form.Select>
        </Form.Group>
      );
    }

    // Input con datalist
    console.log(datalist)
    if (datalist?.label === label) {
      return (
        <Form.Group key={key} className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control
            id={item}
            size="sm"
            list={`${item}-list`}  // Usar id único para datalist
            placeholder="Escribe o selecciona un item"
          />
          <datalist id={`${item}-list`}>
            {datalist.data.map((element, i) => (
              <option key={i} value={element[datalist.dataValue]} />
            ))}
          </datalist>
        </Form.Group>
      );
    }

    // Input de texto por defecto
    return (
      <Form.Group key={key} className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control id={item} size="sm" type="text" placeholder="Ingresa tu nombre" />
      </Form.Group>
    );
  };

  return (
    <Modal show={show} onHide={cerrarModal} centered>
      <Modal.Header closeButton className="py-1 px-2">
        <Modal.Title style={{ fontSize: '1rem', marginBottom: 0 }}>{titulo}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="p-2">
          {/* Renderizamos todos los inputs según labels */}
          {Object.keys(labels).map((item, key) => renderInput(key, item))}
        </Form>
      </Modal.Body>

      <Modal.Footer className="py-1 px-2">
        <Button size="sm" variant="secondary" onClick={cerrarModal}>
          Cerrar
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Formulario;
