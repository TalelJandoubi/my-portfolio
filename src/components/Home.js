import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
                <div className="link-container">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="link-box"
                  >
                    <a
                      href="https://github.com/TalelJandoubi/my-portfolio"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      Visitez mon GitHub
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="link-box"
                  >
                    <a
                      href="/Cv Talel.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                    >
                      Voir mon CV
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
                  <strong>Bonjour et bienvenue sur ma page personnelle !</strong>
                  <br /><br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    Je m'appelle <strong>Talel</strong>, et je suis passionné d'informatique. Permettez-moi de me présenter plus en détail :
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    🎓 <strong>Bac +2 en Développement Web Fullstack</strong> :
                    <br />
                    J'ai acquis des compétences robustes en <strong>HTML, CSS, JavaScript, React, Node.js</strong>, et bien d'autres technologies modernes. Mon parcours m'a permis de maîtriser la création de sites web réactifs et performants, ainsi que le développement d'applications web complexes.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  >
                    📚 <strong>Actuellement en BTS SIO</strong> :
                    <br />
                      Je me reoriente vers les systemes et reseaux afin d'elargir mes competences et mes connaissances. En combinant ma 
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    💻 <strong>Passion pour le code</strong> :
                    <br />
                    L'informatique n'est pas qu'un métier pour moi ; c'est une véritable passion. J'aime explorer de nouvelles technologies, résoudre des problèmes complexes et créer des solutions innovantes.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                  >
                    🌐 <strong>Esprit curieux et créatif</strong> :
                    <br />
                    J'aime jouer avec le code, que ce soit pour des projets personnels ou professionnels. Mon esprit créatif me pousse constamment à dépasser les limites et à explorer de nouvelles approches et techniques.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                  >
                    Si vous êtes à la recherche d'un développeur passionné ou d'un jeune alternant informatique qui travaillera a votre maniere afin d'apprendre et progresser dans le domaine du reseau, créatif et compétent pour rejoindre votre équipe, n'hésitez pas à me contacter. Je suis toujours ouvert à de nouvelles opportunités et serais heureux de discuter de la manière dont je peux contribuer à vos projets.
                  </motion.div>
                  <br />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3.5 }}
                  >
                    Merci pour votre visite, et j'espère avoir l'opportunité de collaborer avec vous bientôt !
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
          <div the face top></div>
          <div the face bottom></div>
        </div>
      </motion.div>
      
    </Container>
  );
};

export default Home;
