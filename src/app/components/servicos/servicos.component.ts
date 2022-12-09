import { Component, OnInit } from '@angular/core';
import { Servico } from '../../models/servico';
import { ServicoService } from '../../services/Servico.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  listaServicos: Servico[] = []

  constructor(private servicoService: ServicoService) { }

  ngOnInit() {
  }

  buscaServicos(){
    this.listaServicos = this.servicoService.getAllServico();
  }

}