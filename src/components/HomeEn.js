import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../assets/Home.css';

const HomeEn = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="text-center custom-card">
              <Card.Header>
                <h1>Welcome to my page!</h1>
              </Card.Header>
              <Card.Body>
                <Card.Title>QR codes are your domain, I see! 😉</Card.Title>
                <div className="link-container">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="link-box"
                  >
                    <a
                      href="https://github.com/O-clock-Starship/projet-04-TCG-Vision"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      Visit my GitHub
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="link-box"
                  >
                    <a
                      href="/CV_Talel20JANDOUBI_ENSITECH_BTS20SIO20SISR20_MRS-avec20compression (1) (1).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      View my CV
                    </a>
                  </motion.div>
                </div>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-4">
        <Col md={8}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Card className="custom-card">
              <Card.Body>
                <Card.Text className="recruiter-message">
                  <strong>Hello and welcome to my personal page!</strong>
                  <br /><br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    My name is <strong>Talel</strong>, and I am passionate about computer science. Let me introduce myself in more detail:
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    🎓 <strong>Holder of a Bac +2 in Fullstack Web Development</strong>:
                    <br />
                    I have acquired strong skills in <strong>HTML, CSS, JavaScript, React, Node.js</strong>, and many other modern technologies. My journey has allowed me to master the creation of responsive and high-performance websites, as well as the development of complex web applications.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    📚 <strong>Currently in BTS SIO</strong>:
                    <br />
                    Although I don't have extensive knowledge in systems and networks yet, I am very interested in this field and am training to develop these skills.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    💻 <strong>Love for coding</strong>:
                    <br />
                    Computer science is more than just a job for me; it's a true passion. I love exploring new technologies, solving complex problems, and creating innovative solutions.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    🌐 <strong>A curious and creative mind</strong>:
                    <br />
                    I enjoy playing with code, whether for personal or professional projects. My creative spirit constantly pushes me to go beyond limits and explore new approaches and techniques.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    If you are looking for a passionate, creative, and skilled developer to join your team, do not hesitate to contact me. I am always open to new opportunities and would be happy to discuss how I can contribute to your projects.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                  >
                    Thank you for your visit, and I hope to have the opportunity to collaborate with you soon!
                  </motion.div>
                </Card.Text>
              </Card.Body>
            </Card>
          </motion.div>
        </Col>
      </Row>
      <motion.div
        className="rubik-cube"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </motion.div>
      <motion.div
        className="rubik-cube"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ bottom: '120px', right: '120px' }}
      >
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </motion.div>
      <motion.div
        className="rubik-cube"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -50, 50, 0],
          rotate: [0, 180, -180, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        style={{ top: '50px', left: '50px' }}
      >
        <div className="cube">
          <div className="face front"></div>
          <div className="face back"></div>
          <div the face left></div>
          <div the face right></div>
          <div the face top></div>
          <div the face bottom></div>
        </div>
      </motion.div>
    </Container>
  );
};

export default HomeEn;
