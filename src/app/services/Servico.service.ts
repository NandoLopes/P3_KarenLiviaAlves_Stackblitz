import { Injectable } from '@angular/core';
import { Servico } from '../models/servico';

@Injectable()
export class ServicoService {

  //Tabela Servico
  private servicoLista: Servico[] = [
    {Id: 1, Nome: 'Cabelo', Duracao: '00:30', Valor: 50},
    {Id: 2, Nome: 'Barba', Duracao: '00:30', Valor: 50},
    {Id: 3, Nome: 'Cabelo + Barba', Duracao: '00:50', Valor: 90},
  ];

  constructor() {}

  public getAllServico(): Servico[]{
    return this.servicoLista;
  }

  public getServicoById(id: number): Servico {
    return this.servicoLista.find(x => x.Id == id);
  }

  public setServico(newServico: Servico): Servico {
    newServico.Id = this.servicoLista.length + 1;
    this.servicoLista.push(newServico);
    return newServico;
  }

  public deleteServico(id: number): any {
    let servico = this.servicoLista.find(x => x.Id = id);

    if(servico == null || servico == undefined)
      return null;

    this.servicoLista.splice(servico.Id);

    return servico;
  }
}
