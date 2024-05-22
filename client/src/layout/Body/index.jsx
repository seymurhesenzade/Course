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
  }, []);

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
                    <Col className="gutter-row" span={6} xs={24} md={12} lg={8} style={{display:"flex", justifyContent:"center"}}>
                    <Card
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={
                        <img
                          alt="example"
                          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />
                      }
                    >
                      <Meta title="Europe Street beat" desc="www.instagram.com" />
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
