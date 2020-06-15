import React, { useEffect } from 'react'
import { Feed, Pagination } from '@/components'
import { useFetch } from '@/hooks'

export default () => {

    const apiUrl = '/articles?limit=10&offset=0'

    const [{ response, isLoading, error }, doFetch] = useFetch(apiUrl)

    useEffect(() => {
        if(response) return
        doFetch()
    }, [response, doFetch])

    return (
        <div className="home-page">
            <div className="banner">
                <h1>Medium Clone</h1>
                <p>A place to share knowledge</p>
            </div>
            <div className="container page">
                <div className="row">
                <div className="col-md-9">
                    { isLoading && <div>Loading...</div> }
                    { error && <div>Some error happened</div> }
                    {
                        !isLoading && response && (
                            <>
                                <Feed articles={ response.articles } />
                                <Pagination 
                                    total={500} 
                                    limit={5}
                                    url={'/'}
                                    currentPage={1}
                                />
                            </>
                        )
                    }
                </div>
                <div className="col-md-3">Popular tags</div>
                </div>
            </div>
        </div>
    )

}