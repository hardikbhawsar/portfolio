import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle, FastForward } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from "react-router-hash-link";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "FUll Stack Developer", "Backend Developer", "Software Developer" ];
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                         <h1>{"Hi, I'm Hardik!"}</h1>
                         <h3><FastForward size={25} />{' '}<span className="wrap">{text}</span>{' '}</h3>
                         <p>I am a skilled and passionate full stack developer with experience in creating visually appealing and user-friendly web applications using Angular and Spring Boot. I have experience in developing fast and optimised backend systems and APIs.</p>
                         
                            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
                         
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
    // return (
    //     <section className="banner" id="home">
    //         <Container>
    //             <Row className="aligh-items-center">
    //                 <Col xs={5} md={10} xl={7}>
    //                     <span className="tagline">Welcome to my Portfolio</span>
    //                     <h1>{"Hi, I'm Hardik!"}</h1>
    //                     <h3><FastForward size={25} />{' '}<span className="wrap">{text}</span>{' '}</h3>
    //                     <p>My name is Hardik Bhawsar. I am passionate about web development, LLM, machine learning, IOS app development and data structure. </p>
    //                     <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25} /></button>
    //                 </Col>
    //                 <Col xs={5} md={6} xl={5}>
    //                     <img className="backimg" src={headerImg} alt="Header Img" />
    //                 </Col>
    //             </Row>
    //         </Container>
    //     </section>
    // )
