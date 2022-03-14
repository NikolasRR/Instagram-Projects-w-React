import reactDom from "react-dom";
import Navbar from "./Navbar";
import Esquerda from "./Esquerda/Esquerda";
import Sidebar from "./Sidebar/Sidebar";
import Fundo_mobile from "./Fundo_mobile";

function App () {
    return (
        <div class="root">
            <Navbar />
            <div class="corpo">
                <Esquerda />
                <Sidebar />
            </div>
            <Fundo_mobile />
        </div>
    )
}

const body = document.querySelector("body");
reactDom.render(App(), body);
