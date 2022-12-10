import { Injectable } from '@angular/core';
import { Profissional } from '../models/profissional';

@Injectable()
export class ProfissionalService {

  //Tabela Profissional
  private profissionalLista: Profissional[] = [
    {Id: 1, Nome: 'Karen Livia', Telefone: '013992012044', Cpf: '1234567890'},
    {Id: 2, Nome: 'Camila Cabelo', Telefone: '01334591574', Cpf: '9876543210'},
    {Id: 3, Nome: 'Fabrício Guimarães', Telefone: '01334591574', Cpf: '1472580695'},
  ];

  constructor() {}
  //Retorna todos os serviços
  public getAllProfissional(): Profissional[]{
    return this.profissionalLista;
  }

  //Retorna o serviço pelo id
  public getProfissionalById(id: number): Profissional {
    return this.profissionalLista.find(x => x.Id == id);
  }

  //Cria um Id pro serviço e insere o serviço no "banco de dados"
  public setProfissional(newprofissional: Profissional): Profissional {
    //Verifica se existe item na lista
    if(this.profissionalLista.length > 0){
      //Se houver, cria igual id do ultimo item + 1
      newprofissional.Id = this.profissionalLista[this.profissionalLista.length - 1].Id + 1;
    } else {
      //Se não houver, cria com id 1
      newprofissional.Id = 1;
    }
    this.profissionalLista.push(newprofissional);
    return newprofissional;
  }

  //Edita o serviço
  public putProfissional(profissional: Profissional): any{
    if(profissional == null || profissional == undefined)
      return null;
  
    //Procura qual o id do serviço na array
    const index = this.profissionalLista.findIndex(x => x.Id == profissional.Id);
    if (index !== -1) {
      this.profissionalLista[index] = profissional;
      return this.profissionalLista[index];
    }
    //Se não achar, retorna nulo
    return null;
  }

  //Deleta o serviço pelo id
  public deleteProfissional(id: number): any {
    //Procura o serviço pelo id fornecido
    let profissional = this.profissionalLista.find(x => x.Id == id);

    if(profissional == null || profissional == undefined)
      //Se não encontrar, retorna nulo
      return null;

    //Procura qual o id do serviço na array
    const index = this.profissionalLista.indexOf(profissional);
    if (index !== -1) {
      this.profissionalLista.splice(index, 1);
      console.log(this.profissionalLista);
    }

    return profissional;
  }
}