export default function Usuario({ profilePic, user, userName }) {
    return (
        <div class="usuario">
            <img src={profilePic} />
            <div class="texto">
                <strong>{user}</strong>
                {userName}
            </div>
        </div>
    )
}