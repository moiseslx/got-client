import { Component, OnInit } from '@angular/core';
import { LoginDTO } from '../../interface/login';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  login: LoginDTO = {
    email: '',
    password: ''
  }

  constructor(
    private service: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.service.login(this.login).subscribe({
      /* Termina a função de callback. */
    })
  }
}
