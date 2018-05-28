import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Http,Response } from '@angular/http';
import { ISubscription } from 'rxjs/Subscription';

import { GreetingService } from './greetingService';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css']
})
export class GreetingComponent implements OnInit {

	private greeting: any;

  	constructor(private greetingService : GreetingService, 
  				private route: ActivatedRoute, 
  				private router: Router) { }

  	ngOnInit() { }

  	onGreet(form: NgForm) {
		this.greetingService.Greet(form.value.name)
				.subscribe((res: Response) => { this.greeting = res; });
	}
}