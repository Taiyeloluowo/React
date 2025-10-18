function Profile({ name, role, bio, image }) {
  return (
    <div className='profile-card'>
      <img src={image} alt={name} className='profile-img' />
      <h2>{name}</h2>
      <h4>{role}</h4>
      <p>{bio}</p>
    </div>
  )
}

export default Profile;