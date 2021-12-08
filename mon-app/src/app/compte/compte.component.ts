import { NumberSymbol } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.css']
})
export class CompteComponent implements OnInit {

  nom: string = "";
  prenom: string = "";
  adresse: string = "";
  code: string = "";
  ville: string = "";
  tel: string = "";
  mail: string = "";
  login: string = "";
  mdp: string = "";
  mdpConfirm: string = "";

  valideForm: boolean = true;

  nomV: string = "";
  prenomV: string = "";
  adresseV: string = "";
  codeV: string = "";
  villeV: string = "";
  telV: string = "";
  mailV: string = "";
  loginV: string = "";
  mdpV: string = "";
  mdpConfirmV: string = "";



  constructor() { }

  ngOnInit(): void {
  }

  formOnValidate(): void {  
    if(!/^[a-zA-Z]+$/.test(this.nom)){
      alert("Erreur : Nom invalide.");
      this.valideForm = false;
    }
    if(!/^[a-zA-Z]+$/.test(this.prenom)){
      alert("Erreur : Prenom invalide.");
      this.valideForm = false;
    }
    if(!/^[0-9]+$/.test(this.code) && !(this.code.length > 5)){
      alert("Erreur : Code Postal invalide.");
      this.valideForm = false;
    }
    if(!/^[a-zA-Z]+$/.test(this.ville)){
      alert("Erreur : Ville invalide.");
      this.valideForm = false;
    }
    if(!/^[0-9]+$/.test(this.tel) && !(this.tel.length == 10)){
      alert("Erreur : Telephone invalide.");
      this.valideForm = false;
    }
    const regularExpressionMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regularExpressionMail.test(this.mail.toLowerCase())){
      alert("Erreur : Adresse mail invalide.")
      this.valideForm = false;
    }
    if(this.mdp != this.mdpConfirm){
      alert("Erreur : Mot de passe de confirmation invalide.")
      this.valideForm = false;
    }

    this.nomV = this.nom;
    this.prenomV = this.prenom;
    this.adresseV = this.adresse;
    this.codeV = this.code;
    this.villeV = this.ville;
    this.telV = this.tel;
    this.mailV = this.mail;
    this.loginV = this.login;
    this.mdpV = this.mdp;
    
  }

}
