import React from "react";

const Sobre = () => {
    return (
        <div>
            <img src="jet.png" style={{
                borderRadius: "50%",
                width: "100px",
                height: "100px",
                marginTop: "50px",
                objectFit: "cover",
            }} />
            <h2>Página criada por Rafael de Oliveira</h2>
            <p>Atualmente sou consultor técnico no setor de pós vendas da Hyundai Open de Cascavel</p>
            <p>e estudante de engenharia de software. Nasci em 2002 na cidade de Curitiba e fui desenvolvedor</p>
            <p>fullstack de Laravel por alguns meses antes de voltar para a área automotiva.</p>
            <p><strong>No link a seguir você pode conferir meu GitHub: <a href="https://github.com/RafaelSW800">Rafael_SW800</a></strong></p>
        </div>
    )
}

export default Sobre;