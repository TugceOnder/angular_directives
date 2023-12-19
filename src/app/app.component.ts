import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentPage=0;
images=[

  {
    title:'Deniz Kum Gunes',
    url:'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  {
    title:'Belgrad Ormanı',
    url:'https://images.unsplash.com/photo-1642106224780-6373c7fdf837?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVsZ3JhZCUyMG9ybWFuJUM0JUIxfGVufDB8fDB8fHww'
  },

  
  {
    title:'Maslak',
    url:'https://images.unsplash.com/photo-1573215123219-3df36ac842a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFzbGFrfGVufDB8fDB8fHww'
  },

  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },


  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
  
  
  
  {
    title:'Uludağ',
    url:'https://images.unsplash.com/photo-1599383547268-06c2cc380767?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VWx1ZGElQzQlOUZ8ZW58MHx8MHx8fDA%3Dhttps://imagesxlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2h8ZW58MHx8MHx8fDA%3D'
  },
]


PageIndex(index : number)
{
  return Math.abs(this.currentPage-index)<5
}
}
