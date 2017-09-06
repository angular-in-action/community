import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ForumsService } from '../services/forums.service';
import { Forum } from '../services/data';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  forum: Forum;

  constructor(private forumsService: ForumsService) { }

  ngOnInit() {}

}
