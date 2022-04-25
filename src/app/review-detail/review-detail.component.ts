import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {

  @Input() review: Review;

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        const naslov = params.get('naslov');
        return this.reviewService.getReview(naslov);
      }
      )
    ).subscribe((review: Review) => {
      this.review = review;
    });
  }

}
