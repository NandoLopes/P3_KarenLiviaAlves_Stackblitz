import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Servico } from '../../../models/servico';
import { ServicoService } from '../../../services/Servico.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.css'],
})
export class CadastroServicoComponent implements OnInit {

  servico = new Servico();

  registerForm: FormGroup;

  constructor(
    private servicoService: ServicoService,
    private fb: FormBuilder) {  }

  ngOnInit() {
    this.validacao();
  }

  cadastrar() {
    if(this.registerForm.valid){
      this.servico = {...this.servico, ...this.registerForm.value};
      this.servico.Id ? this.editarServico() : this.criarServico();
    }
  }

  criarServico() {
    console.log(this.servicoService.setServico(this.servico));
  }

  editarServico(){
    console.log("implementar");
  }

  validacao(){
    this.registerForm = this.fb.group({
      Id: [],
      Nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
      Duracao: ['', Validators.required],
      Valor: ['', [Validators.required, Validators.min(10)]]
    });
  }
}
