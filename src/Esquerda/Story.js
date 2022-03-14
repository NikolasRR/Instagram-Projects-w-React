export default function Story ({ imgSrc, user }) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={imgSrc} />
            </div>
            <div class="usuario">
                {user}
            </div>
        </div>
    )
}