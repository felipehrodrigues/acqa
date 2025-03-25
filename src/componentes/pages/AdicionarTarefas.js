import Button from "../form/Button";
import CheckBox from "../form/CheckBox";
import { useState } from "react";
import styles from "./AdicionarTarefas.module.css";


function AdicionarTarefas() {
  const [tarefa, setTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState("todos");

  function alterarTarefa(e) {
    setTarefa(e.target.value);
  }

  function adicionarTarefa(e) {
    e.preventDefault();
    if (tarefa.trim() !== "") {
      setTarefas([...tarefas, { texto: tarefa, concluida: false }]);
      setTarefa("");
    }
  }

  function limparTarefas(e) {
    e.preventDefault();
    setTarefas([]);
  }

  function alternarTarefa(index) {
    const novasTarefas = [...tarefas];
    novasTarefas[index].concluida = !novasTarefas[index].concluida;
    setTarefas(novasTarefas);
  }

  const tarefasFiltradas = tarefas.filter((item) => {
    if (filtro === "marcadas") return item.concluida;
    if (filtro === "nao-marcadas") return !item.concluida;
    return true;
  });

  return (
    <div>
      <section className={styles.filtros}>
        <button className={styles.button} onClick={() => setFiltro("todos")}>Ver Todas</button>
        <button className={styles.button} onClick={() => setFiltro("marcadas")}>
          Concluídas
        </button>
        <button className={styles.button} onClick={() => setFiltro("nao-marcadas")}>
          Pendentes
        </button>
      </section>
      <section className={styles.tarefas}>
        <input
          type="text"
          value={tarefa}
          onChange={alterarTarefa}
          placeholder="Digite sua tarefa..."
        />
        <section className={styles.botoes}>
          <Button
            type="button"
            onClick={adicionarTarefa}
            funcaoButton="Adicionar Nova Tarefa"
          ></Button>
          <Button
            type="button"
            onClick={limparTarefas}
            funcaoButton= " Limpar Lista"
          > </Button>
        </section>
      </section>

      <section>
        <ul className={styles.tarefas_lista}>
          {tarefasFiltradas.map((item, index) => (
            <li key={index} className={styles.tarefa_item}
            style={{ textDecoration: item.concluida ? "line-through" : "none" }}>
              {item.texto.toUpperCase()}
              <CheckBox
                marcado={item.concluida}
                onChange={() => alternarTarefa(index)}
              />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default AdicionarTarefas;
