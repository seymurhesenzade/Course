import { useEffect, useState } from "react";
import "../Body/index.scss";
import { Col, Row, Card, Input, Button } from "antd";
import { getAllData } from "../../services";
import { Link } from "react-router-dom";
const { Meta } = Card;
import { Helmet } from "react-helmet";

const Body = () => {
  const [product, setProduct] = useState(null);

  const handleElement = (value) =>
    getAllData().then((res) => {
      setProduct(
        res.data.data.filter((q) =>
          q.title.toLowerCase().includes(value.toLowerCase().trim())
        )
      );
    });

  useEffect(() => {
    getAllData().then((res) => {
      setProduct(res.data.data);
    });
  },[]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Course | Education</title>
        <link rel="canonical" href="#" />
      </Helmet>
      <body id="body">
        <h1>Popular Courses</h1>
        {/* Card---------------------------------------------------------------------------  */}
        <div className="container">
          <Row>
            <Col span={12}>
              <Input
                onChange={(e) => handleElement(e.target.value)}
                style={{ marginLeft: "20px", marginBottom: "20px" }}
                placeholder="Search Product "
              />
            </Col>
            <Col>
              <Button style={{ marginLeft: "22px" }}>Search</Button>
            </Col>
          </Row>
          <Row gutter={16}>
            {product &&
              product.map((p) => {
                return (
                  <Col
                    key={p._id}
                    className="gutter-row"
                    span={6}
                    xs={24}
                    md={12}
                    lg={8}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Card
                      hoverable
                      style={{
                        width: 350,
                        marginBottom: "200px",
                      }}
                      cover={<img alt="example" src={p.imageUrl} />}
                    >
                      <Meta
                        title={p.title}
                        style={{ textAlign: "center" }}
                      />

                      <Meta
                        description={p.desc}
                        style={{
                          marginTop: "10px",
                          textAlign: "center",
                          fontWeight: "700",
                        }}
                      />

                      <div className="image-text">
                        <img
                          style={{ marginTop: "25px", borderRadius: "50%" }}
                          src="https://preview.colorlib.com/theme/course/images/author.jpg"
                        />
                        <div className="text">Michael Smith, Author</div>
                        <div className="price">
                          <p>${p.price}</p>
                        </div>
                      </div>
                    </Card>
                  </Col>
                );
              })}
          </Row>
        </div>
      </body>
    </>
  );
};

export default Body;
