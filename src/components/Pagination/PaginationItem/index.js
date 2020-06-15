import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

export const PaginationItem = ({page, currentPage, url, key}) => {
    const liClasses = classNames({
        'page-item': true,
        active: currentPage === page
    })
    return (
        <li className={liClasses} key={page}>
            <Link to={`${url}?page=${page}`} className="page-link">
            {page}
            </Link>
        </li>
    )
}
