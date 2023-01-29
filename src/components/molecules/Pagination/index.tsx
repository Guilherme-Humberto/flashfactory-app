import { IPagination } from '@/interfaces'
import React from 'react'
import ReactPaginate from 'react-paginate'
import * as Styles from './styles'

interface Props {
  pagination: IPagination
  eventChangePage: (selected: number) => void
}

const Pagination: React.FC<Props> = ({ pagination, eventChangePage }) => {
  return (
    <Styles.Container>
      <ReactPaginate
        previousLabel=""
        nextLabel=""
        pageCount={pagination.totalPages}
        onPageChange={({ selected }) => eventChangePage(selected)}
        containerClassName="pagination"
        previousLinkClassName="pagination__link"
        nextLinkClassName="pagination__link"
        disabledClassName="pagination__link--disabled"
        activeClassName="pagination__link--active"
        pageClassName="pagination__item"
      />
    </Styles.Container>
  )
}

export default Pagination
