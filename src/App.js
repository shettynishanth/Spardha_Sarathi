import React from "react";
import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";
import StudentForm from "./components/StudentForm";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ImageSlider from "./components/ImageSlider";
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
import AdmissionsPage from "./components/AdmissionsPage";
import CourseList from "./components/CourseList";
import EventsPage from "./components/EventsPage";
import ResultPage from "./components/ResultPage"; 
import StudentLogin from "./components/StudentLogin";
import StaffLogin from "./components/StaffLogin";
import FoundersVision from "./components/FoundersVision";
import FacilitiesPage from "./components/FacilitiesPage";

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
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route
          path="/AboutUs"
          element={
            <>
              <Helmet>
                <title>About Us | Spardha Sarathi Academy</title>
              </Helmet>
              <Navbar />
              <AboutUs />
              {/* <LectureProfiles /> */}
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
          path="/ResultPage"
          element={
            <>
              <Helmet>
                <title>Results | Spardha Sarathi Academy</title>
              </Helmet>
              <Navbar />
              <ResultPage />
              <Footer />
            </>
          }
        />
        <Route path="/CounsellingSection" element={<CounsellingSection />} />


        <Route
          path="/StudentLogin"
          element={
            <>
              <Helmet>
                <title>StudentLogin | Spardha Sarathi Academy</title>
              </Helmet>
              <StudentLogin/>

              {/* <Navbar />
              <ResultPage />
              <Footer /> */}
            </>
          }
        />

<Route
          path="/StaffLogin"
          element={
            <>
              <Helmet>
                <title>StaffLogin | Spardha Sarathi Academy</title>
              </Helmet>
              <StaffLogin/>

              {/* <Navbar />
              <ResultPage />
              <Footer /> */}
            </>
          }
        />

          <Route
          path="/LectureProfiles"
          element={
            <>
              <Helmet>
                <title>LectureProfile | Spardha Sarathi Academy</title>
              </Helmet>
              <Navbar />
              <LectureProfiles/>
              
              <Footer />
            </>
          }
        />

      <Route
          path="/FoundersVision"
          element={
            <>
              <Helmet>
                <title>Founders Vision | Spardha Sarathi Academy</title>
              </Helmet>
              <Navbar />
              <FoundersVision/>
              <Footer />
            </>
          }
        />

        <Route
        path="/FacilitiesPage"
        element={
          <>
          <Navbar/>
          <FacilitiesPage/>
          <Footer/>
          </>
        }
        />


      </Routes>
    </>
  );
}

export default App;
