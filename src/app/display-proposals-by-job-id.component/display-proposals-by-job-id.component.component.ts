import { Component } from '@angular/core';
import { DashboredServiceService } from '../Services/dashbored-service.service';
import { ActivatedRoute } from '@angular/router';
import { proposal } from '../Interfaces/proposal';

@Component({
  selector: 'app-display-proposals-by-job-id.component',
  templateUrl: './display-proposals-by-job-id.component.component.html',
  styleUrls: ['./display-proposals-by-job-id.component.component.scss'],
})
export class DisplayProposalsByJobIdComponentComponent {
  ProposalsToSpecificJob: proposal[] = [
    {
      price: 0,
      discription: '',
      date: new Date(),
      userId: '',
      helpRequestId: 0,
    },
  ];
  proposal: proposal[] = [];
  id: any;
  constructor(
    private _DashboredServiceService: DashboredServiceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    console.log(this.id);
    this._DashboredServiceService.DisplayProposalWithJobId(this.id).subscribe({
      next: (data) => (this.proposal = data),
      error: (err) => console.log(err),
    });
  }
}
