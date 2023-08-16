import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private _authenticate: AuthenticateService,
    private _crudService: CrudService,
    //public _storage: Storage,
    private _message: MessageService
  ) {}

  criarConta(dados: any){
    this._authenticate.register(dados.email, dados.password)
  }

  realizarLogin(dados: any){
    this._authenticate.login(dados.email, dados.password)
  }

}
