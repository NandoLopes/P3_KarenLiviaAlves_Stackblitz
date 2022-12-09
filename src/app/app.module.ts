import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgendamentosComponent } from './components/agendamentos/agendamentos.component';
import { CadastroProfissionalComponent } from './components/cadastro-profissional/cadastro-profissional.component';
import { CadastroClienteComponent } from './components/cadastro-cliente/cadastro-cliente.component';
import { SairComponent } from './components/sair/sair.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { CadastroClienteService } from './services/cadastro-cliente.service';
import { CadastroProfissionalService } from './services/cadastro-profissional.service';
import { ServicoService } from './services/Servico.service';
import { LoginService } from './services/login.service';
import { CadastroServicoComponent } from './components/servicos/cadastro-servico/cadastro-servico.component';
import { ServicosComponent } from './components/servicos/servicos.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cadastro-servico'
        //component: HomeComponent,
      },
      {
        path: 'agendamentos',
        component: AgendamentosComponent
      },
      {
        path: 'cadastro-profissional',
        component: CadastroProfissionalComponent
      },
      {
        path: 'cadastro-cliente',
        component: CadastroClienteComponent
      },
      {
        path: 'sair',
        component: HomeComponent
      },
      {
        path: 'sobre',
        component: SobreComponent
      },
      {
        path: 'app-servicos',
        component: ServicosComponent
      },
      {
        path: 'servicos',
        component: ServicosComponent
      },
      {
        path: 'cadastro-servico/:id',
        component: CadastroServicoComponent
      },
      {
        path: 'cadastro-servico',
        component: CadastroServicoComponent
      },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    AgendamentosComponent,
    CadastroProfissionalComponent,
    CadastroClienteComponent,
    HomeComponent,
    NavbarComponent,
    SairComponent,
    SobreComponent,
    ServicosComponent,
    CadastroServicoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR',
    },
    CadastroClienteService,
    CadastroProfissionalService,
    ServicoService,
    LoginService,
  ],
})
export class AppModule {}
