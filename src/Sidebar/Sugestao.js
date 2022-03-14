export default function Sugestao ({ name, reason, profilePic }) {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={profilePic} />
                <div class="texto">
                    <div class="nome">{name}</div>
                    <div class="razao">{reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}