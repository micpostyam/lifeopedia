import React from 'react';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import image from "../rue.jpg"

const Login = () => {
  return (
    <div>
      <Navigation/>
      <main style={styles.header}>
        <div style={styles.content} className={"container-fluid"} >
          <LoginForm/>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

const styles = {
  header: {
    backgroundImage: `url(${image})`,
    height: '100vh',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },

  content: {
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  }
}

export default Login;
