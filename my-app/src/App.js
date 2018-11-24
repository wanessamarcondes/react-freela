import React, { Component } from "react";
import './App.css';
import Fieldset from "./components/fieldSet";
import FieldSet from "./components/fieldSet";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      ganhoMes: "",
      horasDia: 0,
      diasSemana: 0,
      semanasFerias: 0,
      valorHora: 0,
    }
  }
  setGanhoMes = (e) => {
    this.setState({
      ganhoMes: parseInt(e.target.value)
    })
  }
  setHorasDia = (e) => {
    this.setState({
      horasDia: parseInt(e.target.value)
    })
  }
  setDiasSemana = (e) => {
    this.setState({
      diasSemana: parseInt(e.target.value)
    })
  }
  setSemanasFerias = (e) => {
    this.setState({
      semanasFerias: parseInt(e.target.value)
    })
  }
  calcValueHour = (e) => {
    e.preventDefault()

    const horasPorSemana = this.state.horasDia * this.state.diasSemana
    const horasDeFerias = horasPorSemana * this.state.semanasFerias
    const totalHoras = (52.1 * horasPorSemana) - horasDeFerias
    const ganhoPorAno = this.state.ganhoMes * 12
    let valorDeHora = ganhoPorAno / (totalHoras)

    valorDeHora += 0.2 + valorDeHora;
    valorDeHora = parseFloat(valorDeHora).toFixed(2)

    this.setState({
      valorHora: valorDeHora
    })
  }
  render() {
    return (
      <main className="conteudo-principal">
        <section className="secao secao-hora">
          <header className="secao__cabecalho">
            Calcule aqui o valor do seu projeto!
          </header>
          <article className="secao__conteudo">
            <form className="secao_formulario" onSubmit={this.calcValueHour}>
              <div className="App">
                <Fieldset
                  legendInput="Quanto voce quer ganhar por mes?"
                  labelInput="Quantidade por mes"
                  idInput="ganho-mes"
                  typeInput="number"
                  value={this.state.ganhoMes}
                  onChange={this.setGanhoMes}  
                />
                <FieldSet
                  legendInput="Quantas horas voce quer trabalhar por dia?"
                  labelInput="Horas por dia"
                  idInput="horas-dia"
                  typeInput="number"
                  value={this.state.horasDia}
                  onChange={this.setHorasDia}  
                />
                <FieldSet
                  legendInput="Quantos dias voce quer trabalhar por semana?"
                  labelInput="Dias por semana"
                  idInput="dias-semana"
                  typeInput="number"
                  value={this.state.diasSemana}
                  onChange={this.setDiasSemana}  
                />
                <Fieldset
                  legendInput="Quantas semanas por ano voce quer tirar de ferias?"
                  labelInput="Semanas por ano"
                  idInput="semanas-ferias"
                  typeInput="number"
                  value={this.state.semanasFerias}
                  onChange={this.setSemanasFerias}  
                />
                <button className="button">Calcular</button>
              </div>
            </form>
          </article>
          <footer className="secao__rodape">
            <h3 className="secao__rodape__valor"><span>R$ 0,00</span><small>/hora</small></h3>
            <p className="secao__rodape__legenda">Seu valor por hora</p>
          </footer>
        </section>
      </main>
    );
  }
}

export default App;
