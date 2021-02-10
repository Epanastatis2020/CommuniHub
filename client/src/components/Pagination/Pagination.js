import React from 'react';
import Pagination from '@material-ui/lab/Pagination';

export default function PaginationButtons() {

  return (
    <div >
      <Pagination count={10} showFirstButton showLastButton />
    </div>
  );
}