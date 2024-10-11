import ImageDisplay from "./ImageDisplay";
import ImageUpload1 from "./ImageUpload1";
import PleasedStudent from "./PleasedStudent";
import ReisteredDetails from "./ReisteredDetails";
import UpdateLecture from "./UpdateLecture";
import AdminTextPage from "./AdminTextPage";


// src/components/Dashboard.js
const StudentDashboard = () => {
  

  return (
    <>
    <ReisteredDetails/>
    <ImageUpload1/>
    <ImageDisplay/>
    <UpdateLecture/>
        <AdminTextPage/>

    </>
  );
};

export default StudentDashboard;
