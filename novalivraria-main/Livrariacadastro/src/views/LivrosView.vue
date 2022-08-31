<script>
import {v4 as uuidv4} from "uuid";
export default {
  data() {
    return {
      estadios: [
        {
          id: "7332e932-7bc7-47e2-99d0-a2c9dc7b4d31",
          nome: "Jogos Vorazes",
          time: "Editora Rocco",
        },
        {
          id: "72674295-4b5d-4668-8abc-c968a307c9fc",
          nome: "O Exorcista",
          time: "HarperCollins",
        },
        {
          id: "64fe1b8c-12cb-4d94-9233-a56167aab6a7",
          nome: "O Homem de Giz",
          time: "Intrínseca",
        },
        {
          id: "e33d09ba-8db8-4dd1-be14-0cea1ad9ac59",
          nome: "Carrie a estranha",
          time: "	Suma",
        },
        {
          id: "7abaf6ba-6a70-4838-81d6-9d4eb40c0d34",
          nome: "As Croônicas de Nárnia",
          time: "WMF Martins Fontes",
        },
      ],
      novo_estadio: "",
      novo_nome: "Editora Cristal",
    };
  },
  methods: {
    salvar (){
      const novo_id = uuidv4();
      this.estadios.push({
        id: novo_id,
        nome: this.novo_estadio,
        time: this.novo_nome,
      }
      ) 
    }
  }
};
</script>

<template>
  <main>
    <div class="container">
      <div class="title">
        <h2>Cadastro de Livros</h2>
      </div>
      <div class="form-input">
        <input type="text" v-model="novo_estadio" />
        <button @click="salvar" >Salvar</button>
      </div>
      <div class="list-estadio">
        <table>
          <thead>

            <br> <br>

            <tr>
              <th>Código do livro</th>
              <th>Nome</th>
              <th>Editora</th>
              <th>Autor</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="estadio in estadios" :key="estadio.id">
              <td>{{ estadio.id }}</td>
              <td>{{ estadio.nome }}</td>
              <td>{{ estadio.time }}</td>
              <td></td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style>

.title {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  color: rgb(66, 66, 138);
}
.form-input {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  color: blueviolet;
}

.form-input input {
  width: 60%;
  height: 40px;
  border: 1px solid rgb(199, 17, 17);
  border-radius: 10px;
  padding: 0 10px;
}

.form-input button {
  margin-left: 1%;
  width: 20%;
  height: 40px;
  border: 1px solid rgb(36, 127, 65);
  border-radius: 10px;
  background-color: rgb(36, 127, 65);
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.list-times {
  display: flex;
  justify-content: center;
  
}

table {
  width: 50%;
  margin: 2% auto;
  border-collapse: collapse;
  color: rgb(82, 82, 134);
}

table tr th {
  border: 1px solid rgb(88, 60, 60);
  padding: 10px;
  font-weight: bold;
}

table tr td {
  border: 1px solid rgb(228, 8, 8);
  padding: 10px;
}

table tr {
  background-color: rgb(116, 7, 7) ;
}

body {
  background-color: black;
}


</style>