import React, { useEffect, useState } from 'react';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';
import { Button, Col, Form, Row, Table } from 'react-bootstrap';
import Paginacion from './Pagination';


const Tabla = ({ titulo, data, encabezados, setShow, setCurrentPage, currentPage, actualizar }) => {


    const nextPage = () => {
        if (currentPage < data.pages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToPage = (page) => {
        if (page >= 1 && page <= data.pages) setCurrentPage(page);
    };

    const goToFirst = () => setCurrentPage(1);
    const goToLast = () => setCurrentPage(data.pages);

    

    return (
        <>
            {/*Search */}

            <div>
                <h2>{titulo}</h2>
            </div>

            <div className="mb-3">
                <Row className="g-2 align-items-center">
                    <Col xs={12} md={1}>
                        <Button onClick={() => setShow(true)} size="sm" variant="success" className="w-100">Nuevo</Button>
                    </Col>
                    <Col xs={12} md={1}>
                        <Button size="sm" variant="danger" className="w-100">Desactivar</Button>
                    </Col>
                    <Col xs={12} md={8}>
                        <Form.Control size="sm" type="text" placeholder="Search" />
                    </Col>
                    <Col xs={12} md={1}>
                        <Button size="sm" variant="outline-secondary" className="w-100">Search</Button>
                    </Col>
                    <Col xs={12} md={1}>
                        <Button size="sm" variant="success" className="w-100">Descargar</Button>
                    </Col>
                </Row>
            </div>

            {/**Tabla */}
            <div >
                <Table size="sm" className="ultra-compact-table">
                    <thead >
                        <tr>
                            {Object.entries(encabezados).map(([key, valor]) => (
                                <th key={key}>{valor}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, key) => (
                            <tr key={key}>
                                {Object.keys(encabezados).map((encabezado, index) => {
                                    if (encabezado === 'habilitado') {
                                        return (
                                            <td
                                                key={index}
                                                style={{
                                                    width: '1%',
                                                    padding: '0.25rem',
                                                    textAlign: 'center',
                                                    verticalAlign: 'middle',
                                                }}
                                            >
                                                <span
                                                    onClick={() => actualizar(item.id, { habilitado: !item[encabezado] })}
                                                    style={{
                                                        cursor: 'pointer',
                                                        color: item[encabezado] ? 'rgba(25, 135, 84, 0.93)' : 'gray',
                                                        fontSize: '18px',
                                                        lineHeight: '1',
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                    }}
                                                >
                                                    {item[encabezado] ? <FaToggleOn /> : <FaToggleOff />}
                                                </span>
                                            </td>
                                        );
                                    } else {
                                        return (
                                            <td
                                                key={index}
                                                style={
                                                    encabezado === "id"
                                                        ? {
                                                            width: '1%',
                                                            whiteSpace: 'nowrap',
                                                            textAlign: 'center',
                                                            verticalAlign: 'middle',
                                                            padding: '0.25rem', // ajusta según tus demás celdas
                                                        }
                                                        : {}
                                                }
                                            >
                                                {item[encabezado]}
                                            </td>

                                        );
                                    }
                                })}
                            </tr>
                        ))}
                    </tbody>
                </Table>

                <style>
                    {`
          .ultra-compact-table {
            font-size: 0.8rem;
            border-collapse: collapse;
            width: 100%;
          }

          .ultra-compact-table thead th {
            border-bottom: 2px solid rgb(194, 233, 221);
            background-color:rgba(25, 135, 84, 0.93);
            padding: 6px 8px;
            text-align: center;
            border-right: 1px solid #e6e6e6;
            color: white;
          }

          .ultra-compact-table thead th:last-child {
            border-right: none;
          }

          .ultra-compact-table tbody tr {
            border-bottom: 1px solid #e0e0e0;
          }

          .ultra-compact-table tbody td {
            padding: 4px 8px;
            border-right: 1px solid #f0f0f0;
            text-align: center;
          }

          .ultra-compact-table tbody td:last-child {
            border-right: none;
          }
        `}
                </style>

            </div>

            {/* Paginación */}
            <Paginacion
                currentPage={currentPage}
                totalPages={data.pages}
                onPrev={prevPage}
                onNext={nextPage}
                onPageSelect={goToPage}
                onFirst={goToFirst}
                onLast={goToLast}
            />
        </>

    );
};

export default Tabla;
