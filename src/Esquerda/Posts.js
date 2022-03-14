import Post from "./Post";

export default function Posts() {
    const infoPosts= [
        {
        profilePic: <img src="assets/img/meowed.svg" />, 
        user: "meowed", 
        imgPosted: <img src="assets/img/gato-telefone.svg" />, 
        likes: <div class="texto">Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></div>
        },
        {
        profilePic: <img src="assets/img/barked.svg" />, 
        user: "barked", 
        imgPosted: <img src="assets/img/dog.svg" />, 
        likes: <div class="texto">Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong></div>
        }
    ];

    return (
        <div class="posts">
            {infoPosts.map(item => Post(item))}
        </div>
    )
}