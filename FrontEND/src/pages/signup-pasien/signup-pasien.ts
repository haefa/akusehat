import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { LoginPasien } from '../login-pasien/login-pasien';
import { AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Data } from '../../providers/data';
import { NgForm } from '@angular/forms';
import { Vibration } from '@ionic-native/vibration';

@Component({
  selector: 'page-signup-pasien',
  templateUrl: 'signup-pasien.html',
})
export class SignupPasien {

  name:string;
  email:string;
  password:string;
  password2:string;
  sex:string;
  telephone:string;
  address:string;

  age:number;
  weight:number;
  height:number;
  allergy:string;
  disability:string;
  operation:string;
  description:string;
  
  
  submitted= false;
  submitted2= true;


  constructor(private vibration: Vibration,public navCtrl: NavController, public http: Http, public alertCtrl: AlertController, public navParams: NavParams, public data: Data) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPasien');
  }

  akunBaru(){

  	let alert = this.alertCtrl.create({
      title: 'Selamat Kamu Terdaftar!',
      subTitle: 'silahkan login.',
      buttons: ['OK']
    });
    alert.present();


  	this.navCtrl.push(LoginPasien);
  }

  daftar(){

    let input = JSON.stringify({

        name:this.name,
        email:this.email,
        password:this.password,
        sex:this.sex,
        telephone:this.telephone,
        address:this.address,
        age:this.age,
        weight:this.weight,
        height:this.height,
        allergy:this.allergy,
        operation:this.operation,
        disability:this.disability,
        description:this.description
        

      });
console.log(input);
    this.http.post(this.data.BASE_URL+"/register_patients.php", input).subscribe(data => {
           console.log(data);
           let response = data.json();
           
           if(response.status=="200"){

           }
           else
           {
             let alert = this.alertCtrl.create({
                title: 'Gagal Membuat Akun!',
                subTitle: 'Periksa kembali data.',      
                buttons: ['OK']
              });
              alert.present();
           }
           console.log(response);
           
        }, err => { 
           
        });

  }





  signup(form: NgForm){
    this.submitted = true;
    if(form.valid){
      let input = JSON.stringify({
        name:this.name,
        email:this.email,
        password:this.password,
        sex:this.sex,
        telephone:this.telephone,
        address:this.address,
        age:this.age,
        weight:this.weight,
        height:this.height,
        allergy:this.allergy,
        operation:this.operation,
        disability:this.disability,
        description:this.description

         
      });
      if(this.password==this.password2){
        // this.submitted2 = true;
        this.http.post(this.data.BASE_URL+"/register_patients.php",input).subscribe(data => {
        let response = data.json();
        
	  if(response.status=="200"){

       
       // this.data.login(response.data);
        this.akunBaru();
      }
      else
           {
             let alert = this.alertCtrl.create({
                title: 'Gagal Membuat Akun',
                subTitle: 'Periksa kembali data.',      
                buttons: ['OK']
              });
              alert.present();
           }

      });
    }
    else {
         this.vibration.vibrate(1000);
        this.submitted2 = false;
      }
    }
  }




}
