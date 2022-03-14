import Story from "./Story";

export default function Stories () {
    const stories = [
        {imgSrc: "assets/img/9gag.svg", user: "9gag"}, 
        {imgSrc: "assets/img/meowed.svg", user: "meowed"},
        {imgSrc: "assets/img/barked.svg", user: "barked"},
        {imgSrc: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet"},
        {imgSrc: "assets/img/wawawicomics.svg", user: "wawawicomics"},
        {imgSrc: "assets/img/respondeai.svg", user: "respondeai"},
        {imgSrc: "assets/img/filomoderna.svg", user: "filomoderna"},
        {imgSrc: "assets/img/memeriagourmet.svg", user: "memeriagourmet"}
    ];
    
    return (
      <div class="stories">
        {stories.map(item => Story(item))}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    )
}
