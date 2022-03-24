import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nome:'';
  cpf:'';
  cafe:'';

  listagem:[{id:'', nome:'', cpf:'', cafe:''}]

  constructor() { }

  ngOnInit(): void {
  }

  inserir = () =>{
    axios.post('https://projetomvcafe.herokuapp.com/cafe', {
      nome: this.nome,
      cpf: this.cpf,
      cafe: this.cafe,
    }).then( response => {
      alert('Cadastro do café realizado com sucesso!')
      window.location.reload()
    }).catch(erro => {
      alert('CPF já Cadastrado ou Café já cadastrado.')
    })
  }

  ngAfterContentInit(){
    axios.get('https://projetomvcafe.herokuapp.com/cafe')
    .then(response =>{
      const lista = response.data;
      this.listagem = lista
    }).catch(erro =>{
    console.log(erro.response)
    })
  }

  deletar(id){
    return axios.delete('https://projetomvcafe.herokuapp.com/cafe' + '/' + id).then( response => {
      alert('Café deletado com sucesso!')
      window.location.reload()})
  }

}
