import { useEffect, useState } from "react";
import "../Body/index.scss";
import { Col, Row, Card } from "antd";
import { getAllData } from "../../services";
const { Meta } = Card;

const Body = () => {

  const [product, setProduct] = useState(null);

  useEffect(() => {
    getAllData().then((res) => {
      setProduct(res.data.data);
    });
  },[]);

  return (
    <>
      <body id="body">
        <h1>Popular Courses</h1>
        {/* Card---------------------------------------------------------------------------  */}
        <div className="container">
          <Row gutter={16}>
           {
            product && product.map((p)=>{
                return (
                    <Col key={p._id} className="gutter-row" span={6} xs={24} md={12} lg={8} style={{display:"flex", justifyContent:"center"}}>
                    <Card
                      hoverable
                      style={{
                        width: 350,marginBottom:"200px"
                      }}
                      cover={
                        <img
                          alt="example"
                          src={p.imageUrl}
                        />
                      }
                    >
                      <Meta title={p.title} style={{textAlign:"center"}} />
                       <Meta description={p.desc} style={{marginTop:"10px",textAlign:"center", fontWeight:"700"}} />
                       <div className="image-text">
                       <img style={{marginTop:"25px", borderRadius:"50%"}}  src="https://preview.colorlib.com/theme/course/images/author.jpg"/>
                       <div className="text">
                      Michael Smith, Author
                        </div> 
                        <div className="price">
                            <p>${p.price}</p>
                        </div>
                       </div>
                    </Card>
                  </Col>
                )
            })
           }
          </Row>
        </div>
      </body>
    </>
  );
};

export default Body;
