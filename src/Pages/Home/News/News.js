import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './News.css'

const News = () => {
  const [news,setNews]=useState([])
  useEffect(()=>{
    fetch('https://sheltered-beyond-04487.herokuapp.com/news')
    .then(res=>res.json())
    .then(data=>setNews(data))
  },[])
    return (
        <div className='custom-container mb-4'>
              <h3 className='fw-bold text-center my-4 section-heading'>News</h3>
               <Row xs={1} sm={2} md={3} className="g-4 ">
          
  {news?.map(singleNews=>{
                 return(
                  <Col key={singleNews._id}>
                  <Card>
                    <Card.Img variant="top" src={singleNews.image} />
                    <Card.Body>
                      <Card.Title>{singleNews.heading}</Card.Title>
                      <Card.Text>
                       {
                         singleNews.news.slice(0,150) 
                       }  <a className='fw-bold text-danger' href=''>see more</a>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
                 )
  })  
}

</Row>
        </div>
        
       
       
    );
};

export default News;