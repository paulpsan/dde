import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DDECalendarComponent } from '../calendar/ddecalendar.component';

@Component({
  selector: 'app-dde-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  openCalendar() {
    const modalRef = this.modalService.open(DDECalendarComponent, {
      size: 'lg',
      centered: true
    });
  }
}
