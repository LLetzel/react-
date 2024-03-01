import Menu from "./Menu";
function Game(){
    return(
        <div>
            <Menu />
            <div className="game">
            <h1>Games</h1>
            <p>Valorant - {" "}
        <strong>
          <a href="https://tracker.gg/valorant/profile/riot/ztLkkjk%23tfde/overview " target="_blank">
            ztLkkjk
          </a>
        </strong>

            </p>
            <p>Fifa</p>
            <p>CSGO</p>
            <p>Forza</p>
            <p>Call of Duty black ops 2</p>
            </div>
        </div>
    )
}

export default Game