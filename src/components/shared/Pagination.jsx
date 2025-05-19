import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

const Paginacion = ({ currentPage, totalPages, onPrev, onNext, onPageSelect, onFirst, onLast }) => {
  const pagesToShow = [];
  if (currentPage - 1 >= 1) pagesToShow.push(currentPage - 1);
  pagesToShow.push(currentPage);
  if (currentPage + 1 <= totalPages) pagesToShow.push(currentPage + 1);

  return (
      <div className="d-flex justify-content-center">
      <ButtonGroup aria-label="Paginación" className="pagination-buttons">
        <Button
          size="sm"
          variant="outline-success"
          onClick={onFirst}
          disabled={currentPage === 1}
          className="minimal-btn"
        >
          &lt;&lt;
        </Button>
        <Button
          size="sm"
          variant="outline-success"
          onClick={onPrev}
          disabled={currentPage === 1}
          className="minimal-btn"
        >
          &lt;
        </Button>

        {pagesToShow.map(page => (
          <Button
            key={page}
            size="sm"
            variant={page === currentPage ? 'success' : 'outline-success'}
            onClick={() => onPageSelect(page)}
            className="minimal-btn"
          >
            {page}
          </Button>
        ))}

        <Button
          size="sm"
          variant="outline-success"
          onClick={onNext}
          disabled={currentPage === totalPages}
          className="minimal-btn"
        >
          &gt;
        </Button>
        <Button
          size="sm"
          variant="outline-success"
          onClick={onLast}
          disabled={currentPage === totalPages}
          className="minimal-btn"
        >
          &gt;&gt;
        </Button>
      </ButtonGroup>

    </div>
  );
};

export default Paginacion;

