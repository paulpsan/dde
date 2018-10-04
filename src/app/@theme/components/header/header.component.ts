import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DDECalendarComponent } from '../../../pages/calendar/ddecalendar.module';

@Component({
  selector: 'app-dde-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(private modalService: NgbModal) { }

  ngOnInit() { }

  openCalendar() {
    const modalRef = this.modalService.open(DDECalendarComponent);
  }
}
