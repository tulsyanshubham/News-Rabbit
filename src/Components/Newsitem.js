import React from 'react'

const Newsitem = (props) => {

    let {title,description,imageURL,pageURL,author,date,source} = props;
    return (
      <div className='newsBox'>
        <div className="card my-3">
          <div style={{display: 'flex', position: 'absolute', right: 0,top: '-12px'}}>
            <span className="badge rounded-pill bg-danger" >
              {source}
            </span>
          </div>
            <img src={imageURL} className="card-img-top" alt="..." style={{backgroundColor : props.mode==='dark'?'rgb(29 34 38)':'white',borderBottom : '1px solid white'}}/>
            <div className={`card-body text-${props.mode==='dark'?'light':'dark'}`} style={{backgroundColor : props.mode==='dark'?'rgb(29 34 38)':'white' , borderBottomLeftRadius: '2%',borderBottomRightRadius: '2%'}}>
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-middle" style={{color : '#ababab'}}>By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
              <div className="d-flex justify-content-center">
                <a href={pageURL} target='_blank' rel="noreferrer" className={`btn btn-${props.mode==='dark'?'light':'dark'}`}>Read More</a>
              </div>
            </div>
        </div>
      </div>
    )

}

export default Newsitem
