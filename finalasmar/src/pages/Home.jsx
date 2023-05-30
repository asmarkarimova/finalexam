import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import "./Home.css";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import Footer from "../components/Footer";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await axios.get("http://localhost:8080/cards");
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data);

  return (
    <>
      <Header />
      <section className="sec1">
        <div className="containerhome1">
          <div className="part1">
            <div className="wr1">
              <h1 className="abs">
                A Discount Toner Cartridge Is Better Than Ever.
              </h1>
            </div>
          </div>
        </div>
      </section>
      <section className="sec2">
        <div className="container">
          <div className="part2">
            <h1 className="lates">Latest News from all categories</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              tempora reiciendis quod placeat aliquam dolor eveniet consequuntur
              esse rerum quia.
            </p>
            <div className="imgssec2">
              <div className="img21">
                <img
                  className="sekil1"
                  src="https://preview.colorlib.com/theme/blogger/img/c1.jpg.webp"
                  alt=""
                />
                <button className="button1">10 jan 2018</button>
                <h2>It S Hurricane Season Visiting Hilton</h2>
              </div>
              <div className="img22">
                <img
                  className="sekil2"
                  src="https://preview.colorlib.com/theme/blogger/img/c2.jpg.webp"
                  alt=""
                />
                <button className="button2">10 jan 2018</button>
                <h2>What makes A Hotel Boutique</h2>
              </div>

              <div className="img23">
                <img
                  className="sekil3"
                  src="https://preview.colorlib.com/theme/blogger/img/c3.jpg.webp"
                  alt=""
                />
                <button className="button3">10 jan 2018</button>
                <h2>What makes A Hotel Boutique</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec3">
        <div className="container">
          <div className="part3">
            <h1 className="lkj">Hot topics from Travel Section</h1>
            <p className="lkjh">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="hs31">
              <div className="asgersekil">
                <div className="sekilas">
                  <button className="btndec">20 DEC</button>
                </div>

                <div className="wr31">
                  <h3>Addiction When Gambling Becomes A Problem</h3>
                  <p>
                    inappropriate behavior Lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                  <p>
                    <CiHeart /> 15 Likes <FaRegComment /> 02 Comments
                  </p>
                </div>
              </div>

              <div className="girlsekil">
                <div className="girlsekilas">
                  <button className="btndec">20 DEC</button>
                </div>

                <div className="wr32">
                  <h3>Addiction When Gambling Becomes A Problem</h3>
                  <p>
                    inappropriate behavior Lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                  <p>
                    <CiHeart /> 15 Likes <FaRegComment /> 02 Comments
                  </p>
                </div>
              </div>

              <div className="dnzsekil">
                <div className="dnzsekilas">
                  <button className="btndec">20 DEC</button>
                </div>

                <div className="wr32">
                  <h3>Addiction When Gambling Becomes A Problem</h3>
                  <p>
                    inappropriate behavior Lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                  <p>
                    <CiHeart /> 15 Likes <FaRegComment /> 02 Comments
                  </p>
                </div>
              </div>

              <div className="dgsekil">
                <div className="dgsekilas">
                  <button className="btndec">20 DEC</button>
                </div>

                <div className="wr32">
                  <h3>Addiction When Gambling Becomes A Problem</h3>
                  <p>
                    inappropriate behavior Lorem ipsum dolor sit amet,
                    consectetur.
                  </p>
                  <p>
                    <CiHeart /> 15 Likes <FaRegComment /> 02 Comments
                  </p>
                </div>
              </div>
            </div>
            <button className="load">LOAD MORE</button>
          </div>
        </div>
      </section>

      <section className="sec4">
        <div className="container">
          <div className="part4">
            <h1 className="dfg">Fashion News This Week</h1>
            <p className="dfgh">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="all4img">
              {data.map((d) => (
                <div className="p4i1">
                  <div className="imgp41">
                    {d.image ?  <img src={d.image} alt="" /> : <img src="https://preview.colorlib.com/theme/blogger/img/f2.jpg.webp"/> }
                   
                  </div>
                  <button className="btnp41">10 JAN 2018</button>
                  <h1 className="h1p4">{d.category}</h1>
                  <p>{d.description}</p>
                  <p>
                    <CiHeart /> 15 Likes <FaRegComment /> 02 Comments
                  </p>
                </div>
              ))}
            </div>
            <button className="load">LOAD MORE</button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
