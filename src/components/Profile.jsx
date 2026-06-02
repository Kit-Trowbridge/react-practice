const Profile = (props) => {
    return (
        <div id="profile">
            <h1 id="name">{props.name}</h1>

            <p id="job" data-testid="job">{props.job}</p>
            <p id="birthdate" data-testid="birthdate">{props.birthdate}</p>
        </div>
    )
}

export default Profile;