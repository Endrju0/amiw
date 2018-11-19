import { Component } from '@angular/core';
import { ThoughtsService } from './thoughts.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'złote myśli';
  public text: String = 'szczerozłota myśl';
  public thoughts: Array<String> = [];

  constructor(
    private thoughtsService: ThoughtsService
  ) {}

  private ngOnInit() {
    this.thoughts = this.thoughtsService.fetchThoughts()
  }

  public addThought(): void {
    this.thoughts.push(this.text)
    console.log(this.thoughts)
    this.text = ""
    // localStorage.setItem("thoughtsList", JSON.stringify(this.thoughts))
    this.thoughtsService.saveThoughts(this.thoughts)
  }

  public removeThought(i): void {
    this.thoughts.splice(i, 1)
    this.thoughtsService.saveThoughts(this.thoughts)
  }
}