import { Component,ViewChild } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  taskName: string = "";
  taskList: string[] = ["hola", ];
  indexAlert: number = 0;
  @ViewChild('taskInput') input: any;

  /* public updateButtons = [
    {
      text: 'Cancelar'
    },
    {
      text: 'Aceptar',
      handler: (data: any) => {
        if (data.updateTask.length > 0){
          this.taskList[this.indexAlert] = data.updateTask
        }
        
      }
    }
  ];
  public updateInputs =[
    {
      placeholder: this.taskList[this.indexAlert],
      name: 'updateTask'
    },
  ]
 */
  constructor( public navCtrl: NavController, public alertCtrl: AlertController) {}
  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task)
      this.taskName = ""
    }
  }
  deleteTask(index: number) {
    this.taskList.splice(index, 1)
  }

  async updateTask(index: number){
    let alert = await this.alertCtrl.create({
        header: 'Update Task?',
        message: 'Type in your new task to update.',
        inputs: [{ name: 'editTask', placeholder: this.taskList[index] }],
        buttons: [{ text: 'Cancel', role: 'cancel' },
                  { text: 'Update', handler: data => {
                      this.taskList[index] = data.editTask; }
                  }
                 ]
    })
     await alert.present()
  }

  ionViewDidLoad(){
    setTimeout(() => {
        this.input.setFocus();
    },350);
}
 
}
