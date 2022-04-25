import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../review';
import { ReviewService } from '../review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  reviews: Review[];
  selectedReview: Review;

  constructor(
    private reviewService: ReviewService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getReviews();
  }

  getReviews(): void{
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
  }

  onSelect(review: Review): void {
    this.selectedReview = review;
  }

}
