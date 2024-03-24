import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    MatInputModule,
    MatButtonModule, 
    MatIconModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
