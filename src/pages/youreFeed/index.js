import React, { useEffect } from 'react'
import {stringify} from 'query-string'

import { Feed, Pagination, FeedToggler, ErrorMessage, Loading, PopularTags } from '@/components'
import { useFetch } from '@/hooks'
import { getPaginator, limit } from '@/utils'

export const YoureFeed =  props => {

    const { offset, currentPage } = getPaginator(props.location.search)

    const stringifiedParams = stringify({
        limit,
        offset
      })
    const apiUrl = `/articles?${stringifiedParams}`
    const currentUrl = props.match.url

    const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl)

    useEffect(() => {
        doFetch()
    }, [doFetch, currentPage])

    return (
        <div className="home-page">
            <div className="banner">
                <h1>Medium Clone</h1>
                <p>A place to share knowledge</p>
            </div>
            <div className="container page">
                <div className="row">
                <div className="col-md-9">
                    <FeedToggler tagName={'foo'} />
                    { isLoading && <Loading /> }
                    { error && <ErrorMessage /> }
                    {
                        !isLoading && response && (
                            <>
                                <Feed articles={ response.articles } />
                                <Pagination 
                                    total={response.articlesCount} 
                                    limit={limit}
                                    url={currentUrl}
                                    currentPage={currentPage}
                                />
                            </>
                        )
                    }
                </div>
                <div className="col-md-3">
                    <PopularTags />
                </div>
                </div>
            </div>
        </div>
    )

}