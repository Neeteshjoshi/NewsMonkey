import React from 'react'

const NewsItem = (props) => {
        let { title, description, imageUrl, newsUrl, author, date, source } = props
        return (
            <div className='my-3'>
                <div className="card">
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left: "-15%", zIndex: "1" }}>
                        {source}
                    </span>
                    <img src={!imageUrl ? "https://media.cnn.com/api/v1/images/stellar/prod/230307111057-matamoros-mexico-kidnapping-scene.jpg?c=16x9&q=w_800,c_fill" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
