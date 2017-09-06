import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Thread } from '../services/data';

@Component({
  selector: 'app-threads',
  templateUrl: './threads.component.html',
  styleUrls: ['./threads.component.css']
})
export class ThreadsComponent implements OnInit {
  threads: Thread[];

  constructor() { }

  ngOnInit() {}
}
