import Sugestao from "./Sugestao";

export default function Sugestoes () {
    const sugestions = [
        {name: "bad.vibes.memes", reason: "Segue você", profilePic:"assets/img/bad.vibes.memes.svg"},
        {name: "chibirdart", reason: "Segue você", profilePic:"assets/img/chibirdart.svg"},
        {name: "razoesparaacreditar", reason: "Novo no Instagram", profilePic:"assets/img/razoesparaacreditar.svg"},
        {name: "adorable_animals", reason: "Segue você", profilePic:"assets/img/adorable_animals.svg"},
        {name: "smallcutecats", reason: "Segue você", profilePic:"assets/img/smallcutecats.svg"}
    ];
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            {sugestions.map(item => Sugestao(item))}
        </div>
    )
}