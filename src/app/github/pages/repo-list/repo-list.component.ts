import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../core/services/github.service';
import { Repository } from '../../../core/models/repository';
import { IRepository } from '../../../core/interfaces/i-repository';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrl: './repo-list.component.css'
})
export class RepoListComponent implements OnInit{
  repositories: Repository[] = [];
  username: string = 'farrellakbar';

  constructor(private githubService: GithubService) {}
  ngOnInit(): void {
    this.githubService.getAllRepos(this.username).subscribe((responRepo: IRepository[]) => {
        this.repositories = responRepo;
    })
  }
}
