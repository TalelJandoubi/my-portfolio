// src/components/Home.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../assets/Home.css';

const Home = () => {
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
                <h1>Bienvenue sur ma page !</h1>
              </Card.Header>
              <Card.Body>
                <Card.Title>Les QR codes c'est votre domaine à ce que je vois ! 😉</Card.Title>
                <Card.Text>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      href="https://github.com/O-clock-Starship/projet-04-TCG-Vision"
                      target="_blank"
                      variant="primary"
                      className="custom-button"
                    >
                      Visitez mon GitHub
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      href="/CV Jandoubi Talel.pdf"
                      target="_blank"
                      variant="secondary"
                      className="ml-3 custom-button"
                    >
                      Téléchargez mon CV
                    </Button>
                  </motion.div>
                </Card.Text>
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
                  <strong>Bonjour et bienvenue sur ma page personnelle !</strong>
                  <br /><br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Je suis titulaire d'un <strong>Bac +2 en développement web fullstack</strong> et je suis actuellement en <strong>BTS SIO</strong> pour me spécialiser dans les systèmes et réseaux.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    Passionné par l'informatique, j'aime m'amuser avec le code et découvrir de nouvelles technologies.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    Mon parcours m'a permis d'acquérir des compétences solides en <strong>développement front-end et back-end</strong>, et je suis toujours à la recherche de nouvelles opportunités pour apprendre et grandir professionnellement.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    Si vous êtes à la recherche d'un <strong>développeur passionné et motivé</strong> pour rejoindre votre équipe, n'hésitez pas à me contacter. Je suis enthousiaste à l'idée de contribuer à des projets innovants et de faire partie d'une équipe dynamique.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    Merci pour votre visite et j'espère avoir l'opportunité de collaborer avec vous bientôt !
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
          <div className="face left"></div>
          <div className="face right"></div>
          <div className="face top"></div>
          <div className="face bottom"></div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Home;
