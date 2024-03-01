import Menu from "./Menu";
function Sobre(){
    return(
        <div>
            <Menu />
            <div className="sobre">
            <h1>Sobre:</h1>
            <h2>informações</h2>
            <p>Email: lucasdiasletzel@gmail.com</p>
            <p>Telefone: (55) 14998030154</p>
            <p>Instagram: lucasletzel_</p>
            <p>
        LinkedIn:{" "}
        <strong>
          <a href="https://www.linkedin.com/in/lucas-dias-letzel-533437276" target="_blank">
            Lucas Letzel
          </a>
        </strong>
      </p>
      </div>
    </div>
    )
}

export default Sobre