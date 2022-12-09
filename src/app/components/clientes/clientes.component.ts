import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profissional } from '../../models/profissional';
import { ProfissionalService } from '../../services/Profissional.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaCliente: Profissional[] = [];

  constructor(
    private clienteService: ProfissionalService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.buscarClientes();
  }

  buscarClientes(){
    this.listaCliente = this.clienteService.getAllProfissional();
  }

  editarProfissional(profissional: Profissional){
    this.router.navigate(
      ['/cadastro-profissional', profissional.Id]
    );
  }

  excluirProfissional(profissional: Profissional){
    if(!profissional.Id || profissional.Id == undefined){
      console.log("Erro ao excluir: Profissional inválido.");
      return;
    }

    let retorno = this.clienteService.deleteProfissional(profissional.Id);
    if(!retorno){
      console.log("Erro ao excluir: Profissional não existe.")
    } else {
      console.log(`Profissional excluído: ${profissional.Id}`)
    }

    this.buscarClientes();
  }

}