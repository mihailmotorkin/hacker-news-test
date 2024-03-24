import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { FrontPageComponent } from './pages/front-page/front-page.component';
import { NewsComponent } from './components/news/news.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommentsTreeComponent } from './components/comments-tree/comments-tree.component';
import { NewsCommentsComponent } from './components/news-comments/news-comments.component';
import { DomainPipe } from './pipes/domain.pipe';


const routes = [{
    path: '',
    component: FrontPageComponent
  }, 
  {
    path: 'comments/:id',
    component: CommentsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    NewsComponent,
    CommentsComponent,
    HeaderComponent,
    CommentsTreeComponent,
    NewsCommentsComponent,
    DomainPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatButtonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatProgressSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
