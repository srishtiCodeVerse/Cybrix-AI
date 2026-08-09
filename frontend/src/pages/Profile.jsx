import "../styles/Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <h1>👤 User Profile</h1>

      <div className="profile-card">

        <div className="avatar">
          👤
        </div>

        <h2>Srishti Upadhyay</h2>

        <p>Email: srishti@gmail.com</p>

        <p>Role: Administrator</p>

        <p>Status: 🟢 Active</p>

        <button>Edit Profile</button>

      </div>

    </div>
  );
}

export default Profile;