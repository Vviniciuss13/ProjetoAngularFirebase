import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { error } from 'console';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor
  (
    
  )
  { 
    this.getFuncionarios();
  }

  isLoading: boolean = false;
  funcionarios: any;
  funcionario: any;

  getFuncionarios(){
    this.isLoading = true;
    fetch('http://localhost/api_atividade/funcionario/listar_funcionarios.php')
    .then(response => response.json())
    .then(response => {
      this.funcionarios = response.funcionarios;
    })
    .catch(erro => {
      console.log(erro);
    })
    .finally(()=>{
      this.isLoading = false;
    })
  }

  remover(cod: any){
    this.isLoading = true;
    fetch('http://localhost/api_atividade/funcionario/remover_funcionario.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',  
      },
      body: JSON.stringify({CodFun: cod, Acao: 'remover'})
    })
    .then(response => response.json())
    .then(response => {
      alert(response.menssagem)
      this.getFuncionarios();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      this.isLoading = false;
    })

  }

  inserir(form: NgForm){
    this.isLoading = true;
    fetch('http://localhost/api_atividade/funcionario/inserir_funcionarios.php',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form)
    })
    .then(response => response.json())
    .then(response => {
      alert(response.menssagem);
      this.getFuncionarios();
    })
    .catch(error => {
      console.log(error)
    })
    .finally(() => {
      this.isLoading = false;
    })
  }

  selecionar(CodFun: any){
    this.isLoading = true;
    fetch('http://localhost/api_atividade/funcionario/listar_pelo_id_funcionario.php',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({CodFun: CodFun})
    })
    .then(response => response.json())
    .then(response => {
      this.funcionario = response.funcionario;
      console.log(this.funcionario);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      this.isLoading = false;
    })
  }

}
