import React, { useState, useEffect } from 'react';
import Newsitem from './Newsitem';
import noimage from '../image/imagenotfound.png';
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import upArrow from '../image/uparrow.png';

const News = (props) => {

  const [articles,setArticles] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
  const [total,setTotal] = useState('')



  const handleTitle = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }

  let keyword = '';
  
  const updatePage = async () => {
    // props.setProgress(10);
    if(props.value!==''){
      keyword='&q='+props.value;
      console.log(keyword)
    }
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=1${keyword}&category=${props.category}`;
    let data = await fetch(url);
    let parseData = await data.json();
    
    setLoading(false);
    setArticles(parseData.articles);
    setTotal(parseData.totalResults); 
    setPage(page + 1);
    // props.setProgress(100);
  }
  
  useEffect(()=>{
    updatePage();
    document.title = `News-Rabbit - ${handleTitle(props.category)}`;
    // eslint-disable-next-line
  },[])
  

  
  const fetchMoreData = async () => {  
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${page}${keyword}&category=${props.category}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setPage(page + 1)
  };

  return (
    <div className='container'>
      <h1 className='text-center' id='heading' style={{marginTop : '5rem',marginBottom : '1.5rem'}}> {`Top Headlines - ` + handleTitle(props.title)}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={page <= Math.ceil(total/props.pageSize)}
        loader={<Spinner />}>
        <div className="row container">
          {articles.map((e) => {
            return  ( <div className="col-md-4 " key={e.url}>
              <Newsitem mode={props.mode} imageURL={e.urlToImage?e.urlToImage: noimage} 
              title={e.title?e.title.slice(0,60)+'...':'Title not Available'} description={e.description?e.description.slice(0,185)+'...':'Description not Available'} pageURL={e.url} author={e.author} date={e.publishedAt} source={e.source.name}/>
            </div>)
          })}
          {/* <div className='d-flex justify-content-between'>
            <button disabled={.page<=1} type="button" className="btn btn-dark" onClick={handelPrevPage}>&larr; Previous</button>
            <button disabled={page>=Math.ceil(total/props.pageSize)} type="button" className="btn btn-dark" onClick={handelNextPage}>Next &rarr;</button>
          </div> */}
  
        </div>
      </InfiniteScroll>
      <a href='#heading'>
        <img src={upArrow} id='uparr' alt="" style={{filter: props.mode==='dark'? 'invert(1)':'invert(0)'}}/>
      </a>
    </div>
  )
}

News.defaultProps = {
  country : 'in',
  pageSize : 12,
  category : '',
  title : 'General'
}

// News.PropTypes = {
//   country : propTypes.string,
//   pageSize : propTypes.number,
//   category : propTypes.string,
//   title : propTypes.string
// }

export default News