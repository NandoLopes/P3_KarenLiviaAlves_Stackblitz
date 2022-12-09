import { AnimationKeyframesSequenceMetadata } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Servico } from '../../../models/servico';
import { ServicoService } from '../../../services/Servico.service';

@Component({
  selector: 'app-cadastro-servico',
  templateUrl: './cadastro-servico.component.html',
  styleUrls: ['./cadastro-servico.component.css'],
})
export class CadastroServicoComponent implements OnInit {

  servico = new Servico();
  routeId: any;

  registerForm: FormGroup;

  constructor(
    private servicoService: ServicoService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router) {  }

  ngOnInit() {
    this.validacao();
    
    this.routeId =  this.activatedRoute.snapshot.paramMap.get("id");
    if(this.routeId && this.routeId > 0){
      this.carregarServico(this.routeId);
    }
  }

  cadastrar() {
    if(this.registerForm.valid){
      this.servico = {...this.servico, ...this.registerForm.value};
      this.servico.Id ? this.editarServico(this.servico) : this.criarServico(this.servico);

      this.router.navigate(
        ['/servicos']
      );
    }
  }

  criarServico(servico: Servico) {
    console.log(this.servicoService.setServico(servico));
  }

  editarServico(servico: Servico){
    console.log(this.servicoService.putServico(servico));
  }

  carregarServico(id: number){
    this.servico = this.servicoService.getServicoById(id);
    this.registerForm.patchValue(this.servico);
  }

  validacao(){
    this.registerForm = this.fb.group({
      Id: [],
      Nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      Duracao: ['', Validators.required],
      Valor: ['', [Validators.required, Validators.min(10)]]
    });
  }
}
