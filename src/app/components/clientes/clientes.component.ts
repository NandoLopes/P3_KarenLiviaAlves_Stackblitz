import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from '../../models/cliente';
import { ClienteService } from '../../services/Cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  listaCliente: Cliente[] = [];

  constructor(
    private clienteService: ClienteService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.buscarClientes();
  }

  buscarClientes(){
    this.listaCliente = this.clienteService.getAllCliente();
  }

  editarCliente(cliente: Cliente){
    this.router.navigate(
      ['/cadastro-cliente', cliente.Id]
    );
  }

  excluirCliente(cliente: Cliente){
    if(!cliente.Id || cliente.Id == undefined){
      console.log("Erro ao excluir: Cliente inválido.");
      return;
    }

    let retorno = this.clienteService.deleteCliente(cliente.Id);
    if(!retorno){
      console.log("Erro ao excluir: Cliente não existe.")
    } else {
      console.log(`Cliente excluído: ${cliente.Id}`)
    }

    this.buscarClientes();
  }

}