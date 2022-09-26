import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Credenciais } from 'src/app/models/credenciais';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cred:Credenciais = {
    email:'',
    senha:''
  }

  email = new FormControl(null,Validators.email);
  senha = new FormControl(null, Validators.minLength(3));

  constructor(private toast: ToastrService,
    private service: AutenticacaoService) { }

  ngOnInit(): void {
  }

  logar(){
    this.service.autenticar(this.cred).subscribe(resposta => {
      this.toast.info(resposta.headers.get('Autorization'))
    })
  }

  validaCampos(): boolean{
    if(this.email.valid && this.senha.valid){
      return true
    }else{
      return false
    }
  }
}
