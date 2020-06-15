import React from 'react'

import { range } from '@/utils'

import { PaginationItem } from './PaginationItem';

export const Pagination = ({ total, limit, url, currentPage }) => {
    const pagesCount = Math.ceil(total / limit)
    const pages = range(1, pagesCount);
    console.log(pages);
    return (
        <ul className="pagination">
            {pages.map(page => (
                <PaginationItem
                    page={page}
                    key={page}
                    currentPage={currentPage}
                    url={url}
                />
            ))}
      </ul>
    )
}
