import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profissional } from '../../models/profissional';
import { ProfissionalService } from '../../services/Profissional.service';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit {

  listaProfissional: Profissional[] = [];

  constructor(
    private profissionalService: ProfissionalService,
    private router: Router  
  ) { }

  ngOnInit() {
    this.buscarProfissinais();
  }

  buscarProfissinais(){
    this.listaProfissional = this.profissionalService.getAllProfissional();
  }

  editarProfissional(profissional: Profissional){
    this.router.navigate(
      ['/cadastro-profissional', profissional.Id]
    );
  }

  excluirProfissional(profissional: Profissional){
    if(!profissional.Id || profissional.Id == undefined){
      console.log("Erro ao excluir: Serviço inválido.");
      return;
    }

    let retorno = this.profissionalService.deleteProfissional(profissional.Id);
    if(!retorno){
      console.log("Erro ao excluir: Serviço não existe.")
    } else {
      console.log(`Serviço excluído: ${profissional.Id}`)
    }

    this.buscarProfissinais();
  }

}