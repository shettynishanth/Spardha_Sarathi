import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
import KeyFeaturesSection from "./components/KeyFeaturesSection";
import StudentOpinions from "./components/StudentOpinionCard";
import YouTubeChannelPromo from "./components/YouTubeChannelPromo";
import StudentForm from "./components/StudentForm";
import Footer from "./components/Footer";
import AdminLogin from "./components/AdminLogin";
import Dashboard from "./components/Dashboard";
import AboutUs from "./components/AboutUs";
import ContactPage from "./components/Contact";
import CounsellingSection from "./components/CounsellingSection";
import LectureProfiles from "./components/LectureProfiles";
import GalleryPage from "./components/GalleryPage";
import AdmissionsPage from "./components/AdmissionsPage";
import CourseList from "./components/CourseList";
import EventsPage from "./components/EventsPage";

function App() {
  return (
    <>
      <Helmet>
        <title>Spardha Sarathi Academy</title>
        <meta name="description" content="Welcome to Spardha Sarathi Academy website." />
      </Helmet>

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Helmet>
                <title>Home | Spardha Sarathi Academy</title>
              </Helmet>
              <Navbar />
              <AdmissionsPage />
              <HeroSection />
              <ImageSlider />
              <CourseList />
              <KeyFeaturesSection />
              <StudentOpinions />
              <YouTubeChannelPromo />
              <EventsPage />
              <StudentForm />
              <Footer />
            </>
          }
        />

        {/* Admin Login */}
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

        {/* Admin Dashboard */}
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

        {/* About Us Page */}
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

        {/* Contact Page */}
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

        {/* Gallery Page */}
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

        {/* Counselling Section */}
        <Route
          path="/CounsellingSection"
          element={<CounsellingSection />}
        />
      </Routes>
    </>
  );
}

export default App;
