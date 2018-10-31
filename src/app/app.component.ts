import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dde-root',
  template: `
  <router-outlet>
  </router-outlet>
  `
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private socket: Socket, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.socket.on('food_ready', (res) => {
      this.toastr.warning(res.name, '', {
        disableTimeOut: true,
        closeButton: true,
        easing: 'ease-in'
      });
    });

    this.socket.on('ready', (res) => {
      console.log(JSON.parse(res).message);
    });
  }
}
