import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import StudentForm from "./components/StudentForm";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ImageSlider from "./components/ImageSlider";
// import PleasedDisplay from "./components/PleasedDisplay";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import StudentOpinions from "./components/StudentOpinionCard";
import ContactPage from "./components/Contact";
import CounsellingSection from "./components/CounsellingSection";
import YouTubeChannelPromo from "./components/YouTubeChannelPromo";
import LectureProfiles from "./components/LectureProfiles";
import GalleryPage from "./components/GalleryPage";
import MovingText from "./components/MovingText";

// import FeedbackButton from "./components/feedback";

function App() {
  return (
    <>
      <Helmet>
        <title>Spardha Sarathi Academy</title>
        <meta name="description" content="Welcome to Spardha Sarathi Academy website." />
      </Helmet>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Home | Spardha Sarathi Academy</title>
              </Helmet>
              <Navbar />
              <MovingText />
              <HeroSection />
              <AboutSection />
              <ImageSlider />
              {/* <PleasedDisplay /> */}
              <KeyFeaturesSection />
              {/* <LectureProfiles /> */}
              <StudentOpinions />
              <YouTubeChannelPromo />
              <CounsellingSection />
              <StudentForm />
              <Footer />

              {/* <FeedbackButton/> */}
            </>
          }
        />
        <Route
          path="/AdminLogin"
          element={
            <>
              <Helmet>
                <title>Admin Login | Spardha Sarathi Academy</title>
              </Helmet>
              <AdminLogin />
            </>
          }
        />
        <Route
          path="/Dashboard"
          element={
            <>
              <Helmet>
                <title>Dashboard | Spardha Sarathi Academy</title>
              </Helmet>
              <Dashboard />
            </>
          }
        />
        <Route
          path="/AboutUs"
          element={
            <>
              <Helmet>
                <title>About Us | Spardha Sarathi Academy</title>
              </Helmet>
              <Navbar />
              <AboutUs />
              <LectureProfiles />
              <CounsellingSection />
              <StudentForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <Helmet>
                <title>Contact Us | Spardha Sarathi Academy</title>
              </Helmet>
              <Navbar />
              <ContactPage />
              <CounsellingSection />
              <StudentForm />
              <Footer />
            </>
          }
        />
        <Route
          path="/GalleryPage"
          element={
            <>
              <Helmet>
                <title>Gallery | Spardha Sarathi Academy</title>
              </Helmet>
              <Navbar />
              <GalleryPage />
              <CounsellingSection />
              <StudentForm />
              <Footer />
            </>
          }
        />
<Route 
path="/CounsellingSection"
element={
  <>
  <CounsellingSection />
  </>
}
/>

      </Routes>
    </>
  );
}

export default App;
