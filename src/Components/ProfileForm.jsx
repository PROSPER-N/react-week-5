import React, { useState } from 'react'

const ProfileForm = () => {
    const [profile, setProfile] = useState({ name: "", track: "Frontend" });

    function handleChange(e) {
        const { name, value } = e.target;

        setProfile((prev) => ({ ...prev, [name]: value}));
    }


  return (
    <div>
        <input type="text" name="name" value={profile.name} onChange={handleChange} placeholder="Your name" />

        <select name="track" value={profile.track} onChange={handleChange}>
            <option>Frontend</option>
            <option>Backend</option>
            <option>AI</option>
        </select>

       
            <p> {profile.name || "Someone"} is learning {profile.track} ...</p>
    </div>
  )
}

export default ProfileForm